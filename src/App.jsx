import React, { useState } from 'react'
import Header from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/about/about'
import Experience from './component/experience/experience'
import Portfolio from './component/portfolio/portfolio'
import Footer from './component/footer/footer'
import Contact from './component/contact/contact'
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

const App = () => {
  const [halo, setHalo] = useState('')
  const [nama, setNama] = useState('bonjour')
  const [daun, setDaun] = useState('')

  const okeh = {
    nama, setNama, daun, setDaun, halo, setHalo
  }

    return (
      <Router>
        <>
        <Nav/>
          <Routes >
          <Route exact path='/' element={<Header okeh={okeh}/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/experience' element={<Experience />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/contact' element={<Contact />} />
         </Routes>
         <Footer/>
        </>
      </Router>
    )
}

export default App