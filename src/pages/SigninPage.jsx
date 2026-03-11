import React, { useState } from 'react'
import "./SigninPage.css"
import NavComponent from '../components/NavComponent'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SigninPage = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const formSubmit = (e) => {
            e.preventDefault();
    console.log(userInfo);
    setEmailError("");
    setPasswordError("");

    if(userInfo.email === ""){
      setEmailError("Type in an email");
      toast.error("Please enter your email")
      return;
    }
    if(userInfo.password === ""){
      setPasswordError("Type in a password");
      toast.error("Please enter your password")
      return;
    }

    

            toast.success("Login successful", {
    position: "top-right",
    autoClose: 3000, 
 
            })
    navigate('/')
            }
  return (
    <div className='sign-in'>
          <div className='wrapper'>
            <div className='all'>
            <div className='up'>
              <h2>Login</h2>
              <p>Please sign up to book appointment</p>
            </div>
    
          <form onSubmit={formSubmit} className='form'>
    
              <div className='name'>
                <label htmlFor="email">Email</label>
              <input
                value={userInfo.email}
                onChange={
                  (e)=>{
                    setUserInfo({
                      ...userInfo, email: e.target.value
                    })
                  }
                  
                  }
                type="email" name='email' />

              <p className='error-message'>{ emailError}</p>
              </div>
    
              <div className='name'>
                <label htmlFor="password">Password</label>
                <input
                value={userInfo.password}
                onChange={
                  (e)=>{
                    setUserInfo({
                      ...userInfo, password: e.target.value
                    })
                  }
                  
                  }
                
                type="password" name='password' />
                 <p className='error-message'>{ passwordError}</p>
              </div>
    
              <button className='button-blue'>Login</button>
            </form>
    
            <div className='down'>
              <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
            </div>
           </div>
          </div>
        </div>
  )
}

export default SigninPage