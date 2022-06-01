import React from "react";

// import './homepage.css'
import "./history.css";
const HistoryTab = () => {
   return (
      <>
         <div className='histo'>
            <div className='time-container'>
               <h1 className=' text-gray-100 project-name'>Amount History</h1>
               <div id='timeline'>
                  <div className='timeline-item'>
                     <div className='timeline-icon'>
                        {/* <svg version="1.1" viewbox="0 0 268.6 268.6" xmlns:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <path className="st0" d="M.1 150.5V70.4h56.2v86.2h-32c4.2 21.8 32 29.8 32 29.8v11.8c0-.1-49.8-9.5-56.2-47.7M268.4 150.5V70.4h-56.2v86.2h32c-4.2 21.8-32 29.8-32 29.8v11.8c0-.1 49.8-9.5 56.2-47.7M157.7 156.9c.1-.2.2-.3.3-.4l29.1-21.3-6.4-5.6c-.1-.1-.2-.2-.3-.4v-.4l5.1-14.5-14.6 3.1h-.4c-.1-.1-.3-.2-.3-.3l-4.8-7.7-14.4 14.1c-.2.2-.5.3-.8.1-.3-.2-.4-.5-.3-.8l6.4-30.9-9.6 6.3c-.2.1-.4.2-.6.2-.2-.1-.3-.2-.5-.4l-11-22.4-11 22.4c-.1.2-.2.3-.5.4-.2.1-.4 0-.6-.2l-9.6-6.3 6.4 30.9c.1.3 0 .7-.3.8-.3.2-.6.1-.8-.1l-14.4-14.1-4.8 7.7-.3.3c-.1.1-.3.1-.4 0l-14.6-3.1 5.1 14.5v.4c0 .2-.1.3-.3.4l-6.4 5.6 29.1 21.3c.1.1.3.2.3.4.1.2 0 .4-.1.5l-6.2 10.4 25.5-3.9c.3 0 .9.1.9.8v21.4h6.1v-21.4c0-.6.5-.8.9-.8l25.5 3.9-6.2-10.4c-.2-.1-.2-.3-.2-.5z" />
          <path d="M0 0h268.6v268.6H0z" fill="none" />
        </svg> */}
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-11 w-11' viewBox='0 0 20 20' fill='none'>
                           <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
                        </svg>
                     </div>
                     <div className='timeline-content right'>
                        <h2 className='bg-gradient-to-tr from-fuchsia-600 to-violet-600 rounded-md'>JANUARY 2020</h2>
                        <h3>I lost my husband,don’t let me lose my daughter too.</h3>
                        <ul>
                           <li>
                              <strong>Amount Donated : </strong> 1322
                           </li>
                        </ul>
                     </div>
                  </div>

                  <div className='timeline-item'>
                     <div className='timeline-icon'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-11 w-11' viewBox='0 0 20 20' fill='none'>
                           <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
                        </svg>
                     </div>
                     <div className='timeline-content'>
                        <h2 className='bg-gradient-to-tr from-fuchsia-600 to-violet-600 rounded-md'>JANUARY 2020</h2>
                        <h3>Without Rs 26.5 Lakhs, I Might Lose My 2-Year-Old Child</h3>
                        <ul>
                           <li>
                              <strong>Amount Donated : </strong> 4345
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className='histo2'>
            <div className='p-5'>
               <div className=' w-full lg:max-w-full lg:flex'>
                  <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' style={{ backgroundImage: `url(/images/image1.jpg)` }} title='Mountain'></div>
                  <div style={{ width: "20vw" }} className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-900 bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                     <div className='mb-8'>
                        <div className='text-white font-bold text-xl mb-2'>Campaign</div>
                        <p className='text-white text-base'>Without Rs 26.5 Lakhs, I Might Lose My 2-Year-Old Child</p>
                     </div>
                  </div>
                  <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-900 bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                     <div className='mb-8'>
                        <div className='flex items-center space-x p-4'>
                           <button className='flex space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md'>
                              <svg className='fill-white' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='20' height='20' viewBox='0 0 24 24'>
                                 <path d='M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z'></path>
                              </svg>
                              <span className='text-white'>Delete</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='p-5'>
               <div className=' w-full lg:max-w-full lg:flex'>
                  <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' style={{ backgroundImage: `url(/images/image2.jpg)` }} title='Mountain'></div>
                  <div style={{ width: "20vw" }} className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-900 bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                     <div className='mb-8'>
                        <div className='text-white font-bold text-xl mb-2'>Campaign</div>
                        <p className='text-white text-base'>I lost my husband,don’t let me lose my daughter too.</p>
                     </div>
                  </div>
                  <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-900 bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                     <div className='mb-8'>
                        <div className='flex items-center space-x p-4'>
                           <button className='flex space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md'>
                              <svg className='fill-white' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='20' height='20' viewBox='0 0 24 24'>
                                 <path d='M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z'></path>
                              </svg>
                              <span className='text-white'>Delete</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HistoryTab;
