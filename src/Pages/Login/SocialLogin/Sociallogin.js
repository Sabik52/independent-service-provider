import React from 'react';
import './SocialLogin.css'
import google from '../../../images/Social/google.png'
import facebook from '../../../images/Social/facebook.png'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useNavigate } from 'react-router-dom';

const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook , user1, loading1, error1] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let errorElement;

    if(error || error1){
        errorElement=
            <div>
                <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
            </div>
       
    }

    if(user || user1){
        navigate('/home')

    }
    return (
        <div>
            <div className='d-flex align-items-center'>
            <div style={{height:'1px'}} className='bg-white w-50'></div>
            <p className='mt-3 px-2'>Or</p>
            <div style={{height:'1px'}} className='bg-white w-50'></div>
            </div>
            {errorElement}
            <div>
                <button 
                onClick={() => signInWithGoogle()}
                className='social-btn d-block mx-auto'> <img  src={google} alt="" /> Google Sign in</button>
                <button
                onClick={()=> signInWithFacebook()}
                className='social-btn d-block mx-auto'> <img  src={facebook} alt="" /> Facebook Sign in</button>
            </div>
            
        </div>
    );
};

export default Sociallogin;