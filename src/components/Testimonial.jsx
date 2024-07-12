import React, { useState } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Person1 from "../assets/Person1.jpg"
import Person2 from "../assets/Person2.jpg"
import Person3 from "../assets/Person3.jpg"
import Person4 from "../assets/Person4.jpg"
import Person5 from "../assets/Person5.jpg"
import Person6 from "../assets/Person6.jpg"

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Great service, highly recommended!',
    image: Person1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'I would definitely rent from them again!',
    image: Person5,
  },
  {
    id: 3,
    name: 'Sam Wilson',
    review: 'A seamless experience from start to finish.',
    image:  Person3
  },
  {
    id: 4,
    name: 'Alice Johnson',
    review: 'High-quality vehicles at affordable prices.',
    image:  Person4
  },
  {
    id: 5,
    name: 'Michael Brown',
    review: 'Amazing cars and excellent customer support.',
    image: Person2,
  },
  {
    id: 6,
    name: 'Emily Davis',
    review: 'Quick and easy rental process.',
    image: Person6,
  },
];

const Testimonial = ({ name, review, image }) => (
  <div className="flex flex-col items-center p-4 bg-white lg:h-[300px] lg:w-[350px] rounded-lg shadow-lg transition-transform duration-500 transform ">
    <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4 object-cover" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800 lg:mb-[1rem]">{name}</h3>
    <p className="text-gray-800 text-center mb-4 lg:mb-[2rem]">{review}</p>
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 === testimonials.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-8 relative lg:mt-[100px] ">
 <h2 className="mb-12 text-4xl font-bold  text-center sm:text-5xl text-gray-800">What Our Renters Are  Saying</h2>
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevTestimonials}
          className="absolute top-[-50px] right-16 p-2 bg-[#DC3545] text-white rounded-full hover:bg-black focus:outline-none"
        >
          <FaArrowLeft />
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 transition-transform duration-500 transform ">
          {testimonials.slice(currentIndex, currentIndex + (window.innerWidth < 768 ? 1 : 3)).map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>
        <button
          onClick={nextTestimonials}
          className="absolute top-[-50px] right-4 p-2 bg-[#DC3545] text-white rounded-full hover:bg-black focus:outline-none"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;