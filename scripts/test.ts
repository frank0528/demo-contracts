import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`deployer address: ${await deployer.getAddress()}`);
  console.log(`deployer balance: ${await deployer.getBalance()}`);

  const demo = await ethers.getContractFactory("DemoCoin", deployer);
  const d = demo.attach('0x970951a12F975E6762482ACA81E57D5A2A4e73F4');

  console.log(`demo name: ${await d.name()}`);
  console.log(`demo symbol: ${await d.symbol()}`);
  console.log(`demo decimals: ${await d.decimals()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
