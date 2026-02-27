import { Link } from 'react-router-dom'
import { Check, Star, Zap, Shield, Users, Calendar } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

export default function Premium() {
  const plans = [
    {
      name: 'Базовый',
      price: '0',
      period: 'навсегда',
      features: [
        'Поиск менторов',
        'Чат с пользователями',
        '5 встреч в месяц',
        'Базовый профиль'
      ],
      buttonText: 'Текущий план',
      buttonVariant: 'outline',
      highlighted: false
    },
    {
      name: 'Премиум',
      price: '499',
      period: 'в месяц',
      features: [
        'Все функции базового',
        'Безлимитные встречи',
        'Продвинутый профиль',
        'Приоритет в поиске',
        'Верификация',
        'Статистика просмотров'
      ],
      buttonText: 'Подключить',
      buttonVariant: 'primary',
      highlighted: true
    },
    {
      name: 'Бизнес',
      price: '999',
      period: 'в месяц',
      features: [
        'Все функции премиум',
        'Командный профиль',
        'Корпоративные встречи',
        'API доступ',
        'Выделенная поддержка'
      ],
      buttonText: 'Связаться',
      buttonVariant: 'outline',
      highlighted: false
    }
  ]

  const benefits = [
    {
      icon: <Star className="w-6 h-6 text-amber-500" />,
      title: 'Продвижение профиля',
      description: 'Ваш профиль будет показываться выше в поиске'
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: 'Безлимитные встречи',
      description: 'Планируйте сколько угодно встреч без ограничений'
    },
    {
      icon: <Shield className="w-6 h-6 text-amber-500" />,
      title: 'Верификация',
      description: 'Подтвержденный статус и значок в профиле'
    },
    {
      icon: <Users className="w-6 h-6 text-amber-500" />,
      title: 'Приоритетная поддержка',
      description: 'Помощь в любое время в течение часа'
    },
    {
      icon: <Calendar className="w-6 h-6 text-amber-500" />,
      title: 'Расширенный календарь',
      description: 'Планирование на месяцы вперед'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Заголовок */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Премиум подписка
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Откройте все возможности платформы и находите лучших менторов быстрее
        </p>
      </div>

      {/* Тарифы */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`relative ${plan.highlighted ? 'border-2 border-amber-400 shadow-lg scale-105' : ''}`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Рекомендуем
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-end justify-center">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 mb-1 ml-1">₽</span>
                <span className="text-gray-500 text-sm mb-1 ml-2">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={plan.buttonVariant} 
              className="w-full"
            >
              {plan.buttonText}
            </Button>
          </Card>
        ))}
      </div>

      {/* Преимущества */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Все преимущества премиум
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {benefit.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </Card>
        ))}
      </div>

      {/* FAQ */}
      <Card className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Часто задаваемые вопросы
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Как отключить подписку?
            </h3>
            <p className="text-gray-600 text-sm">
              Вы можете отключить подписку в любой момент в настройках профиля.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Есть ли пробный период?
            </h3>
            <p className="text-gray-600 text-sm">
              Да, мы даем 7 дней бесплатного премиума для новых пользователей.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Какие способы оплаты?
            </h3>
            <p className="text-gray-600 text-sm">
              Банковские карты, Apple Pay, Google Pay и СБП.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}