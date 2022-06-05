import React from 'react'
import "./style.css"
const SignupLogin = () => {
  return (
    <>
   <div className='main'>  
 <div className="form">
    <h2>Login</h2>
    <div className="input">
      <div className="inputBox">
        <label>Username</label>
        <input type = "text" name = "" placeholder = "your_name@domain.com"/>
      </div>
      <div className="inputBox">
        <label>Password</label>
        <input type = "password" name = "" placeholder = "********"/>
      </div>
      <div className="inputBox">
        <input type = "submit" name = "" value = "Sign In"/>
      </div>
    </div>
      <p className="forget">Not Signup? <a href="#"> Click here</a></p>
      <p className="forget">Forgot Password? <a href="#"> Click here</a></p>
  </div>
  </div> 
    </>
  )
}

export default SignupLogin

