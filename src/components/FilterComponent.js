import React, { Component, useState } from 'react';
import { Container, Button, Col, Row, Form, Label, Input, ButtonGroup, FormGroup } from 'reactstrap';
import { render } from '@testing-library/react';


class Filter extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: '',
            distance: "0m",
            map: '',
            URL: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
 
    validateForm(event) {
        var date = this.state.date
        var EPSG = this.state.map + "/"
        var distance = '0m'
        var URL = "https://gibs.earthdata.nasa.gov/wmts/epsg";
    
        if (this.state.distance == '250m') {
          distance = this.state.distance.concat("/6");
        } else if (this.state.distance == '500m') {
          distance = this.state.distance.concat("/5");
        } else if (this.state.distance == '1km') {
          distance = this.state.distance.concat("/4");
        } else if (this.state.distance == '2km') {
          distance = this.state.distance.concat("/3");
        }
    
        if (this.state.date == "") {
          alert("You must choose a date!");
        } else if (this.state.distance == "0m") {
          alert("You must choose a distance!");
        } else if (EPSG == "/") {
          alert("You must choose a map type!");
        } else {
          URL = URL.concat(EPSG);
          URL = URL.concat("best/MODIS_Terra_CorrectedReflectance_TrueColor/default/");
          URL = URL.concat(this.state.date);
          URL = URL.concat("/");
          URL = URL.concat(distance);
          URL = URL.concat("/13/36.jpg");

          this.setState({
            URL: URL
          });
    
        }
        event.preventDefault();
      }
    
    
    render(){
        return(
            <>
            <Col sm="12" md={{ size: 4, offset: 4 }}>
                <Form onSubmit={this.validateForm}>
                <FormGroup>
                    <Label className="radio-label" htmlFor="date">Date</Label>
                    <Input type="date" id="date_history" name="date" value={this.state.date}
                                        onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label className="radio-label" htmlFor="distance">Distance</Label>
                    <div className="radio-buttons align-items-center">
                        <input className="radio-input" type="radio" id="250m" name="distance" value="250m" onChange={this.handleInputChange}/>
                        <Label className="radio-label" htmlFor="250m">250 m</Label>
                        <input className="radio-input" type="radio" id="500m" name="distance" value="500m" onChange={this.handleInputChange}/>
                        <Label className="radio-label" htmlFor="500m">500 m</Label>
                        <input className="radio-input" type="radio" id="1km" name="distance" value="1km" onChange={this.handleInputChange}/>
                        <Label className="radio-label" htmlFor="1km">1000 m</Label>
                        <input className="radio-input" type="radio" id="2km" name="distance" value="2km" onChange={this.handleInputChange}/>
                        <Label className="radio-label" htmlFor="2km">2000 m</Label>
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label className="radio-label" htmlFor="map">Map Type</Label>
                    <div className="radio-buttons align-items-center">
                        <input className="radio-input" type="radio" id="4326" name="map" value="4326" onChange={this.handleInputChange}/>
                        <Label className="radio-label" htmlFor="4326">Geographic</Label><br/>
                        <input className="radio-input" type="radio" id="3857" name="map" value="3857" onChange={this.handleInputChange}/>
                        <Label className="radio-label" htmlFor="3857">Web Mercator</Label><br/>
                        <input className="radio-input" type="radio" id="3413" name="map" value="3413" onChange={this.handleInputChange}/>
                        <Label className="radio-label" htmlFor="3413">Arctic Polar Stereographic</Label><br/>
                        <input className="radio-input" type="radio" id="3031" name="map" value="3031" onChange={this.handleInputChange}/>
                        <Label className="radio-label" htmlFor="3031">Antarctic Polar Stereographic</Label><br/>
                    </div>
                </FormGroup>
                <Button type="submit">Apply filters</Button>
                    
                </Form>
                
            </Col>
            <br/><br/>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <center>
                    <img src={this.state.URL}/>
                </center> 
            </Col>
            
            </>

            
        )
        
    }
}

export default Filter;
