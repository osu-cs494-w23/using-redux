import { ADD_TODO, TOGGLE_TODO } from './actions'

let todoId = 0
function todoReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    text: action.text,
                    completed: false,
                    id: ++todoId
                },
                ...state
            ]
        case TOGGLE_TODO:
            return state.map(todo => (
                todo.id === action.id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo
            ))
        default:
            return state
    }
}

export default todoReducer
