import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'SEO',
    price: '$149',
    description:
      'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.',
    icon: '🎨', // Replace with an appropriate icon or image
  },
  {
    title: 'DEVELOPED WEBSITE',
    price: '$200',
    description:
      'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.',
    icon: '🖌️',
  },
  {
    title: 'UI/UX Design',
    price: '$299',
    description:
      'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.',
    icon: '💡',
  },
  {
    title: 'Web Design',
    price: '$399',
    description:
      'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development.',
    icon: '💻',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50 mt-20 ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Services</h2>
        <p className="mt-4 text-gray-600">
          Most common methods for designing websites that work well on desktop is
          responsive and adaptive design.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 mb-4 text-orange-500 text-2xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-orange-500 font-bold mt-2">Starts from {service.price}</p>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      // testimonal sec 

      <section className="bg-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-orange-500 text-lg font-semibold uppercase">Testimonials</h2>
        <h3 className="text-3xl font-bold mt-2 mb-4 text-black">What My Clients Say</h3>
        <p className="text-gray-600 mb-8">
          Most common methods for designing websites that work well on desktop is responsive and adaptive design
        </p>
        <div className="relative bg-gray-50 shadow-md rounded-lg p-8">
          <div className="text-orange-500 text-6xl mb-4">&ldquo;</div>
          <p className="text-gray-700 italic text-lg mb-6">
            I rarely like to write reviews, but the Marketify team truly deserve a standing ovation for their customer support, 
            customisation and most importantly, friendliness and professionalism. Many thanks once again for everything and hope 
            that I get to deal with you again in the near future.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/men1.jpeg" // Replace with actual path to the image
              alt="Mike Anderson"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h4 className="font-bold">Mike Anderson</h4>
              <p className="text-gray-500 text-sm">Vivaco Studio</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          <button className="w-4 h-4 bg-orange-500 rounded-full"></button>
          <button className="w-4 h-4 bg-gray-300 rounded-full"></button>
          <button className="w-4 h-4 bg-gray-300 rounded-full"></button>
        </div>
      </div>

    

    
    </section>

    </section>
    
    
  );
};

export default ServicesSection;