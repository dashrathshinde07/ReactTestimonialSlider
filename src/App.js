import React from "react";
import { Testimonials } from "./components/Testimonials"; // Importing the Testimonials component
import reviews from "./data"; // Importing the reviews data

// Functional component for the main App
const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        {/* Separator */}
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        
        {/* Render the Testimonials component and pass the reviews data */}
        <Testimonials reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
