const { expect } = require("chai");

describe("FlipGem Token", function () {
  let FlipGem;
  let flipGem;
  let owner;
  let addr1;

  beforeEach(async function () {
    FlipGem = await ethers.getContractFactory("FlipGem");
    [owner] = await ethers.getSigners();
    flipGem = await FlipGem.deploy(1000); // Deploy the contract with an initial supply of 1000 tokens
    await flipGem.deployed();
  });

  it("Should have correct name, symbol, and initial supply", async function () {
    expect(await flipGem.name()).to.equal("FlipGem");
    expect(await flipGem.symbol()).to.equal("FGM");
    expect((await flipGem.totalSupply()).toString()).to.equal("1000");
  });

  it("Should mint initial supply to the deployer", async function () {
    const ownerBalance = await flipGem.balanceOf(owner.address);
    expect(ownerBalance.toString()).to.equal("1000");
  });

//   it("Should transfer tokens between accounts", async function () {
//     await flipGem.transfer(addr1.address, 100);

//     const ownerBalance = await flipGem.balanceOf(owner.address);
//     const addr1Balance = await flipGem.balanceOf(addr1.address);

//     expect(ownerBalance).to.equal(900);
//     expect(addr1Balance).to.equal(100);
//   });

//   it("Should fail if trying to transfer more tokens than available", async function () {
//     await expect(flipGem.transfer(addr1.address, 1100)).to.be.revertedWith(
//       "ERC20: transfer amount exceeds balance"
//     );
//   });
});
