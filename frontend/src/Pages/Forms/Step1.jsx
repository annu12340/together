import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
// import { useForm } from "react-hook-form";

const Step1 = (props) => {
   if (props.currentStep !== 1) {
      return null;
   }

   // const { errors } = useForm();

   return (
      <>
         <FormGroup>
            <Label className='textFeild'> Name</Label>

            <Input type='text' name='campaignname' placeholder='Enter name' className='outline-none py-2 pr-4 white block w-full textstyle' required value={props.campaignname} onChange={props.handleChange} />

            <Label className='textFeild'>Description</Label>
            <textarea name='description' cols={40} rows={5} placeholder='Enter details ' className='outline-none white py-2 pr-4  block w-full textstyle' required value={props.description} onChange={props.handleChange} />
            <Label className='textFeild'>Image </Label>

            <Input type='text' name='images' placeholder='Enter image link' className='outline-none py-2 pr-4 white block w-full textstyle' required value={props.images} onChange={props.handleChange} />
            <Label className='textFeild'>Type</Label>
            <select name='type' className='outline-none py-2 pr-4 block w-full white textstyle' value={props.type} onChange={props.handleChange}>
               <option className='other'>Select type</option>
               <option value='startup' className='other'>
                  StartUp
               </option>
               <option value='medical' className='other'>
                  Medical
               </option>
               <option value='sports' className='other'>
                  Sports
               </option>
               <option value='ngo' className='other'>
                  NGO
               </option>
            </select>
         </FormGroup>
      </>
   );
};

export default Step1;
