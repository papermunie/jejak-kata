import React from 'react' 
import {BsInstagram} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
    <div className='Header__Socials'>
       <a href="https://Instagram.com" _target="blank"><BsInstagram/></a>
       <a href="https://gmail.com" _target="blank"><SiGmail/></a>
       <a href="https://Whatsapp.com" _target="blank"><BsWhatsapp/></a>
    </div>
    )
}

export default HeaderSocials