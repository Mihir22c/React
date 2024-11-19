import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [
        { id: 1, text: 'Buy milk', completed: false },
    ],
    addTodo: (text) => { },
    updateTodo: (id, text) => { },
    deleteTodo: (id) => { },
    toggleTodo: (id) => { },
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider