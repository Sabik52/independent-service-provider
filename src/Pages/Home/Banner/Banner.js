import React from 'react';
import { Carousel } from 'react-bootstrap';
import photo1 from '../../../images/Banner/photo1.jpg'
import photo2 from '../../../images/Banner/photo2.jpg'
import photo from '../../../images/Banner/photo.jpg'
import photo4 from '../../../images/Banner/photo4.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel className='slider'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={photo1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={photo2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Wedding</h3>
                        <p>Keep the name short and memorable..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Wedding</h3>
                        <p>Keep the name short and memorable..</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;