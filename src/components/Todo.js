import React from 'react'

function Todo({ text, todo, todos, setTodos }) {

  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return {
          ...item, completed: !item.completed 
        }
      }
      return item;
    }))
  }

  return (
    <li className="flex mb-2">
      <span className={`w-full p-1 pl-4 text-lg ${todo.completed ? "bg-gray-400 text-opacity-50 text-white line-through" : " bg-purple-100 text-gray-900"}`}>{text}</span>
      <button onClick={completeHandler} className={`px-2 text-xl font-extrabold bg-gradient-to-r from-purple-500 to-purple-900  shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none text-gray-300 ${todo.completed ? "bg-gradient-to-r from-purple-900 to-purple-900" : ""}`}>
        <i className="mdi mdi-check"></i>
      </button>
      <button onClick={deleteHandler} className="px-2 text-xl font-extrabold bg-gradient-to-r from-red-600 to-red-800 shadow-lg hover:from-red-500 hover:to-red-700 focus:outline-none text-gray-300">
        <i className="mdi mdi-trash-can-outline"></i>
      </button>
    </li>
  )
}

export default Todo
