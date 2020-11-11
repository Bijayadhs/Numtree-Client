import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => ({ ...state }))
    const history = useHistory();
    const handleLogOut = async () => {
        await auth.signOut()
        dispatch({ type: 'LOG_OUT', payload: null })
        history.push('/login');
    }
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={'img/Numtree.png'} alt="Numtree" width="100px" height="60px" />
                </a>

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
                            <Link className="nav-link" to="/cart">My Cart</Link>
                        </li>
                        {!user && <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Signup</Link>
                            </li>
                        </>}

                        {user &&
                            <DropdownButton id="dropdown-basic-button" title={user.email && user.email.split('@')[0]}>
                                <Dropdown.Item href="/">My Dashboard</Dropdown.Item>
                                <Dropdown.Item href="/order">Your Orders</Dropdown.Item>
                                <Dropdown.Item href="/list">Your Lists</Dropdown.Item>
                                <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
                            </DropdownButton>
                        }
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar
