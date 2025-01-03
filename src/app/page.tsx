"use client"; // Import the necessary modules and components
import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-white to-gray-100 text-black mt-20 ">
    
      {/* Hero Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, I’m <span className="text-orange-600">Muhammad Hasnain</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-green-600 font-semibold mb-4">
            learning Ai Artificial Intelligence Web3.0 from {" "}
            <span className="text-blue-600">Pakistan</span>
          </h2>
          <p className="text-gray-700 mb-6">
            I’m a Web Developer based in Pakistan, and I’m very passionate
            and dedicated to my work.
          </p>
          <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition mb-4 md:mb-0">
            <a href="/about">About Me</a>
          </button>
          <div className="flex justify-center md:justify-start gap-4 text-gray-600">
            <a href="#" className="hover:text-black transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-black transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-black transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-black transition">
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative flex-1 flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/6117.jpg" // Replace with your image path
              alt="James Smith"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg border-4 border-white"
            />
            <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <Image
                src="/typescript.png" // Replace with AI logo path
                alt="AI Logo"
                width={40}
                height={40}
              />
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <Image
                src="/photo.png" // Replace with Figma logo path
                alt="Figma Logo"
                width={40}
                height={40}
              />
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <Image
                src="/figma.png" // Replace with Photoshop logo path
                alt="Photoshop Logo"
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full">
                <Image
                  src="/target.png" // Replace with your actual path
                  alt="Pixel Perfect Icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Pixel Perfect
            </h3>
            <p className="text-gray-600">
              Most common methods for designing websites that work well on
desktop is responsive and adaptive design.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
                <Image
                  src="/brush.png" // Replace with your actual path
                  alt="High Quality Icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              High Quality
            </h3>
            <p className="text-gray-600">
              Most common methods for designing websites that work well on
desktop is responsive and adaptive design.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full">
                <Image
                  src="/creative.png" // Replace with your actual path
                  alt="Awesome Idea Icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Awesome Idea
            </h3>
            <p className="text-gray-600">
              Most common methods for designing websites that work well on
desktop is responsive and adaptive design.
            </p>
          </div>
        </div>
      </div>
    </section>

    </section>
  );
}
