import React, { ReactNode, useState } from "react";

export function GameContainer({ children } : {children : ReactNode}) {
  return (
    <div
      style={{
        border: "1px solid #000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        height : 600
      }}
    >
      {children}
    </div>
  );
}
