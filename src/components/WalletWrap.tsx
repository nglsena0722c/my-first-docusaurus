import {
  WalletControllerChainOptions,
  WalletProvider,
  getChainOptions,
} from "@xpla/wallet-provider";
import React from "react";
import { PropsWithChildren, useEffect, useState } from "react";

const WalletWrap = ({ children }: PropsWithChildren) => {
  const [chainOptions, setChainoptions] =
    useState<WalletControllerChainOptions>();

  useEffect(() => {
    getChainOptions()
      .then((c) => setChainoptions(c))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <WalletProvider {...chainOptions}>{children}</WalletProvider>;
};

export default WalletWrap;
