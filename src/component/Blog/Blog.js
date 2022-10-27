import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h4>1. what is cors?</h4>
            <p>Ans : Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>

            <br />
            <h4>2.  Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Ans : The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>

            <br />
            <h4>3. How does the private route work?</h4>
            <p>Ans : The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>

            <br />
            <h4>4.  What is Node? How does Node work?</h4>
            <p>Ans : It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </div>
    );
};

export default Blog;