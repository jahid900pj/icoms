import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';

const ViewCourses = ({ singleCourses }) => {
    // console.log(singleCourses)
    const { image_url, title, details, price, _id } = singleCourses;

    return (
        <Col>
            <Card className='shadow  bg-body rounded'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title.length > 50 ? <p>{title.slice(0, 50)}...</p> : title
                    }</Card.Title>
                    <Card.Text>
                        {
                            details.length > 100 ? <p>{details.slice(0, 100)}...</p> : details

                        }
                    </Card.Text>
                    <div className='d-flex  justify-content-between'>
                        <h4>$ {price}</h4>
                        <Button variant="primary">
                            <Link style={{ textDecoration: 'none', color: 'white' }} to={`/coursesDetail/${_id}`}>More...</Link>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default ViewCourses;