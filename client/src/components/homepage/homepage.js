import React, {Component} from 'react';
import {Nav} from 'reactstrap';
import axios from 'axios';
import './homepage.css';
import Jai from './img/person1.jpg';
import Aryan from './img/person2.jpg';
import Yash from './img/person3.jpg';
import Navbar from './../navbar/navbar';
import logo from './../../assets/img/STUDY JAMM.png';

class Homepage extends Component{

    render(){
        return(
            <div>
  <Navbar />                

  <section id="showcase" className="py-5">
    <div className="primary-overlay text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center">
            <h1 className="display-2 mt-5 pt-5 display-cus">
            Meet Like Minded People.
            </h1>
            <p className="lead">A platform to find Mentors in your vicinity</p>
            
          </div>
          <div className="col-lg-6">
            <img src="img/book.png" alt="" className="img-fluid d-none d-lg-block" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="boxes" className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card text-center border-primary border-study mb-resp">
            <div className="card-body">
              <h3 className="text-study">Vicinity Search</h3>
              <p className="text-muted">You can set radius according to your convenience to search mentors.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center bg-study text-white mb-resp">
            <div className="card-body">
              <h3>Skills Search</h3>
              <p>You can filter skills based on your interest while searching for the mentors nearby</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center border-primary border-study mb-resp">
            <div className="card-body">
              <h3 className="text-study">Role Search</h3>
              <p className="text-muted">You can either learn from a professional or a student depending on your requirements.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white text-center bg-study text-white">
            <div className="card-body text-white">
              <h3 className="text-white">Email</h3>
              <p>To protect the privacy of our users, we connect the mentor with the students via mail.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <footer id="main-footer" className="py-5 text-white foot">
    <div className="container">
        <div className="text-center">
          <p className="lead">
            Copyright &copy;
            <span id="year">2019</span>
          </p>
        </div>
    </div>
  </footer>

            </div>
        );
    }
}

export default Homepage;

/* 
    
*/