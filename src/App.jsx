import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { MainContent } from './components/MainContent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GorkhaIndex from './components/gorkhapatra/GorkhaIndex'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/notice" element={<MainContent />} />
        <Route path="/gorkhapatra" element={<GorkhaIndex />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
