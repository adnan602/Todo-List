import React, { useEffect, useState } from "react";
import "./style.css"
import { Form } from "./Components/Form";
import { TodoList } from "./Components/TodoList";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("All")
  const [filterTodos, setFilterTodos] = useState([])
  useEffect(() => {
    setLocalTodos();
  }, [])
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]
  )
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilterTodos(todos)
        break;

    }
  }
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const setLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1> Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList
        filterTodos={filterTodos}
        setTodos={setTodos}
        todos={todos} />
    </div>


  );
}

export default App;

