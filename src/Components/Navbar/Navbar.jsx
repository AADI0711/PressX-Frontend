
import logo from '../assets/images/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

  const [menu,setMenu]= useState("home");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" className='nav-img' />
        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("home")}} ><Link style={{textDecoration:'none'}} to='/home'>Home</Link> {menu==="home"?<hr/> : <></> } </li>
          <li onClick={()=>{setMenu("about")}} ><Link style={{textDecoration:'none'}} to='/about'>About</Link> {menu==="about"?<hr/> : <></> } </li>
          <li onClick={()=>{setMenu("ourTeam")}} ><Link style={{textDecoration:'none'}} to='/ourTeam'>Our Team</Link> {menu==="ourTeam"?<hr/> : <></> } </li>
          <li onClick={()=>{setMenu("howItWorks")}}><Link style={{textDecoration:'none'}} to='/howItWorks'>How it Works</Link> {menu==="howItWorks"?<hr/> : <></> } </li>
          <li onClick={()=>{setMenu("contactUs")}} ><Link style={{textDecoration:'none'}} to='/contactUs'>Contact Us</Link> {menu==="contactUs"?<hr/> : <></> } </li>
           
        </ul>
        <div className="nav-login">
          <Link to='/login'><button>Login/Sign Up</button></Link>
        </div>
      </div>      
    </div>
  )
}

export default Navbar
