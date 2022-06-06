import React from "react";

function AboutUsHeader() {
   return (
      <div className=''>
         <div className='p-3'>
            <div
               className='w-full h-44  rounded-md bg-center bg-cover flex flex-col justify-center px-4'
               style={{
                  backgroundImage: "url(https://assets.codepen.io/3685267/nft-dashboard-art-6.jpg)",
               }}>
               <h1 className='heading font-bold text-3xl max-w-sm' style={{ color: "white" }}>
                  Together
               </h1>
               <h2 className='font-bold text-3md max-w-sm' style={{ color: "#131517" }}>
                  No one has ever become poor by giving
               </h2>
               <button className='py-2 bg-gradient-to-tr from-fuchsia-600 to-violet-600 rounded-md w-44 mt-3'>About Us</button>
            </div>
         </div>
      </div>
   );
}
export default AboutUsHeader;
