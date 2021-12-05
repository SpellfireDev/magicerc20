const MagicERC20 = artifacts.require("MagicERC20");

module.exports = function (deployer) {
  deployer.deploy(MagicERC20);
};