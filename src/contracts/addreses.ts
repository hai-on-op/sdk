import { WETH, OP } from '../utils'

// All keys are mandatory
export type ContractKey =
    | 'ETH_FROM'
    | 'STARTING_BLOCK_NUMBER'
    | 'PROXY_DEPLOYER'
    | 'COIN_TYPE'
    | 'GOVERNANCE_TYPE'
    | 'MULTICALL'
    | 'FAUCET'
    | 'GEB_MULTISIG'
    | 'GEB_DEPLOY'
    | 'GEB_PROT'
    | 'GEB_SAFE_ENGINE'
    | 'GEB_TAX_COLLECTOR'
    | 'GEB_LIQUIDATION_ENGINE'
    | 'GEB_ACCOUNTING_ENGINE'
    | 'GEB_COIN_JOIN'
    | 'GEB_SURPLUS_AUCTION_HOUSE'
    | 'GEB_DEBT_AUCTION_HOUSE'
    | 'GEB_COIN'
    | 'GEB_ORACLE_RELAYER'
    | 'GEB_GLOBAL_SETTLEMENT'
    | 'GEB_STABILITY_FEE_TREASURY'
    | 'BASIC_ACTIONS'
    | 'PROXY_ACTIONS_GLOBAL_SETTLEMENT'
    | 'SAFE_MANAGER'
    | 'GET_SAFES'
    | 'PROXY_FACTORY'
    | 'PROXY_REGISTRY'
    | 'ETH'
    | 'MEDIANIZER_ETH'
    | 'GEB_JOIN_ETH_A'
    | 'GEB_COLLATERAL_AUCTION_HOUSE_ETH_A'
    | 'PROXY_DEPLOYER'
    | 'GEB_RRFM_SETTER'
    | 'GEB_RRFM_SETTER_RELAYER'
    | 'MEDIANIZER_RAI'
    | 'GEB_RRFM_CALCULATOR'
    | 'GEB_DUMMY_RRFM_CALCULATOR'
    | 'SPOT_RAI'
    | 'PROXY_DEBT_AUCTION_ACTIONS'
    | 'PROXY_SURPLUS_AUCTION_ACTIONS'
    | 'GEB_JOIN_WETH'
    | 'GEB_COLLATERAL_AUCTION_HOUSE_WETH'
    | 'GEB_JOIN_OP'
    | 'GEB_COLLATERAL_AUCTION_HOUSE_OP'

export type ContractList = {
    [key in ContractKey]: string
}

export declare type GebDeployment = 'mainnet' | 'optimism-goerli'

const addresses: Record<GebDeployment, ContractList> = {
    mainnet: {
        ETH_FROM: '0x7FAfc11677649DB6AbFEC127B4B776D585520ae1',
        STARTING_BLOCK_NUMBER: '11848304',
        PROXY_DEPLOYER: '0x631e38D6Dc0F4A26F6BE0d3d0E4ebA3d02033aB4',
        COIN_TYPE: 'INDEX',
        GOVERNANCE_TYPE: 'MULTISIG-SAFE',
        MULTICALL: '0x51812e07497586ce025D798Bb44b6d11bBEe3a01',
        FAUCET: '0x0000000000000000000000000000000000000000',
        GEB_MULTISIG: '0x427A277eA53e25143B3b509C684aA4D0EB8bA01b',
        GEB_DEPLOY: '0x24AcC85528e6dd5B9C297fb8821522D36B1Ae09f',
        GEB_PROT: '0x6243d8CEA23066d098a15582d81a598b4e8391F4',
        GEB_SAFE_ENGINE: '0xCC88a9d330da1133Df3A7bD823B95e52511A6962',
        GEB_TAX_COLLECTOR: '0xcDB05aEda142a1B0D6044C09C64e4226c1a281EB',
        GEB_LIQUIDATION_ENGINE: '0x4fFbAA89d648079Faafc7852dE49EA1dc92f9976',
        GEB_ACCOUNTING_ENGINE: '0xcEe6Aa1aB47d0Fb0f24f51A3072EC16E20F90fcE',
        GEB_COIN_JOIN: '0x0A5653CCa4DB1B6E265F47CAf6969e64f1CFdC45',
        GEB_SURPLUS_AUCTION_HOUSE: '0x4EEfDaE928ca97817302242a851f317Be1B85C90',
        GEB_DEBT_AUCTION_HOUSE: '0x1896adBE708bF91158748B3F33738Ba497A69e8f',
        GEB_COIN: '0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919',
        GEB_ORACLE_RELAYER: '0x4ed9C0dCa0479bC64d8f4EB3007126D5791f7851',
        GEB_GLOBAL_SETTLEMENT: '0xee4cf96e5359d9619197fd82b6ef2a9eae7b91e1',
        GEB_STABILITY_FEE_TREASURY:
            '0x83533fdd3285f48204215E9CF38C785371258E76',
        GEB_RRFM_CALCULATOR: '0x5CC4878eA3E6323FdA34b3D28551E1543DEe54C6',
        GEB_DUMMY_RRFM_CALCULATOR: '0x9F02ddBFb4B045Df83D45c4d644027FBD7d72A6D',
        GEB_RRFM_SETTER: '0x7acfc14dbf2decd1c9213db32ae7784626daeb48',
        GEB_RRFM_SETTER_RELAYER: '0xd52da90c20c4610fef8faade2a1281ffa54eb6fb',
        BASIC_ACTIONS: '0xd4878FAf0452659D8202a6E6b1f04F104477b0b7',
        PROXY_ACTIONS_GLOBAL_SETTLEMENT:
            '0x17b5d9914194a08c7Ef14451BA15E8aE4f92Cb93',
        PROXY_DEBT_AUCTION_ACTIONS:
            '0x943C6Bb9FD652f6e4a9dA32894075e5aBECAd394',
        PROXY_SURPLUS_AUCTION_ACTIONS:
            '0x16B0BF0Bf031A3691f4bD600e5340fEDd149C0ED',
        SAFE_MANAGER: '0xEfe0B4cA532769a3AE758fD82E1426a03A94F185',
        GET_SAFES: '0xdf4BC9aA98cC8eCd90Ba2BEe73aD4a1a9C8d202B',
        PROXY_FACTORY: '0xA26e15C895EFc0616177B7c1e7270A4C7D51C997',
        PROXY_REGISTRY: '0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4',
        MEDIANIZER_RAI: '0xFbF4849a06F6e6F53EcB31D2f8BD61aA7874b268',
        SPOT_RAI: '0x7235a0094eD56eB2Bd0de168d307C8990233645f',
        ETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        MEDIANIZER_ETH: '0xb825e25856bD98b3f2FAF2aEb6Cb8742B38C4025',
        GEB_JOIN_ETH_A: '0x2D3cD7b81c93f188F3CB8aD87c8Acc73d6226e3A',
        GEB_COLLATERAL_AUCTION_HOUSE_ETH_A:
            '0x7fFdF1Dfef2bfeE32054C8E922959fB235679aDE',
        GEB_JOIN_WETH: '0x0000000000000000000000000000000000000000',
        GEB_COLLATERAL_AUCTION_HOUSE_WETH:
            '0x0000000000000000000000000000000000000000',
        GEB_JOIN_OP: '0x0000000000000000000000000000000000000000',
        GEB_COLLATERAL_AUCTION_HOUSE_OP:
            '0x0000000000000000000000000000000000000000',
    },
    'optimism-goerli': {
        ETH_FROM: '0x0000000000000000000000000000000000000100',
        STARTING_BLOCK_NUMBER: '23275958',
        PROXY_DEPLOYER: '0x0000000000000000000000000000000000000101',
        COIN_TYPE: 'INDEX',
        GOVERNANCE_TYPE: 'MULTISIG-SAFE',
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        FAUCET: '0x0000000000000000000000000000000000000000',
        GEB_MULTISIG: '0x0000000000000000000000000000000000000103',
        GEB_DEPLOY: '0x0000000000000000000000000000000000000105',
        GEB_PROT: '0x63ff7c40d952903C2462255Da283d3F3E509b54D',
        GEB_SAFE_ENGINE: '0x98090fe708546D512A1824B444e54aeAe56340A2',
        GEB_TAX_COLLECTOR: '0xCcada9A135C721B15bA60dc0A6466628f8a30AcC',
        GEB_LIQUIDATION_ENGINE: '0x1F192CB1857044fE929b75a82C489A0d937333E7',
        GEB_ACCOUNTING_ENGINE: '0xe750A1902eCaf94FA4fe62F1a73818BACb351BD7',
        GEB_COIN_JOIN: '0x6927b048f0fAb8d59fa417029C2172d330b6801F',
        GEB_SURPLUS_AUCTION_HOUSE: '0xaD5f31B928340ce65C26750206bcB0c9ebbc211e',
        GEB_DEBT_AUCTION_HOUSE: '0x3CE60053A05a916EFfA98DE0eE3f795aecE113DB',
        GEB_COIN: '0x79F83a6236689dE7D75EBE877c30A7683cBa7E0D',
        GEB_ORACLE_RELAYER: '0x5146de07650EA1dA03964F6caa2188a5d45E9Cce',
        GEB_GLOBAL_SETTLEMENT: '0x46785e712658260235BeaABD89Ee0ed7f33bF9c2',
        GEB_STABILITY_FEE_TREASURY:
            '0x4ca31b7d01BC5A8ceFabC79eE84B05b6438ca0d9',
        GEB_RRFM_CALCULATOR: '0x0000000000000000000000000000000000000114',
        GEB_DUMMY_RRFM_CALCULATOR: '0x0000000000000000000000000000000000000115',
        GEB_RRFM_SETTER: '0x0000000000000000000000000000000000000116',
        GEB_RRFM_SETTER_RELAYER: '0x0000000000000000000000000000000000000117',
        BASIC_ACTIONS: '0xC1Fc066d9260e6a8E73759fb6Df00351c427BD28',
        PROXY_ACTIONS_GLOBAL_SETTLEMENT:
            '0x0000000000000000000000000000000000000000',
        PROXY_DEBT_AUCTION_ACTIONS:
            '0x0000000000000000000000000000000000000121',
        PROXY_SURPLUS_AUCTION_ACTIONS:
            '0x0000000000000000000000000000000000000122',
        SAFE_MANAGER: '0x00062c2978460da9cbc1CD56186401B55b9d3788',
        GET_SAFES: '0x00062c2978460da9cbc1CD56186401B55b9d3788',
        PROXY_FACTORY: '0x653dFeE56bee0bD8C04D41a64F0fe1B846a1722d',
        PROXY_REGISTRY: '0xbBaD2781a32D64ebd929ea8d1D62Ff21862661Ae',
        MEDIANIZER_RAI: '0x0000000000000000000000000000000000000420',
        SPOT_RAI: '0x0000000000000000000000000000000000000127',
        ETH: '0x4200000000000000000000000000000000000006',
        MEDIANIZER_ETH: '0x0000000000000000000000000000000000000129',
        GEB_JOIN_ETH_A: '0x293B7931bAA508642e412c9017f1e8137207221f',
        GEB_COLLATERAL_AUCTION_HOUSE_ETH_A:
            '0x5fc25027375b45Ee5B96d8c86DeC5378b8aF9A83',
        GEB_JOIN_WETH: '0x4f70d9e2efec9b92a32551338d9f37fec87eac77',
        GEB_COLLATERAL_AUCTION_HOUSE_WETH:
            '0x0C9F376a630D15f17cA35F0aF8A7c1041e50624E',
        GEB_JOIN_OP: '0xF0e9077F7664562f878eAC678E98DBA6574B49Aa',
        GEB_COLLATERAL_AUCTION_HOUSE_OP:
            '0x813FafBc7514817B82D79e47F9bd88A1dAc62349',
    },
}

export const getAddressList = (network: GebDeployment): ContractList => {
    return addresses[network]
}

export const getCollateralJoin = (
    contractList: ContractList,
    collateral: string
): string => {
    switch (collateral) {
        case WETH:
            return contractList['GEB_JOIN_WETH']
        case OP:
            return contractList['GEB_JOIN_OP']
        default:
            return ''
    }
}
