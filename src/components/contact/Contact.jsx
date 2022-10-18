import React from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi'
import {BsMessenger} from 'react-icons/bs'
import {FcCellPhone} from 'react-icons/fc'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



function Contact() {
const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9xz5t9v', 'template_689vv0t', form.current, 'NnOqfNSlVQTFOQYIo')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <section id='Contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact__container">
      <div className="contact__options">
      <article className='contact__option'>
        <FiMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>FuadMohomed45@gmail.com</h5>
        <a target='_blank' href='mailto:fuadmohomed45@gmail.com'>Send A Message</a>

      </article>
      <article className='contact__option'>
        <BsMessenger className='contact__option-icon'/>
        <h4>Messenger</h4>
        <h5>zacktutorials</h5>
        <a >Send A Message</a>

      </article>
      <article className='contact__option'>
        <FcCellPhone className='contact__option-icon'/>
        <h4>Phone Number</h4>
        <h5>738 398 3928</h5>
        <a> send a message</a>

      </article>
      </div>

    
     {/* END OF CONTACT OPTION */}
     <form ref={form} onSubmit={sendEmail}>
     <input type='text' name='name' placeholder='Your Full Name'  required/>
     <input type="email" name='email' placeholder='Your Email' required />
     <textarea name='message' placeholder='Your Message' required rows='7'></textarea>
     <button type='submit' className='btn btn-primary'>Send Message</button>
     </form>
     </div>
   </section>
  )
}

export default Contact