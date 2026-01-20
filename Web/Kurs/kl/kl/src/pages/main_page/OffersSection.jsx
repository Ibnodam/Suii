import card from './images/Карта лояльности.png';
import basket from './images/Basket offer.png';

export default function OfferSection() {
  return (
    <div className="bg-transparent py-6">
      {/* Заголовок */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Специальные предложения</h2>

      {/* Два блока в ряд */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Блок "Оформите карту" */}
        <div 
          className="flex-1 bg-[#FCD5BA] p-4 rounded-lg cursor-pointer hover:bg-[#FBC9A8] transition"
          role="button"
          tabIndex={0}
        >
          <div className="flex items-center gap-2"> 
            <div className="flex-1">
              <h3 className="font-bold text-3xl mb-2">Оформите карту<br/>«Северяночка»</h3>
              <p className="text-xl text-gray-700">
                И получайте бонусы при покупке<br/>в магазинах и на сайте
              </p>
            </div>
            <img 
              src={card} 
              alt="Карта лояльности «Северяночка»" 
              className="w-70 h-auto object-contain" 
            />
          </div>
        </div>

        {/* Блок "Покупайте акционные товары" */}
        <div 
          className="flex-1 bg-[#E5FFDE] p-4 rounded-lg cursor-pointer hover:bg-[#D9FAD0] transition"
          role="button"
          tabIndex={0}
        >
          <div className="flex items-center gap-2"> 
            <div className="flex-1">
              <h3 className="font-bold text-3xl mb-2">Покупайте<br/>акционные товары</h3>
              <p className="text-xl text-gray-700">
                И получайте вдвое больше<br/>бонусов
              </p>
            </div>
            <img 
              src={basket} 
              alt="Акционные товары" 
              className="w-55 h-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}


// // import card from './images/Карта лояльности.png'
// // import basket from './images/Basket offer.png'

// // export default function OfferSection(){
// //     return(
// //         <div></div>
// //     )
// // }



// import card from './images/Карта лояльности.png';
// import basket from './images/Basket offer.png';

// export default function OfferSection() {
//   return (
//     <div className="bg-transparent py-6">
//       {/* Заголовок */}
//       <h2 className="text-xl font-bold text-gray-800 mb-4">Специальные предложения</h2>

//       {/* Два блока в ряд */}
//       <div className="flex flex-col sm:flex-row gap-4">
//         {/* Блок "Оформите карту" */}
//         <div 
//           className="flex-1 bg-[#FCD5BA] p-4 rounded-lg cursor-pointer hover:bg-[#FBC9A8] transition"
//           role="button"
//           tabIndex={0}
//         >
//           <div className="flex items-start gap-4">
//             <div className="flex-1">
//               <h3 className="font-bold text-lg mb-2">Оформите карту<br/>«Северяночка»</h3>
//               <p className="text-sm text-gray-700">
//                 И получайте бонусы при покупке<br/>в магазинах и на сайте
//               </p>
//             </div>
//             <img 
//               src={card} 
//               alt="Карта лояльности «Северяночка»" 
//               className="w-32 h-auto object-contain"
//             />
//           </div>
//         </div>

//         {/* Блок "Покупайте акционные товары" */}
//         <div 
//           className="flex-1 bg-[#E5FFDE] p-4 rounded-lg cursor-pointer hover:bg-[#D9FAD0] transition"
//           role="button"
//           tabIndex={0}
//         >
//           <div className="flex items-start gap-4">
//             <div className="flex-1">
//               <h3 className="font-bold text-lg mb-2">Покупайте<br/>акционные товары</h3>
//               <p className="text-sm text-gray-700">
//                 И получайте вдвое больше<br/>бонусов
//               </p>
//             </div>
//             <img 
//               src={basket} 
//               alt="Акционные товары" 
//               className="w-32 h-auto object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

