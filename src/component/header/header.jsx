import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mes.png'
import HeaderSocials from './HeaderSocials'
import {FiGithub} from 'react-icons/fi'

const header = (props) => {
  const {nama,setNama,daun, setDaun,halo, setHalo} = props.okeh

  function orang() {
    setNama ("Its Me Salwa");
  }
  function kerja() {
    setDaun ("Have a nice day y'all")
  }
  function hai(){
    setHalo("Get To Know Me")
  }

  return (
    <header>
      <div className="container header__container">
        <div className='title'>
          <h5>{halo}</h5>
          <h1>{nama}</h1>
          <h5>{daun}</h5>
        </div>
        <button className='btn btn-primary' onClick={() => {hai(); orang(); kerja(); }}><i><b>CIICK</b></i></button>
        <CTA />
        <HeaderSocials/>


        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a className='github' href='https://github.com/papermunie/jejak-kata' target='_blank'>See On GitHub< FiGithub/></a>
      </div>
    </header>
  )
  }

export default header
