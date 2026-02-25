// src/pages/HomePage/About/First.jsx
import React from 'react';

// Логотипы клиентов
import forSale from './pics/partners/for_sale.png';
import happyHome from './pics/partners/happyHome.png';
import higher from './pics/partners/higher.png';
import inDepth from './pics/partners/inDepth.png';
import natural from './pics/partners/natural.png';
import sunset from './pics/partners/sunset.png';

export default function PartnersRow() {
  const logos = [
    forSale,
    happyHome,
    higher,
    inDepth,
    natural,
    sunset,
  ];

  return (
    <div className="flex justify-center items-center gap-28 py-12">
      {logos.map((logo, index) => (
        <a
          key={index}
          href="#"
          className="transition-opacity duration-300 hover:opacity-70"
        >
          <img
            src={logo}
            alt={`Client ${index + 1}`}
            className="h-16 object-contain"
          />
        </a>
      ))}
    </div>
  );
}