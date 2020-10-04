import React from 'react';
import {Row, Col, Container} from 'reactstrap'
import { Link } from 'react-router-dom'


function Visualize() {
    return(
        <>
        <Container>
            <Row>
                <Col md-auto/>
                <Col sm-12 md-6 className="align-items-center">
                    <h2 id="fr"> <i class="fa fa-globe-europe"></i> Choisissez comment visualiser vos données </h2>
                    <h2 id="en"> <i class="fa fa-globe-europe"></i> Choose how to visualize your data </h2>
                    <Link to = "/visualize3D"><button class="button_visualize"><span>3D </span></button></Link>
                    <Link to = "/visualization"><button class="button_visualize"><span>2D </span></button></Link>
                </Col>
                <Col md-auto/>
            </Row>
        </Container>

        </>
    )
}

export default Visualize;