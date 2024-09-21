import Coupon from "../../database/coupon";
import { useState } from "react";
const BookingTotal =({adults ,count ,bagprice,price})=>{
   
   
    

    //event handler to handle form save event
    const [isSubmitted,setIsSubmitted] = useState(false)
    const [ccode ,setCcode]=useState(" ")
    const [off ,setOff]=useState(0)
    const apply = e=> {
        e.preventDefault();
        console.log(ccode)
        setIsSubmitted(true)
        const check = Coupon.find((abc) => abc.code == ccode)
        setOff(check.price)
        alert("coupoon code applied sucessfully " ,check.price)
    
        
    }
    const change=e=>{
        setIsSubmitted(false)
        setCcode(e.target.value)
       
     


    }

     
return(
    //have to pass price from FLIGHT details component
    <>
    <h4>Booking Person {adults +1 } * price </h4> 
    <h4>Extra Baggage {count} kg  price is {bagprice}</h4>
    <h4> total amount = { (adults+1)*10000 +bagprice -off } </h4>
    <form onSubmit={apply}> <div className="mb-3">
<label>coupon code </label>
            <input className="form-control" type="text" placeholder="coupon code" value={ccode}
            onChange={change}/>
        </div>
          <button className="btn btn-outline-primary me-2" type="submit">apply</button>
    </form>
    
   

    </>
    
)
}
export default BookingTotal;