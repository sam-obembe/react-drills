import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      foods: ['meat','fish','tears of the defeated'],
    }
    
  }
  
  render(){
    let foods = this.state.foods.map((food,index) => <h3 key = {index}>{food} </h3> )
    return(
      <div className = "App">
        {foods}
        <input type = "text"></input>
      </div>
    )
  }
}

export default App;
