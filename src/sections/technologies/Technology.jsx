import React from 'react'
import Card from '../../components/Card'

const Technology = ({ technology }) => {
    return (
        <Card className='light'>
            <div className='technology__card'>
                <div className='technology__card-image'>
                    <img src={technology.image} alt={`${technology.title} Image`} />
                </div>
                <div className='technology__card-title'>
                    <h6>{technology.title}</h6>
                </div>
            </div>
        </Card>
    )
}

export default Technology 