import data from './data'
import './services.css'
import React from 'react'
import Card from '../../components/Card'

const Services = () => {
    return (
        <section id='services'>
            <h2>My Services</h2>
            <p>I have experience in all the services below</p>
            <div className='container services__container' data-aos='fade-up'>
                {
                    data.map(item => <Card className='service light' key={item.id}>
                        <div className='service__icon'>{item.icon}</div>
                        <div className='service__details'>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </Card>)
                }
            </div>
        </section>
    )
}

export default Services