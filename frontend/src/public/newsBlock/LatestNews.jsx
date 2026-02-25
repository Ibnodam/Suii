import React from 'react';
import NewsCard from './NewsCard';

import img1 from './pic1.png';
import img2 from './pic2.png';

const newsItems = [
  {
    image: img1,
    category: "SEO",
    date: "July 5, 2020",
    author: "Diane Mccoy",
    title: "The Basics of Blogging Search Engine Optimization.",
    excerpt: "Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit..."
  },
  {
    image: img2,
    category: "Marketing",
    date: "July 2, 2020",
    author: "Diane Mccoy",
    title: "Advanced Strategies for Digital Campaigns",
    excerpt: "Discover how data-driven insights can transform your marketing ROI. Real case studies from 2025."
  }
];

export default function LatestNews() {
  return (
    <section className="bg-white py-20">
      
      {/* Центрированный контейнер */}
      <div className="max-w-[1400px] mx-auto px-8">
        
        {/* Главный flex */}
        <div className="flex justify-center items-start gap-[100px]">
          
          {/* Левая часть */}
          <div className="max-w-71">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Latest news
            </h2>

            <p className="text-gray-600 mb-8">
              Check more posts in our blog for featured news and advertising insights
            </p>

            <button className="px-6 py-3 bg-[#7772F1] hover:bg-[#6a65e5] text-white rounded-sm cursor-pointer font-medium transition-colors duration-200">
              Go to blog
            </button>
          </div>

          {/* Правая часть */}
          <div className="flex gap-8">
            {newsItems.map((item, index) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}





// // src/pages/HomePage/LatestNews.jsx
// import React from 'react';
// import NewsCard from './NewsCard';

// // Импортируем 2 фото (ты заменишь на свои)
//  import img1 from './pic1.png';
//  import img2 from './pic2.png';
// const newsItems = [
//   {
//     image: img1,
//     category: "SEO",
//     date: "July 5, 2020",
//     author: "Diane Mccoy",
//     title: "The Basics of Blogging Search Engine Optimization.",
//     excerpt: "Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit..."
//   },
//   {
//     image: img2,
//     category: "Marketing",
//     date: "July 2, 2020",
//     author: "Diane Mccoy",
//     title: "Advanced Strategies for Digital Campaigns",
//     excerpt: "Discover how data-driven insights can transform your marketing ROI. Real case studies from 2025."
//   }
// ];

// export default function LatestNews() {
//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         {/* Левая часть: заголовок + текст + кнопка */}
//         <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
//           <div className="md:w-1/2">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest news</h2>
//             <p className="text-gray-600 mb-6 max-w-71">
//               Check more posts in our blog for featured news and advertising insights
//             </p>
//             <button className="px-6 py-3 bg-[#7772F1] hover:bg-[#6a65e5] text-white rounded-lg font-medium transition-colors duration-200 cursor-pointer">
//               Go to blog
//             </button>
//           </div>

//           {/* Правая часть: 2 карточки в ряд */}
//           <div className="md:w-1/2 flex flex-col sm:flex-row gap-8">
//             {newsItems.map((item, index) => (
//               <NewsCard key={index} {...item} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// // src/pages/HomePage/LatestNews.jsx
// import React from 'react';
// import NewsCard from './NewsCard';

// // Импортируем 2 заглушечные картинки (ты заменишь на свои)
// import img1 from './pic1.png';
// import img2 from './pic2.png';

// const newsItems = [
//   {
//     image: img1,
//     category: "SEO",
//     date: "July 5, 2020",
//     author: "Diane Mccoy",
//     title: "The Basics of Blogging Search Engine Optimization.",
//     excerpt: "Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit..."
//   },
//   {
//     image: img2,
//     category: "Marketing",
//     date: "July 2, 2020",
//     author: "Diane Mccoy",
//     title: "Advanced Strategies for Digital Campaigns",
//     excerpt: "Discover how data-driven insights can transform your marketing ROI. Real case studies from 2025."
//   }
// ];

// export default function LatestNews() {
//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest news</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Check more posts in our blog for featured news and advertising insights
//           </p>
//           <button className="mt-6 px-6 py-3 bg-[#7772F1] hover:bg-[#6a65e5] text-white rounded-lg font-medium transition-colors duration-200 cursor-pointer">
//             Go to blog
//           </button>
//         </div>

//         {/* Две карточки — строго 390×507, в ряд */}
//         <div className="flex justify-center gap-8">
//           {newsItems.map((item, index) => (
//             <NewsCard key={index} {...item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





// // src/pages/HomePage/LatestNews.jsx
// import React from 'react';
// import NewsCard from './NewsCard';

// const newsItems = [
//   {
//     image: null, // пока без изображения (или подключи свою)
//     category: "SEO",
//     date: "July 5, 2020",
//     author: "Diane Mccoy",
//     title: "The Basics of Blogging Search Engine Optimization.",
//     excerpt: "Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit..."
//   },
//   {
//     image: null,
//     category: "Marketing",
//     date: "July 2, 2020",
//     author: "Diane Mccoy",
//     title: "The Basics of Blogging Search Engine Optimization.",
//     excerpt: "Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit..."
//   }
// ];

// export default function LatestNews() {
//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest news</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Check more posts in our blog for featured news and advertising insights
//           </p>
//           <button className="mt-6 px-6 py-3 bg-[#7772F1] hover:bg-[#6a65e5] text-white rounded-lg font-medium transition-colors duration-200 cursor-pointer">
//             Go to blog
//           </button>
//         </div>

//         {/* Две карточки в ряд */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {newsItems.map((item, index) => (
//             <NewsCard key={index} {...item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }