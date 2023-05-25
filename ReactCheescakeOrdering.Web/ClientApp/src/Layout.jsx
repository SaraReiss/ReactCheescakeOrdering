import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
    return (
        <div>
            <header>
                <nav ClassName="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div ClassName="container">
                        <a ClassName="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">Cheesecake Ordering</a>
                        <button ClassName="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span ClassName="navbar-toggler-icon"></span>
                        </button>
                        <div ClassName="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul ClassName="navbar-nav flex-grow-1">
                                <li ClassName="nav-item">
                                    <Link to='/' ClassName='nav-link text-light'>
                                        Home
                                    </Link>
                                </li>
                                <li ClassName="nav-item">
                                    <Link to='/order' ClassName='nav-link text-light'>
                                        Order
                                    </Link>
                                </li>
                                <li ClassName="nav-item">
                                    <Link to='/vieworders' ClassName='nav-link text-light'>
                                       View Orders
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div ClassName="container" style={{ marginTop: 60 }}>
                {props.children}
            </div>

        </div>
    )
}

export default Layout;