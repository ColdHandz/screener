import { createStore } from 'redux'

// actions
const increment = () => {
    return {
        type: 'increment'
    }
}

const decrement = () => {
    return {
        type: 'decrement'
    }
}

const setStateTo100 = 'setStateTo100'

// reducer
const counter = (state = 0, action) => {
    switch(action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'setStateTo100':
            return 100
    }
}

// store
let store = createStore(counter)

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch({ type: 'setStateTo100' })

export default store