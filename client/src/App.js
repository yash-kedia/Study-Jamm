import React from 'react';
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from './components/login-form/login-form';
import RegisterForm from './components/register-form/register-form';
import Map from './components/dashboard/maps/maps';
import Homepage from './components/homepage/homepage';
import './App.css';
import Profile from './components/dashboard/profile/Profile';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/maps" component={Map} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
