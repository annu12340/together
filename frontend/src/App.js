import React from "react";

import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/DetailView/Details";
import CapmpaignForm from "./pages/Forms/CampaignForm";
import PetitonForm from "./pages/Forms/PetitionForm";
import PetitionDetails from "./pages/DetailView/PetitionDetails";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import OTP from "./pages/Authentication/OTP";
import Logout from "./pages/Authentication/Logout";
import Petitionhistory from "./pages/History/Petitionhistory";
import HistoryTab from "./pages/History/HistoryTab";

// import SignupLogin from "./pages/Authentication/SignupLogin";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Home />}>
                  <Route path='/dashboard' element={<Dashboard />}></Route>
                  <Route path='/campaignhistory' element={<HistoryTab />}></Route>
                  <Route path='/petitionhistory' element={<Petitionhistory />}></Route>
                  <Route path='/campaign/:id' element={<Details />}></Route>
                  <Route path='/petition/:id' element={<PetitionDetails />}></Route>
                  <Route path='/addcampaign' element={<CapmpaignForm />}></Route>
                  <Route path='/addpetition' element={<PetitonForm />}></Route>
               </Route>
               <Route path='/login' element={<Login />}></Route>
               <Route path='/logout' element={<Logout />}></Route>
               <Route path='/register' element={<Register />}></Route>
               <Route path='/otp' element={<OTP />}></Route>
               {/* <Route path='/test' element={<SignupLogin />}></Route> */}
            </Routes>
         </Router>
      </>
   );
}

export default App;
