import React, { Component, useState } from 'react';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './scss/style.scss';
import Login from './components/Login';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
// const Login = React.lazy(() => import('./components/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
// const Login = React.lazy(() => import('./components/Login'));


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));

}

function getToken() {
  const tokenString = localStorage.getItem('access_token');
  // const userToken = JSON.parse(tokenString);
  return tokenString
}


function App() {
  const access_token = getToken();


  if (!access_token) {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Login />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }

  return (

    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          {/* <Redirect exact path="/login" name="Login Page" render={props => <Login {...props} />} /> */}
          <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
          <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
          <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
          <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}


export default App;
