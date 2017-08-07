import React, {Component} from 'react';
import '../css/HtmlStyle.css';

function Group(props) {
  var groupStyle = {};
  var imageStyle = {};
  console.log("Group image", props.image);
  if (props.indexed == 0) {
    groupStyle = {
      backgroundColor: "#eef2f2",
      height: "32px",
      width: "198px"
    }
    imageStyle = {
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
  } else {
    groupStyle = {
      backgroundColor: "#CCCCCC",
      height: "32px",
      width: "198px"
    }
    imageStyle = {
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
  return (
    <div style={groupStyle} id="myGroupId0" onClick={props.onClick}>
      <div style={imageStyle}></div>
      {/* <img src = {props.image}/> */}
      <div id="profileDiv">
        <p >{props.value}</p>
      </div>
    </div>
  );
}

class GroupsBar extends React.Component {

  renderGroup(i) {
    var indexReturn = 1;
    if (i != this.props.groupIndex) {
      indexReturn = 0;
    }
    // console.log("indexReturn", indexReturn);
    return (
      <Group
      indexed={indexReturn}
      value={this.props.groups[i]}
      image={this.props.groupsImage[i]}
      onClick={() => this.props.onClick(i)}/>
    );
  }

  render() {

    return (
      <div>
        <div id="findSideTopBar">
          <p>Find</p>

        </div>
        {this.renderGroup(0)}
        {this.renderGroup(1)}
        {this.renderGroup(2)}
        {this.renderGroup(3)}
        {this.renderGroup(4)}
        {this.renderGroup(5)}
        {this.renderGroup(6)}


      </div>



    );
  }

}

export default GroupsBar;
