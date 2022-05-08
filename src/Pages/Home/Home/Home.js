import React from 'react';
import Demos from '../../Demos/Demos';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Services></Services>
            <Demos></Demos>
            
        </div>
    );
};

export default Home;