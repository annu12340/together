import React from "react";
import Header from "./Header";
import AboutUsHeader from "./AboutUsHeader";
import SidebarLeft from "./SidebarLeft";
import { Outlet } from "react-router-dom";

import "./homepage.css";

const Dashboard = () => {
   return (
      <>
         <Header />
         <SidebarLeft />

         <div className='flex flex-col md:flex-row'>
            <div className='w-48 hidden lg:block shrink-0' />
            <div className=' grow '>
               <AboutUsHeader />
               <Outlet />
            </div>
         </div>
      </>
   );
};

export default Dashboard;
