import React, { Component, useState } from 'react';
import { Jumbotron, Container, Button, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay, CardBody, CardDeck, Row,  UncontrolledCarousel } from 'reactstrap';
import { Link } from 'react-router-dom'
import { render } from '@testing-library/react';
import { FadeTransform, Fade, Stagger} from 'react-animation-components'
import {Image} from 'react-bootstrap'



class Visualization extends Component {
    constructor(props){
        super(props);
        this.state = {
            view: null,
            category: null,
            mapName: null,
            URL: null
        }
        this.RenderMapNames = this.RenderMapNames.bind(this)
        this.RenderCategory = this.RenderCategory.bind(this)  
        this.RenderMap = this.RenderMap.bind(this)     
    }
    RenderMap({view, index}){
  
            const theURL = view.links[index]
            console.log(theURL)
            this.setState({
                URL: theURL
            })
        


    }
    RenderMapNames({view}){
        if (view != null) {
            const links = view.names.map((name) => {
                const index = view.names.indexOf(name);
                return <Fade in><li><a href="#" onClick={() => this.RenderMap({view, index})}>{name}</a></li></Fade>})
            return(
                <>
                <input type="text" id="mySearch" onkeyup="myFunction()" placeholder="Search.." title="Type in a category"/>
                        <ul id="myMenu">
                           {links}
                        </ul>
                </>
            )
        }
        else{
            return(<div></div>)
    
        }
    
    }
    RenderCategory({view}) {
        return(
            <Link to = {'/visualization/' + view.id}>
                {view.category}
            </Link>
            
        );
    }
    render(){

        this.state.view = this.props.view
        return(
           <div className="container py-2">
                <Row>
                    <Col md-4 sm-12>        
                        <FadeTransform in transformProps={{
                                        exitTransform: 'scale(0.5) translateY(-50%)'
                                    }}>
                            <div class="vertical-menu">
                            {this.props.views.map((view) => {
                                return <Fade in>{this.RenderCategory({view})}</Fade>   
                            }) }
                            </div>
                        </FadeTransform>                    
                    </Col>
                    <Col md-4 sm-12>
                        <this.RenderMapNames view = {this.state.view}/>
                    </Col>
                    <Col md-4 sm-12>
                        <Image src={this.state.URL} fluid/>
                    </Col>
                </Row> 
            </div>
            
        )
        
    }
}

export default Visualization;