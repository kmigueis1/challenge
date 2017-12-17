import { connect } from 'react-redux';
import { signup, login } from './actions/session_actions';
import { resetErrors } from './actions/error_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.sessionErrors
  };
}

//mapping the currentUser to props from the state will be required by the form to determine if the user is logged in.

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())
  }

}

//the signup or login actions here are both mapped to the same component. Which button is clicked on the form will
//determine which action is dispatched. Both functions are defined in session_actions file.

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
