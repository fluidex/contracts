const { expect } = require("chai");

describe("Fluidex", () => {
  let fluidex;
  let erc20Mock;
  let sender;
  let senderAddr;
  let acc2;
  let acc2addr;
  const initialBalance = 1000;
  const decimal = 2;

  before(async () => {
    [sender, acc2] = await ethers.getSigners();
    senderAddr = sender.address;
    acc2addr = acc2.address;

    const fluidexFactory = await ethers.getContractFactory("Fluidex");
    fluidex = await fluidexFactory.deploy();

    const erc20Factory = await ethers.getContractFactory("MockERC20");
    erc20Mock = await erc20Factory.deploy(
      "Test Token",
      "TST",
      decimal,
      acc2addr,
      1000
    );
    await fluidex.deployed();
    await fluidex.initialize();
    await erc20Mock.deployed();
    await erc20Mock.connect(acc2).approve(fluidex.address, 1000);
  });

  it("Add token, deposit, withdraw", async function () {
    const depositAmount = 500;
    const withdrawAmount = 300;
    const tokenId = 1;
    await expect(fluidex.addToken(erc20Mock.address))
      .to.emit(fluidex, "NewToken")
      .withArgs(erc20Mock.address, tokenId);
    await expect(await fluidex.tokenIdToAddr(tokenId)).to.equal(
      erc20Mock.address
    );
    await expect(await fluidex.tokenAddrToId(erc20Mock.address)).to.equal(
      tokenId
    );

    await expect(
      fluidex
        .connect(acc2)
        .depositERC20(erc20Mock.address, acc2addr, depositAmount)
    )
      .to.emit(fluidex, "Deposit")
      .withArgs(tokenId, acc2addr, depositAmount);
    await expect(
      fluidex.withdrawERC20(erc20Mock.address, acc2addr, withdrawAmount)
    )
      .to.emit(fluidex, "Withdraw")
      .withArgs(tokenId, acc2addr, withdrawAmount);
  });
});
