const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

module.exports = buildModule("TransactionModule", (m) => {

  const transaction = m.contract("Transactions");

  console.log(transaction.contractName);

  return { transaction };
});