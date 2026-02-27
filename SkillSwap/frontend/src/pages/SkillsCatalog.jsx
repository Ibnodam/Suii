import { useState } from 'react'
import { Search, Filter, X } from 'lucide-react'
import UserCard from '../components/cards/UserCard'
import Button from '../components/ui/Button'
import CreateMeetingModal from '../components/modals/CreateMeetingModal'
import { users } from '../data/users'

export default function SkillsCatalog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [filters, setFilters] = useState({
    city: '',
    online: false,
    offline: false,
    rating: 'all'
  })

  const categories = [
    { id: 'all', name: 'Все навыки' },
    { id: 'languages', name: 'Иностранные языки' },
    { id: 'music', name: 'Музыка' },
    { id: 'sports', name: 'Спорт' },
    { id: 'art', name: 'Творчество' },
    { id: 'tech', name: 'Программирование' },
    { id: 'cooking', name: 'Кулинария' }
  ]

  // Фильтрация пользователей (исключаем себя с id=1)
  const filteredUsers = users.filter(user => {
    // Не показываем себя в каталоге
    if (user.id === 1) return false
    
    // Поиск по имени и навыкам
    const matchesSearch = searchTerm === '' || 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    
    // Фильтр по категории
    let matchesCategory = true
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'languages') {
        matchesCategory = user.skills.some(s => 
          s.includes('йский') || s.includes('Английский') || s.includes('Французский')
        )
      } else if (selectedCategory === 'music') {
        matchesCategory = user.skills.some(s => 
          s.includes('Гитара') || s.includes('Пианино') || s.includes('Музыка')
        )
      } else if (selectedCategory === 'tech') {
        matchesCategory = user.skills.some(s => 
          s.includes('JavaScript') || s.includes('React') || s.includes('Python') || s.includes('Программирование')
        )
      } else if (selectedCategory === 'sports') {
        matchesCategory = user.skills.some(s => 
          s.includes('Спорт') || s.includes('Фитнес') || s.includes('Йога')
        )
      } else if (selectedCategory === 'art') {
        matchesCategory = user.skills.some(s => 
          s.includes('Рисование') || s.includes('Фотография') || s.includes('Творчество')
        )
      } else if (selectedCategory === 'cooking') {
        matchesCategory = user.skills.some(s => 
          s.includes('Кулинария') || s.includes('Готовка')
        )
      }
    }
    
    // Фильтр по городу
    const matchesCity = filters.city === '' || 
      user.city?.toLowerCase().includes(filters.city.toLowerCase())
    
    // Фильтр по рейтингу
    let matchesRating = true
    if (filters.rating === '4') {
      matchesRating = user.rating >= 4
    } else if (filters.rating === '4.5') {
      matchesRating = user.rating >= 4.5
    }
    
    return matchesSearch && matchesCategory && matchesCity && matchesRating
  })

  const handleMeetingClick = (user) => {
    setSelectedUser(user)
    setIsMeetingModalOpen(true)
  }

  const resetFilters = () => {
    setFilters({
      city: '',
      online: false,
      offline: false,
      rating: 'all'
    })
    setSearchTerm('')
    setSelectedCategory('all')
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Заголовок */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Каталог навыков
        </h1>
        <p className="text-gray-600">
          Найди ментора для обучения или поделись своими знаниями
        </p>
      </div>

      {/* Поиск и фильтры */}
      <div className="mb-6 space-y-4">
        {/* Строка поиска */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Поиск по названию навыка или имени..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Категории (скроллящиеся на мобилках) */}
        <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-4 py-2 rounded-full whitespace-nowrap transition flex-shrink-0
                ${selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Кнопка расширенных фильтров */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center text-gray-600 hover:text-blue-600"
        >
          <Filter className="w-4 h-4 mr-2" />
          {showFilters ? 'Скрыть фильтры' : 'Расширенные фильтры'}
        </button>

        {/* Панель расширенных фильтров */}
        {showFilters && (
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Фильтры</h3>
              <button 
                onClick={() => setShowFilters(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Город */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Город
                </label>
                <input
                  type="text"
                  placeholder="Введите город"
                  value={filters.city}
                  onChange={(e) => setFilters({...filters, city: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Формат встречи */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Формат встречи
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.online}
                      onChange={(e) => setFilters({...filters, online: e.target.checked})}
                      className="rounded border-gray-300 text-blue-500 focus:ring-blue-200 mr-2"
                    />
                    <span className="text-sm">Онлайн</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.offline}
                      onChange={(e) => setFilters({...filters, offline: e.target.checked})}
                      className="rounded border-gray-300 text-blue-500 focus:ring-blue-200 mr-2"
                    />
                    <span className="text-sm">Оффлайн</span>
                  </label>
                </div>
              </div>

              {/* Рейтинг */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Минимальный рейтинг
                </label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters({...filters, rating: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                >
                  <option value="all">Любой</option>
                  <option value="4">4+ звезды</option>
                  <option value="4.5">4.5+ звезды</option>
                </select>
              </div>

              {/* Кнопка сброса */}
              <Button 
                variant="outline" 
                size="sm"
                onClick={resetFilters}
              >
                Сбросить все фильтры
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Результаты */}
      <div className="mb-4 flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Найдено {filteredUsers.length} пользователей
        </p>
        {(searchTerm || filters.city || filters.rating !== 'all' || selectedCategory !== 'all') && (
          <button
            onClick={resetFilters}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Сбросить поиск
          </button>
        )}
      </div>

      {/* Сетка пользователей */}
      {filteredUsers.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map(user => (
            <UserCard 
              key={user.id} 
              user={user} 
              onMeetingClick={handleMeetingClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 mb-2">Ничего не найдено</p>
          <p className="text-sm text-gray-400 mb-4">
            Попробуйте изменить параметры поиска
          </p>
          <Button variant="outline" onClick={resetFilters}>
            Сбросить фильтры
          </Button>
        </div>
      )}

      {/* Модальное окно создания встречи */}
      <CreateMeetingModal
        isOpen={isMeetingModalOpen}
        onClose={() => {
          setIsMeetingModalOpen(false)
          setSelectedUser(null)
        }}
        selectedUser={selectedUser}
      />
    </div>
  )
}











// import { useState } from 'react'
// import { Search, Filter, X } from 'lucide-react'
// import UserCard from '../components/cards/UserCard'
// import Button from '../components/ui/Button'
// import CreateMeetingModal from '../components/modals/CreateMeetingModal'
// import { users } from '../data/users'

// export default function SkillsCatalog() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [selectedCategory, setSelectedCategory] = useState('all')
//   const [showFilters, setShowFilters] = useState(false)
//   const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false)
//   const [selectedUser, setSelectedUser] = useState(null)
//   const [filters, setFilters] = useState({
//     city: '',
//     online: false,
//     offline: false,
//     rating: 'all'
//   })

//   const categories = [
//     { id: 'all', name: 'Все навыки' },
//     { id: 'languages', name: 'Иностранные языки' },
//     { id: 'music', name: 'Музыка' },
//     { id: 'sports', name: 'Спорт' },
//     { id: 'art', name: 'Творчество' },
//     { id: 'tech', name: 'Программирование' },
//     { id: 'cooking', name: 'Кулинария' }
//   ]

//   // Фильтрация пользователей
//   const filteredUsers = users.filter(user => {
//     if (user.id === 1) return false // не показываем себя в каталоге
    
//     const matchesSearch = searchTerm === '' || 
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    
//     const matchesCity = filters.city === '' || 
//       user.city?.toLowerCase().includes(filters.city.toLowerCase())
    
//     return matchesSearch && matchesCity
//   })

//   const handleMeetingClick = (user) => {
//     setSelectedUser(user)
//     setIsMeetingModalOpen(true)
//   }

//   return (
//     <div className="max-w-7xl mx-auto">
//       {/* Заголовок */}
//       <div className="mb-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//           Каталог навыков
//         </h1>
//         <p className="text-gray-600">
//           Найди ментора для обучения или поделись своими знаниями
//         </p>
//       </div>

//       {/* Поиск и фильтры (код тот же) */}
//       {/* ... */}

//       {/* Сетка пользователей */}
//       {filteredUsers.length > 0 ? (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredUsers.map(user => (
//             <UserCard 
//               key={user.id} 
//               user={user} 
//               onMeetingClick={handleMeetingClick}
//             />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12 bg-gray-50 rounded-lg">
//           <p className="text-gray-500 mb-2">Ничего не найдено</p>
//           <p className="text-sm text-gray-400">
//             Попробуйте изменить параметры поиска
//           </p>
//         </div>
//       )}

//       {/* Модальное окно создания встречи */}
//       <CreateMeetingModal
//         isOpen={isMeetingModalOpen}
//         onClose={() => {
//           setIsMeetingModalOpen(false)
//           setSelectedUser(null)
//         }}
//         selectedUser={selectedUser}
//       />
//     </div>
//   )
// }




// import { useState } from 'react'
// import { Search, Filter, X } from 'lucide-react'
// import UserCard from '../components/cards/UserCard'
// import Button from '../components/ui/Button'
// import { users } from '../data/users'

// export default function SkillsCatalog() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [selectedCategory, setSelectedCategory] = useState('all')
//   const [showFilters, setShowFilters] = useState(false)
//   const [filters, setFilters] = useState({
//     city: '',
//     online: false,
//     offline: false,
//     rating: 'all'
//   })

//   const categories = [
//     { id: 'all', name: 'Все навыки' },
//     { id: 'languages', name: 'Иностранные языки' },
//     { id: 'music', name: 'Музыка' },
//     { id: 'sports', name: 'Спорт' },
//     { id: 'art', name: 'Творчество' },
//     { id: 'tech', name: 'Программирование' },
//     { id: 'cooking', name: 'Кулинария' }
//   ]

//   // Фильтрация пользователей
//   const filteredUsers = users.filter(user => {
//     // Поиск по имени и навыкам
//     const matchesSearch = searchTerm === '' || 
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    
//     // Фильтр по категории (упрощенно для демо)
//     const matchesCategory = selectedCategory === 'all' || 
//       (selectedCategory === 'languages' && user.skills.some(s => s.includes('йский'))) ||
//       (selectedCategory === 'music' && user.skills.includes('Гитара')) ||
//       (selectedCategory === 'tech' && user.skills.includes('Программирование'))
    
//     // Фильтр по городу
//     const matchesCity = filters.city === '' || 
//       user.city?.toLowerCase().includes(filters.city.toLowerCase())
    
//     return matchesSearch && matchesCategory && matchesCity
//   })

//   return (
//     <div className="max-w-7xl mx-auto">
//       {/* Заголовок */}
//       <div className="mb-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//           Каталог навыков
//         </h1>
//         <p className="text-gray-600">
//           Найди ментора для обучения или поделись своими знаниями
//         </p>
//       </div>

//       {/* Поиск и фильтры */}
//       <div className="mb-6 space-y-4">
//         {/* Строка поиска */}
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Поиск по названию навыка или имени..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//           />
//         </div>

//         {/* Категории (скроллящиеся на мобилках) */}
//         <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
//           {categories.map(category => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`
//                 px-4 py-2 rounded-full whitespace-nowrap transition
//                 ${selectedCategory === category.id
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }
//               `}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Кнопка расширенных фильтров */}
//         <button
//           onClick={() => setShowFilters(!showFilters)}
//           className="flex items-center text-gray-600 hover:text-blue-600"
//         >
//           <Filter className="w-4 h-4 mr-2" />
//           Расширенные фильтры
//         </button>

//         {/* Панель расширенных фильтров */}
//         {showFilters && (
//           <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="font-semibold">Фильтры</h3>
//               <button 
//                 onClick={() => setShowFilters(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
            
//             <div className="space-y-4">
//               {/* Город */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Город
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Введите город"
//                   value={filters.city}
//                   onChange={(e) => setFilters({...filters, city: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 />
//               </div>

//               {/* Формат встречи */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Формат встречи
//                 </label>
//                 <div className="space-y-2">
//                   <label className="flex items-center">
//                     <input
//                       type="checkbox"
//                       checked={filters.online}
//                       onChange={(e) => setFilters({...filters, online: e.target.checked})}
//                       className="rounded border-gray-300 text-blue-500 focus:ring-blue-200 mr-2"
//                     />
//                     <span className="text-sm">Онлайн</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="checkbox"
//                       checked={filters.offline}
//                       onChange={(e) => setFilters({...filters, offline: e.target.checked})}
//                       className="rounded border-gray-300 text-blue-500 focus:ring-blue-200 mr-2"
//                     />
//                     <span className="text-sm">Оффлайн</span>
//                   </label>
//                 </div>
//               </div>

//               {/* Рейтинг */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Минимальный рейтинг
//                 </label>
//                 <select
//                   value={filters.rating}
//                   onChange={(e) => setFilters({...filters, rating: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                 >
//                   <option value="all">Любой</option>
//                   <option value="4">4+ звезды</option>
//                   <option value="4.5">4.5+ звезды</option>
//                 </select>
//               </div>

//               {/* Кнопка сброса */}
//               <Button 
//                 variant="outline" 
//                 size="sm"
//                 onClick={() => setFilters({ city: '', online: false, offline: false, rating: 'all' })}
//               >
//                 Сбросить фильтры
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Результаты */}
//       <div className="mb-4">
//         <p className="text-sm text-gray-500">
//           Найдено {filteredUsers.length} пользователей
//         </p>
//       </div>

//       {/* Сетка пользователей */}
//       {filteredUsers.length > 0 ? (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredUsers.map(user => (
//             <UserCard key={user.id} user={user} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-12 bg-gray-50 rounded-lg">
//           <p className="text-gray-500 mb-2">Ничего не найдено</p>
//           <p className="text-sm text-gray-400">
//             Попробуйте изменить параметры поиска
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }