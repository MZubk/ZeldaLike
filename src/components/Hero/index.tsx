import {HEAD_OFFSET, TILE_SIZE, eDirection} from "../../settings/constants"
import useHeroMovement from '../../hooks/useHeroMovement'

import "./index.css"

const initialPosition = {
  x: 2,
  y: 2
}

export const Hero = () => {
  const {position, direction} = useHeroMovement(initialPosition)  

  return (
    <>
    <div style={{
        height: TILE_SIZE + HEAD_OFFSET, 
        width: TILE_SIZE,        
        bottom: TILE_SIZE * position.x,
        left: TILE_SIZE * position.y,        
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundImage:"url(./assets/hero.png)",
        backgroundRepeat: 'no-repeat',
        animation: "hero-animation 780ms steps(4) infinite",
        transform: `scaleX(${direction === eDirection.RIGHT ? 1 : -1})`,
        position: "absolute",        
        }}/>
    </>
  )
}
