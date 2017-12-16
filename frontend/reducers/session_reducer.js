import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const SessionReducer = (state = {currentUser: null}, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
    Object.freeze(state);
    const returnedState = Object.assign({}, state);
    returnedState.currentUser = action.currentUser;
    return returnedState;
    default: return state;
  }
};

export default SessionReducer;
