import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const SocialAccounts = () => {
    const { googleProviderLogin, githubProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {

        googleProviderLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })

    }

    const handleGithubSingIn = () => {
        githubProviderLogin(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    return (
        <div>
            <Button onClick={handleGoogleSingIn} className='mb-2 w-100' variant="outline-primary"> <FaGoogle></FaGoogle> Login with google</Button>
            <Button onClick={handleGithubSingIn} className='mb-2 w-100' variant="outline-primary"><FaGithub></FaGithub> Login with github</Button>
        </div>
    );
};

export default SocialAccounts;