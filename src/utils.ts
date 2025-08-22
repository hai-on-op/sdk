import { BigNumberish, BigNumber, FixedNumber } from '@ethersproject/bignumber'

// === Constants ===

/**
 * byte32 value for the "ETH-A" collateral
 */
const ETH_A = '0x4554482d41000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "WETH" collateral
 */
const WETH = '0x5745544800000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "WSTETH" collateral
 */
const WSTETH = '0x5753544554480000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "OP" collateral
 */
const OP = '0x4f50000000000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "SNX" collateral
 */
const SNX = '0x534e580000000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "WBTC" collateral
 */
const WBTC = '0x5742544300000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "TBTC" collateral
 */
const TBTC = '0x5442544300000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "RETH" collateral
 */
const RETH = '0x5245544800000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "LUSD-A" collateral
 */
const LUSD_A = '0x4c5553442d410000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "SUSD-A" collateral
 */
const SUSD_A = '0x535553442d410000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "LINK" collateral
 */
const LINK = '0x4c494e4b00000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "LDO" collateral
 */
const LDO = '0x4c444f0000000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "UNI" collateral
 */
const UNI = '0x554e490000000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "VELO" collateral
 */
const VELO = '0x56454c4f00000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "HAIVELO" collateral
 */
const HAIVELO = '0x48414956454c4f00000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "APXETH" collateral
 */
const APXETH = '0x4150584554480000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "ALETH" collateral
 */
const ALETH = '0x414c455448000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "MOO-VELO-V2-OP-VELO" collateral
 */
const MOO_VELO_V2_OP_VELO = '0x4d4f4f2d56454c4f2d56322d4f502d56454c4f00000000000000000000000000'
/**
 * byte32 value for the "YV-VELO-ALETH-WETH" collateral
 */
const YV_VELO_ALETH_WETH = '0x59562d56454c4f2d414c4554482d574554480000000000000000000000000000'
/**
 * byte32 value for the "MSETH" collateral
 */
const MSETH = '0x4d53455448000000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "FRXETH" collateral
 */
const FRXETH = '0x4652584554480000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "SFRXETH" collateral
 */
const SFRXETH = '0x5346525845544800000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "PENDLE" collateral
 */
const PENDLE = '0x50454e444c450000000000000000000000000000000000000000000000000000'
/**
 * byte32 value for the "STONES" collateral
 */
const STONES = '0x53544f4e45530000000000000000000000000000000000000000000000000000'

/**
 * byte32 value for the "TOTEM" collateral
 */
const TOTEM = '0x544f54454d000000000000000000000000000000000000000000000000000000'

/**
 * 0x0 address or burn address
 */
const NULL_ADDRESS = '0x0000000000000000000000000000000000000000'

/**
 * Constant 10^18
 */
const WAD = BigNumber.from('1000000000000000000')

/**
 * Constant 10^27
 */
const RAY = BigNumber.from('1000000000000000000000000000')

/**
 * Constant 10^45
 */
const RAD = BigNumber.from('1000000000000000000000000000000000000000000000')

// ==== Utils functions ===

/**
 * Return a fixed number object from a RAD
 * @param  {BigNumberish} rad
 */
const radToFixed = (rad: BigNumberish) => {
    return FixedNumber.fromValue(BigNumber.from(rad), 45, 'fixed256x45')
}

/**
 * Return a fixed number object from a RAD
 * @param  {BigNumberish} rad
 */
const rayToFixed = (ray: BigNumberish) => {
    return FixedNumber.fromValue(BigNumber.from(ray), 27, 'fixed256x27')
}

/**
 * Return a fixed number object from a RAD
 * @param  {BigNumberish} wad
 */
const wadToFixed = (wad: BigNumberish) => {
    return FixedNumber.fromValue(BigNumber.from(wad), 18, 'fixed256x18')
}

/**
 * Multiply by the power of 10 !! Precision loss if shift < 0 !!
 * @param val Value to convert
 * @param shift Number of places to shift the decimal
 */
const decimalShift = (val: BigNumberish, shift: number) => {
    if (shift > 0) {
        return BigNumber.from(val).mul(BigNumber.from(10).pow(shift))
    } else if (shift < 0) {
        return BigNumber.from(val).div(BigNumber.from(10).pow(Math.abs(shift)))
    } else {
        BigNumber.from(val)
    }

    return BigNumber.from(val)
}

/**
 * Given any kind of error object from an Ethereum RPC, this Will look for an error string from a Solidity require statement. Returns null if not found.
 * @param  {any} RPC error object of any kind
 * @returns string
 */
const getRequireString = (error: any): string | null => {
    // Stringify to object
    let str: string
    try {
        str = JSON.stringify(error)
    } catch {
        return null
    }
    // Search for the require error string selector 0x08c379a0
    const hexerrorArray = str.match(/0x08c379a0[0-9a-fA-F]*/g)

    if (hexerrorArray) {
        // Convert from hex to UTF-8 string
        return decodeURIComponent(hexerrorArray[0].slice(12).replace(/[0-9a-f]{2}/g, '%$&'))
            .replace(/\0/g, '')
            .slice(2)
    } else {
        return null
    }
}

export {
    // Constants
    WETH,
    WSTETH,
    OP,
    SNX,
    ETH_A,
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
    APXETH,
    ALETH,
    YV_VELO_ALETH_WETH,
    MSETH,
    MOO_VELO_V2_OP_VELO,
    FRXETH,
    SFRXETH,
    PENDLE,
    STONES,
    TOTEM,
    NULL_ADDRESS,
    WAD,
    RAY,
    RAD,
    //Utils
    wadToFixed,
    rayToFixed,
    radToFixed,
    decimalShift,
    getRequireString,
}
