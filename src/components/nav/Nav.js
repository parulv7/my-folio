import React, { useState } from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineBook} from "react-icons/ai"
import {RiServiceLine} from "react-icons/ri"
import {AiOutlineMessage} from "react-icons/ai"
import "./Nav.css"
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '# ' ? 'active' : '' }> <AiOutlineHome/> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about ' ? 'active' : '' }><AiOutlineUser/>  </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#about ' ? 'active' : '' }> <AiOutlineBook/>  </a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#about ' ? 'active' : '' }> <RiServiceLine/> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#about ' ? 'active' : '' }> <AiOutlineMessage/> </a>
    </nav>
  )
}

export default Nav