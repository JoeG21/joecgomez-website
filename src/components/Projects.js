import React from 'react'

import github from '../pictures/githubLogo.png'

const Projects = () => {
    return (
        <div className='big-container'>
            <div className='projects-container'>
                <div className='row'>
                    <div className='project-card'>
                        <iframe
                            className='project-vid'
                            title='Valath'
                            src='https://www.youtube.com/embed/tDWL4dkzYEI'
                            frameBorder='0' allowFullScreen>
                        </iframe>
                        <div className='description'>
                            <h2 className='title'> Valath </h2>
                            <p className='readMe'>
                                If you want to help your community by volunteering at a local shelter, then Valath is perfect for you.
                                It’s a volunteering website that gathers all opportunities from shelters around the Houston area, and puts them all in one place.
                            </p>
                            <div>
                                <h2 className='tech'> Tech Stack </h2>
                                <p className='tools'> Ruby on Rails <br /> React.js <br /> JTW Authorization </p>
                            </div>
                        </div>
                        <a href='https://github.com/JoeG21/valath' alt='GitHub: JoeG1'>
                            <div className='repo'>
                                <img className='repo-pic' src={github} alt='GitHub' />
                                <p>Repository</p>
                            </div>
                        </a>
                    </div>
                    <div className='project-card'>
                        <iframe
                            className='project-vid'
                            title='List Keeper'
                            src='https://www.youtube.com/embed/LLfWE3RWT3Q'
                            frameBorder='0' allowFullScreen>
                        </iframe>
                        <div className='description'>
                            <h2 className='title'> List Keeper </h2>
                            <p className='readMe'>
                                List Keeper keeps track of all the notes you make, and delete them with a simple click.
                                A search bar feature makes it easy to navigate through all of your notes.
                                Simply search for the title of the note, then it will filter out and give you the most relevant findings.
                                </p>
                            <h2 className='tech'> Tech Stack </h2>
                            <p className='tools'> Ruby on Rails <br /> React.js </p>
                        </div>
                        <a href='https://github.com/JoeG21/mod4-project' alt='GitHub: JoeG1'>
                            <div className='repo'>
                                <img className='repo-pic' src={github} alt='GitHub' />
                                <p>Repository</p>
                            </div>
                        </a>
                    </div>

                </div>
                <div className='row'>
                    <div className='project-card'>
                        <iframe
                            className='project-vid'
                            title='Quest and Key'
                            src='https://www.youtube.com/embed/pWJkXkajmmk'
                            frameBorder='0' allowFullScreen>
                        </iframe>
                        <div className='description'>
                            <h2 className='title'> Quest and Key </h2>
                            <p className='readMe'>
                                This game tests your math skills while having the timer behind your back.
                                Answer the question correctly to add time, but answer the question incorrectly then time will be taken off the timer.
                                See how long you can last to beat your highscore.
                            </p>
                            <h2 className='tech'> Tech Stack </h2>
                            <p className='tools'> Ruby on Rails <br /> JavaScript <br /> jQuery </p>
                        </div>
                        <a href='https://github.com/JoeG21/Quest-Key' alt='GitHub: JoeG1'>
                            <div className='repo'>
                                <img className='repo-pic' src={github} alt='GitHub' />
                                <p>Repository</p>
                            </div>
                        </a>
                    </div>
                    <div className='project-card'>
                        <iframe
                            className='project-vid'
                            title='Jmakon Prime'
                            src='https://www.youtube.com/embed/wI97XXtrkwA'
                            frameBorder='0' allowFullScreen>
                        </iframe>
                        <div className='description'>
                            <h2 className='title'> Jmakon Prime </h2>
                            <p className='readMe'>
                                Jmakon Prime is an e-commerce website where you can browse through every single item inside the shop.
                                Users can also add items to their cart without having to be log in.
                                But if a user dose want to checkout then it redirects you to the Sign up/Log In page.
                            </p>
                            <h2 className='tech'> Tech Stack </h2>
                            <p className='tools'> Ruby on Rails <br /> SQLite <br /> Bootstrap </p>
                        </div>
                        <a href='https://github.com/JoeG21/Jmakon-Prime' alt='GitHub: JoeG1'>
                            <div className='repo'>
                                <img className='repo-pic' src={github} alt='GitHub' />
                                <p>Repository</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <br></br><br></br>
        </div>
    )
}

export default Projects