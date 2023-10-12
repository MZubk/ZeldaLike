import React from "react";
import { TILE_SIZE } from "../../settings/constants";

import "./index.css";

interface IProps {
  initialPosition: { x: number; y: number };
}

export const Chest = (props: IProps) => {
  return (
    <>
      <div
        style={{
          height: 96,
          width: TILE_SIZE,
          top: TILE_SIZE * props.initialPosition.y,
          left: TILE_SIZE * props.initialPosition.x,
          backgroundImage: "url(./assets/chest.png)",
          backgroundRepeat: "no-repeat",
          animation: "chest-animation 1s steps(3) infinite",
          position: "absolute",
        }}
      />
    </>
  );
};
