import { useEffect, useState } from "react";
import { eDirection } from "../../settings/constants";
import { handleNextPosition } from "../../contexts/canvas/helpers";

function useHeroMovement(initialPosition) {
  const [positionState, updatePositionState] = useState(initialPosition);
  const [direction, updateDirectionState] = useState(eDirection.RIGHT);

  useEffect(() => {
    const keydown = (e) => {
      const direction = e.key;
      const nextPosition = handleNextPosition(direction, positionState);

      updatePositionState(nextPosition);
      updateDirectionState(direction);
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
