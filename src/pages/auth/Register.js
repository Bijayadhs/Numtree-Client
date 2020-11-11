import React, { useState } from "react";
import { auth } from '../../firebase';
// import { Alert } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
  const [email, setEmail] = useState('');
  // const [emailSend, setEmailSend] = useState(false);
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
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* {emailSend ? <Alert variant="success">Email successfully send.</Alert> : <div></div>} */}
          <h4>Register</h4>
          <form onSubmit={handleSubmit}>
            <input type="email" className="form-control" autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className="btn btn-success mt-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
