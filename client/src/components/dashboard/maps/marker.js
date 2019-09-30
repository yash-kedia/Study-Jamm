import React, {Component} from 'react';
import GoogleMap from 'google-map-react';

const markerStyle = {
    height: '40px',
    width: '40px'
}

const imgStyle = {
    height: '100%'
}

class Marker extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div style={markerStyle}>
                <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" />
            </div>            
        )
    }
}

export default Marker;
