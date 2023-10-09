import useEnemyMovement from "../../hooks/useEnemyMovement"
import {HEAD_OFFSET, TILE_SIZE, eDirection} from "../../settings/constants"

import "./index.css"

const initialPosition = {
  x: 5,
  y: 15
}

export const MiniDemon = () => {
  const movement = useEnemyMovement(initialPosition)

  return (
    <>
    <div style={{
        height: TILE_SIZE + HEAD_OFFSET, 
        width: TILE_SIZE,        
        bottom: TILE_SIZE * movement.position.x,
        left: TILE_SIZE * movement.position.y,
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundImage:"url(./assets/mini-demon.png)",
        backgroundRepeat: 'no-repeat',
        animation: "mini-demon-animation 1.1s steps(4) infinite",
        transform: `scaleX(${movement.direction === eDirection.RIGHT ? 1 : -1})`,
        position: "absolute",        
        }}/>
    </>
  )
}
