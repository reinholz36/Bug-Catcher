export const LevelReducer=(state, action) => {
    switch(action){
        case "RESIZE_LANDSCAPE": 
        return {
            ...state,
            width: window.innerHeight * 1.777,
            height: window.innerHeight
        }

        case "RESIZE_PORTRAIT":
        return {
            ...state,
            width: window.innerWidth,
            height: window.innerWidth / 1.777
        }

        default:
        return {
            ...state
        }
    }
}