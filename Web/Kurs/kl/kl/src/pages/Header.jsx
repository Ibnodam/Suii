// Header.jsx
import React, { useState, useRef } from 'react';
import logo from './images/header/logo.png';
import menu from './images/header/menu.png';
import search from './images/header/search.png';
import love from './images/header/love.png';
import orders from './images/header/orders.png';
import basket from './images/header/basket.png';
import avatar from './images/header/avatar.png';
import arrow from './images/header/arrow.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeTimeout = useRef(null);

  const categories = [
    { id: 'milk', name: 'Молоко, сыр, яйцо' },
    { id: 'bread', name: 'Хлеб' },
    { id: 'fruits', name: 'Фрукты и овощи' },
    { id: 'frozen', name: 'Замороженные продукты' },
    { id: 'drinks', name: 'Напитки' },
    { id: 'sweets', name: 'Кондитерские изделия' },
    { id: 'tea', name: 'Чай, кофе' },
    { id: 'bakery', name: 'Бакалея' },
    { id: 'healthy', name: 'Здоровое питание' },
    { id: 'pets', name: 'Зоотовары' },
    { id: 'kids', name: 'Детское питание' },
    { id: 'meat', name: 'Мясо, птица, колбаса' },
    { id: 'household', name: 'Непродовольственные товары' },
  ];

  const showMenu = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setIsMenuOpen(true);
  };

  const hideMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 400); // Задержка 400 мс (~полсекунды)
  };

  return (
    <header className="py-3 w-full relative">
      {/* Основной контент хедера */}
      <div className="flex items-center justify-between mx-auto px-[10px] max-w-screen-2xl">
        {/* Логотип */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Логотип" className="w-7 h-6" />
          <span className="font-bold text-lg">СЕВЕРИНОЧКА</span>
        </div>

        {/* Обёртка для кнопки */}
        <div
          className="relative"
          onMouseEnter={showMenu}
          onMouseLeave={hideMenu}
        >
          <Link
            to="/catalog"
            className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 cursor-pointer hover:bg-green-600 transition"
          >
            <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
              <img src={menu} alt="menu" className="w-5 h-5" />
            </div>
            <span>Каталог</span>
          </Link>
        </div>

        {/* Поиск */}
        <div className="flex items-center border border-green-300 rounded-md px-3 py-1">
          <input
            type="text"
            placeholder="Найти товар"
            className="outline-none bg-transparent text-sm"
          />
          <div className="w-5 h-5 rounded-sm flex items-center justify-center ml-2">
            <img src={search} alt="search" className="w-5 h-5" />
          </div>
        </div>

        {/* Иконки и профиль */}
        <div className="flex items-center space-x-6">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-sm flex items-center justify-center">
              <img src={love} alt="love" className="w-5 h-5" />
            </div>
            <span className="text-xs mt-1">Избранное</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-sm flex items-center justify-center">
              <img src={orders} alt="orders" className="w-5 h-5" />
            </div>
            <span className="text-xs mt-1">Заказы</span>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="w-7 h-7 flex items-center justify-center">
              <img src={basket} alt="basket" className="w-5 h-5" />
            </div>
            <span className="text-xs mt-1">Корзина</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
            </div>
            <span className="font-medium">Алексей</span>
            <div className="w-5 h-5 rounded-sm flex items-center justify-center">
              <button className="w-5 h-5 cursor-pointer">
                <img src={arrow} alt="arrow" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Выпадающее меню */}
      {isMenuOpen && (
        <div
          className="absolute left-0 right-0 top-full z-50"
          onMouseEnter={showMenu}
          onMouseLeave={hideMenu}
        >
          <div className="bg-white shadow-lg border-t border-gray-200">
            <div className="max-w-screen-2xl mx-auto px-[10px] py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <a
                    key={category.id}
                    href="#"
                    className="block text-sm font-bold text-[#414141] hover:text-[#FF6633] cursor-pointer"
                  >
                    {category.name}
                  </a>
                ))}
              </div>

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <a
                    key={category.id}
                    href="#"
                    className="block text-sm text-gray-800 hover:text-green-600 hover:underline cursor-pointer"
                  >
                    {category.name}
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

// // Header.jsx
// import React, { useState } from 'react';
// import logo from './images/header/logo.png';
// import menu from './images/header/menu.png';
// import search from './images/header/search.png';
// import love from './images/header/love.png';
// import orders from './images/header/orders.png';
// import basket from './images/header/basket.png';
// import avatar from './images/header/avatar.png';
// import arrow from './images/header/arrow.png';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const categories = [
//     { id: 'milk', name: 'Молоко, сыр, яйцо' },
//     { id: 'bread', name: 'Хлеб' },
//     { id: 'fruits', name: 'Фрукты и овощи' },
//     { id: 'frozen', name: 'Замороженные продукты' },
//     { id: 'drinks', name: 'Напитки' },
//     { id: 'sweets', name: 'Кондитерские изделия' },
//     { id: 'tea', name: 'Чай, кофе' },
//     { id: 'bakery', name: 'Бакалея' },
//     { id: 'healthy', name: 'Здоровое питание' },
//     { id: 'pets', name: 'Зоотовары' },
//     { id: 'kids', name: 'Детское питание' },
//     { id: 'meat', name: 'Мясо, птица, колбаса' },
//     { id: 'household', name: 'Непродовольственные товары' },
//   ];

//   return (
//     <header className="py-3 w-full relative">
//       {/* Основной контент хедера */}
//       <div className="flex items-center justify-between mx-auto px-[10px] max-w-screen-2xl">
//         {/* Логотип */}
//         <div className="flex items-center space-x-2">
//           <img src={logo} alt="Логотип" className="w-7 h-6" />
//           <span className="font-bold text-lg">СЕВЕРИНОЧКА</span>
//         </div>

//         {/* Обёртка для кнопки + выпадающего меню (общая зона) */}
//         <div
//           className="relative"
//           onMouseEnter={() => setIsMenuOpen(true)}
//           onMouseLeave={() => setIsMenuOpen(false)}
//         >
//           {/* Кнопка с переходом */}
//           <Link
//             to="/catalog"
//             className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 cursor-pointer hover:bg-green-600 transition"
//           >
//             <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
//               <img src={menu} alt="menu" className="w-5 h-5" />
//             </div>
//             <span>Каталог</span>
//           </Link>
//         </div>

//         {/* Поиск */}
//         <div className="flex items-center border border-green-300 rounded-md px-3 py-1">
//           <input
//             type="text"
//             placeholder="Найти товар"
//             className="outline-none bg-transparent text-sm"
//           />
//           <div className="w-5 h-5 rounded-sm flex items-center justify-center ml-2">
//             <img src={search} alt="search" className="w-5 h-5" />
//           </div>
//         </div>

//         {/* Иконки и профиль */}
//         <div className="flex items-center space-x-6">
//           <div className="flex flex-col items-center">
//             <div className="w-6 h-6 rounded-sm flex items-center justify-center">
//               <img src={love} alt="love" className="w-5 h-5" />
//             </div>
//             <span className="text-xs mt-1">Избранное</span>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="w-6 h-6 rounded-sm flex items-center justify-center">
//               <img src={orders} alt="orders" className="w-5 h-5" />
//             </div>
//             <span className="text-xs mt-1">Заказы</span>
//           </div>
//           <div className="flex flex-col items-center relative">
//             <div className="w-7 h-7 flex items-center justify-center">
//               <img src={basket} alt="basket" className="w-5 h-5" />
//             </div>
//             <span className="text-xs mt-1">Корзина</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <div className="flex items-center justify-center">
//               <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
//             </div>
//             <span className="font-medium">Алексей</span>
//             <div className="w-5 h-5 rounded-sm flex items-center justify-center">
//               <button className="w-5 h-5 cursor-pointer">
//                 <img src={arrow} alt="arrow" className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Выпадающее меню — НА ВСЮ ШИРИНУ ЭКРАНА */}
//       {isMenuOpen && (
//         <div
//           className="absolute left-0 right-0 top-full z-50"
//           // Добавляем onMouseEnter/onMouseLeave на само меню,
//           // чтобы можно было "уйти" с кнопки и попасть в меню
//           onMouseEnter={() => setIsMenuOpen(true)}
//           onMouseLeave={() => setIsMenuOpen(false)}
//         >
//           {/* Фон на всю ширину */}
//           <div className="bg-white shadow-lg border-t border-gray-200">
//             {/* Контент — по центру, как в макете */}
//             <div className="max-w-screen-2xl mx-auto px-[10px] py-6">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {categories.map((category) => (
//                   <a
//                     key={category.id}
//                     href="#"
//                     className="block text-sm text-gray-800 hover:text-green-600 hover:underline cursor-pointer"
//                   >
//                     {category.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;






// import React from 'react';
// import logo from './images/header/logo.png'
// import menu from './images/header/menu.png'
// import search from './images/header/search.png'
// import love from './images/header/love.png'
// import orders from './images/header/orders.png'
// import basket from './images/header/basket.png'
// import avatar from './images/header/avatar.png'
// import arrow from './images/header/arrow.png'
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     // <header className="bg-gray-100 py-3 px-4 flex items-center justify-between">

//     <header className="py-3 w-full ">
//   <div className="flex items-center justify-between mx-auto px-[10px] max-w-screen-2xl">

//       {/* Логотип */}
//  <div className="flex items-center space-x-2">
//         <img 

//           src={logo} 
//           alt="Логотип" 
//           className="w-7 h-6"
//         />
//         <span className="font-bold text-lg">СЕВЕРИНОЧКА</span>
//       </div>


// <Link 
//   to="/catalog"
//   className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 cursor-pointer hover:bg-green-600 transition"
// >
//   <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
//     <img src={menu} alt="menu" className="w-5 h-5" />
//   </div>
//   <span>Каталог</span>
// </Link>

//       {/* Кнопка Каталог */}
//       {/* <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 cursor-pointer">
//         <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center"> 
//           <img 
//           src={menu} 
//           alt="menu" 
//           className="w-5 h-5 rounded-full"
//         /></div>
//         <span>Каталог</span>
//       </button> */}

//       {/* Поиск */}
//       <div className="flex items-center border border-green-300 rounded-md px-3 py-1">
//         <input 
//           type="text" 
//           placeholder="Найти товар" 
//           className="outline-none bg-transparent text-sm"
//         />
//         <div className="w-5 h-5 rounded-sm flex items-center justify-center ml-2">  
//            <img 
//           src={search} 
//           alt="menu" 
//           className="w-5 h-5 rounded-full"
//         />   </div>
//       </div>

//       {/* Иконки и профиль */}
//       <div className="flex items-center space-x-6">
//         {/* Избранное */}
//         <div className="flex flex-col items-center">
//           <div className="w-6 h-6 rounded-sm flex items-center justify-center">
//             <img 
//           src={love} 
//           alt="menu" 
//           className="w-5 h-5"
//         />
//           </div>
//           <span className="text-xs mt-1">Избранное</span>
//         </div>

//         {/* Заказы */}
//         <div className="flex flex-col items-center">
//           <div className="w-6 h-6 rounded-sm flex items-center justify-center">
//             <img 
//           src={orders} 
//           alt="menu" 
//           className="w-5 h-5"
//         />
//           </div>
//           <span className="text-xs mt-1">Заказы</span>
//         </div>

//         {/* Корзина */}
//         <div className="flex flex-col items-center relative">
//           <div className=" w-7 h-7 flex items-center justify-center">
//             <img 
//           src={basket} 
//           alt="menu" 
//           className="w-5 h-5"
//         />
//           </div>
//            <span className="text-xs mt-1">Корзина</span>
//         </div>

//         {/* Профиль */}
//         <div className="flex items-center space-x-2">
//           <div className="flex items-center justify-center">
//         <img 
//           src={avatar} 
//           alt="avatar" 
//           className="w-10 h-10 rounded-full"
//         />
//           </div>
//           <span className="font-medium">Алексей</span>
//           <div className="w-5 h-5rounded-sm flex items-center justify-center">
//             <button className='w-5 h-5 cursor-pointer hover:cursor-pointer'>
//             <img 
//           src={arrow} 
//           alt="arrow" 
//           className="w-5 h-5"
//         />
//             </button>
//             </div>
//         </div>
//       </div>
//       </div>
//     </header>
//   );
// };

// export default Header;