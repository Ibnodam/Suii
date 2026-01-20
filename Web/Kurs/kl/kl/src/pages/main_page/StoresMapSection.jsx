// StoresMapSection.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Импортируем иконки маркера как URL (Vite-friendly)
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Создаём кастомную иконку
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Применяем иконку по умолчанию ко всем маркерам
L.Marker.prototype.options.icon = DefaultIcon;

export default function StoresMapSection() {
  // Координаты магазина (пример: Сыктывкар, Республика Коми)
  const position = [61.6783, 50.8025];

  return (
    <div className="bg-transparent py-6">
      {/* Заголовок */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Наши магазины</h2>

      {/* Кнопки-фильтры */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-green-500 text-white">
          п.Щельяюр
        </button>
        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
          д.Вертеп
        </button>
        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
          с.Краснобор
        </button>
        <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200">
          д.Диор
        </button>
      </div>

      {/* Карта */}
      <div className="rounded-lg overflow-hidden border border-gray-200">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '400px', width: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Республика Коми<br />
              Магазин «Северяночка»
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}


// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';

// // Фикс для иконки маркера
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
//   iconUrl: require('leaflet/dist/images/marker-icon.png').default,
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
// });

// export default function StoresMapSection() {
//   // Координаты для примера — Республика Коми (как на вашем скриншоте)
//   const position = [61.6783, 50.8025]; // Пример: Сыктывкар

//   // Данные для кнопок-фильтров
//   const locations = [
//     { id: 'shelyur', name: 'п.Щельяюр', coords: [61.6783, 50.8025] },
//     { id: 'vertep', name: 'д.Вертеп', coords: [61.6750, 50.8100] },
//     { id: 'krasnobor', name: 'с.Краснобор', coords: [61.6800, 50.7950] },
//     { id: 'dior', name: 'д.Диор', coords: [61.6700, 50.8200] },
//   ];

//   return (
//     <div className="bg-transparent py-6">
//       {/* Заголовок */}
//       <h2 className="text-xl font-bold text-gray-800 mb-4">Наши магазины</h2>

//       {/* Кнопки-фильтры */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {locations.map((loc) => (
//           <button
//             key={loc.id}
//             className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//               loc.id === 'shelyur'
//                 ? 'bg-green-500 text-white'
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//             aria-pressed={loc.id === 'shelyur'}
//           >
//             {loc.name}
//           </button>
//         ))}
//       </div>

//       {/* Карта */}
//       <div className="rounded-lg overflow-hidden border border-gray-200">
//         <MapContainer
//           center={position}
//           zoom={13}
//           style={{ height: '400px', width: '100%' }}
//           className="cursor-pointer"
//         >
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={position}>
//             <Popup>
//               Республика Коми<br/>
//               Наш магазин здесь
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     </div>
//   );
// }