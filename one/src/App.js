import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
import MyComp from './Components/MyComp';

class App extends Component {


  render(){
    return (
      <div>
     <center><h3>I'm parent app</h3></center> 
     <MyComp/>
      </div>
    );

  }
  
}

export default App;
