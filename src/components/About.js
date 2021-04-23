import React from 'react';
import pic from '../pictures/pic.jpg'

const Home = () => {
    return (
        <div className='big-container'>
            <div className='about-container'>
                <div className='about'>
                    <img src={pic} className='about-pic' alt='profile' />
                    <div className='about-des'>
                        <p>
                            A sales associate who made a career change to a developer.
                            <br /><br />
                            With 3 years of experience in sales, I developed quality communication skills.
                            Whether it be me trying to sell a client something or just getting to know them.
                            I found naturally easy to approach people and starting a conversion.
                            On top of this, I worked with my team members in order to make the store's quota.
                            <br /><br />
                            My love for technology first started with my family's Gateway PC.
                            Since then, I've been fascinated with the complexity of the internet and all the code that goes into making an application.
                            However, it never crossed my mind to learn how to code because it looked intimidating.
                            It wasn't until 2020 when I finally scratched that itch I had and found a new love!
                        </p>
                    </div>
                </div>
            </div>
            <div className='br'></div>
        </div>
    )
}

export default Home