import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import { Link } from 'react-router-dom'

import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite/no-important';

import '../css/HtmlStyle.css';

function Files(props) {

  var fileStyle = {};
  if (props.indexed == 0) {
    fileStyle = {
      height: "36px",
      width: "180px",
      color: "#333333",
      backgroundColor: "#FFFFFF",

    }
  } else {
    fileStyle = {
      height: "36px",
      width: "180px",
      color: "#FFFFFF",
      backgroundColor: "#116CD6",
    }
  }
  const imageStyle = {
    float: "left",
    margin: "0",
    marginLeft: "6px",
    padding: "12px",
    maxWidth: "30px",
    /*height: 30px;*/
    opacity: "1.0",
    marginTop: "6px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${props.image})`
  }
  return (
    <CSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
      <div style={fileStyle} onClick={props.onClick} key = {"1"}>
        <div style={imageStyle} ></div>
        <div id="filesDiv">
          <p>{props.text}</p>
        </div>
      </div>
    </CSSTransitionGroup>

  );


}

class FilesBar extends Component {

  renderFile(i) {
    var indexReturn = 0;
    if (i == this.props.fileIndex) {
      indexReturn = 1;
    }
    return (
      <Files
        indexed={indexReturn}
        text={this.props.filesText[i][0]}
        image={this.props.filesImage[i]}
        onClick= {() => this.props.onClick(i)}
      />);
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

      return (
        <div>
          {/* {this.renderFile(0)} */}

          {/* {this.renderFile(1)} */}
          {this.numberFilesToRender()}
        </div>
      );
    }

  }

  export default FilesBar;
