import { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" }};

  const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
        handleResponse(res, true);
    })
  }

  const signOut = () => {
    handleSignOut()
    .then(res => {
        handleResponse(res, false);
    })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }
  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){ 
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
            handleResponse(res, true);
        })
    }
    if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            handleResponse(res, true);
        })
    }
    e.preventDefault();
  }

  return (
        <div className="card text-white bg-success mb-3" style={{textAlign:'center'}}>
          
          <div className="card-header"><h1>Our Own Authentication</h1></div>

          <div className="card-body">
            {
              user.isSignedIn? <button onClick={signOut}>Sign out</button> :
              <button onClick={googleSignIn}>Google Sign In</button>
            }
            <br/>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser"/>
            <label htmlFor="newUser">New User Sign up</label>
            <form onSubmit={handleSubmit}>
              {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your name"/>}
              <br/>
              <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
              <br/><br/>
              <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
              <br/><br/>
              <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
            </form>
            <p style={{color:'red'}}>{user.error}</p>
            {
              user.success && <p style={{color:'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>
            }
          </div>
        </div>
  );
}

export default Login;
