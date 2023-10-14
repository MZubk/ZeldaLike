import { ReactNode, createContext, useState } from "react";
import {
  canvas,
  checkValidMovement,
  eCanvas,
  handleNextPosition,
} from "./helpers";

interface IProps {
  children: ReactNode;
}

export const CanvasContext = createContext({
  canvas: [],
  updateCanvas: (direction, currentPosition, walker) => null,
});

export default function CanvasProvider(props: IProps) {
  const [canvasState, updateCanvasState] = useState({
    canvas: canvas,
    updateCanvas: (direction, currentPosition, walker) => {
      const nextPosition = handleNextPosition(direction, currentPosition);
      const nextMove = checkValidMovement(nextPosition, walker);

      if (nextMove.valid) {
        updateCanvasState((prevState) => {
          const newCanvas = Object.assign([], prevState.canvas);
          const currentValue = newCanvas[currentPosition.y][currentPosition.x];

          newCanvas[currentPosition.y][currentPosition.x] = eCanvas.FLOOR;
          newCanvas[nextPosition.y][nextPosition.x] = currentValue;

          console.log(newCanvas);

          return {
            canvas: newCanvas,
            updateCanvas: prevState.updateCanvas,
          };
        });
      }

      return {
        nextPosition,
        nextMove,
      };
    },
  });

  return (
    <CanvasContext.Provider value={canvasState}>
      {props.children}
    </CanvasContext.Provider>
  );
}
