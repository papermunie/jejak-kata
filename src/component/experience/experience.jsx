import React from 'react'
import './experience.css'
import {RiHtml5Line} from 'react-icons/ri'
import {ImCss3} from 'react-icons/im'
import {TbBrandJavascript} from 'react-icons/tb'
import {RiReactjsFill} from 'react-icons/ri'
import {MdSchool} from 'react-icons/md'

const experience = () => {
   return (
       <section id='experience'>
           <h5>Lets See :D</h5>
           <h2>My Experience</h2>

           <div className="container experience__container">
               <div className="experience__frontend">
                   <h3>Frontend Development</h3>
                   <div className="experience__content">
                       <article className='experience__details'>
                           <RiHtml5Line />
                           <div>
                           <h4>HTML</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience__details'>
                           <ImCss3 />
                           <div>
                           <h4>JavaScript</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience__details'>
                           <TbBrandJavascript />
                           <div>
                           <h4>CSS</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                       <article className='experience__details'>
                           <RiReactjsFill />
                           <div>
                           <h4>ReactJS</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                       </article>
                   </div>
               </div>
               {/* END OF FRONTEND */}
               
               <div className="experience__backend">
               <h3>History Of Organization</h3>
                   <div className="experience__content">
                       <article className='experience__details'>
                           <MdSchool />
                           <div>
                           <h4>Pradana Putri</h4>
                           <small className='text-light'>2019-2020</small>
                           </div>
                       </article>
                       <article className='experience__details'>
                           <MdSchool />
                           <div>
                           <h4>Ketua Osis Smp</h4>
                           <small className='text-light'>2020-2021</small>
                           </div>
                       </article>
                       <article className='experience__details'>
                           <MdSchool />
                           <div>
                           <h4>Ketua sekbid IKOSI</h4>
                           <small className='text-light'>2021-2022</small>
                           </div>
                       </article>
                       <article className='experience__details'>
                           <MdSchool />
                           <div>
                           <h4>Sekretaris EKSMUS</h4>
                           <small className='text-light'>2022-2023</small>
                           </div>
                       </article>
               </div>
           </div>
           </div>
       </section>
   )
}

export default experience