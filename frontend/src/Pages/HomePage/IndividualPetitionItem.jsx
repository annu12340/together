import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { set_access_token } from "../utils/accessToken";

const SidebarRight = () => {
   let [petition, setpetition] = useState([]);

   useEffect(() => {
      set_access_token();
      getpetition();
   }, []);

   let getpetition = async () => {
      let response = await axios.get(`http://127.0.0.1:8000/petition/`, { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } });

      if (response.status === 200) {
         setpetition(response.data);
      }
      console.log("petition", response.data);
   };
   return (
      <>
         <div className='ml-2 p-3 w-96 shrink-0 md:sticky md:top-16 shrink-0 h-full'>
            <h2 className='text-2xl text-white font-semibold'>Petitions</h2>
            <ul className='mt-3 space-y-3'>
               {petition.map((data) => (
                  <li className='bg-zinc-800 rounded-md p-2 flex shadow-lg'>
                     <img src={data.images} className='w-24 h-24 rounded-md' />
                     <div className='ml-3'>
                        <h3 className='font-semibold  text-white'>{data.name}</h3>

                        <p className='text-sm pb-4 text-zinc-400'>Needs {data.target_signature_counter} signs</p>
                        <Link to={`/petition/${data.id}`}>
                           <a className=' btn  w-18 bg-gradient-to-tr from-fuchsia-600 to-violet-600 text-white font-bold py-2 px-2 rounded'>Sign</a>
                        </Link>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};

export default SidebarRight;
