import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import { StyleSheet, css } from 'aphrodite';
import FinderIcon from '../images/finderReturnIcon.png';
import TrashIconEmpty from '../images/trashIconEmpty.png';

function Icon1(props) {

  return (
    <div>

      <div className="Icon1" style ={{backgroundImage: `url(${FinderIcon})`}} onClick={props.onClick}> </div>
    </div>
  );
}

function Icon2(props) {
  if (props.trash == 0) {
    return(
      <div className="Icon1" style ={{backgroundImage: `url(${TrashIconEmpty})`}} onClick={props.onClick}> </div>

    );

  } else {
    return(

      <div className="Icon1" style ={{backgroundImage: `url(${FinderIcon})`}} onClick={props.onClick}> </div>

  );

}
}

function IconBackground(props) {
  return (
    <div className={css(styles.backgroundIcon)}>

    </div>
  );
}

class IconBar extends Component {

  render() {
    return(
      <div>
        <IconBackground

        />
        <Icon1
          onClick= {() => this.props.onClick(1)}
        />
        <Icon2
          onClick= {() => this.props.onClick(2)}

          trash = {this.props.trash}
        />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  backgroundIcon: {
    marginTop: "-3px",
    marginLeft: "-10px",

    zIndex: "-1",
    position: "absolute",
    width: "120px",
    height: "56px",
    backgroundColor: "#444444",
    opacity: "0.85",
    borderRadius: "5px",

    // ':hover': {
    //   marginTop: "-10px",
    //   marginLeft: "-20px",
    //
    //   zIndex: "-1",
    //   position: "absolute",
    //   width: "200px",
    //   height: "100px",
    //   backgroundColor: "#FFFFFF",
    //   opacity: "0.85",
    //   borderRadius: "10px",
    // }

  },

  // Icon1: {
  //   margin: "5px",
  //   height: '40px',
  //   width: '40px',
  //   float: 'left',
  //   backgroundImage: `url(${FinderIcon})`,
  //   backgroundSize: "cover",
  //   ':hover': {
  //     WebkitFilter: "dropShadow(0 0 10px rgba(255,255,255,.9))",
  //         MozFilter: "dropShadow(0 0px 10px  rgba(255,255,255,.9))",
  //         MsFilter: "dropShadow(0 0px 10px  rgba(255,255,255,.9))",
  //         OFilter: "dropShadow(0 0px 10px  rgba(255,255,255,.9))",
  //         Filter: "dropShadow(0 0px 10px  rgba(255,255,255,.9))",
  //   }
  // },

  Icon2Empty: {
    margin: "5px",
    height: '40px',
    width: '40px',
    float: 'left',
    backgroundImage: `url(${TrashIconEmpty})`,
    backgroundSize: "cover",
  },

  IconHighlight: {
    position: "absolute",
    height: '50px',
    width: '50px',
    ':hover': {
      // zIndex: "-1",
      // backgroundColor:"#CCCCCC",
    }

  },
  hover2: {

    // ':hover .backIcons': {
    //
    //     backgroundColor: 'red'
    // }
  },
})

export default IconBar
