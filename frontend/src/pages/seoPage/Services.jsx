// src/pages/HomePage/About/Third.jsx
import React, { useState } from 'react';
import dashboard from './pics/services/dashboard.png';
import shade from './pics/services/bg-shape.png';

export default function Services() {
  const [activeTab, setActiveTab] = useState('social');

  // Данные для каждой вкладки
  const tabData = {
    social: {
      title: "Complete Workflow For Any SEO Professional",
      items: [
        "Aenean enim tellus morbi nisl vulputate dictumt.",
        "Nibh sapien volutpat lacus augue.",
        "Vel in amet, placerat adipiscing est pharetra.",
        "Gravida ornare sit in et ut sit sem id.",
        "Ultrices pellentesque dictum enim egestas ac diam."
      ]
    },
    seo: {
      title: "Advanced SEO Strategy & Execution",
      items: [
        "Technical audit and site optimization",
        "Keyword research with competitor gap analysis",
        "On-page SEO for high-converting pages",
        "Backlink profile building and outreach",
        "Performance tracking with custom dashboards"
      ]
    },
    research: {
      title: "Data-Driven Market Research",
      items: [
        "Audience segmentation and persona development",
        "Competitor benchmarking and SWOT analysis",
        "Trend forecasting using AI-powered tools",
        "UX research and conversion funnel mapping",
        "A/B testing strategy and execution"
      ]
    },
    content: {
      title: "High-Impact Content Marketing",
      items: [
        "Editorial calendar and content ideation",
        "SEO-optimized blog and pillar content",
        "Video scriptwriting and production briefs",
        "Email nurture sequences and lead magnets",
        "Repurposing strategy across platforms"
      ]
    },
    paid: {
      title: "Performance PPC & Paid Traffic",
      items: [
        "Google Ads, Meta, LinkedIn campaign setup",
        "Conversion-focused landing page A/B tests",
        "Audience targeting and retargeting rules",
        "Budget allocation and ROI forecasting",
        "Cross-channel attribution modeling"
      ]
    }
  };

  const tabs = [
    { id: 'social', label: 'Social Media' },
    { id: 'seo', label: 'SEO' },
    { id: 'research', label: 'Research' },
    { id: 'content', label: 'Content & PR' },
    { id: 'paid', label: 'Payed Traffic' },
  ];

  const data = tabData[activeTab];

  return (
    <div className="bg-white py-20 px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Заголовок — по центру */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our services</h2>

        {/* Табы — горизонтальные кнопки */}
        {/* <div className="flex justify-center mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 mx-1 rounded-lg font-medium transition-colors duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#7772F1] text-white'
                  : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-[#7772F1]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div> */}


          {/* Табы — как кнопки с border при активном */}
          <div className="flex justify-center mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 mx-1 rounded-[4px] font-medium transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-[#7772F1] border border-[#7772F1]'
                    : 'text-gray-600 border border-transparent hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        {/* Основной контент: подзаголовок + список + кнопки + дашборд */}
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Левая часть */}
          <div className="flex-1 max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">{data.title}</h3>

            <ul className="space-y-4 mb-8">
              {data.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-indigo-600 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="border border-[#7772F1] text-[#7772F1] px-6 py-3 rounded-[4px] hover:bg-[#7772F1] hover:text-white transition-colors duration-200 font-medium cursor-pointer">
                Learn more
              </button>
              <button className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-[4px] font-medium transition-colors duration-200 cursor-pointer">
                Try SEO toolkit
              </button>
            </div>
          </div>

          {/* Правая часть: дашборд */}
          <div className="relative flex-1">
            <div 
              className="absolute -left-16 -top-10 w-80 h-80 opacity-20"
              style={{ backgroundImage: `url(${shade})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
            />
            <img 
              src={dashboard} 
              alt="SEO Dashboard" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}



// // src/pages/HomePage/About/Third.jsx
// import React from 'react';
// import dashboard from './pics/dashboard.png';
// import shade from './pics/shade3.png';
// import sub from './pics/subscribe.png';
// import likes from './pics/likes.png';
// import folowers from './pics/followers.png';

// export default function Third() {
//   const features = [
//     "Aenean enim tellus morbi nisl vulputate dictumt.",
//     "Nibh sapien volutpat lacus augue.",
//     "Vel in amet, placerat adipiscing est pharetra.",
//     "Gravida ornare sit in et ut sit sem id.",
//     "Ultrices pellentesque dictum enim egestas ac diam.",
//     "Sit semper enim senectus integer ut turpis et."
//   ];

//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-7xl flex items-center gap-16">
//         {/* Левая часть: заголовок, список, кнопки */}
//         <div className="flex-1 max-w-2xl">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6">Our services</h2>
          
//           <h3 className="text-2xl font-bold text-gray-800 mb-8">
//             Complete Workflow For Any SEO Professional
//           </h3>

//           <ul className="space-y-4 mb-8">
//             {features.map((item, index) => (
//               <li key={index} className="flex items-start gap-3">
//                 <span className="text-indigo-600 mt-1">✓</span>
//                 <span className="text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="border border-[#7772F1] text-[#7772F1] px-6 py-3 rounded-lg hover:bg-[#7772F1] hover:text-white transition-colors duration-200 font-medium cursor-pointer">
//               Learn more
//             </button>
//             <button className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer">
//               Try SEO toolkit
//             </button>
//           </div>
//         </div>

//         {/* Правая часть: дашборд + фоновая фигура */}
//         <div className="relative flex-1">
//           {/* Фоновая фигура shade3 — за дашбордом, слева сверху */}
//           <div 
//             className="absolute -left-16 -top-10 w-80 h-80 opacity-20"
//             style={{ backgroundImage: `url(${shade})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
//           />

//           {/* Дашборд — крупное изображение */}
//           <img 
//             src={dashboard} 
//             alt="SEO Dashboard" 
//             className="w-full h-auto rounded-xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// import dashboard from './pics/dashboard.png'
// import sub from './pics/subscribe.png'
// import likes from './pics/likes.png'
// import folowers from './pics/followers.png'
// import shade from './pics/shade3.png'



