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

export declare type GebDeployment = 'mainnet' | 'optimism-goerli'

const addresses: Record<GebDeployment, ContractList> = {
    mainnet: {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0x4200000000000000000000000000000000000006',
        GEB_SYSTEM_COIN: '0x8DF9703E3Bb8c43f6C1CD6916dF6394C394fc0eF',
        GEB_PROTOCOL_TOKEN: '0x1BDf43597E9aCD371e88C8f76A24ebb311519f2b',
        GEB_SAFE_ENGINE: '0x749Af3E7407A07fba76347A9967f21A7a396335a',
        GEB_ORACLE_RELAYER: '0x3441f3B0EBEC600C3048B08Bfd7F98bf50FaAD76',
        GEB_SURPLUS_AUCTION_HOUSE: '0xAF6b71084BdbA44D07e52f692d8923c103D09975',
        GEB_DEBT_AUCTION_HOUSE: '0xdbD0ba419692fF699cC5e33D99c00aDe1A428ac9',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x9d41872a185eD15A47371b6F8C0C02B8a7B1E96b',
        GEB_ACCOUNTING_ENGINE: '0x01025ddfbC205b10a4CeE7A6904733F3C2E8CA92',
        GEB_LIQUIDATION_ENGINE: '0x62D2B21D258c43F6e4f8DD34E8F744a3C268f21b',
        GEB_COIN_JOIN: '0x2a75Aed026BBC73FeCdAa1acCE38b427fEa529D0',
        GEB_COLLATERAL_JOIN_FACTORY: '0xBD1E162E1d6cb1758142658b672eAF843Bf921B7',
        GEB_TAX_COLLECTOR: '0x7a0FEE04c49bFA4F42993ab47Ef1ddc18F7AA31a',
        GEB_STABILITY_FEE_TREASURY: '0xA8c86916BB1bA4d4D04D585d48a34bD713dAd830',
        GEB_RRFM_CALCULATOR: '0x4376017BF255beEFeceb4506379e6d8A3C69b4b3',
        GEB_RRFM_SETTER: '0xFE087fb1f729E65c6AC8E5DE3fF9e8dd7c1b0C45',
        GEB_GLOBAL_SETTLEMENT: '0x6BEf230B891024Aa69d01d004e8768b3B9eA9312',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0xfe80435B94473d196B9d1E614D9c15Da9284003E',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0xC220946cE8Efb7e4F3A96aeE141aBE7af3d07192',
        SAFE_MANAGER: '0x74f2cEd0EAD90400c2d96Fb60dd0eebEbC3aC3DE',
        PROXY_FACTORY: '0x60437Fec25e379039479432FeD8d924C06CB8662',
        PROXY_BASIC_ACTIONS: '0xA6a6224f82921f178eF3f7796ecF538Cf80304B7',
        PROXY_DEBT_AUCTION_ACTIONS: '0xe8d5A5f3191735FcDf7adC33DEd20b0EF6E6d975',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x1615062482fa2426C651e42e4656a64e2738A875',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0xBEdA825f517E8ef74F571bf3Ae47d004Fd4BB9DE',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x3408D78C69F9654C04087a412b0315663919E3a5',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0xa935428b62b13bFCBcd2F7b0F78C5FBfE96788DF',
        PROXY_REWARDED_ACTIONS: '0xf7d33E181F478C708c59D7a37066cDc273746904',
        JOB_ACCOUNTING: '0xe40Da1Eb3c1095c1719d9F852448E9985B8B291B',
        JOB_LIQUIDATION: '0xdAa625CD0cDE46cb41D97B894Cf18B43Eb8a9D9E',
        JOB_ORACLES: '0x0be8fC16A5d0a40ABD8Aa3F3F2BF3ba872a5E377',
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
            collateralJoin: '0xd3370757a381eCf763c2EF5FaA30a01aC67b9C89',
            collateralAuctionHouse: '0x849B288989A39A8F0FaE9691E3a4F1e660302B59',
            isCollateral: true,
        },
        WSTETH: {
            address: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
            decimals: 18,
            symbol: 'WSTETH',
            bytes32String: WSTETH,
            collateralJoin: '0x2Aa724EE4B72A7F8D2334d2Ba0e3ca8532f0ba12',
            collateralAuctionHouse: '0xFD17D6e7B5bb3B34B2e950523Db9252d6b34CA76',
            isCollateral: true,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            bytes32String: OP,
            collateralJoin: '0xAF36a722f8B599E3509e6bfd81279DAe6f79fe1E',
            collateralAuctionHouse: '0x71431C9c2dFB83f5E37477a697EB5Bf7422204a5',
            isCollateral: true,
        },
        HAI: {
            address: '0x8DF9703E3Bb8c43f6C1CD6916dF6394C394fc0eF',
            decimals: 18,
            symbol: 'HAI',
            bytes32String: '',
            collateralJoin: '0x2a75Aed026BBC73FeCdAa1acCE38b427fEa529D0',
            collateralAuctionHouse: '',
            isCollateral: false,
        },
        KITE: {
            address: '0x1BDf43597E9aCD371e88C8f76A24ebb311519f2b',
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
}

export const getTokenList = (network: GebDeployment): TokenList => {
    return tokens[network]
}

export const getAddressList = (network: GebDeployment): ContractList => {
    return addresses[network]
}
