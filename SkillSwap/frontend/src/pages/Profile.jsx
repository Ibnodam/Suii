import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  MapPin, 
  MessageCircle, 
  Calendar, 
  Star, 
  Share2, 
  Flag,
  CheckCircle
} from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { users } from '../data/users'

export default function Profile() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('about')
  
  const user = users.find(u => u.id === Number(id)) || users[0]
  
  // Дар бади чонам зад муаллим!
  const reviews = [
    {
      id: 1,
      author: 'Михаил',
      rating: 5,
      date: '2024-02-15',
      text: 'Отличный учитель! Очень понятно объясняет, терпеливый и внимательный. За одно занятие разобрали все основы.',
      avatar: ''
    },
    {
      id: 2,
      author: 'Анна',
      rating: 5,
      date: '2024-02-10',
      text: 'Занятие прошло отлично. Очень довольна подходом, уже договорились о следующей встрече.',
      avatar: ''
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Шапка профиля */}
      <Card className="mb-6">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Аватар */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&size=120&background=3b82f6&color=fff`}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            {user.rating >= 4.5 && (
              <div className="flex items-center mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                <CheckCircle className="w-4 h-4 mr-1" />
                Топ-ментор
              </div>
            )}
          </div>

          {/* Информация */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {user.name}
              </h1>
              <div className="flex items-center justify-center md:justify-start mt-2 md:mt-0">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-semibold">{user.rating}</span>
                <span className="mx-1 text-gray-400">•</span>
                <span className="text-gray-500">{user.reviews} отзывов</span>
              </div>
            </div>

            {user.city && (
              <div className="flex items-center justify-center md:justify-start text-gray-500 mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                {user.city}
              </div>
            )}

            <p className="text-gray-600 mb-4">
              Люблю JS! Плевать что там нет нормальной типизации! Ещё люблю отправлять всех на отчисление! АХАХАХАХАААХААХ!
            </p>

            {/* Кнопки действий */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {/* <Button variant="primary">
                <MessageCircle className="w-4 h-4 mr-2" />
                Написать
              </Button> */}
              {/* <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Запланировать встречу
              </Button> */}
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-100 rounded-full transition">
                <Flag className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Табы */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm transition
              ${activeTab === 'about'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }
            `}
          >
            О себе
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm transition
              ${activeTab === 'reviews'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
              }
            `}
          >
            Отзывы ({reviews.length})
          </button>
        </div>
      </div>

      {/* Контент табов */}
      {activeTab === 'about' ? (
        <div className="space-y-6">
          {/* Навыки которые предлагает */}
          <Card>
            <h2 className="text-xl font-semibold mb-4">Предлагает обучение</h2>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Навыки которые ищет */}
          <Card>
            <h2 className="text-xl font-semibold mb-4">Хочет научиться</h2>
            <div className="flex flex-wrap gap-2">
              {user.offer?.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>

          {/* Подробная информация */}
          <Card>
            <h2 className="text-xl font-semibold mb-4">Подробнее</h2>
            <div className="space-y-3">
              <div>
                <span className="text-sm text-gray-500 block">Опыт преподавания</span>
                <span className="text-gray-900">Более 3 лет</span>
              </div>
              <div>
                <span className="text-sm text-gray-500 block">Формат занятий</span>
                <div className="flex gap-2 mt-1">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Онлайн</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Оффлайн</span>
                </div>
              </div>
              <div>
                <span className="text-sm text-gray-500 block">Языки</span>
                <span className="text-gray-900">Русский, English (Intermediate)</span>
              </div>
            </div>
          </Card>
        </div>
      ) : (
        // Вкладка с отзывами
        <div className="space-y-4">
          {reviews.map(review => (
            <Card key={review.id}>
              <div className="flex items-start gap-4">
                <img
                  src={review.avatar || `https://ui-avatars.com/api/?name=${review.author}&size=40`}
                  alt={review.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{review.author}</h4>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}