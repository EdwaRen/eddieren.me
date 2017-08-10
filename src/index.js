import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Router, Route, browserHistory } from 'react-router';

import './css/HtmlStyle.css';
import Background from './Components/Background';
import Alternate from './Components/Alternate';


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
browserHistory.push("/index");


ReactDOM.render(
  <Router path = "/" history = {browserHistory}>
    <Route path = "/index" component = {Background} />
    <Route path = "/alternate" component = {Alternate} />

  </Router>,

document.getElementById('root')
);
