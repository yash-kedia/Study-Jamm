import React, {Component} from 'react';
import axios from 'axios';
import './register-form.css';
import { Redirect } from 'react-router-dom';
import Navbar from './../navbar/navbar';
import {Route, Link} from 'react-router-dom';

class Registerform extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passrep: ''
        }
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    }
    
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    handlePassRepChange = (e) => {
        this.setState({passrep: e.target.value});
    }

    submitData = (e) => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        
        console.log(user);
        axios.post("user/register", user).then(res => {
            console.log(res);
        });
    }

    render(){
        return(
            <div>
                <Navbar />
            
            <div className="register-photo">
                <div className="form-container">
                    <div className="image-holder"></div>
                    <form onSubmit={this.submitData}>
                        <h2 className="text-center"><strong>Create</strong> an account.</h2>
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="name" placeholder="Name"  onChange={this.handleNameChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" placeholder="Password"  onChange={this.handlePasswordChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password-repeat" placeholder="Password (repeat)"  onChange={this.handlePassRepChange} />
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" />I agree to the license terms.
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary btn-block" value="Sign Up" />
                        </div>
                        <Link className="already" to="/login">You already have an account? Login here.</Link>
                        <p className="already">Or</p>
                        <div className="form-group linkedIn">
                            <a href="#" title="LinkedIn" className="btn btn-linkedin btn-block">
                                <i className="fa fa-linkedin fa-fw"></i> Register  with  LinkedIn
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Registerform;