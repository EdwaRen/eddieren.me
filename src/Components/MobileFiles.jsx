import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/mobileStyle.css';


import { StyleSheet, css } from 'aphrodite/no-important';

import myInfo from '../Info/PersonalInfo.js';

function Files(props) {
  console.log("my files");
  return (
    <div id = "mobWrapper">
      <div id = "mobFile" onClick={props.onClick}>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

class MobileFiles extends Component {
  //Lots of the code here are copied from Filesbar.jsx


  renderFile(i) {
    var indexReturn = 0;
    if (i == this.props.fileIndex) {
      indexReturn = 1;
    }
    return (
      <Files
        indexed={indexReturn}
        text={this.props.filesText[i][0]}
        // image={this.props.filesImage[i]}
        onClick= {() => this.props.onClick(i)}
      />
    );
  }
  numberFilesToRender() {
    var combinedRenders =[];
    for (var i = 0; i < (this.props.filesText).length; i++) {
      combinedRenders.push(this.renderFile(i));

    }
    return (
      <div>
        {combinedRenders}
      </div>
    );


  }


  render() {
    console.log("filestext");

    return(

      <div>
  
        {this.numberFilesToRender()}
      </div>
    );
  }

}

export default MobileFiles;
