"use client";
import React, { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="absolute top-0 left-0 w-full py-4 px-8 flex justify-between items-center bg-black text-white z-10">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-600">
          <a href="/"> it&apos;sHasnain </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <button className="text-orange-600 text-3xl">☰</button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row gap-6 text-sm md:text-base absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 transition-all duration-300 ${
            isOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <li className="hover:text-orange-600 transition">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-orange-600 transition">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-orange-600 transition">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="hover:text-orange-600 transition">
            <a href="/service">Service</a>
          </li>
          <li className="hover:text-orange-600 transition">
            <a href="/blog">Blog</a>
          </li>
          <li className="hover:text-orange-600 transition">
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* Download CV Button */}
        <button className="hidden md:block px-4 py-2 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-600 hover:text-white transition">
          Download CV
        </button>
      </nav>

      {/* Mobile CV Button */}
      {isOpen && (
        <div className="flex justify-center mt-4 md:hidden">
          <button className="px-4 py-2 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-600 hover:text-white transition">
            Download CV
          </button>
        </div>
      )}
    </div>
  );
}

