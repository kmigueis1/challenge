import React from 'react';
import { isAlphaNumeric } from './util/utils';

class LoginForm extends React.Component{
  constructor(props){
    super(props);

    //a react class component is chosen as opposed to a functional Component
    //since a form will require storing of state for the submission of data
    this.state = {
      username: "",
      password: "",
      name: "",
      userNameValidation: "",
      passwordValidation: ""
    }
    //need to store all input field values in the state so they can dynamically
    //update as the user types in the fields and the current state ( all field information)
    // is accessible for submission and can be posted to the backend API

    //validations are also stored in state so validation messages can be rendered on the form when needed

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

    //all validations for the username and password are done below. This function
    //returns true if both the username and password are valid entries based on length
    // and if username is alphanumeric only. It returns false otherwise.

    //the logic is organized in an if-else structure so only one the most relevant validation
    // message is shown at a time.

    if(username === ""){
        this.setState({ userNameValidation: "*This is a required field for submission" });
    } else if( username.length < 4 ){
        this.setState({ userNameValidation: "Your username must have a minimum length of 4 characters" });

    } else if ( username.length > 20 ){
        this.setState({ userNameValidation: "Your username cannot have a length greater than 20 characters" });
    } else if ( !isAlphaNumeric(username) ){
      // I pulled the logic for the username's AlphaNumeric check into a separate
      //util for organizational purposes and cleaner code. isAlphaNumeric is also a
      //convenient method that can be used in the future for other parts of an application
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
    //validation logic is pulled into its own method handleValidation since it needs to be reused for both
    //signup and login handlers.
    this.props.resetCurrentUser();
    //I reset the currentUser so the errors from the API are no longer rendered when the user tries
    //clicking one of the submission buttons again - only the relevant validation messages will render.
    if(this.handleValidation()){
      this.props.signup({name: this.state.name, user_name: this.state.username, password: this.state.password});
    }

    //signup and login are only executed if the username and password pass all validations

    //signup and login functions are sent to the component as a prop from its container component which is
    //connected to the redux store


  }

  handleLogin() {
    this.props.resetCurrentUser();
    if(this.handleValidation()){
      this.props.login({name: this.state.name, user_name: this.state.username, password: this.state.password});
    }
  }


  render(){
    const currentUser = this.props.currentUser;
    let welcomeMessage;
    if (currentUser){
      welcomeMessage = (currentUser.Name === "") ?
      (`Welcome ${currentUser.Username}! User Id: ${currentUser.Userid}`) :
      (`Welcome ${currentUser.Name} (${currentUser.Username})! User Id: ${currentUser.Userid}`);
      //the type of welcome message is determined here depending if the user's name has been specified
      //since it is an optional field and can be persisted to the database as an empty string.
    }
    const errors = (currentUser && currentUser.Status === -1) ? (
      currentUser.Message
      //if the status returned from the API is negative -1, errors will be assigned to the error message
      //sent in the JSON. Otherwise it will be an empty string and won't be visible on the form.
    ) : ("");


      //considering the size of this excercise, the component will conditionally render the welcome message
      //when logged in instead of the form, which occurs if the currentUser sent in the props is not null and the
      //status sent from the API was successful (status is 1).
    const rendered = (currentUser && currentUser.Status === 1) ? (
      <div className="welcome-container">
        <div className="logo welcome-logo"><img src="https://raw.githubusercontent.com/kmigueis1/challenge/master/app/assets/images/youvisit_logo.png"></img></div>
        <div className="welcome">{welcomeMessage}</div>
      </div>
      ) : (
      <div className="login-form">
        <div className="logo"><img src="https://raw.githubusercontent.com/kmigueis1/challenge/master/app/assets/images/youvisit_logo.png"></img></div>
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
          <div className="form-errors validation">{errors}</div>
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
