import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import { Provider } from 'react-redux'
import { store } from './state-management/store'


function addItemToLocalStorage(state) {
  localStorage.setItem('dataCart', JSON.stringify(state.cart))
  localStorage.setItem('dataTotal', JSON.stringify(state.total))
};

const state = store.getState()
const dataCart = JSON.parse(localStorage.getItem('dataCart'));
const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
state.cart = dataCart
state.total = dataTotal

store.subscribe(() => {
  const state = store.getState()
  addItemToLocalStorage(state)
})



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

