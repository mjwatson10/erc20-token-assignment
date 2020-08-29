const Migrations = artifacts.require("SafeMath");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
};
