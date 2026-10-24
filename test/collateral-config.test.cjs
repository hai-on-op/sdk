const assert = require('node:assert/strict')
const { test } = require('node:test')
const { ethers } = require('ethers')
const { Geb, BasicActions, createTokenList, getTokenList, getAddressList, fetchLiquidationData } = require('../lib')
const { ContractApis } = require('../lib/api/contract-apis')
const types = require('../lib/typechained')
const liquidationArtifact = require('../lib/artifacts/contracts/VirtualLiquidationData.sol/VirtualLiquidationData.json')

// Synthetic unit-test identities only. No new collateral is added to the SDK's deployment defaults.
const collateral = {
    deployment: 'mainnet',
    symbol: 'TESTAEROV2',
    label: 'test new haiAERO',
    address: '0x1111111111111111111111111111111111111111',
    collateralJoin: '0x2222222222222222222222222222222222222222',
    collateralAuctionHouse: '0x3333333333333333333333333333333333333333',
    bytes32String: ethers.utils.formatBytes32String('TESTAEROV2'),
    decimals: 18,
    isCollateral: true,
    hasRewards: false,
}
const config = () => ({ additionalCollaterals: [{ ...collateral }] })
const proxyAddress = '0x4444444444444444444444444444444444444444'
const owner = '0x5555555555555555555555555555555555555555'
const provider = () => {
    const result = new ethers.providers.StaticJsonRpcProvider('http://127.0.0.1:1', { name: 'test', chainId: 10 })
    result.send = async () => {
        throw new Error('Unexpected network access in unit test')
    }
    return result
}
const decodeProxy = (transaction, actionFactory = types.IBasicActions__factory) => {
    assert.equal(transaction.to.toLowerCase(), proxyAddress)
    const outer = types.IHaiProxy__factory.createInterface().parseTransaction(transaction)
    return { target: outer.args[0], action: actionFactory.createInterface().parseTransaction({ data: outer.args[1] }) }
}

test('advertises the configuration capability on both Geb and proxy actions', () => {
    assert.equal(Geb.collateralConfigurationVersion, 1)
    assert.equal(BasicActions.collateralConfigurationVersion, 1)
})

test('defaults retain legacy identities and registries remain isolated across instances', () => {
    const original = JSON.parse(JSON.stringify(getTokenList('mainnet')))
    const configured = new Geb('mainnet', provider(), config())
    const plain = new Geb('mainnet', provider())
    assert.deepEqual(plain.tokenList, original)
    assert.equal(plain.tokenList.TESTAEROV2, undefined)
    assert.deepEqual(configured.tokenList.HAIVELOV2, original.HAIVELOV2)
    assert.deepEqual(configured.tokenList.HAIAERO, original.HAIAERO)
    configured.tokenList.HAIAERO.label = 'instance edit'
    assert.deepEqual(getTokenList('mainnet'), original)
    assert.deepEqual(plain.tokenList, original)
})

test('direct ContractApis and Geb wire additional join, auction and liquidation metadata consistently', () => {
    const geb = new Geb('mainnet', provider(), config())
    for (const apis of [geb.contracts, new ContractApis('mainnet', provider(), config())]) {
        assert.equal(apis.tokenCollateralJoin.TESTAEROV2.address.toLowerCase(), collateral.collateralJoin)
        assert.equal(
            apis.tokenCollateralAuctionHouse.TESTAEROV2.address.toLowerCase(),
            collateral.collateralAuctionHouse
        )
        assert.equal(
            apis.tokenCollateralJoin.HAIAERO.address,
            ethers.utils.getAddress(getTokenList('mainnet').HAIAERO.collateralJoin)
        )
    }
    assert.equal(geb.liquidations.tokenList.TESTAEROV2.bytes32String, collateral.bytes32String)
})

test('all existing network constructors remain supported', () => {
    for (const network of ['mainnet', 'optimism-goerli', 'optimism-sepolia']) {
        const geb = new Geb(network, provider())
        assert.deepEqual(geb.tokenList, getTokenList(network))
        assert.ok(Object.keys(geb.contracts.tokenCollateralJoin).length > 0)
    }
})

test('rejects wrong networks, invalid addresses and incomplete collateral metadata', () => {
    const invalid = [
        { deployment: 'optimism-sepolia' },
        { address: ethers.constants.AddressZero },
        { collateralJoin: '' },
        { collateralAuctionHouse: 'not-an-address' },
        { collateralJoin: collateral.address },
        { bytes32String: ethers.constants.HashZero },
        { bytes32String: '0x1234' },
        { decimals: 19 },
        { decimals: -1 },
        { decimals: 1.5 },
        { symbol: '__proto__' },
        { label: '' },
        { isCollateral: false },
        { hasRewards: undefined },
    ]
    for (const patch of invalid) {
        assert.throws(() => createTokenList('mainnet', { additionalCollaterals: [{ ...collateral, ...patch }] }))
    }
})

test('rejects any override or duplicate legacy symbol, token, collateral type, join or auction', () => {
    const legacy = getTokenList('mainnet').HAIAERO
    for (const field of ['symbol', 'address', 'bytes32String', 'collateralJoin', 'collateralAuctionHouse']) {
        assert.throws(
            () => createTokenList('mainnet', { additionalCollaterals: [{ ...collateral, [field]: legacy[field] }] }),
            /conflicts/
        )
    }
    assert.throws(
        () => createTokenList('mainnet', { additionalCollaterals: [collateral, { ...collateral }] }),
        /conflicts/
    )
})

test('provider-only getProxyAction preserves captured config despite caller or public registry mutation', async () => {
    const rpc = provider()
    const configuration = config()
    const geb = new Geb('mainnet', rpc, configuration)
    rpc.call = async (request) => {
        assert.equal(request.to.toLowerCase(), getAddressList('mainnet').PROXY_FACTORY.toLowerCase())
        const decoded = types.IHaiProxyFactory__factory.createInterface().parseTransaction(request)
        assert.equal(decoded.name, 'proxies')
        assert.equal(decoded.args[0].toLowerCase(), owner)
        return ethers.utils.defaultAbiCoder.encode(['address'], [proxyAddress])
    }
    configuration.additionalCollaterals[0].collateralJoin = owner
    configuration.additionalCollaterals.length = 0
    geb.tokenList.TESTAEROV2.collateralJoin = owner
    const actions = await geb.getProxyAction(owner)
    assert.equal(actions.getCollateralToken(collateral.symbol).collateralJoin, collateral.collateralJoin)
    const snapshot = actions.getCollateralToken(collateral.symbol)
    snapshot.collateralJoin = owner
    assert.equal(actions.getCollateralToken(collateral.symbol).collateralJoin, collateral.collateralJoin)
    const decoded = decodeProxy(await actions.openLockTokenCollateralAndGenerateDebt('TESTAEROV2', 10, 2))
    assert.equal(decoded.action.name, 'openLockTokenCollateralAndGenerateDebt')
    assert.equal(decoded.action.args[2].toLowerCase(), collateral.collateralJoin)
    assert.equal(decoded.action.args[4], collateral.bytes32String)
})

test('new and legacy vault create, top-up, withdraw and repay calls retain their exact joins and types', async () => {
    const actions = new BasicActions(proxyAddress, 'mainnet', provider(), config())
    for (const token of [collateral, getTokenList('mainnet').HAIAERO, getTokenList('mainnet').HAIVELOV2]) {
        const open = decodeProxy(await actions.openSAFE(token.symbol, owner))
        assert.equal(open.action.args[1], token.bytes32String)
        for (const method of ['lockTokenCollateral', 'freeTokenCollateral']) {
            const decoded = decodeProxy(await actions[method](token.symbol, 42, 10))
            assert.equal(decoded.target, ethers.utils.getAddress(getAddressList('mainnet').PROXY_BASIC_ACTIONS))
            assert.equal(decoded.action.name, method)
            assert.equal(decoded.action.args[1].toLowerCase(), token.collateralJoin.toLowerCase())
        }
        const repay = decodeProxy(await actions.repayAllDebtAndFreeTokenCollateral(token.symbol, 42, 10))
        assert.equal(repay.action.args[2].toLowerCase(), token.collateralJoin.toLowerCase())
    }
})

test('auction purchase and global settlement use configured collateral endpoints', async () => {
    const actions = new BasicActions(proxyAddress, 'mainnet', provider(), config())
    const auction = decodeProxy(
        await actions.buyCollateral(collateral.symbol, 1, 2, 3),
        types.ICollateralBidActions__factory
    )
    assert.equal(auction.action.args[1].toLowerCase(), collateral.collateralJoin)
    assert.equal(auction.action.args[2].toLowerCase(), collateral.collateralAuctionHouse)
    const settlement = decodeProxy(
        await actions.freeCollateralGlobalSettlement(collateral.symbol, 42),
        types.IGlobalSettlementActions__factory
    )
    assert.equal(settlement.action.args[2].toLowerCase(), collateral.collateralJoin)
})

test('liquidation batching queries authoritative OracleRelayer for the new collateral type without price overrides', async () => {
    const rpc = provider()
    const geb = new Geb('mainnet', rpc, config())
    const sentinel = new Error('stop after validating encoded oracle query')
    rpc.call = async (request) => {
        assert.ok(request.data.startsWith(liquidationArtifact.bytecode))
        const input = '0x' + request.data.slice(liquidationArtifact.bytecode.length)
        const decoded = ethers.utils.defaultAbiCoder.decode(
            ['address', 'address', 'address', 'address', 'bytes32[]'],
            input
        )
        assert.equal(decoded[0], geb.contracts.oracleRelayer.address)
        assert.ok(decoded[4].includes(collateral.bytes32String))
        assert.ok(decoded[4].includes(getTokenList('mainnet').HAIAERO.bytes32String))
        throw sentinel
    }
    await assert.rejects(fetchLiquidationData(geb, geb.tokenList), (error) => error === sentinel)
})
