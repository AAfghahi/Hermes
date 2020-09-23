import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './nav_bar/nav_bar_container';
import Splash from './splash/splash_container';
import LoginForm from './session_form/login_form_container';
import Footer from './footer/footer';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
  <div className='app'>
    <header>
    <NavBar/>
    </header>
    <Switch>
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <AuthRoute exact path="/login" component={LoginForm} />
    </Switch>
   
  </div>
);

export default App;