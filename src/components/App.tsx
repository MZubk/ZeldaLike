// settings
import { GAME_SIZE } from "../settings/constants";

// component
import Game from "./Game";

// style
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <div
        style={{ position: "relative", width: GAME_SIZE, height: GAME_SIZE }}
      >
        <Game />
      </div>
    </div>
  );
}
