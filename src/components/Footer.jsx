import React from 'react'
import FooterData from '../database/FooterData'



const Footer = () => {
return (

    <div className='text-bg-primary' style={{background:"blue", color:"white"}}> 
        <div style={{display:'flex', alignItems:'center',justifyContent:'space-around',textAlign:'center' }}>
            {
                FooterData.map((item) => { 
                return(
                    <div key={item.id}>
                      <div>
                        <a href={item.path} style={{color:'white',textDecoration:'none'}} >{item.title}</a>
                         </div> 
                         </div>
                )
            })
        }
        </div>
        
    </div>
)

      


}
export default Footer;