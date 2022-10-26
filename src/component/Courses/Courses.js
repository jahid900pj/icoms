import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import ViewCourses from '../ViewCourses/ViewCourses';
import CoursesName from './CoursesName/CoursesName'

const Courses = () => {
    const courses = useLoaderData()
    // console.log(courses)
    return (
        <div className='container mt-5'>

            <div className='row'>
                <div className='col-12 col-md-4 col-lg-2'>
                    <h6>COURSE CATEGORIES</h6>
                    {
                        courses.map(singleCourses => <CoursesName key={singleCourses._id}
                            name={singleCourses.courses_name}
                            id={singleCourses._id}
                        ></CoursesName>)
                    }
                </div>
                <div className='col-12 col-md-8 col-lg-10'>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            courses.map(singleCourses => <ViewCourses
                                key={singleCourses._id}
                                singleCourses={singleCourses}
                            ></ViewCourses>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Courses;