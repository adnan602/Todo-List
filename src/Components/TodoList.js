import React from 'react'
import { Todo } from './Todo'
export const TodoList = ({ todos, setTodos, filterTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map((todo, index) => (
                    <Todo


                        todo={todo}
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.key}
                        text={todo.text}
                    />

                ))}
            </ul>
        </div>
    )
}
