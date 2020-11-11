import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import RegisterComplete from './pages/auth/RegisterComplete';
import ForgotPassword from './pages/auth/ForgotPassword';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log(idTokenResult, user)
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user.email,
            token: idTokenResult.token
          }
        })
      }
    })
    return () => unsubscribe()
  }, [dispatch])


  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Switch>
        <div className="container  p-5">

          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route path='/register/complete' component={RegisterComplete} />
          <Route path='/cart' component={Cart} />
          <Route path='/forgot/password' component={ForgotPassword} />

        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
