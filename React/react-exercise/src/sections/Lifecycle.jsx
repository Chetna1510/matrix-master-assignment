import React, { Component } from 'react'
import axios from 'axios'
import Postitems from './Postitems';

export default class Lifecycle extends Component {
    constructor(){
        super();
        this.state = {
            titleMessage: "We will learn React LifeCycle Methods here",
            inputText: '',
            data: [],       // <- initialize as empty array
            jsonMessage: ''
        }
    }
    inputChanged = (e) => {
        this.setState({
            inputText: e.target.value
        })

    }
    // componentDidMount = () => {
    //     this.setState ({
    //         inputText: "Componenet is ready... Please change the input"
    //     })
    // }
    // componentWillUnmount = () => {
    //     console.log('componenet will unmount');
    // }

    componentDidMount = () => {
        //CALL API
        //AXIOS - npm package
        this.setState({
            jsonMessage: "{JSON} API Call - Example of componentDidMount"
        })
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(result => {
                this.setState({
                    data: result.data.slice(0, 5)  // <-- only first 5 posts
                })
            })
            .catch( err => {
                console.log(err);
            })
        }
    
    render() {
    //console.log(this.state.data);

    return (
      <div>
        <div className='react-lifecycle'>
            <h1 style={{color: "green", padding: "10px"}}>{this.state.titleMessage}</h1>
            <label>Part of Lifecycle- Enter something here: </label>
            <input type="text" onChange={this.inputChanged}/>
            <h3>{this.state.inputText}</h3> 
            <h2 style={{padding: "5px", color: "blue"}}>{this.state.jsonMessage}</h2>
            <ol>
            {
                this.state.data.map(post => {
                    
                    // return(<li>
                    //     <h2>Title:{post.title}</h2>
                    //     <h4>Body: {post.body}</h4>
                    //     <hr/>
                    // </li>)

                    //Instead of above code, we will use props to send data to another componenet
                    return(
                        <Postitems post = {post} key={post.id}/>
                    )    
                })
            }
            </ol>
            

        </div>   
      </div>
    )
  }
}
