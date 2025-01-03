import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Jim Morrison Says when the music’s over, turn off the light',
      category: 'Web Development',
      date: '23 Dec',
      image: '/bl2.jpg',
    },
    {
      title: 'How to be appreciated for your hard work as a developer',
      category: 'Branding',
      date: '23 Dec',
      image: '/bl3.webp',
    },
    {
      title: 'How designers and developers can collaborate better',
      category: 'Social Media',
      date: '23 Dec',
      image: '/bl3.jpg',
    },
  ];

  return (
    <div className="bg-gray-50 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">From My Blog</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Recent Updates, Blog, Tips, Tricks & More
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-medium text-orange-500 uppercase">{post.category}</span>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-purple-500 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white">Subscribe Now</h3>
          <p className="mt-2 text-gray-100">Get the latest news, updates, tips, and tricks in your inbox</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center">
            <input
              type="email"
              placeholder="Your email here"
              className="w-full sm:w-2/3 px-4 py-3 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-b-none font-bold hover:bg-orange-600 focus:outline-none">
              Send Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

