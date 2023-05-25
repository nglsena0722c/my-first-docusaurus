import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import {
  getChainOptions,
  WalletControllerChainOptions,
  WalletProvider,
} from "@xpla/wallet-provider";
import Connect from "../components/Connect";
import ConnectWallet from "../components/ConnectWallet";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [chainOptions, setChainoptions] =
    useState<WalletControllerChainOptions>();

  useEffect(() => {
    getChainOptions()
      .then((c) => setChainoptions(c))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  
  // const clickConnect = () => {
  //   if (status === WalletStatus.WALLET_NOT_CONNECTED) {
  //     connect(availableConnectTypes[0]);
  //   } else {
  //     disconnect();
  //   }
  // };

  return (
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Docusaurus Tutorial - 5min ⏱️
            </Link>
          </div>
          <div
            className="block cursor-pointer rounded-lg border bg-white p-2 text-sm shadow hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 md:p-4"
          >
            <div className="flex items-center justify-between gap-4">
            </div>
          </div>
        </div>
      </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
