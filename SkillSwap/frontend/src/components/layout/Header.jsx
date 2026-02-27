import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, User, Search, LogIn } from 'lucide-react'
import AuthModal from '../modals/AuthModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path

  const handleLogin = () => {
    setIsLoggedIn(true)
    setIsAuthModalOpen(false)
    // Перенаправляем на профиль с id=1 (твой профиль)
    navigate('/profile/1')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Логотип */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">SkillSwap</span>
            </Link>

            {/* Поиск (на планшете и выше) */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Поиск навыков..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Десктопная навигация */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                to="/skills" 
                className={`${isActive('/skills') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition`}
              >
                Навыки
              </Link>
              <Link 
                to="/calendar" 
                className={`${isActive('/calendar') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition`}
              >
                Календарь
              </Link>
              <Link 
                to="/my-meets" 
                className={`${isActive('/my-meets') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition`}
              >
                Встречи
              </Link>
              <Link 
                to="/messages" 
                className={`${isActive('/messages') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition`}
              >
                Чаты
              </Link>
              <Link 
                to="/premium" 
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-amber-500 hover:to-amber-600 transition"
              >
                Премиум
              </Link>
            </nav>

            {/* Правая часть */}
            <div className="flex items-center space-x-3">
              {isLoggedIn ? (
                <>
                  {/* Иконка профиля - ведет на твой профиль (id=1) */}
                  <Link 
                    to="/profile/1" 
                    className={`p-2 hover:bg-gray-100 rounded-full transition ${isActive('/profile/1') ? 'bg-gray-100 text-blue-600' : 'text-gray-600'}`}
                    title="Мой профиль"
                  >
                    <User className="w-5 h-5" />
                  </Link>
                  {/* Кнопка выхода */}
                  <button
                    onClick={handleLogout}
                    className="hidden md:block text-sm text-gray-600 hover:text-blue-600"
                  >
                    Выйти
                  </button>
                </>
              ) : (
                <>
                  {/* Кнопка входа */}
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="hidden md:flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Войти</span>
                  </button>
                  {/* Иконка для мобилок - открывает модалку входа */}
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
                    title="Войти"
                  >
                    <User className="w-5 h-5 text-gray-600" />
                  </button>
                </>
              )}
              
              {/* Кнопка мобильного меню */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
                aria-label="Меню"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Мобильное меню */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Поиск навыков..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <nav className="flex flex-col space-y-3">
                <Link 
                  to="/skills" 
                  className={`px-2 py-1 rounded-lg transition ${
                    isActive('/skills') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Навыки
                </Link>
                <Link 
                  to="/calendar" 
                  className={`px-2 py-1 rounded-lg transition ${
                    isActive('/calendar') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Календарь
                </Link>
                <Link 
                  to="/my-meets" 
                  className={`px-2 py-1 rounded-lg transition ${
                    isActive('/my-meets') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Встречи
                </Link>
                <Link 
                  to="/messages" 
                  className={`px-2 py-1 rounded-lg transition ${
                    isActive('/messages') 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Чаты
                </Link>
                <Link 
                  to="/premium" 
                  className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-lg text-center font-medium hover:from-amber-500 hover:to-amber-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Премиум
                </Link>
                
                {/* Профиль или вход в мобильном меню */}
                {isLoggedIn ? (
                  <>
                    <Link 
                      to="/profile/1" 
                      className={`px-2 py-1 rounded-lg transition ${
                        isActive('/profile/1') 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Мой профиль
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout()
                        setIsMenuOpen(false)
                      }}
                      className="text-left px-2 py-1 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition"
                    >
                      Выйти
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsAuthModalOpen(true)
                    }}
                    className="text-left px-2 py-1 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition font-medium"
                  >
                    Войти / Регистрация
                  </button>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Модальное окно авторизации */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  )
}



// import { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Menu, X, User, Search, LogIn } from 'lucide-react'
// import AuthModal from '../modals/AuthModal'

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [user, setUser] = useState(null)
//   const location = useLocation()
  
//   const isActive = (path) => location.pathname === path

//   const handleLogin = (userData) => {
//     setIsLoggedIn(true)
//     setUser(userData)
//   }

//   const handleLogout = () => {
//     setIsLoggedIn(false)
//     setUser(null)
//   }

//   return (
//     <>
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
            
//             {/* Логотип */}
//             <Link to="/" className="flex items-center space-x-2">
//               <span className="text-2xl font-bold text-blue-600">SkillSwap</span>
//             </Link>

//             {/* Поиск (на планшете и выше) */}
//             <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
//               <div className="relative w-full">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Поиск навыков..."
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                 />
//               </div>
//             </div>

//             {/* Десктопная навигация */}
//             <nav className="hidden md:flex items-center space-x-6">
//               <Link 
//                 to="/skills" 
//                 className={`${isActive('/skills') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition`}
//               >
//                 Навыки
//               </Link>
//               <Link 
//                 to="/calendar" 
//                 className={`${isActive('/calendar') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition`}
//               >
//                 Календарь
//               </Link>
//               <Link 
//                 to="/my-meets" 
//                 className={`${isActive('/my-meets') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition`}
//               >
//                 Встречи
//               </Link>
//               <Link 
//                 to="/messages" 
//                 className={`${isActive('/messages') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition`}
//               >
//                 Чаты
//               </Link>
//               <Link 
//                 to="/premium" 
//                 className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-amber-500 hover:to-amber-600 transition"
//               >
//                 Премиум
//               </Link>
//             </nav>

//             {/* Правая часть */}
//             <div className="flex items-center space-x-3">
//               {isLoggedIn ? (
//                 <>
//                   {/* Иконка профиля */}
//                   <Link 
//                     to="/profile/me" 
//                     className={`p-2 hover:bg-gray-100 rounded-full transition ${isActive('/profile/me') ? 'bg-gray-100 text-blue-600' : 'text-gray-600'}`}
//                     title="Мой профиль"
//                   >
//                     <User className="w-5 h-5" />
//                   </Link>
//                   {/* Кнопка выхода (опционально) */}
//                   <button
//                     onClick={handleLogout}
//                     className="hidden md:block text-sm text-gray-600 hover:text-blue-600"
//                   >
//                     Выйти
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   {/* Кнопка входа */}
//                   <button
//                     onClick={() => setIsAuthModalOpen(true)}
//                     className="hidden md:flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                   >
//                     <LogIn className="w-4 h-4" />
//                     <span>Войти</span>
//                   </button>
//                   {/* Ссылка на профиль (для незалогиненных - ведет на логин) */}
//                   <button
//                     onClick={() => setIsAuthModalOpen(true)}
//                     className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
//                     title="Войти"
//                   >
//                     <User className="w-5 h-5 text-gray-600" />
//                   </button>
//                 </>
//               )}
              
//               {/* Кнопка мобильного меню */}
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
//                 aria-label="Меню"
//               >
//                 {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//               </button>
//             </div>
//           </div>

//           {/* Мобильное меню */}
//           {isMenuOpen && (
//             <div className="md:hidden py-4 border-t border-gray-200">
//               <div className="relative mb-4">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Поиск навыков..."
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 />
//               </div>
              
//               <nav className="flex flex-col space-y-3">
//                 <Link 
//                   to="/skills" 
//                   className={`px-2 py-1 rounded-lg transition ${
//                     isActive('/skills') 
//                       ? 'text-blue-600 bg-blue-50' 
//                       : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Навыки
//                 </Link>
//                 <Link 
//                   to="/calendar" 
//                   className={`px-2 py-1 rounded-lg transition ${
//                     isActive('/calendar') 
//                       ? 'text-blue-600 bg-blue-50' 
//                       : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Календарь
//                 </Link>
//                 <Link 
//                   to="/my-meets" 
//                   className={`px-2 py-1 rounded-lg transition ${
//                     isActive('/my-meets') 
//                       ? 'text-blue-600 bg-blue-50' 
//                       : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Встречи
//                 </Link>
//                 <Link 
//                   to="/messages" 
//                   className={`px-2 py-1 rounded-lg transition ${
//                     isActive('/messages') 
//                       ? 'text-blue-600 bg-blue-50' 
//                       : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Чаты
//                 </Link>
//                 <Link 
//                   to="/premium" 
//                   className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-lg text-center font-medium hover:from-amber-500 hover:to-amber-600 transition"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Премиум
//                 </Link>
                
//                 {/* Профиль или вход в мобильном меню */}
//                 {isLoggedIn ? (
//                   <>
//                     <Link 
//                       to="/profile/me" 
//                       className={`px-2 py-1 rounded-lg transition ${
//                         isActive('/profile/me') 
//                           ? 'text-blue-600 bg-blue-50' 
//                           : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
//                       }`}
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       Мой профиль
//                     </Link>
//                     <button
//                       onClick={() => {
//                         handleLogout()
//                         setIsMenuOpen(false)
//                       }}
//                       className="text-left px-2 py-1 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition"
//                     >
//                       Выйти
//                     </button>
//                   </>
//                 ) : (
//                   <button
//                     onClick={() => {
//                       setIsMenuOpen(false)
//                       setIsAuthModalOpen(true)
//                     }}
//                     className="text-left px-2 py-1 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition font-medium"
//                   >
//                     Войти / Регистрация
//                   </button>
//                 )}
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Модальное окно авторизации */}
//       <AuthModal 
//         isOpen={isAuthModalOpen}
//         onClose={() => setIsAuthModalOpen(false)}
//         onLogin={handleLogin}
//       />
//     </>
//   )
// }





// import { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Menu, X, User, Search, LogIn } from 'lucide-react'
// import AuthModal from '../modals/AuthModal'  // ← импортируем модалку

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)  // ← состояние для модалки
//   const [isLoggedIn, setIsLoggedIn] = useState(false)  // ← состояние авторизации
//   const location = useLocation()
  
//   const isActive = (path) => location.pathname === path

//   // Функция для демо-входа
//   const handleLogin = () => {
//     setIsLoggedIn(true)
//     setIsAuthModalOpen(false)
//   }

//   // Функция выхода
//   const handleLogout = () => {
//     setIsLoggedIn(false)
//   }

//   return (
//     <>
//       <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
            
//             {/* Логотип */}
//             <Link to="/" className="flex items-center space-x-2">
//               <span className="text-2xl font-bold text-blue-600">SkillSwap</span>
//             </Link>

//             {/* Поиск (на планшете и выше) */}
//             <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
//               <div className="relative w-full">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Поиск навыков..."
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                 />
//               </div>
//             </div>

//             {/* Десктопная навигация */}
//             <nav className="hidden md:flex items-center space-x-6">
//               <Link to="/skills" className={`${isActive('/skills') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition`}>
//                 Навыки
//               </Link>
//               <Link to="/calendar" className={`${isActive('/calendar') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition`}>
//                 Календарь
//               </Link>
//               <Link to="/my-meets" className={`${isActive('/my-meets') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition`}>
//                 Встречи
//               </Link>
//               <Link to="/messages" className={`${isActive('/messages') ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600'} transition`}>
//                 Чаты
//               </Link>
//               <Link to="/premium" className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-amber-500 hover:to-amber-600 transition">
//                 Премиум
//               </Link>
//             </nav>

//             {/* Правая часть */}
//             <div className="flex items-center space-x-3">
//               {isLoggedIn ? (
//                 // Пользователь авторизован
//                 <Link 
//                   to="/profile/me" 
//                   className={`p-2 hover:bg-gray-100 rounded-full transition ${isActive('/profile/me') ? 'bg-gray-100 text-blue-600' : 'text-gray-600'}`}
//                 >
//                   <User className="w-5 h-5" />
//                 </Link>
//               ) : (
//                 // Пользователь не авторизован - показываем кнопку входа
//                 <button
//                   onClick={() => setIsAuthModalOpen(true)}
//                   className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//                 >
//                   <LogIn className="w-4 h-4" />
//                   <span>Войти</span>
//                 </button>
//               )}
              
//               {/* Кнопка мобильного меню */}
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
//                 aria-label="Меню"
//               >
//                 {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//               </button>
//             </div>
//           </div>

//           {/* Мобильное меню (обнови ссылки) */}
//           {isMenuOpen && (
//             <div className="md:hidden py-4 border-t border-gray-200">
//               <div className="relative mb-4">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Поиск навыков..."
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 />
//               </div>
              
//               <nav className="flex flex-col space-y-3">
//                 <Link to="/skills" className="text-gray-600 hover:text-blue-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>
//                   Навыки
//                 </Link>
//                 <Link to="/calendar" className="text-gray-600 hover:text-blue-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>
//                   Календарь
//                 </Link>
//                 <Link to="/my-meets" className="text-gray-600 hover:text-blue-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>
//                   Встречи
//                 </Link>
//                 <Link to="/messages" className="text-gray-600 hover:text-blue-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>
//                   Чаты
//                 </Link>
//                 <Link to="/premium" className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-lg text-center" onClick={() => setIsMenuOpen(false)}>
//                   Премиум
//                 </Link>
//                 {!isLoggedIn ? (
//                   <button
//                     onClick={() => {
//                       setIsMenuOpen(false)
//                       setIsAuthModalOpen(true)
//                     }}
//                     className="text-left px-2 py-1 text-blue-600 hover:text-blue-700 font-medium"
//                   >
//                     Войти / Регистрация
//                   </button>
//                 ) : (
//                   <Link to="/profile/me" className="text-gray-600 hover:text-blue-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>
//                     Мой профиль
//                   </Link>
//                 )}
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Модальное окно авторизации */}
//       <AuthModal 
//         isOpen={isAuthModalOpen}
//         onClose={() => setIsAuthModalOpen(false)}
//         onLogin={handleLogin}  // передаем функцию входа
//       />
//     </>
//   )
// }




