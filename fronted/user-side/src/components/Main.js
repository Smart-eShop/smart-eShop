import React from 'react';
import Login from './Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register/Register';
import About from './About/About';
import Contact from './Contact/Contact';
import Products from './Products/Products';
import ShowProduct from './Products/ShowProduct';
import ProductsCategory from './Category/ProductsCategory';
import "../neumorphism.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import TermsConditions from "../components/TermsConditions";
import RemindPassword from './RemindPassword/RemindPassword';
import ResetPassword from './RemindPassword/ResetPassword';
import FrontPage from './FrontPage/FrontPage';
import Checkout from './Checkout/Checkout';

const Main = () => {
       return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={FrontPage} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/products" exact component={Products}/>
                    <Route path="/products/:id" component={ShowProduct}/>
                    <Route path="/about" exact component={About} />
                    <Route path="/category" exact component={ProductsCategory} />
                    <Route path="/contact-us" exact component={Contact} />
                    <Route path="/checkout" exact component={Checkout} />
                    <Route path="/terms-conditions" exact component={TermsConditions} />
                    <Route path="/remind-password" exact component={RemindPassword} />
                    <Route path="/reset-password" exact component={ResetPassword} />
                </Switch>
            </Router>
        </>

    );
}

export default Main;



