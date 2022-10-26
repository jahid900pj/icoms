import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const enrollData = useLoaderData()

    const { price, title } = enrollData;
    return (
        <div className='container'>
            <Card className='mx-auto w-100' border="primary" style={{ maxWidth: '600px' }}>
                <Card.Header><h3 className='text-center text-success'>Enrolled Successfully</h3></Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className='fs-5'>
                        paid : ${price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Premium;