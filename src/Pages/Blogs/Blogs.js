import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-text'>
            <h5>Question:1 Difference between authorization and authentication</h5>
            <p>Answer: Authentication confirms somones identity to grant access to the system. It is the process of validation user credential to gain user access and Authorization determines whether who are authorized to access the resources. It is the process of verifying whether access is allowed or not.</p>
            <h5>Question:2 Why are you using firebase? what other options do you have to implement authentication?</h5>
            <p>Answer: We are use firebase for authentication to diffrent way. Its help us to know users information. Back4App, Parse,  Kuzzle are the another way to authentication.</p>

            <h5>Question:3 What other services does firebase provide other than authentication?</h5>
            <p>Answer: Other Services firebase provide- Cloud Firestore,Cloud Functions,Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging.</p>
        </div>
    );
};

export default Blogs;