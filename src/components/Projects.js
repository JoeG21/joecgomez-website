import React from 'react'

import ProjectCard from './ProjectCard'

import webPageIcon from '../pictures/webpage-icon.png'
import astrascapes from '../pictures/astrascapesPic.png'
import github from '../pictures/githubLogo.png'


const Projects = () => {
    let projectCards = [
        {
            id: 1,
            video: 'https://www.youtube.com/embed/tDWL4dkzYEI',
            title: 'Valath',
            des: 'If you want to help your community by volunteering at a local shelter, then Valath is perfect for you. It’s a volunteering website that gathers all opportunities from shelters around the Houston area, and puts them all in one place.',
            tech: ['Ruby on Rails', 'React.js', 'JTW Authorization'],
            repo: 'https://github.com/JoeG21/valath'
        },
        {
            id: 2,
            video: 'https://www.youtube.com/embed/LLfWE3RWT3Q',
            title: 'List Keeper',
            des: 'List Keeper makes tracking all of your notes convenient, and delete them with a simple click. A search bar feature makes it easy to navigate through all of your notes.Simply search for the title of the note, then it will filter out and give you the most relevant findings.',
            tech: ['Ruby on Rails', 'React.js'],
            repo: 'https://github.com/JoeG21/mod4-project'
        },
        {
            id: 3,
            video: 'https://www.youtube.com/embed/pWJkXkajmmk',
            title: 'Quest and Key',
            des: 'Quest and Key is a game that tests your math skills while having the timer behind your back. Answering the question correctly will add time, but answer the question incorrectly then time will be taken off the timer. See how long you can last in order to beat your hight score.',
            tech: ['Ruby on Rails', 'JavaScript', 'jQuery'],
            repo: 'https://github.com/JoeG21/Quest-Key'
        },
        {
            id: 4,
            video: 'https://www.youtube.com/embed/wI97XXtrkwA',
            title: 'Jmakon Prime',
            des: ' Jmakon Prime is an e-commerce website that allows you to browse through items. Users can also add items to their cart without having to be logged in. However, if a user does want to checkout without being logged in, then it redirects you to the Sign up / Log in page.',
            tech: ['Ruby on Rails', 'Bootstrap'],
            repo: 'https://github.com/JoeG21/Jmakon-Prime'
        }
    ]


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
                    <a href='https://www.astrascapes.com/' className='project-linkx' alt='GitHub: JoeG21'>
                        <img src={webPageIcon} className='gitPicx' alt='GitHub: JoeG21' />
                        <h3> WebPage </h3>
                    </a>
                    <a href='https://github.com/Tneebs/astrascapes_website/tree/main/frontend' className='project-linkx' alt='GitHub: JoeG21'>
                        <img src={github} className='gitPicx' alt='GitHub: JoeG21' />
                        <h3> Repository </h3>
                    </a>
                </div>
            </div>


            {projectCards.map(card => <ProjectCard key={card.id} card={card} />)}
        </div>
    )
}

export default Projects