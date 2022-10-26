import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaUser } from "react-icons/fa";

const DetailCourses = () => {
    const coursesDetails = useLoaderData();
    console.log(coursesDetails)
    const { image_url, details, price, title, total_view, author, _id } = coursesDetails;
    return (
        <div className='container'>
            {/* <h1>{coursesDetails.courses_name
            }</h1> */}
            <div className="card mb-3 " >
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={image_url} className="img-fluid rounded-start h-100" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h3 className="card-title">{title}</h3>
                            <p className="card-text">{details}</p>
                            <p>Total enroll : {total_view}</p>
                            <p className='d-flex align-items-center mb-0'> <FaUser className='me-2'></FaUser> Created by : {author.name}</p>
                            <p className='mt-0'>Last update : {author.published_date}</p>
                            <h4 className="card-text">$ {price}</h4>

                            <Button variant="primary">
                                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/premium/${_id}`} >Premium Access</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCourses;