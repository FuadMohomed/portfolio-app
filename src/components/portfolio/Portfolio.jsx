import React from 'react'
import "./Portfolio.css"
import IMGb from '../../img/graph1.png'
import IMGc from '../../img/graph2.png'
import IMGd from '../../img/graph3.jpg'
import IMGe from '../../img/graph4.jpg'
import IMGf from '../../img/graph5.jpg'
import IMGg from '../../img/graph6.png'

function Portfolio() {
  return (
    <section id='Portfolio'>Portfolio
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

   <div className="container portfolio__container">
     <article className='portfolio__item'>
<div className="portfolio__item-image">
<img src={IMGb} alt='graph'/>
</div>
<h3> Thisis a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href='https://github.com' className='btn' target='_blank'>Github</a>
<a href='https://dribbble.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
</div>

     </article>
     <article className='portfolio__item'>
<div className="portfolio__item-image">
<img src={IMGc} alt='graph'/>
</div>
<h3> Thisis a portfolio item title</h3>
<div className="portfolio__item-cta">
  <a href='https://github.com' className='btn' target='_blank'>Github</a>
<a href='https://dribbble.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
</div>

     </article>
     <article className='portfolio__item'>
<div className="portfolio__item-image">
<img src={IMGd} alt='graph'/>
</div>
<h3> Thisis a portfolio item title</h3>
<div className="portfolio__item-cta">
  <a href='https://github.com' className='btn' target='_blank'>Github</a>
<a href='https://dribbble.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
</div>

     </article>
     <article className='portfolio__item'>
<div className="portfolio__item-image">
<img src={IMGe} alt='graph'/>
</div>
<h3> Thisis a portfolio item title</h3>
<div className="portfolio__item-cta">
  <a href='https://github.com' className='btn' target='_blank'>Github</a>
<a href='https://dribbble.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
</div>

     </article>
     <article className='portfolio__item'>
<div className="portfolio__item-image">
<img src={IMGf} alt='graph'/>
</div>
<h3> Thisis a portfolio item title</h3>
<div className="portfolio__item-cta">
  <a href='https://github.com' className='btn' target='_blank'>Github</a>
<a href='https://dribbble.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
</div>

     </article>
     <article className='portfolio__item'>
<div className="portfolio__item-image">
<img src={IMGg} alt='graph'/>
</div>
<h3> Thisis a portfolio item title</h3>
<div className="portfolio__item-cta">
  <a href='https://github.com' className='btn' target='_blank'>Github</a>
<a href='https://dribbble.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
</div>

     </article>
    </div> 
   </section>
  )
}

export default Portfolio