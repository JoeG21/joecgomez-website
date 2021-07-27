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
                        AstraScapes, LCC is a landscaping bushiness that approached us, Ted Neben and I,
                        to build their company's webpage.
                        After a few weeks we built out a fully functional webpage using React.js and many other tools.
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