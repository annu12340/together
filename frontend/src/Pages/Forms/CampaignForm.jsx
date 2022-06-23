import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";
import "./MultiStepProgressBar.css";
import { Component } from "react";
import { Form, Button, Card, CardHeader, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { set_access_token } from "../utils/accessToken";
import MultiStepProgressBar from "./MultiStepProgressBar";
const axios = require("axios");

class CampaignForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         currentStep: 1,
         campaignname: "",
         description: "",
         type: "",
         status: "",
         startdate: "",
         enddate: "",
         contactinfo: "",
         targetamount: 0,
         upi: "",
         verification_documents: "",
      };

      // Bind the submission to handleChange()
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // Bind new functions for next and previous
      this._next = this._next.bind(this);
      this._prev = this._prev.bind(this);
   }

   componentDidMount() {
      set_access_token();
   }
   componentDidUpdate() {
      set_access_token();
   }

   handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

   handleSubmit(event) {
      axios
         .post(
            "http://localhost:8000/campaigns/",
            {
               name: this.state.campaignname,
               images: this.state.images,
               description: this.state.description,
               type: this.state.type,
               status: "Pending",
               start_at: "2022-06-05T20:07:56.892Z",
               end_date: "2022-07-05T20:07:56.892Z",
               target_amount: this.state.targetamount,
               likes: 0,
               contact_info: this.state.contactinfo,
               organiser_id: 0,
               qrcode_url: "dsd",
               upi_id: this.state.upi,
               verification_documents: this.state.verification_documents,
               is_verified: true,
            },
            { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } }
         )
         .then(function(res) {
            console.log(res);
            // {

            //   "upi_id": "xyvc@oksbi",
            //   "is_verified": true
            // }
         })
         .catch(function(err) {
            console.log(err);
         });
      event.preventDefault();
   }

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
            <Button color='ml-50 secondary float-left text-white' onClick={this._prev}>
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
         return (
            <Button color='primary float-right text-white' onClick={this.handleSubmit}>
               Submit
            </Button>
         );
      }
      // ...else render nothing
      return null;
   }

   render() {
      return (
         <div className='main'>
            <Container>
               <Row>
                  <div className=' wh pt-28 pl-20'>
                     <Form onSubmit={this.handleSubmit}>
                        <Card>
                           <CardHeader className='header heading text-center'>Create campaign</CardHeader>
                           <CardBody className='  pl-20 pr-20 pb-46'>
                              <CardTitle>
                                 <MultiStepProgressBar currentStep={this.state.currentStep} />
                              </CardTitle>
                              <CardText />
                              <Step1 name='Campaign' currentStep={this.state.currentStep} handleChange={this.handleChange} campaignname={this.state.campaignname} discription={this.state.discription} type={this.state.type} images={this.state.images} />
                              <Step2 name='Campaign' target='amount' currentStep={this.state.currentStep} handleChange={this.handleChange} startdate={this.state.startdate} enddate={this.state.enddate} contactinfo={this.state.contactinfo} targetamount={this.state.targetamount} />
                              <Step3 currentStep={this.state.currentStep} handleChange={this.handleChange} upi={this.state.upi} verification_documents={this.state.verification_documents} />
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
               </Row>
            </Container>
         </div>
      );
   }
}

export default CampaignForm;
