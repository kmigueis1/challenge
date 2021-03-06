export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
import { receiveErrors } from './error_actions';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: user
  }
}

//The above function is an action that returns an action object that can be dispatched to the redux store

export const signup = (user) => (dispatch) => {
  return $.ajax({
    method: 'POST',
    url: '/users',
    data: {user: user}
  }).then((user) => {
    if (user.Status === 1){
      console.log("success!")
    dispatch(receiveCurrentUser(user));
    } else {
      console.log("no success")
      dispatch(receiveErrors(user));
    }
  });
}


//Ajax requests using JQuery will be made when the signup or login actions (which are functions) are dispatched by the form.
//The backend API has been setup to accept these routes. This can be seen in the route.rb file and the
//users (signup) and sessions (login) controllers.

//The Ajax call returns a promise, and once it resolves (is sent back JSON from the backend API), it will
//dispatch another action (this time an object). I have used thunk middleware which distinguishes between
//function type actions and object actions. It will intercept function type dispatched actions from reaching
//the reducers. It will ignore object type actions and allow them to pass to all existing reducers so that it can
//update the redux state with its payload.


//When a user is received from the backend it will be dispatched as a payload to update the relevant slice of state
//in the store.

export const login = (user) => (dispatch) => {
  return $.ajax({
    method: 'POST',
    url: '/session',
    data: {user: user}
  }).then((user) => {

    //keeping separation of concerns in mind, I am updating the state with either a current user or an error
    //depending on whether a sucess or failure status was received and I am storing them as two different slices of state
    if (user.Status === 1){
    dispatch(receiveCurrentUser(user));
    }else {
      dispatch(receiveErrors(user));
    }
  })
}
