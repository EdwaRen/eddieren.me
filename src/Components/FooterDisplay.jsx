import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/styleGraph.css';
import Draggable from 'react-draggable'; // The default


class FooterDisplay extends Component {
  render() {
    return(
      // <Draggable>
          <div id="footer">
            <div id="bottomText">
              <p>Source code is available <a target="_blank" href="https://github.com/EdwaRen/edwardren.me">here</a> <br />☕ Edward Ren 2017</p>
            </div>
          </div>
        // {/* </Draggable> */}
    );
  }
}


export default FooterDisplay;
