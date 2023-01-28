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
          <small>2 Years Experience</small>
        </article>
        <article className="about__card">
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>20+</small>
        </article>
        <article className="about__card">
          <AiFillFolderOpen className='about__icon' />
          <h5>Projects</h5>
          <small>50+ Completed</small>
        </article>
      </div>
    <p>“HELLO WORLD ” 
   I’m a Junior full stack developer with a passion for learning new technologies
   and working with teams to create user-friendly web applications. 
  I have 2 years of experience in developing  projects,  
  which include front-end and back-end technologies. 
 These technologies consist of the M.E.R.N  STACK . Im prepared and excited 
  to develop my skills in a working environment and contribute to the success of a company. 
  Coding is one thing But well structured, organized code is another! .
   It's  a preventive measure for future bugs. 
   Even so if they occur Debugging and resolving issues are part of the job. 
    And I like to take pride in my composure,
   and  attitude in resolving matters, either alone are with the help of others.
  That being said I’m informed and up to date with the latest technology’s as well as motivated and disciplined.
   Im a self-taught web developer that aspires to launch a career building web applications,
   Rest api’s and services. 
      </p>
    <a href='#Contact' className='btn btn-primary'>Let's Talk</a>  

      </div>
    </div>
    </section>
  )
}

export default About