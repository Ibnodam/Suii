import puzzle from './pics/second/ic-puzzle.png'
import graph from './pics/second/ic-graph.png'
import target from './pics/second/ic-target.png'
import chart from './pics/second/ic-chart.png'
import speaker from './pics/second/ic-speaker.png'
import analysis from './pics/second/ic-analysis.png'

export default function Second() {
  const services = [
    { icon: puzzle, title: "SEO Strategy", text: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt." },
    { icon: graph, title: "Competitor Analysis", text: "Nulla id egestas accumsan consequat tincidunt. Urna nisi, nec sed massa pharetra duis ut porttitor." },
    { icon: target, title: "Technical Audit", text: "Congue viverra in quis urna lectus proin massa. Aliquam, justo nisl sed diam nibh vehicula." },
    { icon: chart, title: "Content Strategy", text: "Posuere sed quam etiam semper id id euismod. Feugiat cras donec elementum interdum in." },
    { icon: speaker, title: "Media Promotion", text: "Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque." },
    { icon: analysis, title: "SEO Reports", text: "Congue phasellus est, amet sem bibendum sollicitudin arcu scelerisque senectus. Mauris, mus tincidunt a, nisi." }
  ]

  return (
    <section className="bg-white py-24">
      <div className="max-w-300 mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-[#1E212C] mb-16">
          SEO services include
        </h2>

        <div className="grid grid-cols-3">

          {services.map((item, index) => {
            const isRightBorder = index % 3 !== 2
            const isBottomBorder = index < 3

            return (
              <div
                key={index}
                className={`
                  p-12
                  ${isRightBorder ? "border-r border-[#E5E8ED]" : ""}
                  ${isBottomBorder ? "border-b border-[#E5E8ED]" : ""}
                `}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-6"
                />

                <h3 className="text-lg font-semibold text-[#1E212C] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}




// import puzzle from './pics/second/ic-puzzle.png'
// import graph from './pics/second/ic-graph.png'
// import target from './pics/second/ic-target.png'
// import chart from './pics/second/ic-chart.png'
// import speaker from './pics/second/ic-speaker.png'
// import analysis from './pics/second/ic-analysis.png'

// export default function Second() {
//   const services = [
//     {
//       icon: puzzle,
//       title: "SEO Strategy",
//       text: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt."
//     },
//     {
//       icon: graph,
//       title: "Competitor Analysis",
//       text: "Nulla id egestas accumsan consequat tincidunt. Urna nisi, nec sed massa pharetra duis ut porttitor."
//     },
//     {
//       icon: target,
//       title: "Technical Audit",
//       text: "Congue viverra in quis urna lectus proin massa. Aliquam, justo nisl sed diam nibh vehicula."
//     },
//     {
//       icon: chart,
//       title: "Content Strategy",
//       text: "Posuere sed quam etiam semper id id euismod. Feugiat cras donec elementum interdum in."
//     },
//     {
//       icon: speaker,
//       title: "Media Promotion",
//       text: "Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque."
//     },
//     {
//       icon: analysis,
//       title: "SEO Reports",
//       text: "Congue phasellus est, amet sem bibendum sollicitudin arcu scelerisque senectus. Mauris, mus tincidunt a, nisi."
//     }
//   ]

//   return (
//     <section className="bg-[#F4F5F7] py-24">
      
//       <div className="max-w-[1200px] mx-auto px-8">

//         {/* Заголовок */}
//         <h2 className="text-4xl font-bold text-center text-[#1E212C] mb-16">
//           SEO services include
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-3 divide-x divide-y divide-gray-200">

//           {services.map((item, index) => (
//             <div
//               key={index}
//               className="p-12 flex flex-col"
//             >
//               <img
//                 src={item.icon}
//                 alt={item.title}
//                 className="w-12 h-12 mb-6"
//               />

//               <h3 className="text-lg font-semibold text-[#1E212C] mb-4">
//                 {item.title}
//               </h3>

//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {item.text}
//               </p>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   )
// }


// import puzzle from './pics/second/ic-puzzle.png'
// import graph from './pics/second/ic-graph.png'
// import target from './pics/second/ic-target.png'
// import chart from './pics/second/ic-chart.png'
// import speaker from './pics/second/ic-speaker.png'
// import analysis from './pics/second/ic-analysis.png'

// export default function Second() {}