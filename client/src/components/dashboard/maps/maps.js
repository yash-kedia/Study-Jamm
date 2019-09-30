import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';
import Axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './maps.css';

    const mapStyles = {
      width: '50px',
	  height: '50px',
    }
    

class Map extends Component {

	state = {
		person: [
			{
				id: '',
				name: '',
				skills: [],
				lat: '',
				long: ''
			}
		],
		skillsSearch: []
	}

	onSearchBarSubmitHandler = (e) => {
		e.preventDefault();
		const query = {
			skills: this.state.skillsSearch
		}
		
		/*Axios.post('', query).then((res) => {
			this.setState({person = res.data.result});
		});*/
	}

    render() {
        return (
          	<div>
			  	<div className="SearchBar">
				  	<FormGroup>
						<Input
							className="search"
							type="search"
							name="search"
							id="exampleSearch"
							placeholder="Enter the skills"
						/>
					</FormGroup>
				</div>
            	<div className="maps">
					<GoogleMap
						bootstrapURLKeys={{ key: 'AIzaSyA_XYBBPBeFJEcnyQvQbPtysESUscmkJKc' }}
						center={{ lat: 5.6219868, lng: -0.1733074 }}
						zoom={14}
					>
						<Marker
							//title={'Current Location'}
							lat={5.6219868}
							lng={-0.1733074}
						/>

					</GoogleMap>
				</div>
			</div>
        )
      }
    }

    export default Map;