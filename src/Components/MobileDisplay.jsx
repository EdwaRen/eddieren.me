import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import { StyleSheet, css } from 'aphrodite/no-important';

import myInfo from '../Info/PersonalInfo.js';
import MobileGroup from './MobileGroup'


class MobileDisplay extends Component {
  constructor() {
    super();
  }



  render() {


    return(

      <MobileGroup
        displayState = {0}
      />


    );


  }




}


export default MobileDisplay;
