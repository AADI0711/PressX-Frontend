
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import {BrowserRouter, Routes , Route } from 'react-router-dom'
import About from './Pages/About.jsx'
import ContatcUs from './Pages/ContatcUs.jsx'
import Home from './Pages/Home.jsx'
import HowItWorks from './Pages/HowItWorks.jsx'
import LoginSignUp from './Pages/LoginSignUp.jsx'
import OurTeam from './Pages/OurTeam.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path= "/home" element={<Home category='home'/>} />
        <Route path= "/about" element={<About  category="about" />} />
        <Route path= "/ourTeam" element={<OurTeam  category="ourTeam" />} />
        <Route path= "/howItWorks" element={<HowItWorks  category="howItWorks" />} />
        <Route path= "/contactUs" element={<ContatcUs category="contactUs"/>} />
        <Route path= "/login" element={<LoginSignUp />} />
       </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App
