import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  MapPin,
  Plus,
  ChevronRight
} from 'lucide-react'
import CalendarGrid from '../components/calendar/CalendarGrid'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { meetings } from '../data/meetings'

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  )
  const [view, setView] = useState('month') // month, week, day
  
  // Фильтруем встречи по выбранной дате
  const dayMeetings = meetings.filter(m => m.date === selectedDate)
  
  // Группировка по статусу
  const confirmedMeetings = dayMeetings.filter(m => m.status === 'confirmed')
  const pendingMeetings = dayMeetings.filter(m => m.status === 'pending')
  const completedMeetings = dayMeetings.filter(m => m.status === 'completed')
  
  // Форматирование даты
  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('ru-RU', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    })
  }
  
  return (
    <div className="max-w-7xl mx-auto">
      {/* Заголовок */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
          Календарь встреч
        </h1>
        <Link to="/my-meets/new">
          <Button variant="primary">
            <Plus className="w-4 h-4 mr-2" />
            Новая встреча
          </Button>
        </Link>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Календарь */}
        <div className="lg:col-span-2">
          <CalendarGrid 
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
          
          {/* Переключение вида (заглушка) */}
          <div className="flex mt-4 bg-white rounded-lg shadow-sm p-1 inline-flex">
            {['month', 'week', 'day'].map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium capitalize transition
                  ${view === v 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {v === 'month' ? 'Месяц' : v === 'week' ? 'Неделя' : 'День'}
              </button>
            ))}
          </div>
        </div>
        
        {/* Встречи на выбранный день */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {selectedDate ? formatDate(selectedDate) : 'Выберите дату'}
            </h2>
            
            {dayMeetings.length === 0 ? (
              <div className="text-center py-8">
                <CalendarIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 mb-2">Нет встреч</p>
                <p className="text-sm text-gray-400 mb-4">
                  На этот день ничего не запланировано
                </p>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Запланировать
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Подтвержденные встречи */}
                {confirmedMeetings.length > 0 && (
                  <div>
                    <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Подтвержденные
                    </h3>
                    <div className="space-y-2">
                      {confirmedMeetings.map(meeting => (
                        <MeetingCard key={meeting.id} meeting={meeting} />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Ожидающие подтверждения */}
                {pendingMeetings.length > 0 && (
                  <div>
                    <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Ожидают подтверждения
                    </h3>
                    <div className="space-y-2">
                      {pendingMeetings.map(meeting => (
                        <MeetingCard key={meeting.id} meeting={meeting} pending />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Прошедшие */}
                {completedMeetings.length > 0 && (
                  <div>
                    <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Прошедшие
                    </h3>
                    <div className="space-y-2">
                      {completedMeetings.map(meeting => (
                        <MeetingCard key={meeting.id} meeting={meeting} completed />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}

// Внутренний компонент для карточки встречи
function MeetingCard({ meeting, pending, completed }) {
  return (
    <Link to={`/my-meets/${meeting.id}`}>
      <div className={`
        p-3 rounded-lg border transition hover:shadow-md
        ${completed 
          ? 'bg-gray-50 border-gray-200' 
          : pending
            ? 'bg-yellow-50 border-yellow-200'
            : 'bg-white border-gray-200 hover:border-blue-300'
        }
      `}>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center">
            <img
              src={meeting.userAvatar || `https://ui-avatars.com/api/?name=${meeting.userName}&size=24`}
              alt={meeting.userName}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="font-medium text-sm">{meeting.userName}</span>
          </div>
          {pending && (
            <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full">
              Ожидает
            </span>
          )}
        </div>
        
        <p className="text-sm text-gray-600 mb-2">{meeting.skill}</p>
        
        <div className="space-y-1">
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="w-3 h-3 mr-1" />
            {meeting.time} ({meeting.duration} мин)
          </div>
          <div className="flex items-center text-xs text-gray-500">
            {meeting.format === 'online' ? (
              <Video className="w-3 h-3 mr-1" />
            ) : (
              <MapPin className="w-3 h-3 mr-1" />
            )}
            {meeting.format === 'online' ? 'Онлайн' : 'Оффлайн'}
          </div>
        </div>
        
        {!completed && (
          <div className="mt-2 flex justify-end">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        )}
      </div>
    </Link>
  )
}