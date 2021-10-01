import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=" text-center my-5">
            <p className="fs-1 fw-bold">404 error <br />
                "Sorry page not found"</p>
            <Link to="/home">Go back to home</Link>
        </div>
    );
};

export default NotFound;