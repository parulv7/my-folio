import React from 'react'
import CTA from './CTA'
import pic from "../assets/pic.jpeg"
import Headersocials from './Headersocials'
import "./Header.css"
const Header = () => {
  return (
    <header>
<div className="container header_container">
  <h5>Hello I'm</h5>
  {/* <h1>Parul Verma</h1> */}

  <div className="waviy">
   <span >P</span>
   <span >A</span>
   <span >R</span>
   <span >U</span>
   <span >L</span>
   <span >  </span>
   <span >V</span>
   <span >E</span>
   <span >R</span>
   <span >M</span>
   <span >A</span>
  </div>
 






  <h5 className='text_light'> Front-end Developer</h5>
  <CTA/>
  <Headersocials/>
<div className='me' >
<img src={pic} className="me1" alt="me"/>
</div>
<a href='#contact' className='scroll_down'> Scroll Down </a>
</div>
    </header>
  )
}

export default Header