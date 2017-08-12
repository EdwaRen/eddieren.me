import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import { StyleSheet, css } from 'aphrodite';

class CloseButton extends Component {


  render() {
    return(
      <div>
        <div className={css(styles.closeIcon)} onClick={this.props.onClick} >
          <p className={css(styles.textStyle)} >x</p>
        </div>
      </div>

    );
  }
}

const styles = StyleSheet.create({
  closeIcon: {
    marginTop: "9px",
    marginLeft: "10px",
    width: "11px",
    height:"11px",
    backgroundColor:"#FC615D",
    borderRadius: "10px",
    position: "absolute",
    fontFamily: "RalewayReg",
    fontSize: "14px",
    // opacity: "3",
  },
  textStyle: {
    position:"absolute",
    marginLeft: "2.5px",
    marginTop:"-3.5px",
    cursor: "pointer",



  }
}
)





export default CloseButton
