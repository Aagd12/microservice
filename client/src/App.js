import React, { Component } from 'react'
import axios from'axios'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      message: ''
    }
  }

  handleClick1 = () => {
    axios.get('http://localhost:4000/api1')
    .then(res => {
      this.setState({message: res.data})
    })
    .catch(err => {
      console.log('serviceTwo did not connect')
    })
  }

  handleClick2 = () => {
    
    axios.get('http://localhost:4001/api2')
    .then(res => {
      this.setState({message: res.data})
    })
    .catch(err => {
      console.log('serviceTwo did not connect')
    })
  }

  handleClick3 = () => {
    
    axios.get('http://localhost:4002/api3')
    .then(res => {
      this.setState({message: res.data})
    })
    .catch(err => {
      console.log('serviceThree did not connect')
    })
  }

  render() {
    return(
      <div>
        <h1 style={{ textAlign: "center", color: "red"}}>Welcome to microapp</h1>
        
        <a href="http://localhost:4000/api1" style={{ padding: "10px 20px", textAlign: "center", color: "red"}} onClick={this.handleClick1} target="_blank" rel="noreferrer">Service One:</a>
        <a href="http://localhost:4001/api2" style={{ padding: "10px 20px", textAlign: "center", color: "blue"}} onClick={this.handleClick2} target="_blank" rel="noreferrer">Service Two:</a>
        <a href="http://localhost:4002/api3"  style={{ padding: "10px 20px", textAlign: "center", color: "yellow"}}onClick={this.handleClick3} target="_blank" rel="noreferrer">Service Three:</a>
           
      </div>
    )
  };
}

export default App;
