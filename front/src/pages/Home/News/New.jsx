import React from 'react'
import "./new.css"
const New = () => {
  return (
    <div className='boxes'>
        <div className='img'></div>
        <div>
            <h1 style={{fontSize:"30px",textAlign:"center" ,marginTop:"100px"}}>Get Our<br/>Latest Offers News</h1>
            <h3 style={{color:"grey",textAlign:"center",fontWeight:"400"}}>Subscribe news latter</h3>
        </div>
        <div>
            <input className='emailinp' type='text' placeholder='Your email here'/>
            <button className='shopbtn' >Shop Now</button>
        </div>

    </div>
  )
}

export default New