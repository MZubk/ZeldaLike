import { TILE_SIZE } from "../../settings/constants";

import "./index.css";

export const Trap = () => {
  return (
    <>
      <div
        style={{
          height: TILE_SIZE,
          width: TILE_SIZE,
          top: TILE_SIZE * 12,
          left: TILE_SIZE * 15,
          backgroundImage: "url(./assets/trap.png)",
          backgroundRepeat: "no-repeat",
          animation: "trap-animation 1.4s steps(8) infinite",
          position: "absolute",
        }}
      />
    </>
  );
};
