import { eDirection } from "../../settings/constants";

export function handleNextPosition(direction, position) {
  switch (direction) {
    case eDirection.UP:
      return { x: position.x + 1, y: position.y };
    case eDirection.DOWN:
      return { x: position.x - 1, y: position.y };
    case eDirection.LEFT:
      return { x: position.x, y: position.y - 1 };
    case eDirection.RIGHT:
      return { x: position.x, y: position.y + 1 };
  }
}
