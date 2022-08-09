import React from 'react'
import './footer.css'
import {RiInstagramLine} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'
import {BsYoutube} from 'react-icons/bs'

const Footer = () => { 
return (
  <footer id='footer'>
    <a href='#' className='footer__logo'>SALWA RINDU KANAYA</a>

    <div className='footer__social'>
      <a href="https://instagram.com/salwarky?igshid=YmMyMTA2M2Y=" target="_blank"><RiInstagramLine/></a>
      <a href="https://mail.google.com/" target="_blank"><MdEmail/></a>
      <a href="https://youtu.be/7WyHtSlvHD4" target="_blank"><BsYoutube/></a>
    </div>

    <div className='footer__kopirek'>
      <small>&copy; Salwa Rindu Kanaya<br/>All right reserved.</small>
    </div>
  </footer>
)
}

export default Footer