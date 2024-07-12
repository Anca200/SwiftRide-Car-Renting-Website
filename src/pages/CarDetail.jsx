import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import cars from '../assets/data/data';
import { FaGasPump } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import CarCarousel from '../components/CarCarousel';
import Testimonials from "../components/Testimonial";

const CarDetail = () => {
  const { carsId } = useParams();
  const car = Object.values(cars).flat().find(car => car.id === Number(carsId));
  
  const [mainImage, setMainImage] = useState(car.main);  // Set initial main image

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <>
      <div className="container mx-auto p-4 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="w-full h-64 lg:w-[750px] lg:h-[400px] flex relative">
            <img src={mainImage} alt={car.name} className="object-cover  rounded-md w-[90%] h-[85%]" />
            <div className="absolute top-2 right-2 flex flex-col space-y-2 lg:mt-[100px]">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 from-10% via-yellow-400 via-30% to-red-500 to-90% cursor-pointer " onClick={() => setMainImage(car.main)}></div>
              <div className="w-4 h-4 rounded-full bg-red-500 cursor-pointer" onClick={() => setMainImage(car.red)}></div>
              <div className="w-4 h-4 rounded-full bg-black cursor-pointer" onClick={() => setMainImage(car.black)}></div>
            </div>
          </div>
          <div className="flex mt-4 justify-evenly">
            <img src={car.main} alt="Main" className="w-20 h-12 lg:w-[200px] lg:h-[100px] rounded-[20px] object-cover cursor-pointer shadow-xl hover:bg-[#e3e3e3] hover:scale-105  transition duration-500" onClick={() => setMainImage(car.main)} />
            <img src={car.red} alt="Red" className="w-20 h-12 lg:w-[200px] lg:h-[100px] rounded-[20px] object-cover cursor-pointer ml-2  shadow-xl hover:bg-[#e3e3e3] hover:scale-105  transition duration-500" onClick={() => setMainImage(car.red)} />
            <img src={car.black} alt="Black" className="w-20 h-12 lg:w-[200px] lg:h-[100px] rounded-[20px]  object-cover cursor-pointer ml-2  shadow-xl hover:bg-[#e3e3e3] hover:scale-105  transition duration-500" onClick={() => setMainImage(car.black)} />
          </div>
        </div>
        <div className="flex flex-col mt-8 lg:mt-[80px] lg:ml-[100px] lg:w-1/2">
          <h3 className="text-2xl lg:text-[2rem] font-bold mt-2 text-gray-800">{car.name}</h3>
          <p className="text-gray-600 mt-4 lg:w-[70ch] lg:leading-[2]">{car.details}</p>
          <div className="flex gap-4 mt-4 text-gray-500">
            <p className="flex items-center gap-2"><FaGasPump />{car.gas}</p>
            <p className="flex items-center gap-2"><TbManualGearbox />{car.type}</p>
            <p className="flex items-center gap-2"><IoPeople />{car.people}</p>
          </div>
          <div className='flex gap-4 lg:gap-[30px] items-center lg:mt-[30px] text-center'>
            <p className="text-xl lg:text-2xl font-bold mt-4">{car.price}/<span className='text-sm lg:text-[1rem] text-gray-500'>day</span></p>
            <button className='w-[100px] h-[40px] lg:mt-[10px] rounded-[20px] text-white bg-black hover:bg-[#DC3545] font-bold'>Rent Now</button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className='w-full lg:w-[80vw] h-64 lg:h-[600px] m-auto mt-8 lg:mt-[200px] lg:mb-[150px]'>
        <img src={car.cover} alt={car.title} className='object-cover w-full h-full rounded-[20px]'/>
      </div>

      {/* Carousel */}
      <div className="container mx-auto p-4 lg:mb-[100px]">
        <h1 className="text-2xl lg:text-[2rem] font-bold mt-2 text-gray-800 mb-4 text-center">Maybe You Also Like:</h1>
        <CarCarousel isRandom={true} />
      </div>

      {/*Testimonials*/}
      <Testimonials/>
    </>
  );
};

export default CarDetail;