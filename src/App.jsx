import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Game from './components/Game.jsx'

import './App.css'

function App() {


  return (
    <>
      <Header />
        <Game />
      <Footer />
    </>
  )
}

export default App
