import { VisibilityFilters, SET_VISIBILITY_FILTER } from "./actions"

function visibilityFilterReducer(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        // case ADD_TODO:
        //     return VisibilityFilters.SHOW_ALL
        default:
            return state
    }
}

export default visibilityFilterReducer
