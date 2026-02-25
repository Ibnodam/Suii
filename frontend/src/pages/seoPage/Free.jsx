// src/pages/OurServicesPage/Free.jsx
import React from 'react';
import dots from './pics/free/dots.png';
import lines from './pics/free/lines.png';

export default function Free() {
  return (
    <div
      className="relative w-307 h-61 mx-auto bg-[#7772F1] rounded-sm overflow-hidden"
    >
      {/* Фоновые изображения */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            url(${dots}),
            url(${lines})
          `,
          backgroundPosition: 'right center, left top',
          backgroundSize: 'auto 100%, auto 80%',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}
      />
      
      {/* Контент — по центру */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Get a Free SEO Analysis!
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl">
          {/* Поле Name */}
          <div className="flex-1">
            <label className="block text-white text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7772F1] focus:border-transparent"
            />
          </div>

          {/* Поле Email */}
          <div className="flex-1">
            <label className="block text-white text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Your working email"
              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7772F1] focus:border-transparent"
            />
          </div>

          {/* Поле URL */}
          <div className="flex-1">
            <label className="block text-white text-sm mb-1">Your website URL</label>
            <input
              type="url"
              placeholder="http://yoursite.com"
              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7772F1] focus:border-transparent"
            />
          </div>

          {/* Кнопка (без надписи) */}
          <div className="flex items-end"> {/* Добавлено items-end чтобы кнопка была на одном уровне с полями */}
            <button
              className="bg-[#1F2937] hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              Analyse your site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




// // src/pages/OurServicesPage/Free.jsx
// import React from 'react';
// import dots from './pics/free/dots.png';
// import lines from './pics/free/lines.png';

// export default function Free() {
//   return (
//     <div
//       className="relative w-307 h-61 mx-auto bg-[#7772F1] rounded-xl overflow-hidden"
//       style={{
//         backgroundImage: `
//           url(${dots}),
//           url(${lines})
//         `,
//         backgroundPosition: 'left top, right bottom',
//         backgroundSize: 'auto 60%, auto 40%',
//         backgroundRepeat: 'no-repeat, no-repeat'
//       }}
//     >
//       {/* Контент — по центру */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
//         <h2 className="text-3xl font-bold text-white mb-6 text-center">
//           Get a Free SEO Analysis!
//         </h2>

//         <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl">
//           <input
//             type="text"
//             placeholder="Your name"
//             className="flex-1 px-4 py-3 bg-white/80 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7772F1] focus:border-transparent"
//           />
//           <input
//             type="email"
//             placeholder="Your working email"
//             className="flex-1 px-4 py-3 bg-white/80 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7772F1] focus:border-transparent"
//           />
//           <input
//             type="url"
//             placeholder="http://yoursite.com"
//             className="flex-1 px-4 py-3 bg-white/80 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7772F1] focus:border-transparent"
//           />
//           <button
//             className="bg-[#1F2937] hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer"
//           >
//             Analyse your site
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import dots from './pics/free/dots.png'
// import lines from './pics/free/lines.png'

// export default function Free() {}