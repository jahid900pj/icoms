import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesName.css'

const CoursesName = ({ name, id }) => {
    return (
        <div>
            <Link className='Cname ' to={`/coursesDetail/${id}`}>{name}</Link>
        </div>
    );
};

export default CoursesName;