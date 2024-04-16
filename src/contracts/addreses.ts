import { WETH, WSTETH, OP, SNX, WBTC, STONES, TOTEM } from '../utils'

// All keys are mandatory
export type ContractKey =
    | 'MULTICALL'
    | 'ETH'
    | 'GEB_SYSTEM_COIN'
    | 'GEB_PROTOCOL_TOKEN'
    | 'GEB_SAFE_ENGINE'
    | 'GEB_ORACLE_RELAYER'
    | 'GEB_SURPLUS_AUCTION_HOUSE'
    | 'GEB_DEBT_AUCTION_HOUSE'
    | 'GEB_COLLATERAL_AUCTION_HOUSE_FACTORY'
    | 'GEB_ACCOUNTING_ENGINE'
    | 'GEB_LIQUIDATION_ENGINE'
    | 'GEB_COIN_JOIN'
    | 'GEB_COLLATERAL_JOIN_FACTORY'
    | 'GEB_TAX_COLLECTOR'
    | 'GEB_STABILITY_FEE_TREASURY'
    | 'GEB_GLOBAL_SETTLEMENT'
    | 'GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE'
    | 'GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER'
    | 'GEB_RRFM_SETTER'
    | 'GEB_RRFM_CALCULATOR'
    | 'SAFE_MANAGER'
    | 'PROXY_FACTORY'
    | 'PROXY_BASIC_ACTIONS'
    | 'PROXY_DEBT_AUCTION_ACTIONS'
    | 'PROXY_SURPLUS_AUCTION_ACTIONS'
    | 'PROXY_COLLATERAL_AUCTION_ACTIONS'
    | 'PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS'
    | 'PROXY_GLOBAL_SETTLEMENT_ACTIONS'
    | 'PROXY_REWARDED_ACTIONS'
    | 'JOB_ACCOUNTING'
    | 'JOB_LIQUIDATION'
    | 'JOB_ORACLES'
    | 'MERKLE_DISTRIBUTOR_FACTORY_KITE'
    | 'MERKLE_DISTRIBUTOR_FACTORY_OP'

export type ContractList = {
    [key in ContractKey]: string
}

export declare type GebDeployment = 'mainnet' | 'optimism-goerli' | 'optimism-sepolia'

const addresses: Record<GebDeployment, ContractList> = {
    mainnet: {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0x4200000000000000000000000000000000000006',
        GEB_SYSTEM_COIN: '0x10398AbC267496E49106B07dd6BE13364D10dC71',
        GEB_PROTOCOL_TOKEN: '0xf467C7d5a4A9C4687fFc7986aC6aD5A4c81E1404',
        GEB_SAFE_ENGINE: '0x9Ff826860689483181C5FAc9628fd2F70275A700',
        GEB_ORACLE_RELAYER: '0x6270403b908505F02Da05BE5c1956aBB59FDb3A6',
        GEB_SURPLUS_AUCTION_HOUSE: '0x096125Fa7E2181DbA78136782365a39c3a1778E9',
        GEB_DEBT_AUCTION_HOUSE: '0x7CdE0d7296725aFB80EA091Eca8D06A377f617b3',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x81c5C2DA8C1a74c6077B03aD69ca04b74b94B427',
        GEB_ACCOUNTING_ENGINE: '0xa4900795EbFfadc12790f05f7c4AC42CD765Bd10',
        GEB_LIQUIDATION_ENGINE: '0x8Be588895BE9B75F9a9dAee185e0c2ad89891b56',
        GEB_COIN_JOIN: '0x30Ce72230A47A0967B7e52A1bAE0178DbD7c6eA3',
        GEB_COLLATERAL_JOIN_FACTORY: '0xfE7987b1Ee45a8d592B15e8E924d50BFC8536143',
        GEB_TAX_COLLECTOR: '0x62B82ccE08f8F2D808348409E9418c65EB1973C3',
        GEB_STABILITY_FEE_TREASURY: '0xE9E54c55d41D6622933F9F736e0c55484b3c4f6f',
        GEB_RRFM_CALCULATOR: '0x6f9aeC3c0DF4DF7A0Da66453a38B8C767972f609',
        GEB_RRFM_SETTER: '0x1F76F20C9D9075dc160d0E47cd214dF0B7434d2f',
        GEB_GLOBAL_SETTLEMENT: '0x75880aca7230462a630Ad65ad5444cb1E1864218',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x1fa281EA8d0e9DB78bEAA1F5b1a452058F956d66',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x7EDaD06B56bbEC6A1C5Dd95b8D00aebc803afe43',
        SAFE_MANAGER: '0xB0FF82D8322f6Fa9C28Ec46eF0A5C343e95106C3',
        PROXY_FACTORY: '0xBAfbCDbFbB1569722253ED4D491D2fB3b5E03a27',
        PROXY_BASIC_ACTIONS: '0xd36b1bD5445374Ceb7Fe4148a719584234Da7Bb0',
        PROXY_DEBT_AUCTION_ACTIONS: '0xFC55B886a2619bd8645549f7Cb672872479F8117',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x632229A0A849bde3A1f1200cF23118b33A925cEc',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0xbFAc170711DFE2043f47b34F118E9FCDA8FC694D',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x48c3416097529944946D08486f10185F18463640',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0xA0A78899Cd5c093F563EF22e86B68bBC44845Fa1',
        PROXY_REWARDED_ACTIONS: '0xB688d73B58e5004341f855f3E71177316281cDE7',
        JOB_ACCOUNTING: '0xc256C3aa404Ab74cE050Bcf8A05256B6A1729EF0',
        JOB_LIQUIDATION: '0x5EF15750b5672CD6217E4E184cEAD440cB1b3638',
        JOB_ORACLES: '0xF4F18205D8D46638489865e42c0a71a3d4F9FC22',
        MERKLE_DISTRIBUTOR_FACTORY_KITE: '0x3975Ff822aF38552fAC62A975D4D4e0Ea5Ac5980',
        MERKLE_DISTRIBUTOR_FACTORY_OP: '0x524fE171e80173C15381bB50034033dA282abCc6',
    },
    'optimism-goerli': {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0x4200000000000000000000000000000000000006',
        GEB_SYSTEM_COIN: '0xb2d541BDd0037e03d6B43490c9A72594a6c37A0f',
        GEB_PROTOCOL_TOKEN: '0x05CBD1C19Af83Ab7929C8cA5000076cc0D3CeD62',
        GEB_SAFE_ENGINE: '0x8CD47C308BE756F3721D2B25d73D372312fC58e3',
        GEB_ORACLE_RELAYER: '0xC87db8Fc544b9d12c10CA68e0D396598ecECF310',
        GEB_SURPLUS_AUCTION_HOUSE: '0x80e05a7ade7C1D0f82635764C6a90c6473Fc3a9c',
        GEB_DEBT_AUCTION_HOUSE: '0x2b6227a6ee0DD1C51AD849675E688195cE9bB203',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0xa4B2f6Cd5287bF04435C9a0Fb7B7aefF71b99eF1',
        GEB_ACCOUNTING_ENGINE: '0xeeD607FC8c614f75B12524e7a04f62B8257fAB33',
        GEB_LIQUIDATION_ENGINE: '0x602F40EC23763994d5a6Dd26b240f4BeC39C7001',
        GEB_COIN_JOIN: '0xf439248215b6668018272bcF4B03E6E172472b52',
        GEB_COLLATERAL_JOIN_FACTORY: '0xFCCdD4B18dD2Ab02D8F0721130195e8C9C394261',
        GEB_TAX_COLLECTOR: '0x4d551Fb5132bfDf04f4e3742b244989A70F6098d',
        GEB_STABILITY_FEE_TREASURY: '0x1411F0833Bc05DA16a959b3De21D5Fb7f1E0881f',
        GEB_RRFM_CALCULATOR: '0xb5559E17879225eAe5001de5Bc998123A1503DA6',
        GEB_RRFM_SETTER: '0x35448044AA20592F10Bef31e4aeD57E5A25B65Fc',
        GEB_GLOBAL_SETTLEMENT: '0xB9C85D0887d210fd39d22fB26EeC87705feA35a6',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x1b3D1a8A08d9d675A519E6B2fAbC56E553c90Fb5',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0xAA36fd0627Ce73a338e60418DB392F3323B88372',
        SAFE_MANAGER: '0xd582Cb7e38503D584E7872B18B5451AbcA2527Ac',
        PROXY_FACTORY: '0xCE03C307d005c26d3Ee83Ff2B5341179df380887',
        PROXY_BASIC_ACTIONS: '0x61C2510325c89D6A244E2b5D84C2a2e66bFd067A',
        PROXY_DEBT_AUCTION_ACTIONS: '0xDeCCaAFEbfCF2C1210ac2d7115E5E043f27071E5',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0xd1E276F8CEC64016e962a2c5B7D7B47aa611004b',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x81b52C669ce1751c73C50945d95bbAe27ee8180D',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x14976A0bF941e9e56779F3F1Ed699865A3AF5Ea5',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0x7ca73B3b9be083f5323804B5054BC4323ab383a3',
        PROXY_REWARDED_ACTIONS: '0xB07204A37722B929198ce22C7b8015e6e7601Da7',
        JOB_ACCOUNTING: '0xCeCc0253fA03786031A4df8DB940728543D01Fb6',
        JOB_LIQUIDATION: '0x1Bea51CDcc5E5713A7b5eca4F1B27D90b3F0ddB5',
        JOB_ORACLES: '0x1F517889F899A3792c4ED0D6Ae8f1A69e89E3d40',
        MERKLE_DISTRIBUTOR_FACTORY_KITE: '0x3975Ff822aF38552fAC62A975D4D4e0Ea5Ac5980',
        MERKLE_DISTRIBUTOR_FACTORY_OP: '0x524fE171e80173C15381bB50034033dA282abCc6',
    },
    'optimism-sepolia': {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0x4200000000000000000000000000000000000006',
        GEB_SYSTEM_COIN: '0xd87Dd8e541BB8027f5d7292b2096a59DCa056C76',
        GEB_PROTOCOL_TOKEN: '0xbEa0B991DfA52b6935F968fEf4279ba8472326E2',
        GEB_SAFE_ENGINE: '0x2e7DdAddFa10E0b88fE084e2Cc2Cd8BD6c5d6a98',
        GEB_ORACLE_RELAYER: '0x1c76E151DB66cD6940934E04e6a497764d335600',
        GEB_SURPLUS_AUCTION_HOUSE: '0x0df99181289acB1Fc3659B008651eC510c67d342',
        GEB_DEBT_AUCTION_HOUSE: '0x26ff852b0Cd3f3d202E81F177f96d0BD3A4FFF39',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x8CD7a993F6c3263b09c32686A111a0F9E8D53d45',
        GEB_ACCOUNTING_ENGINE: '0xC2F02F28228DD8DAd40AADa1DC2313073b27Ee7b',
        GEB_LIQUIDATION_ENGINE: '0xF31A62ab4FAba23348d943ca4E4FB9394d6B8A6A',
        GEB_COIN_JOIN: '0xdA31dE7569F96A435B7D1ad8c297fc89c871C228',
        GEB_COLLATERAL_JOIN_FACTORY: '0x7F7a790424AC07394FC673A50746876a5aA58f4d',
        GEB_TAX_COLLECTOR: '0xF444E49eA0e4026030655F55547aA65baEfcc905',
        GEB_STABILITY_FEE_TREASURY: '0xAB641b9907B2daf4642B08267A0DD669213248aC',
        GEB_RRFM_CALCULATOR: '0x5bB4292c97523c01C2E949c24b6E09eCF65b54c5',
        GEB_RRFM_SETTER: '0xC9Db770BE435457Feb4A64E4A12a08b9Fb1A9A03',
        GEB_GLOBAL_SETTLEMENT: '0x82893F9d9e0295264B4Cc74279F7C4aF3F100d13',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x120103d3f8c35d2d283DEB689F25Ae4a27CD58E4',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x5486d6a98231d977AD5Ab90A5C3150fe304bD6C8',
        SAFE_MANAGER: '0x1463a2D373111ace4A13b4B8147AE70789996556',
        PROXY_FACTORY: '0x9fc5d3Be336FFdf0A1a5e1F9ac94340Aaa66d278',
        PROXY_BASIC_ACTIONS: '0xF5348795719186D1eFAa13e1D8A3D890b2640e42',
        PROXY_DEBT_AUCTION_ACTIONS: '0x312C5DcCd2D63b3bD29342219Dcc1dE2C4aE86d4',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x2EA2f271b6C0Ad3fE5412B020B6657ef158dcb57',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x172931C396292ca8133c9a616a48E9252c3Be1b0',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x573025eF6dDD61f813E50b13b3730fB72d71B7B3',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0xe7B516F27cebD5FDCCDf519E12688Ee8878356Ef',
        PROXY_REWARDED_ACTIONS: '0xD1ca8E9EB98388C86e0780c0990f2a4880129ab6',
        JOB_ACCOUNTING: '0xF5d979D2Cc638b0d3464b699ce89fcE6d7eE5675',
        JOB_LIQUIDATION: '0x60878b8206C9e568B1B7f81a1Cd2A0e15Fa85a73',
        JOB_ORACLES: '0xe771c28dC4b9955f5750EBD0141a0673D1110981',
        MERKLE_DISTRIBUTOR_FACTORY_KITE: '0x3975Ff822aF38552fAC62A975D4D4e0Ea5Ac5980',
        MERKLE_DISTRIBUTOR_FACTORY_OP: '0x524fE171e80173C15381bB50034033dA282abCc6',
    },
}

export type TokenData = {
    address: string
    decimals: number
    symbol: string
    bytes32String: string
    collateralJoin: string
    collateralAuctionHouse: string
    isCollateral: boolean
}

export type TokenList = {
    [key: string]: TokenData
}

const tokens: Record<GebDeployment, TokenList> = {
    mainnet: {
        WETH: {
            address: '0x4200000000000000000000000000000000000006',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0xbE57D71e81F83a536937f07E0B3f48dd6f55376B',
            collateralAuctionHouse: '0x2c6c978B3e707482236De7d23E3A375270F41175',
            isCollateral: true,
        },
        WSTETH: {
            address: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
            decimals: 18,
            symbol: 'WSTETH',
            bytes32String: WSTETH,
            collateralJoin: '0x77a82b65F8FA7da357A047B897C0339bD0B0B361',
            collateralAuctionHouse: '0x375686A4cD77DD8e86dD06353E0b42bC53cB3704',
            isCollateral: true,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            bytes32String: OP,
            collateralJoin: '0x994fa61F9305Bdd6e5E6bA84015Ee28b109C827A',
            collateralAuctionHouse: '0x6b5c2deA8b9b13A043DDc25C6581cD6D87a2A881',
            isCollateral: true,
        },
        HAI: {
            address: '0x10398AbC267496E49106B07dd6BE13364D10dC71',
            decimals: 18,
            symbol: 'HAI',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        KITE: {
            address: '0xf467C7d5a4A9C4687fFc7986aC6aD5A4c81E1404',
            decimals: 18,
            symbol: 'KITE',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
    },
    'optimism-goerli': {
        WETH: {
            address: '0x4200000000000000000000000000000000000006',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0xC0888B3d49073E84A00FE341104FB0756d9142E6',
            collateralAuctionHouse: '0xE3c748B71bc75FA8E188E487f03a0E2741a7cb77',
            isCollateral: true,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            bytes32String: OP,
            collateralJoin: '0xD11e8a5eB973E3b4b613171b5745261fcF83ec7B',
            collateralAuctionHouse: '0xbD2a307BBbd07e9E83BAf61BbB7f88F27B227C8C',
            isCollateral: true,
        },
        /* TODO: uncomment after SNX is deployed through governance
        SNX: {
            address: '0x2E5ED97596a8368EB9E44B1f3F25B2E813845303',
            decimals: 18,
            symbol: 'SNX',
            bytes32String: SNX,
            collateralJoin: '0x1e4Cc1F2250376b5ECe0093da530aee30a40dc8D',
            collateralAuctionHouse: '0x334fBD39f300c80cbe4ABA4B93a9C8eC895f4c35',
            isCollateral: true,
        },
        */
        WBTC: {
            address: '0x72Bf28D2E3dfE44a7dD0BFE265fCc381fF8A74C8',
            decimals: 8,
            symbol: 'WBTC',
            bytes32String: WBTC,
            collateralJoin: '0x4A025ac49E92e8fC62871E56129b90612a7D8647',
            collateralAuctionHouse: '0xb5aFbD1f748F22D4EaC9e7F43c709942eE6F0500',
            isCollateral: true,
        },
        STN: {
            address: '0x41944Bebe7Bfd3C708DBf96F4eE2d0c3b91843CA',
            decimals: 3,
            symbol: 'STN',
            bytes32String: STONES,
            collateralJoin: '0xa192df7b5e9e67731b2dc2793749B36ef1f254fc',
            collateralAuctionHouse: '0x37941361EA0769823811a2D95aA59158277Bc82A',
            isCollateral: true,
        },
        TTM: {
            address: '0xdCfd86628e5e5eC7f7c1d8Ae9894E57dDF86c1f1',
            decimals: 0,
            symbol: 'TTM',
            bytes32String: TOTEM,
            collateralJoin: '0x93667E2b8437a747604caC0e3716605C8a37BAa8',
            collateralAuctionHouse: '0xeb3AfaE71446FBac3d97F572cE56475Cbd5a33Bc',
            isCollateral: true,
        },
        HAI: {
            address: '0xb2d541BDd0037e03d6B43490c9A72594a6c37A0f',
            decimals: 18,
            symbol: 'HAI',
            bytes32String: '',
            collateralJoin: '0xf439248215b6668018272bcF4B03E6E172472b52',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        KITE: {
            address: '0x05CBD1C19Af83Ab7929C8cA5000076cc0D3CeD62',
            decimals: 18,
            symbol: 'KITE',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
    },
    'optimism-sepolia': {
        WETH: {
            address: '0x4200000000000000000000000000000000000006',
            decimals: 18,
            symbol: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0x49C1b389167A19e72D8840faAEDa18Fa715F3578',
            collateralAuctionHouse: '0x4D720Ef81C6d2e887bEFFac1392023930E863565',
            isCollateral: true,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            bytes32String: OP,
            collateralJoin: '0xbBCE0894Fa82497b752c9C2a8D510C6B3AA20682',
            collateralAuctionHouse: '0x8E2353D4A265D08EB1A2fcAF5868F79dbE7bea60',
            isCollateral: true,
        },
        WBTC: {
            address: '0x83ADb8fc025D3F74Fb29D87A0aF62c3F8d5ed513',
            decimals: 8,
            symbol: 'WBTC',
            bytes32String: WBTC,
            collateralJoin: '0x46C4ffF889aD94793287cB9A577FeDF635a88FAE',
            collateralAuctionHouse: '0xCC33Fce1cbFa9c4636D57c76ce78aF9846590E07',
            isCollateral: true,
        },
        STN: {
            address: '0x8d8B01B53d75da4F1D4d251b0f064d37279164C4',
            decimals: 3,
            symbol: 'STN',
            bytes32String: STONES,
            collateralJoin: '0x70d3e62C0ab3184a68CD38DA7Fe4391813283C16',
            collateralAuctionHouse: '0xac7B5800208A2e096F0CA1eeBa224E2740f6d87c',
            isCollateral: true,
        },
        TTM: {
            address: '0x10FE3a8c67d9d44C57CF109f5D8F5F190D1F1f6A',
            decimals: 0,
            symbol: 'TTM',
            bytes32String: TOTEM,
            collateralJoin: '0x9a6E15A16E92451106D79045F5DD785F0a478680',
            collateralAuctionHouse: '0x1c349B5eD9e5797098419821cE777A407BE805cb',
            isCollateral: true,
        },
        HAI: {
            address: '0xd87Dd8e541BB8027f5d7292b2096a59DCa056C76',
            decimals: 18,
            symbol: 'HAI',
            bytes32String: '',
            collateralJoin: '0xdA31dE7569F96A435B7D1ad8c297fc89c871C228',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        KITE: {
            address: '0xbEa0B991DfA52b6935F968fEf4279ba8472326E2',
            decimals: 18,
            symbol: 'KITE',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
    },
}

export const getTokenList = (network: GebDeployment): TokenList => {
    return tokens[network]
}

export const getAddressList = (network: GebDeployment): ContractList => {
    return addresses[network]
}
