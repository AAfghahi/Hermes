import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './nav_bar/nav_bar';

import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
  <div className='app'>
    <header>
    <NavBar/>
    </header>
    <Switch>
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;