import { ContractApis } from './api/contract-apis'
import { GebDeployment, getAddressList } from './contracts'
import * as types from './typechained'
import { ethers } from 'ethers'

/**
 * The main package used to interact with the GEB system. Includes [[deployProxy |helper functions]] for safe
 *  management and the [[contracts | contract interface object]] to directly call smart contracts.
 */
export class StakingManager {
    /**
     * Constructor for the main Geb.js object.
     * @param  {GebDeployment} network Either `'mainnet'`, `'optimism-sepolia'` or an actual list of contract addresses.
     * @param  {GebProviderInterface|ethers.providers.Provider} provider Either a Ethers.js provider or a Geb provider (support for Web3 will be added in the future)
     */
    constructor(public network: GebDeployment, public provider: ethers.providers.Provider) {}

    public getStakingManager() {
        const addressList = getAddressList(this.network)
        const address = addressList.STAKING_MANAGER
        return new ethers.Contract(address, types.StakingManager__factory.abi, this.provider)
    }

    public getStakingToken() {
        const addressList = getAddressList(this.network)
        const address = addressList.STAKING_TOKEN
        return new ethers.Contract(address, types.ERC20__factory.abi, this.provider)
    }
}
