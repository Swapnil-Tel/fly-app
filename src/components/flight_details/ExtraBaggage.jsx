import React, { useState } from 'react';
import bag from "../../assets/bag.jpeg"



const ExtraBaggage = ({ count, setCount, setBagprice }) => {

  const badd = () => {
      setCount((addCount) => {
      const newCount = addCount + 1;
      setBagprice(newCount * 400);
      return newCount;
      });
  };
  
  const bsub = () => {
      setCount((addCount) => {
      if (addCount > 0) {
          const newCount = addCount - 1;
          setBagprice(newCount * 400);
          return newCount;
      }
      return addCount;
      });
  };


  return (
    
    <><div style={{display:'flex', justifyContent:'space-evenly'}}>
    <div className='d-flex flex-coloum gap-2 btn btn-white mt-1 p-2 h-20 w-20'>
      <img src={bag} style={{width:'100', height:'100'}} />
    </div>
    
    <div className='d-flex flex-coloum gap-2'>
    <div className="btn btn-white border border-outline-white mt-5 mb-5 p-2 h-5 w-15 " style={{display:'flex', justifyContent:'normal'}}>
      
      
  
   <div className='btn btn-outline-light' style={{border:0}}>  <button className='btn btn-primary' onClick={badd}>+</button></div>&nbsp;
   <div className='btn btn-outline-light' >
     <p className='btn btn-primary ' style={{fontSize:18,}}  >{count} KG</p></div><div className='btn btn-outline-light'>
    <button className='btn btn-primary' onClick={bsub}>-</button></div>
  
    </div>
    </div>
    <div className='d-flex flex-coloum gap-4 tn btn-light mt-3 p-5 h-5 w-5'> <span className='btn btn-secondary ' style={{fontSize:16,}} >TOTAL
        &nbsp;<span className='btn btn-danger'>{count}</span> KG EXTRA BAGGAGE PRICE <span className='btn btn-danger'>&#8377;{count*400}</span> 
        </span>
      </div>
    </div>
    </>
  );
};
export default ExtraBaggage;
