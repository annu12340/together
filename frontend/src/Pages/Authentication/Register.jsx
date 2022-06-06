import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./style.css"
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
    
 <div className="form">
      
    <h2>Register</h2>
    <div className="input">
      <div className="inputBox" controlId='formBasicFirstName'>
        <label>First Name</label>
        <input type = "text" placeholder = "Enter first name" name='first_name' value={this.state.first_name} onChange={this.onChange}/>
      </div>
      <div className="inputBox" controlId='formBasicLastName'>
        <label>Second Name</label>
        <input type = "text" placeholder = "Enter last name"  name='last_name' value={this.state.last_name} onChange={this.onChange} />
      </div>
      
        <div className="inputBox" controlId='formBasicEmail'>
        <label>Username</label>
        <input type = "email" placeholder = "Enter username"  name='email' value={this.state.email} onChange={this.onChange}  />
      </div>

       <div className="inputBox"  controlId='formBasicPassword'>
        <label>Password</label>
        <input type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.onChange}  />
      </div>

      <div className="inputBox">
         <Button type='submit' onClick={this.handleSubmit} >
          <Link to={'/otp'}>Submit</Link>
            </Button>
      </div>
      
    </div>
      <p className="forget">Already registered? <Link to={'/login'}> Click here</Link></p>
  </div>
  </div> 
  </>
      );
   }
}


{/* <Container style={{ marginTop: "150px" }}>
            <Form className='d-flex flex-column align-items-center'>
               <Form.Group controlId='formBasicFirstName' style={{ width: "300px" }}>
                  <Form.Label>First name</Form.Label>
                  <Form.Control type='text' placeholder='Enter First Name' name='first_name' value={this.state.first_name} onChange={this.onChange} />
               </Form.Group>
               <Form.Group controlId='formBasicLastName' style={{ width: "300px" }}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type='text' placeholder='Enter Last Name' name='last_name' value={this.state.last_name} onChange={this.onChange} />
               </Form.Group>
               <Form.Group controlId='formBasicEmail' style={{ width: "300px" }}>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type='email' placeholder='Enter email' name='email' value={this.state.email} onChange={this.onChange} />
               </Form.Group>
               <Form.Group controlId='formBasicPassword' style={{ width: "300px" }}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.onChange} />
               </Form.Group>
               <Button variant='primary' type='submit' onClick={this.handleSubmit} className='btn-block' style={{ maxWidth: "300px" }}>
                  Register
               </Button>
            </Form>
         </Container> */}