import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init'
const SignUp = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    
    ] = useCreateUserWithEmailAndPassword(auth);
    



    const navigateLogin = () => {

        navigate('/login')
    }
    if(user){
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email= event.target.email.value;
        const password =event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='signup-form'>
            <h3>Please Sign Up</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <br />
               <button className='submit-btn'>Sign Up</button>

            </form>
            <p>Already have an account ? <Link to="/login" className='text-danger pe-auto text-decoration-none ' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default SignUp;