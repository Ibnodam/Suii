// src/pages/HomePage/ServicesBanner.jsx
import React from 'react';
import dots from './pics/top/dots.png';
import phone from './pics/top/phone.png';
import shapes from './pics/top/shapes.png';

export default function ServicesBanner() {
  return (
    <div 
      className="relative min-h-[600px] flex items-center justify-center px-4"
      style={{
        background: 'linear-gradient(90deg, #1E212C 0%, #232441 50%, #1E212C 100%)',
        backgroundImage: `
          url(${dots}),
          url(${shapes}),
          linear-gradient(90deg, #1E212C 0%, #232441 50%, #1E212C 100%)
        `,
        backgroundPosition: 'left center, right bottom, center',
        backgroundSize: 'auto 100%, auto 70%, cover',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat'
      }}
    >
      {/* Контент — строго по центру */}
      <div className="text-center max-w-3xl z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our services</h1>
        
        <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium cursor-pointer">
            Start now
          </button>
          
          <div className="flex items-center gap-3 text-white">
            <img src={phone} alt="Phone" className="w-6 h-6" />
            <div className="flex flex-col items-start">
              <span className="text-gray-400 text-sm">Call us</span>
              <span className="font-bold">(405) 555-0128</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// // src/pages/HomePage/ServicesBanner.jsx
// import React from 'react';
// import dots from './pics/top/dots.png';
// import phone from './pics/top/phone.png';
// import shapes from './pics/top/shapes.png';

// export default function ServicesBanner() {
//   return (
//     <div 
//       className="relative min-h-[600px] flex items-center justify-center px-4"
//       style={{
//         background: 'linear-gradient(90deg, #1E212C 0%, #232441 50%, #1E212C 100%)',
//         backgroundImage: `
//           linear-gradient(90deg, #1E212C 0%, #232441 50%, #1E212C 100%),
//           url(${dots}),
//           url(${shapes})
//         `,
//         backgroundPosition: 'center, left center, right bottom',
//         backgroundSize: 'cover, auto 100%, auto 60%',
//         backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
//         backgroundBlendMode: 'normal, overlay, overlay'
//       }}
//     >
//       {/* Контент — строго по центру */}
//       <div className="text-center max-w-3xl z-10">
//         <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our services</h1>
        
//         <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
//           We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center gap-6">
//           <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium cursor-pointer">
//             Start now
//           </button>
          
//           <div className="flex items-center gap-3 text-white">
//             <img src={phone} alt="Phone" className="w-10 h-10" />

//                             <div className="flex flex-col items-start"> {/* Изменено здесь */}
//               <span className="text-gray-400 text-sm">Call us</span>
//               <span className="font-bold">(405) 555-0128</span>
//             </div>

//             {/* <div>
//               <div className="text-gray-400 text-sm">Call us</div>
//               <div className="font-bold">(405) 555-0128</div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// // src/pages/HomePage/ServicesBanner.jsx
// import React from 'react';
// import dots from './pics/top/dots.png';
// import phone from './pics/top/phone.png';
// import shapes from './pics/top/shapes.png';

// export default function ServicesBanner() {
//   return (
//     <div 
//       className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#1E212C] via-[#232441] to-[#1E212C] px-4"
//       style={{
//         backgroundImage: `
//           url(${dots}),
//           url(${shapes})
//         `,
//         backgroundPosition: 'left center, right bottom',
//         backgroundSize: 'auto 100%, auto 60%',
//         backgroundRepeat: 'no-repeat, no-repeat',
//         backgroundOpacity: '0.2'
//       }}
//     >
//       {/* Контент — строго по центру */}
//       <div className="text-center max-w-3xl">
//         <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our services</h1>
        
//         <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
//           We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center gap-6">
//           <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium cursor-pointer">
//             Start now
//           </button>
          
//           <div className="flex items-center gap-3 text-white">
//             <img src={phone} alt="Phone" className="w-6 h-6" />
//             <div>
//               <div className="text-gray-400 text-sm">Call us</div>
//               <div className="font-bold">(405) 555-0128</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import dots from './pics/top/dots.png' // слева по центру в фоне
// import phone from './pics/top/phone.png' // значок телефона
// import shapes from './pics/top/shapes.png' // справа внизу в фоне

// export default function Top(){}