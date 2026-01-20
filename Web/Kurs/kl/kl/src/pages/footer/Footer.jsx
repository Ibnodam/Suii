import logo from './images/logo.png';
import phone from './images/phone.png';
import instagram from './images/instagram.png';
import vk from './images/vk.png';
import facebook from './images/facebook.png';
import odnoklassniki from './images/odnoklassniki.png';
import background from './images/bg.png';

export default function Footer() {
  return (
    <footer
      className="bg-[#FBF8EC] w-full h-32 flex items-center justify-between px-6"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      }}
    >
        <div className='flex items-center justify-between px-6 max-w-screen-2xl mx-auto w-full'>
      {/* Логотип */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Логотип Северяночка" className="w-16 h-11" />
        {/* Можно заменить на реальный логотип, если есть */}
      </div>

      {/* Меню */}
      <div className="flex space-x-6 text-sm text-gray-700">
        <a href="#" className="hover:text-green-600 transition">0 компаний</a>
        <a href="#" className="hover:text-green-600 transition">Контакты</a>
        <a href="#" className="hover:text-green-600 transition">Вакансии</a>
        <a href="#" className="hover:text-green-600 transition">Статьи</a>
        <a href="#" className="hover:text-green-600 transition">Политика обработки персональных данных</a>
      </div>

      {/* Соцсети + Телефон */}
      <div className="flex items-center gap-4">
        {/* Иконки соцсетей */}
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80">
          <img src={instagram} alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80">
          <img src={vk} alt="VK" className="w-6 h-6" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80">
          <img src={facebook} alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="https://ok.ru" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80">
          <img src={odnoklassniki} alt="Одноклассники" className="w-6 h-6" />
        </a>

        {/* Телефон */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <img src={phone} alt="Телефон" className="w-5 h-5" />
          <span>8 800 777 33 33</span>
        </div>
      </div>
      </div>
    </footer>
  );
}