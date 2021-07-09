import React from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos, inputText, filteredTodos }) {

  return (
    <div className="mt-20 m-auto w-9/12 max-w-sm pb-6">
      <ul>
        {filteredTodos.map(todo => ( 
          <Todo 
            todo={todo} 
            todos={todos} 
            setTodos={setTodos} 
            text={todo.text}  
            key={todo.id} 
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
