import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const axios = require("axios");

export default class Register extends Component {
   constructor(props) {
      super(props);
      this.state = {
         first_name: "",
         last_name: "",
         email: "",
         password: "",
      };
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   onChange = (e) => this.setState({ [e.target.name]: e.target.value });
   handleSubmit(event) {
      axios
         .post("http://localhost:8000/account/api/register", {
            username: this.state.email,
            password: this.state.password,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
         })
         .then(function(res) {
            console.log(res);
            localStorage.setItem("refresh_token", res.data.refresh);
            localStorage.setItem("user", res.config.data);
         })
         .catch(function(err) {
            console.log(err);
         });
      event.preventDefault();
   }
   render() {
      return (
         <>
            <div className='main'>
               <div className='form'>
                  <h2>Register</h2>
                  <div className='input'>
                     <div className='inputBox' controlId='formBasicFirstName'>
                        <label>First Name</label>
                        <input type='text' placeholder='Enter first name' name='first_name' value={this.state.first_name} onChange={this.onChange} />
                     </div>
                     <div className='inputBox' controlId='formBasicLastName'>
                        <label>Second Name</label>
                        <input type='text' placeholder='Enter last name' name='last_name' value={this.state.last_name} onChange={this.onChange} />
                     </div>

                     <div className='inputBox' controlId='formBasicEmail'>
                        <label>Email</label>
                        <input type='emaiil' placeholder='Enter email' name='email' value={this.state.email} onChange={this.onChange} />
                     </div>

                     <div className='inputBox' controlId='formBasicPassword'>
                        <label>Password</label>
                        <input type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.onChange} />
                     </div>

                     <div className='inputBox'>
                        <Button type='submit' onClick={this.handleSubmit}>
                           <Link to={"/login"}>Submit</Link>
                        </Button>
                     </div>
                  </div>
                  <p className='forget'>
                     Already registered? <Link to={"/login"}> Click here</Link>
                  </p>
               </div>
            </div>
         </>
      );
   }
}


