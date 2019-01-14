import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: [],
      word: ""
    }
    this.clickHandle = this.clickHandle.bind(this)
  }

  inputHandle(words){
    this.setState({word:words});
  }
  clickHandle(){
    this.setState({
      tasks:[...this.state.tasks,this.state.word],
      word:""
      });
  }
  render() {
    let list = this.state.tasks.map((element,index) =>{
      return (
        <Todo key ={index} task = {element}/>
      )
      })

    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <input value = {this.state.word}type ="text" onChange ={(e) => this.inputHandle(e.target.value)}/>

        <button onClick = {this.clickHandle}>Add</button>
        
        <div>
          {list}
        </div>
        
        
      </div>
    );
  }
}

export default App;
