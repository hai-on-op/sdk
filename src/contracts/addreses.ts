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
    },
    'optimism-sepolia': {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0x4200000000000000000000000000000000000006',
        GEB_SYSTEM_COIN: '0xb2d541BDd0037e03d6B43490c9A72594a6c37A0f',
        GEB_PROTOCOL_TOKEN: '0x05CBD1C19Af83Ab7929C8cA5000076cc0D3CeD62',
        GEB_SAFE_ENGINE: '0xf0F6a019eDa4A0809A2Ec07d8bDB22530C8Cb9Ea',
        GEB_ORACLE_RELAYER: '0x404fca0DA6C5af0bF0429153c577B05622A130aC',
        GEB_SURPLUS_AUCTION_HOUSE: '0x98aAD5b0B5FAe3633d7eb38323a3DbfAFb533B23',
        GEB_DEBT_AUCTION_HOUSE: '0xa81AAD12b2E18A104988F2598A53AF750B89B179',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0xC3D1D41C1030b2B356C0f70514Cd52D4749466fe',
        GEB_ACCOUNTING_ENGINE: '0xb189A796cC055B5B601AD843AB1BC4Dc2d86bb70',
        GEB_LIQUIDATION_ENGINE: '0x2F67cA5989240C651460Bafe51527Ee6aF61c511',
        GEB_COIN_JOIN: '0x36942790dfe8ac1B3a9A195B1782585eceB6B70F',
        GEB_COLLATERAL_JOIN_FACTORY: '0x13982e53958c66b0E258FB56d73bFEA95a73083B',
        GEB_TAX_COLLECTOR: '0x37e23C8F5104398B057A6A8d00425703F7aA69aD',
        GEB_STABILITY_FEE_TREASURY: '0xd07D47402bE609459059Cebaa05286D24c882fB9',
        GEB_RRFM_CALCULATOR: '0x73ddca9131c5CB54227a1Ded9e84A83D4D6a958b',
        GEB_RRFM_SETTER: '0x3122224d48f38c4952489af9dba4f097E9fca1e3',
        GEB_GLOBAL_SETTLEMENT: '0xf439248215b6668018272bcF4B03E6E172472b52',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0xFCCdD4B18dD2Ab02D8F0721130195e8C9C394261',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x4d551Fb5132bfDf04f4e3742b244989A70F6098d',
        SAFE_MANAGER: '0xaCfBe6A0321963c4F225142E5066dE520d57e7FF',
        PROXY_FACTORY: '0xc7EfEa8899fe64fC281a6f4DAC4BEF71F62bb3D5',
        PROXY_BASIC_ACTIONS: '0x67f4Bdf7c395843a0f04FB82e88bf52CAB83A6A4',
        PROXY_DEBT_AUCTION_ACTIONS: '0xec1B7a4f80EfD8fB00B806Db5d2e7d1715A4D3Db',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x6DaF29f356B597453b7B14e3e1E27787e732DBB2',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x03E559F5E319251dd64c90505faF076230B389ce',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x6A7d730e7bb42f44eEFe02A2eC4FC9546eA887Ed',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0xA4c6fC56aeB6F49FDba34d0C4a35AeA6570119cc',
        PROXY_REWARDED_ACTIONS: '0x1516E34E02175fB3C9dE6CC2C26D4660887450B6',
        JOB_ACCOUNTING: '0xAA36fd0627Ce73a338e60418DB392F3323B88372',
        JOB_LIQUIDATION: '0xa4C377a782EA842537cbEa61d2d9aBe37d7D5f11',
        JOB_ORACLES: '0x1Ba2430B65c02004f6DDD7A6b00f609F7887A074',
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
            collateralJoin: '0x1CbD8E6F6371F84ec09Ae8fA5e5E0C29B5934E61',
            collateralAuctionHouse: '0xa09B2b6D4022723EE28163B944511ecfabe83cF1',
            isCollateral: true,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            bytes32String: OP,
            collateralJoin: '0x6057388b102A1796423F83D6B7cD28582C5B4233',
            collateralAuctionHouse: '0xdEf2706aC13Ec06b1f37D7c7A07D46498b885c26',
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
            address: '0xdC0EE5C3248Eac059997259c2DfC0e4bF8943097',
            decimals: 8,
            symbol: 'WBTC',
            bytes32String: WBTC,
            collateralJoin: '0xE18BFd3Eb02D513872259D3D215AC5a50108fb03',
            collateralAuctionHouse: '0xbF313874E534dD5D7D21941f735aa2BFeCDdddea',
            isCollateral: true,
        },
        STN: {
            address: '0x056411ecF73C5be6fCeCF20330Ce3acd722aBD68',
            decimals: 3,
            symbol: 'STN',
            bytes32String: STONES,
            collateralJoin: '0xD67aDFEA76eC8A2F452fa8A8461C65DCCa694D34',
            collateralAuctionHouse: '0xc7a625030E3e390E89D181ef20Ac14b6B2BB77FD',
            isCollateral: true,
        },
        TTM: {
            address: '0x8831ee67C3aE92c35034155E6B8fb57817f337EE',
            decimals: 0,
            symbol: 'TTM',
            bytes32String: TOTEM,
            collateralJoin: '0x76Cffc65Ed29D7b9E0DBD1ff6b4E14Fb4C76cAc8',
            collateralAuctionHouse: '0x6a2715B8f93387e17D756fe42b36CB31e45c1f2A',
            isCollateral: true,
        },
        HAI: {
            address: '0xb2d541BDd0037e03d6B43490c9A72594a6c37A0f',
            decimals: 18,
            symbol: 'HAI',
            bytes32String: '',
            collateralJoin: '0x36942790dfe8ac1B3a9A195B1782585eceB6B70F',
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
}

export const getTokenList = (network: GebDeployment): TokenList => {
    return tokens[network]
}

export const getAddressList = (network: GebDeployment): ContractList => {
    return addresses[network]
}
