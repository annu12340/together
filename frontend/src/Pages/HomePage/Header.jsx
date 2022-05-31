import React from "react";

function Header() {
   return (
            <div className='flex flex-wrap p-3 items-center sticky top-0 bg-zinc-900 h-fit  md:h-16 z-30'>
         <div className='flex items-center grow md:grow-0 w-fit md:w-48'>
            <div className='w-10 h-10 bg-gradient-to-tr from-fuchsia-600 to-violet-600 grid place-items-center rounded-full font-bold text-white  text-2xl'>D</div>
            <div className='ml-2 font-bold text-white text-xl'>Together</div>
         </div>

         <div className='flex items-center order-2 md:order-3 pl-0 md:pl-3'>
            <div className='relative'>
               <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
               </svg>
               <div className='absolute right-0 top-0 w-3 h-3 bg-zinc-900 rounded-full p-0.5'>
                  <div className='bg-red-500 w-full h-full  rounded-full' />
               </div>
            </div>
            <img src='https://assets.codepen.io/3685267/nft-dashboard-pro-1.jpg' alt='user' className='w-10 h-10 rounded-full ml-4' />
            <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7 ml-4' viewBox='0 0 20 20' fill='currentColor'>
               <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
            </svg>
         </div>

         <div className='flex  mt-4 md:mt-0 order-3 md:order-2 w-full grow md:w-fit '>
            <button className='w-10 h-10 rounded-md bg-zinc-700 grid place-items-center mr-2 block md:hidden'>
               <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
               </svg>
            </button>
            <form className='relative grow md:max-w-lg'>
               <input type='text' className='bg-zinc-700 pl-3 pr-10 h-10 rounded-md w-full white' placeholder='search' />
               <span className='absolute right-0 top-0 bottom-0 w-10 grid place-items-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                     <path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' />
                  </svg>
               </span>
            </form>
         </div>
      </div>
   );
}

export default Header;
