import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/mobileStyle.css';

import LinkedIn from '../images/Network/linkedin2-min.png';
import GitHub from '../images/Network/github2-min.png';
import Facebook from '../images/Network/facebook2-min.png';
import Email from '../images/Network/email2-min.png';
import ProfilePic from '../images/Edward_ProfilePic.png';

import { StyleSheet, css } from 'aphrodite/no-important';

import myInfo from '../Info/PersonalInfo.js'
import MobileFiles from './MobileFiles'
import MobileDesc from './MobileDesc'



var infoDescImages = [
  [ProfilePic, ""], //Profile
  ["", ""], //Experience
  ["", "", ""], //Projects
  [LinkedIn, GitHub, Facebook, Email], //Network
  ["", ""], //Languages
  ["", ""], //Education
  ["", "", "", "", ""], //Other
]

function Group(props) {
  // console.log("myInfo", myInfo.groupNames);
  return (
    <div id = "mobWrapper">
      <div id = "mobGroup" onClick={props.onClick}>
        {props.name}
      </div>
    </div>
  )
}

function MobileFile(props) {
  console.log("mobile file rendered");
  return(
    <div><p>Hi There</p></div>
  );
}

class MobileGroup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayState:0,
      groupState: 0,
      fileState: 0,
    };


  }

  fileClick(i) {
    console.log("file clicked ", i);
    this.setState({
      displayState: 2,
      fileState: i,
    })
  }


  groupClick(i) {
    console.log("Group clicked", i, this.state.displayState);
    this.setState({
      displayState: 1,
      groupState: i,
    });
    // this.mobileRender(i);

    // this.setState({
    //   displayState: 1,
    // });


  }
  mobileRender(i) {
    console.log("mobile clicked", i, this.state.displayState);
    return (
      <div>
        <MobileFiles
          filesText = {myInfo.info[i]}
          onClick = {k => this.fileClick(k)}
        />
      </div>
    )
  }

  descriptionRender() {
    console.log("rendering desc", this.state.groupState, this.state.fileState);
    return(
      <div>
        <MobileDesc
          content = {myInfo.info[this.state.groupState][this.state.fileState]}
          contentImages = {infoDescImages[this.state.groupState][this.state.fileState]}
          onClick = { i => this.props.onClick(i)}
        />
      </div>
    );
  }

  renderGroup(i) {
    var groupNumber = i;
    return (
      <Group
        number = {i}
        name = {myInfo.groupNames[i+1]}
        onClick = {i => this.groupClick(groupNumber)}
      />
    );


  }

  renderAllGroups() {
    var combinedGroups = []

    // console.log("rendering groups", (myInfo.groupNames).length);
    if (this.state.displayState == 0) {

      for (var i = 0; i < (myInfo.groupNames).length-1; i++) {
        combinedGroups.push(this.renderGroup(i));
      }
    } else if (this.state.displayState == 1){
      combinedGroups.push(this.mobileRender(this.state.groupState));

    } else if (this.state.displayState == 2){
      combinedGroups.push(this.descriptionRender());

    }
    return(
      <div>
        {combinedGroups}
      </div>
    );
  }

  displayBack(i) {
    console.log("Arrow clicked", i);
    this.setState({
      displayState: this.state.displayState-1,
    })
  }

  arrowRender() {
    if (this.state.displayState !=0) {
      return (
        <div>
          {/* <button>Hi</button> */}
          <div
            id = "mobBackArrow"
            onClick = {i => this.displayBack(i)}
            //I don't know why onCLick = {this.displayBack(i)} does not work, but this workaround for some reason works perfectly
            >

          </div>
        </div>
      );
    }

  }

  render() {


    return(
      <div id = "mobGroupWrap">
        <div id = "mobWrapper">
          <div id = "mobTopBar">
            {this.arrowRender()}
            <p>{myInfo.groupNames[0]}</p>
          </div>
        </div>

        {this.renderAllGroups()}
        <div id = "mobWrapper">
          <div id = "mobBottomBar">
            <p>Source code available <a href = "https://github.com/EdwaRen/FinderMe">here</a><br/>Copyright 2017 Edward Ren</p>
          </div>

        </div>
      </div>
    );



  }



}


export default MobileGroup;
