import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import FinderDisplay from './FinderDisplay';
import {Link} from 'react-router';
import $ from 'jquery'
import Draggable from 'react-draggable'; // The default
import FooterDisplay from './FooterDisplay';




class Background extends Component {
  constructor() {
    super();
  }
  render() {

    return (

      <div id = "bodyBackground">
          <FinderDisplay />
          <FooterDisplay />

      </div>

    )
  }

  componentDidMount() {

  }



}

export default Background;
