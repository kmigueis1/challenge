import React from 'react';
import { isAlphaNumeric } from './util/utils';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      validation: ""
    }
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUserName(e) {
    this.setState({username: e.target.value});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }



  handleSignup() {
    const username = this.state.username;
    const password = this.state.password;
    if(username.length < 4){
      
    } else if (!isAlphaNumeric(username)){
      this.setState({validation: "Your username must only include letters and numbers"})
    }
  }

  handleLogin() {

  }


  render(){

    return(
      <div>
        <div>
          <label>User Name</label>
          <input type="text" onChange={this.handleUserName} value={this.state.username}></input>
          <div>{this.state.validation}</div>
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={this.handlePassword} value={this.state.password} ></input>
        </div>
        <div>
          <button onClick={this.handleSignup}>Signup</button>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    )
  }


}

export default LoginForm
