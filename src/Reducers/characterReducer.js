export const characterReducer=(state, action) => {
    switch(action.type){
        case "MOVE_LEFT": 
        if(parseFloat(state.left) === 0) return state
        return {
            ...state,
            left: parseFloat(state.left) - state.speed + "%",
            
        }

        case "MOVE_RIGHT":
        if(parseFloat(state.left) === 97) return state
        return {
            ...state,
            left: parseFloat(state.left) + state.speed + "%",   
        }

        default:
        return {
            ...state
        }
    }
}