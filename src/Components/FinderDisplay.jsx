import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/styleGraph.css';

// import FadeIn from 'react-fade-in';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Fade  from 'react-fade'
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable'; // The default




// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



import GroupsBar from './GroupsBar';
import FilesBar from './FilesBar';
import DescBar from './DescBar';

import Profile from '../images/Profile.png';
import Experience from '../images/Experience.png';
import Projects from '../images/Projects.png';
import Network from '../images/Network.png';
import Languages from '../images/Languages.png';
import Education from '../images/Education.png';
import Other from '../images/Other.png';

import Document from '../images/Document.png';
import Coding from '../images/coding.png';
import ProjectsIcon from '../images/ProjectsIcon2.png';
import LinkedIn from '../images/Network/linkedin2.png';
import GitHub from '../images/Network/github2.png';
import Facebook from '../images/Network/facebook2.png';
import Email from '../images/Network/email2.png';
import HTMLCoding from '../images/html-coding.png';
import Chat from '../images/chat.png';
import College from '../images/college.png';
import School from '../images/open-book.png';

import ProfilePic from '../images/Edward_ProfilePic.png';

import myInfo from '../Info/PersonalInfo.js';

var infoIconImages = [
  [Document, Document], //Profile
  [Coding, Coding],  //Experience
  [ProjectsIcon, ProjectsIcon, ProjectsIcon],   //Projects
  [LinkedIn, GitHub, Facebook, Email], //Network
  [HTMLCoding, Chat], //Languages
  [College, School], //Education
  [Document, Document, Document, Document, Document], //Other
]

var infoDescImages = [
  [ProfilePic, ""], //Profile
  ["", ""], //Experience
  ["", "", ""], //Projects
  [LinkedIn, GitHub, Facebook, Email], //Network
  ["", ""], //Languages
  ["", ""], //Education
  ["", "", "", "", ""], //Other
]








class FinderDisplay extends Component {
  constructor() {
    super();
    this.state = {
      groupIndex: 0,
      fileIndex: 0,

    };
  }

  groupClick(i) {
    // document.getElementById("myGroupId0").children[0].className += " load";


    this.setState({
      groupIndex: i,
      fileIndex: 0,
    })
  }
  fileClick(i) {
    console.log("File clicked");
    this.setState({
      fileIndex: i,
    })
  }

  render() {
    // console.log("filesImage", infoImages[0]);
    return(
      <Draggable>

        {/* <div id="containment-wrapper"> */}

        <div id="backShadow" className="draggable">
          <div className="bothWindows">
            <div className="shadowWindow"></div>
            <div className="finderTopBar">
              <div className="headerDisplay">
                <div className="finderTopBarIcon"></div>
                <div className="finderTopBarText">
                  <p id="finderTopBarTextP">Edward Ren</p>
                </div>
              </div>

            </div>
            <div className="bottomElemeents">

              <div className="finderSideBar">
                <div className = "finderSideBarImage">
                  <div id="findSideTopBar">
                    <p>Find</p>

                  </div>
                </div>

                {/* <Fade> */}
                <GroupsBar
                  groupIndex= {this.state.groupIndex}
                  fileIndex= {this.state.fileIndex}
                  groups ={[  "Profile", "Work", "Projects", "Network", "Languages", "Education", "Other"]}
                  groupsImage = {[Profile, Experience, Projects, Network, Languages, Education, Other]}
                  onClick={i => this.groupClick(i)}
                />

                {/* </Fade> */}

              </div>
              {/* <Fade> */}
              <div className="finderFilesBar" key = "1">
                <FilesBar
                  fileIndex = {this.state.fileIndex}
                  filesText = {myInfo.data[this.state.groupIndex]}
                  filesImage = {infoIconImages[this.state.groupIndex]}
                  onClick = {i => this.fileClick(i)}
                />
              </div>
              {/* </Fade> */}
              <div className="finderDescriptionBar">
                <DescBar
                  groupIndex = {this.state.groupIndex}
                  fileIndex = {this.state.fileIndex}
                  content = {myInfo.data[this.state.groupIndex][this.state.fileIndex]}
                  contentImages = {infoDescImages[this.state.groupIndex][this.state.fileIndex]}
                  onClick = { i => this.descClick[i]}
                />
              </div>
            </div>
          </div>
        </div>
      </Draggable>
      //  {/* </div> */}

    )
  }



}

window.onpopstate = function(event) {
  window.location.reload()
}


export default FinderDisplay;
