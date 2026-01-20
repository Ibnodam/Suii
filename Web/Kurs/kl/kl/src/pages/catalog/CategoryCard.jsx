// export default function CategoryCard({ category }) {
//   return (
//     <a
//       href="#"
//       className="block relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
//     >
//       {/* Изображение */}
//       <img
//         src={category.image}
//         alt={category.name}
//         className="w-full h-48 object-cover"
//       />

//       {/* Название поверх изображения */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 to-transparent text-white p-3">
//         <h3 className="font-medium text-lg">{category.name}</h3>
//       </div>
//     </a>
//   );
// }


export default function CategoryCard({ category }) {
  return (
    <a
      href="#"
      className="block relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition cursor-pointer group"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-48 object-cover transition-transform group-hover:scale-105 duration-300"
      />

      <div className="absolute bottom-0 left-0 right-0 text-white p-3">
        {/* Зеленый градиент - поднимаем выше с отрицательным bottom */}
        <div className="absolute -bottom-3 left-0 right-0 h-[calc(100%+20px)] bg-gradient-to-t from-[#70C05B] to-transparent" />
        
        {/* Оранжевый градиент - такой же */}
        <div className="absolute -bottom-3 left-0 right-0 h-[calc(100%+20px)] bg-gradient-to-t from-[#FF663333] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Текст остается на месте */}
        <h3 className="font-medium text-lg relative z-10">{category.name}</h3>
      </div>
    </a>
  );
}

// export default function CategoryCard({ category }) {
//   return (
//     <a
//       href="#"
//       className="block relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition cursor-pointer group"
//     >
//       {/* Изображение */}
//       <img
//         src={category.image}
//         alt={category.name}
//         className="w-full h-48 object-cover transition-transform group-hover:scale-105 duration-300"
//       />

//       {/* Контейнер для текста с двумя градиентами */}
//       <div className="absolute bottom-0 left-0 right-0 text-white p-3">
//         {/* Зеленый градиент (всегда видимый) */}
//         <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#70C05B] to-transparent" />
        
//         {/* Оранжевый градиент (только при hover) */}
//         <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#FF663333] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
//         {/* Текст */}
//         <h3 className="font-medium text-lg relative z-10">{category.name}</h3>
//       </div>
//     </a>
//   );
// }