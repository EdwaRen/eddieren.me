import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import FinderDisplay from './FinderDisplay';
import Alternate from './Alternate';
// import $ from 'jquery';
import Draggable from 'react-draggable'; // The default
import FooterDisplay from './FooterDisplay';
import MobileDisplay from './MobileDisplay'
import KeyHandler, {KEYPRESS} from 'react-key-handler';



function detectmob() {
  //Detects if user is on mobile
  if(window.innerWidth <= 600 && window.innerHeight <= 800) {
    return true;
  } else {
    return false;
  }
}


class Background extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      display : 0,
    }
    this.alternateDisplay = this.alternateDisplay.bind(this);

  }

  alternateDisplay() {
    console.log("Alternate Display clicked");
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


    if (detectmob()) {
      console.log("Displaying mobile version")
      if (this.state.display == 0) {


        return(
          <div id = "bodyBackground">
            <MobileDisplay
              onClick={this.alternateDisplay}
            />
          </div>
        )
      } else if (this.state.display == 1) {
        return(
          <div id = "bodyBackground">
            <Alternate
              key = {this.state.display}
              mobile = {1}
              onClick={this.alternateDisplay}
            />
          </div>

        );
      }

    } else  {
      console.log("Displaying desktop version")



      return (
        <div>

          {this.chooseDisplays()}
        </div>

      );
    }
  }

  componentDidMount() {

  }



}

export default Background;
