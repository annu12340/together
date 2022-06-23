import React from "react";
import { AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie, PieChart, BarChart, Bar, ResponsiveContainer } from "recharts";

export default function Analysis() {
   var data = [
      {
         datecount: [
            {
               name: "20/6/22",
               location: "palakkad",
               count: 5,
            },
            {
               name: "22/6/22",
               location: "kochi",
               count: 33,
            },
            {
               name: "23/6/22",
               location: "petta",
               count: 15,
            },
            {
               name: "24/6/22",
               location: "kaloor",
               count: 10,
            },
            {
               name: "25/6/22",
               location: "edappally",
               count: 3,
            },
            {
               name: "26/6/22",
               location: "palarivattom",
               count: 21,
            },
         ],
         location: [
            {
               name: "palakkad",
               location: 3,
            },

            {
               name: "petta",
               location: 10,
            },
            {
               name: "palarivattom",
               location: 13,
            },
            {
               name: "kaloor",
               location: 20,
            },
            {
               name: "kochi",
               location: 30,
            },
            {
               name: "edappally",
               location: 1,
            },
         ],
      },
   ];
   return (
      <div className='pl-20'>
         <>
            {" "}
            <h1 className='text-xl font-semibold text-gray-100 text-center'>Scan data by date</h1>
            <LineChart
               width={900}
               height={380}
               data={data[0]["datecount"]}
               margin={{
                  top: 5,
                  right: 60,
                  left: 50,
                  bottom: 5,
               }}>
               <CartesianGrid strokeDasharray='3 3' />
               <XAxis dataKey='name' />
               <YAxis />
               <Tooltip />
               <Legend />
               <Line type='monotone' dataKey='count' stroke='#fa5252' />
            </LineChart>
         </>
         <>
            <br />
            <br />
            <br /> <h1 className='mt-20 text-xl font-semibold text-gray-100 text-center'>Scan data by location</h1>
            <LineChart
               width={900}
               height={380}
               data={data[0]["location"]}
               margin={{
                  top: 5,
                  right: 60,
                  left: 50,
                  bottom: 5,
               }}>
               <CartesianGrid strokeDasharray='3 3' />
               <XAxis dataKey='name' />
               <YAxis />
               <Tooltip />
               <Legend />
               <Line type='monotone' dataKey='location' stroke='#82ca9d' strokeDasharray='5 5' />
            </LineChart>
         </>
      </div>
   );
}
