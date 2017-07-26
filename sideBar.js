var selectedCurrent = -1;

function groupClick(num) {
  resetFileColors();
  resetGroupFiles();

  switch (num) {
    case 0:
      files = files0;
      selectedCurrent = -1;
      break;
    case 1:
      files = files1;
      selectedCurrent = -1;
      break;
    case 2:
      files = files2;
      selectedCurrent = -1;
      break;
    case 3:
      files = files3;
      selectedCurrent = -1;

      break;
    case 4:
      files = files4;
      selectedCurrent = -1;

      break;
    case 5:
      files = files5;
      selectedCurrent = -1;

      break;
    case 6:
      files = files6;
      selectedCurrent = -1;

      break;
    default:
      console.log("Error: Selected Group is out of index range")

  }
  console.log("selectedCurrent should now be -1");
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
  console.log("file clicked: ", number);


  for (i = 0; i < 5; i++) { //This for loop prevents a glitch where rapidly changing files causes unselected myFiles div to remain blue
    if (i != number) {
      console.log("file sad: ", number);

      var fileNameTemp = "myFiles" + i;
      $(document.getElementById(fileNameTemp)).clearQueue().stop();

      document.getElementById(fileNameTemp).backgroundColor = "#FFFFFF";
    }
  }


  if (number < files.length) {
    selectedCurrent = number;
    resetFileColors();
    var fileNameColorAnimte = "#" + myId;

    $(document).ready(function(){
      // $(document.getElementById(myId)).stop();
      // resetFileColors();

      $(document.getElementById(myId)).animate({backgroundColor : '#116CD6'}, 300);
    });
    // document.getElementById(myId).style.backgroundColor = "#116CD6";
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
document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '38') {
    console.log("38, ", selectedCurrent);
    if (selectedCurrent - 1 >= 0 && selectedCurrent != -1) {
      fadeDescription();
      var fileNameTemp = "myFiles" + (selectedCurrent - 1);
      filesClick(fileNameTemp, selectedCurrent - 1);
    }
  } else if (e.keyCode == '40') {
    if (selectedCurrent + 1 < files.length && selectedCurrent != -1) {
      fadeDescription();
      var fileNameTemp = "myFiles" + (selectedCurrent + 1);
      filesClick(fileNameTemp, selectedCurrent + 1);
    }
    // down arrow
  }

}
