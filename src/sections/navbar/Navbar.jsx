import Avatar from '../../assets/avatar.jpg'
import data from './data'
import { VscColorMode } from 'react-icons/vsc'
import './navbar.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id='navbar'>
            <div className='container nav__container'>
                <NavLink to='#' className='nav__logo'><img src={Avatar} alt='Avatar' /></NavLink>
                <ul className='nav__menu'>
                    {data.map(item => <li key={item.id}><NavLink to={item.link}>{item.title}</NavLink></li>)}
                </ul>
                <button id='theme__icon'><VscColorMode /></button>
            </div>
        </nav>
    )
}

export default Navbar