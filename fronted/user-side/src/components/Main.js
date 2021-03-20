import React, {useState, useEffect} from 'react';
import Login from './Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register/Register';
import About from './About/About';
import Contact from './Contact/Contact';
import Products from './Products/Products';
import ShowProduct from './Products/ShowProduct';
import "../neumorphism.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import TermsConditions from "../components/TermsConditions";
import RemindPassword from './RemindPassword/RemindPassword';
import ResetPassword from './RemindPassword/ResetPassword';
import FrontPage from './FrontPage/FrontPage';

const Main = () => {
       return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact>
                        <FrontPage/>
                    </Route>
                    <Route path="/login" exact>
                        <Login/>
                    </Route>
                    <Route path="/register" exact>
                        <Register/>
                    </Route>
                    <Route path="/products" exact component={Products}/>
                    <Route path="/products/:id" component={ShowProduct}/>
                    <Route path="/about" exact>
                        <About/>
                    </Route>
                    <Route path="/contact-us" exact>
                        <Contact/>
                    </Route>
                    <Route path="/terms-conditions" exact>
                        <TermsConditions/>
                    </Route>
                    <Route path="/remind-password" exact>
                        <RemindPassword/>
                    </Route>
                    <Route path="/reset-password" exact>
                        <ResetPassword/>
                    </Route>
                </Switch>
            </Router>
        </>

    );
}

export default Main;



