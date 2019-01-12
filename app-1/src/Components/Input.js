import React, {Component} from 'react'

export default class Input extends Component{
  constructor(){
    super();
    this.state = {
      input : ""
    }
    this.inputHandle = this.inputHandle.bind(this);
  }
  inputHandle(val){
    this.setState({input: val.target.value})
  }

  render(){
    return(
      <div>
        <input type = {Text} onChange = {this.inputHandle}></input>
        <h3>{this.state.input}</h3>
      </div>
      
    )
  }
}