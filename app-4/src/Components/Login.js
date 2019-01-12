import React,{Component} from 'react';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.userNameLogger = this.userNameLogger.bind(this);
    this.loginClick = this.loginClick.bind(this);
    this.passwordLogger = this.passwordLogger.bind(this);
  }
  loginClick(){
    alert(`${this.state.username} and ${this.state.password}`)
  }
  userNameLogger(name){
    this.setState({username:name});
  }
  passwordLogger(passcode){
    this.setState({password:passcode})
  }
  render(){
    return(
      <div>
        <input type = "text" placeholder="Username" onChange ={(val) => this.userNameLogger(val.target.value)}/>

        <input type = "password" placeholder = "Password" onChange ={(val)=> this.passwordLogger(val.target.value)}/>
        <button onClick={this.loginClick}>Login</button>
      </div>
    )
  }
}

export default Login