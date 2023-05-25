import React from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';


const  home = () => {
    return (
        <div ClassName="container" style={{margintop: "80px"}}>
        <div ClassName="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: 'rgb(238, 238, 238)' }}>
            <div ClassName="text-center">
                <h1 ClassName="display-4">Welcome to the Cheesecake Factory</h1>
                <p ClassName="lead">
                    <Link to='/order' ClassName='nav-link text-light'>
                        <button ClassName="btn btn-dark btn-lg">Click here to order your own custom cheesecake</button>
                    </Link>
    
                </p>
            </div>
        </div>
    </div>
    )
}

export default home;
