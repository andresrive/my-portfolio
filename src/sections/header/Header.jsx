import './header.css'
import React from 'react'
import HeaderImage from '../../assets/header.jpg'
// import { a } from 'react-router-dom'
import data from './data'

const Header = () => {
    return (
        <header id='header'>
            <div className='container header__container'>
                <div className='header__profile'>
                    <img src={HeaderImage} alt='Header Image' />
                </div>
                <h3>Andrés Rivera Ruiz</h3>
                <p>
                    Parrafo describiendo quien soy
                </p>
                <div className='header__cta'>
                    <a href='#contact' className='btn primary'>Let's Talk</a>
                    <a href='#portfolio' className='btn light'>My work</a>
                </div>
                <div className='header__socials'>
                    {
                        data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
                    }
                </div>
            </div>

        </header>
    )
}

export default Header