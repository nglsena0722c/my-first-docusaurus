import React, { Dispatch, SetStateAction } from "react";

export function GameInit({
  setGameState,
}: {
  setGameState: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <h1>Kiting</h1>
      <button onClick={() => setGameState("play")}>start</button>
      <button onClick={() => setGameState("nft")}>start with contract</button>
      <button>how to play</button>
      <span>Sample token id : kiting_1, kiting_2 (default is kiting_1)</span>
      <span>
        upload your token to contract
        (xpla12qfmpkkl2p7ljlguus5cdx5v8serc6seued2pqz2r9hhlttnq7rs46wfsu)
      </span>
      <span>please refer to sample token id.</span>
      <span>
        kiting_1 tx:
        39A6892C300F395CA01718632AB2BCC313DCE2FFD4DAD3C365994108C0A357EF
      </span>
      <span>
        kiting_2 tx:
        A4A9CC69D11212B2A93CC387A5F141AB54126E7D7575BA9F3A686BABF64330EA
      </span>
      <span>
        score store contract :
        xpla1tezzytqrqwxevj3pvcxk7tdljez0g835wk9msuc8nssukl7k4e3s73tadc
      </span>
    </>
  );
}
