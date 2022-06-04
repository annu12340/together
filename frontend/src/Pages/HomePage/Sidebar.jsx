import React from "react";



const sidebaritems = [
   {
      item: "Dashboard",
      icon: 'M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z',
      link:"dashboard"
   },
   {
     item: "History",
      icon: 'M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z',
      link: "history"
   },
   {
      item: "Campaign Registration",
      icon: 'M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' ,
      link:"campaignregistration"
   },
   {
    item: "Petition Registration",
      icon: 'M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z' ,
      link:"petitionregistration"
   },
     {
     item: "Setings",
      icon:'M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z' ,
      link:"setings"
   },
   {
     item: "Logout",
      icon: 'M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z' ,
      link:"logout"
   },
 
];



function SidebarItem({ key,text, index }) {
   return (
      <li className='relative'>
         {index === 0 ? <div className='absolute -left-1 top-0 bg-fuchsia-600 w-2 h-8 rounded-full' /> : null}
         <a href={"http://localhost:3000/" + sidebaritems[index].link} className={`pl-4 flex items-center capitalize   ${index === 0 ? "text-white" : "text-zinc-500"}`}>
            <span className={`bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md ${index === 0 ? "bg-fuchsia-600" : "bg-zinc-800"}`}>
               <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                 <path d={sidebaritems[index].icon} ></path>
               </svg>
            </span>
            {text}
         </a>
      </li>
   );
}

function SidebarLeft() {
   return (
      <div className='hidden lg:flex h-screen flex-col justify-between w-48 fixed left-0 top-0 bottom-0 pt-24'>
         <ul className='space-y-8'>
            {["Dashboard", "History", "Campaign registration", "Petition registration","settings","Logout"].map((key, index) => (
               <SidebarItem key={key} text={key} index={index} />
            ))}
         </ul>
         <div className='pb-5  px-4'>
            <hr className='mb-5 text-zinc-700' />
            <a href='http://localhost:3000/logout' className='py-2 flex items-center  text-zinc-500'>
               <span className='bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                    {sidebaritems[5].icon}
                  </svg>
               </span>
               Logout
            </a>
         </div>
      </div>
   );
}
export default SidebarLeft;
