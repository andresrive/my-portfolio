import './contact.css'
import React from 'react'
import contacts from './data'
import { NavLink } from 'react-router-dom'

const Contact = () => {
    return (
        <section id='contact'>
            <h2>Contact me</h2>
            <div className='container contact__container' data-aos='flip-up'>
                {
                    contacts.map(contact => (
                        <NavLink className='contact__container-link' to={contact.link} key={contact.id} target='_blank' rel='noopener noreferrer'> {contact.icon}</NavLink>
                    ))
                }
            </div>
        </section>
    )
}

export default Contact