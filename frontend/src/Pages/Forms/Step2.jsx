import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step2 = (props) => {
   if (props.currentStep !== 2) {
      return null;
   }

   return (
      <>
         <FormGroup>
            <div>
               <Label className=' textFeild white float-left pt-12'>Contact info</Label>

               <Input type='text' name='contactinfo' placeholder='Enter your contact info' className='outline-none py-2 white pr-4 block w-full textstyle' value={props.contactinfo} onChange={props.handleChange} />
               <Label className=' textFeild white float-left pt-12 pb-12'>Target {props.target}</Label>

               <Input type='number' name='targetamount' placeholder='Enter your target' className='outline-none py-2 white pr-4 block w-full textstyle' value={props.targetamount} onChange={props.handleChange} />
            </div>

            <div className=' date'>
               <br />

               <Label className=' textFeild white float-right pt-12 '>End Date : </Label>
               <Input type='date' name='enddate' placeholder='Enter your end date' className='pt-12 pb-12 white float-left textstyle' value={props.enddate} onChange={props.handleChange} />
            </div>
         </FormGroup>
      </>
   );
};

export default Step2;
