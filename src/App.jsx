import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css';
import './assets/css/style.css'
import './assets/css/res.css'

import Header from './componenets/sections/Header'
import About from './componenets/sections/About'
import Projects from './componenets/sections/Projects'
import Work from './componenets/sections/Work'
import Contact from './componenets/sections/Contact'
import Myself from './componenets/sections/Myself'
import Social from './componenets/cards/Social'
import Name from './componenets/cards/Name'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Myself />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Social />
      <Name />
    </div>
  )
}

export default App