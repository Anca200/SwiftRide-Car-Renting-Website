import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cars from '../assets/data/data';
import { FaGasPump } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import useWindowDimensions from '../hook/WindowDimensions';
import { useNavigate } from 'react-router-dom';
import { GiCheckeredFlag } from "react-icons/gi";

const CarCarousel = ({ category, isRandom }) => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;
  const [selectedCategory, setSelectedCategory] = useState(category);

  useEffect(() => {
    if (isRandom) {
      const categories = Object.keys(cars);
      const randomIndex = Math.floor(Math.random() * categories.length);
      setSelectedCategory(categories[randomIndex]);
    }
  }, [isRandom]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!selectedCategory || !cars[selectedCategory]) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full bg-gray-100  overflow-hidden">
      <h2 className=" flex items-center gap-[10px] text-[2rem] font-semibold text-gray-800 mb-[80px] mt-[50px]">{selectedCategory} <GiCheckeredFlag /></h2> 
      <Carousel
       showArrows={true}
       showThumbs={false}
       infiniteLoop
       emulateTouch={false}
       centerMode
       centerSlidePercentage={isMobile ? 100 : 33.33}
       dynamicHeight={false}>
        {cars[selectedCategory].map((car) => (
          <div key={car.id} className="w-full h-[350px] flex flex-col items-center">
            <div 
            onClick={() => navigate(`/cars/${car.id}`)}
            className=' cursor-pointer bg-white drop-shadow-xl w-[300px] h-[300px] m-auto mb-[50px] rounded-[20px]'>
              <h3 className="text-lg font-bold mt-2 text-gray-800">{car.name}</h3>
              <div className='w-[280px] m-auto'>
                <img src={car.image} alt={car.name} className='h-[130px] object-cover ' />
              </div>
              <div className='flex justify-center gap-[20px] mt-[10px] text-gray-500 '>
                <p className='flex items-center gap-[5px]'><FaGasPump />{car.gas}</p>
                <p className='flex items-center gap-[5px]'><TbManualGearbox />{car.type}</p>
                <p className='flex items-center gap-[5px]'><IoPeople />{car.people}</p>
              </div>
              <div className='flex justify-center mt-[30px] gap-[20px] items-center'>
                <p className='text-[1.5rem]'>{car.price}/<span className='text-[1rem] text-gray-500'>day</span></p>
                <button
                  className='bg-black/90 hover:bg-[#DC3545] text-white w-[100px] h-[40px] rounded-[10px] font-bold'
                  onClick={() => navigate(`/cars/${car.id}`)}>
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarCarousel;