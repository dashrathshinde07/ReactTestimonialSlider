import React, { useState } from "react";
import { Card } from "./Card"; // Importing the Card component
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Importing icon components

// Functional component for rendering testimonials and navigation buttons
export const Testimonials = (props) => {
  // Destructuring props to get the reviews array
  let reviews = props.reviews;

  // State for managing the current index of the displayed review
  const [index, setIndex] = useState(0);

  // Function to handle shifting to the left
  function leftShiftHandler() {
    if (index - 1 < 0) {
      // If current index is at the beginning, loop back to the end
      setIndex(reviews.length - 1);
    } else {
      // Otherwise, decrement the index
      setIndex(index - 1);
    }
  }

  // Function to handle shifting to the right
  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      // If current index is at the end, loop back to the beginning
      setIndex(0);
    } else {
      // Otherwise, increment the index
      setIndex(index + 1);
    }
  }

  // Function to handle the "Surprise Me" button click
  function surpriseHandler() {
    // Generate a random index within the range of reviews array length
    let randomIndex = Math.floor(Math.random() * reviews.length);

    // Set the index to the randomly generated index
    setIndex(randomIndex);
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      {/* Render the Card component with the review at the current index */}
      <Card review={reviews[index]} />

      {/* Navigation buttons */}
      <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        {/* Button for shifting to the left */}
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        {/* Button for shifting to the right */}
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* "Surprise Me" button */}
      <div className="mt-6">
        <button
          onClick={surpriseHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};
