import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step3 = (props) => {
   if (props.currentStep !== 3) {
      return null;
   }

   return (
      <>
         <FormGroup>
            <Label className=' textFeild white float-left pt-12'>Enter upi id</Label>
            <Input type='text' name='upi' placeholder='Enter upi id' className='outline-none py-2 white pr-4 block w-full textstyle' value={props.upi} onChange={props.handleChange} />

            <Label className=' textFeild white float-left pt-12'>Upload Documents</Label>
            <Input type='text' name='document1' placeholder='Past your document link here' className='outline-none py-2 white pr-4 block w-full textstyle' />
         </FormGroup>
      </>
   );
};

export default Step3;
