const ERC20 = artifacts.require("ERC20");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ERC20, "Awesome Sauce", "AWS").then(function(instance){
    instance.mint(accounts[0], 100);
  });
};