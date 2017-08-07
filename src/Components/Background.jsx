import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import FinderDisplay from './FinderDisplay';

class Background extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div id = "bodyBackground">
        <FinderDisplay />
      </div>
    )
  }



}

export default Background;
