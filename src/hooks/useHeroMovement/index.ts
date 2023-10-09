import { useEffect, useState } from "react";
import {eDirection} from "../../settings/constants";

function useHeroMovement(initialPosition){
  const [positionState, updatePositionState] = useState(initialPosition)
  const [direction, updateDirectionState] = useState(eDirection.RIGHT)
  
  useEffect(() => {
    const keydown = (e) => {
      if(e.key === eDirection.UP){
        updatePositionState((newPosition)=>({
          ...newPosition, x: newPosition.x + 1
        }))   
      }else if(e.key === eDirection.DOWN){
        updatePositionState((newPosition)=>({
          ...newPosition, x: newPosition.x - 1
        }))  
      }else if(e.key === eDirection.LEFT){
        updatePositionState((newPosition)=>({
          ...newPosition, y: newPosition.y - 1       
        }));updateDirectionState(eDirection.LEFT) 
      }else if(e.key === eDirection.RIGHT){
        updatePositionState((newPosition)=>({
          ...newPosition, y: newPosition.y + 1          
        }));updateDirectionState(eDirection.RIGHT)  
      }
    }
   window.addEventListener('keydown', keydown)
   return () => {
    window.removeEventListener('keydown', keydown)
   }
  })
  return {
    position: positionState,
    direction: direction
  }
}

export default useHeroMovement
