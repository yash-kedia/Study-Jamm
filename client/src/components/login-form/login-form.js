import React, {Component} from 'react';
import axios from 'axios';
import './login-form.css';
import logo from './../../assets/img/STUDY JAMM.png'

class Loginform extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    submitData = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post("user/authenticate", user).then(res => {
            console.log(res.data);
        });
    
    }

    render(){
        return(
            <div className="login-clean">
                <form method="post" onSubmit={this.submitData}>
                    <div className="illustration">
                        <img src={logo} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" name="email" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password}/>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary btn-block" value="Log In" type="submit" />
                    </div>
                    <a className="forgot" href="#">Forgot your email or password?</a>
                    <p className="forgot">Or</p>
                    <div className="form-group linkedIn">
                        <a href="#" title="LinkedIn" className="btn btn-linkedin btn-block">
                            <i className="fa fa-linkedin fa-fw"></i> Login with LinkedIn
                        </a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Loginform;