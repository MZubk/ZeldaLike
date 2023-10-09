import {DEMON_TILE_SIZE, TILE_SIZE} from "../../settings/constants"

import "./index.css"

export const Demon = () => {
  return (
    <>
    <div style={{
        height: DEMON_TILE_SIZE, 
        width: DEMON_TILE_SIZE,        
        bottom: TILE_SIZE * 15,
        left: TILE_SIZE * 2,
        backgroundImage:"url(./assets/demon.png)",
        backgroundRepeat: 'no-repeat',
        animation: "demon-animation 1.1s steps(4) infinite",
        position: "absolute",        
        }}/>
    </>
  )
}
