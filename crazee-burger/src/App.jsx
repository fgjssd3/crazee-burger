import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './pages/Login'
import OrderPage from './pages/OrderPage'
import Introuvable from './pages/Introuvable'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'

function App() {


  return (
      <BrowserRouter>
      <Routes>

        {/* 2. Utilisation du composant comme une balise JSX */}

        <Route path="/" element={<LoginPage />} />
        <Route path="/OrderPage/:username" element={<OrderPage/>} />
        <Route path="*" element={<Introuvable />} />


      </Routes>
      </BrowserRouter>

  )
}

export default App
