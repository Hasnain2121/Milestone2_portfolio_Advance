import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/NavBar';

export default function About() {
  return (
    <section className="relative bg-gray-50 py-16 md:py-32 h-auto mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        {/* Left Section: Image and Stats */}
        <div className="relative w-full max-w-lg mx-auto md:max-w-none">
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <Image
              src="/1.jpg" // Replace with your image path
              alt="Team Meeting"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
          {/* Stats */}
          <div className="absolute top-4 left-4 bg-white shadow-lg rounded-lg p-3 md:p-4">
            <p className="text-2xl sm:text-4xl font-bold text-green-600">18</p>
            <p className="text-gray-600 text-sm sm:text-base">Years of Success</p>
          </div>
          <div className="absolute bottom-4 left-4 bg-white shadow-lg rounded-lg p-3 md:p-4">
            <p className="text-2xl sm:text-4xl font-bold text-purple-600">9K</p>
            <p className="text-gray-600 text-sm sm:text-base">Total Projects</p>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="text-center md:text-left">
          <p className="text-orange-500 text-lg font-semibold mb-2">I'm a Designer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight mb-4">
            I Can Design Anything You Want
          </h2>
          <p className="text-gray-600 mb-6">
            Hello there! I'm a web developr leaning AI + Machine Learning , and I'm very passionate and dedicated
            to my work. With 20 years of experience as a professional web developer,
            I have acquired the skills and knowledge necessary to make your project a success.
            I enjoy every step of the design process, from discussion and collaboration.
          </p>
          <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}


    
