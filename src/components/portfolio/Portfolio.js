import React from 'react'
import './Portfolio.css'
import img1 from "../assets/sparsham.jpg"
import img2 from '../assets/fitclub.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2> Portfolio</h2>
    <div className='container portfolio_con'>
      <article className='portfolio_items'>
        <div className='portfolio_items_img'>
        <img src={img1} alt='' />
        </div>
          <h3>Sparsham-animals needs our love</h3> <div className='portfolio_item_cta'>
          <a href=" https://parulv7.github.io/healthclub/"  className='btn' >Github</a>
          <a href=""  className='btn btn-primary' >Live Project</a>
          </div>
      </article>

      <article className='portfolio_items'>
        <div className='portfolio_items_img'>
        <img src={img2} alt='' />
        </div>
          <h3>Fitclub - give a right fit to your body</h3> <div className='portfolio_item_cta'>
          <a href="https://github.com/parulv7/healthclub"  className='btn'>Github</a>
         
         <a href=" https://parulv7.github.io/healthclub/" className='btn btn-primary'>Live Project</a>
     </div>
      </article>
    </div>
    </section>
  )
}

export default Portfolio