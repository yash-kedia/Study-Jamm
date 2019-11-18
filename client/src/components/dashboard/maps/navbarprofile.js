import React, {Component} from 'react';
import axios from 'axios';
import '../../navbar/navbar.css';
import logo from './../../../assets/img/STUDY JAMM.png';
import {Route, Link} from 'react-router-dom';
import store from 'store';

class NavbarProfile extends Component{

  handleLogout = () => {
    //const {history} = this.props;
    store.remove('loggedIn');
    console.log("You have been logged out.")
    //history.push('/login');
  }

    render(){
      const {history} = this.props;
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-light fixed-top py-4" id="main-nav">
    <div className="container">
      <Link to="/" className="navbar-brand">
        <img src={logo} />
      </Link>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="navLink">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="navLink" onClick={this.handleLogout}>Logout</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
            </div>
        );
    }
}

export default NavbarProfile;