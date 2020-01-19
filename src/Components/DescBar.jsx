import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/styleGraph.css';
import '../css/styleGraph.scss';




function renderBar(chart, i) {
  //Renders a single bar in a chart.
  // As a reminder, the chart variable goes like [Javascript, 90, React, 90, C++, 80]
  var classNameStr = "percentage percentage-" + (chart[i+1]);
  return(
    <div>
      <dd className= {classNameStr} ><span className="text" >{chart[i]}</span></dd>

    </div>
  );
}

function createChart(chart) {


  var chartEnclose = [];
  if (chart != "0") {

    for (var i = 0; i < chart.length-1; i++) {
      // Gets each bar and label from renderBar()
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
    // display: "block",
    margin: "auto",
    height: "80px",

    width: "auto",
    marginTop: "20px",
    backgroundSize: "contain",
    backgroundRepeat:   "no-repeat",
    backgroundPosition: "center center",


    opacity: "1.0",
    backgroundImage: `url(${props.image})`,
    position:"static"
    /*background-color: #111111;*/
    /*background-image: url("images/Edward_ProfilePic.png");*/
  }

  // Creates the image in description container. No formatting support
  var imageDiv = <div></div>
  if (props.image != "") {
    imageDiv = <div  style={descImage}></div>
  }

  // Creates the title in description container which supports formatting
  var title = <p style = {{fontSize: "19px", textAlign: "center", paddingLeft: "15px", paddingRight: "15px", marginTop: ""}} dangerouslySetInnerHTML={{
    __html: props.title
  }} ></p>

  // Creates the main text in description container which supports formatting
  var description = <p id="fileDescription" dangerouslySetInnerHTML={{
    __html: props.text
  }}></p>

  // Creates the static duration text in description container. No formatting support
  var startTitle = <p></p>;
  if (props.duration != "" && props.duration != "N/A") {
    startTitle = <p id="startTitle">Duration</p>
  }

  // Creates the static location text in description container. No formatting support
  var locationTitle = <p></p>
  if (props.location != "" && props.location != "N/A") {
    locationTitle = <p id="untilTitle">Location</p>
  }

  // Creates the subtitle in description container which supports formatting. Has conditionning to trigger an alternate simplified 'basic' page.
  var subtitle = <h1></h1>
  if (props.subtitle == "alternate") {
    subtitle = <p id = "fileSubTitle" style = {{fontSize: "14px", fontFamily: "RalewayRegIta",color: "#0000EE", marginTop: "-17px", textAlign: "center"}}  ><u></u></p>
  } else {
    subtitle = <p id="fileSubTitle" style = {{fontSize: "14px", fontFamily: "RalewayRegIta", marginTop: "-17px", textAlign: "center"}} dangerouslySetInnerHTML={{
      __html: props.subtitle
    }}></p>
  }

  // Creates the duration date in description container. No formatting support
  var durationLbl;
  if (props.duration != "N/A") {
    durationLbl = <p id="startDate">{props.duration}</p>
  } else {
  }

  // Creates the location in description container. No formatting support
  var locationLbl;
  if (props.location != "N/A") {
    locationLbl = <p id="untilDate">{props.location}</p>
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
            {durationLbl}
            {locationLbl}

          </div>

        </div>
      </div>
    </div>
  );

}

class DescBar extends Component {

  renderDisplay() {
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
