import { useState } from 'react'
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import Button from '../ui/Button'

export default function AuthModal({ isOpen, onClose, onLogin }) {
  const [mode, setMode] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Форма отправлена:', { mode, ...formData })
    if (onLogin) {
      onLogin()
    }
    onClose()
  }

  const handleDemoLogin = () => {
    if (onLogin) {
      onLogin()
    }
    onClose()
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Заголовок */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {mode === 'login' ? 'Вход' : 'Регистрация'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Имя
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Введите имя"
                  required={mode === 'register'}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="example@mail.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Пароль
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {mode === 'login' && (
            <div className="text-right">
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Забыли пароль?
              </button>
            </div>
          )}

          <Button type="submit" variant="primary" className="w-full">
            {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </Button>
        </form>

        {/* Переключение между входом и регистрацией */}
        <div className="p-6 pt-0 text-center text-sm text-gray-600">
          {mode === 'login' ? (
            <>
              Нет аккаунта?{' '}
              <button 
                onClick={() => setMode('register')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Зарегистрироваться
              </button>
            </>
          ) : (
            <>
              Уже есть аккаунт?{' '}
              <button 
                onClick={() => setMode('login')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Войти
              </button>
            </>
          )}
        </div>

        {/* Демо-вход */}
        <div className="p-6 pt-0">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">или</span>
            </div>
          </div>

          <button
            onClick={handleDemoLogin}
            className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            Войти как Владимир Судаков
          </button>
        </div>
      </div>
    </div>
  )
}


// import { useState } from 'react'
// import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
// import Button from '../ui/Button'

// export default function AuthModal({ isOpen, onClose, onLogin }) {
//   const [mode, setMode] = useState('login') // 'login' или 'register'
//   const [showPassword, setShowPassword] = useState(false)
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   })

//   if (!isOpen) return null

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Форма отправлена:', { mode, ...formData })
    
//     // Имитация успешной авторизации
//     if (onLogin) {
//       onLogin({
//         name: formData.name || 'Пользователь',
//         email: formData.email
//       })
//     }
//     onClose()
//   }

//   const handleDemoLogin = () => {
//     if (onLogin) {
//       onLogin({
//         name: 'Владимир Судаков',
//         email: 'demo@skillswap.ru'
//       })
//     }
//     onClose()
//   }

//   return (
//     <div 
//       className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
//       onClick={onClose}
//     >
//       <div 
//         className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
//         onClick={e => e.stopPropagation()}
//       >
//         {/* Заголовок */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <h2 className="text-2xl font-bold text-gray-900">
//             {mode === 'login' ? 'Вход' : 'Регистрация'}
//           </h2>
//           <button 
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition"
//           >
//             <X className="w-5 h-5 text-gray-500" />
//           </button>
//         </div>

//         {/* Форма */}
//         <form onSubmit={handleSubmit} className="p-6 space-y-4">
//           {mode === 'register' && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Имя
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                   placeholder="Введите имя"
//                   required={mode === 'register'}
//                 />
//               </div>
//             </div>
//           )}

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                 placeholder="example@mail.com"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Пароль
//             </label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={formData.password}
//                 onChange={(e) => setFormData({...formData, password: e.target.value})}
//                 className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                 placeholder="••••••••"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//               </button>
//             </div>
//           </div>

//           {mode === 'login' && (
//             <div className="text-right">
//               <button className="text-sm text-blue-600 hover:text-blue-700">
//                 Забыли пароль?
//               </button>
//             </div>
//           )}

//           <Button type="submit" variant="primary" className="w-full">
//             {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
//           </Button>
//         </form>

//         {/* Переключение между входом и регистрацией */}
//         <div className="p-6 pt-0 text-center text-sm text-gray-600">
//           {mode === 'login' ? (
//             <>
//               Нет аккаунта?{' '}
//               <button 
//                 onClick={() => setMode('register')}
//                 className="text-blue-600 hover:text-blue-700 font-medium"
//               >
//                 Зарегистрироваться
//               </button>
//             </>
//           ) : (
//             <>
//               Уже есть аккаунт?{' '}
//               <button 
//                 onClick={() => setMode('login')}
//                 className="text-blue-600 hover:text-blue-700 font-medium"
//               >
//                 Войти
//               </button>
//             </>
//           )}
//         </div>

//         {/* Демо-вход */}
//         <div className="p-6 pt-0">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-200"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">или</span>
//             </div>
//           </div>

//           <button
//             onClick={handleDemoLogin}
//             className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
//           >
//             Войти как демо-пользователь
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }




// import { useState } from 'react'
// import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
// import Button from '../ui/Button'
// import Input from '../ui/Input'

// export default function AuthModal({ isOpen, onClose }) {
//   const [mode, setMode] = useState('login') // 'login' или 'register'
//   const [showPassword, setShowPassword] = useState(false)
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   })

//   if (!isOpen) return null

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Форма отправлена:', { mode, ...formData })
//     // Здесь будет имитация авторизации
//     alert(`${mode === 'login' ? 'Вход' : 'Регистрация'} выполнен(а) как ${formData.email}`)
//     onClose()
//   }

//   return (
//     <div 
//       className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
//       onClick={onClose}
//     >
//       <div 
//         className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
//         onClick={e => e.stopPropagation()}
//       >
//         {/* Заголовок */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <h2 className="text-2xl font-bold text-gray-900">
//             {mode === 'login' ? 'Вход' : 'Регистрация'}
//           </h2>
//           <button 
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition"
//           >
//             <X className="w-5 h-5 text-gray-500" />
//           </button>
//         </div>

//         {/* Форма */}
//         <form onSubmit={handleSubmit} className="p-6 space-y-4">
//           {mode === 'register' && (
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Имя
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="text"
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                   placeholder="Введите имя"
//                   required={mode === 'register'}
//                 />
//               </div>
//             </div>
//           )}

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//                 className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                 placeholder="example@mail.com"
//                 required
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Пароль
//             </label>
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 value={formData.password}
//                 onChange={(e) => setFormData({...formData, password: e.target.value})}
//                 className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                 placeholder="••••••••"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
//               </button>
//             </div>
//           </div>

//           {mode === 'login' && (
//             <div className="text-right">
//               <button className="text-sm text-blue-600 hover:text-blue-700">
//                 Забыли пароль?
//               </button>
//             </div>
//           )}

//           <Button type="submit" variant="primary" className="w-full">
//             {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
//           </Button>
//         </form>

//         {/* Переключение между входом и регистрацией */}
//         <div className="p-6 pt-0 text-center text-sm text-gray-600">
//           {mode === 'login' ? (
//             <>
//               Нет аккаунта?{' '}
//               <button 
//                 onClick={() => setMode('register')}
//                 className="text-blue-600 hover:text-blue-700 font-medium"
//               >
//                 Зарегистрироваться
//               </button>
//             </>
//           ) : (
//             <>
//               Уже есть аккаунт?{' '}
//               <button 
//                 onClick={() => setMode('login')}
//                 className="text-blue-600 hover:text-blue-700 font-medium"
//               >
//                 Войти
//               </button>
//             </>
//           )}
//         </div>

//         {/* Демо-вход */}
//         <div className="p-6 pt-0">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-200"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">или</span>
//             </div>
//           </div>

//           <button
//             onClick={() => {
//               setFormData({ email: 'demo@skillswap.ru', password: 'demo123', name: 'Демо' })
//               setTimeout(() => {
//                 alert('Вход выполнен как демо-пользователь')
//                 onClose()
//               }, 100)
//             }}
//             className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
//           >
//             Войти как демо-пользователь
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }