import React, { Dispatch, SetStateAction, useState } from "react";
import { StatusType } from "./StatusBar";
import { GameData } from "./Character";
import { useForm } from "react-hook-form";
import { Screen } from "./Screen";
import { UserDenied, useConnectedWallet } from "@xpla/wallet-provider";
import { Fee, MsgExecuteContract } from "@xpla/xpla.js";

export function GamePlay({
  setGameState,
  gamedata,
}: {
  setGameState: Dispatch<SetStateAction<string>>;
  gamedata: GameData;
}) {
  const [txResult, setTxResult] = useState(null);
  const [txError, setTxError] = useState(null);

  const form = useForm<StatusType>({
    mode: "onChange",
    defaultValues: {
      enemyHp: 1,
      enemyVelocity: 1,
      killScore: 0,
      playTime: 0,
      gg: false,
    },
  });
  const { watch, setValue, reset } = form;
  const { ...values } = watch();
  const connectedWallet = useConnectedWallet();

  const sendTx = async () => {
    try {
      const transactionMsg = {
        fee: new Fee(200000, "2000000000000000000axpla"),
        msgs: [
          new MsgExecuteContract(
            connectedWallet.walletAddress,
            "xpla1tezzytqrqwxevj3pvcxk7tdljez0g835wk9msuc8nssukl7k4e3s73tadc",
            {
              record: {
                contractaddress: "test",
                finalscore: (values.killScore * values.playTime).toString(),
                killscore: values.killScore.toString(),
                walletaddress: connectedWallet.walletAddress,
              },
            },
            undefined
          ),
        ],
      };

      const tx = await connectedWallet.post(transactionMsg);
      setTxResult(tx);
    } catch (error) {
      if (error instanceof UserDenied) {
        setTxError("User Denied");
      } else {
        setTxError(
          "Unknown Error: " +
            (error instanceof Error ? error.message : String(error))
        );
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {!values.gg ? (
        <Screen
          setGameState={setGameState}
          setValue={setValue}
          values={values}
          gamedata={gamedata}
        />
      ) : (
        <>
          <span>Your Kill Score : {values.killScore}</span>
          <span>Your PlayTime : {values.playTime}</span>
          <span>
            Your Final Score (kill * playtime):{" "}
            {values.killScore * values.playTime}
          </span>
          <br />

          <button
            onClick={() => {
              setGameState("init")
            }}
          >
            back to home
          </button>
          <br />

          <button
            onClick={() => {
              setValue("gg", false);
              reset();
            }}
          >
            restart
          </button>
          <br />

          <button
            onClick={() => {
              sendTx();
            }}
          >
            Record your score (Record your wallet Address, killscroe,
            finalscore, and game contract)
          </button>
          {txResult && <>{JSON.stringify(txResult, null, 2)}</>}
          {txError && <pre>{txError}</pre>}
          <span>
            Score Store Contract :
            xpla1tezzytqrqwxevj3pvcxk7tdljez0g835wk9msuc8nssukl7k4e3s73tadc
          </span>
          <span>
            {" "}
            query :{" "}
            {`{
    "get_scores" : {}
}`}
          </span>
        </>
      )}
    </div>
  );
}
