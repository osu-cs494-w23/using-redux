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

        default:
            return state
    }
}

export default todoReducer
