import { Link } from 'react-router-dom';
import { categories } from './data/data.js';
import CategoryCard from './CategoryCard';

// export default function CatalogPage() {
//   return (
//     <div className="max-w-screen-2xl mx-auto w-full px-4 py-6">
//       {/* Хлебные крошки */}
//       <div className="text-sm text-gray-500 mb-6">
// …      {/* Сетка категорий */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {categories.map((category) => (
//           <CategoryCard key={category.id} category={category} />
//         ))}
//       </div>
//     </div>
//   );
// }




// // import { categories } from './data/data.js';
// // import CategoryCard from '../catalog/CategoryCard';

// // export default function CatalogPage() {
// //   return (
// //     <div className="bg-transparent py-6 px-4">
// //       {/* Заголовок */}
// //       <h1 className="text-2xl font-bold text-gray-800 mb-6">Каталог</h1>

// //       {/* Сетка категорий */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //         {categories.map((category) => (
// //           <CategoryCard key={category.id} category={category} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



export default function CatalogPage() {
  return (
    <div className='w-full bg-[#FBF8EC]'>
    <div className="max-w-screen-2xl mx-auto w-full px-4 py-6 ">
      {/* Хлебные крошки */}
      <div className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-green-600 transition cursor-pointer">
          Главная
        </Link>
        <span className="mx-2">{'>'}</span>
        <span>Каталог</span>
      </div>

      {/* Заголовок */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Каталог</h1>

      {/* Сетка категорий */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
    </div>
  );
}