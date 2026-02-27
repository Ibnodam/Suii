import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">SkillSwap</h3>
            <p className="text-sm text-gray-600">Обменивайся навыками бесплатно</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/skills" className="text-gray-600 hover:text-blue-600">Навыки</Link></li>
              <li><Link to="/calendar" className="text-gray-600 hover:text-blue-600">Календарь</Link></li>
              <li><Link to="/messages" className="text-gray-600 hover:text-blue-600">Сообщения</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Информация</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600">О нас</Link></li>
              <li><Link to="/premium" className="text-gray-600 hover:text-blue-600">Премиум</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Контакты</h4>
            <p className="text-sm text-gray-600">support@skillswap.ru</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-500">
          © 2026 SkillSwap. Все права защищены.
        </div>
      </div>
    </footer>
  )
}