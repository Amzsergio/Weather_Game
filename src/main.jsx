import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from '../src/redux/store/index.js'
import '../src/main.css'


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <Provider store={store}>
    <React.Fragment>
        <App />
    </React.Fragment>
  </Provider>, 
)