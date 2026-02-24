// src/pages/HomePage/About/First.jsx
import React from 'react';

// Иконки
import topCeo from './pics/top_ceo.png';
import marketing from './pics/d_marketing.png';
import forbes from './pics/forbes.png';
import byDevelopers from './pics/by_developers.png';

// Логотипы клиентов
import forSale from './pics/for_sale.png';
import happyHome from './pics/happyHome.png';
import higher from './pics/higher.png';
import inDepth from './pics/inDepth.png';
import natural from './pics/natural.png';
import sunset from './pics/sunset.png';

export default function First() {
  const awards = [
    { img: topCeo, text: "Top SEO Companies 2020 by Clutch" },
    { img: marketing, text: "Top Digital Marketing Agency 2019 by UpCity" },
    { img: forbes, text: "Official Member 2020 by Forbes Agency Council" },
    { img: byDevelopers, text: "Top SEO Companies 2020 by Top Developers" },
  ];

  const logos = [
    forSale,
    happyHome,
    higher,
    inDepth,
    natural,
    sunset,
  ];

  return (
    <section className="bg-white py-20">
      
      {/* ВЕРХНИЙ БЛОК */}
      <div className="max-w-400 mx-auto px-8 flex gap-28">
        
        {/* Текст */}
        <div className="flex-1 max-w-xl">
          <p className="text-gray-700 text-xl font-bold leading-relaxed">
            Createx SEO Agency is&nbsp;a&nbsp;full-service digital marketing agency.
            We&nbsp;help businesses make more money through a&nbsp;wealth of
            performance data and market research. We&nbsp;create science-based SEO
            strategies to&nbsp;empower our clients.
          </p>
        </div>

        {/* Сетка наград */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-10">
          {awards.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img src={item.img} alt="" className="w-12 h-12 object-contain" />
              <span className="text-gray-700 text-sm font-medium leading-snug">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* НИЖНИЙ БЛОК (логотипы) */}
      <div className="mt-20">
        <div className="w-400 mx-auto px-8">
          <div className="flex justify-center items-center gap-38 flex-wrap">
            {logos.map((logo, index) => (
              <a
                key={index}
                href="#"
                className="transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-16 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

// // src/pages/HomePage/About/First.jsx
// import React from 'react';

// // Иконки
// import topCeo from './pics/top_ceo.png';
// import marketing from './pics/d_marketing.png';
// import forbes from './pics/forbes.png';
// import byDevelopers from './pics/by_developers.png';

// // Логотипы клиентов
// import forSale from './pics/for_sale.png';
// import happyHome from './pics/happyHome.png';
// import higher from './pics/higher.png';
// import inDepth from './pics/inDepth.png';
// import natural from './pics/natural.png';
// import sunset from './pics/sunset.png';

// export default function First() {
//   const awards = [      
//     { img: topCeo, text: "Top SEO Companies 2020 by Clutch" },
//     { img: marketing, text: "Top Digital Marketing Agency 2019 by UpCity" },
//     { img: forbes, text: "Official Member 2020 by Forbes Agency Council" },
//     { img: byDevelopers, text: "Top SEO Companies 2020 by Top Developers" },
//   ];

//   return (
//     <div className="bg-white py-16 px-8">
//       <div className="container mx-auto max-w-8xl flex items-start gap-16">
//         {/* Текст слева */}
//         <div className="flex-1 max-w-2xl">
//           <p className="text-gray-700 text-xl font-bold leading-relaxed">
//             Createx SEO Agency is&nbsp;a&nbsp;full-service digital marketing agency. We&nbsp;help businesses make more money through a&nbsp;wealth of&nbsp;performance data and market research. We&nbsp;create science-based SEO strategies to&nbsp;empower our clients.
//           </p>
//         </div>

//         {/* Правая часть: 2 строки по 2 элемента */}
//         <div className="grid grid-cols-2 gap-x-12 gap-y-8">
//           {awards.map((item, index) => (
//             <div key={index} className="flex items-center gap-3 min-w-[240px]">
//               <img src={item.img} alt="" className="w-12 h-12" />
//               <span className="text-gray-700 text-sm font-medium">{item.text}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Логотипы клиентов */}
//       <div className="mt-16 flex justify-center flex-wrap gap-24 max-w-8xl mx-auto">{/* className="mt-16 flex justify-center flex-wrap gap-24 max-w-8xl" */}
//         {[forSale, happyHome, higher, inDepth, natural, sunset].map((logo, index) => (
//           <a
//             key={index}
//             href="#"
//             className="block transition-transform duration-300 hover:scale-105 cursor-pointer"
//           >
//             <img src={logo} alt={`Client ${index + 1}`} className="h-24 object-contain" />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }



// // src/pages/HomePage/About/First.jsx
// import React from 'react';

// // Иконки справа
// import topCeo from './pics/top_ceo.png';
// import marketing from './pics/d_marketing.png';
// import forbes from './pics/forbes.png';
// import byDevelopers from './pics/by_developers.png';

// // Логотипы клиентов
// import forSale from './pics/for_sale.png';
// import happyHome from './pics/happyHome.png';
// import higher from './pics/higher.png';
// import inDepth from './pics/inDepth.png';
// import natural from './pics/natural.png';
// import sunset from './pics/sunset.png';

// export default function First() {
//   return (
//     <div className="bg-white py-16 px-8">
//       <div className="container mx-auto max-w-7xl flex items-start gap-16">
//         {/* Текст слева */}
//         <div className="flex-1 max-w-2xl">
//           <p className="text-gray-700 text-lg leading-relaxed">
//             Createx SEO Agency is&nbsp;a&nbsp;full-service digital marketing agency. We&nbsp;help businesses make more money through a&nbsp;wealth of&nbsp;performance data and market research. We&nbsp;create science-based SEO strategies to&nbsp;empower our clients.
//           </p>
//         </div>

//         {/* Иконки справа */}
//         <div className="flex flex-col gap-8">
//           <img src={topCeo} alt="Top CEO" className="w-16 h-16" />
//           <img src={marketing} alt="Digital Marketing" className="w-16 h-16" />
//           <img src={forbes} alt="Forbes" className="w-16 h-16" />
//           <img src={byDevelopers} alt="By Developers" className="w-16 h-16" />
//         </div>
//       </div>

//       {/* Логотипы клиентов — внизу, по центру */}
//       <div className="mt-16 flex justify-center flex-wrap gap-12">
//         {[forSale, happyHome, higher, inDepth, natural, sunset].map((logo, index) => (
//           <a
//             key={index}
//             href="#"
//             className="block transition-transform duration-300 hover:scale-105 cursor-pointer"
//           >
//             <img src={logo} alt={`Client ${index + 1}`} className="h-10 object-contain" />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }






// // Те что справа 4 иконки
// import topCeo from './pics/top_ceo.png' // 
// import marketing from './pics/d_marketing.png'
// import forbes from './pics/forbes.png'
// import byDevelopers from './pics/by_developers.png'

// // Логотипы партнёров-клиентов снизу, в любом порядке можно
// import forSale from './pics/for_sale.png'
// import happyHome from './pics/happyHome.png'
// import higher from './pics/higher.png'
// import inDepth from './pics/inDepth.png'
// import natural from './pics/natural.png'
// import sunset from './pics/sunset.png'

// export default function First() {}
