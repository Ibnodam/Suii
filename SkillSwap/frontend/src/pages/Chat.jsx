import { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Phone, Video, Send } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

// Мок-данные для сообщений
const chats = [
  {
    id: 1,
    user: {
      id: 2,
      name: "Дмитрий Волков",
      avatar: "",
      online: true
    },
    messages: [
      {
        id: 1,
        senderId: 2,
        text: "Привет! Вижу ты хочешь научиться играть на гитаре?",
        time: "10:15"
      },
      {
        id: 2,
        senderId: 1,
        text: "Да, давно мечтаю! Ты преподаешь?",
        time: "10:20"
      },
      {
        id: 3,
        senderId: 2,
        text: "Да, уже 3 года. Могу помочь с основами",
        time: "10:25"
      },
      {
        id: 4,
        senderId: 2,
        text: "Привет! Когда удобно встретиться?",
        time: "10:30"
      }
    ]
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
    messages: [
      {
        id: 1,
        senderId: 3,
        text: "Привет! Готова к занятию по французскому?",
        time: "вчера в 14:00"
      },
      {
        id: 2,
        senderId: 1,
        text: "Да, конечно! Во сколько встречаемся?",
        time: "вчера в 14:05"
      },
      {
        id: 3,
        senderId: 3,
        text: "Давай в 16:00 по зуму?",
        time: "вчера в 14:10"
      }
    ]
  }
]

export default function Chat() {
  const { id } = useParams()
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef(null)
  
  const chat = chats.find(c => c.id === Number(id)) || chats[0]
  const [messages, setMessages] = useState(chat.messages)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message = {
      id: messages.length + 1,
      senderId: 1,
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages([...messages, message])
    setNewMessage('')
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Шапка */}
      <div className="flex items-center justify-between mb-4">
        <Link to="/messages" className="flex items-center text-gray-600 hover:text-blue-600">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Назад
        </Link>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full">
            <Video className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Чат */}
      <Card className="h-[600px] flex flex-col p-0 overflow-hidden">
        {/* Информация о пользователе */}
        <div className="p-3 border-b border-gray-200 flex items-center">
          <img
            src={chat.user.avatar || `https://ui-avatars.com/api/?name=${chat.user.name}&size=32`}
            alt={chat.user.name}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <h3 className="font-semibold">{chat.user.name}</h3>
            <p className="text-xs text-gray-500">
              {chat.user.online ? 'В сети' : `Был(а) ${chat.user.lastSeen || 'давно'}`}
            </p>
          </div>
        </div>

        {/* Сообщения */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => {
            const isMe = msg.senderId === 1
            
            return (
              <div
                key={msg.id}
                className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] ${isMe ? 'order-2' : ''}`}>
                  <div
                    className={`
                      px-4 py-2 rounded-2xl break-words
                      ${isMe
                        ? 'bg-blue-500 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-900 rounded-bl-none'
                      }
                    `}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <div className={`text-right mt-1 text-xs ${
                      isMe ? 'text-blue-200' : 'text-gray-500'
                    }`}>
                      {msg.time}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Форма отправки */}
        <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Написать сообщение..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <Button type="submit" variant="primary" className="!p-2 rounded-full">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}