import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import NavBar from './nav_bar/nav_bar_container';
import Splash from './splash/splash_container';
import LoginForm from './session_form/login_form_container';
import Footer from './footer/footer';
import Map from './routes/create_route_container';
import SignUpFormContainer from './session_form/signup_form_container';
import RouteIndexContainer from './routes/route_index_container';
import RouteShowContainer from './routes/route_show_container';
import RouteEditContainer from './routes/edit_route_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
 
  <div className='app'>
    <header>
     <NavBar/>
     <Footer/>
    </header>
    <Switch>
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <AuthRoute exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/routes/create" component={Map} />
    <ProtectedRoute exact path="/routes" component={RouteIndexContainer} />
    <ProtectedRoute exact path="/routes/:id" component={RouteShowContainer} />
    <ProtectedRoute exact path="/routes/:id/edit" component={RouteEditContainer}/>
    </Switch>
  
  </div>
);

export default App;