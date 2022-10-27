import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import SocialAccounts from '../../SocialAccounts/SocialAccounts';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        email: "", password: ""
    });

    const [errors, setError] = useState({
        email: "", password: "", general: ""
    })

    const navigate = useNavigate()
    const location = useLocation()


    const { createUser, updateUserProfile } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        // const email = form.email.value;
        // const password = form.password.value;
        console.log(name, photoURL)
        createUser(userInfo.email, userInfo.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                form.reset()
                handleUpdateUserProfile(name, photoURL)
                setError('')
                navigate(location?.state?.from?.pathname)
                // handleUpdateUserProfile(name, photoURL);
                // handleEmailVerify();
                // toast.success('verify your email')
            })
            .catch((error) => {
                console.error('new user ', error)
                setError({ ...errors, general: error.message })
            })

    }


    const handleEmailChange = (e) => {
        console.log(e.target.value)
        const email = e.target.value;
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            setError({ ...errors, email: 'Place provide a valid email' })
            setUserInfo({ ...userInfo, email: e.target.value })
        }
        else {
            setError({ ...errors, email: '' })
            setUserInfo({ ...userInfo, email: e.target.value })
        }

    }

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        if (password.length < 6) {
            setError({ ...errors, password: 'Password must be 6 characters' })
            setUserInfo({ ...userInfo, password: e.target.value })
        }
        else {
            setError({ ...errors, password: '' })
            setUserInfo({ ...userInfo, password: e.target.value })
        }


    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='container'>
            <div>
                <Form onSubmit={handleSubmit} style={{ maxWidth: '400px', background: '#adb5bd', boxShadow: '10px 10px 50px 5px #adb5bd' }} className='w-100 mx-auto ps-3 pe-3 pb-5 pt-4 rounded '>
                    <h1 className='text-center'>Sign Up</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>photo URL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleEmailChange}
                            required />
                        <Form.Text className="text-danger">
                            {errors.email && <p className="text-danger">{errors.email}</p>}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" onChange={handlePasswordChange}
                            required />
                        <Form.Text className="text-danger">
                            {errors.password && <p className="text-danger">{errors.password}</p>}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    </Form.Group>
                    <Form.Text className="text-danger">
                        {errors.general && <p className="text-danger">{errors.general}</p>}
                    </Form.Text>
                    <Button className='mb-3' variant="primary" type="submit" >
                        Register
                    </Button>
                    <p className='text-center hr-line'> <span>Login with social accounts</span> </p>
                    <SocialAccounts></SocialAccounts>
                    <p className='text-center'>Already have an account?
                        <Link to='/login'> Sign in</Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;