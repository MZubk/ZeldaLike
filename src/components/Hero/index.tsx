import { useEffect, useState } from 'react'

import {HEAD_OFFSET, TILE_SIZE} from "../../settings/constants"

import "./index.css"

const initialPosition = {
  x: 2,
  y: 2
}

export const Hero = () => {
  const [positionState, updatePositionState] = useState(initialPosition)
  
  useEffect(() => {
    const keydown = (e) => {
      if(e.key === 'ArrowUp'){
        updatePositionState((newPosition)=>({
          ...newPosition, x: newPosition.x + 1
        }))   
      }else if(e.key === 'ArrowDown'){
        updatePositionState((newPosition)=>({
          ...newPosition, x: newPosition.x - 1
        }))  
      }else if(e.key === 'ArrowLeft'){
        updatePositionState((newPosition)=>({
          ...newPosition, y: newPosition.y - 1
        }))  
      }else if(e.key === 'ArrowRight'){
        updatePositionState((newPosition)=>({
          ...newPosition, y: newPosition.y + 1
        }))  
      }
    }
   window.addEventListener('keydown', keydown)
   return () => {
    window.removeEventListener('keydown', keydown)
   }
  },[])

  return (
    <>
    <div style={{
        height: TILE_SIZE + HEAD_OFFSET, 
        width: TILE_SIZE,        
        bottom: TILE_SIZE * positionState.x,
        left: TILE_SIZE * positionState.y,        
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        backgroundImage:"url(./assets/hero.png)",
        backgroundRepeat: 'no-repeat',
        animation: "hero-animation 780ms steps(4) infinite",
        position: "absolute",        
        }}/>
    </>
  )
}
