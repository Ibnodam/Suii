// src/pages/HomePage/RequestBlock.jsx
import React from 'react';
import img from './img.png'; // левая фотка
import shade from './lines.png';

export default function RequestBlock() {
  return (
    <div className="bg-[#1E212C] py-20 px-8 max-h-[556px]">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        {/* Левая часть: иллюстрация */}
        <div className="flex-1 flex justify-center">
          <img 
            src={img} 
            alt="SEO Analyst with chart" 
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* Правая часть: форма */}
        <div className="flex-1 max-w-lg">
          <h2 className="text-3xl font-bold text-white mb-8">Get a Free SEO Analysis!</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#2D2F3D] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7772F1] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your working email"
                  className="w-full px-4 py-3 bg-[#2D2F3D] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7772F1] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="url" className="block text-gray-300 text-sm mb-2">Your website URL</label>
              <input
                id="url"
                type="url"
                placeholder="http://yoursite.com"
                className="w-full px-4 py-3 bg-[#2D2F3D] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7772F1] focus:border-transparent"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="agree"
                type="checkbox"
                className="mt-1 w-5 h-5 cursor-pointer text-[#7772F1] bg-[#2D2F3D] border-gray-700 rounded focus:ring-[#7772F1]"
              />
              <label htmlFor="agree" className="text-gray-300 text-sm">
                I agree to receive communications from Createx SEO Agency
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#7772F1] hover:bg-[#6a65e5] text-white py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              Get a free analysis
            </button>
          </form>
        </div>

        {/* Фоновая зелёная фигура (справа от формы) */}
        <div 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 opacity-20 pointer-events-none"
          style={{ backgroundImage: `url(${shade})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center' }}
        />
      </div>
    </div>
  );
}



// export default function RequestBlock() {}