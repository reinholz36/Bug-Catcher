import { createContext, useReducer } from "react";
import { LevelReducer } from "../Reducers/levelReducer"


export const LevelContext = createContext();

const screenSize = {
    width: window.innerHeight * 1.777,
    height: window.innerHeight
}

const LevelContextProvider = (props) => {
    const [levelAttributes, dispatch] = useReducer(
        LevelReducer, screenSize
    );
    return (
        <LevelContext.Provider value={{levelAttributes, dispatch}}>
            {props.children}
        </LevelContext.Provider>
    )

    }

export default LevelContextProvider;