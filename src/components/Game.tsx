// component
import CanvasProvider from "../contexts/canvas";
import { Board } from "./Board";
import Debugger from "./Debugger";

export default function Game() {
  return (
    <>
      <CanvasProvider>
        <Debugger />
        <Board />
      </CanvasProvider>
    </>
  );
}
