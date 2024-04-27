import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// redux store and provider 
import store from './redux/store.jsx'
import { Provider } from "react-redux";

// notification
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <ToastContainer/>
        <App />
    </Provider>
  </React.StrictMode>,
)
