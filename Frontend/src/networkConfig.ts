import { getFullnodeUrl } from "@iota/iota-sdk/client";
import { createNetworkConfig } from "@iota/dapp-kit";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: {
        packageId:
          "0xf7440e762360bc48cacfa5323d19d7bfff5c51ec9eb75920261d02ce6172f834",
        redemptionRegistry:
          "0xd64a3e11a5d6a200465132d24c1810a28317b145155e1e9c0d1a2e0f7a2e227c",
      },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        packageId: "<YOUR_PACKAGE_ID>",
        redemptionRegistry: "<YOUR_REDEMPTION_REGISTRY_ADDRESS>",
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
