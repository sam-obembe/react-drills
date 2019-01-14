import React, {Component} from 'react'

class NewTask extends Component{
  constructor(props){
    super(props);
    this.state = {
      input:"",
      word: "",
    }
    this.inputHandle = this.inputHandle.bind(this)
    this.clickHandle = this.clickHandle.bind(this)
  }

  
  inputHandle(inputs){
    this.setState({input:inputs})
  }

  clickHandle(word){
    this.setState({word:this.state.input})
    //this.setState({input:""})
    this.props.update(this.state.word)
  }

  render(){
    return(
      <div>
        <input placeholder="enter new task"value = {this.state.input} onChange = {(inputs)=>this.inputHandle(inputs.target.value)}/>

        <button onClick ={this.clickHandle}>Click</button>
      </div>
    )
  }
    
}

export default NewTask