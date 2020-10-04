import React, { Component, useState } from 'react';
import { Jumbotron, Container, Button, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay, CardBody, CardDeck, Row,  UncontrolledCarousel } from 'reactstrap';
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            }
    }
    
    render(){
        return(
            <>
                <center>
                <div className="container py-2">
                    <div className="row">
                <div className="col-md-6">
                        <div className="full w-100">
                        <Link to="/filter">
                            <div className="overlay-effect h-100 w-100"></div>
                            <div>
                                <h3 id="en"><b>Personalize <br/>your filter</b></h3>
                                <h3 id="fr"><b>Personnalisez <br/>votre filtre</b></h3>
                            </div>
                        </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="half">
                        <a href="/local">
                        <div className="overlay-effect h-100 w-100"></div>
                        <div>
                            <h3 id="en"><b>Local <br/>Data</b></h3>
                            <h3 id="fr"><b>Données<br/>locales</b></h3>
                        </div>
                        </a>
                        </div>
                        <div className="half2">
                        <Link to="/mobile">
                            <div className="overlay-effect h-100 w-100"></div>
                            <div>
                                <h3 id="en"><b>Try our <br/>Mobile App</b></h3>
                                <h3 id="fr"><b>Essayez notre<br/>application mobile</b></h3>
                            </div>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </center>
            </>
        )
        
    }
}

export default Home;