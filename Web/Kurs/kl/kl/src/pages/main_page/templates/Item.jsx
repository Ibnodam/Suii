import photo from './item-image.png';
import love from './love.png';
import star from './star.png';

export default function Item() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 max-w-xs mx-auto font-sans">
      {/* Изображение и иконка сердца */}
      <div className="relative mb-3">
        <img
          src={photo}
          alt="Блинчики с мясом"
          className="w-full h-40 object-cover rounded-lg"
        />
        <button className="absolute top-2 right-2 bg-white/80 rounded-full p-1.5 hover:bg-white transition cursor-pointer">
          <img src={love} alt="Добавить в избранное" className="w-5 h-5" />
        </button>
        {/* Бокс со скидкой */}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -50%
        </div>
      </div>

      {/* Цены */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xl font-bold text-gray-900">44,50 ₽</span>
        <span className="text-sm text-gray-500 line-through">50,50 ₽</span>
      </div>
      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <span>С картой</span>
        <span>Обычная</span>
      </div>

      {/* Название товара */}
      <h3 className="font-medium text-gray-800 mb-2">
        Г/Ц Блинчики с мясом вес, Россия
      </h3>

      {/* Рейтинг */}
      
<div className="flex mb-3">
  {[1, 2, 3, 4, 5].map((i) => (
    <img
      key={i}
      src={star}
      alt="звезда"
      className={`w-4 h-4 ${i <= 2 ? 'brightness-100' : 'grayscale opacity-50'}`}
    />
  ))}
</div>

      {/* Кнопка "В корзину" */}
      <button className="w-full py-2 border-2 border-green-500 text-green-500 font-medium rounded-lg hover:bg-green-50 transition cursor-pointer">
        В корзину
      </button>
    </div>
  );
}


// import photo from './item-image.png';
// import love from './love.png';
// import star from './star.png';

// export default function Item() {
//   return (
//     <div className="bg-white rounded-xl shadow-sm p-4 max-w-xs mx-auto font-sans">
//       {/* Изображение и иконка сердца */}
//       <div className="relative mb-3">
//         <img
//           src={photo}
//           alt="Блинчики с мясом"
//           className="w-full h-40 object-cover rounded-lg"
//         />
//         <button className="absolute top-2 right-2 bg-white/80 rounded-full p-1.5 hover:bg-white transition">
//           <img src={love} alt="Добавить в избранное" className="w-5 h-5" />
//         </button>
//         {/* Бокс со скидкой */}
//         <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//           -50%
//         </div>
//       </div>

//       {/* Цены */}
//       <div className="flex items-center justify-between mb-2">
//         <span className="text-xl font-bold text-gray-900">44,50 ₽</span>
//         <span className="text-sm text-gray-500 line-through">50,50 ₽</span>
//       </div>
//       <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
//         <span>С картой</span>
//         <span>Обычная</span>
//       </div>

//       {/* Название товара */}
//       <h3 className="font-medium text-gray-800 mb-2">
//         Г/Ц Блинчики с мясом вес, Россия
//       </h3>

//       {/* Рейтинг */}
      
// <div className="flex mb-3">
//   {[1, 2, 3, 4, 5].map((i) => (
//     <img
//       key={i}
//       src={star}
//       alt="звезда"
//       className={`w-4 h-4 ${i <= 2 ? 'brightness-100' : 'grayscale opacity-50'}`}
//     />
//   ))}
// </div>

//       {/* Кнопка "В корзину" */}
//       <button className="w-full py-2 border-2 border-green-500 text-green-500 font-medium rounded-lg hover:bg-green-50 transition">
//         В корзину
//       </button>
//     </div>
//   );
// }



{/* Рейтинг */}
      {/* <div className="flex mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={star <= 2 ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            className={`w-4 h-4 ${star <= 2 ? 'text-yellow-500' : 'text-gray-300'}`}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87-.69 6.9L12 18.5l-4.31 2.63-.69-6.9-5-4.87 6.91-1.01L12 2z" />
          </svg>
        ))}
      </div> */}
