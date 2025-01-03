import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav className="absolute top-0 left-0 w-full py-4 px-8 flex justify-between items-center bg-transparent">
 <div className="text-2xl font-bold text-orange-600"><a href="/"> it'sHasnain </a></div> 
 <ul className="flex gap-6 text-sm md:text-base">
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
 <button className="px-4 py-2 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-600 hover:text-white transition">
   Download CV
 </button>
</nav>
    </div>
  )
}
