import React, { useState, useRef, useEffect } from 'react';
import OpinionCard from './OpinionCard';
import shade from './shade.png';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi.",
    author: "Courtney Alexander",
    role: "CEO, TechStart Inc."
  },
  {
    text: "Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
    author: "Marcus Reed",
    role: "Marketing Director, NovaGroup"
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Sophia Chen",
    role: "Founder, GrowthLab"
  }
];

export default function ClientsOpinion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const sliderContainerRef = useRef(null);

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = 1020;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  const next = () => {
    scrollToIndex((currentIndex + 1) % testimonials.length);
  };

  const prev = () => {
    scrollToIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Синхронизация currentIndex при скролле
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const cardWidth = 1020;
      const scrollPosition = scrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < testimonials.length) {
        setCurrentIndex(newIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex]);

  return (
    <div className="bg-white py-20 px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
          What our clients say
        </h2>

        <div className="relative" ref={sliderContainerRef}>
          {/* Фоновая фигура shade.png */}
          <div 
            className="absolute pointer-events-none"
            style={{
              width: '900px',
              height: '500px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
            }}
          >
            <img 
              src={shade} 
              alt="" 
              className="w-full h-full object-contain opacity-60"
              aria-hidden="true"
            />
          </div>

          {/* Стрелка назад */}
          <button
            onClick={prev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#7772F1] hover:text-white text-2xl font-extrabold cursor-pointer transition-all duration-200 z-20"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          {/* Контейнер со скроллом - убран фон */}
          <div 
            ref={scrollRef}
            className="overflow-x-hidden mx-auto relative bg-white"
            style={{ 
              maxWidth: '1020px',
              scrollBehavior: 'smooth',
              zIndex: 1,
            }}
          >
            <div className="flex bg-white">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-shrink-0" style={{ width: '1020px' }}>
                  <OpinionCard
                    testimonial={item}
                    isActive={index === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Стрелка вперёд */}
          <button
            onClick={next}
            className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-black text-2xl font-extrabold hover:bg-[#7772F1] hover:text-white cursor-pointer transition-all duration-200 z-20"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Индикаторы */}
        {/* <div className="flex justify-center gap-2 mt-8 relative z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-[#7772F1]' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}


// import React, { useState, useRef, useEffect } from 'react';
// import OpinionCard from './OpinionCard';
// import shade from './shade.png';

// const testimonials = [
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi.",
//     author: "Courtney Alexander",
//     role: "CEO, TechStart Inc."
//   },
//   {
//     text: "Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
//     author: "Marcus Reed",
//     role: "Marketing Director, NovaGroup"
//   },
//   {
//     text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     author: "Sophia Chen",
//     role: "Founder, GrowthLab"
//   }
// ];

// export default function ClientsOpinion() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollRef = useRef(null);
//   const sliderContainerRef = useRef(null);

//   const scrollToIndex = (index) => {
//     if (!scrollRef.current) return;
//     const cardWidth = 1020; // Изменено с 720 на 1020
//     scrollRef.current.scrollTo({
//       left: index * cardWidth,
//       behavior: 'smooth'
//     });
//     setCurrentIndex(index);
//   };

//   const next = () => {
//     scrollToIndex((currentIndex + 1) % testimonials.length);
//   };

//   const prev = () => {
//     scrollToIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   // Синхронизация currentIndex при скролле
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!scrollRef.current) return;
//       const cardWidth = 1020; // Изменено с 720 на 1020
//       const scrollPosition = scrollRef.current.scrollLeft;
//       const newIndex = Math.round(scrollPosition / cardWidth);
//       if (newIndex !== currentIndex && newIndex >= 0 && newIndex < testimonials.length) {
//         setCurrentIndex(newIndex);
//       }
//     };

//     const scrollContainer = scrollRef.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener('scroll', handleScroll);
//       return () => scrollContainer.removeEventListener('scroll', handleScroll);
//     }
//   }, [currentIndex]);

//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-7xl"> {/* Изменено с max-w-6xl на max-w-7xl для большей ширины */}
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
//           What our clients say
//         </h2>

//         <div className="relative" ref={sliderContainerRef}>
//           {/* Фоновая фигура shade.png */}
//           <div 
//             className="absolute pointer-events-none"
//             style={{
//               width: '900px',
//               height: '500px',
//               left: '50%',
//               top: '50%',
//               transform: 'translate(-50%, -50%)',
//               zIndex: 0,
//             }}
//           >
//             <img 
//               src={shade} 
//               alt="" 
//               className="w-full h-full object-contain opacity-60"
//               aria-hidden="true"
//             />
//           </div>

//           {/* Стрелка назад */}
//           <button
//             onClick={prev}
//             className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#7772F1] flex items-center justify-center text-[#7772F1] hover:bg-[#7772F1] hover:text-white text-xl cursor-pointer transition-all duration-200 z-20 shadow-lg"
//             aria-label="Previous testimonial"
//           >
//             ←
//           </button>

//           {/* Контейнер со скроллом */}
//           <div 
//             ref={scrollRef}
//             className="overflow-x-hidden mx-auto relative"
//             style={{ 
//               maxWidth: '1020px', // Изменено с 720px на 1020px
//               scrollBehavior: 'smooth',
//               zIndex: 1
//             }}
//           >
//             <div className="flex">
//               {testimonials.map((item, index) => (
//                 <div key={index} className="flex-shrink-0" style={{ width: '1020px' }}> {/* Изменено с 720px на 1020px */}
//                   <OpinionCard
//                     testimonial={item}
//                     isActive={index === currentIndex}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Стрелка вперёд */}
//           <button
//             onClick={next}
//             className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#7772F1] flex items-center justify-center text-[#7772F1] hover:bg-[#7772F1] hover:text-white text-xl cursor-pointer transition-all duration-200 z-20 shadow-lg"
//             aria-label="Next testimonial"
//           >
//             →
//           </button>
//         </div>

//         {/* Индикаторы */}
//         {/* <div className="flex justify-center gap-2 mt-8 relative z-10">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => scrollToIndex(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentIndex 
//                   ? 'w-8 bg-[#7772F1]' 
//                   : 'w-2 bg-gray-300 hover:bg-gray-400'
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// }



// import React, { useState, useRef, useEffect } from 'react';
// import OpinionCard from './OpinionCard';
// import shade from './shade.png';

// const testimonials = [
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi.",
//     author: "Courtney Alexander",
//     role: "CEO, TechStart Inc."
//   },
//   {
//     text: "Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
//     author: "Marcus Reed",
//     role: "Marketing Director, NovaGroup"
//   },
//   {
//     text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     author: "Sophia Chen",
//     role: "Founder, GrowthLab"
//   }
// ];

// export default function ClientsOpinion() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollRef = useRef(null);
//   const sliderContainerRef = useRef(null);

//   const scrollToIndex = (index) => {
//     if (!scrollRef.current) return;
//     const cardWidth = 720;
//     scrollRef.current.scrollTo({
//       left: index * cardWidth,
//       behavior: 'smooth'
//     });
//     setCurrentIndex(index);
//   };

//   const next = () => {
//     scrollToIndex((currentIndex + 1) % testimonials.length);
//   };

//   const prev = () => {
//     scrollToIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   // Синхронизация currentIndex при скролле
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!scrollRef.current) return;
//       const cardWidth = 720;
//       const scrollPosition = scrollRef.current.scrollLeft;
//       const newIndex = Math.round(scrollPosition / cardWidth);
//       if (newIndex !== currentIndex && newIndex >= 0 && newIndex < testimonials.length) {
//         setCurrentIndex(newIndex);
//       }
//     };

//     const scrollContainer = scrollRef.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener('scroll', handleScroll);
//       return () => scrollContainer.removeEventListener('scroll', handleScroll);
//     }
//   }, [currentIndex]);

//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-6xl">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
//           What our clients say
//         </h2>

//         <div className="relative" ref={sliderContainerRef}>
//           {/* Фоновая фигура shade.png - теперь позиционируется относительно слайдера */}
//           <div 
//             className="absolute pointer-events-none"
//             style={{
//               width: '900px',
//               height: '500px',
//               left: '50%',
//               top: '50%',
//               transform: 'translate(-50%, -50%)',
//               zIndex: 0,
//               marginLeft: '0', // Убираем возможные смещения
//             }}
//           >
//             <img 
//               src={shade} 
//               alt="" 
//               className="w-full h-full object-contain opacity-60"
//               aria-hidden="true"
//             />
//           </div>

//           {/* Стрелка назад */}
//           <button
//             onClick={prev}
//             className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#7772F1] hover:bg-[#7772F1] hover:text-white text-xl cursor-pointer transition-all duration-200 z-20 shadow-lg"
//             aria-label="Previous testimonial"
//           >
//             ←
//           </button>

//           {/* Контейнер со скроллом */}
//           <div 
//             ref={scrollRef}
//             className="overflow-x-hidden mx-auto relative"
//             style={{ 
//               maxWidth: '720px',
//               scrollBehavior: 'smooth',
//               zIndex: 1
//             }}
//           >
//             <div className="flex">
//               {testimonials.map((item, index) => (
//                 <div key={index} className="flex-shrink-0" style={{ width: '720px' }}>
//                   <OpinionCard
//                     testimonial={item}
//                     isActive={index === currentIndex}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Стрелка вперёд */}
//           <button
//             onClick={next}
//             className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#7772F1] hover:bg-[#7772F1] hover:text-white text-xl cursor-pointer transition-all duration-200 z-20 shadow-lg"
//             aria-label="Next testimonial"
//           >
//             →
//           </button>
//         </div>

//         {/* Индикаторы */}
//         <div className="flex justify-center gap-2 mt-8 relative z-10">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => scrollToIndex(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentIndex 
//                   ? 'w-8 bg-[#7772F1]' 
//                   : 'w-2 bg-gray-300 hover:bg-gray-400'
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useState, useRef, useEffect } from 'react';
// import OpinionCard from './OpinionCard';
// import shade from './shade.png';


// const testimonials = [
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi.",
//     author: "Courtney Alexander",
//     role: "CEO, TechStart Inc."
//   },
//   {
//     text: "Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
//     author: "Marcus Reed",
//     role: "Marketing Director, NovaGroup"
//   },
//   {
//     text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     author: "Sophia Chen",
//     role: "Founder, GrowthLab"
//   }
// ];

// export default function ClientsOpinion() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollRef = useRef(null);

//   const scrollToIndex = (index) => {
//     if (!scrollRef.current) return;
//     const cardWidth = 720;
//     scrollRef.current.scrollTo({
//       left: index * cardWidth,
//       behavior: 'smooth'
//     });
//     setCurrentIndex(index);
//   };

//   const next = () => {
//     scrollToIndex((currentIndex + 1) % testimonials.length);
//   };

//   const prev = () => {
//     scrollToIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   // Синхронизация currentIndex при скролле
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!scrollRef.current) return;
//       const cardWidth = 720;
//       const scrollPosition = scrollRef.current.scrollLeft;
//       const newIndex = Math.round(scrollPosition / cardWidth);
//       if (newIndex !== currentIndex && newIndex >= 0 && newIndex < testimonials.length) {
//         setCurrentIndex(newIndex);
//       }
//     };

//     const scrollContainer = scrollRef.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener('scroll', handleScroll);
//       return () => scrollContainer.removeEventListener('scroll', handleScroll);
//     }
//   }, [currentIndex]);

//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-6xl">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
//           What our clients say
//         </h2>

//         <div className="relative">
//           {/* Стрелка назад */}
//           <button
//             onClick={prev}
//             className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#7772F1] flex items-center justify-center text-[#7772F1] hover:bg-[#7772F1] hover:text-white text-xl cursor-pointer transition-all duration-200 z-10 shadow-lg"
//             aria-label="Previous testimonial"
//           >
//             ←
//           </button>

//           {/* Контейнер со скроллом */}
//           <div 
//             ref={scrollRef}
//             className="overflow-x-hidden mx-auto"
//             style={{ 
//               maxWidth: '720px', // Фиксированная ширина как у карточки
//               scrollBehavior: 'smooth',
//             }}
//           >
//             <div className="flex">
//               {testimonials.map((item, index) => (
//                 <div key={index} className="flex-shrink-0" style={{ width: '720px' }}>
//                   <OpinionCard
//                     testimonial={item}
//                     isActive={index === currentIndex}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Стрелка вперёд */}
//           <button
//             onClick={next}
//             className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#7772F1] flex items-center justify-center text-[#7772F1] hover:bg-[#7772F1] hover:text-white text-xl cursor-pointer transition-all duration-200 z-10 shadow-lg"
//             aria-label="Next testimonial"
//           >
//             →
//           </button>
//         </div>

//         {/* Индикаторы */}
//         <div className="flex justify-center gap-2 mt-8">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => scrollToIndex(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 index === currentIndex 
//                   ? 'w-8 bg-[#7772F1]' 
//                   : 'w-2 bg-gray-300 hover:bg-gray-400'
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }









// import React, { useState } from 'react';
// import OpinionCard from './OpinionCard';

// const testimonials = [
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi.",
//     author: "Courtney Alexander",
//     role: "CEO, TechStart Inc."
//   },
//   {
//     text: "Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
//     author: "Marcus Reed",
//     role: "Marketing Director, NovaGroup"
//   },
//   {
//     text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     author: "Sophia Chen",
//     role: "Founder, GrowthLab"
//   }
// ];

// export default function ClientsOpinion() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollRef = useRef(null);

//   const scrollToIndex = (index) => {
//     if (!scrollRef.current) return;
//     const cardWidth = 720; // min-width карточки
//     scrollRef.current.scrollLeft = index * cardWidth;
//     setCurrentIndex(index);
//   };

//   const next = () => {
//     scrollToIndex((currentIndex + 1) % testimonials.length);
//   };

//   const prev = () => {
//     scrollToIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-6xl">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">What our clients say</h2>

//         <div className="relative">
//           {/* Стрелка назад */}
//           <button
//             onClick={prev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-transparent border-2 border-transparent hover:border-[#7772F1] flex items-center justify-center text-[#7772F1] hover:bg-[#7772F1] text-xl cursor-pointer transition-all duration-200 z-10"
//             aria-label="Previous testimonial"
//           >
//             ←
//           </button>

//           {/* Контейнер со скроллом */}
//           <div 
//             ref={scrollRef}
//             className="overflow-x-hidden whitespace-nowrap mx-auto"
//             style={{ maxWidth: '100%', scrollBehavior: 'smooth' }}
//           >
//             {testimonials.map((item, index) => (
//               <OpinionCard
//                 key={index}
//                 testimonial={item}
//                 isActive={index === currentIndex}
//               />
//             ))}
//           </div>

//           {/* Стрелка вперёд */}
//           <button
//             onClick={next}
//             className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-transparent border-2 border-transparent hover:border-[#7772F1] flex items-center justify-center text-[#7772F1] hover:bg-[#7772F1] text-xl cursor-pointer transition-all duration-200 z-10"
//             aria-label="Next testimonial"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// const testimonials = [
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi.",
//     author: "Courtney Alexander",
//     role: "CEO, TechStart Inc."
//   },
//   {
//     text: "Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
//     author: "Marcus Reed",
//     role: "Marketing Director, NovaGroup"
//   },
//   {
//     text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     author: "Sophia Chen",
//     role: "Founder, GrowthLab"
//   }
// ];

// export default function ClientsOpinion() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const next = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prev = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const current = testimonials[currentIndex];

//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-4xl">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">What our clients say</h2>

//         <div className="relative">
//           {/* Стрелка назад */}
//           <button
//             onClick={prev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#7772F1] hover:bg-[#6a65e5] flex items-center justify-center text-white cursor-pointer transition-colors duration-200 z-10"
//             aria-label="Previous testimonial"
//           >
//             ←
//           </button>

//           {/* Карточка */}
//           <OpinionCard testimonial={current} />

//           {/* Стрелка вперёд */}
//           <button
//             onClick={next}
//             className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#7772F1] hover:bg-[#6a65e5] flex items-center justify-center text-white cursor-pointer transition-colors duration-200 z-10"
//             aria-label="Next testimonial"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import avatar from './avatar1.png'

// export default function ClientsOpinion() {

// }