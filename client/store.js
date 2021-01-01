import { createStore, combineReducers } from 'redux'
import counter from './reducers/counter.js'

const reducers = combineReducers({
    counter
})

export default createStore(reducers)