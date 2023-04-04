import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './Experience.css'
const Experience = () => {
  return (
    <section id='experience'>
    <div className='ex'>
      <h5 >What Skills I Have</h5>
      <h2>My Experience</h2>
      </div>
      <div className='container experience_container'>
        <div className='experience_frontend'>
<h3>Frontend Development</h3>
<div className='ex_content'>
  <article className='ex_details'><BsPatchCheckFill className='ex_icons'/>
  <div>
  <h4>React.js</h4> <small className='text_light'>Experience</small></div> </article>

  <article className='ex_details'><BsPatchCheckFill className='ex_icons'/> <div>
  <h4>Next.js</h4> <small className='text_light'>Experience</small> </div></article>

  <article className='ex_details'><BsPatchCheckFill className='ex_icons'/> <div>
  <h4>Bootstrap</h4> <small className='text_light'>Experience</small> </div></article>

  <article className='ex_details'><BsPatchCheckFill className='ex_icons'/> <div>
  <h4>TailwindCSS</h4> <small className='text_light'>Experience</small> </div></article>

  <article className='ex_details'><BsPatchCheckFill className='ex_icons'/> <div>
  <h4>JavaScript</h4> <small className='text_light'>Experience</small> </div></article>
</div>
        </div>
        {/* <div className='experience_backtend'>
           <div className='experience_frontend'>
<h3>Frontend Development</h3>
<div className='ex_content'>
  <article className='ex_details'><BsPatchCheckFill/>
  <h4>React.js</h4> <small className='text_light'>Experience</small> </article>

  <article className='ex_details'><BsPatchCheckFill/>
  <h4>Next.js</h4> <small className='text_light'>Experience</small> </article>

  <article className='ex_details'><BsPatchCheckFill/>
  <h4>Bootstrap</h4> <small className='text_light'>Experience</small> </article>

  <article className='ex_details'><BsPatchCheckFill/>
  <h4>TailwindCSS</h4> <small className='text_light'>Experience</small> </article>

  <article className='ex_details'><BsPatchCheckFill/>
  <h4>JavaScript</h4> <small className='text_light'>Experience</small> </article>
</div>
        </div>
          </div> */}
      </div>
    </section>
  )
}

export default Experience