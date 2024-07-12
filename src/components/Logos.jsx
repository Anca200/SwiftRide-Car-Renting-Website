import React from 'react';
import bently from "../assets/bently.png";
import bmw from "../assets/bmw.png";
import ford from "../assets/ford.png";
import mercedes from "../assets/mercedes.png";
import porche from "../assets/porche.png";
import tesla from "../assets/tesla_logo.png";


const Logos = () => {
  return (
<>
<div className='w-full bg-gray-100 h-auto flex justify-center items-center overflow-hidden'>
  <div className='w-full max-w-5xl  mt-[100px] lg:mt-[50px] mb-[100px] h-auto grid grid-cols-3 lg:grid-cols-6 items-center justify-items-center grayscale'>
    <img src={bently} className='w-[150px] max-w-full'/>
    <img src={bmw} className='w-[110px] max-w-full'/>
    <img src={ford} className='w-[180px] max-w-full'/>
    <img src={mercedes} className='w-[100px] max-w-full'/>
    <img src={porche} className='w-[60px] max-w-full'/>
    <img src={tesla} className='w-[80px] max-w-full'/>
  </div>
</div>
</>
  )
}

export default Logos