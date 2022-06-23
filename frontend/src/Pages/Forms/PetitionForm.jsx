import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./MultiStepProgressBar.css";
import { Component } from "react";
import { Form, Button, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import MultiStepProgressBar from "./MultiStepProgressBar";

class PetitionForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         currentStep: 1,
         campaignname: "",
         discription: "",
         type: "",
         status: "",
         startdate: "",
         enddate: "",
         contactinfo: "",
         targetamount: "",
      };

      // Bind the submission to handleChange()
      this.handleChange = this.handleChange.bind(this);

      // Bind new functions for next and previous
      this._next = this._next.bind(this);
      this._prev = this._prev.bind(this);
   }

   // Use the submitted data to set the state
   handleChange(event) {
      const { name, value } = event.target;
      this.setState({
         [name]: value,
      });
   }

   // Trigger an alert on form submission
   handleSubmit = (event) => {
      event.preventDefault();
      const { campaignname, discription, status, startdate, enddate, contactinfo, targetamount, type } = this.state;
      alert(`Your registration detail: \n 
      Campaign Name: ${campaignname} \n 
      Discription: ${discription} \n
      Type :${type}\n
      status: ${status}\n
      Start Date: ${startdate}\n
      End Date :${enddate}\n
      Contact Info: ${contactinfo}\n
      Target Amount: ${targetamount}`);
   };

   // Test current step with ternary
   // _next and _previous functions will be called on button click
   _next() {
      let currentStep = this.state.currentStep;

      // If the current step is 1 or 2, then add one on "next" button click
      currentStep = currentStep >= 2 ? 3 : currentStep + 1;
      this.setState({
         currentStep: currentStep,
      });
   }

   _prev() {
      let currentStep = this.state.currentStep;
      // If the current step is 2 or 3, then subtract one on "previous" button click
      currentStep = currentStep <= 1 ? 1 : currentStep - 1;
      this.setState({
         currentStep: currentStep,
      });
   }

   // The "next" and "previous" button functions
   get previousButton() {
      let currentStep = this.state.currentStep;

      // If the current step is not 1, then render the "previous" button
      if (currentStep !== 1) {
         return (
            <Button color='secondary float-left text-white' onClick={this._prev}>
               Previous
            </Button>
         );
      }

      // ...else return nothing
      return null;
   }

   get nextButton() {
      let currentStep = this.state.currentStep;
      // If the current step is not 3, then render the "next" button
      if (currentStep < 3) {
         return (
            <Button color='primary float-right text-white' onClick={this._next}>
               Next
            </Button>
         );
      }
      // ...else render nothing
      return null;
   }

   get submitButton() {
      let currentStep = this.state.currentStep;

      // If the current step is the last step, then render the "submit" button
      if (currentStep > 2) {
         return <Button color='primary float-right text-white'>Submit</Button>;
      }
      // ...else render nothing
      return null;
   }

   render() {
      return (
         <div className='main'>
            <Container>
               <Row>
                  <Col>
                     <div className=' wh pt-28 pl-20'>
                        <Form onSubmit={this.handleSubmit}>
                           <Card>
                              <CardHeader className='header heading text-center'>Create your Petition</CardHeader>
                              <CardBody className=' pl-20 pr-20 pb-46'>
                                 <CardTitle>
                                    <MultiStepProgressBar currentStep={this.state.currentStep} />
                                 </CardTitle>
                                 <CardText />
                                 <Step1 name='Petition' currentStep={this.state.currentStep} handleChange={this.handleChange} campaignname={this.state.campaignname} discription={this.state.discription} type={this.state.type} />
                                 <Step2 name='Petition' target='Count' currentStep={this.state.currentStep} handleChange={this.handleChange} startdate={this.state.startdate} enddate={this.state.enddate} contactinfo={this.state.contactinfo} targetamount={this.state.targetamount} />
                                 <Step3 currentStep={this.state.currentStep} handleChange={this.handleChange} email={this.state.password} />
                              </CardBody>
                              <CardFooter className='footerButton'>
                                 {this.previousButton}
                                 {this.nextButton}
                                 {this.submitButton}
                              </CardFooter>
                              <br /> <br />
                           </Card>
                        </Form>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      );
   }
}

export default PetitionForm;
