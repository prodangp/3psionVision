import React, { Component, useState } from 'react';
import { Jumbotron, Container, Button, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay, CardBody, CardDeck, Row,  UncontrolledCarousel } from 'reactstrap';
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react';


class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            }
    }
    
    render(){
        return(
                <center>
                    <i><h1 id="en">Our story<br/><br/>
                    Episode VII<br/><br/>
                    THE RISE OF 3PSILON<br/><br/><br/>
                    In a galaxy far far away<br/>
                    A group of 5 young jedi decided to bring inovation to the universe<br/>
                    </h1></i>

                <i><h1 id="fr">Notre histoire<br/><br/>
                Épisode VII<br/><br/>
                LA HAUSSE DES 3PSILON<br/><br/><br/>
                Dans une galaxie très lointaine<br/>
                Un groupe de 5 jeunes Jedi a décidé d'apporter de l'innovation à l'univers<br/>
                </h1></i>

                <audio controls autoplay>
                <source src="7.mp3" type="audio/mpeg"/>
                </audio></center>
          
        )}}
        
    

export default About;