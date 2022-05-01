import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('photography.json')
        .then(res => res.json())
        .then(data => setServices(data) )
    },[])

    return (
        <div className='cotainer'>
           <div className="row mx-2  ">
           <h2 className='fw-bold py-2'>My Services</h2>
           <div className="services-container">
           {
                services.map(service=> <Service 
                key ={service.id}
                service= {service}
                ></Service>)
            }
           </div>
           </div>
        </div>
    );
};

export default Services;