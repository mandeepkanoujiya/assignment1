import React, { Component } from 'react';
import SubComp from './SubComp';

class MyComp extends Component {
    render(){
        return (
          <div>
          <center><h3>welcome to child component of app</h3></center>
          <SubComp/>
          </div>
        );
    }
}
export default MyComp;