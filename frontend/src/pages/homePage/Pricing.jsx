// src/pages/HomePage/Pricing.jsx
import React, { useState } from 'react';

export default function Pricing() {
  const [period, setPeriod] = useState('monthly'); // 'monthly' or 'yearly'

  // Базовые цены в месяц
  const basePrices = {
    basic: 24,
    optimal: 64,
    premium: 98,
  };

  // Вычисляем цену в зависимости от периода
  const getPrice = (planKey) => {
    const base = basePrices[planKey];
    if (period === 'monthly') {
      return { value: base, suffix: '/mon' };
    }
    // Yearly: price * 12 * 0.88 (12% discount)
    const yearly = Math.round(base * 12 * 0.88);
    return { value: yearly, suffix: '/year' };
  };

  const plans = [
    {
      key: 'basic',
      name: "Basic",
      features: [
        "Advanced Analytics",
        "Change Management",
        "Corporate Finance",
        "One Way Link Building",
        "Social Media Marketing",
        "× Strategy & Marketing",
        "× Information Technology"
      ],
      highlighted: false,
      bg: "bg-white",
      text: "text-gray-900",
      border: "border-gray-200",
      buttonBg: "bg-[#7772F1]",
      buttonHover: "hover:bg-[#6a65e5]",
    },
    {
      key: 'optimal',
      name: "Optimal",
      features: [
        "Advanced Analytics",
        "Change Management",
        "Corporate Finance",
        "One Way Link Building",
        "Social Media Marketing",
        "Strategy & Marketing",
        "× Information Technology"
      ],
      highlighted: true,
      bg: "bg-[#1E212C]",
      text: "text-white",
      border: "border-transparent",
      buttonBg: "bg-[#7772F1]",
      buttonHover: "hover:bg-[#6a65e5]",
    },
    {
      key: 'premium',
      name: "Premium",
      features: [
        "Advanced Analytics",
        "Change Management",
        "Corporate Finance",
        "One Way Link Building",
        "Social Media Marketing",
        "Strategy & Marketing",
        "Information Technology"
      ],
      highlighted: false,
      bg: "bg-white",
      text: "text-gray-900",
      border: "border-gray-200",
      buttonBg: "bg-[#7772F1]",
      buttonHover: "hover:bg-[#6a65e5]",
    },
  ];

  const monthlyPrice = getPrice('basic').value;
  const yearlyPrice = Math.round(monthlyPrice * 12 * 0.88);

  return (
    <div className="bg-white py-20 px-8">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Flexible pricing plans</h2>

        {/* Переключатель */}
        {/* <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-gray-100 p-1">
            <button
              onClick={() => setPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                period === 'monthly'
                  ? 'bg-[#7772F1] text-white'
                  : 'bg-white text-[#7772F1]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                period === 'yearly'
                  ? 'bg-[#7772F1] text-white'
                  : 'bg-white text-[#7772F1]'
              }`}
            >
              Yearly <span className="text-white">-12% OFF</span>
            </button>
          </div>
        </div> */}


{/* Переключатель — низкий и широкий */}
<div className="flex justify-center mb-8">
  <div className="relative inline-flex rounded-full bg-gray-100 border border-gray-200 w-[360px] h-8">
    {/* Левая часть — Monthly */}
    <button
      onClick={() => setPeriod('monthly')}
      className={`absolute inset-y-0 left-0 w-1/2 flex items-center justify-center text-xs font-medium transition-colors duration-200 cursor-pointer ${
        period === 'monthly'
          ? 'bg-[#7772F1] text-white rounded-l-full'
          : 'bg-white text-[#7772F1] rounded-l-full'
      }`}
    >
      Monthly
    </button>

    {/* Правая часть — Yearly */}
    {/* <button
      onClick={() => setPeriod('yearly')}
      className={`absolute inset-y-0 right-0 w-1/2 flex items-center justify-center text-xs font-medium transition-colors duration-200 cursor-pointer ${
        period === 'yearly'
          ? 'bg-[#7772F1] text-white rounded-r-full'
          : 'bg-white text-[#7772F1] rounded-r-full'
      }`}
    >
      Yearly <span className="text-indigo-400">-12% OFF</span>
    </button> */}

    <button
  onClick={() => setPeriod('yearly')}
  className={`absolute inset-y-0 right-0 w-1/2 flex items-center justify-center text-xs font-medium transition-colors duration-200 cursor-pointer ${
    period === 'yearly'
      ? 'bg-[#7772F1] text-white rounded-r-full'
      : 'bg-white text-[#7772F1] rounded-r-full'
  }`}
>
  Yearly{' '}
  <span className={period === 'yearly' ? 'text-white' : 'text-indigo-400'}>
    -12% OFF
  </span>
</button>
  </div>
</div>
       
        {/* Три карточки */}
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {plans.map((plan) => {
            const { value, suffix } = getPrice(plan.key);
            return (
              <div
                key={plan.key}
                className={`${plan.bg} ${plan.border} border rounded-xl p-8 w-full max-w-xs shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer`}
              >
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold ${plan.text}`}>{plan.name}</h3>
                  <div className="flex items-baseline justify-center mt-2">
                    <span className={`text-4xl font-bold ${
                      plan.highlighted ? 'text-[#03CEA4]' : plan.text
                    }`}>
                      ${value}
                    </span>
                    <span className={`ml-1 ${plan.text}`}>{suffix}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mt-1 mr-2 ${
                        feature.startsWith('×') 
                          ? 'text-gray-400' 
                          : plan.highlighted 
                            ? 'text-[#03CEA4]' 
                            : 'text-indigo-600'
                      }`}>
                        {feature.startsWith('×') ? '×' : '✓'}
                      </span>
                      <span className={plan.text}>{feature.replace(/^×\s*|✓\s*/g, '')}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`${plan.buttonBg} ${plan.buttonHover} text-white py-3 rounded-lg font-medium w-full transition-colors duration-200 cursor-pointer`}
                >
                  Choose plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


// // src/pages/HomePage/Pricing.jsx
// import React from 'react';

// export default function Pricing() {
//   const plans = [
//     {
//       name: "Basic",
//       price: "$24",
//       period: "/mon",
//       features: [
//         "Advanced Analytics",
//         "Change Management",
//         "Corporate Finance",
//         "One Way Link Building",
//         "Social Media Marketing",
//         "× Strategy & Marketing",
//         "× Information Technology"
//       ],
//       highlighted: false,
//       bg: "bg-white",
//       text: "text-gray-900",
//       border: "border-gray-200",
//       buttonBg: "bg-[#7772F1]",
//       buttonHover: "hover:bg-[#6a65e5]",
//     },
//     {
//       name: "Optimal",
//       price: "$64",
//       period: "/mon",
//       features: [
//         "Advanced Analytics",
//         "Change Management",
//         "Corporate Finance",
//         "One Way Link Building",
//         "Social Media Marketing",
//         "Strategy & Marketing",
//         "× Information Technology"
//       ],
//       highlighted: true,
//       bg: "bg-[#1E212C]",
//       text: "text-white",
//       border: "border-transparent",
//       buttonBg: "bg-[#7772F1]",
//       buttonHover: "hover:bg-[#6a65e5]",
//     },
//     {
//       name: "Premium",
//       price: "$98",
//       period: "/mon",
//       features: [
//         "Advanced Analytics",
//         "Change Management",
//         "Corporate Finance",
//         "One Way Link Building",
//         "Social Media Marketing",
//         "Strategy & Marketing",
//         "Information Technology"
//       ],
//       highlighted: false,
//       bg: "bg-white",
//       text: "text-gray-900",
//       border: "border-gray-200",
//       buttonBg: "bg-[#7772F1]",
//       buttonHover: "hover:bg-[#6a65e5]",
//     },
//   ];

//   return (
//     <div className="bg-white py-20 px-8">
//       <div className="container mx-auto max-w-7xl">
//         <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Flexible pricing plans</h2>

//         {/* Переключатель */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex rounded-full bg-gray-100 p-1">
//             <button className="px-6 py-2 rounded-full text-sm font-medium bg-white text-gray-900 shadow-sm">
//               Monthly
//             </button>
//             <button className="px-6 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900">
//               Yearly <span className="text-indigo-600">-12% OFF</span>
//             </button>
//           </div>
//         </div>

//         {/* Три карточки */}
//         <div className="flex flex-col lg:flex-row justify-center gap-8">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className={`${plan.bg} ${plan.border} border rounded-xl p-8 w-full max-w-xs shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer`}
//             >
//               <div className="text-center mb-6">
//                 <h3 className={`text-2xl font-bold ${plan.text}`}>{plan.name}</h3>
//                 <div className="flex items-baseline justify-center mt-2">
//                   <span className={`text-4xl font-bold ${plan.highlighted ? 'text-[#03CEA4]' : plan.text}`}>
//                     {plan.price}
//                   </span>
//                   <span className={`ml-1 ${plan.text}`}>{plan.period}</span>
//                 </div>
//               </div>

//               <ul className="space-y-3 mb-8">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-start">
//                     <span className={`mt-1 mr-2 ${
//                       feature.startsWith('×') 
//                         ? 'text-gray-400' 
//                         : plan.highlighted 
//                           ? 'text-[#03CEA4]' 
//                           : 'text-indigo-600'
//                     }`}>
//                       {feature.startsWith('×') ? '×' : '✓'}
//                     </span>
//                     <span className={plan.text}>{feature.replace(/^×\s*|✓\s*/g, '')}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button
//                 className={`${plan.buttonBg} ${plan.buttonHover} text-white py-3 rounded-lg font-medium w-full transition-colors duration-200 cursor-pointer`}
//               >
//                 Choose plan
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }