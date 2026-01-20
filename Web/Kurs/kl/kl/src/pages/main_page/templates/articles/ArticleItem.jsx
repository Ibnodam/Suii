// templates/articles/ArticleItem.jsx
import picture from './spring.png';

export default function ArticleItem() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden max-w-sm w-full font-sans">
      {/* Изображение */}
      <img
        src={picture}
        alt="Весеннее настроение"
        className="w-full h-48 object-cover"
      />

      {/* Контент */}
      <div className="p-5">
        {/* Дата */}
        <p className="text-xs text-gray-500 mb-2">05.03.2021</p>

        {/* Заголовок */}
        <h3 className="font-bold text-lg text-gray-800 mb-3">
          Весеннее настроение для каждой
        </h3>

        {/* Текст */}
        <p className="text-sm text-gray-700 mb-4">
          8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.
        </p>

        {/* Кнопка "Подробнее" */}
        <button className="w-full py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition cursor-pointer">
          Подробнее
        </button>
      </div>
    </div>
  );
}