import React,{useState} from 'react';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
<>
<nav className="bg-gray-100  p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">
          Swift<span className='text-[#DC3545]'>Ride</span>
        </div>
        <div className="hidden md:flex space-x-4 text-[1.2rem] font-semibold">
          <Link to="/" className="text-black hover:text-[#DC3545]">Home</Link>
          <Link to="/cars" className="text-black hover:text-[#DC3545]">Cars</Link>
          <Link to="/contact" className="text-black hover:text-[#DC3545]">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <IoMdClose size={25} className='text-red-500' /> : <FiMenu size={25}  className='text-red-500'/>}
          </button>
        </div>
      </div>
      <div className={`md:hidden mt-2 text-black text-center font-semibold text-[1.2rem] ease-in-out duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <Link to="/" className="block py-2">Home</Link>
        <Link to="/cars" className="block py-2">Cars</Link>
        <Link to="/contact" className="block py-2">Contact</Link>
      </div>
    </nav>
    <Outlet/>
</>
  )
}

export default Navbar