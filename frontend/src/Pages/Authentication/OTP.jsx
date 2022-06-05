import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

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
      response = await axios.post(`http://127.0.0.1:8000/account/otp`, { otp: inputField.otp });
      setresponse(inputField.otp);
      console.log("response1232", response);
   };
   return (
      <div>
         <h1>OTP</h1>
         <div>
            <input type='otp' name='otp' onChange={inputsHandler} placeholder='otp' value={inputField.otp} />

            <button onClick={submitButton}>Submit Now</button>
            {/* {response && <Navigate replace to='/login' />} */}
         </div>
      </div>
   );
}

export default OTP;
