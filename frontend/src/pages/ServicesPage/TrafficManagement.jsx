// src/pages/HomePage/TrafficManagement.jsx
import React from 'react';
import dashboards from './pics/traffic/dashboards.png';
import shape from './pics/traffic/shape.png';

export default function TrafficManagement() {
  return (
    <div className="bg-white py-20 px-8">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        {/* Левая часть: текст + кнопки */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Paid Traffic Management</h2>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Tortor vitae orci hendrerit lobortis eu. Metus aliquam sem tellus ut fringilla purus nisl, consectetur netus. Velit ac feugiat ut mattis dis nullam ultrices amet. Lacus eu neque arcu arcu curabitur at sapien. Id sed aliquet id sit nibh ornare massa scelerisque.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="border border-[#7772F1] text-[#7772F1] px-6 py-3 rounded-sm hover:bg-[#7772F1] hover:text-white transition-colors duration-200 font-medium cursor-pointer">
              Learn more
            </button>
            <button className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-sm font-medium transition-colors duration-200 cursor-pointer">
              Try SEO toolkit
            </button>
          </div>
        </div>

        {/* Правая часть: дашборд + фоновая фигура */}
        <div className="relative flex-1 flex justify-center">
          {/* Фоновая фигура — больше дашборда, за ним */}
          <div 
            className="absolute -inset-12 opacity-20 pointer-events-none"
            style={{ 
              backgroundImage: `url(${shape})`, 
              backgroundSize: 'contain', 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'center' 
            }}
          />

          {/* Основной дашборд */}
          <img 
            src={dashboards} 
            alt="Paid Traffic Dashboard with campaign table and charts" 
            className="w-200 h-120"
          />
        </div>
      </div>
    </div>
  );
}