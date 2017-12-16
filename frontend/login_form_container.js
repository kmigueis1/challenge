import { connect } from 'react-redux';
import { signup, login } from './actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    signedIn: !!state.session.currentUser
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
