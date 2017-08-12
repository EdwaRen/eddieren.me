import React, {Component} from 'react';
import '../css/HtmlStyle.css';
import '../css/styleGraph.css';
import '../css/styleGraph.scss';
import { Link } from 'react-router-dom'




function renderBar(chart, i) {
  console.log("Chart is rendering")
  var classNameStr = "percentage percentage-" + (chart[i+1]+10);
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
    subtitle = <h2 id = "fileSubTitle"><Link to='/alternate'>Normal Page Here </Link></h2>
  } else {
    subtitle = <h2 id="fileSubTitle" dangerouslySetInnerHTML={{
      __html: props.subtitle
    }}></h2>
  }


  return (
    <div id="separator">
      <div id="descReadmeTutorial">

        {imageDiv}

        <div id="descDescription">
          <h1 id="fileTitle">{props.title}</h1>
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
