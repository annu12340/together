import React from "react";

import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HistoryTab from "./pages/History/HistoryTab";
import Details from "./pages/DetailView/Details";
import CapmpaignForm from "./pages/Forms/CampaignForm";
import Petitonreg from "./pages/Forms/Petitionreg";
import PetitionDetails from "./pages/DetailView/PetitionDetails";
import ShareButtons from "./pages/ShareButton/ShareButtons";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Logout from "./pages/Authentication/Logout";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Home />}>
                  <Route path='/dashboard' element={<Dashboard />}></Route>
                  <Route path='/history' element={<HistoryTab />}></Route>
                  <Route path='/campaign/:id' element={<Details />}></Route>
                  <Route path='petition' element={<PetitionDetails />}></Route>
                  <Route path='/campaignForm' element={<CapmpaignForm />}></Route>
                  <Route path='/petitionreg' element={<Petitonreg />}></Route>
               </Route>
               <Route path='/login' element={<Login />}></Route>
               <Route path='/logout' element={<Logout />}></Route>
               <Route path='/register' element={<Register />}></Route>
               <Route path='/share' element={<ShareButtons />}></Route>
            </Routes>
         </Router>
      </>
   );
}

export default App;
