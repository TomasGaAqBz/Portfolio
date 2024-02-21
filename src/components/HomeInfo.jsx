import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({text,link,btnText}) =>(
    <div className=' info-box'>
        <p className=' font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn' >
            {btnText}
            <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent ={
    1: (
        <h1 className=' sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 w-1/2' >
            ¡Bienvenido a mi isla 3D! Soy <span className=' font-semibold'>Tomas,</span> un apasionado FullStack Developer. Sube a bordo y descubre el fascinante mundo de mis proyectos.
        </h1>
    ),
    2: (
        <InfoBox 
            text="Mira aqui estan algunos de mis proyectos"
            link="/projects"
            btnText="Visita mi Portfolio"
        />
    ),
    3: (
        <InfoBox 
            text="Estos son los lugares en donde he trabajado"
            link="/about"
            btnText="Ir a Experiencias"
        />
    ),
    4: (
        <InfoBox 
            text="¿Quieres contactarte conmigo?¡Hagamos algo increíble juntos! Ponte en contacto conmigo para discutir tus ideas."
            link="/contact"
            btnText="Contactame!"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return (
    renderContent[currentStage] ||  null 
  )
}

export default HomeInfo
