import Payment from "./Payment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShareButtons from "../ShareButton/ShareButtons";
import axios from "axios";
import { set_access_token } from "./../utils/accessToken";

const Details = () => {
   const params = useParams();
   let [detailedview, setdetailedview] = useState([]);
   const [value, setValue] = React.useState("");
   const actArray = [];
   for (let i = 0; i < 5; i++) {
      if (i === value) {
         actArray.push("btn active");
      } else {
         actArray.push("btn");
      }
   }
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
               <div style={{ width: "95%", padding: "5%" }}>
                  <div className='h-96 bg-cover flex flex-wrap' style={{ backgroundImage: `url(${data.images})` }}>
                     <br />
                     <h className='heading font-bold text-4xl pt-3 pl-3 text-white  text-center'>
                        {data.name}{" "}
                        <span className='mt-2' style={{ float: "right" }}>
                           {" "}
                           {data.is_verified && <img src='https://cdn-icons-png.flaticon.com/512/6269/6269646.png' height='20' width='20' />}
                        </span>
                     </h>
                  </div>
                  <div className='flex items-center text-center space-x-6 mt-4'>
                     <span>
                        <ShareButtons title='Check out this campaign and do make a contribution if you can' url={`http://localhost:3000/campaign/${data.id}`} />
                     </span>
                     {/* <span>
                        <button className='bg-indigo-500 p-3' onClick={updateLike}>
                           Like
                        </button>
                     </span> */}
                  </div>

                  <div className='App'>
                     <ul style={{ listStyle: "none", paddingTop: "2rem" }}>
                        <li style={{ float: "left" }}>
                           <button
                              type='button'
                              className={actArray[0]}
                              onClick={() => {
                                 setValue(
                                    <p className=' text-[#daded9] p-10 text-1xl' style={{ overflowWrap: "break-word" }}>
                                       {data.description}
                                    </p>
                                 );
                              }}>
                              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; Story &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                           </button>
                        </li>
                        <li style={{ float: "left" }}>
                           <button
                              type='button'
                              className={actArray[1]}
                              onClick={() => {
                                 setValue(
                                    <div className='ml-8 pl-36 pt-10 pb-10'>
                                       <object data={data.verification_documents} type='application/pdf' width='670' height='578'>
                                          <ifram src={data.verification_documents} width='670' height='578'>
                                             <p>This browser does not support PDF!</p>
                                          </ifram>
                                       </object>
                                    </div>
                                 );
                              }}>
                              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; Documents &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                           </button>
                        </li>
                        <li style={{ float: "left" }}>
                           <button
                              type='button'
                              className={actArray[3]}
                              onClick={() => {
                                 setValue(
                                    <>
                                       <Payment />
                                    </>
                                 );
                              }}>
                              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; ETH Payment &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                           </button>
                        </li>
                        <li style={{ float: "left" }}>
                           <button
                              type='button'
                              className={actArray[4]}
                              onClick={() => {
                                 setValue(
                                    <>
                                       {" "}
                                       <img className='ml-8 pl-60' src={data.qrcode_url} alt='' /> <h1 className='text-xl font-semibold text-gray-100 text-center'>Send ETH payment</h1>
                                    </>
                                 );
                              }}>
                              &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; UPI Payment &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
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

export default Details;
