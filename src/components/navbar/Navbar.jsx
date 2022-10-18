import React from 'react'
import './Navbar.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {CgWorkAlt} from 'react-icons/cg'
import {RiServiceLine} from 'react-icons/ri'
import {IoMdContacts} from 'react-icons/io'
import { useState } from 'react'

function Navbar() {
const [activeNav, setActiveNav] = useState('#')


  return (
   <nav>
     <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <FaHome/>  </a>
     <a href='#About' onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}>  <AiOutlineUser/>  </a>
     <a href='#Experience'onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''} > <CgWorkAlt/>  </a>
     <a href='#Service' onClick={() => setActiveNav('#Service')} className={activeNav === '#Service' ? 'active' : ''}> <RiServiceLine/>  </a>
     <a href='#Contact' onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}> <IoMdContacts/> </a>
   </nav>
  )
}

export default Navbar