import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signin from './components/Signin'
import Register from './components/Register'
import UserDashboard from './components/User/UserDashoard'
import Footer from './components/Footer'
import ReligiousTourism from './components/Themes/ReligiousTourism'
import HillStations from './components/Themes/HillStations'
import HistoricalTourism from './components/Themes/HistoricalTourism'
import WildlifeTourism from './components/Themes/WildlifeTourism'
import BeachTourism from './components/Themes/BeachTourism'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Error from './components/Error'
const App = () => {
  return (
    
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Signin/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Footer" element={<Footer/>} />
            <Route path="*" element={<Error/>} />
            <Route path="/UserDashboard" element={<UserDashboard/>} />
            <Route path="/religious-tourism" element={<ReligiousTourism/>} />
            <Route path="/hill-stations" element={<HillStations/>} />
            <Route path="/historical-tourism" element={<HistoricalTourism/>} />
            <Route path="/wildlife-tourism" element={<WildlifeTourism/>} />
            <Route path="/beach-tourism" element={<BeachTourism/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App