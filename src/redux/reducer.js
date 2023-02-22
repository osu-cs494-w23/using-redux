import { combineReducers } from 'redux'

import todoReducer from './todoReducer'
import visibilityFilterReducer from './visibilityFilterReducer'

const rootReducer = combineReducers({
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer
})

export default rootReducer
