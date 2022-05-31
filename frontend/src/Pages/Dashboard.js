import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

function Dashboard() {
   let [campaign, setcampaign] = useState([]);
   let [petition, setpetition] = useState([]);
   let access_token = localStorage.getItem("token");

   useEffect(() => {
      getcampaign();
      getpetition();
   }, []);

   let getcampaign = async () => {
      let response = await axios.get(`http://127.0.0.1:8000/campaigns/`, { headers: { Authorization: `Bearer ${access_token}` } });

      if (response.status === 200) {
         setcampaign(response.data);
      }
      console.log("data", response.data);
   };

   let getpetition = async () => {
      let response = await axios.get(`http://127.0.0.1:8000/petition/`, { headers: { Authorization: `Bearer ${access_token}` } });

      if (response.status === 200) {
         setpetition(response.data);
      }
      console.log("petition", response.data);
   };

   // POST DATA TO DATABASE

   let postcampaign = async () => {
      let body = {
         name: "postcampaign",
         description: "string",
         type: "NGO",
         status: "PENDING",
         start_date: "2022-05-31T08:21:59.451Z",
         end_date: "2022-05-31T08:21:59.451Z",
         target_amount: 23,
         contact_info: "string",
         organiser_id: 1,
      };
      let response = await axios.post("http://127.0.0.1:8000/campaigns/", body, { headers: { Authorization: `Bearer ${access_token}` } });

      console.log("data", response.data);
   };

   if (!localStorage.getItem("token")) {
      return <Redirect to='login' />;
   }
   return (
      <div>
         <h1>Home</h1>
         {localStorage.getItem("user")}
         petition
         <h3>Campaign</h3>
         <ul> {campaign && campaign.map((data) => <li>{data.name}</li>)}</ul>
         <h3>petition</h3>
         <ul> {petition && petition.map((data) => <li>{data.name}</li>)}</ul>
         <button onClick={postcampaign}>Post campaign</button>
      </div>
   );
}

export default Dashboard;
