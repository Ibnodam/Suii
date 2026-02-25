// src/pages/HomePage/CaseCard.jsx
import React from 'react';

export default function CaseCard({ item }) {
  return (
    <div className="bg-white rounded-sm shadow-sm p-6 w-[390px] h-[390px] mx-auto hover:shadow-md transition-shadow cursor-pointer flex flex-col">
      {/* Логотип / заголовок */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
          <span className="text-xs font-bold text-gray-600">
            {item.title.split(' ')[0].slice(0, 3).toUpperCase()}
          </span>
        </div>
        <span className="ml-3 text-sm font-medium text-gray-700 line-clamp-1">
          {item.title}
        </span>
      </div>

      {/* Описание - с ограничением строк */}
      <p className="text-gray-600 text-sm mb-5 line-clamp-3 flex-1">
        {item.desc}
      </p>

      {/* Статистика - внизу карточки */}
      <div className="flex justify-between mt-auto pt-2">
        {item.stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mx-auto ${stat.color} text-sm font-bold`}>
              {stat.value}
            </div>
            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// // src/pages/HomePage/CaseCard.jsx
// import React from 'react';

// export default function CaseCard({ item }) {
//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6 max-w-97.5 max-h-97.5  mx-auto hover:shadow-md transition-shadow cursor-pointer">
//       {/* Логотип / заголовок */}
//       <div className="flex items-center mb-4">
//         <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
//           <span className="text-xs font-bold text-gray-600">
//             {item.title.split(' ')[0].slice(0, 3).toUpperCase()}
//           </span>
//         </div>
//         <span className="ml-3 text-sm font-medium text-gray-700">{item.title}</span>
//       </div>

//       {/* Описание */}
//       <p className="text-gray-600 text-sm mb-5">{item.desc}</p>

//       {/* Статистика */}
//       <div className="flex justify-between">
//         {item.stats.map((stat, i) => (
//           <div key={i} className="text-center">
//             <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mx-auto ${stat.color} text-sm font-bold`}>
//               {stat.value}
//             </div>
//             <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }