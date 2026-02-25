// import ecommerce from './pics/markets/ic-ecommerce.png'
// import site from './pics/markets/ic-website.png'
// import suitcase from './pics/markets/ic-suitcase.png'
// import rocket from './pics/markets/ic-rocket.png'

// export default function Market() {}

// src/pages/HomePage/Market.jsx


import React from 'react';
import ecommerce from './pics/markets/ic-ecommerce.png';
import site from './pics/markets/ic-website.png';
import suitcase from './pics/markets/ic-suitcase.png';
import rocket from './pics/markets/ic-rocket.png';
import divider from './pics/markets/divider.png';


const markets = [
  {
    icon: ecommerce,
    title: "E-commerce Websites",
    desc: "Aenean urna dictum adipiscing nec, cras quisque. Nunc in odio ultricies ornare ornare nunc venenatis mauris."
  },
  {
    icon: site,
    title: "Content-rich Websites",
    desc: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt."
  },
  {
    icon: suitcase,
    title: "B2B / B2C Services",
    desc: "Viverra scelerisque consequat net. Adipiscing esse consequat."
  },
  {
    icon: rocket,
    title: "Startup Projects",
    desc: "Aute eiusmod dolore dolore deserunt veniam ad deserunt."
  }
];

// export default function Market() {
//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Markets in which we operate</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {markets.map((item, index) => (
//             <div
//               key={index}
//               className="text-center p-6 rounded-lg transition-colors duration-200"
//             >
//               <div className="flex justify-center mb-4">
//                 <img 
//                   src={item.icon} 
//                   alt={item.title} 
//                   className="w-8 h-8 text-[#7772F1]" 
//                 />
//               </div>
//               <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
//               <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



export default function Market() {
  return (
    <div className="bg-white py-20 px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Markets in which we operate</h2>

        <div className="flex justify-center items-center">
          {markets.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className="text-center p-6 rounded-lg transition-colors duration-200"
                style={{ flex: '1' }} // чтобы элементы равномерно занимали пространство
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 text-[#7772F1]"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>

              {/* Divider между элементами, кроме последнего */}
              {index !== markets.length - 1 && (
                <img
                  src={divider}
                  alt="divider"
                  className="h-32 mx-2 self-center"
                  style={{ flexShrink: 0 }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
