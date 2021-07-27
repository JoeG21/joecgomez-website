import React from 'react';

import github from '../pictures/githubLogo.png'
import linkedIn from '../pictures/linkedInLogo.png'
import medium from '../pictures/mediumLogo.png'
import youtube from '../pictures/youtubeLogo.png'
import twitter from '../pictures/twitterLogo.png'

const Home = () => {
    return (
        <div className='home'>
            <div className='name'>
                <h1> Joe C Gomez </h1>
                <h3> Software Engineer in the Houston area </h3>
            </div>
            
            <div className='home-links-container'>
                <a href='https://github.com/JoeG21' alt='GitHub: JoeG1'>
                    <img className='home-links' src={github} alt='GitHub' />
                </a>
                <a href='https://linkedin.com/in/joe-c-gomez/' alt='LinkedIn: Joe C Gomez'>
                    <img className='home-links' src={linkedIn} alt='LinkedIn' />
                </a>
                <a href='https://devjoe.medium.com/' alt='Medium: @devjoe'>
                    <img className='home-links' src={medium} alt='LinkedIn' />
                </a>
                <a href='https://www.youtube.com/channel/UCwLqQxU0xFZefEVC3oix7Dw' alt='YouTube: Joe C Gomez'>
                    <img className='home-links' src={youtube} alt='YouTube' />
                </a>
                <a href='https://twitter.com/devjoecgomez' alt='Twitter: @devjoecgomez'>
                    <img className='home-links' src={twitter} alt='Twitter' />
                </a>
            </div>
        </div>
    )
}

export default Home