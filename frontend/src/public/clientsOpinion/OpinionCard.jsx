// src/pages/HomePage/OpinionCard.jsx
import React from 'react';
import avatar from './avatar1.png';

export default function OpinionCard({ testimonial, isActive }) {
  return (
    <div 
      className={`bg-white rounded-xl p-10 transition-all duration-500 ${
        isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
      }`}
      style={{ 
        width: '1020px',
        height: '344px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.02)' // Нижняя тень
      }}
    >
      <div className="flex items-start gap-4 h-full">
        <span className="text-[#7772F1] text-4xl mt-1 leading-none">“</span>
        <div className="flex-1 flex flex-col h-full">
          <p className="text-gray-600 leading-relaxed mb-6 text-lg flex-1">
            {testimonial.text}
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <img 
              src={avatar} 
              alt={testimonial.author} 
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// // src/pages/HomePage/OpinionCard.jsx
// import React from 'react';
// import avatar from './avatar1.png';

// export default function OpinionCard({ testimonial, isActive }) {
//   return (
//     <div 
//       className={`bg-white rounded-xl  p-10 transition-all duration-500 ${
//         isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80'
//       }`}
//       style={{ 
//         width: '1020px',
//         height: '344px',
//       }}
//     >
//       <div className="flex items-start gap-4 h-full">
//         <span className="text-[#7772F1] text-4xl mt-1 leading-none">“</span>
//         <div className="flex-1 flex flex-col h-full">
//           <p className="text-gray-600 leading-relaxed mb-6 text-lg flex-1">
//             {testimonial.text}
//           </p>
//           <div className="flex items-center gap-4 mt-auto">
//             <img 
//               src={avatar} 
//               alt={testimonial.author} 
//               className="w-14 h-14 rounded-full object-cover"
//             />
//             <div>
//               <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
//               <p className="text-gray-500">{testimonial.role}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// // src/pages/HomePage/OpinionCard.jsx
// import React from 'react';
// import avatar from './avatar1.png';

// export default function OpinionCard({ testimonial, isActive }) {
//   return (
//     <div 
//       className={`bg-white rounded-sm p-10 transition-transform duration-500 ${
//         isActive ? 'scale-100' : 'scale-95 opacity-80'
//       }`}
//       style={{ minWidth: '720px' }} // фикс. ширина для скролла
//     >
//       <div className="flex items-start gap-4">
//         <span className="text-[#7772F1] text-4xl mt-1">“</span>
//         <div className="flex-1">
//           <p className="text-gray-600 leading-relaxed mb-6 text-lg">
//             {testimonial.text}
//           </p>
//           <div className="flex items-center gap-4">
//             <img 
//               src={avatar} 
//               alt={testimonial.author} 
//               className="w-14 h-14 rounded-full object-cover"
//             />
//             <div>
//               <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
//               <p className="text-gray-500">{testimonial.role}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function OpinionCard({ testimonial }) {
//   return (
//     <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
//       <div className="flex items-start gap-4">
//         {/* Фиолетовая кавычка слева */}
//         <span className="text-[#7772F1] text-4xl mt-1">“</span>
        
//         <div className="flex-1">
//           <p className="text-gray-600 leading-relaxed mb-6">
//             {testimonial.text}
//           </p>

//           <div className="flex items-center gap-4">
//             <img 
//               src={avatar} 
//               alt={testimonial.author} 
//               className="w-12 h-12 rounded-full object-cover"
//             />
//             <div>
//               <p className="font-bold text-gray-900">{testimonial.author}</p>
//               <p className="text-gray-500 text-sm">{testimonial.role}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }