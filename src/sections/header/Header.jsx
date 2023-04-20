import './header.css'
import React, { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import data from './data'

const Header = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <header id='header'>
            <div className='container header__container'>
                <div className='header__profile' data-aos='fade-in'>
                    <img src={HeaderImage} alt='Header Image' />
                </div>
                <h3 data-aos='fade-up'>Andrés Rivera Ruiz</h3>
                <p data-aos='fade-up'>
                    Parrafo describiendo quien soy
                </p>
                <div className='header__cta' data-aos='fade-up'>
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