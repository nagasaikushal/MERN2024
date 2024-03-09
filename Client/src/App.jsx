import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signin from './components/Signin'
import UserDashboard from "./components/UserDashboard"
import Register from './components/Register'
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
            <Route path="/UserDashboard" element={<UserDashboard/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App