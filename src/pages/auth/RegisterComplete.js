import React, { useState, useEffect } from "react";
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function RegisterComplete({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const el = window.localStorage.getItem('email')
        setEmail(el);
    }, [email])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await auth.signInWithEmailLink(email, window.location.href);
            if (result.user.emailVerified) {
                window.localStorage.removeItem('email')
                let user = auth.currentUser;
                await user.updatePassword('password')
                const idTokenResult = await user.getIdTokenResult();
                console.log(user, idTokenResult)
                history.push('/');
            }
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }

    }


    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">

                    <h4>RegisterComplete</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="email" className="form-control" disabled value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="form-control" placeholder="Password" autoFocus value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit" className="btn btn-success mt-4">RegisterComplete</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterComplete;
