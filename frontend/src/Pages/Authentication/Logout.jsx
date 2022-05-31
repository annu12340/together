import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
function Logout() {
   useEffect(() => {
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
   });

   return <Navigate to='/login' />;
}

export default Logout;
