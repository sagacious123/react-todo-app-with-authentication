import React from 'react'
import "../assets/tailwind.css"

function Navbar(props) {
  return (
    <header className="bg-purple-900 w-full py-3">
      <nav className="flex w-10/12 m-auto items-center justify-between">
        <a href="#" className="text-yellow-300 text-xl font-bold">My<span className="text-blue-300">Tasks</span></a>
        {props.user 
          && 
          <button 
            onClick={props.handleLogOut} className="rounded-sm text-gray-200 py-1 px-4 bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg focus:outline-none hover:from-blue-600 hover:to-purple-700 hover:shadow-xl transition-colors duration-700 ease-in-out">
            Log out
          </button>
        }
        
      </nav>
    </header>
  )
}

export default Navbar
