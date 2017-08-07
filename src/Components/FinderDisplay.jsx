import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import GroupsBar from './GroupsBar';
import FilesBar from './FilesBar';
import DescBar from './DescBar';
import {Profile} from '../Info/DatabaseImage.jsx';




class FinderDisplay extends Component {
  constructor() {
    super();
    this.state = {
      groupIndex: 0,
      fileIndex: 0,
      groups: [ "1", "2", "3"],
      groupsImage: ["1", "2", "3"],
    };
  }

  groupClick(i) {

  }

  render() {
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
                groupIndex= {0}
                fileIndex= {0}
                groups ={[  "Profile", "Work", "Projects", "Network", "Languages", "Education", "Other"]}
                groupsImage = {[Profile, "url('../images/Experience.png')", "url('../images/Projects.png')", "url('../images/Network.png')", "url('../images/Languages.png')", "url('../images/Education.png')", "url('../images/Other.png')"]}
                onClick={i => this.groupClick(i)}
              />
            </div>
            <div className="finderFilesBar">
              {/* <FilesBar /> */}
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
