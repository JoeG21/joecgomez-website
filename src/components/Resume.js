import React from 'react'

import download from '../pictures/downloadLogo.png'

const Resume = () => {
    return (
        <div className='resume-container'>
            <iframe
                title="Joe C Gomez's Resume"
                className='resume'
                frameBorder='0'
                src='https://drive.google.com/file/d/18T4B_dsGbH6wJToQuw1zapBmQQGaDgt2/preview'>
            </iframe>
            {/* https://drive.google.com/file/d/18T4B_dsGbH6wJToQuw1zapBmQQGaDgt2/view?usp=sharing */}


            <a href='https://drive.google.com/uc?export=download&id=18T4B_dsGbH6wJToQuw1zapBmQQGaDgt2' className='resume-download'>
                <img src={download} alt='Download Resume' className='download' />
                <span> Download </span>
            </a>
        </div>
    )
}

export default Resume