import './floatingNav.css'
import React from 'react'
import data from './data'
import Nav from './Nav'
import Scrollspy from 'react-scrollspy'

const FloatingNav = () => {
    return (
        <ul id='floating__nav'>
            <Scrollspy offset={-500} className='scrollspy' items={['header', 'about', 'services', 'portfolio', 'technologies', 'contact']} currentClassName='active'>
                {
                    data.map(item => <Nav key={item.id} item={item} />)
                }
            </Scrollspy>
        </ul>


    )
}

export default FloatingNav