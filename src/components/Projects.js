import React from 'react'

import ProjectCard from './ProjectCard'
import projectCards from '../projectData'

import webPageIcon from '../pictures/webpage-icon.png'
import astrascapes from '../pictures/astrascapesPic.png'
import github from '../pictures/githubLogo.png'


const Projects = () => {
    return (
        <div className='project-container'>
            <div className='project-card'>
                <img src={astrascapes} className='project-vid-pic' alt='AstrScapes, LCC' />

                <div className='project-des'>
                    <h2> AstraScapes, LLC </h2>
                    <p>
                        Created with JavaScript and React.
                        Utilizing hooks, Email.js to establish communication through contact form for customers,
                        and designed with CSS and Material-UI.
                        Implemented Media Queries for responsiveness to all screen sizes and hosted by Netlify.
                    </p>
                    <h2> Tech Stack </h2>
                    <p>
                        JavaScript <br />
                        React.js <br />
                        Material-UI <br />
                        Email.js <br />
                    </p>
                </div>

                <div className='project-link-container'>
                    <a href='https://www.astrascapes.com/' className='project-link-web-git' alt='GitHub: JoeG21'>
                        <img src={webPageIcon} className='web-git-pic' alt='GitHub: JoeG21' />
                        <h3> WebPage </h3>
                    </a>
                    <a href='https://github.com/Tneebs/astrascapes_website/tree/main/frontend' className='project-link-web-git' alt='GitHub: JoeG21'>
                        <img src={github} className='web-git-pic' alt='GitHub: JoeG21' />
                        <h3> Repository </h3>
                    </a>
                </div>
            </div>

            {projectCards.map(card => <ProjectCard key={card.id} card={card} />)}
        </div>
    )
}

export default Projects