import { eCanvas } from "../../../contexts/canvas/helpers";
import { TILE_SIZE } from "../../../settings/constants";

interface IProps {
  position: { x: number; y: number };
  text: number;
}

function Tile(props: IProps) {
  function getTileColor() {
    switch (props.text) {
      case eCanvas.FLOOR:
        return "darkgrey";
      case eCanvas.WALL:
        return "yellow";
      case eCanvas.DOOR:
        return "white";
      case eCanvas.TRAP:
        return "chartreuse";
      case eCanvas.MINI_DEMON:
      case eCanvas.DEMON:
        return "red";
      case eCanvas.CHEST:
        return "cyan";
      case eCanvas.HERO:
        return "magenta";
    }
  }

  const color = getTileColor();

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE,
        top: TILE_SIZE * props.position.y,
        left: TILE_SIZE * props.position.x,
        position: "absolute",
        border: `2px solid ${color}`,
        color: color,
        fontSize: 32,
        zIndex: 2,
      }}
    >
      {props.text}
    </div>
  );
}

export default Tile;
