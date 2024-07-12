import React from 'react';
import Video from '../components/Video';
import Faq from "../components/Faq";

const Contact = () => {
  return (
<>
<div className="relative w-full h-screen">
   <Video/>
      
      {/* Form Container */}
      <div className="absolute w-[95%] lg:w-[500px] left-0 right-0 ml-auto mr-auto top-[-200px] text-black">
        <div className="absolute top-[300px] bg-gradient-to-r from-gray-200 to-gray-500 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-black lg:text-[2rem]">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input className="w-full px-3 py-2 border  border-black rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[black] bg-transparent" type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input className="w-full px-3 py-2 border border-black  rounded-lg text-black bg-transparent focus:outline-none focus:ring-2 focus:ring-[black]" type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="phone">Phone Number</label>
              <input className="w-full px-3 py-2 border border-black  rounded-lg text-black bg-transparent focus:outline-none focus:ring-2 focus:ring-[black]" type="tel" id="phone" placeholder="Your Phone Number" />
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 border  border-black rounded-lg text-black bg-transparent focus:outline-none  focus:ring-2 focus:ring-[black]" id="message" placeholder="Your Message" rows="4"></textarea>
            </div>
            <div className="text-center">
              <button className="bg-black hover:bg-[#DC3545] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[black] focus:ring-opacity-50" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Faq/>
</>
  )
}

export default Contact