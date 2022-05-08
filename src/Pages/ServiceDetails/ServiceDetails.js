import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {

    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(()=> {
        const url = `http://localhost:3000/service/${serviceId}`;
       
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
   
    return (
        <div className='details'>
          <h1>Name: {service.name}</h1>
         
          
            <div className='text-center'>
            <Link to="/checkout" ele>
                <button className='details-btn'>Proceed Checkout</button>
            </Link>
            </div>
           
        </div>
    );
};

export default ServiceDetails;