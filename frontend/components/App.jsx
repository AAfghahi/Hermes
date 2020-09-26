import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './nav_bar/nav_bar_container';
import Splash from './splash/splash_container';
import LoginForm from './session_form/login_form_container';
import Footer from './footer/footer';
import Map from './routes/map';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
 
  <div className='app'>
    <header>
     <NavBar/>
     <Footer/>
    </header>
    <Switch>
    <Route exact path="/" component={Splash} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <AuthRoute exact path="/login" component={LoginForm} />
    <Route exact path="/show" component={Map} />
    </Switch>
  
  </div>
);

export default App;