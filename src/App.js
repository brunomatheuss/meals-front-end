import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import Routes from './Routes';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      showImage: false,
    };
  }

  toggle = () => {
    this.setState({
      showImage: !this.state.showImage,
    })
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          {/* <button type="button" onClick={this.toggle}>
            {this.state.showImage ? "Esconder" : }
            </button>
          {this.state.showImage && (
            <img src={logo} className="App-logo" alt="logo" />
          )}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>*/}
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
