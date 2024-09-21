import {useState} from "react";
import AddAdult from "./AddAdult";
import { Alert } from "bootstrap";
import ExtraBaggage from "./ExtraBaggage";
import BookingTotal from "./BookingTotal";
//import { MdFlight } from "react-icons/md";



const TravellerDetails = ()=>
{
    //save traveller details
    const [traveller,setTraveller]=useState({
        option:'',
        title:'',
        firstName:'',
        lastName:'',
        gender:'',
         meal:'',
         birthOFDate:''
    })

//save contact details
const [contact,setContact]=useState({

    emailId:'',
    phoneNo:''
})

// geting values from extra ExtraBaggage
   
  
const [count, setCount] = useState(0);
const [bagprice, setBagprice] = useState(0);




   // adding and removing adults/child

    const [divs, setDivs] = useState([]);

    const Addnew =() =>{

        setDivs([...divs, <AddAdult/>]);
    }

    const DeleteDiv = (index) => {
       
        const updatedDivs = divs.filter((_, i) => i !== index);
        setDivs(updatedDivs);
      };





//variable usestate
    const [isSubmitted,setIsSubmitted] = useState(false)

//event handler to handle form save event
const handleSubmit = e=> {
    e.preventDefault();
    alert("Traveller details saved")
    setIsSubmitted(true)
    console.log("saved:", traveller);
   

}
const handleContact = e=> {
    e.preventDefault();
    setIsSubmitted(true) 
    console.log("saved:",contact);

}

return(<>

<div className="container border border-primary rounded p-2 mt-2 w-55 text-bg-primary">
    
    <h4 className="text-left">&nbsp;&nbsp;&nbsp;  FLIGHT DETAILS</h4>
</div>
   <div className="container border border-primary rounded p-3 mt-1 w-55 text-bg-light"></div>
        {/* {!isSubmitted && */} <div className="container border border-primary rounded p-2 mt-4 w-55 text-bg-primary">  
    
           <h4 className="text-LEFT">&nbsp;&nbsp;&nbsp;TRAVELLER DETAILS</h4>
    </div>
<div className="container border border-primary rounded p-3 mt-1 w-55 text-bg-light">


    <form onSubmit={handleSubmit}>

     <div className="mb-3">


<div className="form-check me-3  ">
    <input className="form-check-input me-2" type="radio" name="option" id="o1" value="Adult" checked={traveller.option=="Adult"} required
    onChange={e=>setTraveller({...traveller,option:e.target.value})}/>
    <label className="form-check-label me-2" htmlFor="o1" >ADULT</label>
    
</div>
<div className="form-check me-3">
    <input className="form-check-input me-2" type="radio" name="option" id="o2" value="Child" checked={traveller.option=="Child"}
    onChange={e=>setTraveller({...traveller,option:e.target.value})}/>
    <label className="form-check-label me-2" htmlFor="o2" >CHILD</label>
</div>
</div> 


    <div className="mb-3">
<label className="form-label" htmlFor="ti">TITLE </label>
<select className="form-select" id="ti" 
value={traveller.title}
onChange={e=>setTraveller({...traveller,title:e.target.value})}>
<option>Mr</option>
<option>Mrs</option>
<option>Ms</option>
<option>Miss</option>
<option>Dr</option>
<option>Prof</option>
</select>
</div>

<div className="mb-3">
<label>FIRST/MIDDLE NAME </label>
            <input className="form-control" type="text" placeholder="FIRST NAME" value={traveller.firstName}
            onChange={e=>setTraveller({...traveller,firstName:e.target.value})} required/>
        </div>
        <div className="mb-3">
<label>LAST NAME </label>
            <input className="form-control" type="text" placeholder="LAST NAME" value={traveller.lastName}
            onChange={e=>setTraveller({...traveller,lastName:e.target.value})} required/>
        </div>




<div className="mb-3">
<label>SELECT GENDER</label>
<div style={{display:'flex'}}>
<div className="form-check me-3  ">
    <input className="form-check-input me-2" type="radio" name="gender" id="g1" value="Male" checked={traveller.gender=="Male"} required
    onChange={e=>setTraveller({...traveller,gender:e.target.value})}/>
    <label className="form-check-label me-2" htmlFor="g1" >Male</label>
    
</div>
<div className="form-check me-3">
    <input className="form-check-input me-2" type="radio" name="gender" id="g2" value="Female" checked={traveller.gender=="Female"}
    onChange={e=>setTraveller({...traveller,gender:e.target.value})}/>
    <label className="form-check-label me-2" htmlFor="g2" >Female</label>
</div>
</div>

<div className="mb-3">
                    <label >BIRTH OF DATE:</label>
                    <input className="form-control" type="date" id="bod" name="birthOfDate" checked={traveller.birthOFDate} required 
                    onChange={e=>setTraveller({...traveller,birthOFDate:e.target.value})}/>
                </div>


<div className="mb-3">
<label className="form-label" htmlFor="me">MEAL PREFERENCE </label>
<select className="form-select" id="me" 
value={traveller.meal}
onChange={e=>setTraveller({...traveller,meal:e.target.value})}>
<option>Hindu meal</option>
<option>Asian veg meal</option>
</select>

</div>
      
      

    
     

      

     {/* button */}
     <div >
        <button className="text-bg-primary" onClick={Addnew}> ADD ADULT/CHILD </button>
       
     </div>

        {divs.map((divContent, index) => (
            <div key={index} style={{ marginTop: '10px', padding: '10px', border: '1px solid black' }}>
              {divContent}
              <button className="btn btn-danger"
                onClick={() => DeleteDiv(index)} 
                style={{ marginLeft: '10px' }}>
                DELETE
              </button>
            </div>
          ))}
       

 </div> 



        <div className="text-center">
            <button className="btn btn-outline-primary me-2" type="submit">SAVE</button>
            <button className="btn btn-outline-primary me-2" type="reset"
            onClick={()=>setTraveller({
                option:'',
                title:'',
                firstName:'',
                lastName:'',
                gender:'',
                birthOFDate:''
              
            })}>RESET</button>
        </div>
    </form>
</div>
<div className="container border border-primary rounded p-2 mt-4 w-55 text-bg-primary">
    <h4 className="text-left">ADD EXTRA BAGGAGES</h4>
</div>
<div className="container border border-primary rounded p-2 mt-1 w-55 text-bg-light">
    <ExtraBaggage count={count} setCount={setCount} setBagprice={setBagprice} />

</div>


<div className="container border border-primary rounded p-2 mt-4 w-55 text-bg-primary">
    <h4 className="text-left">CONTACT DETAILS</h4>
</div>
<form onSubmit={handleContact}>
<div className="container border border-primary rounded p-2 mt-1 w-55 text-bg-light">
<div className="mb-3">
    
<label className="form-label me-3">EMAIL ADDRESS</label>
    <input className="form-control" type="email" placeholder="Person@example.com"
    value={contact.emailId}
    onChange={e=>setContact({...contact,emailId:e.target.value})} required/>
    &nbsp;&nbsp;&nbsp;&nbsp;
   <p className="text-bg-success" style={{ display:"inline-block"}}>(Your ticket will be send on this email address)</p>


</div> 

<div className="mb-3">
<label className="form-label me-3">MOBILE NO.</label>
    <input className="form-control" type="tel" placeholder=" + 91 -0000000000" value={contact.phoneNo}
    onChange={e=>setContact({...contact,phoneNo:e.target.value})}
    pattern="[0-9]{10}" maxLength={10} required/>

</div>
<div className="text-center">
<button className="btn btn-outline-primary me-2" type="submit">SAVE</button>
</div>

</div>
</form>
<div className="container border border-primary rounded p-2 mt-4 w-55 text-bg-primary">
    <h4 className="text-left">BOOKING TOTAL</h4>
</div>
     
<div className="container border border-primary rounded p-2 mt-1 w-55 text-bg-light">
   <BookingTotal adults ={divs.length} count={count} bagprice={bagprice}/>


</div>

        

{/*{ isSubmitted && <ProfileDetails traveller={traveller} submitted={setIsSubmitted}/>
   } */}

</>


)
}
export default TravellerDetails;
