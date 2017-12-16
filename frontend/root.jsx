import React from 'react';
import { Provider } from 'react-redux';
import LoginForm from './login_form';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <LoginForm/>
    </Provider>
  );
}



export default Root;
