import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
<a href='#' className='footer_LOGO'> Parul </a>
<ul className='permalinks'>
  <li><a href='#'>Home</a></li>
  <li><a href='#about'>About</a></li>
  <li><a href='#experience'>Experience</a></li>
  <li><a href='#portfolio'>Portfolio</a></li>
  <li><a href='#contact'>Contact </a></li>
</ul>
<div className='f_socials'>
  <a href='https://www.instagram.com/miss_parul_.07/?igshid=ZDdkNTZiNTM%3D'><AiFillInstagram/> </a>
</div>
<div className='footer_copyrights'>
  <small>&copy; Parul. All rights reserved.</small>
</div>
    </footer>
  )
}

export default Footer