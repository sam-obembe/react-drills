import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import SearchBar from './Components/SearchBar'


class App extends Component {
  constructor(){
    super();
    this.state= {
        snacks: ['Cupcakes','iceCream','cookies','nunu'],
        filterstring: "",
    }
  }
 
  handleChange(val){
    this.setState({filterstring: val})
  }
  render() {
    let snacksToShow = this.state.snacks.filter((val,index)=>{
      return val.includes(this.state.filterstring)
    }).map((val,index)=> {
      return <h2 key = {index}>{val}</h2>
    })
    return (
      <div className = "App">
        <input onChange = {(event) => this.handleChange(event.target.value) }></input>
        {snacksToShow}
      </div>
    );
  }
}

export default App;
