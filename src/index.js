import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode> 
);

(async () => {
  if('serviceWorker' in navigator){
    try{
      await navigator.serviceWorker.register('/service-worker.js')
      console.log("Service worker registered")
    }catch(error){
      console.error(error)
    }
  }
})()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
