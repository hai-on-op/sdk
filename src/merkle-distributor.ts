import { ContractApis } from './api/contract-apis'
import * as types from './typechained'
import { ethers } from 'ethers'

// import { MerkleDistributor } from './generated/MerkleDistributor'
// import { MerkleDistributorFactory } from './generated/MerkleDistributorFactory'

/**
 * The main package used to interact with the GEB system. Includes [[deployProxy |helper functions]] for safe
 *  management and the [[contracts | contract interface object]] to directly call smart contracts.
 */
export class MerkleDistributor {
    /**
     * Constructor for the main Geb.js object.
     * @param  {GebDeployment} network Either `'mainnet'`, `'optimism-sepolia'` or an actual list of contract addresses.
     * @param  {GebProviderInterface|ethers.providers.Provider} provider Either a Ethers.js provider or a Geb provider (support for Web3 will be added in the future)
     */
    constructor(public contracts: ContractApis, public provider: ethers.providers.Provider) {}

    public getMerkleDistributor(distributorAddress: string) {
        return new ethers.Contract(distributorAddress, types.IMerkleDistributor__factory.abi, this.provider)
    }
}
