import React from 'react'
import "./Footer.css"
import {BsFacebook} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"


function footer() {
  return (
   <footer id='Footer'>
     <a href="#" className='footer__logo'> Fuad Mohomed</a>
    <ul className='permalinks'>
      <li href="#">Home</li>
      <li href="#About">About</li>
      <li href="Experience">Experience</li>
      <li href="#Services">Services</li>
      <li href="#Portfolio">Portfolio</li>
      <li href="#Testimonials">Testimonials</li>
      <li href="#Contact">Contact</li>
    </ul>

    <div className="footer__socials">
      <a href='https://facebook.com'> <BsFacebook/> </a>
      <a href='https://instagram.com'><AiFillInstagram/> </a>
      <a href='https://twitter.com'><AiOutlineTwitter/> </a>
    </div>

<div className="footer__copyright">
  <small>&copy; Fuad Mohomed. All Rights Reserved.</small>
</div>

   </footer>
  )
}

export default footer