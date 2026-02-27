import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { meetings } from '../../data/meetings'

export default function CalendarGrid({ onSelectDate, selectedDate }) {
  const [currentDate, setCurrentDate] = useState(new Date())
  
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()
  
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()
  
  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Окторябрь', 'Ноябрь', 'Декабрь'
  ]
  
  const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }
  
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }
  
  // Проверка есть ли встречи в этот день
  const hasMeetingsOnDay = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return meetings.some(m => m.date === dateStr)
  }
  
  // Получение количества встреч в день
  const getMeetingsCount = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return meetings.filter(m => m.date === dateStr).length
  }
  
  const isSelectedDate = (day) => {
    if (!selectedDate) return false
    const [year, month, d] = selectedDate.split('-').map(Number)
    return year === currentDate.getFullYear() && 
           month === currentDate.getMonth() + 1 && 
           d === day
  }
  
  const isToday = (day) => {
    const today = new Date()
    return today.getDate() === day &&
           today.getMonth() === currentDate.getMonth() &&
           today.getFullYear() === currentDate.getFullYear()
  }
  
  // Создаем массив дней для отображения
  const days = []
  for (let i = 0; i < (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); i++) {
    days.push(null) // Пустые ячейки
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      {/* Заголовок с навигацией */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={goToPreviousMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={goToNextMonth}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      {/* Дни недели */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>
      
      {/* Сетка дней */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div key={index} className="aspect-square">
            {day ? (
              <button
                onClick={() => {
                  const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
                  onSelectDate(dateStr)
                }}
                className={`
                  w-full h-full flex flex-col items-center justify-start p-1 rounded-lg transition
                  ${isSelectedDate(day) 
                    ? 'bg-blue-500 text-white' 
                    : isToday(day)
                      ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      : 'hover:bg-gray-100'
                  }
                `}
              >
                <span className={`
                  text-sm font-medium
                  ${isSelectedDate(day) ? 'text-white' : ''}
                  ${!isSelectedDate(day) && isToday(day) ? 'text-blue-600' : ''}
                `}>
                  {day}
                </span>
                {hasMeetingsOnDay(day) && (
                  <span className={`
                    text-xs mt-1
                    ${isSelectedDate(day) ? 'text-blue-200' : 'text-gray-500'}
                  `}>
                    {getMeetingsCount(day)} встречи
                  </span>
                )}
              </button>
            ) : (
              <div className="w-full h-full bg-gray-50 rounded-lg"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}