export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

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
