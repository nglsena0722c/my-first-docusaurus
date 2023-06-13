import React, { useEffect, useState } from "react";
import { GameContainer } from "./GameContainer";
import { GameInit } from "./GameInit";
import { GamePlay } from "./Play/GamePlay";
import { GameData } from "./Play/Character";
import { LCDClient } from "@xpla/xpla.js";
import { NFTInput } from "./NFTInput";

export default function Reactgame() {
  const [gameState, setGameState] = useState<string>("init");
  const [gamedata, setGamedata] = useState<GameData>({
    playerColor: "red",
    enemyColor: "black",
    attackColor: "black",
    hoverColor: "orange",
    pointerColor: "black",
    playerVelocity: 5,
    enemyVelocity: 1,
    increaseEnemyVelocity: 0.1,
    attackVelocity: 10,
    radius: 20,
    attackWidth: 20,
    attackHeight: 5,
    enemyHp: 1,
  });

  useEffect(() => {
    try {
      (async () => {
        const lcd = new LCDClient({
          URL: "https://cube-lcd.xpla.dev/",
          chainID: "cube_47-5",
        });
        const data = await lcd.wasm.contractQuery(
          "xpla12qfmpkkl2p7ljlguus5cdx5v8serc6seued2pqz2r9hhlttnq7rs46wfsu",
          {
            all_nft_info: {
              token_id: "kiting_1",
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
          playerVelocity: parseFloat(
            gamedatas.filter((v) => v.trait_type === "playerVelocity")[0].value
          ),
          enemyVelocity: parseFloat(
            gamedatas.filter((v) => v.trait_type === "enemyVelocity")[0].value
          ),
          increaseEnemyVelocity: parseFloat(
            gamedatas.filter((v) => v.trait_type === "increaseEnemyVelocity")[0]
              .value
          ),
          attackVelocity: parseFloat(
            gamedatas.filter((v) => v.trait_type === "attackVelocity")[0].value
          ),
          radius: parseFloat(
            gamedatas.filter((v) => v.trait_type === "radius")[0].value
          ),
          attackWidth: parseFloat(
            gamedatas.filter((v) => v.trait_type === "attackWidth")[0].value
          ),
          attackHeight: parseFloat(
            gamedatas.filter((v) => v.trait_type === "attackHeight")[0].value
          ),
          enemyHp: parseFloat(
            gamedatas.filter((v) => v.trait_type === "enemyHp")[0].value
          ),
        });
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <GameContainer>
      {gameState === "init" && <GameInit setGameState={setGameState} />}
      {gameState === "play" && (
        <GamePlay setGameState={setGameState} gamedata={gamedata} />
      )}
      {gameState === "nft" && (
        <NFTInput setGameState={setGameState} setGamedata={setGamedata} />
      )}
    </GameContainer>
  );
}
