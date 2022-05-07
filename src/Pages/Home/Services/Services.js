
import useService from '../../../hooks/useService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useService()
    return (
        <div id= "services" className='cotainer'>
           <div className="row mx-2  ">
           <h2 className='fw-bold text-center mb-5 mt-5'>My Services</h2>
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