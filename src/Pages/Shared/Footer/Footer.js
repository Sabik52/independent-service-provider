
import React from 'react';
import './Footer.css'



const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer-section'>
            <div className='container text-center'>
                <div className="row">
                    <div className='col-12 col-lg-10 mx-auto'>
                        <div className='row'>
                            <div className='col-6 col-lg-3'>
                                <h4>Contact</h4>
                                <ul>
                                    <li>
                                       <a href="">About</a>
                                    </li>
                                    <li>
                                       <a href="">Address</a>
                                    </li>
                                    <li>
                                       <a href="">Phone</a>
                                    </li>
                                    <li>
                                       <a href="">Email</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-6 col-lg-3'>
                                <h4>Support</h4>
                                <ul>
                                    <li>
                                       <a href="">Refund Policy</a>
                                    </li>
                                    <li>
                                       <a href="">My Works</a>
                                    </li>
                                    <li>
                                       <a href="">Gellary</a>
                                    </li>
                                    <li>
                                       <a href="">Offers</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-6 col-lg-3'>
                                <h4>Services</h4>
                                <ul>
                                    <li>
                                       <a href="">VideoGraphy</a>
                                    </li>
                                    <li>
                                       <a href="">PhotoShot</a>
                                    </li>
                                    <li>
                                       <a href="">Wedding</a>
                                    </li>
                                    <li>
                                       <a href="">More</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-6 col-lg-3'>
                                <h4>Follow Us</h4>
                               <div className='row'>
                                   <div className='col-3 mx-auto'>
                                   <a  href="https://web.facebook.com/sabik.neajurrahman/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                                     
                                   </div>
                                   <div className='col-3 mx-auto'>
                                   <a href="https://www.instagram.com/freelencersabik/" target="_blank" ><i class="fa-brands fa-instagram"></i></a>
                                     
                                   </div>
                                   <div className='col-3 mx-auto'>
                                   <a href=""><i class="fa-brands fa-youtube"></i></a>
                                     
                                   </div>
                                   <div className='col-3 mx-auto'>
                                   <a href="https://github.com/Sabik52"  target="_blank" ><i class="fa-brands fa-github"  ></i></a>
                                     
                                   </div>
                               </div>
                               
                            </div>
                        </div>
                        <hr />
                            <div className='mt-5'>
                                <p className='main-hero-para text-center w-100'>Copyright &copy; {year} Sabik. All rights reserved.</p>


                            </div>
                    </div>

                </div>
            </div>
        </footer>

    );
};

export default Footer;