import React from 'react';
import ReactDOM from 'react-dom';
/*import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import configureStore from "./store";
import './index.css';*/
import App from './App';
//import ShowRoom from "./ShowRoom";
/*import * as serviceWorker from './serviceWorker';
const appState={items:{1:{id:1,quantity:5,price:30,max_amount:5,cartAmount:0},2:{id:2,quantity:4,price:20,max_amount:4,cartAmount:0},
    3:{id:3,quantity:3,price:50,max_amount:3,cartAmount:0},4:{id:4,quantity:7,price:100,max_amount:7,cartAmount:0}},itemsInCart:{},wholePrice:0};
*/
ReactDOM.render(<App  />, document.getElementById('root'));
/*ReactDOM.render(
  <Provider store={configureStore(appState)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();*/
