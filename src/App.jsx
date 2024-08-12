import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import HeroSection from './components/homepage/HeroSection'
import SecondSection from './components/second/SecondSection'
import Third from './components/third/Third'

function App() {
  return (
    <div>
      <HeroSection/>
      <SecondSection/>
      <Third/>
      <Footer/>
    </div>
  )
}

export default App