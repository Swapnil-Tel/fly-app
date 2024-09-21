import React from "react";
import MediaData from "../database/MediaData";


const FooterMedia = () =>{
return(

    <div className="text-bg-primary" style={{display:'flex', background:'blue'}}>
{
    MediaData.map((item) =>{
return(
    
    <div key={item.no}>

    <a href={item.href} target="_blank">
        <img src={item.img} alt="media" style={{height:20, display:'flex', justifyContent:'space-between'}}/>
    </a>
</div>


)

    })
}

</div>
    
)



        
    




}

export default FooterMedia;