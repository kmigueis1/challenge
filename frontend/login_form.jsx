import React from 'react';
import { isAlphaNumeric } from './util/utils';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      userNameValidation: "",
      passwordValidation: ""
    }
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleUserName(e) {
    this.setState({username: e.target.value});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  handleName(e) {
    this.setState({name: e.target.value});
  }

  handleValidation(){
    const username = this.state.username;
    const password = this.state.password;
    let validUserName = false;
    let validPassword = false;

    if(username === ""){
        this.setState({ userNameValidation: "*This is a required field for submission" });
    } else if( username.length < 4 ){
        this.setState({ userNameValidation: "Your username must have a minimum length of 4 characters" });

    } else if ( username.length > 20 ){
        this.setState({ userNameValidation: "Your username cannot have a length greater than 20 characters" });
    } else if ( !isAlphaNumeric(username) ){
        this.setState({ userNameValidation: "Your username must only include letters and numbers" });
    } else {
        this.setState({ userNameValidation: "" });
        validUserName = true;
    }

    if(password === ""){
        this.setState({ passwordValidation: "*This is a required field for submission" });
    } else if( password.length < 4 ){
        this.setState({ passwordValidation: "Your password must have a minimum length of 4 characters" });
    } else if ( password.length > 20 ){
        this.setState({ passwordValidation: "Your password cannot have a length greater than 20 characters" });
    } else {
        this.setState({ passwordValidation: "" });
        validPassword = true;
    }

    return validUserName && validPassword;
  }

  handleSignup() {
    if(this.handleValidation()){
      this.props.signup({name: this.state.name, user_name: this.state.username, password: this.state.password});
    }
  }

  handleLogin() {
    if(this.handleValidation()){
      this.props.login({name: this.state.name, user_name: this.state.username, password: this.state.password});
    }
  }


  render(){

    return(
      <div>
        <div>
          <label>Name (optional)</label>
          <input type="text" onChange={this.handleName} value={this.state.name}></input>
        </div>
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
