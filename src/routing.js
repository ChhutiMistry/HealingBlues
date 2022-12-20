import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import Footer from './footer';
import Home from './Component/Home/Home';
import AboutMe from './Component/AboutMe';
import Memory from './Component/Memory';
import Listing from './Component/Listing/Listing';
import SoftSkillsTraining from './Component/Details/SoftSkillsTraining';
import CareerCounselling from './Component/Details/CareerCounselling';
import CounsellingandPsychotherapy from './Component/Details/CounsellingandPsychotherapy';
import BachFlower from './Component/Details/BachFlower';
import Graphology from './Component/Details/Graphology';
import LifeCoaching from './Component/Details/LifeCoaching';
import PlaceOrder from './Component/Order/PlaceOrder';
import ViewOrder from './Component/Order/ViewOrder';

const Routing = () => {
     return(
          <BrowserRouter>
               <Route path="/login" component={Login}/>
               <Route path="/register" component={Register}/>
               <Route exact path="/" component={Home}/>
               <Route path="/aboutme" component={AboutMe}/>
               <Route path="/memory" component={Memory}/>
               <Route path="/listing/:id" component={Listing}/>
               <Route path="/details/1" component={SoftSkillsTraining}/>
               <Route path="/details/2" component={CareerCounselling}/>
               <Route path="/details/3" component={CounsellingandPsychotherapy}/>
               <Route path="/details/4" component={BachFlower}/>
               <Route path="/details/5" component={Graphology}/>
               <Route path="/details/6" component={LifeCoaching}/>
               <Route path="/placeOrder" component={PlaceOrder}/>
               <Route path='/viewBooking' component={ViewOrder}/>
               <Footer/>
          </BrowserRouter>
     )
}

export default Routing;