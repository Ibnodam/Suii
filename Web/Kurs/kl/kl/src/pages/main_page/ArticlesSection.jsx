// ArticlesSection.jsx
import Article from './templates/articles/ArticleItem.jsx';

export default function ArticlesSection() {
  return (
    <div className="bg-transparent py-6 ">
      {/* Заголовок и ссылка */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Статьи</h2>
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-green-600 cursor-pointer">
          Все статьи &gt;
        </a>
      </div>

      {/* Сетка БЕЗ адаптивности: всегда 3 колонки */}
      <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-6">
        <Article />
        <Article />
        <Article />
      </div>
      </div>
    </div>
  );
}