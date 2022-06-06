import React from "react";
import IndividualItem from "./HomePage/IndividualItem";
import IndividualPetitionItem from "./HomePage/IndividualPetitionItem";

const Dashboard = () => {
   return (
      <div className='flex flex-col md:flex-row'>
         <div className=' grow '>
            <IndividualItem />
         </div>
         <IndividualPetitionItem />
         {/* <iframe allow='microphone;' width='350' height='430' src='https://console.dialogflow.com/api-client/demo/embedded/f8e37dab-973a-4bbb-8658-140ef1c46aa0'></iframe> */}
      </div>
   );
};

export default Dashboard;
