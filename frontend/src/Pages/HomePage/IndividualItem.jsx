import Countdown from "react-countdown";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

      if (response.status === 200) {
         setcampaign(response.data);
      }
      console.log("data", response.data);
   };
   let filterBtn = async () => {
      let result = await axios.get(`http://127.0.0.1:8000/campaigns/filter/NGO`, { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } });

      if (result.status === 200) {
         console.log("data", result.data);
      }
   };

   return (
      <>
         <div className='flex flex-col md:flex-row justify-between px-3 mt-3'>
            <h2 className='text-xl text-white font-semibold'>Recent</h2>
            {localStorage.getItem("user")}
            {/* <div className='inline-flex space-x-3 '>
               {["StartUp", "Medical", "Disaster", "Sport"].map((text, index) => (
                  <div className=''>
                     <button onClick={filterBtn} className={` ${index ? "text-zinc-500" : "text-fuchsia-600 underline font-bold"}`}>
                        {text}
                     </button>
                  </div>
               ))}
               ;
            </div> */}
         </div>
         <br />
         <ul className='p-1.5 flex flex-wrap'>
            {campaign.map((data) => (
               <>
                  {" "}
                  <li className='w-full lg:w-1/2 xl:w-1/3  p-3 ' key={data.id} href='http://localhost:3000/item/1/'>
                     <Link to={`/campaign/${data.id}`}>
                        <div className='w-full h-64 bg-center bg-cover relative' style={{ backgroundImage: `url(${data.images})` }}>
                           <div className='absolute left-1/2 -translate-x-1/2 bottom-2  w-5/6 bg-white rounded-md flex items-center bg-opacity-30 backdrop-blur-md'>
                              <div className='w-1/2 p-3'>
                                 <h3 className='font-semibold'>Current Amound</h3>
                                 <div className=''>{data.target_amount} ETH</div>
                              </div>
                              <div className='w-1/2 p-3'>
                                 <h3 className='font-semibold'>Ending in</h3>
                                 <Countdown date={Date.now() + parseInt((new Date(data.end_date).getTime() / 1000).toFixed(0))} renderer={({ hours, minutes, seconds }) => <div className=''>{`${hours}h: ${minutes}m: ${seconds}s`}</div>} />
                              </div>
                           </div>
                        </div>

                        <span>
                           {" "}
                           <h3 className='font-semibold text-lg px-3 mt-2 text-3xl' style={{ color: "white" }}>
                              {data.name} <span style={{ float: "right" }}> {data.is_verified && <img src='https://cdn-icons-png.flaticon.com/512/6269/6269646.png' height='20' width='20' />}</span>
                           </h3>
                        </span>
                        <div className='flex items-center px-3 mt-2'>
                           <img src='https://assets.codepen.io/3685267/nft-dashboard-pro-1.jpg' className='w-10 h-10 rounded-full' alt='item-owner' />
                           <span className=' ml-2 text-zinc-400'>{data.type}</span>
                           <span className=' ml-2 text-zinc-100'>{data.likes} likes</span>
                        </div>
                        <div class='mb-1 text-base text-white'>
                           <pre>
                              <strong>579,131</strong>INR raised 58%
                           </pre>
                        </div>
                        <div class='  w-65 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                           <div class='bg-gradient-to-tr from-fuchsia-600 to-violet-600    h-2.5 rounded-full dark:bg-gray-300' style={{ width: "6rem" }}></div>
                        </div>
                     </Link>
                  </li>
               </>
            ))}
         </ul>
      </>
   );
}

export default IndividualItem;
