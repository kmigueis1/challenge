import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
});

//a root div will need to be placed on the DOM (once it has loaded) before any React components
//can be rendered as children of the root node.
