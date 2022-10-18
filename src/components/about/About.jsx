import React from 'react'
import './About.css'
import img from '../../img/imgD.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'


function About() {
  return (
    <section id='About'>About
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
      <div className="about__me-image">
        <img src={img} alt='image'/>
      </div>
      </div>

      <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years Working Experience</small>
        </article>
        <article className="about__card">
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>200+ WorldWide</small>
        </article>
        <article className="about__card">
          <AiFillFolderOpen className='about__icon' />
          <h5>Projects</h5>
          <small>100+ Completed</small>
        </article>
      </div>
    <p>
    Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Maiores vel iure perferendis ad 
    iste repudiandae optio sapiente consequatur autem dolores quidem, totam illum neque veniam rerum tempore dolorum necessitatibus 
     eos?
      </p>
    <a href='#Contact' className='btn btn-primary'>Let's Talk</a>  

      </div>
    </div>
    </section>
  )
}

export default About