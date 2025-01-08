import {
    WETH,
    WSTETH,
    OP,
    SNX,
    WBTC,
    TBTC,
    RETH,
    LUSD_A,
    SUSD_A,
    LINK,
    LDO,
    UNI,
    VELO,
    HAIVELO,
    FRXETH,
    SFRXETH,
    PENDLE,
    STONES,
    TOTEM,
    APXETH,
    MOO_VELO_V2_OP_VELO,
} from '../utils'

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
    | 'WRAPPED_TOKEN_HAI_VELO'
    | 'MERKLE_DISTRIBUTOR_FACTORY_KITE'
    | 'MERKLE_DISTRIBUTOR_FACTORY_OP'
    | 'MERKLE_DISTRIBUTOR_FACTORY_DINERO'

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
        PROXY_BASIC_ACTIONS: '0x7Bd5fBa59E6FF3ad5c6937CdD83f5cAf7aA49669',
        PROXY_DEBT_AUCTION_ACTIONS: '0xFC55B886a2619bd8645549f7Cb672872479F8117',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x632229A0A849bde3A1f1200cF23118b33A925cEc',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0xbFAc170711DFE2043f47b34F118E9FCDA8FC694D',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x48c3416097529944946D08486f10185F18463640',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0xA0A78899Cd5c093F563EF22e86B68bBC44845Fa1',
        PROXY_REWARDED_ACTIONS: '0xB688d73B58e5004341f855f3E71177316281cDE7',
        JOB_ACCOUNTING: '0xc256C3aa404Ab74cE050Bcf8A05256B6A1729EF0',
        JOB_LIQUIDATION: '0x5EF15750b5672CD6217E4E184cEAD440cB1b3638',
        JOB_ORACLES: '0xF4F18205D8D46638489865e42c0a71a3d4F9FC22',
        WRAPPED_TOKEN_HAI_VELO: '0x1C0541cB726007c3eB917bA4a9e84BFFBA511c3c',
        MERKLE_DISTRIBUTOR_FACTORY_KITE: '0x3975Ff822aF38552fAC62A975D4D4e0Ea5Ac5980',
        MERKLE_DISTRIBUTOR_FACTORY_OP: '0x524fE171e80173C15381bB50034033dA282abCc6',
        MERKLE_DISTRIBUTOR_FACTORY_DINERO: '0xFC4fD07b8CbA6b008952656a3d16A25da012EA56',
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
        WRAPPED_TOKEN_HAI_VELO: '0x1C0541cB726007c3eB917bA4a9e84BFFBA511c3c',
        MERKLE_DISTRIBUTOR_FACTORY_KITE: '0x3975Ff822aF38552fAC62A975D4D4e0Ea5Ac5980',
        MERKLE_DISTRIBUTOR_FACTORY_OP: '0x524fE171e80173C15381bB50034033dA282abCc6',
        MERKLE_DISTRIBUTOR_FACTORY_DINERO: '0xFC4fD07b8CbA6b008952656a3d16A25da012EA56',
    },
    'optimism-sepolia': {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0x4200000000000000000000000000000000000006',
        GEB_SYSTEM_COIN: '0xd8485245e56f56b53e0c4af4c7d7c81c76747b2e',
        GEB_PROTOCOL_TOKEN: '0x47c6ae06686d35dd7656be6af3091fcd626bbb2f',
        GEB_SAFE_ENGINE: '0x7ddb1bcedf6b3c615768d130588ed0fd471fa66f',
        GEB_ORACLE_RELAYER: '0x7c44077bca5bdeb5b4123b3f25510053f7687a81',
        GEB_SURPLUS_AUCTION_HOUSE: '0x2729b135f37ef272c14e1688b4fe9bf368ba59f4',
        GEB_DEBT_AUCTION_HOUSE: '0xc64d0cb32be0c7e84720162ec97fd5c3201fc53b',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x8defbd846f0183acdda0faf71701d6d5fa97ad1a',
        GEB_ACCOUNTING_ENGINE: '0x805a26c46ebf8b6815d8b81e1c488eae4c217d47',
        GEB_LIQUIDATION_ENGINE: '0x5c9842e9fcef99b19e6ec086f32c2809108a44db',
        GEB_COIN_JOIN: '0xbd68d4fc30ee2a071f85186b5240c80bce8bc50b',
        GEB_COLLATERAL_JOIN_FACTORY: '0xfe3a12779886c32d2ba269cf1ba5cf29ca5528e6',
        GEB_TAX_COLLECTOR: '0x3ccc004e68886b75f27ae3f715ef02e0ce55d6ab',
        GEB_STABILITY_FEE_TREASURY: '0x90de1e1d3961a30046563fe774b3d998b58d7741',
        GEB_RRFM_CALCULATOR: '0x3baf7cb0af84007230295f7528baa0f1cb17ed94',
        GEB_RRFM_SETTER: '0xc16cacc473a3e7c9483e3cb39a39fa4f88acad9e',
        GEB_GLOBAL_SETTLEMENT: '0xe1514605cfd551e5c501d2538b327429881462af',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0xe1d1692a4e8a6014725efb38e775b2425c7b80ce',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x1c48bbb32d7a5c799842d5dcfb13c1e95ed2ee02',
        SAFE_MANAGER: '0x0ef96c66767942ed561e4c028905d683943b7a39',
        PROXY_FACTORY: '0xb97a5f055285244bf11252178fb1053f035a77e5',
        PROXY_BASIC_ACTIONS: '0x1929cfcb27c9cb384925b51ba6d0b53ff31ebee5',
        PROXY_DEBT_AUCTION_ACTIONS: '0x910271788cefa5f0d4f6824bc4706d4452e25613',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x6ae75ad162f5c528d65810073ab6882399877cf6',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0xc75f3a3ea5bf1682219817d67e2a99cbe8a1a3db',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0xc9d5c49b6f2020890bc5757c35700136ef890785',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0xf2a4303f34e35c2a36fd327096266805dc70e2e2',
        PROXY_REWARDED_ACTIONS: '0x92f42a009e0e34c1e23bc1f08a7183eeb5d2c6ac',
        JOB_ACCOUNTING: '0x4fcd90ee6a041c631b6b93a52b4d94e0cedcb1ad',
        JOB_LIQUIDATION: '0x50d758e014c972e73166ea87a6a7d96868bf2859',
        JOB_ORACLES: '0xaacc036c505370918e4a89567a636d561833bd21',
        WRAPPED_TOKEN_HAI_VELO: '0x1C0541cB726007c3eB917bA4a9e84BFFBA511c3c',
        MERKLE_DISTRIBUTOR_FACTORY_KITE: '0x3975Ff822aF38552fAC62A975D4D4e0Ea5Ac5980',
        MERKLE_DISTRIBUTOR_FACTORY_OP: '0x524fE171e80173C15381bB50034033dA282abCc6',
        MERKLE_DISTRIBUTOR_FACTORY_DINERO: '0xFC4fD07b8CbA6b008952656a3d16A25da012EA56',
    },
}

export type TokenData = {
    address: string
    decimals: number
    symbol: string
    label: string
    bytes32String: string
    collateralJoin: string
    collateralAuctionHouse: string
    isCollateral: boolean
    hasRewards: boolean
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
            label: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0xbE57D71e81F83a536937f07E0B3f48dd6f55376B',
            collateralAuctionHouse: '0x2c6c978B3e707482236De7d23E3A375270F41175',
            isCollateral: true,
            hasRewards: true,
        },
        WSTETH: {
            address: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
            decimals: 18,
            symbol: 'WSTETH',
            label: 'wstETH',
            bytes32String: WSTETH,
            collateralJoin: '0x77a82b65F8FA7da357A047B897C0339bD0B0B361',
            collateralAuctionHouse: '0x375686A4cD77DD8e86dD06353E0b42bC53cB3704',
            isCollateral: true,
            hasRewards: true,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            label: 'OP',
            bytes32String: OP,
            collateralJoin: '0x994fa61F9305Bdd6e5E6bA84015Ee28b109C827A',
            collateralAuctionHouse: '0x6b5c2deA8b9b13A043DDc25C6581cD6D87a2A881',
            isCollateral: true,
            hasRewards: true,
        },
        SNX: {
            address: '0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4',
            decimals: 18,
            symbol: 'SNX',
            label: 'SNX',
            bytes32String: SNX,
            collateralJoin: '0xa24b2dff829cf0e0a60216b814169b54114f3f37',
            collateralAuctionHouse: '0x007e5f18697b937d26f7f2bffd44dd1b3e5c7300',
            isCollateral: true,
            hasRewards: false,
        },

        WBTC: {
            address: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
            decimals: 8,
            symbol: 'WBTC',
            label: 'WBTC',
            bytes32String: WBTC,
            collateralJoin: '0x0b080B74cC9d3416b471FD0b01988139256a65e4',
            collateralAuctionHouse: '0x783cfB5faBfbe7E827b8dBb629bfBB73779217c8',
            isCollateral: true,
            hasRewards: false,
        },
        TBTC: {
            address: '0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40',
            decimals: 18,
            symbol: 'TBTC',
            label: 'TBTC',
            bytes32String: TBTC,
            collateralJoin: '0x99E2b46c584382D9668a1DBc64A9a23D2828F74B',
            collateralAuctionHouse: '0xed335cD79C6eCa0522F661eBb81cE22DC3E395d4',
            isCollateral: true,
            hasRewards: false,
        },
        RETH: {
            address: '0x9Bcef72be871e61ED4fBbc7630889beE758eb81D',
            decimals: 18,
            symbol: 'RETH',
            label: 'rETH',
            bytes32String: RETH,
            collateralJoin: '0x8facb2fc0a6bc9b82a17c5f4092fadbc415b8ffa',
            collateralAuctionHouse: '0xf8c655ed6475beffbd2964efec592bbd21757804',
            isCollateral: true,
            hasRewards: false,
        },
        'LUSD-A': {
            address: '0xc40F949F8a4e094D1b49a23ea9241D289B7b2819',
            decimals: 18,
            symbol: 'LUSD-A',
            label: 'LUSD-A',
            bytes32String: LUSD_A,
            collateralJoin: '0x0eA91e64d631E414b613b2198D51CE84223911D5',
            collateralAuctionHouse: '0x5722aA89a0F2B6AA1fBB6BB05751151a0bd321AA',
            isCollateral: true,
            hasRewards: false,
        },
        /* TODO: uncomment if / after SUSD-A is deployed through governance
        'SUSD-A': {
            address: '0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9',
            decimals: 18,
            symbol: 'SUSD-A',
            label: 'SUSD-A',
            bytes32String: SUSD_A,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        */
        LINK: {
            address: '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6',
            decimals: 18,
            symbol: 'LINK',
            label: 'LINK',
            bytes32String: LINK,
            collateralJoin: '0xea284065E12eFFA66B0042286AD022c7e7935018',
            collateralAuctionHouse: '0x92fC0Ed7fE8bFE8d32462dF3106326920a6ca149',
            isCollateral: true,
            hasRewards: false,
        },
        /* TODO: uncomment if / after LDO is deployed through governance
        LDO: {
            address: '0xFdb794692724153d1488CcdBE0C56c252596735F',
            decimals: 18,
            symbol: 'LDO',
            label: 'LDO',
            bytes32String: LDO,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        */
        /* TODO: uncomment if / after UNI is deployed through governance
        UNI: {
            address: '0x6fd9d7AD17242c41f7131d257212c54A0e816691',
            decimals: 18,
            symbol: 'UNI',
            label: 'UNI',
            bytes32String: UNI,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        */
        VELO: {
            address: '0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db', // VelodromeV2
            decimals: 18,
            symbol: 'VELO',
            label: 'VELO',
            bytes32String: VELO,
            collateralJoin: '0x2db7594f644A92ded09F21Fe8f93376c03C9a9d5',
            collateralAuctionHouse: '0x65e2cCd69B4bd18C57369b2048F2B02b9b0f7d53',
            isCollateral: true,
            hasRewards: false,
        },
        APXETH: {
            address: '0x16Ed8E219cde31E14a80dCb6C9127A5EC6e88e46',
            decimals: 18,
            symbol: 'APXETH',
            label: 'APXETH',
            bytes32String: APXETH,
            collateralJoin: '0x1839F5C0EFB25203af719B685E47dAb1A2Cad742',
            collateralAuctionHouse: '0xCe2F288305d204B539Cb2637a055488a4E284b90',
            isCollateral: true,
            hasRewards: false,
        },
        'MOO-VELO-V2-OP-VELO': {
            address: '0x04c4a21D7439eD05fd33469565541bF6464F7157',
            decimals: 18,
            symbol: 'MOO-VELO-V2-OP-VELO',
            label: 'Moo VeloV2 OP-VELO',
            bytes32String: MOO_VELO_V2_OP_VELO,
            collateralJoin: '0x6207a306f34e1a9e6eda65ecc3d4e27d76593e4b',
            collateralAuctionHouse: '0xc362e012733FcFf9b83c02Ef12B9156472e007C7',
            isCollateral: true,
            hasRewards: false,
        },
        /* TODO: uncomment if / after frxETH is deployed through governance
        FRXETH: {
            address: '0x6806411765Af15Bddd26f8f544A34cC40cb9838B',
            decimals: 18,
            symbol: 'FRXETH',
            label: 'frxETH',
            bytes32String: FRXETH,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        */
        /* TODO: uncomment if / after sfrxETH is deployed through governance
        SFRXETH: {
            address: '0x484c2D6e3cDd945a8B2DF735e079178C1036578c',
            decimals: 18,
            symbol: 'SFRXETH',
            label: 'sfrxETH',
            bytes32String: SFRXETH,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        */
        /* TODO: uncomment if / after PENDLE is deployed through governance
        PENDLE: {
            address: '0xBC7B1Ff1c6989f006a1185318eD4E7b5796e66E1',
            decimals: 18,
            symbol: 'PENDLE',
            label: 'PENDLE',
            bytes32String: PENDLE,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        */
        HAI: {
            address: '0x10398AbC267496E49106B07dd6BE13364D10dC71',
            decimals: 18,
            symbol: 'HAI',
            label: 'HAI',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
        KITE: {
            address: '0xf467C7d5a4A9C4687fFc7986aC6aD5A4c81E1404',
            decimals: 18,
            symbol: 'KITE',
            label: 'KITE',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
    },
    'optimism-goerli': {
        WETH: {
            address: '0x4200000000000000000000000000000000000006',
            decimals: 18,
            symbol: 'WETH',
            label: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0xC0888B3d49073E84A00FE341104FB0756d9142E6',
            collateralAuctionHouse: '0xE3c748B71bc75FA8E188E487f03a0E2741a7cb77',
            isCollateral: true,
            hasRewards: false,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            label: 'OP',
            bytes32String: OP,
            collateralJoin: '0xD11e8a5eB973E3b4b613171b5745261fcF83ec7B',
            collateralAuctionHouse: '0xbD2a307BBbd07e9E83BAf61BbB7f88F27B227C8C',
            isCollateral: true,
            hasRewards: false,
        },
        SNX: {
            address: '0x2E5ED97596a8368EB9E44B1f3F25B2E813845303',
            decimals: 18,
            symbol: 'SNX',
            label: 'SNX',
            bytes32String: SNX,
            collateralJoin: '0x1e4Cc1F2250376b5ECe0093da530aee30a40dc8D',
            collateralAuctionHouse: '0x334fBD39f300c80cbe4ABA4B93a9C8eC895f4c35',
            isCollateral: true,
            hasRewards: false,
        },
        WBTC: {
            address: '0x72Bf28D2E3dfE44a7dD0BFE265fCc381fF8A74C8',
            decimals: 8,
            symbol: 'WBTC',
            label: 'WBTC',
            bytes32String: WBTC,
            collateralJoin: '0x4A025ac49E92e8fC62871E56129b90612a7D8647',
            collateralAuctionHouse: '0xb5aFbD1f748F22D4EaC9e7F43c709942eE6F0500',
            isCollateral: true,
            hasRewards: false,
        },
        STN: {
            address: '0x41944Bebe7Bfd3C708DBf96F4eE2d0c3b91843CA',
            decimals: 3,
            symbol: 'STN',
            label: 'STN',
            bytes32String: STONES,
            collateralJoin: '0xa192df7b5e9e67731b2dc2793749B36ef1f254fc',
            collateralAuctionHouse: '0x37941361EA0769823811a2D95aA59158277Bc82A',
            isCollateral: true,
            hasRewards: false,
        },
        TTM: {
            address: '0xdCfd86628e5e5eC7f7c1d8Ae9894E57dDF86c1f1',
            decimals: 0,
            symbol: 'TTM',
            label: 'TTM',
            bytes32String: TOTEM,
            collateralJoin: '0x93667E2b8437a747604caC0e3716605C8a37BAa8',
            collateralAuctionHouse: '0xeb3AfaE71446FBac3d97F572cE56475Cbd5a33Bc',
            isCollateral: true,
            hasRewards: false,
        },
        HAI: {
            address: '0xb2d541BDd0037e03d6B43490c9A72594a6c37A0f',
            decimals: 18,
            symbol: 'HAI',
            label: 'HAI',
            bytes32String: '',
            collateralJoin: '0xf439248215b6668018272bcF4B03E6E172472b52',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
        KITE: {
            address: '0x05CBD1C19Af83Ab7929C8cA5000076cc0D3CeD62',
            decimals: 18,
            symbol: 'KITE',
            label: 'KITE',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
    },
    'optimism-sepolia': {
        WETH: {
            address: '0x4200000000000000000000000000000000000006',
            decimals: 18,
            symbol: 'WETH',
            label: 'WETH',
            bytes32String: WETH,
            collateralJoin: '0x0078fb65304e9e047925b25a84f302e9709a36a4',
            collateralAuctionHouse: '0x721823161466fb9c03c03861fa32153acf7ffcaf',
            isCollateral: true,
            hasRewards: false,
        },
        OP: {
            address: '0x4200000000000000000000000000000000000042',
            decimals: 18,
            symbol: 'OP',
            label: 'OP',
            bytes32String: OP,
            collateralJoin: '0x2d57b9205957484839d830a38d7d7e1bd6d506f6',
            collateralAuctionHouse: '0x13d0d98a0e7973b034e12e239ad6bbc29e3d9ec8',
            isCollateral: true,
            hasRewards: false,
        },
        WBTC: {
            address: '0xbb2d454b459581e2b5f4860dd2762c5c3c1069a5',
            decimals: 8,
            symbol: 'WBTC',
            label: 'WBTC',
            bytes32String: WBTC,
            collateralJoin: '0x226e60c2513c4db44e21a4b783e0010b45dd6a0b',
            collateralAuctionHouse: '0xcd7680876f72c206fd305c30323c16a16bd6be85',
            isCollateral: true,
            hasRewards: false,
        },
        STN: {
            address: '0xb72ff173e0b022d36604673378d450c52f438c3a',
            decimals: 3,
            symbol: 'STN',
            label: 'STN',
            bytes32String: STONES,
            collateralJoin: '0xc199756dd05f99831c11ac668b5c4a44a3f56ea3',
            collateralAuctionHouse: '0x318c360d491dad661ddd502d1e99a9d35bcd270b',
            isCollateral: true,
            hasRewards: false,
        },
        TTM: {
            address: '0x15f0ad2faca0fb11462109a781a38d35d778324a',
            decimals: 0,
            symbol: 'TTM',
            label: 'TTM',
            bytes32String: TOTEM,
            collateralJoin: '0x6353621ed493108d104c65ab98f550fb758055fc',
            collateralAuctionHouse: '0xf9d7f8433986d3bc468861e8668912bd29d48f4a',
            isCollateral: true,
            hasRewards: false,
        },
        HAI: {
            address: '0xd8485245e56f56b53e0c4af4c7d7c81c76747b2e',
            decimals: 18,
            symbol: 'HAI',
            label: 'HAI',
            bytes32String: '',
            collateralJoin: '0xbd68d4fc30ee2a071f85186b5240c80bce8bc50b',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
        KITE: {
            address: '0x47c6ae06686d35dd7656be6af3091fcd626bbb2f',
            decimals: 18,
            symbol: 'KITE',
            label: 'KITE',
            bytes32String: '',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
        VELO: {
            address: '0x1be428e1265d28194b44ac28d5728a1cf81c3469',
            decimals: 18,
            symbol: 'VELO',
            label: 'VELO',
            bytes32String: VELO,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
        HAIVELO: {
            address: '0x1c0541cb726007c3eb917ba4a9e84bffba511c3c',
            decimals: 18,
            symbol: 'HAIVELO',
            label: 'HAIVELO',
            bytes32String: HAIVELO,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
    },
}

export const getTokenList = (network: GebDeployment): TokenList => {
    return tokens[network]
}

export const getAddressList = (network: GebDeployment): ContractList => {
    return addresses[network]
}
