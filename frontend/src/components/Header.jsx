// src/components/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  let timeoutId = null;

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    setIsServicesOpen(true);
  };

  const services = [
    { name: 'Social Media Marketing' },
    { name: 'Search Engine Optimization' },
    { name: 'Research Service' },
    { name: 'Content & PR Service' },
    { name: 'Payed Traffic Management' },
  ];

  return (
    <header className="bg-[#252535] text-white h-17 flex items-center px-6 relative">
      <div className="container mx-auto flex items-center justify-between w-full">
        {/* Логотип */}
        <Link to="/" className="font-bold text-xl tracking-tight">
          CREATE<span className="text-indigo-400">X</span>
        </Link>

        {/* Навигация */}
        <nav className="flex items-center space-x-8">
          {/* Services с выпадающим меню */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/services"
              className={`transition-opacity duration-200 cursor-pointer text-lg flex items-center ${
                location.pathname === '/services' || location.pathname === '/services/seo'
                  ? 'text-white opacity-100 font-medium' 
                  : 'text-white opacity-60 hover:opacity-100'
              }`}
            >
              Services
              <span className="ml-1 text-xs opacity-70">▾</span>
            </Link>

            {/* Выпадающее меню - теперь с отрицательным отступом сверху */}
            {isServicesOpen && (
              <div 
                className="absolute left-0 top-full w-64 rounded-sm shadow-xl z-50"
                style={{ 
                  backgroundColor: '#232441',
                  marginTop: '-5px', // Убираем зазор
                  paddingTop: '10px'  // Добавляем невидимую область для курсора
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to="/services/seo"
                    className="block px-4 py-3 text-white hover:bg-[#2a2b4a] transition-colors duration-200 text-sm first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Остальные пункты меню */}
          {[
            { label: 'Case Studies', path: '/case-studies' },
            { label: 'About Us', path: '/about' },
            { label: 'Blog', path: '/blog' },
            { label: 'Contacts', path: '/contacts' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-opacity duration-200 cursor-pointer text-lg ${
                location.pathname === item.path 
                  ? 'text-white opacity-100 font-medium' 
                  : 'text-white opacity-60 hover:opacity-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Кнопка */}
        <button
          className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-sm transition-colors duration-200 whitespace-nowrap font-medium text-lg cursor-pointer"
        >
          Talk to a human
        </button>
      </div>
    </header>
  );
}




// src/components/Header.jsx (с активным классом)
// import { Link, useLocation } from 'react-router-dom';

// export default function Header() {
//   const location = useLocation();

//   return (
//     <header className="bg-[#252535] text-white h-17 flex items-center px-6">
//       <div className="container mx-auto flex items-center justify-between w-full">
//         <Link to="/" className="font-bold text-xl tracking-tight">
//           CREATE<span className="text-indigo-400">X</span>
//         </Link>

//         <nav className="flex items-center space-x-8">
//           {[
//             { label: 'Services', path: '/services', hasDropdown: true },
//             { label: 'Case Studies', path: '/case-studies' },
//             { label: 'About Us', path: '/about' },
//             { label: 'Blog', path: '/blog' },
//             { label: 'Contacts', path: '/contacts' },
//           ].map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`transition-opacity duration-200 cursor-pointer text-lg ${
//                 location.pathname === item.path 
//                   ? 'text-white opacity-100 font-medium' 
//                   : 'text-white opacity-60 hover:opacity-100'
//               }`}
//             >
//               {item.label}
//               {item.hasDropdown && (
//                 <span className="ml-1 text-xs opacity-70">▾</span>
//               )}
//             </Link>
//           ))}
//         </nav>

//         <button
//           className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap font-medium text-lg cursor-pointer"
//         >
//           Talk to a human
//         </button>
//       </div>
//     </header>
//   );
// }




// // src/components/Header.jsx
// import { Link } from 'react-router-dom';

// export default function Header() {
//   return (
//     <header className="bg-[#252535] text-white h-17 flex items-center px-6">
//       <div className="container mx-auto flex items-center justify-between w-full">
//         {/* Логотип */}
//         <div className="font-bold text-xl tracking-tight">
//           CREATE<span className="text-indigo-400">X</span>
//         </div>

//         {/* Навигация */}
//         <nav className="flex items-center space-x-8">
//           {[
//             { label: 'Services', path: '/services', hasDropdown: true },
//             { label: 'Case Studies', path: '/case-studies' },
//             { label: 'About Us', path: '/about' },
//             { label: 'Blog', path: '/blog' },
//             { label: 'Contacts', path: '/contacts' },
//           ].map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className="text-white opacity-60 hover:opacity-100 transition-opacity duration-200 cursor-pointer text-lg"
//             >
//               {item.label}
//               {item.hasDropdown && (
//                 <span className="ml-1 text-xs opacity-70">▾</span>
//               )}
//             </Link>
//           ))}
//         </nav>

//         {/* Кнопка */}
//         <button
//           className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap font-medium text-lg cursor-pointer"
//         >
//           Talk to a human
//         </button>
//       </div>
//     </header>
//   );
// }