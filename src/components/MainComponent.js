import React, { Component } from 'react';
import Home from './HomeComponent'
import Filter from './FilterComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Mobile from './MobileComponent'
import Local from './LocalComponent'
import About from './AboutComponent'
import Visualization from './VisualizationComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { VIEWS } from '../assets/views';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      views: VIEWS
    }
  }

  componentDidMount() {
  }

  render() {

    const HomePage = () => {
      return(<Home/>);
    }

    const CategoryWithName = ({match}) => {
      return(<Visualization views={this.state.views} view={this.state.views.filter((view) => view.id === parseInt(match.params.categoryId, 10))[0]}/>)
    }

    return (
        <>
        <Header/>
              <Switch>
                <Route path="/home" component={HomePage}/>
                <Route path="/filter" component={() => <Filter/>}/>
                <Route path="/mobile" component={() => <Mobile/>}/>
                <Route exact path="/visualization" component={() => <Visualization views={this.state.views} view={null}/>}/>
                <Route path="/visualization/:categoryId" component={CategoryWithName}/>
                <Route path="/local" component={() => <Local/>}/>
                <Route path="/about" component={() => <About/>}/>
                <Redirect to="/home"/>
              </Switch>
        <Footer/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    );
  }
}

export default Main;
