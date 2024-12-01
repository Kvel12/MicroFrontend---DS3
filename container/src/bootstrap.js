// container/src/bootstrap.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

const mount = (el) => {
  const history = createMemoryHistory();

  ReactDOM.render(
    <App />,
    el
  );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

const el = document.querySelector('#root');
if (el) {
  mount(el);
}

export { mount };