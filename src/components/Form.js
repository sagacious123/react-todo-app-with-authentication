import React from 'react'
import "../assets/tailwind.css"

function Form({ setInputText, inputText, todos, setTodos, setStatus }) {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    // console.log(todos);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    (inputText &&
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
    ]) )
    // (inputText ? console.log(todos.length+1) : console.log("no number"))
    
    setInputText("");
  }
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form className="flex justify-between m-auto mt-16 w-10/12 max-w-md">
      <div className="flex w-8/12">
        <input onChange={inputTextHandler} value={inputText}  className="bg-purple-200 rounded-bl-sm rounded-tl-sm p-1 w-full text-gray-900 outline-none" type="text" />
        <button onClick={submitHandler} className="px-2 text-xl font-extrabold rounded-br-sm rounded-tr-sm bg-gradient-to-r from-purple-600 to-purple-900 shadow-lg focus:outline-none text-gray-300 hover:from-blue-600 hover:to-purple-700">
          <i className="mdi mdi-plus"></i>
        </button>
      </div>
      <div className=" ml-4 w-4/12">
        <select onChange={statusHandler} className="bg-purple-200 rounded-sm p-1 text-gray-900 w-full outline-none" name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
