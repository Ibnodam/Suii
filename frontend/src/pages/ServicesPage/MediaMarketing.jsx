// src/pages/HomePage/MediaMarketing.jsx
import React from 'react';
import shape from './pics/marketing/shape.png';
import dashboard from './pics/marketing/dashboard.png';
import likes from './pics/marketing/likes.png';
import sub from './pics/marketing/sub.png';
import followers from './pics/marketing/followers.png';

export default function MediaMarketing() {
  return (
    // <div className="bg-white py-20 px-8">
    //   <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
    <div className="bg-white py-20 ml-[345px] pr-8"> {/* Изменено здесь: pl-[345px] вместо px-8 */}
  <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl"> {/* Убран container mx-auto */}
        {/* Левая часть: текст + кнопки */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Social Media Marketing</h2>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.
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

        {/* Правая часть: дашборд + overlay-элементы */}
        <div className="relative flex-1 flex justify-center">
          {/* Фоновая фигура (за дашбордом) */}
          <img 
            src={shape}
            alt=""
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto opacity-30 pointer-events-none -z-10"
            style={{ minWidth: '712px', minHeight: '404px'}}
          />

          {/* Дашборд */}
          <div className="relative z-10">
            <img 
              src={dashboard} 
              alt="Social Media Dashboard" 
              className="w-200 h-120"
            />

            {/* Бейдж "123" с иконкой likes.png — слева от дашборда */}
            <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 flex items-center">
              <img src={likes} alt="Likes" className="w-10 h-10" />
            </div>

            {/* Иконка followers.png */}
            <div className="absolute top-16 right-16 flex items-center gap-1">
              <img src={followers} alt="Followers" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// // src/pages/HomePage/MediaMarketing.jsx
// import React from 'react';
// import shape from './pics/marketing/shape.png';
// import dashboard from './pics/marketing/dashboard.png';
// import likes from './pics/marketing/likes.png';
// import sub from './pics/marketing/sub.png';
// import followers from './pics/marketing/followers.png';

// export default function MediaMarketing() {
//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
//         {/* Левая часть: текст + кнопки */}
//         <div className="flex-1 max-w-2xl">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Social Media Marketing</h2>
          
//           <p className="text-gray-600 leading-relaxed mb-8">
//             Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="border border-[#7772F1] text-[#7772F1] px-6 py-3 rounded-sm transition-colors duration-200 font-medium cursor-pointer">
//               Learn more
//             </button>
//             <button className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-sm font-medium transition-colors duration-200 cursor-pointer">
//               Try SEO toolkit
//             </button>
//           </div>
//         </div>

//         {/* Правая часть: дашборд + фон */}
//         <div className="relative flex-1 flex justify-center">
//           {/* Фоновая фигура shape.png — за дашбордом, слева/сверху */}
//           <div 
//             className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-64 h-64 opacity-20 pointer-events-none"
//             style={{ backgroundImage: `url(${shape})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
//           />

//           {/* Дашборд */}
//           <div className="relative">
//             <img 
//               src={dashboard} 
//               alt="Social Media Dashboard" 
//               className="w-160 h-100"
//             />

//             {/* Элементы поверх дашборда (если они не в самом изображении) */}
//             {/* Бейдж "23" вверху справа */}
//             <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
//               23
//             </div>

//             {/* Сердечко "123" слева от дашборда */}
//             <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex items-center">
//               <div className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-1">
//                 123
//               </div>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
//               </svg>
//             </div>

//             {/* Кнопка SUBSCRIBE внизу справа */}
//             <button className="absolute bottom-4 right-4 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-sm text-sm font-medium cursor-pointer">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                 <path d="M2 8a6 6 0 016-6v12a6 6 0 01-6-6zM14 8a6 6 0 016 6V2a6 6 0 01-6 6z" />
//               </svg>
//               SUBSCRIBE
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import shape from './pics/marketing/shape.png';
// import dashboard from './pics/marketing/dashboard.png';
// import likes from './pics/marketing/likes.png';
// import sub from './pics/marketing/sub.png';
// import followers from './pics/marketing/followers.png';

// export default function MediaMarketing() {

// }