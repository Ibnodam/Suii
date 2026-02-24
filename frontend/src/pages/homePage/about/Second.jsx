// src/pages/HomePage/About/Second.jsx
import React from 'react';
import team from './pics/team.png';
import shade from './pics/shade.png';

export default function Second() {
  const stats = [
    { value: '10', label: 'Years of experience', color: 'border-orange-500 text-orange-500' },
    { value: '45', label: 'Awards', color: 'border-pink-500 text-pink-500' },
    { value: '540+', label: 'Projects', color: 'border-blue-500 text-blue-500' },
    { value: '100%', label: 'Happy clients', color: 'border-green-500 text-green-500' },
  ];

  return (
    <div className="bg-white py-20 px-8">
      <div className="container mx-auto max-w-1230px flex items-center gap-16">
        {/* Левая часть: текст + кнопка */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Createx Agency</h2>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orc. Voluptat quam tempus justo, aliquam. Tortor ultrices mattis eget orc eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orc.
          </p>

          <button className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer">
            More about us
          </button>
        </div>

        {/* Правая часть: фото + фоновая фигура */}
        <div className="relative flex-1">
          {/* Фоновая фигура (shade.png) — за фото, слева */}
          <div 
            className="absolute -left-12 top-0 w-64 h-full opacity-30"
            style={{ backgroundImage: `url(${shade})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center' }}
          />
          
          {/* Фото команды */}
          <img 
            src={team} 
            alt="Createx Team" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Статистика внизу */}
      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {stats.map((item, index) => (
          <div key={index} className="text-center">
            <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center text-2xl font-bold ${item.color}`}>
              {item.value}
            </div>
            <p className="mt-4 text-gray-700 text-sm font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// import team from './pics/team.png'
// import shade from './pics/shade.png'

// export default function Second() {

// }