// src/pages/HomePage/FAQ.jsx
import React, { useState } from 'react';
import img from './pics/qa/img.png';
import lines from './pics/qa/lines.png';

export default function FAQ() {
  // Разрешаем множественное раскрытие: используем массив состояний
  const [openStates, setOpenStates] = useState(Array(4).fill(false)); // 4 вопроса

  const toggle = (index) => {
    const newStates = [...openStates];
    newStates[index] = !newStates[index];
    setOpenStates(newStates);
  };

  const questions = [
    {
      q: "Aliquet lectus urna viverra in odio?",
      a: "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."
    },
    {
      q: "Orci commodo, viverra orci mollis ut euismod?",
      a: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      q: "Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?",
      a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      q: "In id dolor quis nunc, urna hendrerit pharetra?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <div className="bg-white py-20 px-8">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-start gap-16">
        {/* Левая часть: вопросы */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Frequently Ask Questions</h2>

          <div className="space-y-6">
            {questions.map((item, index) => (
              <div key={index}>
                <button
                  className="flex items-start w-full text-left cursor-pointer group"
                  onClick={() => toggle(index)}
                  aria-expanded={openStates[index]}
                >
                  {/* Плюс/минус — слева, крупный, #7772F1 */}
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#7772F1] text-2xl font-bold mr-4 group-hover:text-[#6a65e5] transition-colors">
                    {openStates[index] ? '−' : '+'}
                  </span>

                  <span className="text-lg font-medium text-gray-800 flex-1">{item.q}</span>
                </button>

                {openStates[index] && (
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Кнопка Discover more */}
          <button
            className="mt-8 px-6 py-3 bg-[#7772F1] hover:bg-[#6a65e5] text-white rounded-lg font-medium transition-colors duration-200 cursor-pointer flex items-center"
          >
            Discover more →
          </button>
        </div>

        {/* Правая часть: иллюстрация + фоновая линия */}
        <div className="relative flex-1 flex justify-center">
          {/* Фоновая фигура lines.png — прижата к левому краю, вертикально по центру */}
          <div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-full opacity-20 pointer-events-none"
            style={{ backgroundImage: `url(${lines})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
          />

          {/* Иллюстрация — справа от линии */}
          <img 
            src={img} 
            alt="Person thinking with question mark" 
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </div>
  );
}

// // src/pages/HomePage/FAQ.jsx
// import React, { useState } from 'react';
// import img from './pics/qa/img.png';
// import lines from './pics/qa/lines.png';

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const questions = [
//     {
//       q: "Aliquet lectus urna viverra in odio?",
//       a: "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."
//     },
//     {
//       q: "Orci commodo, viverra orci mollis ut euismod?",
//       a: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//       q: "Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?",
//       a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },
//     {
//       q: "In id dolor quis nunc, urna hendrerit pharetra?",
//       a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
//   ];

//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
//         {/* Левая часть: вопросы */}
//         <div className="flex-1 max-w-2xl">
//           <h2 className="text-3xl font-bold text-gray-900 mb-10">Frequently Ask Questions</h2>

//           <div className="space-y-4">
//             {questions.map((item, index) => (
//               <div key={index} className="border-b border-gray-200 pb-4">
//                 <button
//                   className="flex items-start justify-between w-full text-left"
//                   onClick={() => toggle(index)}
//                   aria-expanded={openIndex === index}
//                 >
//                   <span className="text-lg font-medium text-gray-800">{item.q}</span>
//                   <span className="text-gray-500 text-xl">
//                     {openIndex === index ? '−' : '+'}
//                   </span>
//                 </button>

//                 {openIndex === index && (
//                   <p className="mt-3 text-gray-600 leading-relaxed">
//                     {item.a}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>

//           <button className="mt-8 flex items-center text-[#7772F1] font-medium hover:text-[#6a65e5] transition-colors duration-200 cursor-pointer">
//             Discover more →
//           </button>
//         </div>

//         {/* Правая часть: иллюстрация + фон */}
//         <div className="relative flex-1 flex justify-center">
//           {/* Фоновая фигура (линии) — за иллюстрацией */}
//           <div 
//             className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-64 h-64 opacity-20 pointer-events-none"
//             style={{ backgroundImage: `url(${lines})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
//           />

//           {/* Иллюстрация */}
//           <img 
//             src={img} 
//             alt="Person thinking with question mark" 
//             className="w-full max-w-md h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }