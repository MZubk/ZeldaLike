import useEnemyMovement from "../../hooks/useEnemyMovement";
import {
  DEMON_TILE_SIZE,
  TILE_SIZE,
  eDirection,
} from "../../settings/constants";

import "./index.css";

interface IProps {
  initialPosition: { x: number; y: number };
}

export const Demon = (props: IProps) => {
  const movement = useEnemyMovement(props.initialPosition);

  return (
    <>
      <div
        style={{
          height: DEMON_TILE_SIZE,
          width: DEMON_TILE_SIZE,
          top: TILE_SIZE * movement.position.x,
          left: TILE_SIZE * movement.position.y,
          backgroundImage: "url(./assets/demon.png)",
          backgroundRepeat: "no-repeat",
          animation: "demon-animation 670ms steps(4) infinite",
          transform: `scaleX(${
            movement.direction === eDirection.RIGHT ? 1 : -1
          })`,
          position: "absolute",
        }}
      />
    </>
  );
};
