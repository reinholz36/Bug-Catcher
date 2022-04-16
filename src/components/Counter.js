import { useReducer } from 'react' // import useReducer hook

// useState is local state for one component | its also the easiest to implement
// useReducer is more helpful if the component will manage a lot of state or having multiple components using that state
// useReducer is a little more complex to use compared to useState
// contextAPI larger feature maybe 10 or more components
// Redux the entire app || useReducer


// create a reducer, which is responsible for changing the state
// state is the current state
// action tells us what to change, and we can pass in data to change state to data
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            if (action.scoreType === 'wins') {
                return { ...state, wins: state.wins + 1 }
            } else if (action.scoreType === 'losses') {
                return { ...state, losses: state.losses + 1 }
            }  else if (action.scoreType === 'ties') {
                return { ...state, ties: state.ties + 1 }
            }
            return state

        case 'decrement':
            if (action.scoreType === 'wins') {
                return { ...state, wins: state.wins - 1 }
            } else if (action.scoreType === 'losses') {
                return { ...state, losses: state.losses - 1 }
            }  else if (action.scoreType === 'ties') {
                return { ...state, ties: state.ties - 1 }
            }
            return state;

        default:
            console.log('i couldnt find anything to match to')
            return state
    }
}

const Counter = ({ initialCount }) => {
    const [state, dispatch] = useReducer(reducer, {
        wins: initialCount,
        losses: initialCount,
        ties: initialCount
    })

    const handleIncrease = scoreType => dispatch({ type: 'increment', scoreType})
    const handleDecrease = scoreType => dispatch({ type: 'decrement', scoreType})

    return <div>
        <div>
            Wins: {state.wins}
            <div>
                <button onClick={() => handleIncrease('wins')}>Increase Wins</button>
                <button onClick={() => handleDecrease('wins')}>Decrease Wins</button>
            </div>
        </div>
        <div>
            Losses: {state.losses}
            <div>
                <button onClick={() => handleIncrease('losses')}>Increase Losses</button>
                <button onClick={() => handleDecrease('losses')}>Decrease Losses</button>
            </div>
        </div>
        <div>
            Ties: {state.ties}
            <div>
                <button onClick={() => handleIncrease('ties')}>Increase Ties</button>
                <button onClick={() => handleDecrease('ties')}>Decrease Ties</button>
            </div>
        </div>
        <button onClick={() => dispatch({ type: 'whatever' })}>DO SOMETHING NOT RELATED TO THE STORE</button>
    </div>
}

export default {Counter}