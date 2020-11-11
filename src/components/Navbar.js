import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">Gumtree</a>

                <form className="form-inline ml-auto my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Signup</Link>
                        </li>

                        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                            <Dropdown.Item href="/">Dashboard</Dropdown.Item>
                            <Dropdown.Item href="/login">Log In</Dropdown.Item>
                            <Dropdown.Item href="/register">Sign Up</Dropdown.Item>
                        </DropdownButton>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar
