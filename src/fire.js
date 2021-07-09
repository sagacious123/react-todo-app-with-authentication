import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBPoco562t2e_xVuXlFAB8SnLTiIQlO6GI",
  authDomain: "todo-login-ac907.firebaseapp.com",
  projectId: "todo-login-ac907",
  storageBucket: "todo-login-ac907.appspot.com",
  messagingSenderId: "686511201475",
  appId: "1:686511201475:web:58e4dc78df4cc9c1e61676"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;