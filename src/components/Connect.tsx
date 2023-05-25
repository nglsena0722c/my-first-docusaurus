import { useWallet, WalletStatus } from "@xpla/wallet-provider";
import React from "react";
export default function Connect() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    connect,
    disconnect,
  } = useWallet();
  const clickConnect = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      connect(availableConnectTypes[0]);
    } else {
      disconnect();
    }
  };
  return (
    <div
    className="buttonContainer"
    onClick={clickConnect}
  >
    <div className="connectwallet">
      {status === WalletStatus.WALLET_NOT_CONNECTED ? (
        'Connect Wallet'
      ) : wallets.length == 0 ? (
        'Loading...'
      ) : (
        <span>{(wallets[0].xplaAddress)}</span>
      )}
    </div>
  </div>
  );
}