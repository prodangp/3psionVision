import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

 

class Local extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "",
            map: ""
            }
        this.showPosition = this.showPosition.bind(this)
        this.getLocation = this.getLocation.bind(this)
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(() => this.showPosition)
            
        } else { 
             this.setState({
                 message:"Geolocation is not supported by this browser."
             }) 
        }
    }

    showPosition(position) {
        this.setState({
            message: "Latitude: " + position.coords.latitude + 
            "<br>Longitude: " + position.coords.longitude
        }) 
        console.log(this.state.message)
        var uluru = {lat: position.coords.latitude, lng: position.coords.longitude};
      // The map, centered at Uluru
      //var map = new google.maps.Map(
      //    document.getElementById('map'), {zoom: 4, center: uluru});
      // The marker, positioned at Uluru
      //ar marker = new google.maps.Marker({position: uluru, map: map});
      } 
    render(){
        return(
            <>
            <div className="container py-2">
                <div className="row">
                    <div className="col-md-6">
                        <p>Click the button to get your coordinates.</p>
                        <button onClick={() => this.getLocation()}>Get local data</button>
                        <p id="demo">{this.state.message}</p>
                    </div>
                    <div className="col-md-6">
                        <div id="map">{this.state.map}</div>
                    </div>
                </div>
            </div>
            </>
        )
        
    }
}

export default Local;