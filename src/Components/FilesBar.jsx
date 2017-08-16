import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite/no-important';

import '../css/HtmlStyle.css';

function Files(props) {

  var fileStyle = {};
  var fileStyle2 = {};

  if (props.indexed == 0) {
    fileStyle = {
      // zIndex:"0",
      position: "absolute",
      height: "36px",
      width: "var(--fileWidth)",
      color: "#333333",
      backgroundColor: "#FFFFFF",
    }
    fileStyle2 = {
      height: "36px",
      width: "var(--fileWidth)",
      color: "#333333",
    }
  } else {
    fileStyle = {
      // zIndex:"0",

      position: "absolute",
      height: "36px",
      width: "var(--fileWidth)",
      color: "#FFFFFF",
      backgroundColor: "#116CD6",
    }
    fileStyle2 = {
      height: "36px",
      width: "var(--fileWidth)",
      color: "#FFFFFF",
    }
  }

  const imageStyle = {
    zIndex:"200",
    position: "absolute",
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
  const styles = StyleSheet.create({

    fadeIn: {
      animationName: fadeIn,
      animationDuration: '0.3s'
    }
  })
  console.log("animate", props.animate);

  return (

      <div style = {fileStyle2} onClick={props.onClick} key = {"1"}>
        <div style={imageStyle} ></div>
        <div key = {props.animate} id = "groupBar" className={css(styles.fadeIn)} >

          <div style = {fileStyle}></div>
        </div>

        <div id="filesDiv">
          <p>{props.text}</p>
        </div>
      </div>

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
        animate = {this.props.animate}
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
