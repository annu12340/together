import React, { Component } from "react";
import "./MultiStepProgressBar.css";
import { FormGroup, Label, Input } from "reactstrap";
import {
  Form,
  Card,
  CardHeader,
  CardBody,
  Container, Row, Col

} from "reactstrap";
import { Helmet } from "react-helmet";

class Petitionreg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campaignname:"",
      discription:"",
    

    };
    
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }


  handleSubmit = event => {
    event.preventDefault();
    const { campaignname, discription,status} = this.state;
    alert(`Your registration detail: \n 
      Campaign Name: ${campaignname} \n 
      Discription: ${discription}`);
  };

 render() {
  return (
    <>
<div className="pt-96 mt-28 main">
      <Container>
        <Row>
          <Col>
             <div className="pt-4 mt-16">
        <Form onSubmit={this.handleSubmit} >
          <Card>
            <CardHeader className="header">Create your Petition</CardHeader>
            <CardBody className="pl-16 pr-16 pb-16">

        <Label className="textFeild">Petition Name</Label>
       
        <Input type="text" name="requiredField campaignname" placeholder="Enter your campaign name" className="outline-none py-2 pr-4 white block w-full textstyle"
        required
                handleChange={this.handleChange}
                campaignname={this.campaignname}
                discription={this.discription}/>
  {/* {errors.requiredField && <span>This field is required</span>} */}
      
          <Label className="textFeild">Discription</Label>
        <textarea name="discription" cols={40} rows={5} placeholder="Enter your Campaign details " className="outline-none white py-2 pr-4  block w-full textstyle"
          required
          />
          <button className="primary float-right text-white">Submit</button>;
            </CardBody>
          </Card>
        </Form>
        </div>

          </Col>
        </Row>
      </Container>

   </div>
       
    </>
  )
}
}  
export default Petitionreg
