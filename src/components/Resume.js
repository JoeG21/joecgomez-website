import React from 'react'

import download from '../pictures/downloadLogo.png'

const Resume = () => {
    return (
        <div className='resume-container'>
            <iframe
                title="Joe C Gomez's Resume"
                className='resume'
                frameBorder='0'
                src='https://drive.google.com/file/d/1AjAt3WqBBGcpeiL7tO0RpivGlJVduVmg/preview'>
            </iframe>
            <a href='https://drive.google.com/uc?export=download&id=1AjAt3WqBBGcpeiL7tO0RpivGlJVduVmg'>
                <div className='download-container'>
                    <img src={download} alt='Download Resume' className='download' />
                    <p> Download </p>
                </div>
            </a>
        </div>
    )
}

export default Resume