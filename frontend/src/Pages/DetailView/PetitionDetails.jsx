import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShareButtons from "../ShareButton/ShareButtons";
import axios from "axios";
import { set_access_token } from "./../utils/accessToken";
import Signature from "./Signature";

const PetitionDetails = () => {
   const params = useParams();
   let [detailedview, setdetailedview] = useState([]);

   useEffect(() => {
      set_access_token();
      getdetailedview();
   }, []);
   const [value, setValue] = React.useState("");
   const actArray = [];
   for (let i = 0; i < 4; i++) {
      if (i === value) {
         actArray.push("btn active");
      } else {
         actArray.push("btn");
      }
   }
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
               <div style={{ width: "90%", padding: "5%" }}>
                  <div className='h-96 bg-cover flex flex-wrap' style={{ backgroundImage: `url(${data.images})` }}>
                     <br />
                     <h2 className='font-bold text-3xl pt-3 pl-3 text-white'>
                        {data.name}{" "}
                        <span className='mt-2' style={{ float: "right" }}>
                           {" "}
                           {data.is_verified && <img src='https://cdn-icons-png.flaticon.com/512/6269/6269646.png' height='20' width='20' />}
                        </span>
                     </h2>
                  </div>
                  <div className='flex items-center space-x-6 mt-4'>
                     <span>
                        <ShareButtons title='Check out this petition and do make a contribution if you can' url={`http://localhost:3000/campaign/${data.id}`} />
                     </span>
                  </div>

                  <div className='App'>
                     <ul style={{ listStyle: "none", paddingTop: "5rem" }}>
                        <li style={{ float: "left" }}>
                           <button
                              type='button'
                              className={actArray[0]}
                              onClick={() => {
                                 setValue(
                                    <p className='text-center text-[#daded9] p-16 text-1xl' style={{ overflowWrap: "break-word" }}>
                                       The issue with the current crowdfunding technique is that third party media don’t give the assurance of the money investor contributed for the project and investors don’t have control over the cash they contribute. The traditional crowdfunding platforms do not
                                       support all types of crowdfunding campaigns and have high platform charges while also having a high risk of fraud. We plan to build a decentralized platform that supports all types of crowdfunding on a blockchain network.
                                    </p>
                                 );
                              }}>
                              Story
                           </button>
                        </li>

                        <li style={{ float: "left" }}>
                           <button
                              type='button'
                              className={actArray[3]}
                              onClick={() => {
                                 setValue(<Signature />);
                              }}>
                              Signature
                           </button>
                        </li>
                     </ul>
                     <br />
                     <br />
                     <div>
                        <h2>{value}</h2>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
};

export default PetitionDetails;
