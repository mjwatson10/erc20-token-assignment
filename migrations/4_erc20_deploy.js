const ERC20 = artifacts.require("ERC20");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ERC20, "Awesome Sauce", "AWS").then(async function(instance){
      await instance.mint(accounts[1], 100);
      let balance = await instance.balanceOf(accounts[1]);
      console.log("This is the new minted token amount: " + balance.toString(10));
    });
};
