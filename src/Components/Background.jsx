import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import FinderDisplay from './FinderDisplay';
import {Link} from 'react-router';
import $ from 'jquery'
import Draggable from 'react-draggable'; // The default




class Background extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <Draggable>

      <div id = "bodyBackground">
          <FinderDisplay />

      </div>
    </Draggable>

    )
  }

  componentDidMount() {

  }



}

export default Background;
