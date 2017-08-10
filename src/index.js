import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Router, Route } from 'react-router';

import './css/HtmlStyle.css';
import Background from './Components/Background';
import Alternate from './Components/Alternate';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';



// class Background extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//
//     return (
//       <div id = "bodyBackground"></div>
//
//     )
//   }



// }
// ========================================


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

document.getElementById('root')
);
