import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import FinderDisplay from './FinderDisplay';
import Alternate from './Alternate';
// import $ from 'jquery';
import Draggable from 'react-draggable'; // The default
import FooterDisplay from './FooterDisplay';
import MobileDisplay from './MobileDisplay'
import KeyHandler, {KEYPRESS} from 'react-key-handler';






class Background extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      display : 0,
      mobileDisplay: 0,
      width: window.innerWidth,
      height:window.innerHeight,
    }

    this.alternateDisplay = this.alternateDisplay.bind(this);
    // this.detectmob = this.detectmob.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }

  componentDidMount() {
    window.scrollTo(0,0);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleScroll);
  }



  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }


  alternateDisplay() {
    if (this.state.display == 0) {
      this.setState({
        display: 1,
      });
    } else {
      this.setState({
        display: 0,
      });
    }

  }

  chooseDisplays() {
    console.log("display state", this.state.display);
    if (this.state.display == 0) {

      return(

        <div id = "bodyBackground">
          <FinderDisplay
            onClick={this.alternateDisplay}
            mobileDisplay = {this.mobileDisplay}
          />
          <FooterDisplay />

        </div>

      );
    } else {

      return(

        <div id = "bodyBackground">
          <Alternate
            key = {this.state.display}
            mobile = {0}
            onClick={this.alternateDisplay}
          />
        </div>

      );

    }
  }






  render() {
    if (this.state.width <=800 && this.state.display == 0) {


      return(
        <div id = "bodyBackground">
          <MobileDisplay
            onClick={this.alternateDisplay}
            mobileDisplay = {this.mobileDisplay}
          />
        </div>
      )
    } else if (this.state.display == 1 && this.state.width <=800) {
      return(
        <div id = "bodyBackground">
          <Alternate
            key = {this.state.display}
            mobile = {1}
            onClick={this.alternateDisplay}
          />
        </div>

      );
    }  else  {



      return (
        <div>

          {this.chooseDisplays()}
        </div>

      );
    }
  }




}

export default Background;
