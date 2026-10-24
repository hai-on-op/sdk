import { ethers } from 'ethers'
import { GebDeployment, getTokenList, TokenData, TokenList } from './addresses'

/** Explicit, deployment-scoped metadata for an additional collateral. No defaults are replaced. */
export type AdditionalCollateral = TokenData & {
    deployment: GebDeployment
    isCollateral: true
}

export type CollateralConfiguration = {
    additionalCollaterals?: ReadonlyArray<AdditionalCollateral>
}

/**
 * Build an isolated registry for one SDK instance. This checks metadata identity, not on-chain adoption.
 * Callers must verify the deployment, oracle and governance configuration before supplying an entry.
 */
export function createTokenList(network: GebDeployment, configuration: CollateralConfiguration = {}): TokenList {
    const defaults = getTokenList(network)
    if (!defaults) throw new Error(`Unsupported collateral deployment: ${network}`)
    const result: TokenList = {}
    Object.entries(defaults).forEach(([key, token]) => {
        result[key] = { ...token }
    })

    for (const collateral of configuration.additionalCollaterals || []) {
        if (collateral.deployment !== network)
            throw new Error('Additional collateral deployment does not match network')
        if (
            !/^[A-Z][A-Z0-9_]{1,31}$/.test(collateral.symbol) ||
            typeof collateral.label !== 'string' ||
            !collateral.label.trim() ||
            collateral.isCollateral !== true ||
            typeof collateral.hasRewards !== 'boolean' ||
            !Number.isInteger(collateral.decimals) ||
            collateral.decimals < 0 ||
            collateral.decimals > 18 ||
            !ethers.utils.isHexString(collateral.bytes32String, 32) ||
            collateral.bytes32String === ethers.constants.HashZero
        )
            throw new Error('Invalid additional collateral metadata')

        const addresses = [collateral.address, collateral.collateralJoin, collateral.collateralAuctionHouse]
        if (
            addresses.some((address) => !ethers.utils.isAddress(address) || address === ethers.constants.AddressZero) ||
            new Set(addresses.map((address) => address.toLowerCase())).size !== addresses.length
        )
            throw new Error('Invalid additional collateral contract addresses')
        if (
            Object.prototype.hasOwnProperty.call(result, collateral.symbol) ||
            Object.values(result).some(
                (token) =>
                    token.symbol.toLowerCase() === collateral.symbol.toLowerCase() ||
                    token.address.toLowerCase() === collateral.address.toLowerCase() ||
                    token.bytes32String.toLowerCase() === collateral.bytes32String.toLowerCase() ||
                    token.collateralJoin.toLowerCase() === collateral.collateralJoin.toLowerCase() ||
                    token.collateralAuctionHouse.toLowerCase() === collateral.collateralAuctionHouse.toLowerCase()
            )
        )
            throw new Error('Additional collateral conflicts with an existing collateral identity')

        const { deployment: _deployment, ...token } = collateral
        result[collateral.symbol] = token
    }
    return result
}

/** Capture caller-owned input so later edits cannot silently change proxy transaction destinations. */
export function copyCollateralConfiguration(configuration: CollateralConfiguration = {}): CollateralConfiguration {
    return Object.freeze({
        additionalCollaterals: Object.freeze(
            (configuration.additionalCollaterals || []).map((collateral) => Object.freeze({ ...collateral }))
        ),
    })
}
