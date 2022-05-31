import React from "react";
import IndividualItem from "./HomePage/IndividualItem";
import SidebarRight from "./HomePage/SidebarRight";

const Dashboard = () => {
   return (
      <div className='flex flex-col md:flex-row'>
         <div className=' grow '>
            <IndividualItem />
         </div>
         <SidebarRight />
      </div>
   );
};

export default Dashboard;
