import useEnemyMovement from "../../hooks/useEnemyMovement";
import { HEAD_OFFSET, TILE_SIZE, eDirection } from "../../settings/constants";

import "./index.css";

interface IProps {
  initialPosition: { x: number; y: number };
}

export const MiniDemon = (props: IProps) => {
  const movement = useEnemyMovement(props.initialPosition);

  return (
    <>
      <div
        style={{
          height: TILE_SIZE + HEAD_OFFSET,
          width: TILE_SIZE,
          top: TILE_SIZE * movement.position.y - HEAD_OFFSET,
          left: TILE_SIZE * movement.position.x,
          backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
          backgroundImage: "url(./assets/mini-demon.png)",
          backgroundRepeat: "no-repeat",
          animation: "mini-demon-animation 1.1s steps(4) infinite",
          transform: `scaleX(${
            movement.direction === eDirection.RIGHT ? 1 : -1
          })`,
          position: "absolute",
        }}
      />
    </>
  );
};
