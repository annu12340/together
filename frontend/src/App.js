import React from "react";

import Home from "./pages/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HistoryTab from "./pages/History/HistoryTab";
import Details from "./pages/DetailView/Details";
import CapmpaignForm from "./pages/Forms/CampaignForm";
import PetitonForm from "./pages/Forms/PetitionForm";
import PetitionDetails from "./pages/DetailView/PetitionDetails";
import ShareButtons from "./pages/ShareButton/ShareButtons";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import Logout from "./pages/Authentication/Logout";
import Timeline from './pages/History/Timeline'
import Popup from "./pages/DetailView/Popup";
import SignupLogin from "./pages/Authentication/SignupLogin";

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<Home />}>
                  <Route path='/dashboard' element={<Dashboard />}></Route>
                  <Route path='/history' element={<HistoryTab />}></Route>
                  <Route path='/campaign/:id' element={<Details />}></Route>
                  <Route path='/petition/:id' element={<PetitionDetails />}></Route>
                  <Route path='/campaignregistration' element={<CapmpaignForm />}></Route>
                  <Route path='/petitionregistration' element={<PetitonForm />}></Route>
               </Route>
               <Route path='/login' element={<Login />}></Route>
               <Route path='/logout' element={<Logout />}></Route>
               <Route path='/register' element={<Register />}></Route>
               <Route path='/test' element={<SignupLogin/>}></Route>
            </Routes>
         </Router>
      </>
   );
}

export default App;
