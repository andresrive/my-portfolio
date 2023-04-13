
import { Routes, Route } from 'react-router-dom'

import React from 'react'
import Header from './sections/header/Header'
import Navbar from './sections/navbar/Navbar'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Portfolio from './sections/portfolio/Portfolio'
import Technologies from './sections/technologies/Technologies'
import FAQS from './sections/faqs/FAQS'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import FloatingNav from './sections/floatingNav/FloatingNav'
import Modal from './components/Modal'
import Theme from './theme/Theme'
import { useThemeContext } from './context/theme.context'



function App() {

  const { themeState } = useThemeContext()

  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Technologies />
      <FAQS />
      <Contact />
      <Footer />
      <FloatingNav />
      <Theme />
    </main>
  )
}

export default App
