import Payment from "./Payment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShareButtons from "../ShareButton/ShareButtons";
import axios from "axios";
import { set_access_token } from "./../utils/accessToken";



const sampleJSON = {
   string: "PluralSight",
   number: 1,
};

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

    const [value,setValue] = React.useState(0)
  const actArray = []
  for(let i=0;i<4;i++){
    if (i===value){
      actArray.push('btn active')
    }
    else{
      actArray.push('btn')
    }
  }

   return (
      <>
         <div>
            {" "}
            {detailedview.map((data) => (
               <div style={{ width: "%" }}>
                  <div className='h-96 bg-cover flex flex-wrap' style={{ backgroundImage: `url(${data.images})` }}>
                     <br />
                     <h2 className='font-bold text-3xl pt-3 pl-3 text-white'>{data.name}</h2>
                  </div>
                  <div className='flex items-center space-x-6 mt-4'>
                
                     <span>
                        <ShareButtons url='https://twitter.com/LBank_Exchange/status/1531857343973048326' />
                     </span>
                  </div>
       <div className="App">
      <ul style={{listStyle:'none', paddingTop:"5rem"}}>
        <li style={{float:'left'}}><button type='button' className={actArray[0]} onClick={()=>{setValue(  <p className='text-center text-[#daded9] p-16 text-1xl' style={{ overflowWrap: "break-word" }}>
                        {data.description}
                     </p>)}}>Story</button></li>
        <li style={{float:'left'}}><button type='button' className={actArray[1]} onClick={()=>{setValue(<div className="ml-12 pl-48" >
      <object 
        data='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'
        type="application/pdf"
        width="570"
        height="578"
      >

        <ifram
          src='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'
          width="570"
          height="578"
        >
        <p>This browser does not support PDF!</p>
        </ifram>
      </object>
    </div> )}}>Documents</button></li>
        <li style={{float:'left'}}><button type='button' className={actArray[3]} onClick={()=>{setValue(<Payment />)}}>Payment</button></li>
      </ul>
      <br/><br/>
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
