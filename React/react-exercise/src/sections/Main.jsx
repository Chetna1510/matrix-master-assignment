import React, { Component } from 'react'

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      number: 5,
      title: "Play with Numbers",
      name: ''
    }
  }

  min = () => {
    this.setState({
      number: this.state.number - 1,
    })
  }

  plus = () => {
    this.setState({
      number: this.state.number + 1,
    })
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div>
          <div className='main'>
            <div className='play-with-number'>
              <h1 style={{ color: "red"}}>This is example of setState: </h1>
              <h1>{this.state.title}</h1>
              <button id='min' onClick={this.min}>-</button>
              <h1 id='number'>{this.state.number}</h1>
              <button id='plus' onClick={this.plus}>+</button>
            </div>

            <div className="live-preview">
              <label>Enter your Name Here:</label>
              <input type="text" name="" id="" value={this.state.value} onChange={this.handleNameChange}/> 
               <p>See the live preview of your text: {this.state.name}</p> 
            </div>
          </div>
        
      </div>
    )
  }
}

