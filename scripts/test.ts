import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  const demo = await ethers.getContractFactory("DemoCoin", deployer);
  const res = await demo.deploy();
  console.log(`demo address: ${res.address}`);

  const d = demo.attach(res.address);

  console.log(`demo name: ${await d.name()}`);
  console.log(`demo symbol: ${await d.symbol()}`);
  console.log(`demo decimals: ${await d.decimals()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
