import React from 'react'
import Card from '../../components/Card'
import { NavLink } from 'react-router-dom'

const Project = ({ project }) => {
    return (
        <div>
            <Card className='portfolio__project'>
                <div className='portfolio__project-image'>
                    <img src={project.image} alt='Project Image' />
                </div>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className='portfolio__project-cta'>
                    <NavLink to={project.demo} className='btn sm primary' target='_blank' rel='noopener noreferrer'>Demo</NavLink>
                    {project.github && <NavLink to={project.github} className='btn sm' target='_blank' rel='noopener noreferrer'>Github</NavLink>}
                </div>
            </Card>
        </div>
    )
}

export default Project