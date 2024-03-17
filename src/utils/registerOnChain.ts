import { Contract, Signer, constants } from 'ethers';
import json from './TensorRoyale.json'; 

async function registerCommitmentOnchain(signer: Signer, requestId: number, commitment: number) {
  const contractAddress = '0xc28cF49aCCeFB1F570008Fe484d6D5AA22ac3f5C';
  const contract = new Contract(contractAddress, json.abi, signer);

  const txRes = await contract.makeDeposit(constants.AddressZero, requestId, commitment, 0, {
    gasLimit: 3000000,
  });

  const receipt = await txRes.wait();

  return receipt.transactionHash;
}

export default registerCommitmentOnchain;
