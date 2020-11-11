import React, { useState } from "react";
import { auth } from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <ToastContainer

                    />
                    {/* {emailSend ? <Alert variant="success">Email successfully send.</Alert> : <div></div>} */}
                    <h4>Login</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="email" className="form-control" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="form-control" autoFocus value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" className="btn btn-success mt-4">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
