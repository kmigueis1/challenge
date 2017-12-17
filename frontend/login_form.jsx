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
    const currentUser = this.props.currentUser;
    let welcomeMessage;
    if (currentUser){
      welcomeMessage = (currentUser.Name === "") ?
      (`Welcome ${currentUser.Username}!, User Id: ${currentUser.Userid}`) :
      (`Welcome ${currentUser.Name} (${currentUser.Username})!, User Id: ${currentUser.Userid}`);
    }
    const errors = (currentUser && currentUser.Status === -1) ? (
      currentUser.Message
    ) : ("");
    const rendered = (currentUser && currentUser.Status === 1) ? (
      <div>{welcomeMessage}</div>
      ) : (
      <div className="login-form">
        <div className="logo"><img src="../app/assets/images/youvisit_logo.png"></img></div>
        <div className="name input">
          <input type="text" placeholder="Name (optional)" onChange={this.handleName} value={this.state.name}></input>
        </div>
        <div className="username input">
          <input type="text" placeholder="Username" onChange={this.handleUserName} value={this.state.username}></input>
          <div className="validation">{this.state.userNameValidation}</div>
        </div>
        <div className="password input">
          <input type="password" placeholder="Password" onChange={this.handlePassword} value={this.state.password} ></input>
          <div className="validation">{this.state.passwordValidation}</div>
        </div>
        <div>
          <div className="form-errors">{errors}</div>
          <button className="signup button" onClick={this.handleSignup}>Signup</button>
          <button className="login button" onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );

    return(
      <div>
        {rendered}
      </div>
    )
  }


}

export default LoginForm
