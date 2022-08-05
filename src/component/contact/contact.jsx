import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get You To</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>salwarindukanaya@gmail.com</h5>
            <a href='mailto:salwarindukanaya@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>salwarky</h5>
            <a href='https://instagram.com/salwarky?igshid=YmMyMTA2M2Y=' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>salwarindukanaya@gmail@gmail.com</h5>
            <a href='https://api.whatsapp.com/send?phone=+6281511003779' target='_blank'>Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea type='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact