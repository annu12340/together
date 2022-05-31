import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
// import { useForm } from "react-hook-form";

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  // const { errors } = useForm();

  return (
     <>
    
      <FormGroup>
        <Label className="textFeild">Campaign Name</Label>
       
        <Input type="text" name=" campaignname" placeholder="Enter your campaign name" className="outline-none py-2 pr-4 white block w-full textstyle"
          required
          // value={props.campaignname}
          // onChange={props.handleChange} 
          />
 
      
          <Label className="textFeild">Description</Label>
        <textarea name="discription" cols={40} rows={5} placeholder="Enter your Campaign details " className="outline-none white py-2 pr-4  block w-full textstyle"
          required
          value={props.discription} 
          onChange={props.handleChange}
          />
         <Label className="textFeild">Type</Label>
    <select name="type" className="outline-none py-2 pr-4 block w-full white textstyle"    
    value={props.type} 
          onChange={props.handleChange}>
        
            <option className="other">Select type</option>
            <option  value="StartUp" className="other">StartUp</option>
            <option  value="Medical" className="other">Medical</option>
            <option value="Sports" className="other">Sports</option>
            <option value="Disaster"className="other">Disaster</option>
       
        </select>
  
      </FormGroup>
    </>
   
  );
};

export default Step1;
