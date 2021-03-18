import React from 'react';
import Login from './Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register/Register';
import About from './About/About';
import Contact from './Contact/Contact';
import Products from './Products/Products';
import "../neumorphism.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import TermsConditions from "../components/TermsConditions";
import RemindPassword from './RemindPassword/RemindPassword';
import ResetPassword from './RemindPassword/ResetPassword';


function Main() {


  function getToken() {
    const tokenString = localStorage.getItem('access_token');
    return tokenString
  }
  const access_token = getToken();

  if (!access_token) {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Login />
        </Switch>
      </Router>
    )
  }

  else {



    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/products' exact component={Products} />
          <Route path='/about' exact component={About} />
          <Route path='/contact-us' exact component={Contact} />
          <Route path='/terms-conditions' exact component={TermsConditions} />
          <Route path='/remind-password' exact component={RemindPassword} />
          <Route path='/reset-password' exact component={ResetPassword} />
        </Switch>
      </Router>
    );
  }
}

export default Main;

