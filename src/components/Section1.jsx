import React from 'react';
import car from "../assets/Section1_Car.png";
import { FaCheckCircle } from "react-icons/fa";
import Counter from './Counter';

const Section1 = () => {
  return (
    <>
    <div className='w-full h-auto bg-gray-100 overflow-hidden'>
      <div className='flex flex-col-reverse lg:flex-row mt-[100px] mb-[100px] gap-[50px] items-center lg:items-start'>
        
        {/* Container Image */}
        <div className='flex justify-center lg:justify-start'>
          <img src={car} className='w-full lg:w-[800px] max-w-full lg:mt-[60px]' />
        </div>
        
        {/* Container Text */}
        <div className='w-[90%] lg:w-[600px] text-left p-4'>
          <h2 className='text-[2.5rem] font-bold mb-[30px] text-gray-800'>
            Explore the City without <br />
            <span className='relative before:w-[100px] before:h-[5px] before:bg-[#DC3545] before:absolute before:bottom-[-10px]'>
              Limits
            </span>
          </h2>
          <p className='text-gray-600 mb-[20px]'>
            Need to get somewhere urgently? Planning a great shopping day? Book a car to move freely around the city with comfort!
          </p>
          
          <ul className='flex flex-col gap-[10px] mb-[30px] font-semibold'>
            <li className='flex items-center gap-[10px]'>
              <FaCheckCircle className='text-[#DC3545]' /> Really Flexible Payment Plans
            </li>
            <li className='flex items-center gap-[10px]'>
              <FaCheckCircle className='text-[#DC3545]' /> Hundreds of Cars Near You
            </li>
            <li className='flex items-center gap-[10px]'>
              <FaCheckCircle className='text-[#DC3545]' /> 24/7 Support
            </li>
          </ul>
          
          <p className='text-gray-600'>
            SwiftRide is a carsharing service in the USA that can make every day of yours more comfortable and easier. You can book a car when you need to and pay only for time spent driving. No hidden fees or complicated payments!
          </p>
          <Counter/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section1