import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import {Link} from 'react-router';


class Alternate extends Component {
  constructor() {
    super();
  }
  render() {
    console.log("ALternate!")

    return (
      <div id = "bodyBackground">
        Alternate
      </div>
    )
  }



}

export default Alternate;
