import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Video, MapPin, ChevronRight, Star } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

export default function MyMeets() {
  const [activeTab, setActiveTab] = useState('upcoming')

  const meetings = {
    upcoming: [
      {
        id: 1,
        user: { name: 'Дмитрий Волков', avatar: '' },
        skill: 'Гитара',
        date: '15 марта 2024',
        time: '16:00',
        duration: 60,
        format: 'online',
        topic: 'Основы игры на гитаре'
      },
      {
        id: 2,
        user: { name: 'Елена Морозова', avatar: '' },
        skill: 'Французский язык',
        date: '16 марта 2024',
        time: '14:30',
        duration: 90,
        format: 'online',
        topic: 'Разговорный французский',
        pending: true
      }
    ],
    past: [
      {
        id: 3,
        user: { name: 'Анна Смирнова', avatar: '' },
        skill: 'Английский язык',
        date: '10 марта 2024',
        time: '11:00',
        duration: 60,
        format: 'online',
        topic: 'Подготовка к интервью',
        reviewed: false
      }
    ]
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Мои встречи
      </h1>

      {/* Табы */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition ${
              activeTab === 'upcoming'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Предстоящие ({meetings.upcoming.length})
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`py-4 px-1 border-b-2 font-medium text-sm transition ${
              activeTab === 'past'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Прошедшие ({meetings.past.length})
          </button>
        </div>
      </div>

      {/* Список встреч */}
      <div className="space-y-4">
        {(activeTab === 'upcoming' ? meetings.upcoming : meetings.past).map(meeting => (
          <Card key={meeting.id} className="hover:shadow-md transition">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start space-x-4">
                <img
                  src={meeting.user.avatar || `https://ui-avatars.com/api/?name=${meeting.user.name}&size=48`}
                  alt={meeting.user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="flex items-center flex-wrap gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">
                      {meeting.user.name}
                    </h3>
                    {meeting.pending && (
                      <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full">
                        Ожидает подтверждения
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{meeting.skill}</p>
                  <div className="space-y-1 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {meeting.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {meeting.time} ({meeting.duration} мин)
                    </div>
                    <div className="flex items-center">
                      {meeting.format === 'online' ? (
                        <Video className="w-4 h-4 mr-2" />
                      ) : (
                        <MapPin className="w-4 h-4 mr-2" />
                      )}
                      {meeting.format === 'online' ? 'Онлайн' : 'Оффлайн'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                {activeTab === 'upcoming' ? (
                  <>
                    {!meeting.pending && (
                      <Link to={`/my-meets/${meeting.id}`}>
                        <Button variant="primary" size="sm">
                          Подробнее
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    )}
                    {meeting.pending && (
                      <div className="flex space-x-2">
                        <Button variant="primary" size="sm">Подтвердить</Button>
                        <Button variant="outline" size="sm">Отклонить</Button>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {!meeting.reviewed ? (
                      <Link to={`/review/new/${meeting.id}`}>
                        <Button variant="primary" size="sm">
                          <Star className="w-4 h-4 mr-2" />
                          Оставить отзыв
                        </Button>
                      </Link>
                    ) : (
                      <span className="text-sm text-green-600">Отзыв оставлен</span>
                    )}
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}