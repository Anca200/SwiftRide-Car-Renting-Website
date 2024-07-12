import React from 'react';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import Section1 from "../components/Section1";
import Testimonials from '../components/Testimonial';
import Faq from '../components/Faq';
import Video from '../components/Video';
import CarCarousel from '../components/CarCarousel';





const Home = () => {
  return (
   <>
   <Hero/>
   <Video/>
   <Logos/>
   <Section1/>
    <div>
      <h2 className='  text-[2.5rem]  text-center font-bold  text-gray-800 bg-gray-100'>Find Your Dream Car</h2>
    <CarCarousel isRandom={true} />
    </div>
   <Testimonials/>
   <Faq/>

   </>
  )
}

export default Home