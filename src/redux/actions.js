export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
}

/*
 * { type: ADD_TODO, text: "New todo text" }
 */
export function addTodo(text) {
    return { type: ADD_TODO, text }
}

/*
 * { type: TOGGLE_TODO, id: 3 }
 */
export function toggleTodo(id) {
    return { type: TOGGLE_TODO, id }
}

/*
 * { type: SET_VISIBILITY_FILTER, filter: SHOW_COMPLETED }
 */
export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}
