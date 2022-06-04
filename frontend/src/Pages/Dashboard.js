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
      </div>
   );
};

export default Dashboard;
