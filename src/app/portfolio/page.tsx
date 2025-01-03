
"use client";
import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const portfolioItems = [ 
    { id: 1, category: "Youtube", src: "/download.webp"  },
    { id: 2, category: "Vimeo", src: "/download1.webp" },
    { id: 3, category: "Soundcloud", src: "/download3.jpg" },
    { id: 4, category: "Popup", src: "/download4.jpg" },
    { id: 6, category: "Youtube", src: "/download5.png"},
  ];

  const filters = ["All", "Youtube", "Vimeo", "Soundcloud", "Popup", "Detail"];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-12 px-6 ">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-orange-500 font-bold text-8xl my-16">Portfolio</h2>
        <h3 className="text-4xl font-semibold mb-8">My Amazing Works</h3>
        <p className="text-gray-600 max-w-xl mx-auto">
          Most common methods for designing websites that work well on desktop is
          responsive and adaptive design.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center space-x-4 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`${
              activeFilter === filter
                ? "text-orange-500 font-semibold"
                : "text-gray-600"
            } px-4 py-2 hover:text-orange-500 transition`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <Image
              src={item.src}
              alt={`Portfolio item ${item.id}`}
              width={500}
              height={500}
              className="object-cover w-[450px] h-[500px] mb-10  "
            />
          </div>
        ))}
      </div>

      <section className="flex flex-col md:flex-row items-center justify-center py-12 px-6 bg-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-orange-500 font-semibold mb-2">Design is Life</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black ">
          I Develop Skills Regularly to Keep Me Update
        </h2>
        <p className="text-gray-600 mb-8">
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design.
        </p>

        {/* Skill Bars */}
        <div className="mb-6">
          <p className="font-medium text-gray-800 mb-2"> full stact </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-orange-500 h-2.5 rounded-full"
              style={{ width: "61%" }}
            ></div>
          </div>
        </div>

        <div className="mb-6">
          <p className="font-medium text-gray-800 mb-2">python + Typescript </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: "95%" }}
            ></div>
          </div>
        </div>

        <div className="mb-6">
          <p className="font-medium text-gray-800 mb-2">Figma + c++ </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-purple-500 h-2.5 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <Image
            src="/path-to-your-image.jpg" // Replace with your image path
            alt="Skill Development"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
    </section>
  );
}
