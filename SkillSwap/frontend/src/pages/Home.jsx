import { Link } from 'react-router-dom'
import { users } from '../data/users'
import UserCard from '../components/cards/UserCard'
import Button from '../components/ui/Button'
import { ArrowRight, Star, Users, Calendar } from 'lucide-react'

const Home = () => {
  return (
    <div className="space-y-16">
      
      {/* Hero секция */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Обменивайся навыками
          <span className="text-blue-600 block mt-2">бесплатно и с пользой</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Найди людей, которые научат тебя новому, и поделись своими знаниями
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/skills">
            <Button size="lg" variant="primary" className="w-full sm:w-auto">
              Найти навыки
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
          <Link to="/register">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Стать учителем
            </Button>
          </Link>
        </div>
      </section>

      {/* Преимущества */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">1000+ пользователей</h3>
          <p className="text-gray-600">Уже находят друзей и обмениваются знаниями</p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">5+ категорий навыков</h3>
          <p className="text-gray-600">От языков до программирования и творчества</p>
        </div>
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Гибкое расписание</h3>
          <p className="text-gray-600">Планируйте встречи в удобное время</p>
        </div>
      </section>

      {/* Популярные пользователи */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Популярные <span className="text-blue-600">менторы</span>
          </h2>
          <Link to="/skills" className="text-blue-600 hover:text-blue-700 font-medium">
            Смотреть всех
            <ArrowRight className="w-4 h-4 ml-1 inline" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.slice(0, 3).map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </section>

      {/* Как это работает */}
      <section className="bg-gray-50 -mx-4 px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Как это работает
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold mb-2">Найди навык</h3>
            <p className="text-gray-600 text-sm">Выбери, чему хочешь научиться</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold mb-2">Свяжись с ментором</h3>
            <p className="text-gray-600 text-sm">Напиши в чат и договорись о встрече</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold mb-2">Обменяйтесь опытом</h3>
            <p className="text-gray-600 text-sm">Проведите встречу и поделитесь знаниями</p>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Готов начать?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Присоединяйся к сообществу и делись знаниями
        </p>
        <Link to="/register">
          <Button 
            size="lg" 
            variant="primary" 
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Зарегистрироваться бесплатно
          </Button>
        </Link>
      </section>
    </div>
  )
}

export default Home