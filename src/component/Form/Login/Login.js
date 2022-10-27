import React from 'react';
import './Login.css'
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import SocialAccounts from '../../SocialAccounts/SocialAccounts';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "", password: ""
    });
    const [errors, setError] = useState({
        email: "", password: "", general: ""
    })

    const { logIn } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        logIn(userInfo.email, userInfo.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError("")
                navigate(location?.state?.from?.pathname)
            })
            .catch(error => {
                console.log(error)
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

    return (
        <div className='container'>
            {/* <h1>{user.name}</h1> */}
            <div>
                <Form onSubmit={handleSubmit} style={{ maxWidth: '400px', background: '#adb5bd', boxShadow: '10px 10px 50px 5px #adb5bd' }} className='w-100 mx-auto ps-3 pe-3 pb-5 pt-4 rounded '>
                    <h1 className='text-center'>Login</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email"
                            onChange={handleEmailChange}
                            required
                        />
                        <Form.Text className="text-danger">
                            {errors.email && <p className="text-danger">{errors.email}</p>}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password"

                            onChange={handlePasswordChange}
                            required
                        />
                        <Form.Text className="text-danger p-o m-o">
                            {errors.password && <p className="text-danger">{errors.password}</p>}
                        </Form.Text>
                    </Form.Group>

                    <Form.Text className="text-danger p-o m-o">
                        {errors.general && <p className="text-danger">{errors.general}</p>}
                    </Form.Text>


                    <Button className='mb-3' variant="primary" type="submit">
                        Login
                    </Button>
                    <p className='text-center hr-line'> <span>Login with social accounts</span> </p>
                    <SocialAccounts></SocialAccounts>
                    <p className='text-center'>Don't have an account?
                        <Link to='/signup'> Sign up</Link>
                    </p>

                </Form>


            </div>
        </div>
    );
};

export default Login;