import useEnemyMovement from "../../hooks/useEnemyMovement"
import {DEMON_TILE_SIZE, TILE_SIZE, eDirection} from "../../settings/constants"

import "./index.css"

const initialPosition = {
  x: 8,
  y: 5
}

export const Demon = () => {   
  const movement = useEnemyMovement(initialPosition)

  return (
    <>
    <div style={{
        height: DEMON_TILE_SIZE, 
        width: DEMON_TILE_SIZE,        
        bottom: TILE_SIZE * movement.position.x,
        left: TILE_SIZE * movement.position.y,
        backgroundImage:"url(./assets/demon.png)",
        backgroundRepeat: 'no-repeat',
        animation: "demon-animation 670ms steps(4) infinite",
        transform: `scaleX(${movement.direction === eDirection.RIGHT ? 1 : -1})`,
        position: "absolute",        
        }}/>
    </>
  )
}
