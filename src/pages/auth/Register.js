import React, { useState, useEffect } from "react";
import { auth } from '../../firebase';
// import { Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';



function Register({ history }) {
  const [email, setEmail] = useState('');
  // const [emailSend, setEmailSend] = useState(false);
  const { user } = useSelector(state => ({ ...state }))

  useEffect(() => {
    if (user && user.token) history.push('/')
  }, [user, history])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      // url: process.env.REACT_EMAIL_REDIRECT,
      url: 'http://localhost:3000/register/complete',
      handleCodeInApp: true,
    }
    console.log(email, config.url);

    await auth.sendSignInLinkToEmail(email, config);
    window.localStorage.setItem('email', email);
    toast.success(`Email is send to ${email}. Please check you inbox.`)
    // setEmailSend(true);
    setEmail("");
  }
  // useEffect(() => {
  //   setTimeout(() => {
  //     setEmailSend(false)
  //   }, 2000)

  // }, [emailSend])

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">

        {/* {emailSend ? <Alert variant="success">Email successfully send.</Alert> : <div></div>} */}
        <h4>Register</h4>
        <form onSubmit={handleSubmit}>
          <input type="email" className="form-control" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="btn btn-success mt-4">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
