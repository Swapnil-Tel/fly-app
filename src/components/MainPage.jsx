import React from "react";
import Profile from './flight_details/TravellerDetails';
import AllPages from './AllPages'
import FooterMedia from "./FooterMedia";
import CopyRightFooter from "./CopyRightFooter";
import Footer from "./Footer";
import TravellerDetails from "./flight_details/TravellerDetails";


const MainPage =() =>{
return(
<div >
    
   <AllPages/>
  <TravellerDetails/>
<Footer/>

    <FooterMedia/>
    <CopyRightFooter/>
</div>



)



}
export default MainPage;