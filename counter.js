const { createStore } = require('redux')

/*
 * { type: 'INCREMENT', amount: 3 }
 */
function incrementAction(amount) {
    return { type: 'INCREMENT', amount: amount }
}

/*
 * { type: 'DECREMENT', amount: 2 }
 */
function decrementAction(amount) {
    return { type: 'DECREMENT', amount: amount }
}

const initialState = {
    count: 0,
    someOtherValue: 'something'
}
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.amount
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.amount
            }
        default:
            return state
    }
}

const store = createStore(counterReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementAction(1))
store.dispatch(incrementAction(2))
store.dispatch(incrementAction(3))
store.dispatch(incrementAction(4))

unsubscribe()

store.dispatch(decrementAction(1))
store.dispatch(decrementAction(2))
store.dispatch(decrementAction(3))
store.dispatch(decrementAction(4))
