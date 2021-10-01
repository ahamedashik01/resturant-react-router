import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className=" text-center my-5">
            <p className="fs-1 fw-bold">ABOUT page is not live yet <br /> We are working on it</p>
            <Link to="/home">Go back to home</Link>
        </div>
    );
};

export default About;