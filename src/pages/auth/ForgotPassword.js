import React, { useState, useEffect } from "react";
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function ForgotPassword({ history }) {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(state => ({ ...state }))

    useEffect(() => {
        if (user && user.token) history.push('/')
    }, [user, history])
    const handleReset = async () => {
        setLoading(true)
        try {
            const config = {
                url: 'http://localhost:3000/login',
                handleCodeInApp: true,
            }
            await auth.sendPasswordResetEmail(email, config);
            toast.success('Successfull reset')
            setLoading(false)
            history.push('/')
        } catch (err) {
            toast.warning(err.message)
            setEmail('')
            setLoading(false)
        }
    }

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {loading ? 'Loading.....' :
                        <>
                            <h4>Forgot Password</h4>
                            <form>
                                <input type="email" className="form-control" autoFocus value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
                                <Button variant="success" type="submit" disabled={!email} onClick={handleReset} block className="mb-2">Reset Password</Button>
                            </form>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
