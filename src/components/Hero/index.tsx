import { HEAD_OFFSET, TILE_SIZE, eDirection } from "../../settings/constants";
import useHeroMovement from "../../hooks/useHeroMovement";

import "./index.css";

interface IProps {
  initialPosition: { x: number; y: number };
}

export const Hero = (props: IProps) => {
  const { position, direction } = useHeroMovement(props.initialPosition);

  return (
    <>
      <div
        style={{
          height: TILE_SIZE + HEAD_OFFSET,
          width: TILE_SIZE,
          top: TILE_SIZE * position.y - HEAD_OFFSET,
          left: TILE_SIZE * position.x,
          backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
          backgroundImage: "url(./assets/hero.png)",
          backgroundRepeat: "no-repeat",
          animation: "hero-animation 780ms steps(4) infinite",
          transform: `scaleX(${direction === eDirection.RIGHT ? 1 : -1})`,
          position: "absolute",
          zIndex: 1,
        }}
      />
    </>
  );
};
