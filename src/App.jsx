// import { useState } from 'react'
// src/index.js or src/App.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Components/Header/Header'
// import About from './Components/About/About'
import Experience from './Components/Services/Experience'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
