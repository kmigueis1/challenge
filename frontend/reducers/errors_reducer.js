import { RECEIVE_ERRORS } from '../actions/error_actions';

const ErrorsReducer = (state = {sessionErrors: null}, action) => {
  switch(action.type){
    case RECEIVE_ERRORS:
    Object.freeze(state);
    const returnedState = Object.assign({}, state);
    returnedState.sessionErrors = action.errors;
    return returnedState;
    default: return state;
  }
};

export default ErrorsReducer;
