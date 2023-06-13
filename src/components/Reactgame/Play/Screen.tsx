import useCanvas from "@site/src/hooks/useCanvas";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Character, { GameData } from "./Character";
import { StatusBar, StatusType } from "./StatusBar";
import { UseFormSetValue } from "react-hook-form";

export function Screen({
  setGameState,
  setValue,
  values,
  gamedata,
}: {
  setGameState: Dispatch<SetStateAction<string>>;
  setValue: UseFormSetValue<StatusType>;
  values: StatusType;
  gamedata: GameData;
}) {
  const screenRef = useRef<HTMLDivElement>(null);
  let character: Character | null = null;
  const {
    playerColor,
    enemyColor,
    attackColor,
    hoverColor,
    pointerColor,
    playerVelocity,
    enemyVelocity,
    increaseEnemyVelocity,
    attackVelocity,
    radius,
    attackWidth,
    attackHeight,
    enemyHp,
  } = gamedata;

  const canvasRef = useCanvas((canvas) => {
    const canvasWidth = screenRef.current?.clientWidth || 0;
    const canvasHeight = screenRef.current?.clientHeight || 0;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    // canvas.style.background = 'black';
    character = new Character(
      canvas,
      canvasWidth / 2,
      canvasHeight / 2,
      canvasWidth,
      canvasHeight,
      playerColor,
      enemyColor,
      attackColor,
      hoverColor,
      pointerColor,
      playerVelocity,
      enemyVelocity,
      increaseEnemyVelocity,
      attackVelocity,
      radius,
      attackWidth,
      attackHeight,
      enemyHp,
      setValue
    );
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      // 마우스 포인터 모양도 바꿔주면 좋을듯
      character.handleRightClick(e);
    });

    document.addEventListener("mousemove", (e) => {
      character.handleHover(e);
    });
  });
  return (
    <>
      <StatusBar setGameState={setGameState} statusValue={values} />
      <div
        ref={screenRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </>
  );
}

// Reference :
// https://bum-developer.tistory.com/entry/React-React%EC%99%80-Canvas%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94-%EA%B3%B5-%EB%A7%8C%EB%93%A4%EA%B8%B0
// https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
// https://east-star.tistory.com/34
// https://lts0606.tistory.com/599
