// src/components/Header.jsx (с активным классом)
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-[#252535] text-white h-17 flex items-center px-6">
      <div className="container mx-auto flex items-center justify-between w-full">
        <Link to="/" className="font-bold text-xl tracking-tight">
          CREATE<span className="text-indigo-400">X</span>
        </Link>

        <nav className="flex items-center space-x-8">
          {[
            { label: 'Services', path: '/services', hasDropdown: true },
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
              {item.hasDropdown && (
                <span className="ml-1 text-xs opacity-70">▾</span>
              )}
            </Link>
          ))}
        </nav>

        <button
          className="bg-[#7772F1] hover:bg-[#6a65e5] text-white px-6 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap font-medium text-lg cursor-pointer"
        >
          Talk to a human
        </button>
      </div>
    </header>
  );
}




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