import React from "react";
import Payment from "./Payment";

const Details = () => {
   return (
      <>
         <div className=' h-96 bg-cover flex flex-wrap' style={{ backgroundImage: "url(https://kettocdn.gumlet.io/media/campaign/475000/475235/image/62fbb9d5cef3675c4beddbd82c96f8ac4743524b.jpg?dpr=1.0&q=70&w=1140)" }}>
            <h2 className='font-bold text-3xl pt-3 pl-3 text-white'>No one has ever become poor by giving</h2>
         </div>
         <div className='flex items-center space-x-6 mt-4'>
            <button className=' w-96 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded'>Donate</button>
            <button className=' w-96 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Share</button>
         </div>
         <div className='hidden md:flex items-center space-x-1'>
            <a href='' className='py-4 px-2 text-xl text-gray-500 hover:text-green-500  border-b-4 border-green-500 font-semibold '>
               Story
            </a>
            <a href='#documents' className='py-4 px-2 text-xl text-gray-500 font-semibold hover:text-green-500 '>
               Documents
            </a>
         </div>
         <div>
            <p className='text-center text-[#daded9] p-16 text-3xl'>She comes from a family of very limited means, but as a very vivacious young girl, she always looked for something to be grateful for. Her parents wanted her to have an education and live a better life than them.</p>
         </div>
         <Payment />
      </>
   );
};

export default Details;
