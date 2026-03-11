import React, { useState } from 'react'
import "./SignupPage.css"
import NavComponent from '../components/NavComponent'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const SignupPage = () => {
  const [userInfo, setUserInfo] = useState({
      email: "",
    password: "",
    fullname: "",
    userimage:""
      
  });
  const navigate = useNavigate();
     
  const [fullnameError, setFullnameError] = useState(""); 
    const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userimageError, setUserimageError] = useState("");



     const formSubmit = (e) => {
                e.preventDefault();
        console.log(userInfo);
        setEmailError("");
        setPasswordError("");
       setFullnameError("");
       setUserimageError("")


       if (userInfo.fullname === "") { 
         setFullnameError("Type in your fullname");
         toast.error("Please enter your fullname")
          return;
       }
       if (userInfo.userimage === "") {
         setUserimageError("Add an image link");
         toast.error("image link not added");
         return;
       }
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
       if(userInfo.password.length < 6){

        setPasswordError("Password lesser than 6");
          toast.error("Increase your password to 6 or above")
          return;
       }
       const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

       if (!regex.test(userInfo.password)) {
    setPasswordError("Password should contain special characters, number and upper case");
          toast.error("Password should contain special characters, number and upper case")
          return;
}
    
        //for storing inside local storage
       localStorage.setItem("userInfo", JSON.stringify(userInfo));

                toast.success("User created successfully", {
        position: "top-right",
        autoClose: 3000, 
     
                })
        navigate('/profile')
                }
  

  return (
    <div className="sign-up">
    
       
      
      <div className='form-wrapper'>
      <form onSubmit={formSubmit} className='form'>
        <div>
          <h3>Create Account</h3>
          <p>Please sign up to book appointment</p>
        </div>
        <div>
          <h4 className='fullname'>Full Name</h4>
            <input
                value={userInfo.fullname}
                type="text"
                onChange= {
                  (e)=>{
                    setUserInfo({
                      ...userInfo, fullname: e.target.value
                    })
                  }
                }    
                
          className='input'></input>

          <p className="error-message">{fullnameError}</p>
          </div>
          <div>
          <h4 className='fullname'>Profile Pics</h4>
            <input
                value={userInfo.userimage}
                type="text"
                onChange= {
                  (e)=>{
                    setUserInfo({
                      ...userInfo, userimage: e.target.value
                    })
                  }
                }    
                
          className='input'></input>

          <p className="error-message">{userimageError}</p>
        </div>


        <div>
          <h4 className='fullname'>Email</h4>
          <input 
              value={userInfo.email}
              type="email"
              onChange={
                (e)=>{
                  setUserInfo({
                    ...userInfo, email: e.target.value
                  })
                }
              }
              className='input'></input>
              <p className="error-message">{emailError}</p>
        </div>

        <div>
          <h4 className='fullname'>Password</h4>
            <input
              
              value={userInfo.password}
              type="password"
              onChange={
                (e)=>{
                  setUserInfo({
                    ...userInfo, password: e.target.value
                  })
                }
              }
              className='input'></input>
            <p>
             Your passsword must contain Uppercase, number and special character
            </p>
          <p className="error-message">{passwordError}</p>
        </div>

        <button className='button-solid'>Create account</button>
        <div className='already'>
          Already have an account? <Link to="/signin">login here</Link>
        </div>
      </form>
      </div>
    </div>
  )
}

export default SignupPage