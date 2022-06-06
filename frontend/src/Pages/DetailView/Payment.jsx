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

export default function Payment({}) {
   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData(e.target);

      await startPayment({
         ether: data.get("ether"),
         addr: data.get("addr"),
      });
   };

   return (
      <form className='m-4' style={{ boxShadow: "-5px -5px 10px rgba(255,255,255,0.05),5px 5px 10px rgba(0,0,0,0.5)" }} onSubmit={handleSubmit}>
         <div className='credit-card w-full lg:w-1/2 sm:w-auto  mx-auto rounded-xl bg-grey'>
            <main className='mt-4 p-4'>
               <h1 className='text-xl font-semibold text-gray-100 text-center'>Send ETH payment</h1>
               <div className=''>
                  <div className='my-3'>
                     <input type='text' name='addr' className='input input-bordered block w-full focus:ring focus:outline-none' placeholder='Recipient Address' />
                  </div>
                  <div className='my-3'>
                     <input name='ether' type='text' className='input input-bordered block w-full focus:ring focus:outline-none' placeholder='Amount in ETH' />
                  </div>
               </div>
            </main>
            <footer className='p-4'>
               <button type='submit' className='btn btn-primary submit-button focus:ring focus:outline-none w-full'>
                  Pay now
               </button>
            </footer>
         </div>
      </form>
   );
}
