// src/pages/OurServicesPage/First.jsx
import React from 'react';
import img from './pics/first/image.png';

export default function First() {
  return (
    <div className="bg-white py-20 px-8">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-16">
        {/* Левая часть: изображение */}
        <div className="flex-1 flex justify-center">
          <img
            src={img}
            alt="Analyst using tablet with SEO dashboard"
            className="w-176 h-auto rounded-sm"
          />
        </div>

        {/* Правая часть: текст */}
        <div className="flex-1 max-w-100">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-0">
            We go above and beyond to ensure successful SEO
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orc. Voluptat quam tempus justo, aliquam. Tortor ultrices mattis eget orc eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orc.
          </p>
        </div>
      </div>
    </div>
  );
}

// // src/pages/OurServicesPage/First.jsx
// import React from 'react';
// import img from './pics/first/image.png';

// export default function First() {
//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
//         {/* Левая часть: изображение */}
//         <div className="flex-1 flex justify-center">
//           <img
//             src={img}
//             alt="Analyst using tablet with SEO dashboard"
//             className="w-176 h-auto rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Правая часть: текст */}
//         <div className="flex-1 max-w-2xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             We go above and beyond to ensure successful SEO
//           </h2>
          
//           <p className="text-gray-600 text-lg leading-relaxed">
//             Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orc. Voluptat quam tempus justo, aliquam. Tortor ultrices mattis eget orc eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orc.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



// import img from './pics/first/image.png'

// export default function First() {}