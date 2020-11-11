import React, { useState } from "react";
import { auth, googleAuthProvider } from '../../firebase';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function Login({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(email, password)
        try {
            const result = await auth.signInWithEmailAndPassword(email, password)
            const { user } = result;
            const idTokenResult = user.getIdTokenResult()
            toast.success('Login Successfully')
            dispatch({
                type: 'LOGGED_IN_USER', payload:
                    { user: user.email, token: idTokenResult.token }
            })
            history.push('/')
            setLoading(false)
        } catch (err) {
            toast.warning(err.message)
        }
    }

    const handleGoogleLogin = async () => {
        setLoading(true)
        const result = await auth.signInWithPopup(googleAuthProvider);
        console.log(result.user)
        const { user } = result;
        const idTokenResult = user.getIdTokenResult()
        toast.success('Login with Google Successfull')
        dispatch({
            type: 'LOGGED_IN_USER', payload:
                { user: user.email, token: idTokenResult.token }
        })
        history.push('/')
        setLoading(false)
    }

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {loading ? 'Loading.....' :
                        <>
                            <h4>Login</h4>
                            <form>
                                <input type="email" className="form-control" autoFocus value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
                                <input type="password" className="form-control" autoFocus value={password} placeolder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
                                <Button variant="success" type="submit" onClick={handleLogin} block className="mb-2"><AiOutlineLogin /> Login with Email/Password</Button>
                                <Button variant="outline-success" type="submit" onClick={handleGoogleLogin} block><AiFillGoogleCircle /> Login with Google</Button>
                            </form>
                            <Link to="/forgot/password" className="text-danger float-right">Forgot Password</Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Login;
