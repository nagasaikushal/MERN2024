import React from 'react'
import Home from './components/Home'
import Home1 from './components/Home1'
import About from './components/About'
import Contact from './components/Contact'
import Signin from './components/Signin'
import UserDashboard from "./components/UserDashboard"
import Register from './components/Register'
import Travel from './components/Travel'
import Plan from './components/Plan'
import Dashboard from './components/DashProfile'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

const App = () => {
  return (
    
    <div>
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Home1/>} />
            <Route path="/Home1" element={<Home1/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Signin/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/UserDashboard" element={<UserDashboard/>} />
            <Route path="/Travel" element={<Travel/>} />
            <Route path="/Plan" element={<Plan/>} />
            <Route path="/Dashboard" element={<Dashboard/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App