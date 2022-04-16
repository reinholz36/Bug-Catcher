import { CharacterContext } from "../Contexts/characterContext";
import {useContext, useEffect} from "react";

const Character = () => {
    let character = useContext(CharacterContext)
    let interval = '';
    let recentKey = '';
    let intervalSpeed = 33.33;

    const characterStyle = {
        height: "5.333%",
        width: "3%",
        position: "absolute",
        backgroundColor: "green",
        top: character.characterAttributes.top,
        left: character.characterAttributes.left
    }

    const characterControls = (e) => {
        if(e.repeat) return;
        if(e.key === "ArrowRight") {
            e.preventDefault()
            clearInterval(interval)
            recentKey = "ArrowRight"
            interval = setInterval(() => {
                character.dispatch({type: "MOVE_RIGHT"})
            }, 
            intervalSpeed)
        }
        if(e.key === "ArrowLeft") {
            e.preventDefault()
            clearInterval(interval)
            recentKey = "ArrowLeft"
            interval = setInterval(() => {
                character.dispatch({type: "MOVE_LEFT"})
            }, 
            intervalSpeed)
        }  
        
    } 

    useEffect(()=> {
       window.addEventListener("keydown", characterControls) 
       window.addEventListener("keyup", (e) => {
           if(e.key === recentKey) {
               clearInterval(interval)
           }
       })
    },[])

    return (
      <div className="Character" style={characterStyle}>
          
      </div>
    );
  }
  
  export default Character;