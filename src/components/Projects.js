import React from 'react'

import ProjectCard from './ProjectCard'
import projectCards from '../data/projectData'

const Projects = () => {
    return (
        <div className='project-container'>
            {projectCards.map(card => <ProjectCard key={card.id} card={card} />)}
        </div>
    )
}

export default Projects