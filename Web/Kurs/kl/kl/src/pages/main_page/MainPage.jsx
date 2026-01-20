import React from 'react';
import Top from './Top.jsx'
import ItemSections from './ItemSections.jsx'
import OfferSection from './OffersSection.jsx'
import StoresMapSection from './StoresMapSection.jsx'
import ArticlesSection from './ArticlesSection.jsx'

export default function MainPage() {
  return (
    <div className="bg-[#FBF8EC] flex flex-col">
      <Top />

      <div className="max-w-screen-2xl mx-auto w-full px-4 py-6">
        <ItemSections />
        <OfferSection />
        <StoresMapSection />
        <ArticlesSection />
      </div>
    </div>
  );
}