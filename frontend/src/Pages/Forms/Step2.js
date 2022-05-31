import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
     
      <FormGroup>

       <div>
      <Label className= "white float-left pt-16 ">Status</Label>
      
        <Input type="text" name="status" placeholder="Enter Status" className="outline-none py-2 pr-4 white block w-full textstyle"
          value={props.status} 
          onChange={props.handleChange} 
          />
      <Label className= "white float-left pt-12">Contact info</Label>
      
        <Input type="text" name="contactinfo" placeholder="Enter your contact info" className="outline-none py-2 white pr-4 block w-full textstyle"
          value={props.contactinfo} 
          onChange={props.handleChange} 
          />
      <Label className= "white float-left pt-12">Target Amount</Label>
      
        <Input type="text" name="targetamount" placeholder="Enter your contact info" className="outline-none py-2 white pr-4 block w-full textstyle"
          value={props.targetamount} 
          onChange={props.handleChange} 
          />
          
          </div>
          
          
        <div className="date">
            <Label  className=" white float-left pt-12 " >Start Date : </Label>
        <Input type="date" name="startdate"placeholder="Enter your start date" className="pt-12 white float-right textstyle"
          value={props.startdate} 
          onChange={props.handleChange} 
          />

   
          <Label className=" white float-right pt-12 ">End Date : </Label>
          <Input type="date" name="enddate" placeholder="Enter your end date" className="pt-12  white float-left textstyle"
          value={props.enddate} 
          onChange={props.handleChange} 
          />
          </div>

      </FormGroup>

    </>
  );
};

export default Step2;
