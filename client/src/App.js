import React from 'react';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from './components/login-form/login-form';
import RegisterForm from './components/register-form/register-form';
import Map from './components/dashboard/maps/maps';
import './App.css';

function App() {
  return (
    <div className="App">
      <Map />
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
    </div>
  );
}

export default App;