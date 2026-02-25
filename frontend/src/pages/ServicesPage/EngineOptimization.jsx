// src/pages/HomePage/SEOOptimization.jsx
import React from 'react';
import dashboards from './pics/engineOptimization/dashboard.png';
import shape from './pics/engineOptimization/shape.png';

export default function SEOOptimization() {
  return (
    // <div className="bg-white py-20 px-8">
    //   <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">

    <div className="bg-white py-20 ml-[214px] pr-8"> {/* Изменено: pl-[214px] вместо px-8 */}
  <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl"> {/* Убран container mx-auto */}
        {/* Левая часть: дашборд + фоновая фигура */}
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
            alt="SEO Dashboard with multiple screens" 
            className="w-200 h-120"
          />
        </div>

        {/* Правая часть: текст + кнопки */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Search Engine Optimization</h2>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing. Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="border border-[#7772F1] text-[#7772F1] px-6 py-3 rounded-sm transition-colors duration-200 font-medium cursor-pointer">
              Learn more
            </button>
            <button className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-sm font-medium transition-colors duration-200 cursor-pointer">
              Try SEO toolkit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import dashboards from './pics/engineOptimization/dashboard.png'
// import shape from './pics/engineOptimization/shape.png'

