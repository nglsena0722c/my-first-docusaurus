import { useConnectedWallet, UserDenied, useWallet, WalletStatus } from "@xpla/wallet-provider";
import React, { useState } from "react";
import { Fee,  MsgSend, TxResult } from '@xpla/xpla.js';

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
  const [recipient, setRecipient] = useState<string>('');

  const [txResult, setTxResult] = useState<TxResult | null>(null);
  const [txError, setTxError] = useState<string>(null);
  
  const connectedWallet = useConnectedWallet();

  const handleSend = async () => {
    try{

    const transactionMsg = {
        fee: new Fee(500000, '500000000000000000axpla'),
        msgs: [
          new MsgSend(
            connectedWallet.walletAddress,
            recipient,
            {
                axpla : `${amount}000000000000000000`
            }
          ),
        ],
      };
      const tx = await connectedWallet.post(transactionMsg);
      setTxResult(tx);
    } catch (error) {
      if (error instanceof UserDenied) {
        setTxError('User Denied');
      } else {
        setTxError(
          `Unknown Error: ${
            error instanceof Error ? error.message : String(error)
          }`,
        );
      }
    }

  }

  return (
<>
<div
    className="buttonContainer"
  >
      <div className="mb-2">
        <label
          htmlFor="default-input"
          className="connectwallet"
        >
          Recipient
        </label>
        <input
          autoComplete="off"
          type="text"
          id="default-input"
          placeholder="Input Recipient's xpla address."
          onChange={(e) => setRecipient(e.target.value)}
          className="connectwallet"
          style={{
            width : '100%'
          }}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="default-input"
          className="connectwallet"
        >
          Amount
        </label>
        <input
          type="text"
          id="default-input"
          autoComplete="off"
          placeholder="Input number. If you want to send 1 Xpla, just input 1."
          onChange={(e) => setAmount(e.target.value)}
          className="connectwallet"
          style={{
            width : '100%'
          }}
        />
      </div>
  </div>
  <button onClick={handleSend}>
    send
  </button>
  <div className="connectwallet">
        <div className="connectwallet">
          Result
          {txResult && (
            <a
              href={`https://explorer.xpla.io/${network.name}/tx/${txResult.result.txhash}`}
              target="_blank"
              rel="noreferrer"
            >
              {txResult.result.txhash}
            </a>
          )}
          <span>{txError}</span>
        </div>
      </div>
</>
  );
}