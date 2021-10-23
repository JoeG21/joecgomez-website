import React from 'react'

import github from '../pictures/githubLogo.png'
import webPageIcon from '../pictures/webpage-icon.png'

const ProjectCard = (props) => {
    const webGit = (
        <div className='project-link-container'>
            <a href={props.card.repo} className='project-link-web-git' alt='GitHub: JoeG21'>
                <img src={github} className='web-git-pic' alt='GitHub: JoeG21' />
                <h3> Repository </h3>
            </a>
            <a href={'https://www.astrascapes.com/'} className='project-link-web-git' alt='AstraScapes'>
                <img src={webPageIcon} className='web-git-pic' alt='https://www.astrascapes.com/' />
                <h3> WebPage </h3>

            </a>
        </div>
    )

    const git = (
        <a href={props.card.repo} className='project-link' alt='GitHub: JoeG21'>
            <img src={github} className='git-pic' alt='GitHub: JoeG21' />
            <h3> Repository </h3>
        </a>
    )


    return (
        <div className='project-card'>
            <iframe
                className='project-vid'
                title='Project Video'
                src={props.card.video}
                frameBorder='0' allowFullScreen>
            </iframe>

            <div className='project-des'>
                <h2> {props.card.title} </h2>
                <p>
                    {props.card.des}
                </p>
                <h2> Tech Stack </h2>
                {props.card.tech.map(t => <span> {t} <br /> </span>)}
            </div>

            {props.card.id === 1 ? webGit : git}
        </div>
    )
}

export default ProjectCard