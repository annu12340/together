import React from "react";
import link from "react-router-dom";

const artists = [
   {
      name: "Air pollution",
      handler: "@raven",
      image: "https://assets.codepen.io/3685267/nft-dashboard-pro-1.jpg",
   },
   {
      name: "Water pollution",
      handler: "@uriah",
      image: "https://assets.codepen.io/3685267/nft-dashboard-pro-2.jpg",
   },
   {
      name: "Against deforestation",
      handler: "@colin",
      image: "https://assets.codepen.io/3685267/nft-dashboard-pro-4.jpg",
   },
];

const SidebarRight = () => {
   return (
      <>
         <div className='p-3 w-96 shrink-0 md:sticky md:top-16 shrink-0 h-full'>
            <h2 className='text-2xl text-white font-semibold'>Petitions</h2>
            <ul className='mt-3 space-y-3'>
               {artists.map(({ name, handler, image }) => (
                  <li className='bg-zinc-800 rounded-md p-2 flex shadow-lg' key={handler}>
                     <img src={image} className='w-24 h-24 rounded-md' alt={`top artist ${name}`} />
                     <div className='ml-3'>
                        <h3 className='font-semibold  text-white'>{name}</h3>
                        <p className='text-sm pb-4 text-zinc-400'>{handler}</p>

                        <a href='/petition' className=' btn  w-24 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
                           Sign
                        </a>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};

export default SidebarRight;
