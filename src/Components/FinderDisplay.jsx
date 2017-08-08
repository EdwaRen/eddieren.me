import React, {Component} from 'react';
import '../css/HtmlStyle.css';

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

import yummy from '../Info/DatabaseImage.jsx';











class FinderDisplay extends Component {
  constructor() {
    super();
    this.state = {
      groupIndex: 0,
      fileIndex: 0,

    };
  }

  groupClick(i) {
    console.log("Group clicked");

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
    console.log("Yummy!", yummy);
    console.log("Profile", Other);
    return(
      <div id="backShadow" className="draggable">
        <div className="bothWindows">
          <div className="shadowWindow"></div>
          <div className="finderTopBar">
            <div className="headerDisplay">
              <div className="finderTopBarIcon"></div>
              <div className="finderTopBarText">
                <p id="finderTopBarTextP">Edward</p>
              </div>
            </div>

          </div>
          <div className="bottomElemeents">
            <div className="finderSideBar">
              <GroupsBar
                groupIndex= {this.state.groupIndex}
                fileIndex= {this.state.fileIndex}
                groups ={[  "Profile", "Work", "Projects", "Network", "Languages", "Education", "Other"]}
                groupsImage = {[Profile, Experience, Projects, Network, Languages, Education, Other]}
                onClick={i => this.groupClick(i)}
              />
            </div>
            <div className="finderFilesBar">
              <FilesBar
                fileIndex = {this.state.fileIndex}
                filesText = {["Readme", "About FinderMe"]}
                filesImage = {[Document, Document]}
                onClick = {i => this.fileClick(i)}
              />
            </div>
            <div className="finderDescriptionBar">
              {/* <DescBar /> */}
            </div>
          </div>
        </div>
      // </div>

    )
  }



}


export default FinderDisplay;
