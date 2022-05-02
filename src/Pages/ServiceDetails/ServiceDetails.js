import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useService from '../../hooks/useService';

const ServiceDetails = () => {
    const [service, setService] = useService()
    const {serviceId} = useParams();

    return (
        <div>
            <h2>Welcome to detail:{serviceId}</h2>
            <div className='text-center'>
            <Link to="/checkout" ele>
                <button className='btn'>Proceed Checkout</button>
            </Link>
            </div>
           
        </div>
    );
};

export default ServiceDetails;