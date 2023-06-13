import React, { Dispatch, ReactNode, useState } from "react";
import { GameData } from "./Play/Character";
import { LCDClient } from "@xpla/xpla.js";
import { UserDenied } from "@xpla/wallet-provider";

export function NFTInput({
  setGameState,
  setGamedata,
}: {
  setGameState: Dispatch<React.SetStateAction<string>>;
  setGamedata: Dispatch<React.SetStateAction<GameData>>;
}) {
  const [tokenId, setTokenId] = useState<string>("");
  const [error, setError] = useState<string>("");

  const clickPlay = async () => {
    try {
      await (async () => {
        const lcd = new LCDClient({
          URL: "https://cube-lcd.xpla.dev/",
          chainID: "cube_47-5",
        });
        const data = await lcd.wasm.contractQuery(
          "xpla12qfmpkkl2p7ljlguus5cdx5v8serc6seued2pqz2r9hhlttnq7rs46wfsu",
          {
            all_nft_info: {
              token_id: tokenId,
            },
          }
        );
        const gamedatas: {
          trait_type: string;
          value: string;
        }[] = data.info.extension.attributes;

        setGamedata({
          playerColor: gamedatas.filter(
            (v) => v.trait_type === "playerColor"
          )[0].value,
          enemyColor: gamedatas.filter((v) => v.trait_type === "enemyColor")[0]
            .value,
          attackColor: gamedatas.filter(
            (v) => v.trait_type === "attackColor"
          )[0].value,
          hoverColor: gamedatas.filter((v) => v.trait_type === "hoverColor")[0]
            .value,
          pointerColor: gamedatas.filter(
            (v) => v.trait_type === "pointerColor"
          )[0].value,
          playerVelocity: parseInt(
            gamedatas.filter((v) => v.trait_type === "playerVelocity")[0].value,
            10
          ),
          enemyVelocity: parseInt(
            gamedatas.filter((v) => v.trait_type === "enemyVelocity")[0].value,
            10
          ),
          increaseEnemyVelocity: parseInt(
            gamedatas.filter((v) => v.trait_type === "increaseEnemyVelocity")[0]
              .value,
            10
          ),
          attackVelocity: parseInt(
            gamedatas.filter((v) => v.trait_type === "attackVelocity")[0].value,
            10
          ),
          radius: parseInt(
            gamedatas.filter((v) => v.trait_type === "radius")[0].value,
            10
          ),
          attackWidth: parseInt(
            gamedatas.filter((v) => v.trait_type === "attackWidth")[0].value,
            10
          ),
          attackHeight: parseInt(
            gamedatas.filter((v) => v.trait_type === "attackHeight")[0].value,
            10
          ),
          enemyHp: parseInt(
            gamedatas.filter((v) => v.trait_type === "enemyHp")[0].value,
            10
          ),
        });
        setGameState("play");
      })();
    } catch (error) {
      if (error instanceof UserDenied) {
        setError("User Denied");
      } else {
        setError(
          `Unknown Error: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        height: 600,
      }}
    >
      <input
        placeholder="input your nft token_id"
        onChange={(e) => setTokenId(e.target.value)}
      />
      <button onClick={clickPlay}>play</button>
      <button
        onClick={() => {
          setGameState("init");
        }}
      >
        back to home
      </button>
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}
