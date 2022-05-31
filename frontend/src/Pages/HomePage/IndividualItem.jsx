import Countdown from "react-countdown";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { set_access_token } from "./../utils/accessToken";

function IndividualItem() {
   let [campaign, setcampaign] = useState([]);

   useEffect(() => {
      set_access_token();
      getcampaign();
   }, []);

   let getcampaign = async () => {
      let response = await axios.get(`http://127.0.0.1:8000/campaigns/`, { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } });
      console.log("dsfsdfsdf");

      console.log("dsfsdfsdf");
      if (response.status === 200) {
         setcampaign(response.data);
      }
      console.log("data", response.data);
   };

   return (
      <>
         <div className='flex flex-col md:flex-row justify-between px-3 mt-3'>
            <h2 className='text-xl text-white font-semibold'>Recent</h2>
            {localStorage.getItem("user")}
            <ull className='inline-flex space-x-3 '>
               {["StartUp", "Medical", "Disaster", "Sport"].map((text, index) => (
                  <li className=''>
                     <button className={` ${index ? "text-zinc-500" : "text-fuchsia-600 underline font-bold"}`}>{text}</button>
                  </li>
               ))}
               ;
            </ull>
         </div>
         <ul className='p-1.5 flex flex-wrap'>
            {campaign.map((data) => (
               <li className='w-full lg:w-1/2 xl:w-1/3  p-3 ' key={data.id}>
                  <a className='block bg-zinc-800 rounded-md w-full overflow-hidden pb-4 shadow-lg' href='/item'>
                     <div className='w-full h-64 bg-center bg-cover relative' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1653923118858-ed9c9fca2efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80)` }}>
                        <div className='absolute left-1/2 -translate-x-1/2 bottom-2  w-5/6 bg-white rounded-md flex items-center bg-opacity-30 backdrop-blur-md'>
                           <div className='w-1/2 p-3'>
                              <h3 className='font-semibold'>Current Amound</h3>
                              <div className=''>{data.target_amount} ETH</div>
                           </div>
                           <div className='w-1/2 p-3'>
                              <h3 className='font-semibold'>Ending in</h3>
                              {/* <Countdown date={Date.now() + data.end_date} renderer={({ hours, minutes, seconds }) => <div className=''>{`${hours}h: ${minutes}m: ${seconds}s`}</div>} /> */}
                           </div>
                        </div>
                     </div>
                     <h3 className='font-semibold text-lg px-3 mt-2 text-3xl' style={{ color: "white" }}>
                        {data.name}
                     </h3>
                     <div className='flex items-center px-3 mt-2'>
                        <img src='https://assets.codepen.io/3685267/nft-dashboard-pro-1.jpg' className='w-10 h-10 rounded-full' alt='item-owner' />
                        <span className=' ml-2 text-zinc-400'>{data.type}</span>
                     </div>
                     <div className='flex mt-2'>
                        <div className='p-3 w-1/2'>
                           <button className='bg-gradient-to-tr from-fuchsia-600 to-violet-600  w-full h-12 rounded-md font-semibold' href=''>
                              Donate
                           </button>
                        </div>
                        <div className='p-3 w-1/2'>
                           <button className='bg-gradient-to-tr from-fuchsia-600 to-violet-600  w-full rounded-md font-semibold h-12 p-px'>
                              <div className='bg-zinc-800 w-full h-full rounded-md grid place-items-center'>Share</div>
                           </button>
                        </div>
                     </div>
                  </a>
               </li>
            ))}
         </ul>
      </>
   );
}

export default IndividualItem;
