import { useWallet, WalletStatus } from "@xpla/wallet-provider";
import React from "react";
import Translate, {translate} from '@docusaurus/Translate';
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
        <Translate id="ddd">'Connect Wallet'sss</Translate>
      ) : wallets.length == 0 ? (
        'Loading...'
      ) : (
        <span>{(wallets[0].xplaAddress)}</span>
      )}
    </div>
  </div>
  );
}