import Payment from "./Payment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShareButtons from "../ShareButton/ShareButtons";
import axios from "axios";
import { set_access_token } from "./../utils/accessToken";

const Details = () => {
   const params = useParams();
   let [detailedview, setdetailedview] = useState([]);

   useEffect(() => {
      set_access_token();
      getdetailedview();
   }, []);

   let getdetailedview = async () => {
      let response = await axios.get(`http://127.0.0.1:8000/campaigns/${params.id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } });

      if (response.status === 200) {
         setdetailedview([response.data]);
         console.log("details", detailedview);
      }
   };

   let updateLike = async () => {
      let response = await axios.get(`http://127.0.0.1:8000/campaigns/like/${params.id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` } });

      if (response.status === 200) {
         console.log("updateLike", response);
      }
   };
   return (
      <>
         <div>
            {" "}
            {detailedview.map((data) => (
               <div style={{ width: "98%" }}>
                  <div className='h-96 bg-cover flex flex-wrap' style={{ backgroundImage: `url(${data.images})` }}>
                     <br />
                     <h2 className='font-bold text-3xl pt-3 pl-3 text-white'>{data.name}</h2>
                  </div>
                  <div className='flex items-center space-x-6 mt-4'>
                     <span>
                        <ShareButtons title='Check out this campaign and do make a contribution if you can' url={`http://localhost:3000/campaign/${data.id}`} />
                     </span>
                     <span>
                        <button className='bg-indigo-500 p-3' onClick={updateLike}>
                           Like
                        </button>
                     </span>
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
                     <p className='text-center text-[#daded9] p-16 text-1xl' style={{ overflowWrap: "break-word" }}>
                        {data.description}
                     </p>

                     <div className='ml-12 pl-56 pb-10'>
                        <object data='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf' type='application/pdf' width='670' height='578'>
                           <ifram src='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf' width='670' height='578'>
                              <p>This browser does not support PDF!</p>
                           </ifram>
                        </object>
                     </div>
                  </div>
                  <Payment />
               </div>
            ))}
         </div>
      </>
   );
};

export default Details;
