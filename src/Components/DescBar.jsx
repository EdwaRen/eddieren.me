import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/styleGraph.css';
import '../css/styleGraph.scss';




function renderBar(chart, i) {
  console.log("Chart is rendering")
  var classNameStr = "percentage percentage-" + (chart[i+1]);
  console.log(classNameStr);
  return(
    <div>
      <dd className= {classNameStr} ><span className="text" >{chart[i]}</span></dd>

    </div>
  );
}

function createChart(chart) {
  console.log("Chart", chart);


  var chartEnclose = [];
  if (chart != "0") {
    for (var i = 0; i < chart.length-1; i++) {
      chartEnclose.push(renderBar(chart, i));
      i++
    }

    return (
      <div id="chartEnclosure">
        <dl id = "myChardId">
          <dt>{chart[chart.length-1]}</dt>

          {chartEnclose}

        </dl>
      </div>
    );
  }
}

function Desc(props) {

  const descImage = {
    /*position: static;*/
    display: "block",
    margin: "auto",
    width: "80px",
    height: "80px",
    marginTop: "20px",
    backgroundSize: "cover",

    opacity: "1.0",
    backgroundImage: `url(${props.image})`,
    position:"static"
    /*background-color: #111111;*/
    /*background-image: url("images/Edward_ProfilePic.png");*/
  }
  var imageDiv = <div></div>
  if (props.image != "") {
    imageDiv = <div  style={descImage}></div>
  }

  var title = <p style = {{fontSize: "19px", textAlign: "center", paddingLeft: "15px", paddingRight: "15px", marginTop: ""}} dangerouslySetInnerHTML={{
    __html: props.title
  }} ></p>

  var description = <p id="fileDescription" dangerouslySetInnerHTML={{
    __html: props.text
  }}></p>

  var startTitle = <p></p>;
  if (props.duration != "") {
    startTitle = <p id="startTitle">Duration</p>
  }

  var locationTitle = <p></p>
  if (props.location != "") {
    locationTitle = <p id="untilTitle">Location</p>
  }

  var subtitle = <h1></h1>
  if (props.subtitle == "alternate") {
    subtitle = <p id = "fileSubTitle" style = {{fontSize: "14px", fontFamily: "RalewayRegIta",color: "#0000EE", marginTop: "-17px", textAlign: "center"}} onClick={props.onClick}  ><u>Basic Page Here</u></p>
  } else {
    subtitle = <p id="fileSubTitle" style = {{fontSize: "14px", fontFamily: "RalewayRegIta", marginTop: "-17px", textAlign: "center"}} dangerouslySetInnerHTML={{
      __html: props.subtitle
    }}></p>
  }


  return (
    <div id="separator">
      <div id="descReadmeTutorial">

        {imageDiv}

        <div id="descDescription">
          {title}
          {subtitle}
          {/* <p id="fileDescription">{props.text}</p> */}
          {description}

        </div>
        {createChart(props.chart)}

        <div id="datesContainer">

          <div id="datesTitle">
            {startTitle}
            {locationTitle}
          </div>

          <div id="datesText">
            <p id="startDate">{props.duration}</p>
            <p id="untilDate">{props.location}</p>

          </div>

        </div>
      </div>
    </div>
  );

}

class DescBar extends Component {

  renderDisplay() {
    console.log("Image", this.props.contentImages);
    if ((this.props.content).length > 7) {
      return (
        <Desc
          title={this.props.content[0]}
          image={this.props.contentImages}
          subtitle={this.props.content[2]}
          text={this.props.content[3]}
          duration={this.props.content[4]}
          location={this.props.content[5]}
          chart={this.props.content[7]}
          onClick= {() => this.props.onClick(1)}

        />
      );
    } else {
      return (
        <Desc
          title={this.props.content[0]}
          image={this.props.contentImages}
          subtitle={this.props.content[2]}
          text={this.props.content[3]}
          duration={this.props.content[4]}
          location={this.props.content[5]}
          onClick= {() => this.props.onClick(1)}

          chart={"0"}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderDisplay()}
      </div>
    );
  }
}

export default DescBar;
