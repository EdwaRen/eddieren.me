import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import FinderDisplay from './FinderDisplay';
import Alternate from './Alternate';
import $ from 'jquery';
import Draggable from 'react-draggable'; // The default
import FooterDisplay from './FooterDisplay';




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
            onClick={this.alternateDisplay}
          />
        </div>

      );

    }
  }

  render() {



    return (
      <div>
        {this.chooseDisplays()}
      </div>

    );
  }

  componentDidMount() {

  }



}

export default Background;
