import React from "react";
import { TILE_SIZE } from "../../settings/constants";

import "./index.css";

export const Chest = () => {
  return (
    <>
      <div
        style={{
          height: 96,
          width: TILE_SIZE,
          top: TILE_SIZE * 16,
          left: TILE_SIZE * 10,
          backgroundImage: "url(./assets/chest.png)",
          backgroundRepeat: "no-repeat",
          animation: "chest-animation 1s steps(3) infinite",
          position: "absolute",
        }}
      />
    </>
  );
};
