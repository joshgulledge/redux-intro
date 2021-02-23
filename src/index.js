import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


// this is called a reducer
// returns the value of the state
const clickCount = function (state = 0, action) {
  return state;
};

const elementList = function (state = ['Hydrogen', 'Helium'], action) {
  return state;
};



// store === global state
const store = createStore( combineReducers( {
  clickCount: clickCount,
  elementList: elementList
  // ^^ the key will be the name inside of the store
}) );


ReactDOM.render(
  <React.StrictMode>
    {/* share the redux with our react app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
