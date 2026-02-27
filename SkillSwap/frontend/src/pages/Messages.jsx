import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import Card from '../components/ui/Card'

// Мок-данные для чатов
const chats = [
  {
    id: 1,
    user: {
      id: 2,
      name: "Дмитрий Волков",
      avatar: "",
      online: true
    },
    lastMessage: {
      text: "Привет! Когда удобно встретиться?",
      time: "10:30",
      read: false
    }
  },
  {
    id: 2,
    user: {
      id: 3,
      name: "Елена Морозова",
      avatar: "",
      online: false,
      lastSeen: "вчера в 18:30"
    },
    lastMessage: {
      text: "Спасибо за урок! Было очень полезно",
      time: "вчера",
      read: true
    }
  },
  {
    id: 3,
    user: {
      id: 4,
      name: "Анна Смирнова",
      avatar: "",
      online: true
    },
    lastMessage: {
      text: "Давай завтра в 15:00?",
      time: "09:15",
      read: true
    }
  }
]

export default function Messages() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredChats = chats.filter(chat =>
    chat.user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Сообщения
      </h1>

      <Card className="p-0 overflow-hidden">
        {/* Поиск */}
        <div className="p-3 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск по имени"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
            />
          </div>
        </div>

        {/* Список чатов */}
        <div className="divide-y divide-gray-100">
          {filteredChats.map(chat => (
            <Link
              key={chat.id}
              to={`/messages/${chat.id}`}
              className="block p-3 hover:bg-gray-50 transition"
            >
              <div className="flex items-start space-x-3">
                {/* Аватар с индикатором онлайн */}
                <div className="relative">
                  <img
                    src={chat.user.avatar || `https://ui-avatars.com/api/?name=${chat.user.name}&size=48&background=3b82f6&color=fff`}
                    alt={chat.user.name}
                    className="w-12 h-12 rounded-full"
                  />
                  {chat.user.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>

                {/* Информация */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {chat.user.name}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {chat.lastMessage.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className={`text-sm truncate ${
                      !chat.lastMessage.read 
                        ? 'text-gray-900 font-medium' 
                        : 'text-gray-500'
                    }`}>
                      {chat.lastMessage.text}
                    </p>
                    {!chat.lastMessage.read && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {filteredChats.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Ничего не найдено
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}