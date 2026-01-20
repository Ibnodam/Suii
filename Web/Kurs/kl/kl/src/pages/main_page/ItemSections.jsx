// import Item from './templates/Item.jsx'

// export default function ItemSections() {
//     return(
//         <div>

//         </div>
//     )
// }

import Item from './templates/Item.jsx';

export default function ItemSections() {
  return (
    <div className="bg-transparent py-6">
      {/* --- Акции --- */}
      <section className="mb-8 bg-transparent">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Акции</h2>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-green-600 cursor-pointer">
            Все акции &gt;
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Item key={`sale-${i}`} />
          ))}
        </div>
      </section>

      {/* --- Новинки --- */}
      <section className="mb-8 bg-transparent">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Новинки</h2>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-green-600 cursor-pointer">
            Все новинки &gt;
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Item key={`new-${i}`} />
          ))}
        </div>
      </section>

      {/* --- Покупали раньше --- */}
      <section className="mb-8 bg-transparent">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Покупали раньше</h2>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-green-600 cursor-pointer">
            Все покупки &gt;
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Item key={`past-${i}`} />
          ))}
        </div>
      </section>
    </div>
  );
}