import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const ViewCourses = ({ singleCourses }) => {
    console.log(singleCourses)
    const { image_url, title, details } = singleCourses;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title.length > 50 ? <p>{title.slice(0, 50)}...</p> : title
                    }</Card.Title>
                    <Card.Text>
                        {
                            details.length > 100 ? <p>{details.slice(0, 100)}...</p> : details

                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ViewCourses;