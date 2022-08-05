import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {RiCake2Fill} from 'react-icons/ri'
import {FaSchool} from 'react-icons/fa'
import {IoMdContact} from 'react-icons/io'

const about = () => {
    return (
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
  
        <div className='container about__container'>
         <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about image' />
          </div>
        </div>
  
        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <RiCake2Fill className="about__icon" />
              <h5>Place Date of Birth</h5>
              <small>Kebumen, 18 April 2006</small>
            </article>
  
            <article className='about__card'>
              <FaSchool className="about__icon" />
              <h5>Educate</h5>
              <small>SMK NEGERI 1 KOTA BEKASI</small>
            </article> 
     
            <article className='about__card'>
              <IoMdContact className="about__icon" />
              <h5>Skills</h5>
              <small></small>
              <small>public speaking</small>
              <small>problem solving</small>
              <small>managemen self</small>
            </article> 
  
        </div>
        
        <p>
          Hai, Perkenalkan Nama saya adalah Salwa Rindu Kanaya, saya berjurusan Rekayasa Perangkat lunak.
          Saya biasa belajar pemrograman yang berbahasa javascript, namun saya juga tertarik dibidang fotografi.
          </p>
  
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
        </div>
      </section>
    )
  }
  export default about