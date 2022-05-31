import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
function Dashboard() {
   let [campaign, setcampaign] = useState([]);
   let access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzOTgxNzQ0LCJpYXQiOjE2NTM5ODE0NDQsImp0aSI6ImQ1NTZjY2VmZGRlNjQxYTk4NzdjYWZhYmIxY2U3ZGE5IiwidXNlcl9pZCI6MX0.jymUA8aluPQyJfrw8UWTp6-5iMkdc5SQYC841UfHaTA";
   useEffect(() => {
      getcampaign();
   }, []);

   let getcampaign = async () => {
      console.log("getcampaign");
      let response = await fetch("http://127.0.0.1:8000/campaigns/", {
         method: "get",
         headers: new Headers({
            Authorization: `Bearer ${access_token}`,
         }),
      });
      let data = await response.json();
      console.log("data", data);
      setcampaign(data);
      console.log("getcampaign342");
   };
   if (!localStorage.getItem("token")) {
      return <Redirect to='login' />;
   }
   return (
      <div>
         <h1>Home</h1>
         {localStorage.getItem("user")}
         <ul>
            {" "}
            {campaign.map((data) => (
               <li>{data.name}</li>
            ))}
         </ul>
      </div>
   );
}

export default Dashboard;
