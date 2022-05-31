import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
   
      <FormGroup>
          <div  className="document">
            <label className="textFeild" >Upload :</label>
            <Input type="file" name="document1" placeholder="Upload your document here" className=" white w-full textstyle"></Input>
            </div>
            <div>
              <label className="textFeild" >Upload :</label> 
              <Input type="file" name="document2" placeholder="Upload your document here" className=" w-full white textstyle"></Input>
            </div> 

            
      </FormGroup>
    </>
  );
};

export default Step3;
