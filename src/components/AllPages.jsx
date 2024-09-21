import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";

import Home from "./Home";
import ExclusiveOffer from "./ExclusiveOffer";
import TravelAndStories from "./TravelAndStories";
import Privacy from "./Privacy";


const AllPages = () =>
{
    return(
        <div style={{background:'white', height:606 ,color:'brown'}}>
            <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/offers" element={<ExclusiveOffer/>}/>
<Route path="/travel" element={<TravelAndStories/>}/>
<Route path="/privacy" element={<Privacy/>}/>
                
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default AllPages;