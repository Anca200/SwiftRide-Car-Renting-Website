import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
   <div className='w-full h-[100px] bg-gray-300 text-gray-800 text-center items-center flex flex-col justify-center'>

    <div className="text-black text-2xl font-bold text-center  mb-[10px]">
          Swift<span className='text-[#DC3545]'>Ride</span>
        </div>
    <p className='font-semibold'>2024 All Rights Reserved</p>
 </div>

  )
}

export default Footer