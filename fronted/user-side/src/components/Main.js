import React, { useState, useEffect } from 'react';
import Login from './Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register/Register';
import About from './About/About';
import Contact from './Contact/Contact';
import Products from './Products/Products';
import ShowProduct from './Products/ShowProduct';
import "../neumorphism.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import TermsConditions from "../components/TermsConditions";
import RemindPassword from './RemindPassword/RemindPassword';
import ResetPassword from './RemindPassword/ResetPassword';


function Main() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const printItems = async () => {
      //  pakeisti vietoje sk i id!!!!!!! ${id}  
      //ant korteles on click paduoda funkcija mano ir i skliaust iraso ka ismapins id
      const url = 'https://eshopsmart.herokuapp.com/api/items';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.items);
      setItems(data.items);
  }
  useEffect(() => {
    printItems();
}, []);
  
  const printSingleItem = async (id) => {
      //  pakeisti vietoje sk i id!!!!!!! ${id}  
      //ant korteles on click paduoda funkcija mano ir i skliaust iraso ka ismapins id
      const url = `https://eshopsmart.herokuapp.com/api/item/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.item);
      setItem(data.item);
  }
  useEffect(() => {
      printSingleItem();
  }, []);
 

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/products" exact>
            <Products printSingleItem={printSingleItem} items={items} />
          </Route>
          {item ?
            <Route path="/product-details" exact>
              <ShowProduct item={item} />
            </Route> : false}
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact-us" exact>
            <Contact />
          </Route>
          <Route path="/terms-conditions" exact>
            <TermsConditions />
          </Route>
          <Route path="/remind-password" exact>
            <RemindPassword />
          </Route>
          <Route path="/reset-password" exact>
            <ResetPassword />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default Main;

