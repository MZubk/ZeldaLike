import { useContext, useEffect, useState } from "react";
import { eDirection, eWalker } from "../../settings/constants";
import { CanvasContext } from "../../contexts/canvas";

function useEnemyMovement(initialPosition) {
  const canvasContext = useContext(CanvasContext)
  const [positionState, updatePositionState] = useState(initialPosition);
  const [direction, updateDirectionState] = useState(eDirection.RIGHT);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const random = Math.floor(Math.random() * 4);
      const directionArray = Object.values(eDirection);
      const randomDirection = directionArray[random];

      const movement = canvasContext.updateCanvas(randomDirection, positionState, eWalker.ENEMY)

      if (movement.nextMove.valid) {
        updatePositionState(movement.nextPosition)
        updateDirectionState(direction)
      }

    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return {
    position: positionState,
    direction: direction,
  };
}

export default useEnemyMovement;
