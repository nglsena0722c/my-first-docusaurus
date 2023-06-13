import React, { Dispatch, SetStateAction } from "react";
import Character from "./Character";

export interface StatusType {
  enemyHp : number,
  enemyVelocity : number,
  killScore : number,
  playTime : number,
  gg : boolean
}

export function StatusBar({
  setGameState,
  statusValue
}: {
  setGameState: Dispatch<SetStateAction<string>>;
  statusValue : StatusType;
}) {
    const {enemyHp, enemyVelocity, killScore, playTime} = statusValue;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        borderBottom: "1px solid black",
      }}
    >
      <span
        className="material-symbols-outlined"
        onClick={() => setGameState("init")}
      >
        arrow_back
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </span>
      <span>Kiting</span>
      <span>EnemyHp : {enemyHp}</span>
      <span>EnemyVelocity : {enemyVelocity.toFixed(1)}</span>
      <span>KillScore : {killScore}</span>
      <span style={{width : 200}}>Playtime : {playTime}</span>
    </div>
  );
}
