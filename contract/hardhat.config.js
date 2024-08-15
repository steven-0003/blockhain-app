// https://eth-sepolia.g.alchemy.com/v2/xhTae6b1Xg9Wwtd87-49efd0shupakgL

require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url : 'https://eth-sepolia.g.alchemy.com/v2/xhTae6b1Xg9Wwtd87-49efd0shupakgL',
      accounts: [ '039f5d889898d96257c9869f83a71aa43ab08c311184764a02c08e6d9eb9a98e' ]
    }
  }
}