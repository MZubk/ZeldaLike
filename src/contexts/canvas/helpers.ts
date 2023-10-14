
// settings
import { eDirection, eWalker } from "../../settings/constants";


export function handleNextPosition(direction, position) {
  switch (direction) {
    case eDirection.UP:
      return { x: position.x, y: position.y - 1 };
    case eDirection.DOWN:
      return { x: position.x, y: position.y + 1 };
    case eDirection.LEFT:
      return { x: position.x - 1, y: position.y };
    case eDirection.RIGHT:
      return { x: position.x + 1, y: position.y };
  }
}

export enum eCanvas {
  FLOOR = 0,
  WALL = 1,
  DOOR = 2,
  TRAP = 3,
  MINI_DEMON = 4,
  DEMON = 5,
  CHEST = 6,
  HERO = 7,
}

const FL = eCanvas.FLOOR
const WL = eCanvas.WALL
const DR = eCanvas.DOOR
const TR = eCanvas.TRAP
const MD = eCanvas.MINI_DEMON
const DM = eCanvas.DEMON
const CH = eCanvas.CHEST
const HE = eCanvas.HERO

export const canvas = [
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
  [WL, FL, FL, WL, FL, FL, FL, FL, WL, FL, FL, FL, CH, FL, FL, FL, WL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, TR, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, HE, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
  [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],
];

export function checkValidMovement(nextPosition, walker) {
  const canvasValue = canvas[nextPosition.y][nextPosition.x]

  const result = walker === eWalker.HERO
    ? getHeroValidMoves(canvasValue)
    : getEnemyValidMoves(canvasValue);

  return result
}

function getHeroValidMoves(canvasValue) {
  return {
    valid:
      canvasValue === eCanvas.FLOOR ||
      canvasValue === eCanvas.TRAP ||
      canvasValue === eCanvas.DOOR ||
      canvasValue === eCanvas.MINI_DEMON ||
      canvasValue === eCanvas.DEMON,
    dead:
      canvasValue === eCanvas.TRAP ||
      canvasValue === eCanvas.MINI_DEMON ||
      canvasValue === eCanvas.DEMON,
    chest:
      canvasValue === eCanvas.CHEST,
    door:
      canvasValue === eCanvas.DOOR,
  }
}

function getEnemyValidMoves(canvasValue) {
  return {
    valid: canvasValue === eCanvas.FLOOR || canvasValue === eCanvas.HERO,
    dead: false,
    chest: false,
    door: false
  }
}