import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/styleGraph.css';


class FooterDisplay extends Component {
  render() {
    return(
      <div id="footer">
        <div id="bottomText">
          <p>Source code is availible <a href="https://github.com/EdwaRen/Me_Finder">here</a> <br />© Edward Ren 2017</p>
        </div>
      </div>

    );
  }
}


export default FooterDisplay;
