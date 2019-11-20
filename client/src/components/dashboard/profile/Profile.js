import React,{Component}from "react";
import ReactDOM from "react-dom";
import axios from 'axios';


import NavbarProfile from '../maps/navbarprofile';
import profile_image from '../../../assets/img/profile.jpeg';
import "./profile.css";
import {  LinkedIn } from 'react-profiles';

class Profile extends Component{
	
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
				<h2> John Doe</h2>
				</div>
                </div>
			<div className="main-container">
				<p>Role : student or professional </p>
				<p>user_description</p>
				<p>
				<i className="fa fa-envelope" />
				Email
				</p>
				<p>
				<i className="fa fa-phone" /> Phone Number
				</p>
                <p className="linked">
                <LinkedIn username="yashkedia" />
                </p>
				<hr />
				<p>
				<b>
					<i className="fa fa-asterisk info " />
					Skills
				</b>
				</p>
				<p>one</p>
                
			</div>
			</div>
		 </div>
		);
  }
  
}

export default Profile;