import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'

// Страницы
import Home from './pages/Home'
import SkillsCatalog from './pages/SkillsCatalog'
import Profile from './pages/Profile'
import ProfileEdit from './pages/ProfileEdit' //
import Calendar from './pages/Calendar'        
import Messages from './pages/Messages' //
import Chat from './pages/Chat' //
import MyMeets from './pages/MyMeets'//
import Premium from './pages/Premium' //
import About from './pages/About'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsCatalog />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/:id" element={<Chat />} />
        <Route path="/my-meets" element={<MyMeets />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}



// import { Routes, Route } from 'react-router-dom'
// import Layout from './components/layout/Layout'

// // Страницы
// import Home from './pages/Home'
// import SkillsCatalog from './pages/SkillsCatalog'
// import Profile from './pages/Profile'
// import ProfileEdit from './pages/ProfileEdit'
// import Calendar from './pages/Calendar'
// import Messages from './pages/Messages'    // ✅ должно быть
// import Chat from './pages/Chat'            // ✅ должно быть
// import MyMeets from './pages/MyMeets'
// import Premium from './pages/Premium'
// import About from './pages/About'

// export default function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/skills" element={<SkillsCatalog />} />
//         <Route path="/profile/:id" element={<Profile />} />
//         <Route path="/profile/edit" element={<ProfileEdit />} />
//         <Route path="/calendar" element={<Calendar />} />
//         <Route path="/messages" element={<Messages />} />        {/* ✅ */}
//         <Route path="/messages/:id" element={<Chat />} />        {/* ✅ */}
//         <Route path="/my-meets" element={<MyMeets />} />
//         <Route path="/premium" element={<Premium />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Layout>
//   )
// }




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
