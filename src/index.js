import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// this is called a reducer
// returns the value of the state
const clickCount = function (state = 0, action) {

  if(action.type === 'INCREASE_CLICK_COUNT') return state + 1;

  if (action.type === 'DECREASE_CLICK_COUNT' ) return state - 1;

  return state;
};

const elementList = function (state = ['Hydrogen', 'Helium'], action) {

  switch(action.type) {
    case 'ADD_ELEMENT':
      // state.push(action.payload);
      // make a clone
      return [...state, action.payload];
  };

  return state;
};



// store === global state
const store = createStore( combineReducers( {
  clickCount: clickCount,
  elementList: elementList
  // ^^ the key will be the name inside of the store
}), 
// the redux logger
applyMiddleware(logger)
);


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
