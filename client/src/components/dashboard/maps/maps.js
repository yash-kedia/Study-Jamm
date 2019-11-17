
import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';
import Person from './Person';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './maps.css';
import 'ol/ol.css';
import 'antd/dist/antd.css';
/*import './react-geo.css';
*/
import markerImg from './marker.png';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import olStyle from 'ol/style/Style';
import olIcon from 'ol/style/Icon';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';
import Geolocation from 'ol/Geolocation'

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Vector} from 'ol/source';
import {fromLonLat} from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';


import {
  MapComponent
} from '@terrestris/react-geo';

const layer = new OlLayerTile({
  source: new OlSourceOsm()
});

const center = fromLonLat([77.209877, 28.57288]);
var pos = [];
    const mapStyles = {
      width: '50px',
	  height: '50px',
    }

	
	var geo = new Geolocation({
		tracking: true,
		trackingOptions: {
			enableHighAccuracy: true
		}
	});

	geo.on('change', () => {
		pos = geo.getPosition();
		console.log(pos);
	});

	const map = new OlMap({
		view: new OlView({
		  center: center,
		  zoom: 16,
		}),
		layers: [layer]
	});

	  
	  //map.on('postcompose', map.updateSize);

	  //Adding a marker on the map

class Maps extends Component {

	constructor(props){
		super(props);

	}

	state = {
		person: [
			{
				id: '',
				name: '',
				skills: '',
				lat: '',
				long: ''
			}
		],
		skillsSearchString: '',
		bool: false,
		radius: Number,
		alert: ''
		//skillsSearchArray: []
	}

	searchBarHandleChange = (e) => {
		this.setState({skillsSearchString: e.target.value});
	}

	radiusHandleChange = (e) => {
		this.setState({radius: e.target.value});
	}

	/*convertToArray = () => {
		return this.state.skillsSearchString.split(",");
	}*/

	onSearchBarSubmitHandler = (e) => {
		e.preventDefault();
		//this.setState({skillsSearchArray: this.convertToArray()});
		console.log(this.state.skillsSearchString);
		const query = {
			coordinates: pos,
			radius: this.state.radius,
			skills: this.state.skillsSearchString
		}
		
		axios.post('user/maps', query).then(res => {
			//if (err) throw err;
			//console.log(res.data.result);
			//res.data.result.splice(0,1);
			if(res.data.result.length === 0){
				console.log("No users found");
				this.setState({alert: 'No mentors found, try expanding your search radius.'});
			}
			//this.setState({person: []});
			this.setState({person: res.data.result});
			console.log(this.state.person);
			//this.setState({person: res.data});
			var arr = [];
			for(let i=0;i<this.state.person.length;i++){
				var marker = new Feature({
					geometry: new Point(
					  fromLonLat(this.state.person[i].location.coordinates)
					),
				});
				marker.setStyle(new olStyle({
					image: new olIcon(({
						crossOrigin: 'anonymous',
						src: 'https://i.ibb.co/0M6mT5H/output-onlinepngtools.png'
					}))
				}));
				arr[i] = marker

			}
			

			//arr.splice(0,1);

			this.setState({bool: true});

			map.getLayers().forEach(layer => {
				if (layer && layer.get('name') === 'Marker') {
				  map.removeLayer(layer);
				}
			  });
			
			  var vectorSource = new Vector({
				features: arr,
				name: 'Marker'
				//[marker]
			  });
			  var markerVectorLayer = new VectorLayer({
				source: vectorSource,
				name: 'Marker'
			  });
		
			  map.addLayer(markerVectorLayer);
			  //map.getView().setCenter(pos);
			  console.log("Yo");
			  console.log(pos);
			  map.getView().setCenter(fromLonLat(pos));
		});
	}

    render() {

		var person_list = this.state.person.map(per => {
			return (<Person name={per.name} skills={per.skills} />) 
		});

        return (
          	<div className="to_set_margin">
			  	<div className="text-center">

				<div className="SearchBar text-center">
						<div className="form-group row text-center">
							<Input
								className="search col-5 input-group-button"
								type="search"
								name="search"
								id="exampleSearch"
								placeholder="Enter the skills (use ',' to separate skills.)"
								onChange={this.searchBarHandleChange}
							/>

							<Input
								className="search col-5 input-group-button"
								type="search"
								name="search"
								id="exampleSearch"
								placeholder="Enter the radius (in meters)"
								onChange={this.radiusHandleChange}
							/>
							
							<Input type="submit" className="btn btn-primary btn-block dmeo col-2 input-group-button" value="Search" onClick={this.onSearchBarSubmitHandler} />
							
						</div>
					</div>
				</div>
				<div className="row">
				
					<div className="maps col-md-9" id="map">
						<MapComponent map={map} />
					</div>
				{
					<div className="col-md-3" id="list">
						{
							this.state.bool && person_list
						}
					</div>
				}
					
					
						
				</div>
            	
			</div>
        )
      }
    }

export default Maps;
