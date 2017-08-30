import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/mobileStyle.css';


import { StyleSheet, css } from 'aphrodite/no-important';

import myInfo from '../Info/PersonalInfo.js'
import MobileFiles from './MobileFiles'

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
    };


  }

  mobileRender(i) {
    console.log("mobile clicked", i, this.state.displayState);

    return (
      <div>
        <MobileFiles
          filesText = {myInfo.info[i]}
          // filesImage = {}
        />
      </div>
    )
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
    } else {
        combinedGroups.push(this.mobileRender(this.state.groupState));
      
    }
    return(
      <div>
        {combinedGroups}
      </div>
    );
  }

  render() {


    return(
      <div id = "mobGroupWrap">
        <div id = "mobWrapper">
          <div id = "mobTopBar">
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
