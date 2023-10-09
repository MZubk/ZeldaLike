import { GAME_SIZE } from "../../settings/constants";

import { Hero } from "../Hero";
import { MiniDemon } from "../MiniDemon";
import { Chest } from "../Chest";
import { Demon } from "../Demon";
import { Trap } from "../Trap";

export const Board = () => {
  return (
    <>
      <Chest/>
      <Trap/>
      <Hero />
      <MiniDemon/>
      <Demon/>
      <img src="./assets/tileset.gif" alt="Board" width={GAME_SIZE} height={GAME_SIZE} />
    </>
  );
};
