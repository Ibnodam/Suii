import dots from './pics/top/dots-right-illustration.png'
import home from './pics/top/home.png'
import leftIllustration from './pics/top/left-illustration.png'

export default function Top() {
  return (
    <section className="relative overflow-hidden text-white">

      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E212C] via-[#232441] to-[#1E212C]"></div>

      {/* Левая иллюстрация */}
      <img
        src={leftIllustration}
        alt=""
        className="absolute left-0 bottom-0 opacity-40 pointer-events-none"
      />

      {/* Правая иллюстрация */}
      <img
        src={dots}
        alt=""
        className="absolute right-0 top-0 opacity-40 pointer-events-none"
      />

      {/* Контент */}
      <div className="relative max-w-[900px] mx-auto px-8 py-28 text-center">

        {/* Breadcrumbs */}
        <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8">
          <img src={home} alt="home" className="w-4 h-4" />
          <span>›</span>
          <span>Services</span>
          <span>›</span>
          <span className="text-white">Search Engine Optimization</span>
        </div>

        {/* Заголовок */}
        <h1 className="text-5xl font-bold mb-6">
          Search Engine Optimization
        </h1>

        {/* Подзаголовок */}
        <p className="text-white/60 max-w-[700px] mx-auto mb-10">
          Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui pellentesque enim integer
          facilisi. Ultrices vitae tempor amet nec euismod non.
        </p>

        {/* Форма */}
        <div className="max-w-[600px] mx-auto">
          <label className="block text-left text-white/60 text-sm mb-2">
            Your website URL
          </label>

          <div className="flex">
            <input
              type="text"
              placeholder="http://yoursite.com"
              className="flex-1 px-4 py-3 bg-white/10 text-white placeholder-white/40 border border-white/20 rounded-l focus:outline-none focus:border-white"
            />

            <button
              className="px-6 bg-[#7772F1] hover:bg-[#6a65e5] transition-colors rounded-r font-medium"
            >
              Analyse your site
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}


// // src/pages/OurServicesPage/Top.jsx
// import React from 'react';
// import dots from './pics/top/dots-right-illustration.png';
// import home from './pics/top/home.png';
// import leftIllustration from './pics/top/left-illustration.png';

// export default function Top() {
//   return (
//     <div
//       className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#1E212C] via-[#232441] to-[#1E212C] px-4"
//       style={{
//         background: 'linear-gradient(90deg, #1E212C 0%, #232441 50%, #1E212C 100%)',
//         backgroundImage: `
//           url(${leftIllustration}),
//           url(${dots})
//         `,
//         backgroundPosition: 'left center, right bottom',
//         backgroundSize: 'auto 100%, auto 60%',
//         backgroundRepeat: 'no-repeat, no-repeat',
//         opacity: '0.2'
//       }}
//     >
//       {/* Хлебные крошки */}
//       <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
//         <img src={home} alt="Home" className="w-4 h-4 text-gray-400" />
//         <span className="text-gray-400">/</span>
//         <span className="text-gray-400">Services</span>
//         <span className="text-gray-400">/</span>
//         <span className="text-white font-medium">Search Engine Optimization</span>
//       </div>

//       {/* Контент */}
//       <div className="text-center max-w-3xl">
//         <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//           Search Engine Optimization
//         </h1>

//         <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
//           Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui pellentesque enim integer facilisi. Ultrices vitae tempor amet nec euismod non.
//         </p>

//         {/* Форма */}
//         <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
//           <input
//             type="url"
//             placeholder="http://yoursite.com"
//             className="flex-1 px-5 py-4 bg-[#2D2F3D] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7772F1] focus:border-transparent"
//           />
//           <button
//             className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-4 rounded-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
//           >
//             Analyse your site
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import dots from './pics/top/dots-right-illustration.png'
// import home from './pics/top/home.png'
// import leftIllustration from './pics/top/left-illustration.png'

// export default function Top() {}