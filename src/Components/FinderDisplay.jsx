


//Importing necessary elements for React
import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/styleGraph.css';
import myInfo from '../Info/PersonalInfo.js';

//Drag main finder screen around
import Draggable from 'react-draggable';

//Animations (most are unused);
import $ from 'jquery';
import { fadeIn } from 'react-animations';
import { fadeOut, fadeOutUp, zoomOut, slideOutLeft } from 'react-animations';
import { zoomOutDown} from 'react-animations';

//Aphrodite for CSS styling
import { StyleSheet, css } from 'aphrodite/no-important';

//React Components
import GroupsBar from './GroupsBar';
import FilesBar from './FilesBar';
import DescBar from './DescBar';
import IconBar from './IconBar';
import CloseButton from './CloseButton';

//Custom images done here
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

//Image icons to be displayed in left-most "groupsBar" (All images are displayed at once)
var groupIconImages = [
  Profile, Experience, Projects, Network, Languages, Education, Other,
]

//Image icons to be displayed in middle "filesBar" (Only 1 array of images are displayed at once)
var fileIconImages = [
  [Document, Document], //Profile
  [Coding, Coding],  //Experience
  [ProjectsIcon, ProjectsIcon, ProjectsIcon],   //Projects
  [LinkedIn, GitHub, Facebook, Email], //Network
  [HTMLCoding, Chat], //Languages
  [College, School], //Education
  [Document, Document, Document, Document, Document], //Other
]
//Images to be displayed in right-most "descBar" (Only 1 image is displayed at once)
var infoDescImages = [
  [ProfilePic, ""], //Profile
  ["", ""], //Experience
  ["", "", ""], //Projects
  [LinkedIn, GitHub, Facebook, Email], //Network
  ["", ""], //Languages
  ["", ""], //Education
  ["", "", "", "", ""], //Other
]
//Custom images ends

class FinderDisplay extends Component {



  constructor(props) {
    super(props);
    this.state = {
      groupIndex: 0,
      fileIndex: 0,
      animate: 0,
      trash: 0,
      reload: 0,
      visible: 0,
      size: 0,
    };
    // this.closeWindow = this.closeWindow.bind(this);

  }

  groupClick(i) {
    // document.getElementById("myGroupId0").children[0].className += " load";


    this.setState({
      groupIndex: i,
      fileIndex: 0,
      animate: this.state.animate+1,
    })
  }
  fileClick(i) {
    console.log("File clicked");
    this.setState({
      fileIndex: i,
      animate: this.state.animate+1,

    })
  }

  iconClick(i) {
    // console.log("File clicked");
    if (i == 1) {
      this.setState({
        reload: this.state.reload+1,
        visible: this.state.visible+1,
        trash : 0
      })




    } else if (i == 2) {
      if (this.state.trash == 1) {
        this.setState({
          trash: 0,
        })
      } else if (this.state.trash == 0) {
        this.setState({
          trash: 1,
        })
      }

    }

  }

  navClick(i) {
    if (i == 0 ){
      console.log("Close Window clicked");
      this.setState({
        trash: 1,
        reload: this.state.reload+1,

      })

    } else if (i == 1) {
      console.log("Minimize Window clicked");
      this.setState({
        trash: 1,
      })

    } else if (i == 2) {
      if (this.state.size == 0) {
        var html = document.getElementsByTagName('html')[0];
        html.style.cssText = "--main-background-color: red";
      }

    }

  }



  render() {
    var styles;

    if (this.state.trash == 1) {
      styles = StyleSheet.create({
        fadeIn: {
          animationName: fadeIn,
          animationDuration: '0.4s'

        },
        fadeOut: {
          // animationName: merge(fadeOutDown, zoomOutDown),
          animationName: fadeOutUp,

          animationDuration: '0.4s'

        }

      })
    } else {
      styles = StyleSheet.create({
        fadeIn: {
          animationName: fadeIn,
          animationDuration: '0.4s'

        },
        fadeOut: {
          animationName: fadeIn,
          animationDuration: '0.5s'

        }

      })
    }



    // try {
    //   console.log("Style textinput", this.myTextInput.style);
    //   // this.myTextInput.style.opacity = "0.5";
    // }
    // catch(err) {
    //   console.log( "style not working...", this.myTextInput);
    // }

    // console.log("filesImage", infoImages[0]);

    var opacityStyle;
    if (this.state.trash == 0) {
      opacityStyle = {
        opacity: "1.0",
      }
    } else {
      opacityStyle = {
        opacity: "0.0",
      }
    }



    return(
      <div>
        <div style = {opacityStyle} className={css(styles.fadeOut)} key = {this.state.visible}>

          <Draggable key = {this.state.reload} >

            {/* <div style = {opacityStyle} key = {this.state.trash}> */}
            {/* <div id="containment-wrapper"> */}

            <div id="backShadow" className="draggable">
              <div className="bothWindows">
                {/* <div className="shadowWindow"></div> */}
                <div className="finderTopBar">
                  <CloseButton
                    trash = {this.state.trash}
                    onClick={i => this.navClick(i)}
                  />
                  <div className="headerDisplay">

                    <div className="finderTopBarIcon"></div>
                    <div className="finderTopBarText">
                      <p id="finderTopBarTextP">Edward Ren</p>
                    </div>
                  </div>

                </div>
                <div className="bottomElemeents">

                  <div className="finderSideBar">


                    <div id = "groupBar" className={css(styles.fadeIn)} >

                      <GroupsBar

                        groupIndex= {this.state.groupIndex}
                        fileIndex= {this.state.fileIndex}
                        groups ={myInfo.groupNames}
                        groupsImage = {groupIconImages}
                        onClick={i => this.groupClick(i)}
                        animate = {this.state.animate}
                      />
                    </div>

                  </div>
                  {/* <Fade> */}
                  <div className="finderFilesBar" key = "1">


                    <FilesBar
                      fileIndex = {this.state.fileIndex}
                      filesText = {myInfo.info[this.state.groupIndex]}
                      filesImage = {fileIconImages[this.state.groupIndex]}
                      onClick = {i => this.fileClick(i)}
                      animate = {this.state.animate}
                    />
                  </div>
                  {/* </Fade> */}
                  <div className="finderDescriptionBar">
                    <div key = {this.state.animate} id = "groupBar" className={css(styles.fadeIn)} >
                      {//This fade in animation will only trigger if state within the enclosing div is changed, that is why we set the key to this.state.animate to trigger a re-render. Other functions ensure this.state.animate will always be unique and changed on click
                      }
                      <DescBar
                        groupIndex = {this.state.groupIndex}
                        fileIndex = {this.state.fileIndex}
                        content = {myInfo.info[this.state.groupIndex][this.state.fileIndex]}
                        contentImages = {infoDescImages[this.state.groupIndex][this.state.fileIndex]}
                        onClick = { i => this.props.onClick(i)}

                      />
                    </div>
                  </div>



                </div>
              </div>
            </div>

          </Draggable>
        </div>

        <div className = "backIcons">
          <IconBar
            trash = {this.state.trash}
            onClick= {i => this.iconClick(i)}

          />

        </div>
      </div>
      //  {/* </div> */}

    )
  }

  componentDidUpdate() {
    $(function() {
      // $( ".finderSideBar" ).load(window.location.href + " .finderSideBar" );
    });
  }

}



window.onpopstate = function(event) {
  window.location.reload()
}


export default FinderDisplay;
