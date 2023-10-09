import {HEAD_OFFSET, TILE_SIZE} from "../../settings/constants"

import "./index.css"

export const MiniDemon = () => {
  return (
    <>
    <div style={{
        height: TILE_SIZE + HEAD_OFFSET, 
        width: TILE_SIZE,        
        bottom: TILE_SIZE * 14,
        left: TILE_SIZE * 13,
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundImage:"url(./assets/mini-demon.png)",
        backgroundRepeat: 'no-repeat',
        animation: "mini-demon-animation 1.1s steps(4) infinite",
        position: "absolute",        
        }}/>
    </>
  )
}
