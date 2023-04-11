import './about.css'
import React from 'react'
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/CVE Andrés Rivera Ruiz.pdf'
import { NavLink } from 'react-router-dom'
import { HiDownload } from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'


const About = () => {
    return (
        <section id='about'>
            <div className='container about__container'>
                <div className='about__left'>
                    <div className='about__portrait'>
                        <img src={AboutImage} alt='About Image' />
                    </div>
                </div>
                <div className='about__right'>
                    <h2>About me</h2>
                    <div className='about__cards'>
                        {
                            data.map(item => (
                                <Card key={item.id} className='about__card'>
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>Parrafo sobre mi</p>
                    <p>Parrafo 2 sobre mi</p>
                    <NavLink to={CV} download className='btn primary'>Download CV <HiDownload /></NavLink>
                </div>
            </div>
        </section>
    )
}

export default About