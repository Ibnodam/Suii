// src/pages/HomePage/NewsCard.jsx
import React from 'react';


export default function NewsCard({ image, category, date, author, title, excerpt }) {
  return (
    <div className="w-[390px] h-[507px] bg-white rounded-sm overflow-hidden transition-all duration-300 cursor-pointer group flex flex-col">
      
      {/* Картинка 280px */}
      <div className="h-[280px] bg-gray-200">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400 text-sm">
            Image
          </div>
        )}
      </div>

      {/* Контент 227px */}
      <div className="p-5 flex flex-col flex-1">

        {/* Метаданные */}
        <div className="text-gray-500 text-xs mb-2">
          {category} | {date} | By {author}
        </div>

        {/* Заголовок */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#7772F1] transition-colors">
          {title}
        </h3>

        {/* Описание */}
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {excerpt}
        </p>

        {/* Read more текстом */}
        <span className="mt-auto text-black text-sm group-hover:text-[#6a65e5] transition-colors">
          Read more  <span className="mt-auto text-[#7772F1] font-extrabold text-xl">→</span>
        </span>
      </div>
    </div>
  );
}


// export default function NewsCard({ image, category, date, author, title, excerpt }) {
//   return (
//     <div className="bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group w-[390px] h-[507px] flex flex-col">
      
//       {/* Изображение */}
//       <div className="h-[200px] bg-gray-200">
//         {image ? (
//           <img src={image} alt={title} className="w-full h-full object-cover" />
//         ) : (
//           <div className="text-gray-400 text-xs flex items-center justify-center h-full">
//             [Image]
//           </div>
//         )}
//       </div>

//       {/* Контент */}
//       <div className="p-5 flex flex-col flex-1">
        
//         <div className="flex items-center text-gray-500 text-xs mb-2">
//           <span>{category}</span>
//           <span> • </span>
//           <span>{date}</span>
//           <span> • </span>
//           <span>By {author}</span>
//         </div>

//         <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#7772F1] transition-colors">
//           {title}
//         </h3>

//         <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-3">
//           {excerpt}
//         </p>

//         <button className="flex items-center text-[#7772F1] text-sm font-medium hover:text-[#6a65e5] transition-colors">
//           Read more
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </button>

//       </div>
//     </div>
//   );
// }



// export default function NewsCard({ image, category, date, author, title, excerpt }) {
//   return (
//     <div 
//       className="bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-md hover:translate-y-1 transition-all duration-300 cursor-pointer group"
//       style={{ width: '390px', height: '507px' }}
//     >
//       {/* Изображение — 160px высоты */}
//       <div className="h-75 bg-gray-200 flex items-center justify-center">
//         {image ? (
//           <img src={image} alt={title} className="w-full h-full object-cover" />
//         ) : (
//           <div className="text-gray-400 text-xs">[Image]</div>
//         )}
//       </div>

//       {/* Контент — занимает оставшиеся 347px */}
//       <div className="p-5 flex flex-col h-[347px]">
//         {/* Метаданные */}
//         <div className="flex items-center text-gray-500 text-xs mb-2">
//           <span>{category}</span>
//           <span> • </span>
//           <span>{date}</span>
//           <span> • </span>
//           <span>By {author}</span>
//         </div>

//         {/* Заголовок */}
//         <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#7772F1] transition-colors">
//           {title}
//         </h3>

//         {/* Описание */}
//         <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-3">
//           {excerpt}
//         </p>

//         <div className="flex items-center mt-auto">
//             <span className="text-black text-sm font-medium">Read more</span>
//             <span className="text-[#7772F1] text-lg ml-1 leading-none">→</span>
//         </div>
//         {/* Кнопка "Read more" */}
//         {/* <button className="flex items-center text-[#7772F1] text-sm font-medium hover:text-[#6a65e5] transition-colors mt-auto">
//           Read more
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </button> */}
//       </div>
//     </div>
//   );
// }




// // src/pages/HomePage/NewsCard.jsx
// import React from 'react';

// export default function NewsCard({ image, category, date, author, title, excerpt }) {
//   return (
//     <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md hover:translate-y-1 transition-all duration-300 cursor-pointer group">
//       {/* Изображение */}
//       <div className="h-48 bg-gray-200 flex items-center justify-center">
//         {image ? (
//           <img src={image} alt={title} className="w-full h-full object-cover" />
//         ) : (
//           <div className="text-gray-400">[Image]</div>
//         )}
//       </div>

//       {/* Контент */}
//       <div className="p-6">
//         {/* Метаданные */}
//         <div className="flex items-center text-gray-500 text-sm mb-3">
//           <span>{category}</span>
//           <span> • </span>
//           <span>{date}</span>
//           <span> • </span>
//           <span>By {author}</span>
//         </div>

//         {/* Заголовок */}
//         <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#7772F1] transition-colors">
//           {title}
//         </h3>

//         {/* Описание */}
//         <p className="text-gray-600 mb-4 line-clamp-2">
//           {excerpt}
//         </p>

//         {/* Кнопка "Read more" */}
//         <button className="flex items-center text-[#7772F1] font-medium hover:text-[#6a65e5] transition-colors">
//           Read more
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }