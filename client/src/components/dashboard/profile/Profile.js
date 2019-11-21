import React,{Component}from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import NavbarProfile from '../maps/navbarprofile';
import profile_image from '../../../assets/img/profile.jpeg';
import "./profile.css";
import {  LinkedIn } from 'react-profiles';



var store = require('store');


class Profile extends Component{

	constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            description: '',
            linkedInUrl: '',
            role: '',
            skill: []
        }
    }
	
	componentDidMount(){
		var idt = {
			id: store.get('id')
		}
		var id = store.get('id');
		//console.log(config);
		axios.get('user/profile/'+id, idt).then(res => {
			console.log(res.data.data);
			this.setState({name: res.data.data.name});
			this.setState({email: res.data.data.email});
			this.setState({description: res.data.data.description});
			this.setState({linkedInUrl: res.data.data.linkedInLink});
			this.setState({role: res.data.data.role});
			this.setState({skill: res.data.data.skills});
		}).catch(err => {
			console.log(err);
		});
	}
	
	render(){
		return(
		<div className="pro">
			
			<NavbarProfile />
			 <div className="profile-card"> 
			<div className="image-container">
				<img
				className="image"
				src={profile_image}
				/>
				<div className="title">
					<br />
				<h2> {this.state.name} </h2>
				</div>
                </div>
			<div className="main-container">
				<p>Role : {this.state.role} </p>
				<p>{this.state.description}</p>
				<p>
				<i className="fa fa-envelope" />
				{this.state.email}
				</p>
                <p className="linked">
                <LinkedIn username={this.state.linkedInUrl} />
                </p>
				<hr />
				<p className="skill-set">
						Skills : {
							this.state.skill.map((item) => ( 
									<span className = "skills skill_pro"> { item } </span>
								))
						}
				
				</p>
                
			</div>
			</div>
		 </div>
		);
  }
  
}

export default Profile;