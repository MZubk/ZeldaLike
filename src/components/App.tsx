// settings
import { GAME_SIZE } from "../settings/constants";

// components
import { Board } from "./Board";
import Debugger from "./Debugger";

// style
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div
        style={{ position: "relative", width: GAME_SIZE, height: GAME_SIZE }}
      >
        <Debugger />
        <Board />
      </div>
    </div>
  );
}
