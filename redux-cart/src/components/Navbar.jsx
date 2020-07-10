import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="mb-5">
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/cart" className="nav-link" >Cart</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/product" className="nav-link" >Products</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/order" className="nav-link" >Orders</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/login" className="nav-link" >Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
