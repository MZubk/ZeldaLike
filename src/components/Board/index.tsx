import { GAME_SIZE } from "../../settings/constants";

import { Hero } from "../Hero";
import { MiniDemon } from "../MiniDemon";
import { Chest } from "../Chest";
import { Demon } from "../Demon";
import { Trap } from "../Trap";
import { canvas, eCanvas } from "../../contexts/canvas/helpers";

function getCanvasMap() {
  const boardArray = [];

  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvas[y][x];

      const position = { x: x, y: y };
      const text = canvas[y][x] || canvasYX;

      const key = `${x}-${y}`;

      if (text === eCanvas.TRAP) {
        boardArray.push(<Trap key={key} initialPosition={position} />);
      }
      if (text === eCanvas.MINI_DEMON) {
        boardArray.push(<MiniDemon key={key} initialPosition={position} />);
      }
      if (text === eCanvas.DEMON) {
        boardArray.push(<Demon key={key} initialPosition={position} />);
      }
      if (text === eCanvas.CHEST) {
        boardArray.push(<Chest key={key} initialPosition={position} />);
      }
      if (text === eCanvas.HERO) {
        boardArray.push(<Hero key={key} initialPosition={position} />);
      }

      // tileArray.push(<Tile key={key} position={position} text={text} />);
    }
  }
  return boardArray;
}

const boardArray = getCanvasMap();

export const Board = () => {
  return (
    <>
      {boardArray}
      <img
        src="./assets/tileset.gif"
        alt="Board"
        width={GAME_SIZE}
        height={GAME_SIZE}
      />
    </>
  );
};
