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
                     <ul style={{ listStyle: "none", paddingTop: "3rem" }}>
                        <li style={{ float: "left" }}>
                           <button
                              type='button'
                              className={actArray[0]}
                              onClick={() => {
                                 setValue(
                                    <p className='text-center text-[#daded9] p-14 text-1xl' style={{ overflowWrap: "break-word", fontSize: "20px" }}>
                                       Climate Change is really a thing now with Delhi experiencing such drastic changes in the weather conditions over the past few years. Last year Delhi topped the list of most polluted cities in the world. Futhermore, every year we see Delhi breaking its own
                                       record in heat wave as a result of rising temperature. My take lets start by improving what we have. Restoring our neighborhood parks would not only provide a place for people to relax but also fight against global warming and air pollution, which has become
                                       another predator for human beings. Every day atleast 8 people die due to air pollution and last year we lost 1,600 people to rising temperatures. In an article by MIT, researchers showcased that - "If climate change continues at its current pace, deadly
                                       heatwaves beginning in the next few decades will strike parts of India, Pakistan and Bangladesh." There are currently 14,000 neighborhood parks in Delhi and yet most of them have dried out due to lack of maintenance and poor infrastructure. This maybe a small
                                       motion in the fast changing climate conditions but as it is said 'To move mountains we have to start by moving small stones'.{" "}
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
