export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: user
  }
}

export const signup = (user) => (dispatch) => {
  return $.ajax({
    method: 'POST',
    url: '/users',
    data: {user: user}
  }).then((user) => {
    dispatch(receiveCurrentUser(user));
  });
}

export const login = (user) => (dispatch) => {
  return $.ajax({
    method: 'POST',
    url: '/session',
    data: {user: user}
  }).then((user) => {
    dispatch(receiveCurrentUser(user));
  })
}
