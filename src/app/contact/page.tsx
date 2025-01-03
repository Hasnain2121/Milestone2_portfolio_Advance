"use client"; 
import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 py-16 mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-orange-600">Contact Me</h2>
          <p className="mt-4 text-gray-600 text-lg">I Want To Hear From You</p>
          <p className="mt-2 text-gray-500">
            Please fill out the form on this section to contact me. Or call
            between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday.
          </p>
        </div>

        <div className="flex flex-wrap mt-12 -mx-4">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="mb-6 flex items-start">
              <div className="bg-orange-100 p-3 rounded-full">
                <i className="fas fa-map-marker-alt text-orange-500"></i>
              </div>
              <p className="ml-4 text-gray-700">
                Address: <br /> korangi karachi
              </p>
            </div>

            <div className="mb-6 flex items-start">
              <div className="bg-orange-100 p-3 rounded-full">
                <i className="fas fa-envelope text-orange-500"></i>
              </div>
              <p className="ml-4 text-gray-700">
                Email: <br /> hussnainsiyal626@gmail.com
              </p>
            </div>

            <div className="mb-6 flex items-start">
              <div className="bg-orange-100 p-3 rounded-full">
                <i className="fas fa-phone-alt text-orange-500"></i>
              </div>
              <p className="ml-4 text-gray-700">
                Phone: <br /> 03154643788
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 px-4">
            <form className="bg-white p-8 shadow-lg rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border text-black border-gray-300 p-3 rounded-md focus:outline-none focus:border-orange-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border text-black border-gray-300 p-3 rounded-md focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 mt-6">
                <input
                  type="text"
                  placeholder="Subject"
                  className="border text-black border-gray-300 p-3 rounded-md focus:outline-none focus:border-orange-500"
                />
                <textarea
                  placeholder="Write your message here"
                  className="border text-black border-gray-300 p-3 rounded-md focus:outline-none focus:border-orange-500 h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-6 bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.41941548468168!3d37.77492977975906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df90b7d1%3A0x5e00b62f6385b11f!2s20%20Somewhere%20in%20World!5e0!3m2!1sen!2sus!4v1634058352854!5m2!1sen!2sus"
            width="100%"
            height="400"
            className="border-0 rounded-lg shadow-lg"
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
