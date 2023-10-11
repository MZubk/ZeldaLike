import { TILE_SIZE } from "../../../settings/constants";

interface IProps {
  position: { x: number; y: number };
  text: number;
}

function Tile(props: IProps) {
  function getTileColor() {
    switch (props.text) {
      case 0:
        return "yellow";
      case 1:
        return "red";
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
      }}
    >
      {props.text}
    </div>
  );
}

export default Tile;