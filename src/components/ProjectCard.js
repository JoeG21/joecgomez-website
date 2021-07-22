import React from 'react'

import github from '../pictures/githubLogo.png'

const ProjectCard = (props) => {

    return (
        <div className='project-card'>
            <iframe
                className='project-vid-pic'
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

            <a href={props.card.repo} className='project-link' alt='GitHub: JoeG21'>
                <img src={github} className='gitPic' alt='GitHub: JoeG21' />
                <h3> Repository </h3>
            </a>
        </div>

    )
}

export default ProjectCard