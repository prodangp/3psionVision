import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
