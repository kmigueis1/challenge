import React from 'react';
import { isAlphaNumeric } from './util/utils';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      userNameValidation: "",
      passwordValidation: ""
    }
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleUserName(e) {
    this.setState({username: e.target.value});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  handleValidation(){
    const username = this.state.username;
    const password = this.state.password;

    if(username === ""){
        this.setState({ userNameValidation: "*This is a required field for submission" });
    } else if(username.length < 4){
        this.setState({ userNameValidation: "Your username must have a minimum length of 4 characters" });
    } else if (!isAlphaNumeric(username)){
        this.setState({ userNameValidation: "Your username must only include letters and numbers" });
    } else {
        this.setState({ userNameValidation: "" });
    }

    if(password === ""){
      this.setState({ passwordValidation: "*This is a required field for submission" });
    } else if(password.length < 4){
      this.setState({ passwordValidation: "Your password must have a minimum length of 4 characters" });
    } else {
      this.setState({ passwordValidation: "" });
    }
  }

  handleSignup() {
    this.handleValidation();
  }

  handleLogin() {
    this.handleValidation();
  }


  render(){

    return(
      <div>
        <div>
          <label>User Name</label>
          <input type="text" onChange={this.handleUserName} value={this.state.username}></input>
          <div>{this.state.userNameValidation}</div>
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={this.handlePassword} value={this.state.password} ></input>
          <div>{this.state.passwordValidation}</div>
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
