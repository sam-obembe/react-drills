import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './Components/NewTask'
import List from './Components/List'
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: ["house"],
    }
    this.listUpdate = this.listUpdate.bind(this)
    
  }
 
  listUpdate(word){
    this.setState({tasks:[...this.state.tasks,word]});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My to-do list:</h1>
        </div>
        {/* <input value = {this.state.input} type = "text" onChange = {(inputs) => this.inputHandle(inputs.target.value)}></input>
        <button onClick = {this.clickHandle}>Add</button> */}
        <NewTask update = {this.listUpdate}/>
        <List tasks = {this.state.tasks} />
      </div>
    );
  }
}

export default App;
