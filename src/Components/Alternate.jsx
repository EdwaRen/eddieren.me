import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import { Link } from 'react-router-dom'
import myInfo from '../Info/PersonalInfo.js';
import groupsInfo from '../Info/Groups.js';

// function refresh() {
//   window.location.reload();
//
// }

function RenderFiles() {
  let files = myInfo.data;
  let groups = groupsInfo.data;
  const groupStyle = {
    margin: "30px",
    marginLeft:"10px",
    marginTop: "40px",
    color:"#333333",

    textAlign: "left",
    fontFamily: "RalewayBld",
    fontSize: "30px",
  }

  const titleStyle = {
    marginLeft: "10px",
    marginTop: "10px",
    textAlign: "left",
    fontFamily: "RalewayReg",
    fontSize: "25px",
  }

  const subStyle = {
    marginLeft: "10px",
    marginTop: "2px",
    textAlign: "left",
    fontFamily: "RalewayRegIta",
    fontSize: "18px",
  }

  const descStyle = {
    marginLeft: "10px",
    marginTop: "10px",
    marginBottom: "40px",
    textAlign: "left",
    fontFamily: "RalewayReg",
    fontSize: "15px",
  }



  var content = [];

  for (var i = 0; i < files.length; i++) {
    content.push(
      <div style = {groupStyle} dangerouslySetInnerHTML={{
        __html: groups[i+1]
      }}></div>
    )
    // This creates the groups, the next nested for loops creates the files before the next group creation

    for (var j = 0; j < files[i].length; j++) {
      content.push(
        <div style = {titleStyle} dangerouslySetInnerHTML = {{
          __html: files[i][j][0]
        }}></div>
      )
      content.push(
        <div style = {subStyle} dangerouslySetInnerHTML = {{
          __html: files[i][j][2]
        }}></div>
      );
      content.push(
        <div style = {descStyle} dangerouslySetInnerHTML = {{
          __html: files[i][j][3]
        }}></div>
      );
      content.push(
        <div style = {descStyle} > Duration: {files[i][j][4]} | Location: {files[i][j][5]}</div>
      );
    }


  }

  content.push(<p><Link to='/' >Back</Link></p>)


  return (
    <div>
      {content}
    </div>

  );
}




class Alternate extends Component {
  constructor() {
    super();
  }
  render() {
    const altDisplay = {
      width: "800px",
      height: "90%",
      background: "white",
      opacity: "0.9",
      color: "#333333",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
      overflowY: "scroll"
    }
    const backId = {
      textAlign: "center",
      margin: "10px",
      fontFamily: "RalewayReg",
      fontSize: "20px",

    }

    console.log("Alternate!")

    return (
      <div style = {altDisplay}>
        <div style = {backId}>

          <RenderFiles

          />

        </div>
      </div>
    )
  }



}

export default Alternate;
