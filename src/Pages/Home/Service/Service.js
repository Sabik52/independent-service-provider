import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service' >
           <img src={img} alt="" />
            <h2> {name}</h2>
            <h5>Price: {price}</h5>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='button'>BOOK NOW</button>

        </div>
    );
};

export default Service;