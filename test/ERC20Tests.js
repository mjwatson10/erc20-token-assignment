const ERC20 = artifacts.require("ERC20");
const truffleAssert = require("truffle-assertions");

contract ("ERC20", async function(accounts){

  it("should mint 100 new tokens after migration", async function(){
    let instance = await ERC20.deployed();
    let balance = await instance.balanceOf(accounts[1]);
    assert(balance.toString(10) == "100", "New tokens not minted");
  });

});
