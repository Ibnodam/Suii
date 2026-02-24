// src/pages/HomePage/Benefits.jsx
import React from 'react';
import img from './pics/benefits/img.png';
import speaker from './pics/benefits/ic-speaker.png';
import todo from './pics/benefits/ic-todo.png';
import target from './pics/benefits/ic-target.png';
import chat from './pics/benefits/ic-chat.png';
import eye from './pics/benefits/ic-eye.png';
import like from './pics/benefits/ic-like.png';

const benefits = [
  { icon: speaker, title: "Social Advertising Experts", desc: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt." },
  { icon: target, title: "ROI Focused Campaigns", desc: "Cursus sit eu viverra suspendisse eu quisque enim est tortor. Mauris ornare convallis nisi diam imperdiet." },
  { icon: todo, title: "Monthly Reporting", desc: "Aenean urna dictum adipiscing nec, cras quisque. Nunc in odio ultricies ornare ornare nunc venenatis mauris." },
  { icon: chat, title: "Quality Customer Service", desc: "Sed nunc scelerisque ipsum accumsan, proin nunc euismod purus. Dictum tortor, pellentesque vel integer amet." },
  { icon: eye, title: "Complete SEO Transparency", desc: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Ve niam velit nostrud aliquip sunt." },
  { icon: like, title: "We're a True Partner", desc: "Quis sed malesuada tincidunt  elementum eu. Dui gravida id elementum dolor sed elementum, risus." },
];

export default function Benefits() {
  return (
    <div className="bg-white py-20 px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Our benefits</h2>

        {/* Три колонки: left | center | right */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Левая колонка: 3 карточки */}
          <div className="flex-1 flex flex-col gap-6">
            {benefits.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 text-transparent rounded-lg p-6 hover:bg-white hover:text-gray-900 transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex justify-center mb-4">
                  <img src={item.icon} alt={item.title} className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Центральная колонка: иллюстрация */}
          <div className="flex-1 flex justify-center">
            <img 
              src={img} 
              alt="Benefits illustration" 
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Правая колонка: 3 карточки */}
          <div className="flex-1 flex flex-col gap-6">
            {benefits.slice(3, 6).map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 text-transparent rounded-lg p-6 hover:bg-white hover:text-gray-900 transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex justify-center mb-4">
                  <img src={item.icon} alt={item.title} className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


// // src/pages/HomePage/Benefits.jsx
// import React from 'react';
// import img from './pics/benefits/img.png';
// import speaker from './pics/benefits/ic-speaker.png';
// import todo from './pics/benefits/ic-todo.png';
// import target from './pics/benefits/ic-target.png';
// import chat from './pics/benefits/ic-chat.png';
// import eye from './pics/benefits/ic-eye.png';
// import like from './pics/benefits/ic-like.png';

// const benefits = [
//   { icon: speaker, title: "Social Advertising Experts", desc: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt." },
//   { icon: target, title: "ROI Focused Campaigns", desc: "Cursus sit eu viverra suspendisse eu quisque enim est tortor. Mauris ornare convallis nisi diam imperdiet." },
//   { icon: todo, title: "Monthly Reporting", desc: "Aenean urna dictum adipiscing nec, cras quisque. Nunc in odio ultricies ornare ornare nunc venenatis mauris." },
//   { icon: chat, title: "Quality Customer Service", desc: "Sed nunc scelerisque ipsum accumsan, proin nunc euismod purus. Dictum tortor, pellentesque vel integer amet." },
//   { icon: eye, title: "Complete SEO Transparency", desc: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Ve niam velit nostrud aliquip sunt." },
//   { icon: like, title: "We're a True Partner", desc: "Quis sed malesuada tincidunt  elementum eu. Dui gravida id elementum dolor sed elementum, risus." },
// ];

// export default function Benefits() {
//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Our benefits</h2>

//         {/* Три колонки: left | center | right */}
//         <div className="flex flex-col lg:flex-row items-start gap-12">
//           {/* Левая колонка: 3 карточки */}
//           <div className="flex-1 flex flex-col gap-6">
//             {benefits.slice(0, 3).map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
//               >
//                 <div className="flex justify-center mb-4">
//                   <img src={item.icon} alt={item.title} className="w-10 h-10" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* Центральная колонка: иллюстрация */}
//           <div className="flex-1 flex justify-center">
//             <img 
//               src={img} 
//               alt="Benefits illustration" 
//               className="w-full max-w-md h-auto"
//             />
//           </div>

//           {/* Правая колонка: 3 карточки */}
//           <div className="flex-1 flex flex-col gap-6">
//             {benefits.slice(3, 6).map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
//               >
//                 <div className="flex justify-center mb-4">
//                   <img src={item.icon} alt={item.title} className="w-10 h-10" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// // src/pages/HomePage/Benefits.jsx
// import React from 'react';
// import img from './pics/benefits/img.png';
// import speaker from './pics/benefits/ic-speaker.png';
// import todo from './pics/benefits/ic-todo.png';
// import target from './pics/benefits/ic-target.png';
// import chat from './pics/benefits/ic-chat.png';
// import eye from './pics/benefits/ic-eye.png';
// import like from './pics/benefits/ic-like.png';

// const benefits = [
//   { icon: speaker, title: "Social Advertising Experts", desc: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt." },
//   { icon: target, title: "ROI Focused Campaigns", desc: "Cursus sit eu viverra suspendisse eu quisque enim est tortor. Mauris ornare convallis nisi diam imperdiet." },
//   { icon: todo, title: "Monthly Reporting", desc: "Aenean urna dictum adipiscing nec, cras quisque. Nunc in odio ultricies ornare ornare nunc venenatis mauris." },
//   { icon: chat, title: "Quality Customer Service", desc: "Sed nunc scelerisque ipsum accumsan, proin nunc euismod purus. Dictum tortor, pellentesque vel integer amet." },
//   { icon: eye, title: "Complete SEO Transparency", desc: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Ve niam velit nostrud aliquip sunt." },
//   { icon: like, title: "We're a True Partner", desc: "Quis sed malesuada tincidunt amet, vitae mi justo elementum eu. Dui gravida id elementum dolor sed elementum, risus." },
// ];

// export default function Benefits() {
//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Our benefits</h2>

//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Центральная иллюстрация */}
//           <div className="flex-1 flex justify-center">
//             <img 
//               src={img} 
//               alt="Benefits illustration" 
//               className="w-full max-w-md h-auto"
//             />
//           </div>

//           {/* Карточки — 3 слева, 3 справа */}
//           <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
//             {benefits.map((item, index) => (
//               <div 
//                 key={index}
//                 className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
//               >
//                 <div className="flex justify-center mb-4">
//                   <img src={item.icon} alt={item.title} className="w-10 h-10" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // import img from './pics/benefits/img.png'; // главная иллюстрация по середине
// // import speaker from './pics/benefits/ic-speaker.png';
// // import todo from './pics/benefits/ic-todo.png';
// // import target from './pics/benefits/ic-target.png';
// // import chat from './pics/benefits/ic-chat.png';
// // import eye from './pics/benefits/ic-eye.png'
// // import like from './pics/benefits/ic-like.png';

