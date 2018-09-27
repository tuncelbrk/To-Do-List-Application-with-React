import React, { Component } from 'react';

import logo from './Loggo.svg';
import './App.css';
import './View';


export default class App extends Component {

  handleSubmit = (event) => {
    this.props.history.replace('/Adding');
  }
  handleSubmitView = (event) => {
    this.props.history.replace('/View');
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  };

  render() {
    
    return (
      <div>
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-do List</h1>
      </header>
        
          <br></br><br></br>          
          <button onClick={this.handleSubmit}>Add List</button>
          
          <br></br><br></br>
          <button onClick={this.handleSubmitView}>View Lists</button>

       
      </div>
    );
  }
}