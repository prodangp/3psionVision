import React,{Component} from 'react';
import {Row, Col, Container} from 'reactstrap'
import { Link } from 'react-router-dom'
import Map from 'web-world-wind-react';
import WorldWind from '@nasaworldwind/worldwind'

class Visualize3D extends Component {
    constructor(props) {
        super(props);
      }

    componentDidMount(){
        var wwd =  new WorldWind.WorldWindow('canvasOne');
        wwd.addLayer(new WorldWind.BMNGOneImageLayer());
        wwd.addLayer(new WorldWind.BMNGLandsatLayer());
        wwd.addLayer(new WorldWind.CompassLayer());
        wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
        wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
    }


    render(){
        
        return(
            <>
            <Container>
                <Row>
                    <Col md-auto/>
                    <Col sm-12 md-6 className="align-items-center">
                        <div id="globe">
                            <canvas id="canvasOne">
                                Your browser does not support HTML5 Canvas.
                            </canvas>
                        </div>
                        <Link to = "/visualize"  id="en"><button class="button_visualize"><span> Back </span></button></Link>
                        <Link to = "/visualize" id="fr"><button class="button_visualize"><span> Retour </span></button></Link>
                    </Col>
                    <Col md-auto/>
                </Row>
            </Container>
            </>
    )}
}


     
export default Visualize3D;