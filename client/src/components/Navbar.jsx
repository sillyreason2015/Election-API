import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(window.innerWidth < 600 ? false : true);
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('voting-app-theme'))


//close navigation bar
  const closeNavMenu = ()=>{
    if(window.innerWidth<600){
      setShowNav(false)
    }else{
      setShowNav(true)
    }
  }



//function to change/toggle theme
  const changeThemeHandler = ()=>{
    if(localStorage.getItem('voting-app-theme') === 'dark'){
      localStorage.setItem('voting-app-theme', '')
    }else{
      localStorage.setItem('voting-app-theme', 'dark')
    }
    setDarkTheme(localStorage.getItem('voting-app-theme'))
  }


useEffect(()=>{
  document.body.className = localStorage.getItem('voting-app-theme')
}, [darkTheme])


  return (
    <nav>
      <div className='container nav_container'>
        <Link to='/' className='nav_logo'>AXONTECH</Link>
        <div>
          {showNav && (
            <menu>
              <NavLink to='/elections' onClick={closeNavMenu}>Elections</NavLink>
              <NavLink to='/results' onClick={closeNavMenu}>Results</NavLink>
              <NavLink to='/logout' onClick={closeNavMenu}>Logout</NavLink>
            </menu>
          )}
          <button className="theme_toggle-btn" onClick={changeThemeHandler}>{darkTheme ? <IoMdSunny/> :  <IoMoon />}
          </button>
          <button className="nav_toggle-btn" onClick={() => 
          setShowNav(!showNav)}>{showNav ? <AiOutlineClose /> : 
          <FaBars /> }</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
