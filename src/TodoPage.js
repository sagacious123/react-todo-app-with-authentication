import React, { useEffect, useState } from 'react'
import "./assets/tailwind.css"
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function TodoPage(props) {

  // window.onreadystatechange = props.loginUser();
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] =useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const setTodosToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getTodosFromLocalStorage = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let storedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(storedTodos);
    }
  }

  useEffect(() => {
    getTodosFromLocalStorage();
  }, [])

  useEffect(() => {
    filterHandler();
    setTodosToLocalStorage();
  }, [todos, status])

  const greetUser = () => {
    let date = new Date();
    let hours = date.getHours();
    var greeting;
    // let newUsername = localStorage.getItem("username");
    // console.log(newUsername);

    if (hours < 12) {
      greeting = `Good morning ${props.greetingName}!`;
    } else if (hours >= 12 && hours < 17) {
      greeting = `Good afternoon ${props.greetingName}!`;
    } else {
      greeting = `Good evening ${props.greetingName}!`;
    }

    return greeting;
    
  }

  // useEffect(() => { 

  //   greetUser();
  // });
  

  return (
    <div className="text-gray-200">
      <h1 style={{fontFamily: "'Spartan', sans-serif"}} className="text-2xl text-center mt-8">{greetUser()}</h1>
      <Form setInputText={setInputText} setStatus={setStatus} inputText={inputText} setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} inputText={inputText} filteredTodos={filteredTodos} />
    </div>
  )
}

export default TodoPage
