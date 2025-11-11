import React, { Component } from 'react'
import List from './List';

export default class Main2 extends Component {
    constructor(props) {
        super(props);
        //creating state
        this.state = {
            userName: "Chetna",
            email: "chetna@gmail.com",
            favColors: ['green', 'black', 'white', 'Blue']
        }
    }

  render() {
    return (
      <div>
        <div className='user-info'>
            <h1 style={{ color: "blue", padding: "10px" }}>Example of Props</h1>
            <h2>Hello {this.state.userName}</h2>
            <h3>Your Email Address {this.state.email}</h3>
            <List data={this.state.favColors}
            //I want to send the data to another componenet
            //and want to run a loop to show colors 
            />
            
        </div>
        
      </div>
    )
  }
}
