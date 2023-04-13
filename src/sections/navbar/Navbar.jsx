import Avatar from '../../assets/avatar.png'
import data from './data'
import { VscColorMode } from 'react-icons/vsc'
import './navbar.css'
import React from 'react'
import { useModalContext } from '../../context/modal.context'

const Navbar = () => {

    const { showModalHandler } = useModalContext()

    return (
        <nav id='navbar'>
            <div className='container nav__container'>
                <a href='#' className='nav__logo'><img src={Avatar} alt='Avatar' /></a>
                <ul className='nav__menu'>
                    {data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)}
                </ul>
                <button id='theme__icon' onClick={showModalHandler}><VscColorMode /></button>
            </div>
        </nav>
    )
}

export default Navbar