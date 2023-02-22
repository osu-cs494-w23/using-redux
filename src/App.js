import React from 'react'
import { useSelector } from 'react-redux'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import VisibilityFilterButtons from './components/VisibilityFilterButtons'
import { getActiveTodoCount } from './redux/selectors'

function App() {
    const activeTodoCount = useSelector(getActiveTodoCount)
    return (
        <div>
            <h1>Todos ({activeTodoCount} active)</h1>
            <VisibilityFilterButtons />
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default App
