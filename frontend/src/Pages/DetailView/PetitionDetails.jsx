import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShareButtons from "../ShareButton/ShareButtons";
import axios from "axios";
import { set_access_token } from "./../utils/accessToken";
import Payment from "./Payment";
import Signature from "./Signature";

const PetitionDetails = () => {
   const params = useParams();
   let [detailedview, setdetailedview] = useState([]);

   useEffect(() => {
      set_access_token();
      getdetailedview();
   }, []);

   let getdetailedview = async () => {
      let response = await axios.get(`http://127.0.0.1:8000/petition/${params.id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } });

      if (response.status === 200) {
         setdetailedview([response.data]);
         console.log("petitiondetails", detailedview);
      }
   };

   return (
      <>
         <div>
            {" "}
            {detailedview.map((data) => (
               <div>
                  <div className=' h-96 bg-cover bg-center flex flex-wrap'>
                     <h2 className='font-bold text-3xl pt-3 pl-3 text-black'>
                        {data.name}
                        <span className='mt-2' style={{ float: "right" }}>
                           {" "}
                           {<img src='https://cdn-icons-png.flaticon.com/512/6269/6269646.png' height='20' width='20' />}
                        </span>
                     </h2>
                  </div>
                  <div className='p-16 text-[#daded9] font-bold italic text-3xl text-center'>
                     <p>{data.description}</p>
                  </div>
                  <div className='flex items-center space-x-6 mt-4'>
                     <span>
                        <ShareButtons title='Check out this petition and do make a contribution if you can' url={`http://localhost:3000/petition/${data.id}`} />
                     </span>
                  </div>
                  <div className='p-5'>
                     <Signature />
                     {/* <button className=' w-96 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded'>Sign the petition</button> */}
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};

export default PetitionDetails;
