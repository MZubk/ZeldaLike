export const TILE_SIZE = 48;
export const GAME_SIZE = 20 * 48;

export const DEMON_TILE_SIZE = TILE_SIZE * 2;
export const HEAD_OFFSET = 12;

export enum eDirection {
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
  UP = "ArrowUp",
  DOWN = "ArrowDown",
}

export function randomSpawn() {
  return {
    x: Math.ceil(Math.random() * 15) + 1,
    y: Math.ceil(Math.random() * 15) + 1,
  };
}
