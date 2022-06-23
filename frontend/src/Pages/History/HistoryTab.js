import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./timeline.css";
import "./history.css";
import axios from "axios";
import { set_access_token } from "./../utils/accessToken";

const HistoryTab = () => {
   let [campaign, setcampaign] = useState([]);

   useEffect(() => {
      set_access_token();
      getcampaign();
   }, []);

   let getcampaign = async () => {
      let response = await axios.get(`http://127.0.0.1:8000/campaigns/user/1/campaigns`, { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } });

      if (response.status === 200) {
         setcampaign(response.data);
      }
      console.log("data", response.data);
   };
   return (
      <>
         <div className='flex flex-col md:flex-row'>
            <div className='histo pl-5'>
               <div className=''>
                  <h2 className='text-center dashboard-heading text-white' style={{ fontSize: "35px" }}>
                     <b> My campaigns</b>
                  </h2>
               </div>
               {campaign.map((data) => (
                  <div className='p-5'>
                     <Link to={`/campaign/${data.id}`}>
                        <div className=' w-full lg:max-w-full lg:flex'>
                           <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' style={{ backgroundImage: `url(${data.images})` }} title='Mountain'></div>
                           <div style={{ width: "30vw" }} className=' back border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-900  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal '>
                              <div className='mb-8'>
                                 <div className='text-white font-bold text-xl mb-2'>{data.name}</div>
                                 <p className='text-zinc-300 text-base'>
                                    {`${data.description.substring(0, 80)}...`}
                                    <a href='#' className=' text-zinc-500'>
                                       Read more
                                    </a>
                                 </p>
                              </div>
                           </div>
                           <div className='back border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-900  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                              <div className='mb-8'>
                                 <div className=' items-center space-x p-4'>
                                    <Link to={"/analysis"}>
                                       <button className=' space-x-2 items-center px-2.5 py-2 bg-blue-500 hover:bg-blue-800 rounded-md drop-shadow-md'>
                                          {/* <span className='text-white'>Delete</span> */}
                                          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                             <path d='M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z' />
                                          </svg>
                                       </button>
                                    </Link>

                                    <button className='mt-8 space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md'>
                                       <svg className='fill-white' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='20' height='20' viewBox='0 0 24 24'>
                                          <path d='M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z'></path>
                                       </svg>
                                       {/* <span className='text-white'>Delete</span> */}
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>
            <div className='histo2 ml-5'>
               <div className='dark-bk dashboard-timeline-row'>
                  <div className=''>
                     <h4 className=' dashboard-heading text-white'>Contributed campaigns</h4>
                  </div>
                  <hr />
                  <br />
                  <br />
                  <ul className='dashboard-timeline'>
                     <li className='dashboard-timeline-item'>
                        <div className='dashboard-timeline-info'>
                           <span>2nd September 2008</span>
                        </div>
                        <div className='dashboard-timeline-marker'></div>
                        <div className='dashboard-timeline-content'>
                           <h3 className='dashboard-timeline-title'>Girls Hockey Bill of Rights</h3>
                        </div>
                     </li>

                     <li className='dashboard-timeline-item'>
                        <div className='dashboard-timeline-info'>
                           <span>19th September 2021</span>
                        </div>
                        <div className='dashboard-timeline-marker'></div>
                        <div className='dashboard-timeline-content'>
                           <h3 className='dashboard-timeline-title'>Community Support for the Beaver Falls Children's Museum Projec</h3>
                        </div>
                     </li>

                     <li className='dashboard-timeline-item'>
                        <div className='dashboard-timeline-info'>
                           <span>23rd March 2021</span>
                        </div>
                        <div className='dashboard-timeline-marker'></div>
                        <div className='dashboard-timeline-content'>
                           <h3 className='dashboard-timeline-title'>Help Devika overcome cancer</h3>
                        </div>
                     </li>

                     <li className='dashboard-timeline-item'>
                        <div className='dashboard-timeline-info'>
                           <span>27th September 2021</span>
                        </div>
                        <div className='dashboard-timeline-marker'></div>
                        <div className='dashboard-timeline-content'>
                           <h3 className='dashboard-timeline-title'>Build a new decentralized social media platform</h3>
                        </div>
                     </li>

                     <li className='dashboard-timeline-item'>
                        <div className='dashboard-timeline-info'>
                           <span>14th October 2022</span>
                        </div>
                        <div className='dashboard-timeline-marker'></div>
                        <div className='dashboard-timeline-content'>
                           <h3 className='dashboard-timeline-title'>Buy me a coeffe for Shalu</h3>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};

export default HistoryTab;
