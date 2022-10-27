import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGripfire } from "react-icons/fa";

const Home = () => {
    {/* https://blinkapp.vercel.app/courses  */ }
    // https://assignment-ten-2c58d.web.app
    return (
        <div className='container'>
            <div style={{ border: 'none' }} className="card mb-5 ">
                <div className="row g-0 ">
                    <div className="col-12 col-md-6 col-lg-6">
                        <img src="https://blinkapp.vercel.app/images/hero-svg.svg" className="h-100 img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="card-body">
                            <h2 className="card-title mb-4">AN OUTSTANDING PLACE FOR BETTER EDUCATION</h2>
                            <p className="card-text mb-4">To unlock the true potential of e-learning, it needs to be people-centered. It has to be rooted in the day-to-day lives of people within an organization who are learning and growing as individuals, while also supporting them and making them feel valued.</p>
                            <Button variant="primary">
                                <Link style={{ textDecoration: 'none', color: 'white' }} to='/courses'>Browser Courses</Link>
                            </Button>

                        </div>
                    </div>
                </div>
            </div>






            <div style={{ marginTop: '120px' }} className=''>
                <h2 className='text-center mt-5 mb-5'>DISCOVER A NEW WAY OF LEARNING, <br /> UNLOCK POSSIBILITIES</h2>
                <Row xs={1} md={2} lg={3} className="g-4">

                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title><FaGripfire></FaGripfire> Best Instructors</Card.Title>
                                <Card.Text>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.
                                </Card.Text>
                                <Button variant="outline-primary">Learn more</Button>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title><FaGripfire></FaGripfire> Easy Learning</Card.Title>
                                <Card.Text>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.
                                </Card.Text>
                                <Button variant="outline-primary">Learn more</Button>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title><FaGripfire></FaGripfire> Affordable Price</Card.Title>
                                <Card.Text>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam.
                                </Card.Text>
                                <Button variant="outline-primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>


            <div style={{ marginTop: '80px' }} >
                <Row xs={1} md={2} lg={4} className="g-4">
                    <Col >
                        <Card style={{ border: 'none' }}>
                            <Card.Body className='text-center'>
                                <h1 className='text-primary'><FaGripfire></FaGripfire></h1>
                                <Card.Title className='text-primary fs-2 mb-0'> 819</Card.Title>
                                <p className='mt-0'>Enrolled</p>
                                <Card.Text>
                                    Its something thats many of the wisest people in history have kept in mind.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ border: 'none' }}>
                            <Card.Body className='text-center'>
                                <h1 className='text-primary'><FaGripfire></FaGripfire></h1>
                                <Card.Title className='text-primary fs-2 mb-0'>1.3K</Card.Title>
                                <p className='mt-0'>User</p>
                                <Card.Text>
                                    For many men, the acquisition of wealth does not end their troubles, it only changes them.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ border: 'none' }}>
                            <Card.Body className='text-center'>
                                <h1 className='text-primary'><FaGripfire></FaGripfire></h1>
                                <Card.Title className='text-primary fs-2 mb-0'>07</Card.Title>
                                <p className='mt-0'>Courses</p>
                                <Card.Text>
                                    It's a helluva start, being able to recognize what makes you happy today, in this moment.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ border: 'none' }}>
                            <Card.Body className='text-center'>
                                <h1 className='text-primary'><FaGripfire></FaGripfire></h1>
                                <Card.Title className='text-primary fs-2 mb-0'>51</Card.Title>
                                <p className='mt-0'>Instructors</p>
                                <Card.Text>
                                    Happiness is when what you think, what you say, and what you do are in harmony.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>

        </div >
    );
};

export default Home;