import { useWallet, WalletStatus } from "@xpla/wallet-provider";
import React, { useState } from "react";
export default function SendTx() {
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
  const [amount, setAmount] = useState<string>('');
  const [to, setTo] = useState<string>('');

  return (
    <div
    className="buttonContainer"
    onClick={clickConnect}
  >
      <div className="mb-2">
        <label
          htmlFor="default-input"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          id="default-input"
          placeholder="Input your Description ex)This is my NFT"
          onChange={(e) => setAmount(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </div>
  </div>
  );
}