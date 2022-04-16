import { createContext, useReducer } from "react";
import {characterReducer} from "../Reducers/characterReducer"


export const CharacterContext = createContext();

const characterState = {
    top: "80%",
    left: "3%",
    speed: 0.5
}

const CharacterContextProvider = (props) => {
    const [characterAttributes, dispatch] = useReducer(
        characterReducer, characterState
    );
    return (
        <CharacterContext.Provider value={{characterAttributes, dispatch}}>
            {props.children}
        </CharacterContext.Provider>
    )

    }

export default CharacterContextProvider;