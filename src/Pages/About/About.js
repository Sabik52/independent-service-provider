import React from 'react';
import './About.css'
import image from '../../images/About/picture.JPG'

const About = () => {
    return (
        <div className='about-container'>
            <h1>About Me</h1>
            <div className='about-details'>
                <div>
                <img src={image} alt="" />
                </div>
                <div className='about-text'>
                   <h4> Name: Neajur Rahman Sabik</h4>
                    <h5>Address: Raozan, Chattogram, Bangladesh.</h5>
                    <p>My Goal: I want to be a Proffetional web developer. If I can complete this course i will try to learn every fundamental things which could be helpfull for my future. This is my first thought. After 5-6 month I want to see myself as a jounior web developer. For this i will work hard more then now. Even If I got a job after complete this course I will give full time as a developer.  </p>

                </div>
            </div>
        </div>
    );
};

export default About;