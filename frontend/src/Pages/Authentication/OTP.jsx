import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./otp.css"
import { Link } from "react-router-dom";

function OTP() {
   const [inputField, setInputField] = useState({ otp: "" });
   const [response, setresponse] = useState("");

   useEffect(() => {
      sendotp();
   }, []);

   let sendotp = async () => {
      await axios.get(`http://127.0.0.1:8000/account/otp`);
   };

   const inputsHandler = (e) => {
      setInputField({ [e.target.name]: e.target.value });
   };

   const submitButton = async () => {
      await axios.post(`http://127.0.0.1:8000/account/otp`, { otp: inputField.otp });
      setresponse(inputField.otp);
   };
   return (
      <>
    <div className="card login-box">
        <form action="" method="post">
            <h3 className="bg text text-dark  rounded">OTP Verification</h3>
            <br/>
            <h4 className="">Enter OTP  <span className="mob">XXXX</span></h4>
            <br/>
            <input className=" black input-group-text " max="6" type="otp"  name='otp' onChange={inputsHandler} placeholder='otp' value={inputField.otp}  />
            <br/>
            <h5>Didn't received OTP? <a href="">Resend OTP</a></h5>
            <br/>
            <Link to={'/login'}>
            <button className="btn-block  submit-btn" onClick={submitButton} type="submit">Submit</button>
            </Link>
        </form>
    </div>


         {/* <h1>OTP</h1>
         <div classNameName='d-flex flex-column align-items-center'>
            <input type='otp' name='otp' onChange={inputsHandler} placeholder='otp' value={inputField.otp} />

            <button onClick={submitButton} classNameName='bg-indigo-500'>
               Submit Now
            </button>
            {response && <Navigate replace to='/login' />}
         </div> */}
    </>
   );
}

export default OTP;
