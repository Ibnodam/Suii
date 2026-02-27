import { useState } from 'react'
import { X, Calendar, Clock, Video, MapPin, Users } from 'lucide-react'
import Button from '../ui/Button'
import { users } from '../../data/users'

export default function CreateMeetingModal({ isOpen, onClose, onCreateMeeting, selectedUser = null }) {
  const [step, setStep] = useState(1) // 1 - выбор пользователя, 2 - выбор времени, 3 - подтверждение
  const [formData, setFormData] = useState({
    userId: selectedUser?.id || '',
    skill: '',
    date: '',
    time: '',
    duration: '60',
    format: 'online',
    topic: '',
    comment: ''
  })

  if (!isOpen) return null

  // Фильтруем пользователей (убираем текущего)
  const availableUsers = users.filter(u => u.id !== 1)

  const handleNext = () => {
    if (step === 1 && !formData.userId) {
      alert('Выберите пользователя')
      return
    }
    if (step === 2 && (!formData.date || !formData.time)) {
      alert('Выберите дату и время')
      return
    }
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = () => {
    // Здесь будет создание встречи
    console.log('Создание встречи:', formData)
    alert('Встреча создана! Проверьте календарь.')
    onClose()
    // Сброс формы
    setStep(1)
    setFormData({
      userId: '',
      skill: '',
      date: '',
      time: '',
      duration: '60',
      format: 'online',
      topic: '',
      comment: ''
    })
  }

  const selectedUserData = users.find(u => u.id === formData.userId)

  // Получаем текущую дату в формате YYYY-MM-DD для min атрибута
  const today = new Date().toISOString().split('T')[0]

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Заголовок */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">
            Создание встречи
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Прогресс бар */}
        <div className="px-6 pt-4">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${step >= i 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                  }
                `}>
                  {i}
                </div>
                {i < 3 && (
                  <div className={`
                    w-12 h-1 mx-1
                    ${step > i ? 'bg-blue-500' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 px-1">
            <span>Выбор ментора</span>
            <span>Время и формат</span>
            <span>Подтверждение</span>
          </div>
        </div>

        {/* Шаг 1: Выбор пользователя */}
        {step === 1 && (
          <div className="p-6 space-y-4">
            <h3 className="font-semibold text-gray-900 mb-4">
              С кем хотите встретиться?
            </h3>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {availableUsers.map(user => (
                <label
                  key={user.id}
                  className={`
                    flex items-center p-4 border rounded-xl cursor-pointer transition
                    ${formData.userId === user.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="userId"
                    value={user.id}
                    checked={formData.userId === user.id}
                    onChange={(e) => setFormData({
                      ...formData, 
                      userId: Number(e.target.value),
                      skill: '' // Сбрасываем навык при смене пользователя
                    })}
                    className="sr-only"
                  />
                  <img
                    src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&size=48`}
                    alt={user.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{user.name}</h4>
                    <p className="text-sm text-gray-500">{user.city || 'Город не указан'}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {user.skills.slice(0, 3).map(skill => (
                        <span key={skill} className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  {formData.userId === user.id && (
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      ✓
                    </div>
                  )}
                </label>
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <Button onClick={handleNext} variant="primary">
                Далее
              </Button>
            </div>
          </div>
        )}

        {/* Шаг 2: Выбор времени и формата */}
        {step === 2 && selectedUserData && (
          <div className="p-6 space-y-6">
            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <img
                src={selectedUserData.avatar || `https://ui-avatars.com/api/?name=${selectedUserData.name}&size=40`}
                alt={selectedUserData.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium text-gray-900">{selectedUserData.name}</p>
                <p className="text-sm text-gray-500">Выбранный ментор</p>
              </div>
            </div>

            {/* Выбор навыка */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Чем хотите заниматься?
              </label>
              <select
                value={formData.skill}
                onChange={(e) => setFormData({...formData, skill: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Выберите навык</option>
                {selectedUserData.skills.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>

            {/* Дата и время */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Дата
                </label>
                <input
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Время
                </label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {/* Длительность */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Длительность
              </label>
              <select
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="30">30 минут</option>
                <option value="60">1 час</option>
                <option value="90">1.5 часа</option>
                <option value="120">2 часа</option>
              </select>
            </div>

            {/* Формат */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Формат встречи
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`
                  flex items-center justify-center p-3 border rounded-lg cursor-pointer
                  ${formData.format === 'online' 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}>
                  <input
                    type="radio"
                    name="format"
                    value="online"
                    checked={formData.format === 'online'}
                    onChange={(e) => setFormData({...formData, format: e.target.value})}
                    className="sr-only"
                  />
                  <Video className="w-4 h-4 mr-2" />
                  Онлайн
                </label>
                <label className={`
                  flex items-center justify-center p-3 border rounded-lg cursor-pointer
                  ${formData.format === 'offline' 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}>
                  <input
                    type="radio"
                    name="format"
                    value="offline"
                    checked={formData.format === 'offline'}
                    onChange={(e) => setFormData({...formData, format: e.target.value})}
                    className="sr-only"
                  />
                  <MapPin className="w-4 h-4 mr-2" />
                  Оффлайн
                </label>
              </div>
            </div>

            {/* Тема встречи */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Тема встречи
              </label>
              <input
                type="text"
                value={formData.topic}
                onChange={(e) => setFormData({...formData, topic: e.target.value})}
                placeholder="Например: Основы игры на гитаре"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Комментарий */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Комментарий (необязательно)
              </label>
              <textarea
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                rows={3}
                placeholder="Дополнительная информация для ментора"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button onClick={handleBack} variant="outline">
                Назад
              </Button>
              <Button onClick={handleNext} variant="primary">
                Далее
              </Button>
            </div>
          </div>
        )}

        {/* Шаг 3: Подтверждение */}
        {step === 3 && selectedUserData && (
          <div className="p-6 space-y-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Проверьте детали встречи
            </h3>

            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              <div className="flex items-center">
                <img
                  src={selectedUserData.avatar || `https://ui-avatars.com/api/?name=${selectedUserData.name}&size=40`}
                  alt={selectedUserData.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900">{selectedUserData.name}</p>
                  <p className="text-sm text-gray-500">Ментор</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-500">Навык</p>
                  <p className="font-medium text-gray-900">{formData.skill}</p>
                </div>
                <div>
                  <p className="text-gray-500">Дата</p>
                  <p className="font-medium text-gray-900">
                    {new Date(formData.date).toLocaleDateString('ru-RU')}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Время</p>
                  <p className="font-medium text-gray-900">{formData.time}</p>
                </div>
                <div>
                  <p className="text-gray-500">Длительность</p>
                  <p className="font-medium text-gray-900">{formData.duration} мин</p>
                </div>
                <div>
                  <p className="text-gray-500">Формат</p>
                  <p className="font-medium text-gray-900">
                    {formData.format === 'online' ? 'Онлайн' : 'Оффлайн'}
                  </p>
                </div>
              </div>

              {formData.topic && (
                <div>
                  <p className="text-gray-500 text-sm">Тема</p>
                  <p className="text-gray-900">{formData.topic}</p>
                </div>
              )}

              {formData.comment && (
                <div>
                  <p className="text-gray-500 text-sm">Комментарий</p>
                  <p className="text-gray-600 text-sm">{formData.comment}</p>
                </div>
              )}
            </div>

            <div className="flex justify-between pt-4">
              <Button onClick={handleBack} variant="outline">
                Назад
              </Button>
              <Button onClick={handleSubmit} variant="primary">
                Создать встречу
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}