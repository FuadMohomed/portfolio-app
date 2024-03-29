import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from "react-icons/bs"

function Experience() {
  return (
  <section id='Experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
    <div className="experience__frontend">
       <h3>Frontend Development</h3>
      <div className="experience__content">
        <article className='experience__details'>
          <BsFillPatchCheckFill className='love'/>
          <div>
            <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsFillPatchCheckFill className='love'/>
          <div>
            <h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsFillPatchCheckFill className='love'/>
         <div>
            <h4>JAVASCRIPT</h4>
          <small className='text-light'>Experienced</small>
         </div>
        </article>
        <article className='experience__details'>
          <BsFillPatchCheckFill className='love'/>
          <div>
            <h4>BOOTSTRAP</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className='experience__details'>
          <BsFillPatchCheckFill className='love'/>
         <div>
            <h4>TAILWIND</h4>
          <small className='text-light'>Experienced</small>
         </div>
        </article>
        <article className='experience__details'>
          <BsFillPatchCheckFill className='love'/>
          <div>
            <h4>REACT</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
      </div>
    </div>
    {/* end of front end */}
    <div className="experience__backend">
      <h3>Backend Development</h3>
      <div className="experience__content">
       <article className='experience__details'>
          <BsFillPatchCheckFill className='love'/>
         <div>
            <h4>MONGO DB</h4>
          <small className='text-light'>Experienced</small>
         </div>
        </article>
       <article className='experience__details'>
          <BsFillPatchCheckFill className='love'/>
         <div>
            <h4>NODE JS</h4>
          <small className='text-light'>Experienced</small>
         </div>
        </article>
       <article className='experience__details'>
          <BsFillPatchCheckFill className='love'/>
          <div>
            <h4>Express</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
       <article className='experience__details'>
          <BsFillPatchCheckFill className='love'/>
         <div>
            <h4>MySQL</h4>
          <small className='text-light'>Experienced</small>
         </div>
        </article>
       <article className='experience__details'>
          <BsFillPatchCheckFill className='love'/>
         <div>
             <h4>Strapi</h4>
          <small className='text-light'>Experienced</small>
         </div>
        </article>
       
      </div>

    </div>


    </div>
    
    
    </section>
  )
}

export default Experience