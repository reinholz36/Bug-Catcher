import {useContext, useEffect} from "react";
import Character from "../components/Character";
import { LevelContext } from "../Contexts/LevelContext";

const HomePage = () => {

    const level = useContext(LevelContext)
    console.log("level", level)
    const backgroundStyle = {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: level.levelAttributes.width,
        height: level.levelAttributes.height,
        backgroundColor: "gray",
        position: "absolute",
        overflow: "hidden"
    }
    useEffect(()=> {
        if(window.innerHeight * 1.777 > window.innerWidth) {
            level.dispatch("RESIZE_PORTRAIT")
        } else {
            level.dispatch("RESIZE_LANDSCAPE")
        }
        window.onresize = () => {
            if(window.innerHeight * 1.777 > window.innerWidth) {
                level.dispatch("RESIZE_PORTRAIT")
            } else {
                level.dispatch("RESIZE_LANDSCAPE")
            }
        }
    },[])

    return (
      <div className="HomePage" style={backgroundStyle}>
      <Character></Character>
      </div>
    );
  }

  export default HomePage;