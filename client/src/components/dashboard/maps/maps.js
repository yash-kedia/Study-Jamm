
import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './marker';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './maps.css';
import 'ol/ol.css';
import 'antd/dist/antd.css';
/*import './react-geo.css';
*/
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';


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

    const mapStyles = {
      width: '50px',
	  height: '50px',
    }
	
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
		skillsSearchString: ''
		//skillsSearchArray: []
	}

	searchBarHandleChange = (e) => {
		this.setState({skillsSearchString: e.target.value});
	}

	/*convertToArray = () => {
		return this.state.skillsSearchString.split(",");
	}*/

	onSearchBarSubmitHandler = (e) => {
		e.preventDefault();
		//this.setState({skillsSearchArray: this.convertToArray()});
		console.log(this.state.skillsSearchString);
		const query = {
			coordinates: [77.209877, 28.57288],
			skills: this.state.skillsSearchString
		}
		
		axios.post('user/maps', query).then(res => {
			//if (err) throw err;
			//console.log(res.data.result);
			this.setState({person: res.data.result});
			//console.log(this.state.person);
			//this.setState({person: res.data});
			var arr = [];
			for(let i=0;i<this.state.person.length;i++){
				var marker = new Feature({
					geometry: new Point(
					  fromLonLat(this.state.person[i].location.coordinates)
					),
				});

				arr[i] = marker

			}
			
			  var vectorSource = new Vector({
				features: arr
				//[marker]
			  });
			  var markerVectorLayer = new VectorLayer({
				source: vectorSource,
			  });
		
			  map.addLayer(markerVectorLayer);
		});
	}

    render() {
        return (
          	<div>
			  	<div className="text-center">
					<div className="SearchBar">
						<div className="form-group row">
							<Input
								className="search col-9"
								type="search"
								name="search"
								id="exampleSearch"
								placeholder="Enter the skills"
								onChange={this.searchBarHandleChange}
							/>
							
							<Input type="submit" className="btn btn-primary btn-block dmeo col-3" value="Search" onClick={this.onSearchBarSubmitHandler} />
							
						</div>
					</div>
				</div>
				<div className="row">
				<div className="col-md-3">
						Yoo
					</div>
					<div className="maps col-md-9" id="map">
						<MapComponent map={map} />
					</div>
					
				</div>
            	
			</div>
        )
      }
    }

<<<<<<< HEAD
export default Maps;
=======
    export default Map;
>>>>>>> 16dd17e8ab847462e611101c46ccaa3fdff43cf0
