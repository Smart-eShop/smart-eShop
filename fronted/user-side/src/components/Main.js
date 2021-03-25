import React, { useEffect, useState } from "react";
import Login from "./Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register/Register";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Products from "./Products/Products";
import ShowProduct from "./Products/ShowProduct";
import ProductsByCategory from "./Category/ProductsByCategory";
import "../neumorphism.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import TermsConditions from "../components/TermsConditions";
import RemindPassword from "./RemindPassword/RemindPassword";
import ResetPassword from "./RemindPassword/ResetPassword";
import FrontPage from "./FrontPage/FrontPage";
import Checkout from "./Checkout/Checkout";
import Cart from "./Cart/Cart";
import useLocalStorage from "./useLocalStorage";
import ProductsCategories from "./Category/ProductsCategories";
import Category from "./Category/Category";

const Main = () => {
  const [items, setItems] = useState([]);
  const printItems = async () => {
    const url = "https://eshopsmart.herokuapp.com/api/items";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.items);
    setItems(data.items);
  };

  useEffect(() => {
    printItems();
  }, []);

  const [cartItems, setCartItems] = useLocalStorage("items", []);
  const [cartPriceBeforeTax, setCartPriceBeforeTax] = useLocalStorage(
    "price",
    0
  );
  const [cartTaxes, setCartTaxes] = useLocalStorage("taxes", 0);
  const [cartTotalPrice, setCartTotalPrice] = useLocalStorage("total_price", 0);
  const [totalQuantity, setTotalQuantity] = useLocalStorage(
    "total_quantity",
    0
  );
  const [categoryId, setCategoryId] = useState(0);
  const accessToken = localStorage.getItem("access_token");

  const addCart = (item) => {
    window.localStorage.setItem(item.title, item.quantity);
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist && exist.quantity < item.quantity) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else if (exist === undefined) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      alert("Atsiprašome, daugiau prekių sandėlyje nėra");
    }
  };

  const plusCart = (item) => {
    console.log("pridedu preke", item.quantity);
    const itemQuantity = window.localStorage.getItem(item.title, item.quantity);
    console.log("item quantity", itemQuantity);
    const exist = cartItems.find((x) => x.id === item.id);
    console.log("exist quantity", exist);
    if (exist && exist.quantity < itemQuantity) {
      console.log("kzkas");
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else if (exist === undefined) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      alert("Atsiprašome, daugiau prekių sandėlyje nėra");
    }
  };


  const minusCart = (item) => {
    console.log("atimu prekę", item);
    console.log("item quantity", item.quantity);
    const exist = cartItems.find((x) => x.id === item.id);
    console.log("exist quantity", exist.quantity);
    if (exist && exist.quantity > 1) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    } else if (exist === undefined) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      alert("Negalite nusipirkti nulio");
    }
  };

  const totals = () => {
    const itemsPriceBeforeTaxes = cartItems.reduce(
      (a, c) => a + ((c.price * 79) / 100) * c.quantity,
      0
    );
    setCartPriceBeforeTax(itemsPriceBeforeTaxes);
    const taxes = cartItems.reduce(
      (a, c) => a + ((c.price * 21) / 100) * c.quantity,
      0
    );
    setCartTaxes(taxes);
    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    setCartTotalPrice(totalPrice);
    const totalQuantity1 = cartItems.reduce((a, c) => a + c.quantity, 0);
    setTotalQuantity(totalQuantity1);
  };
  useEffect(() => {
    totals();
  }, [cartItems]);

  const [printCategories, setPrintCategories] = useState([]);

  const printAllCategories = async () => {
    const url = "https://eshopsmart.herokuapp.com/api/categories";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.Categories);
    setPrintCategories(data.Categories);
  };
  console.log(printCategories);
  useEffect(() => {
    printAllCategories();
  }, []);

  console.log(categoryId);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route
            path="/products"
            exact
            render={(props) => (
              <Products
                {...props}
                addCart={addCart}
                items={items}
                printItems={printItems}
                printCategories={printCategories}
              />
            )}
          />
           <Route path="/category" exact render={(props) => (
                        <ProductsCategories {...props} addCart={addCart} items={items} printCategories={printCategories} setCategoryId={setCategoryId} categoryId={categoryId}/>
                    )}/>
           <Route path="/products/:id" exact render={(props) =>(
                        <ShowProduct {...props} addCart={addCart} />
                    )}/>
          <Route path="/about" exact component={About} />
          
          <Route path="/contact-us" exact component={Contact} />
          <Route
            path="/checkout"
            exact
            render={(props) => (
              <Checkout
                {...props}
                cartPriceBeforeTax={cartPriceBeforeTax}
                cartTaxes={cartTaxes}
                cartTotalPrice={cartTotalPrice}
                totalQuantity={totalQuantity}
                cartItems={cartItems}
              />
            )}
          />
          <Route
            path="/cart"
            exact
            render={(props) => (
              <Cart
                {...props}
                addCart={addCart}
                minusCart={minusCart}
                plusCart={plusCart}
                cartItems={cartItems}
              />
            )}
          />
          <Route path="/terms-conditions" exact component={TermsConditions} />
          <Route path="/remind-password" exact component={RemindPassword} />
          <Route path="/reset-password" exact component={ResetPassword} />
        </Switch>
      </Router>
    </>
  );
};

export default Main;
