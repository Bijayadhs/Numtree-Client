import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import RegisterComplete from './pages/auth/RegisterComplete';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='/register/complete' component={RegisterComplete} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
