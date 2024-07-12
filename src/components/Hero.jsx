import React, { useState, useEffect } from 'react';
import ford from "../assets/Ford-Mustang.png";
import chevelle from "../assets/details/muscle/LS6 Chevelle/black.png";
import bentley from "../assets/details/convertible/Bentley Continental/main.png";
import { Link } from 'react-router-dom';

const cars = [
    {
      id: 1,
      name: 'Ford Mustang',
      image: ford,
      description: "Experience the epitome of power and luxury with the Ford Mustang. This iconic muscle car combines high performance with a sleek design, making it the perfect choice for those who demand the best. Whether you're cruising down the highway or making a statement in the city, the Mustang's sophisticated style and unmatched performance will turn heads wherever you go",
    },
    {
      id: 2,
      name: 'LS6 Chevelle',
      image: chevelle,
      description: "Experience the raw power and classic appeal of the LS6 Chevelle. This legendary muscle car embodies the spirit of the golden era of American automotive engineering, delivering unparalleled performance and a timeless design. Whether you're tearing up the track or enjoying a leisurely drive through town, the LS6 Chevelle's robust engine and iconic styling will captivate enthusiasts and onlookers alike. Elevate your driving experience with the perfect blend of power, heritage, and pure automotive excellence.",
    },
    {
      id: 3,
      name: 'Bentley Continental',
      image: bentley,
      description: "Indulge in the ultimate luxury and performance with the Bentley Continental. This exquisite grand tourer combines exceptional craftsmanship with cutting-edge technology, offering an unrivaled driving experience. Glide effortlessly along the open road or navigate city streets with grace, as the Continental's opulent interior and powerful engine ensure a ride that is both serene and exhilarating. Command attention and embrace sophistication with a car that epitomizes elegance and supreme comfort.",
    },
];

const Hero = () => {
  const [currentCar, setCurrentCar] = useState(0);
  const [bgColor, setBgColor] = useState('linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%)');

  useEffect(() => {
    const colors = [
      'linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%)',
      'bg-black',
      'bg-white'
    ];
    if (currentCar < colors.length) {
      setBgColor(colors[currentCar]);
    }
  }, [currentCar]);

  return (
    <header className="bg-gray-100  h-screen w-full flex flex-col lg:flex-row items-center relative">
    <div
      className={`hidden lg:block lg:w-[600px] lg:h-[140px] absolute lg:right-[90px] lg:top-[200px] rounded-[20px] ${
        bgColor === 'bg-black' ? 'bg-black' : bgColor === 'bg-white' ? 'bg-[#c16621]' : ''
      }`}
      style={bgColor.includes('linear-gradient') ? { background: bgColor } : {}}
    ></div>

    {/* Container Text */}
    <div className="w-full lg:w-[600px] m-auto h-auto text-center lg:text-left p-4 lg:p-0">
      <h1 className="text-[2rem] lg:text-[3rem] font-semibold mb-4">
        Experience Excellence on <br /> the <span className="text-[#DC3545] font-bold">Road</span>
      </h1>
      <p className="text-[1rem] leading-[2] text-gray-700 mb-6 font-semibold">
        {cars[currentCar].description}
      </p>
      <div className="flex justify-center lg:justify-start">
   <Link to="/cars"><button 
        className="hover:bg-[#DC3545] bg-black w-[150px] h-[40px] rounded-[20px] text-white text-[1.2rem] lg:m-auto font-bold">
          Hit the Road
        </button></Link>
      </div>
    </div>

    {/* Container Image */}
    <div className="w-full lg:w-[50vw] flex justify-center lg:justify-end">
      <img src={cars[currentCar].image} alt={cars[currentCar].name} className="drop-shadow-2xl object-cover lg:w-full lg:h-full max-h-[80vh]" />
    </div>
    <div className="absolute bottom-[-100px] overflow-hidden lg:bottom-[100px] left-0 right-0 ml-auto mr-auto text-center flex justify-center">
      {cars.map((car, index) => (
        <button
          key={car.id}
          className={`h-4 w-4 rounded-full mx-2 ${currentCar === index ? 'bg-black' : 'bg-white drop-shadow-xl'}`}
          onClick={() => setCurrentCar(index)}
        />
      ))}
    </div>
  </header>
  );
}

export default Hero;