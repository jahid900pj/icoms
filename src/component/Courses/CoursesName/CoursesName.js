import React from 'react';
import { Link } from 'react-router-dom';
import './CoursesName.css'

const CoursesName = ({ name }) => {
    return (
        <div>
            <Link className='Cname '>{name}</Link>
        </div>
    );
};

export default CoursesName;