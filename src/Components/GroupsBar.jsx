import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import { fadeIn } from 'react-animations';
import { fadeOut } from 'react-animations';

import { StyleSheet, css } from 'aphrodite/no-important';


function Group(props) {

  var imageStyle = {};
  if (props.indexed == 0) {

    imageStyle = {
      position: "absolute",

      float: "left",
      margin: "0",
      marginLeft: "15px",
      padding: "12px",
      maxWidth: "24",
      backgroundSize: "cover",
      opacity: "0.6",
      marginTop: "4px",
      backgroundImage:`url(${props.image})`,
    }
  } else {

    imageStyle = {
      zIndex: "2",
      position: "absolute",

      float: "left",
      margin: "0",
      marginLeft: "15px",
      padding: "12px",
      maxWidth: "24",
      backgroundSize: "cover",
      opacity: "0.9",
      marginTop: "4px",
      backgroundImage:`url(${props.image})`,
    }
  }

  const styles = StyleSheet.create({

    fadeIn: {
      animationName: fadeIn,
      animationDuration: '0.3s'
    }
  })
  if (props.indexed == 0) {
    return (

      <div className = "groupStyle2" style={{color: "#000000",}}  onClick={props.onClick}>
        <div style={imageStyle}></div>
        <div key = {props.groupIndex} className={css(styles.fadeIn)} >

          <div className = "groupStyle" style = {{backgroundColor: "", opacity: "1.0",}}></div>
        </div>
        {/* <img src = {props.image}/> */}
        <div id="profileDiv">
          <p >{props.value}</p>
        </div>
      </div>

    );
  } else {
    return (
      <div key = {props.groupIndex} className={css(styles.fadeIn)} >
        <div className = "groupStyle2"  onClick={props.onClick}>
          <div style={imageStyle}></div>
          <div >
            {/*  Normally the fadein animation goes above, but that causes issues with firefox*/}

            <div  className = "groupStyle" style = {{backgroundColor: "#CCCCCC", color: "#000000", opacity: "1.0"}}></div>
          </div>
          {/* <img src = {props.image}/> */}
          <div id="profileDiv">
            <p >{props.value}</p>
          </div>
        </div>
      </div>

    );
  }

}

class GroupsBar extends React.Component {

  componentDidUpdate() {


  }

  renderGroup(i) {
    var indexReturn = 0;
    if (i == this.props.groupIndex) {
      indexReturn = 1;
    }
    return (
      <Group
        groupIndex = {this.props.groupIndex}
        indexed={indexReturn}
        value={this.props.groups[i+1]}
        image={this.props.groupsImage[i]}
        onClick={() => this.props.onClick(i)}
        animate = {this.props.animate}
      />
    );
  }

  renderAllGroups() {
    var combinedGroups = []

    console.log("rendering groups", (this.props.groups).length);
    for (var i = 0; i < (this.props.groups).length-1; i++) {
      console.log("Group rendered", i);
      combinedGroups.push(this.renderGroup(i));


    }

    return(
      <div>
        {combinedGroups}
      </div>
    );
  }

  render() {

    // const styles = StyleSheet.create({
    //   fadeOut: {
    //     animationName: fadeOut,
    //     animationDuration: '0s'
    //   },
    //   bounce: {
    //     animationName: fadeIn,
    //     animationDuration: '1s'
    //   }
    // })


    return (
      <div >
        {/* <div id = "groupBar" className={css(styles.bounce)}> */}
        <div id="findSideTopBar">
          <p>Find</p>

        </div>
        {this.renderAllGroups()}
        {/* {this.renderGroup(0)}
        {this.renderGroup(1)}
        {this.renderGroup(2)}
        {this.renderGroup(3)}
        {this.renderGroup(4)}
        {this.renderGroup(5)}
        {this.renderGroup(6)} */}

      </div>



    );
  }

}

export default GroupsBar;
