import React from 'react'
import "./end.css"
import { CiHeart } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoBehance } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";


const End = () => {
  return (
    <div className='end'>
        <p style={{color:"grey"}}>Copyright ©2024 All rights reserved | This template is made with <span><CiHeart/></span>by <span>Colorlib</span> </p>

        <div className='icons'>
        <FaTwitter />
        <FaFacebookF />
        <BiLogoBehance />
        <FaGlobe />
        </div>
    </div>
  )
}

export default End