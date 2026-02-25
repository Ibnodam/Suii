// src/pages/HomePage/CaseStudiesSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import CaseCard from './CaseCard';

const cases = [
  {
    id: 1,
    title: 'Charity organisation',
    desc: 'Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.',
    stats: [
      { value: '90%', label: 'Engagement', color: 'border-orange-500 text-orange-500' },
      { value: '100%', label: 'Deliverability', color: 'border-emerald-500 text-emerald-500' },
    ],
  },
  {
    id: 2,
    title: 'Oil & Gas Strategy',
    desc: 'Optimized technical SEO for industrial client — 200% growth in organic traffic.',
    stats: [
      { value: '200%', label: 'Growth in sales', color: 'border-cyan-500 text-cyan-500' },
      { value: '1,400', label: 'Target investors', color: 'border-indigo-500 text-indigo-500' },
    ],
  },
  {
    id: 3,
    title: 'Honey Realty',
    desc: 'Local SEO campaign boosted leads by 70% and online bookings by 200%.',
    stats: [
      { value: '70%', label: 'Open Rate', color: 'border-rose-500 text-rose-500' },
      { value: '200%', label: 'Growth in sales', color: 'border-amber-500 text-amber-500' },
    ],
  },
  {
    id: 4,
    title: 'TechStart Labs',
    desc: 'Full-funnel SEO + content strategy → 350% more qualified leads in 6 months.',
    stats: [
      { value: '350%', label: 'Leads', color: 'border-purple-500 text-purple-500' },
      { value: '89%', label: 'Retention', color: 'border-teal-500 text-teal-500' },
    ],
  },
];

export default function CaseStudiesSlider() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="bg-[#F4F5F6] py-20 px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Заголовок + кнопки навигации на одной линии */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Read our clients' case studies</h2>

          {/* Кнопки навигации */}
          <div className="flex gap-3">
            <button
              ref={navigationPrevRef}
              className="w-12 h-12 rounded-full text-2xl font-bold bg-transparent hover:bg-[#7772F1] hover:text-white hover:border-[#7772F1] flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              ref={navigationNextRef}
              className="w-12 h-12 rounded-full text-2xl font-bold bg-transparent hover:bg-[#7772F1] hover:text-white hover:border-[#7772F1] flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* Слайдер */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          className="mb-10"
        >
          {cases.map((item) => (
            <SwiperSlide key={item.id}>
              <CaseCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Нижняя строка с текстом и кнопкой View all */}
        <div className="flex items-center justify-center gap-10 mt-12">
          <span className="text-xl font-bold">Explore more case studies</span>
          <button className="px-6 py-3 bg-[#7772F1] hover:bg-[#6a65e5] text-white rounded-sm font-medium transition-colors cursor-pointer">
            View all case studies
          </button>
        </div>
      </div>
    </div>
  );
}


//....................работает нормально. ошибка в том что по 4 слайда выводит
// // src/pages/HomePage/CaseStudiesSlider.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// import CaseCard from './CaseCard';

// const cases = [
//   {
//     id: 1,
//     title: 'Charity organisation',
//     desc: 'Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.',
//     stats: [
//       { value: '90%', label: 'Engagement', color: 'border-orange-500 text-orange-500' },
//       { value: '100%', label: 'Deliverability', color: 'border-emerald-500 text-emerald-500' },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Oil & Gas Strategy',
//     desc: 'Optimized technical SEO for industrial client — 200% growth in organic traffic.',
//     stats: [
//       { value: '200%', label: 'Growth in sales', color: 'border-cyan-500 text-cyan-500' },
//       { value: '1,400', label: 'Target investors', color: 'border-indigo-500 text-indigo-500' },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Honey Realty',
//     desc: 'Local SEO campaign boosted leads by 70% and online bookings by 200%.',
//     stats: [
//       { value: '70%', label: 'Open Rate', color: 'border-rose-500 text-rose-500' },
//       { value: '200%', label: 'Growth in sales', color: 'border-amber-500 text-amber-500' },
//     ],
//   },
//   {
//     id: 4,
//     title: 'TechStart Labs',
//     desc: 'Full-funnel SEO + content strategy → 350% more qualified leads in 6 months.',
//     stats: [
//       { value: '350%', label: 'Leads', color: 'border-purple-500 text-purple-500' },
//       { value: '89%', label: 'Retention', color: 'border-teal-500 text-teal-500' },
//     ],
//   },
// ];

// export default function CaseStudiesSlider() {
//   return (
//     <div className="bg-[#F4F5F6] py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         {/* Заголовок + кнопки на одной линии */}
//         <div className="flex items-center justify-between mb-12">
//           <h2 className="text-3xl font-bold text-gray-900">Read our clients' case studies</h2>

//           {/* Кнопки управления — без фона, без границ */}
//           <div className="flex gap-3">
//             <button
//               className="custom-swiper-button-prev w-12 h-12 rounded-full text-2xl font-bold bg-transparent border-none text-gray-500 active:bg-[#7772F1] active:text-white flex items-center justify-center cursor-pointer transition-colors"
//               aria-label="Previous"
//             >
//               ←
//             </button>
//             <button
//               className="custom-swiper-button-next w-12 h-12 rounded-full text-2xl font-bold bg-transparent border-none text-gray-500 active:bg-[#7772F1] active:text-white flex items-center justify-center cursor-pointer transition-colors"
//               aria-label="Next"
//             >
//               →
//             </button>
//           </div>
//         </div>

//         {/* Слайдер */}
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={24}
//           slidesPerView={3}
//           loop={true}
//           navigation={{
//             prevEl: '.custom-swiper-button-prev',
//             nextEl: '.custom-swiper-button-next',
//           }}
//           className="mb-10"
//         >
//           {cases.map((item) => (
//             <SwiperSlide key={item.id} className="!w-[390px]">
//               <CaseCard item={item} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Кнопка внизу */}
//         <div className="text-center mt-12">
//           <button className="px-6 py-3 bg-[#7772F1] hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors cursor-pointer">
//             View all case studies
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// // src/pages/HomePage/CaseStudiesSlider.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// import CaseCard from './CaseCard';

// const cases = [
//   {
//     id: 1,
//     title: 'Charity organisation',
//     desc: 'Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.',
//     stats: [
//       { value: '90%', label: 'Engagement', color: 'border-orange-500 text-orange-500' },
//       { value: '100%', label: 'Deliverability', color: 'border-emerald-500 text-emerald-500' },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Oil & Gas Strategy',
//     desc: 'Optimized technical SEO for industrial client — 200% growth in organic traffic.',
//     stats: [
//       { value: '200%', label: 'Growth in sales', color: 'border-cyan-500 text-cyan-500' },
//       { value: '1,400', label: 'Target investors', color: 'border-indigo-500 text-indigo-500' },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Honey Realty',
//     desc: 'Local SEO campaign boosted leads by 70% and online bookings by 200%.',
//     stats: [
//       { value: '70%', label: 'Open Rate', color: 'border-rose-500 text-rose-500' },
//       { value: '200%', label: 'Growth in sales', color: 'border-amber-500 text-amber-500' },
//     ],
//   },
//   {
//     id: 4,
//     title: 'TechStart Labs',
//     desc: 'Full-funnel SEO + content strategy → 350% more qualified leads in 6 months.',
//     stats: [
//       { value: '350%', label: 'Leads', color: 'border-purple-500 text-purple-500' },
//       { value: '89%', label: 'Retention', color: 'border-teal-500 text-teal-500' },
//     ],
//   },
// ];

// export default function CaseStudiesSlider() {
//   return (
//     <div className="bg-gray-50 py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
//           Read our clients' case studies
//         </h2>

//         {/* Контейнер со слайдером и кнопками */}
//         <div className="relative">
//           {/* Слайдер — с overflow-visible, чтобы кнопки не обрезались */}
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={24}
//             slidesPerView={3}
//             loop={true}
//             navigation={{
//               prevEl: '.custom-swiper-button-prev',
//               nextEl: '.custom-swiper-button-next',
//             }}
//             className="mb-10"
//           >
//             {cases.map((item) => (
//               <SwiperSlide key={item.id} className="!w-[390px]">
//                 <CaseCard item={item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Кнопки управления — справа сверху, НАД слайдером */}
//           <button
//             className="custom-swiper-button-prev absolute top-0 right-0 w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 active:bg-[#7772F1] active:text-white transition-all duration-200 cursor-pointer shadow-sm z-10"
//             aria-label="Previous"
//           >
//             ←
//           </button>
//           <button
//             className="custom-swiper-button-next absolute top-0 right-14 w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 active:bg-[#7772F1] active:text-white transition-all duration-200 cursor-pointer shadow-sm z-10"
//             aria-label="Next"
//           >
//             →
//           </button>
//         </div>

//         <div className="text-center mt-12">
//           <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors cursor-pointer">
//             View all case studies
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // src/pages/HomePage/CaseStudiesSlider.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// import CaseCard from './CaseCard';

// const cases = [
//   {
//     id: 1,
//     title: 'Charity organisation',
//     desc: 'Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.',
//     stats: [
//       { value: '90%', label: 'Engagement', color: 'border-orange-500 text-orange-500' },
//       { value: '100%', label: 'Deliverability', color: 'border-emerald-500 text-emerald-500' },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Oil & Gas Strategy',
//     desc: 'Optimized technical SEO for industrial client — 200% growth in organic traffic.',
//     stats: [
//       { value: '200%', label: 'Growth in sales', color: 'border-cyan-500 text-cyan-500' },
//       { value: '1,400', label: 'Target investors', color: 'border-indigo-500 text-indigo-500' },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Honey Realty',
//     desc: 'Local SEO campaign boosted leads by 70% and online bookings by 200%.',
//     stats: [
//       { value: '70%', label: 'Open Rate', color: 'border-rose-500 text-rose-500' },
//       { value: '200%', label: 'Growth in sales', color: 'border-amber-500 text-amber-500' },
//     ],
//   },
//   {
//     id: 4,
//     title: 'TechStart Labs',
//     desc: 'Full-funnel SEO + content strategy → 350% more qualified leads in 6 months.',
//     stats: [
//       { value: '350%', label: 'Leads', color: 'border-purple-500 text-purple-500' },
//       { value: '89%', label: 'Retention', color: 'border-teal-500 text-teal-500' },
//     ],
//   },
// ];

// export default function CaseStudiesSlider() {
//   return (
//     <div className="bg-gray-50 py-20 px-8 relative">
//       <div className="container mx-auto max-w-7xl">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
//           Read our clients' case studies
//         </h2>

//         {/* Слайдер */}
//         <div className="relative">
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={24}
//             slidesPerView={3}
//             loop={true} // ← цикличный слайдер!
//             navigation={{
//               prevEl: '.custom-swiper-button-prev',
//               nextEl: '.custom-swiper-button-next',
//             }}
//             className="mb-10"
//           >
//             {cases.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <CaseCard item={item} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Кнопки управления — справа сверху */}
//           <button
//             className="custom-swiper-button-prev absolute top-0 right-0 w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 active:bg-[#7772F1] active:text-white transition-all duration-200 cursor-pointer shadow-sm"
//             aria-label="Previous"
//           >
//             ←
//           </button>
//           <button
//             className="custom-swiper-button-next absolute top-0 right-12 w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 active:bg-[#7772F1] active:text-white transition-all duration-200 cursor-pointer shadow-sm"
//             aria-label="Next"
//           >
//             →
//           </button>
//         </div>

//         {/* Кнопка внизу */}
//         <div className="text-center mt-12">
//           <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors cursor-pointer">
//             View all case studies
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// // src/pages/HomePage/CaseStudiesSlider.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css/bundle';

// import CaseCard from './CaseCard';

// const cases = [
//   {
//     id: 1,
//     title: 'Charity organisation',
//     desc: 'Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.',
//     stats: [
//       { value: '90%', label: 'Engagement', color: 'border-orange-500 text-orange-500' },
//       { value: '100%', label: 'Deliverability', color: 'border-emerald-500 text-emerald-500' },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Oil & Gas Strategy',
//     desc: 'Optimized technical SEO for industrial client — 200% growth in organic traffic.',
//     stats: [
//       { value: '200%', label: 'Growth in sales', color: 'border-cyan-500 text-cyan-500' },
//       { value: '1,400', label: 'Target investors', color: 'border-indigo-500 text-indigo-500' },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Honey Realty',
//     desc: 'Local SEO campaign boosted leads by 70% and online bookings by 200%.',
//     stats: [
//       { value: '70%', label: 'Open Rate', color: 'border-rose-500 text-rose-500' },
//       { value: '200%', label: 'Growth in sales', color: 'border-amber-500 text-amber-500' },
//     ],
//   },
//   {
//     id: 4,
//     title: 'TechStart Labs',
//     desc: 'Full-funnel SEO + content strategy → 350% more qualified leads in 6 months.',
//     stats: [
//       { value: '350%', label: 'Leads', color: 'border-purple-500 text-purple-500' },
//       { value: '89%', label: 'Retention', color: 'border-teal-500 text-teal-500' },
//     ],
//   },
// ];

// export default function CaseStudiesSlider() {
//   return (
//     <div className="bg-gray-50 py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         <div className="flex items-center justify-between mb-12">
//           <h2 className="text-3xl font-bold text-gray-900">Read our clients' case studies</h2>
//           {/* Swiper управляет стрелками — их рендерит сам */}
//         </div>

//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={24}
//           slidesPerView={3}
//           navigation={{
//             prevEl: '.custom-swiper-button-prev',
//             nextEl: '.custom-swiper-button-next',
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="mb-10"
//         >
//           {cases.map((item) => (
//             <SwiperSlide key={item.id}>
//               <CaseCard item={item} />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Кастомные кнопки стрелок — без фона, при нажатии #7772F1 */}
//         <div className="flex justify-center gap-3 mb-12">
//           <button
//             className="custom-swiper-button-prev w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 active:bg-[#7772F1] active:text-white rounded transition-colors cursor-pointer"
//             aria-label="Previous"
//           >
//             ←
//           </button>
//           <button
//             className="custom-swiper-button-next w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 active:bg-[#7772F1] active:text-white rounded transition-colors cursor-pointer"
//             aria-label="Next"
//           >
//             →
//           </button>
//         </div>

//         <div className="text-center">
//           <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors cursor-pointer">
//             View all case studies
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// // src/pages/HomePage/CaseStudiesSlider.jsx
// import React, { useState } from 'react';
// import CaseCard from './CaseCard';

// const cases = [
//   {
//     id: 1,
//     title: 'Charity organisation',
//     desc: 'Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.',
//     stats: [
//       { value: '90%', label: 'Engagement', color: 'border-orange-500 text-orange-500' },
//       { value: '100%', label: 'Deliverability', color: 'border-emerald-500 text-emerald-500' },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Oil & Gas Strategy',
//     desc: 'Optimized technical SEO for industrial client — 200% growth in organic traffic.',
//     stats: [
//       { value: '200%', label: 'Growth in sales', color: 'border-cyan-500 text-cyan-500' },
//       { value: '1,400', label: 'Target investors', color: 'border-indigo-500 text-indigo-500' },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Honey Realty',
//     desc: 'Local SEO campaign boosted leads by 70% and online bookings by 200%.',
//     stats: [
//       { value: '70%', label: 'Open Rate', color: 'border-rose-500 text-rose-500' },
//       { value: '200%', label: 'Growth in sales', color: 'border-amber-500 text-amber-500' },
//     ],
//   },
// ];

// export default function CaseStudiesSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const next = () => {
//     setCurrentIndex((prev) => (prev + 1) % cases.length);
//   };

//   const prev = () => {
//     setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
//   };

//   return (
//     <div className="bg-gray-50 py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         <div className="flex items-center justify-between mb-12">
//           <h2 className="text-3xl font-bold text-gray-900">Read our clients' case studies</h2>
//           <div className="flex gap-3">
//             <button
//               onClick={prev}
//               className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer transition-colors"
//               aria-label="Previous"
//             >
//               ←
//             </button>
//             <button
//               onClick={next}
//               className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center cursor-pointer transition-colors"
//               aria-label="Next"
//             >
//               →
//             </button>
//           </div>
//         </div>

//         {/* Слайдер */}
//         <div className="relative overflow-hidden rounded-xl">
//           <div 
//             className="flex transition-transform duration-500"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {cases.map((item) => (
//               <div key={item.id} className="w-full flex-shrink-0 px-2">
//                 <CaseCard item={item} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Кнопка */}
//         <div className="mt-12 text-center">
//           <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors cursor-pointer">
//             View all case studies
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// // src/pages/HomePage/CaseStudiesSlider.jsx
// import React, { useState } from 'react';

// // Пример данных (можно потом заменить на реальные)
// const cases = [
//   {
//     id: 1,
//     logo: 'national.png',
//     title: 'Charity organisation',
//     desc: 'Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.',
//     stats: [
//       { value: '90%', label: 'Engagement', color: 'border-orange-500 text-orange-500' },
//       { value: '100%', label: 'Deliverability', color: 'border-emerald-500 text-emerald-500' },
//     ],
//   },
//   {
//     id: 2,
//     logo: 'oil.png',
//     title: 'Oil & Gas Strategy',
//     desc: 'Optimized technical SEO for industrial client — 200% growth in organic traffic.',
//     stats: [
//       { value: '200%', label: 'Growth in sales', color: 'border-cyan-500 text-cyan-500' },
//       { value: '1,400', label: 'Target investors', color: 'border-indigo-500 text-indigo-500' },
//     ],
//   },
//   {
//     id: 3,
//     logo: 'honey.png',
//     title: 'Honey Realty',
//     desc: 'Local SEO campaign boosted leads by 70% and online bookings by 200%.',
//     stats: [
//       { value: '70%', label: 'Open Rate', color: 'border-rose-500 text-rose-500' },
//       { value: '200%', label: 'Growth in sales', color: 'border-amber-500 text-amber-500' },
//     ],
//   },
// ];

// export default function CaseStudiesSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const next = () => {
//     setCurrentIndex((prev) => (prev + 1) % cases.length);
//   };

//   const prev = () => {
//     setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
//   };

//   return (
//     <div className="bg-gray-50 py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         <div className="flex items-center justify-between mb-12">
//           <h2 className="text-3xl font-bold text-gray-900">Read our clients' case studies</h2>
//           <div className="flex gap-3">
//             <button
//               onClick={prev}
//               className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer transition-colors"
//               aria-label="Previous"
//             >
//               ←
//             </button>
//             <button
//               onClick={next}
//               className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center cursor-pointer transition-colors"
//               aria-label="Next"
//             >
//               →
//             </button>
//           </div>
//         </div>

//         {/* Слайды */}
//         <div className="relative overflow-hidden rounded-xl">
//           <div 
//             className="flex transition-transform duration-500"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {cases.map((item) => (
//               <div key={item.id} className="w-full flex-shrink-0 px-2">
//                 <div className="bg-white rounded-lg shadow-sm p-6 max-w-xs mx-auto hover:shadow-md transition-shadow cursor-pointer">
//                   <div className="flex items-center mb-4">
//                     <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
//                       <span className="text-xs font-bold text-gray-600">{item.title.split(' ')[0].slice(0, 3)}</span>
//                     </div>
//                     <span className="ml-3 text-sm font-medium text-gray-700">{item.title}</span>
//                   </div>
//                   <p className="text-gray-600 text-sm mb-5">{item.desc}</p>
                  
//                   <div className="flex justify-between mb-5">
//                     {item.stats.map((stat, i) => (
//                       <div key={i} className="text-center">
//                         <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mx-auto ${stat.color} text-sm font-bold`}>
//                           {stat.value}
//                         </div>
//                         <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Кнопка внизу */}
//         <div className="mt-12 text-center">
//           <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors cursor-pointer">
//             View all case studies
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }