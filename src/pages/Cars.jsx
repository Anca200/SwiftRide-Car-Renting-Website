import React from 'react';
import CarCarousel from '../components/CarCarousel';  // Adjust the import path if needed
import cars from '../assets/data/data';
import Video from '../components/Video';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Video />
      {Object.keys(cars).map((type) => (
        <CarCarousel key={type} category={type} />
      ))}
    </div>
  );
};

export default App;