import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import { StyleSheet, css } from 'aphrodite/no-important';

import myInfo from '../Info/PersonalInfo.js';
import MobileGroup from './MobileGroup'


class MobileDisplay extends Component {
constructor(props) {
  super(props) ;
  this.state = {
    mobile: 0,
  }
}



  render() {


    return(

      <MobileGroup
        onClick = { i => this.props.onClick(i)}
      />


    );


  }




}


export default MobileDisplay;
