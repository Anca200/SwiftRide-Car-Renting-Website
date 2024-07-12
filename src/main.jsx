import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Cars from './pages/Cars.jsx';
import CarDetail from "./pages/CarDetail.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from './components/Footer.jsx';

const router = createBrowserRouter([
  {
    element: <Navbar/>,

    children: [{
     path:'/',
     element: <Home/>
    },
    {
   path: "/cars",
   element: <Cars/>
    },
    {
      path: '/cars/:carsId',
      element: <CarDetail />  
    },
    {
      path: '/contact',
      element: <Contact/>
    }
  ]
  },
  {
    element: <Footer/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
<Footer/>
  </React.StrictMode>,
)
