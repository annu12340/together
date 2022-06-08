import { useState } from "react";
import { ethers } from "ethers";
import React from "react";
const startPayment = async ({ ether, addr }) => {
   try {
      if (!window.ethereum) throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
         to: addr,
         value: ethers.utils.parseEther(ether),
      });
      console.log({ ether, addr });
   } catch (err) {
      console.log(err.message);
   }
};

export default function Signature({}) {
   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData(e.target);

      await startPayment({
         ether: "0.1",
         addr: data.get("addr"),
      });
   };

   return (
      <form className='m-4' onSubmit={handleSubmit}>
         <div className='credit-card w-full  mx-auto rounded-xl bg-grey'>
            <main className='mt-4 p-4'>
               <h1 className='text-xl font-semibold text-gray-100 text-center'>Add a signature</h1>
               <div className=''>
                  <div className='my-3'>
                     <input type='text' name='addr' className='white input input-bordered block w-full focus:ring focus:outline-none' placeholder='Recipient Address' />
                  </div>
               </div>
            </main>
            <footer className='p-4'>
               <button type='submit' style={{ backgroundImage: "linear-gradient(to right, #be53e1, #641cea)" }} className='btn btn-primary submit-button focus:ring focus:outline-none w-full'>
                  Sign petition
               </button>
            </footer>
         </div>
      </form>
   );
}
