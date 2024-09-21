import { useState } from "react";
const AddAdult=() =>{

    const [traveller,setTraveller]=useState([{
        option:'',
        title:'',
        firstName:'',
        lastName:'',
        gender:'',
         meal:'',
         birthOFDate:''
    }])

    return (
        <>
    <div className="mb-3">

    <div className="form-check me-3  ">
        <input className="form-check-input me-2" type="radio" name="option" id="g1" value="Adult" checked={traveller.option=="Adult"} required
        onChange={e=>setTraveller({...traveller,option:e.target.value})}/>
        <label className="form-check-label me-2" htmlFor="o1" >ADULT</label>
        
    </div>
    <div className="form-check me-3">
        <input className="form-check-input me-2" type="radio" name="option" id="g2" value="Child" checked={traveller.option=="Child"}
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
    </div>
    </>
    );
}
export default AddAdult; 




