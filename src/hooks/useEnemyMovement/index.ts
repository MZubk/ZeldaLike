import { useEffect, useState } from "react";
import { eDirection } from "../../settings/constants";
import { handleNextPosition } from "../../contexts/canvas/helpers";

function useEnemyMovement(initialPosition) {
  const [positionState, updatePositionState] = useState(initialPosition);
  const [direction, updateDirectionState] = useState(eDirection.RIGHT);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const random = Math.floor(Math.random() * 4);
      const directionArray = Object.values(eDirection);
      const randomDirection = directionArray[random];

      const nextMovement = handleNextPosition(randomDirection, positionState);

      updatePositionState(nextMovement);
      updateDirectionState(randomDirection);
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
