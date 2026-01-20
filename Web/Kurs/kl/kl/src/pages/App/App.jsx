  // App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header.jsx';
import MainPage from '../main_page/MainPage.jsx';
import CatalogPage from '../catalog/CatalogPage.jsx';
import Footer from '../footer/Footer.jsx';
import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}





////////// Первоначальная версия. Работала отлично!
// import { useState } from 'react'
// import './App.css'
// import Header from '../Header.jsx'
// import MainPage from '../main_page/MainPage.jsx'
// import Footer from '../footer/Footer.jsx'

// function App() {
 

//   return (
//     <div>
//     <Header/>
//     <MainPage/>
//     <Footer/>
//     </div>
//     )
// }

// export default App
