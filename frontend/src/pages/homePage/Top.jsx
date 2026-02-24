import React from 'react';
import pc from './pics/top/computer.png';
import graph from './pics/top/pie-graph.png';
import speaker from './pics/top/speaker.png';
import human from './pics/top/human.png';
import shade from './pics/top/shaded.png';
import lines from './pics/top/lines.png';
import player from './pics/top/player.png';

export default function Top() {
  return (
    <div className="relative h-[900px] bg-gradient-to-br from-[#1E212C] via-[#232441] to-[#1E212C] overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <img 
        src={shade} 
        alt="" 
        className="absolute bottom-0 right-0 w-auto h-[300px] opacity-20"
      />
      <img 
        src={lines} 
        alt="" 
        className="absolute top-10 left-10 w-32 h-32 opacity-20"
      />

      {/* Контент — ближе к верху: pt-16 вместо центрирования */}
      <div className="container mx-auto max-w-7xl px-4 pt-64 pb-12">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Левая часть: текст и кнопки */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Best{' '}
              <span className="text-[#7772F1]">SEO & Marketing</span>{' '}
              Solutions for You
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
              <button 
                className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium cursor-pointer"
              >
                Get a free analysis
              </button>




              <button
              className="flex items-center gap-2 bg-transparent cursor-pointer group"
              aria-label="Play video"
            >
              {/* Контейнер для иконки + ховер-эффект */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <img 
                  src={player} 
                  alt="Play" 
                  className="w-10 h-10"
                />
                {/* Ховер-эффект: прозрачный круг только вокруг иконки */}
                <div className="absolute inset-0 rounded-full bg-[#7772F1] opacity-0 group-hover:opacity-12 transition-opacity duration-300"></div>
              </div>

              {/* Текст кнопки */}
              <span className="text-white text-base font-medium">Play video</span>
            </button>

              {/* <button 
                className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-200 font-medium cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Play video
              </button> */}
            </div>
          </div>

          {/* Правая часть: иллюстрация */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src={human} 
                alt="Marketer with laptop" 
                className="w-full h-auto"
              />
              {/* Доп. элементы поверх */}
              <div className="absolute -top-4 -right-8 w-16 h-16">
                <img src={graph} alt="Pie chart" className="w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -left-8 w-12 h-12">
                <img src={pc} alt="Computer" className="w-full h-full" />
              </div>
              <div className="absolute -top-8 -left-12 w-10 h-10">
                <img src={speaker} alt="Speaker" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижний ряд: иконки + текст */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={pc} alt="SEO" className="w-8 h-8" />
            <span className="text-white text-sm font-medium">SEO Content Strategy</span>
          </div>
          
          <div className="w-px h-6 bg-gray-600"></div>
          
          <div className="flex items-center gap-2">
            <img src={speaker} alt="Content" className="w-8 h-8" />
            <span className="text-white text-sm font-medium">Content Marketing</span>
          </div>
          
          <div className="w-px h-6 bg-gray-600"></div>
          
          <div className="flex items-center gap-2">
            <img src={graph} alt="Website" className="w-8 h-8" />
            <span className="text-white text-sm font-medium">Website & Social Media Marketing</span>
          </div>
        </div>
      </div>
    </div>
  );
}



//........... работало лучше чем то что снизу 
// import React from 'react';
// import pc from './pics/top/computer.png';
// import graph from './pics/top/pie-graph.png';
// import speaker from './pics/top/speaker.png';
// import human from './pics/top/human.png';
// import shade from './pics/top/shaded.png';
// import lines from './pics/top/lines.png';

// export default function Top() {
//   return (
//     <div className="relative h-[1080px] bg-gradient-to-br from-[#1E212C] via-[#232441] to-[#1E212C] overflow-hidden">
//       {/* Фоновые декоративные элементы — как img, а не background */}
//       {/* Лужа справа внизу */}
//       <img 
//         src={shade} 
//         alt="" 
//         className="absolute bottom-0 right-0 w-auto h-[300px] opacity-20"
//       />
//       {/* Линии слева сверху */}
//       <img 
//         src={lines} 
//         alt="" 
//         className="absolute top-10 left-10 w-32 h-32 opacity-20"
//       />

//       <div className="container mx-auto max-w-7xl h-full flex items-center justify-center px-4">
//         {/* Левая часть: текст и кнопки */}
//         <div className="flex-1 text-center lg:text-left">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//             Best{' '}
//             <span className="text-[#7772F1]">SEO & Marketing</span>{' '}
//             Solutions for You
//           </h1>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
//             <button 
//               className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium cursor-pointer"
//             >
//               Get a free analysis
//             </button>
//             <button 
//               className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-200 font-medium cursor-pointer"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//               </svg>
//               Play video
//             </button>
//           </div>
//         </div>

//         {/* Правая часть: иллюстрация */}
//         <div className="flex-1 relative">
//           <div className="relative w-full max-w-md mx-auto">
//             <img 
//               src={human} 
//               alt="Marketer with laptop" 
//               className="w-full h-auto"
//             />
//             {/* Доп. элементы поверх */}
//             <div className="absolute -top-4 -right-8 w-16 h-16">
//               <img src={graph} alt="Pie chart" className="w-full h-full" />
//             </div>
//             <div className="absolute -bottom-6 -left-8 w-12 h-12">
//               <img src={pc} alt="Computer" className="w-full h-full" />
//             </div>
//             <div className="absolute -top-8 -left-12 w-10 h-10">
//               <img src={speaker} alt="Speaker" className="w-full h-full" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Нижний ряд: иконки + текст в одну строку */}
//       <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center">
//         <div className="flex items-center gap-6">



//           <div className="flex items-center gap-2">
//             <img src={graph} alt="Website" className="w-8 h-8" />
//             <span className="text-white text-sm font-medium">Website & Social Media Marketing</span>
//           </div>

//           <div className="w-px h-6 bg-gray-600"></div>
          
//           <div className="flex items-center gap-2">
//             <img src={speaker} alt="Content" className="w-8 h-8" />
//             <span className="text-white text-sm font-medium">Content Marketing</span>
//           </div>
          
//           <div className="w-px h-6 bg-gray-600"></div>

          
//           <div className="flex items-center gap-2">
//             <img src={pc} alt="SEO" className="w-8 h-8" />
//             <span className="text-white text-sm font-medium">SEO Content Strategy</span>
//           </div>
          
 
//         </div>
//       </div>
//     </div>
//   );
// }




// ..................В целом работало, но были недочёты.....
// import pc from './pics/top/computer.png' // значок компьютера который внизу
// import graph from './pics/top/pie-graph.png' // значок графика который внизу
// import speaker from './pics/top/speaker.png' // значот громкоговорителя который внизу
// import human from './pics/top/human.png' // рисунок человека с компьютером который справа
// import shade from './pics/top/shaded.png' // лужа которая на фоне человечка
// import lines from './pics/top/lines.png' // полоски с фона
// import React from 'react';


// export default function Top() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E212C] via-[#232441] to-[#1E212C] px-4 py-8">
//       {/* Фоновые элементы */}
//       <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
//         <img src={lines} alt="" className="w-full h-full object-contain" />
//       </div>
//       <div className="absolute bottom-20 right-20 w-64 h-64 opacity-10">
//         <img src={shade} alt="" className="w-full h-full object-contain" />
//       </div>

//       <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12">
//         {/* Левая часть: текст и кнопки */}
//         <div className="flex-1 text-center lg:text-left">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//             Best{' '}
//             <span className="text-[#7772F1]">SEO & Marketing</span>{' '}
//             Solutions for You
//           </h1>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
//             <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
//               Get a free analysis
//             </button>
//             <button className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors duration-200 font-medium">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//               </svg>
//               Play video
//             </button>
//           </div>
//         </div>

//         {/* Правая часть: иллюстрация */}
//         <div className="flex-1 relative">
//           <div className="relative w-full max-w-md mx-auto">
//             <img 
//               src={human} 
//               alt="Marketer with laptop" 
//               className="w-full h-auto"
//             />
//             {/* Доп. элементы поверх (можно уточнить позиционирование по дизайну) */}
//             <div className="absolute -top-4 -right-8 w-16 h-16">
//               <img src={graph} alt="Pie chart" className="w-full h-full" />
//             </div>
//             <div className="absolute -bottom-6 -left-8 w-12 h-12">
//               <img src={pc} alt="Computer" className="w-full h-full" />
//             </div>
//             <div className="absolute -top-8 -left-12 w-10 h-10">
//               <img src={speaker} alt="Speaker" className="w-full h-full" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Нижний ряд иконок с подписями */}
//       <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-12">
//         <div className="flex flex-col items-center">
//           <img src={pc} alt="SEO Content Strategy" className="w-10 h-10 mb-3" />
//           <span className="text-white text-sm font-medium">SEO Content Strategy</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <img src={speaker} alt="Content Marketing" className="w-10 h-10 mb-3" />
//           <span className="text-white text-sm font-medium">Content Marketing</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <img src={graph} alt="Website & Social Media Marketing" className="w-10 h-10 mb-3" />
//           <span className="text-white text-sm font-medium">Website & Social Media Marketing</span>
//         </div>
//       </div>
//     </div>
//   );
// }