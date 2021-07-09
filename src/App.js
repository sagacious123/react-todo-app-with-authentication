import React, { useState, useEffect } from 'react';
import './App.css';
import fire from './fire';
import Login from './components/Login'
import TodoPage from './TodoPage'
import Navbar from './components/Navbar'

function App() {
  const [user, setUser] = useState('');
  const [userName, setUserName] = useState('');
  const [greetingName, setGreetingName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [lsUser, setLsUser] = useState('');
  const [lsMail, setLsMail] = useState('');
  const [newMail, setNewMail] = useState('');

  const clearInputs = () => {
    setUserName('');
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const registerUser = () => {
    let allusers = {
      lsUsername: lsUser,
      lsEmail: lsMail
    }
    console.log(allusers);

    let indUser = [];

    if(localStorage.getItem('users') === null) {
      indUser.push(allusers);

      localStorage.setItem('users', JSON.stringify(indUser))
    } else {
      indUser = JSON.parse(localStorage.getItem('users'));

      indUser.push(allusers);
      localStorage.setItem('users', JSON.stringify(indUser))
    }

    console.log(indUser);
  }
  
  const loginUser = () => {
    let finalUser = JSON.parse(localStorage.getItem('users'));
    if(finalUser.length > 0) {
      const filterArray = finalUser.filter(user => {
      
        return user.lsEmail === email;
      })

      if (filterArray.length > 0) {
        setGreetingName(filterArray[0].lsUsername);
        console.log(filterArray)
      } 
    }
 
  }

  useEffect(() => {
    loginUser()
  })

  // window.onreadystatechange = () => loginUser();

  // window.onload = loginUser();

  const handleLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code) {
        case 'auth/invalid-email':
        case 'auth/user-disabled':
        case 'auth/user-not-found':
          setEmailError(err.message);
          break;
          
        case 'auth/wrong-password':
          setPasswordError(err.message);
          break;
        // default:
        //   setEmailError("invalid email");
        //   setPasswordError("wrong password");
      }
    })
  }

  const handleSignup = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code) {
        case 'auth/email-already-in-use':
        case 'auth/invalid-email':
          setEmailError(err.message);
          break;
        case 'auth/weak-password':
          setPasswordError(err.message);
          break;
        // default:
        //   setEmailError("invalid email");
        //   setPasswordError("weak password");
      }
    })
  }

  const handleLogOut = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user) {
        clearInputs();
        // setGreetingName(greetingName);
        setUser(user);
        // loginUser();
      } else {
        setUser('');
      }
    })
  }
  // if (user) {
  //   loginUser();
  //   console.log("welcome");
  // } else {
  //   console.log("no user")
  // }

  useEffect(() => { 
    authListener();
    // loginUser();
  }, []);

  return (
    <>
    <Navbar handleLogOut={handleLogOut} user={user}/>
    {user ? 
      <TodoPage greetingName={greetingName} loginUser={loginUser} /> : 
      (<Login 
        userName={userName} 
        setUserName={setUserName} 
        setGreetingName={setGreetingName}
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin} 
        handleSignup={handleSignup} 
        hasAccount={hasAccount} 
        setHasAccount={setHasAccount} 
        emailError={emailError} 
        passwordError={passwordError}
        setLsUser={setLsUser}
        setLsMail={setLsMail}
        registerUser={registerUser}
        loginUser={loginUser}
        setNewMail={setNewMail}
      />)}
      
      {/* <Login 
        userName={userName} 
        setUserName={setUserName} 
        getUsername={getUsername}
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin} 
        handleSignup={handleSignup} 
        hasAccount={hasAccount} 
        setHasAccount={setHasAccount} 
        emailError={emailError} 
        passwordError={passwordError}
      /> */}
      
    </>
  );
}

export default App;
