// This address points to a dummy ERC20 contract deployed on Ethereum Mainnet,
// Goerli, Kovan, Rinkeby and Ropsten. Replace it with your smart contracts.
const addresses = {
  srg: {
    goerli: "0x8D9a2BFd40B529Ca5F0a60b6606aec376554add0",
    bsctestnet: "0x58C388bb71Ff2a926963cf888Cd793De700d6E9e",
    mumbai: "0x22BbAe6049BBFbf866BDA8a960D23bE86367E5bB"
  },
  stable: {
    busd: {
      bsctestnet: "0xd0d96d19b1fcfc2f6e7a6f0029f329eea71563ab"
    },
    usdtd: {
      bsctestnet: "0xd0d96d19b1fcfc2f6e7a6f0029f329eea71563ab"
    },
    dai: {
      bsctestnet: "0xd0d96d19b1fcfc2f6e7a6f0029f329eea71563ab"
    }
  },
  goldList: {
    goerli: "0xf68a7fea591bfa6d0e912d9acb0278a7d2cd928d",
    bsctestnet: "0x5c19ec2dfd13cbdc5efa34f77f4bc83669604fa6",
    mumbai: "0x855478B6AEeaE3012e0648f84A10aAF9FC64c136"
  },
  coldStaking: {
    goerli: "0x65c307AB0d8a745C8Ba2D81a3436dE16bb4c4050",
    bsctestnet: "0x3D2A57136B2458a175a7eE3C4781dBa5750659D0",
    mumbai: "0xeFde50464566052223fef84D686e5a1da24a6D4E"
  }
};

export default addresses;
