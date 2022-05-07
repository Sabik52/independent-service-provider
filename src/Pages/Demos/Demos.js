import React from 'react';
import image1 from '../../images/Demo/img1.jpg'
import image2 from '../../images/Demo/img2.jpg'
import image3 from '../../images/Demo/img3.jpg'
import image4 from '../../images/Demo/img4.jpg'
import image5 from '../../images/Demo/img5.jpg'
import image6 from '../../images/Demo/img6.jpg'
import './Demo.css'

const Demos = () => {
    return (
        <div className='demo-image'>
            <h1>My Projects</h1>
            <img className='fade-in-up' src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
        </div>
    );
};

export default Demos;