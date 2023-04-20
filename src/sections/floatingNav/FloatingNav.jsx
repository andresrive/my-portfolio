import './floatingNav.css'
import React from 'react'
import data from './data'
import Nav from './Nav'

const FloatingNav = () => {
    return (
        <ul id='floating__nav'>
            <div offset={-500} className='scrollspy' items={['header', 'about', 'services', 'portfolio', 'technologies', 'contact']} currentClassName='active'>
                {
                    data.map(item => <Nav key={item.id} item={item} />)
                }
            </div>
        </ul>


    )
}

export default FloatingNav