function groupClick(num) {
  resetFileColors();
  resetGroupFiles();

switch (num) {
  case 0:
    files = files0;
    break;
  case 1:
    files = files1;
    break;
  case 2:
    files = files2;
    break;
  case 3:
    files = files3;
    break;
  case 4:
    files = files4;
    break;
  case 5:
    files = files5;
    break;
  case 6:
    files = files6;
    break;
  default:
    console.log("Error: Selected Group is out of index range")

}
resetColors();
var selectedGroup = "myGroup" + num;
var selectedImage = "imagePlaceholder" + num;
document.getElementById(selectedImage).style.opacity = 0.9;
document.getElementById(selectedGroup).style.backgroundColor = "#CCCCCC";

  for (i = 0; i < files.length; i++) {
    var fileName = "filesP" + i;
    var imageName = "imagePlaceholderDocument" + i;
    document.getElementById(fileName).innerHTML = files[i][0];
    document.getElementById(imageName).style.backgroundImage = "url('images/Document.png')";
  }
}


function filesClick(myId, number) {
  if (number < files.length) {
    resetFileColors();
    document.getElementById(myId).style.backgroundColor = "#116CD6";
    document.getElementById(myId).style.color = "#FFFFFF";

    document.getElementById("fileTitle").innerHTML = files[number][0];
    document.getElementById("descImage").style.backgroundImage = files[number][1];
    if (files[number][1] == "") {
      document.getElementById("descImage").style.position = "absolute";
    } else {
      document.getElementById("descImage").style.position = "static";
    }
    console.log(files[number][1])
    console.log(document.getElementById("descImage").style.backgroundImage)


    document.getElementById("fileSubTitle").innerHTML = files[number][2];

    document.getElementById("fileDescription").innerHTML = files[number][3];
    document.getElementById("startDate").innerHTML = files[number][4];
    document.getElementById("untilDate").innerHTML = files[number][5];
    document.getElementById("startTitle").innerHTML = "Duration";
    document.getElementById("untilTitle").innerHTML = "Location";
    console.log("profile clicked");

    if (files[number][0] == "Coding Languages") {
      console.log("Hopefully your browser supports HTML5 charts");
      document.getElementById("chartEnclosure").style.opacity = "1.0";
      document.getElementById("chartEnclosure").style.position = "static";
    } else {
      document.getElementById("chartEnclosure").style.opacity = "0.0";
      document.getElementById("chartEnclosure").style.position = "absolute";
    }

  }
}
