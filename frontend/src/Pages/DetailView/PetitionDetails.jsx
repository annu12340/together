import React from 'react'
import axios from "axios";
import { set_access_token } from "../utils/accessToken";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const sampleJSON = {
   string: "PluralSight",
   number: 1,
};



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
         console.log("response",response);
      }
   };

  return (
    < >
           <div>
            {" "}
            {detailedview.map((data) => (
               <div>
              <div className=' h-96 bg-cover bg-center flex flex-wrap'>
            <h2 className='font-bold text-3xl pt-3 pl-3 text-black'>{data.name}</h2>
            </div>
            <div className='p-16 text-[#daded9] font-bold italic text-3xl text-center' >
                <p></p>
            </div>
            <div className="flex items-center space-x-6 mt-4">
            <button className=" w-96 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
             Sign the petition
            </button>
 
            </div>
            </div>
             ))}
         </div>
    </>
  );
};

export default PetitionDetails
