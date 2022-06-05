import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
   
      <FormGroup>
           <Label className= " textFeild white float-left pt-12">Upload Documents</Label>
      
        <Input type="text" name="document1" placeholder="Past your document link here" className="outline-none py-2 white pr-4 block w-full textstyle"
         
          />
              <Label className= " textFeild white float-left pt-12">Upload Documents</Label>
      
        <Input type="text" name="document2" placeholder="Past your document link here" className="outline-none py-2 white pr-4 block w-full textstyle"
         
          />
            
      </FormGroup>
    </>
  );
};

export default Step3;
