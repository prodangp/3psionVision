import React, {Component} from 'react';
import { Card, Jumbotron, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import { FontAwesomeIcon } from 'react-fontawesome'

class SideNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            navwidth: '250 px',
            navclass: 'closed'
        };

        this.openNav = this.openNav.bind(this)
        this.closeNav = this.closeNav.bind(this)

    }
    openNav() {
        this.setState({
            navwidth: 250,
            navclass: 'open'
        });
    }

    closeNav() {
        this.setState({
            navwidth: 0,
            navclass: 'closed'
        });
    }

    render(){
        return(
            <>
            <button className = "mizerie" onClick={this.openNav}><i className="fa fa-bars 10x"></i></button>
            <div id="mySidenav" className={'sidenav ' + this.state.navclass}>
                <a className="closebtn" onClick={this.closeNav}>&times;</a>
                <Link to="/home" id="en" className="link">Home</Link>
                <Link to="/home" id="fr" className="link">Chez moi</Link>
                <Link to="/find" id="en" className="link">Find Data</Link>
                <Link to="/find" id="fr" className="link">Trouver les données</Link>
                <Link to="/visualize" id="en" className="link">Visualize Data</Link>
                <Link to="/visualize" id="fr" className="link">Visualisez les données</Link>
                <Link to="/about" id="en" className="link">About us</Link>
                <Link to="/about" id="fr" className="link">À propos de ça</Link>
            </div>

            </>
        )
    }

}
class Header extends Component {
    render(){
        return(
            <>
            <SideNav/>
            <Jumbotron className="bg-transparent">
                <div className="container">
                    <div className="row row-header justify-content-center">
                        <div className="col-12 col-sm-4 mt-auto logo">
                            <img src={require("../assets/1.png")} height="200px" width="200px" alt="3psilon Technology"/>
                        </div>
                        <div className="col-12 col-sm-4 mt-auto">
                            <h1>3psilon Vision</h1>
                            <p id="en" className="caption">We deliver knowledge to people, and create a unique visualization experience.</p>
                            <p id="fr" className="caption">Nous fournissons des connaissances aux gens et créons une expérience de visualisation unique.</p>
                        </div>
                        <div className="col-12 col-sm-4 mt-auto">
                        <blockquote className="blockquote text-left">
                            <p className="mb-2 motto">Per aspera ad astra</p>
                            <footer id="en" className="blockquote-footer">Our motto,
                                <cite title="Source Title">a Latin saying</cite>
                            </footer>
                            <footer id="fr" className="blockquote-footer">Notre devise,
                                <cite title="Source Title"> un dicton latin</cite>
                            </footer>
                        </blockquote>
                            
                   
                        </div>
                    </div>
                </div>
            </Jumbotron>

            </>
        )
    }
}

export default Header;