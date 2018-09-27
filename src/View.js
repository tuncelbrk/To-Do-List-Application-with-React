import React, { Component } from 'react';
import logo from './Huawei.svg';
import './App.css';
import List from "./List";

export default class Adding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  handleSubmit = (event) => {
    this.props.history.replace('/App');
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  };

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lists</h1>
      </header>
        
       
        <button onClick={this.handleSubmit}>Main</button> 
        <a>{List}</a>
        <List items={this.state.items} />
      </div>
    );
  }
}