import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signin from './components/Signin'
import Register from './components/Register'
import Footer from './components/Footer'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import NavBar from './components/NavBar'
const App = () => {
  return (
    
    <div>
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Signin/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Footer" element={<Footer/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App