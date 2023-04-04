import React from 'react'
import pic from "../assets/pic.jpeg"
import con from '../assets/contact.jpg'
import {FaAward, FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import './About.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About ME</h2>
      <div className='container about_container'>
<div className='about_me'>
  <div className='about_me_image'>
  <img src={con}  alt="me"/>
  </div>
</div>
<div className='about_content'>
<div className='about__cards'>
  <article className='about_card'>
  <FaAward className='about_icon'/>
    <h5>Experience</h5>
    <small>1 year</small>
  </article>



  <article className='about_card'>
  <FaUsers className='about_icon'/>
    <h5>Experience</h5>
    <small>1 year</small>
  </article>


  <article className='about_card'>
  <VscFolderLibrary className='about_icon'/>
    <h5>Projects</h5>
    <small> 5+ Completed</small>
  </article>
</div>

<p className='about_p'>
  My name is Parul from Kanpur, Uttar Pradesh. my hobbies are to making caft work, teaching and cooking.
  my strengths are i am quick learner, self motivation, and able to work with new team, i short-term
  gaol to be a Full stack web developer.

</p>
<a href='#contact' className='btn btn-primary btn_center'>Let's Talk</a>

</div>
      </div>
    </section>
  )
}

export default About