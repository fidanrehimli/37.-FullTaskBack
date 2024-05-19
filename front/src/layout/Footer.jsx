import React from 'react'
import "./footer.css"
import { GoPackage } from "react-icons/go";
import { CiUnlock } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='method'>
        <GoPackage style={{fontSize:"30px"}} />
        <h2>Free Shipping Method</h2>
        <p style={{color:"grey",fontSize:"20px",marginTop:"10px"}}>aorem ixpsacdolor sit<br/>ameasecur adipisicing elitsf<br/>edasd.</p>
        </div>
        <div>
        <CiUnlock style={{fontSize:"30px"}} />
        <h2>Secure Payment System</h2>
        <p style={{color:"grey",fontSize:"20px",marginTop:"10px"}}>aorem ixpsacdolor sit<br/>ameasecur adipisicing elitsf<br/>edasd.</p>
        </div>
        <div>
        <TfiReload style={{fontSize:"30px"}} />
        <h2>Secure Payment System</h2>
        <p style={{color:"grey",fontSize:"20px",marginTop:"10px"}}>aorem ixpsacdolor sit<br/>ameasecur adipisicing elitsf<br/>edasd.</p>
        </div>
    </div>
  )
}

export default Footer