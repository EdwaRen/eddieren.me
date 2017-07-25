function profileClick() {
  resetColors();
  document.getElementById("imagePlaceholderProfile").style.opacity = 0.9;
  document.getElementById("myProfile").style.backgroundColor = "#CCCCCC";
  files = files1;

  // document.getElementById("filesP0").innerHTML = "Hello World";
  // document.getElementById("imagePlaceholderDocument0").style.backgroundImage = "url('images/Document.png')";

  files = files1;
  for (i = 0; i < files.length; i++) {
    var fileName = "filesP" + i;
    var imageName = "imagePlaceholderDocument" + i;
    document.getElementById(fileName).innerHTML = files[i][0];
    document.getElementById(imageName).style.backgroundImage = "url('images/Document.png')";
  }
}

function experienceClick() {
  resetColors();
  document.getElementById("imagePlaceholderExperience").style.opacity = 0.9;
  document.getElementById("myExperience").style.backgroundColor = "#CCCCCC";

}

function projectsClick() {
  resetColors();
  document.getElementById("imagePlaceholderProjects").style.opacity = 0.9;
  document.getElementById("myProjects").style.backgroundColor = "#CCCCCC";
}

function networkClick() {
  resetColors();
  document.getElementById("imagePlaceholderNetwork").style.opacity = 0.9;
  document.getElementById("myNetwork").style.backgroundColor = "#CCCCCC";
}

function languagesClick() {
  resetColors();
  document.getElementById("imagePlaceholderLanguages").style.opacity = 0.9;
  document.getElementById("myLanguages").style.backgroundColor = "#CCCCCC";
}

function educationClick() {
  resetColors();
  document.getElementById("imagePlaceholderEducation").style.opacity = 0.9;
  document.getElementById("myEducation").style.backgroundColor = "#CCCCCC";
}

function otherClick() {
  resetColors();
  document.getElementById("imagePlaceholderOther").style.opacity = 0.9;
  document.getElementById("myOther").style.backgroundColor = "#CCCCCC";

}

function files0Click(myId) {
  document.getElementById(myId).style.backgroundColor = "#116CD6";
  document.getElementById(myId).style.color = "#FFFFFF";

  document.getElementById("fileTitle").innerHTML = files[0][0];
  document.getElementById("fileDescription").innerHTML = files1[0][1];
  document.getElementById("startDate").innerHTML = files[0][2];
  document.getElementById("untilDate").innerHTML = files[0][3];
  document.getElementById("descImage").style.backgroundImage = "url('images/Edward_ProfilePic.png')";
  document.getElementById("startTitle").innerHTML = "Start";
  document.getElementById("untilTitle").innerHTML = "Until";
  console.log("profile clicked");
}
