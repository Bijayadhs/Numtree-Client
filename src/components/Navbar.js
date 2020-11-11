import React from 'react';

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a class="navbar-brand" href="/">Gumtree</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <form class="form-inline ml-auto my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item">
                            <a class="nav-link" href="/cart">Cart</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Signup">Signup</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Account</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="/">Action</a>
                                <a class="dropdown-item" href="/">Another action</a>
                                <a class="dropdown-item" href="/">Something else here</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="/">Separated link</a>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar
