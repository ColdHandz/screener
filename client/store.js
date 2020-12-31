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

// reducer
const counter = (state = 0, action) => {
    switch(action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
    }
}

// store
let store = createStore(counter)

store.dispatch(increment())
store.dispatch(decrement())

export default store