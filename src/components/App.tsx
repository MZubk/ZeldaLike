import { Board } from "./Board";
import { GAME_SIZE } from "../settings/constants";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div
        style={{ position: "relative", width: GAME_SIZE, height: GAME_SIZE }}
      >
        <Board />
      </div>
    </div>
  );
}
