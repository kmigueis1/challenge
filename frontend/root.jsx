import React from 'react';
import { Provider } from 'react-redux';
import LoginFormContainer from './login_form_container';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <LoginFormContainer />
    </Provider>
  );
}



export default Root;
