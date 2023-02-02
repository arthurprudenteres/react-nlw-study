import { useState, React } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [nav, setNav] = useState(false)

  const toggleMenu = () => {
    setNav(!nav)
  }

  return (
    <div className="bg-back-color">
      <div className="flex flex-col items-stretch overflow-hidden">
        <Header toggleMenu={toggleMenu} nav={nav} />
        <div className="border-t border-t-light-gray">
          <main>
            <Hero />
            <About />
            <Services />
            <Review />
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
