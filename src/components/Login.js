import React from 'react'
import "../assets/tailwind.css"
import "../App.css"


function Login(props) {

  const { 
    userName,
    setUserName,
    setGreetingName,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    setLsUser,
    setLsMail,
    registerUser,
    loginUser,
    setNewMail,
    setCurrentUser,
  } = props;


  return (
    <div>
      <div className="w-10/12 max-w-md shadow-2xl m-auto mt-12 bg-gradient-to-r from-purple-900 to-blue-900 p-8">
      {hasAccount ? <h1 className="m-0 text-gray-100 text-xl font-bold text-center">Sign in</h1> : <h1 className="m-0 text-gray-100 text-xl font-bold text-center">Sign up</h1>}
        {!hasAccount 
        && 
        (<div className="flex flex-col my-4">
          <label className="mb-2 text-gray-200">Username</label>
          <input 
            className="input-focus rounded-sm p-2 bg-purple-300 shadow-md focus:outline-none"
            type="text" 
            autoFocus 
            value={userName} 
            onChange={(e) => {
                setUserName(e.target.value);
                setGreetingName(e.target.value);
                // if(!hasAccount) {
                //   localStorage.setItem("username", e.target.value);
                // }
              }
            }  
            onInput={(e) => {
                setLsUser(e.target.value);
                // registerUser();
              }
            }
            />
        </div>)}
        <div className="flex flex-col my-4">
          <label className="mb-2 text-gray-200">Email</label>
          <input 
            className="input-focus rounded-sm p-2 bg-purple-300 shadow-md focus:outline-none"
            type="text" 
            value={email} 
            // onChange={(e) => setEmail(e.target.value)} 
            onInput={(e) => {
              setLsMail(e.target.value);
              setEmail(e.target.value);
              // setNewMail(e.target.value);
              // registerUser();
            }
          }
          />
          <p className="text-red-500 text-sm">{emailError}</p>
        </div>
        <div className="flex flex-col my-4">
          <label className="mb-2 text-gray-200">Password</label>
          <input
            className="input-focus rounded-sm p-2 bg-purple-300 shadow-md focus:outline-none" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
            <p className="text-red-500 text-sm">{passwordError}</p>
        </div>
        {hasAccount ? 
        (<div>
          <button 
            onClick={() => {
              handleLogin();
              // loginUser();
              }
            } 
            className="rounded-sm w-full text-gray-200 my-2 py-2 px-4 bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg focus:outline-none hover:from-blue-600 hover:to-purple-700 hover:shadow-2xl transition duration-1000 ease-in-out">
            Sign in
          </button>
          <p className="text-gray-200 text-right text-sm mt-2">Don't have an account? <span className="text-yellow-400 cursor-pointer hover:text-red-500" onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
        </div>) 
        : 
        (<div>
          <button 
            onClick={() => {
              handleSignup();
              registerUser();
              loginUser();
              }
            } 
            className="rounded-sm w-full text-gray-200 my-2 py-2 px-4 bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg focus:outline-none hover:from-blue-600 hover:to-purple-700 hover:shadow-2xl transition duration-1000 ease-in-out">
            Sign up
          </button>
          <p className="text-gray-200 text-right text-sm mt-2">Have an account? <span className="text-yellow-400 cursor-pointer hover:text-red-500" onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
        </div>)}
        
      </div>
    </div>
  )
}

export default Login
