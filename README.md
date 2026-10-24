[![image](https://img.shields.io/npm/v/@hai-on-op/sdk.svg?style=flat-square)](https://www.npmjs.org/package/@hai-on-op/sdk)

# SDK

Library to interact with the GEB smart contracts. Manage your safes, mint RAI, inspect the system state, and much more.

The library is written in Typescript with full typing support. It allows access to the low level API to directly interact with the contracts.

## Install

```
npm install @hai-on-op/sdk
```

### Additional collateral configuration

`Geb` accepts an optional third argument of type `CollateralConfiguration`. Supply a reviewed `AdditionalCollateral` entry with its SDK `deployment`, distinct `symbol`, `address`, `bytes32String`, `collateralJoin`, `collateralAuctionHouse`, `decimals`, `label`, `isCollateral: true` and `hasRewards`:

```typescript
import { Geb, AdditionalCollateral } from '@hai-on-op/sdk'

// Load metadata from your application's reviewed deployment manifest.
const collateral: AdditionalCollateral = reviewedDeployment.collateral
const geb = new Geb('mainnet', provider, { additionalCollaterals: [collateral] })
const proxy = await geb.getProxyAction(ownerAddress)
const transaction = await proxy.lockTokenCollateral(collateral.symbol, safeId, amount)
```

This configuration is local to the instance and propagates to contract APIs, liquidation metadata, and proxy actions. Direct `ContractApis` and `BasicActions` construction accepts the same configuration as its third and fourth argument, respectively. New entries cannot replace or alias existing token, collateral type, join, auction, or symbol identities. Mutating the input configuration after construction cannot redirect later proxy actions. Existing collateral metadata is unchanged. `Geb.collateralConfigurationVersion` and `BasicActions.collateralConfigurationVersion` are `1`; applications can require these capabilities before activation and inspect `proxy.getCollateralToken(symbol)` to confirm the captured proxy configuration without mutating it.

Configuration validates identity and shape; it does not certify an on-chain deployment. Before enabling it in an app, verify the intended network and deployed contracts, join token/type/SAFEEngine binding, auction binding, live OracleRelayer parameters and governance adoption. Price data continues to come from the protocol's OracleRelayer, including an existing AERO Pyth feed where governance has configured that feed. This SDK does not override oracle prices or add new AERO collateral addresses by default. A new entry's rewards flag is metadata, not evidence that a rewards distributor is active.

Build before running the offline regression suite: `yarn build && yarn test`. Tests use synthetic addresses and never submit transactions.


## Examples

This is a complete example of how you can inspect a SAFE and also open a new one using your own proxy:
```typescript
import { ethers, utils as ethersUtils } from 'ethers'
import { Geb, utils } from '@hai-on-op/sdk'

// Setup Ether.js
const provider = new ethers.providers.JsonRpcProvider(
    'http://kovan.infura.io/<API KEY>'
)
const wallet = new ethers.Wallet('0xdefiisawesome...', provider)

// Create the main GEB object
const geb = new Geb('kovan', provider)

// Get a SAFE
const safe = await geb.getSafe(4)
console.log(`Safe id 4 has: ${utils.wadToFixed(safe.debt).toString()} RAI of debt.`)
console.log(`It will get liquidated if ETH price falls below ${(await safe.liquidationPrice())?.toString()} USD.`)

// Open a new SAFE, lock ETH and draw RAI in a single transaction using a proxy
// Note: Before doing this you need to create your own proxy

// We first need to check that the system didn't reach the debt ceiling so that we can
// mint more RAI.
const globalDebt = await geb.contracts.safeEngine.globalDebt()
const debtCeiling = await geb.contracts.safeEngine.globalDebtCeiling()
const raiToDraw = ethersUtils.parseEther('15')
if(globalDebt.add(raiToDraw).gt(debtCeiling)) {
    throw new Error('Debt ceiling too low, not possible to draw this amount of RAI.')
}

// We're good to mint some RAI! 
const proxy = await geb.getProxyAction(wallet.address)
const tx = proxy.openLockETHAndGenerateDebt(
    ethersUtils.parseEther('1'), // Lock 1 Ether
    utils.ETH_A,                 // Of collateral ETH
    raiToDraw                    // And draw 15 RAI
)

tx.gasPrice = ethers.BigNumber.from('80').mul('1000000000') // Set the gas price to 80 Gwei
const pending = await wallet.sendTransaction(tx) // Send the transaction
console.log(`Transaction ${pending.hash} waiting to be mined...`)
await pending.wait() // Wait for it to be mined
console.log('Transaction mined, safe opened!')
```
## Additional examples
In the examples below we assume the variables are defined like in the complete example above.

1. [Deploy a new proxy](#deploy-a-new-proxy)
2. [Partial repay of safe debt](#partial-repay-of-safe-debt)
3. [Complete repay of safe debt](#complete-repay-of-safe-debt)
4. [Withdraw Ether collateral](#withdraw-ether-collateral)
5. [Make direct contract calls](#make-direct-contract-calls)

### Deploy a new proxy

```typescript
const tx = geb.deployProxy()
await wallet.sendTransaction(tx)
```

### Partial repay of safe debt
```typescript
const proxy = await geb.getProxyAction("0xdefidream...")

// You first need to approve your proxy to spend your RAI
let tx =  geb.contracts.systemCoin.approve(proxy.proxyAddress, ethers.constants.MaxUint256)
await wallet.sendTransaction(tx)

// Repay 1 RAI of debt to SAFE #4
tx = proxy.repayDebt(4, ethersUtils.parseEther('1'))
await wallet.sendTransaction(tx)
```

### Complete repay of safe debt
```typescript
const proxy = await geb.getProxyAction("0xdefidream...")

// You first need to approve your proxy to spend your RAI
let tx =  geb.contracts.systemCoin.approve(proxy.proxyAddress, ethers.constants.MaxUint256)
await wallet.sendTransaction(tx)

// Repay all debt of SAFE #4
tx = proxy.repayAllDebt(4)
await wallet.sendTransaction(tx)
```

### Withdraw Ether collateral
```typescript
const proxy = await geb.getProxyAction("0xdefidream...")
// Unlock 1 ETH of collateral from SAFE #4 and transfer it to its owner 
const tx = proxy.freeETH(4, ethersUtils.parseEther('1'))
await wallet.sendTransaction(tx)
```
### Repay all debt and withdraw all collateral
```typescript
const proxy = await geb.getProxyAction("0xdefidream...")
const safe = await geb.getSafe(4)

// You first need to approve your proxy to spend your RAI
let tx =  geb.contracts.systemCoin.approve(proxy.proxyAddress, ethers.constants.MaxUint256)
await wallet.sendTransaction(tx)

// Pay back everything and get your ETH back into your wallet
const tx = proxy.repayAllDebtAndFreeETH(4, safe.collateral)
await wallet.sendTransaction(tx)
```

### Make direct contract calls
The SDK exposes all contract APIs of all core contracts in the `Geb.contracts` object. Solidity functions that are read-only (`view` or `pure`) return asynchronously the expected value from the chain. State changing functions will return a transaction object to passed to `ether.js` or `web3`.
```typescript
// Fetch some system parameters from their respective contracts
const surplusBuffer = await geb.contracts.accountingEngine.surplusBuffer()
const { stabilityFee } = await geb.contracts.taxCollector.collateralTypes(utils.ETH_A)

// Liquidate a Safe
const tx = geb.contracts.liquidationEngine.liquidateSAFE(utils.ETH_A,"0xdefidream...");
await wallet.sendTransaction(tx)
```
