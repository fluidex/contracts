const hre = require("hardhat");
const { randomBytes } = require("@ethersproject/random");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const fluidexFactory = await ethers.getContractFactory("Fluidex");
  fluidex = await fluidexFactory.deploy();
  await fluidex.deployed();
  await fluidex.initialize();
  console.log("Fluidex deployed to:", fluidex.address);


  [sender, acc2] = await ethers.getSigners();
  const mockBjj = randomBytes(32);
  console.log("mockBjj:", mockBjj);
  const depositAmount = 500;
  await fluidex
    .connect(acc2)
    .depositETH(mockBjj, {value: depositAmount});

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
