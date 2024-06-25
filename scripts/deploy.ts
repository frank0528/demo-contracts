import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);

  // We get the contract to deploy
  const demo = await ethers.getContractFactory("DemoCoin", deployer);
  const res = await demo.deploy();

  console.log('demo address: ' + res.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
