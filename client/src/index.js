import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mainpage from './Mainpage';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
setTimeout(() => {
  console.log("hi")
  var parentElement = document.getElementsByClassName('blog-post');
  for (let index = 0; index < parentElement.length; index++) {
    const childElements = parentElement[index];
    var parentRect = childElements.getBoundingClientRect();
    if (parentRect.top < window.innerHeight && parentRect.bottom >= 0) {
      childElements.classList.add('inmy-view');
    }
  }
}, 4000)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Mainpage />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
