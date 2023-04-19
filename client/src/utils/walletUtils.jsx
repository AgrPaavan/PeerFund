import { getGlobalState, setGlobalState } from "../store";
import { loadCampaigns } from "./campaignUtils";
const { ethereum } = window;

const connectWallet = async () => {
  const connectedAccount = getGlobalState("connectedAccount");
  try {
    if (!ethereum) return alert("Please install Metamask");
    if (typeof connectedAccount === "undefined") {
      const accounts = await window.ethereum
        .request({
          method: "wallet_requestPermissions",
          params: [
            {
              eth_accounts: {},
            },
          ],
        })
        .then(() =>
          ethereum.request({
            method: "eth_requestAccounts",
          }),
        );

      setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
      await loadCampaigns();
    }
  } catch (error) {
    reportError(error);
  }
};

const isWallectConnected = async () => {
  try {
    if (!ethereum) return alert("Please install Metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });
    setGlobalState("connectedAccount", accounts[0]?.toLowerCase());

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async () => {
      setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
      await isWallectConnected();
    });

    if (accounts.length) {
      setGlobalState("connectedAccount", accounts[0]?.toLowerCase());
    } else {
      alert("Please connect wallet.");
      console.log("No accounts found.");
    }
  } catch (error) {
    reportError(error);
  }
};

const reportError = (error) => {
  console.log(error.message);
  throw new Error("No ethereum object!");
};

export { connectWallet, isWallectConnected };
