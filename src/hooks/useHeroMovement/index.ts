import { CanvasContext } from './../../contexts/canvas/index';
import { useContext, useEffect, useState } from "react";
import { eDirection, eWalker } from "../../settings/constants";


function useHeroMovement(initialPosition) {
  const canvasContext = useContext(CanvasContext)
  const [positionState, updatePositionState] = useState(initialPosition);
  const [direction, updateDirectionState] = useState(eDirection.RIGHT);

  useEffect(() => {
    const keydown = (e) => {
      const direction = e.key;

      if (
        direction === eDirection.UP ||
        direction === eDirection.DOWN ||
        direction === eDirection.LEFT ||
        direction === eDirection.RIGHT
      ) {

        const movement = canvasContext.updateCanvas(direction, positionState, eWalker.HERO)

        if (movement.nextMove.valid) {
          updatePositionState(movement.nextPosition)
        }
        updateDirectionState(direction)

        if (movement.nextMove.dead) {
          console.log(`ah lá o otário morreu hehe ${movement.nextMove.dead}`)
        }
      }
    };

    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  });
  return {
    position: positionState,
    direction: direction,
  };
}

export default useHeroMovement;
