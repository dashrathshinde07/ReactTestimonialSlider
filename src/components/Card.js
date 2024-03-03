import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// Functional component for rendering a testimonial card
export const Card = (props) => {
    // Destructuring props to get the review object
    let review = props.review;

    return (
        <div className='flex flex-col md:relative'>
            {/* Absolute positioning for the image */}
            <div className='absolute top-[-7rem] z-10 mx-auto'>
                {/* Displaying the reviewer's image */}
                <img className='aspect-square rounded-full w-[140px] h-140px z-25' src={review.image} alt="Reviewer"></img>
                {/* Background circle behind the image */}
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-20] left-[10px]'></div>
            </div>
            {/* Displaying reviewer's name and job */}
            <div className='text-center mt-7'>
                <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
            </div>

            {/* Left quote icon */}
            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft/>
            </div>

            {/* Displaying the testimonial text */}
            <div className='text-center mt-4 text-slate-500'>
                {review.text}
            </div>

            {/* Right quote icon */}
            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight/>
            </div>
        </div>
    );
};
