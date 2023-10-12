import { TILE_SIZE } from "../../settings/constants";

import "./index.css";

interface IProps {
  initialPosition: { x: number; y: number };
}

export const Trap = (props: IProps) => {
  return (
    <>
      <div
        style={{
          height: TILE_SIZE,
          width: TILE_SIZE,
          top: TILE_SIZE * props.initialPosition.y,
          left: TILE_SIZE * props.initialPosition.x,
          backgroundImage: "url(./assets/trap.png)",
          backgroundRepeat: "no-repeat",
          animation: "trap-animation 1.4s steps(8) infinite",
          position: "absolute",
        }}
      />
    </>
  );
};
