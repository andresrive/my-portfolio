import React, { useEffect, useRef, useState } from 'react'
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
import Theme from './theme/Theme'
import { useThemeContext } from './context/theme.context'




function App() {


  const { themeState } = useThemeContext()

  const mainRef = useRef()
  const [showFloatingNav, setShowFloatingNav] = useState(true)
  const [siteYPosition, setSiteYPosition] = useState(0)

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true)
  }
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false)
  }

  const floatingNavToggleHandler = () => {
    if (siteYPosition < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPosition > (mainRef?.current?.getBoundingClientRect().y + 20)) {
      showFloatingNavHandler()
    }
    else hideFloatingNavHandler(mainRef?.current?.getBoundingClientRect().y)

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y)
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000)

    return () => clearInterval(checkYPosition)
  }, [siteYPosition])

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Technologies />
      <FAQS />
      <Contact />
      <Footer />
      {showFloatingNav && <FloatingNav />}
      <Theme />
    </main>
  )
}

export default App
