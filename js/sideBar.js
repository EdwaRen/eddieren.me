//
// Copyright (c) 2017 by Edward Ren. All Rights Reserved.
//




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
  // "selectedCurrent should now be -1"
  resetColors();
  var selectedGroup = "myGroup" + num;
  var selectedImage = "imagePlaceholder" + num;
  document.getElementById(selectedImage).style.opacity = 0.9;
  document.getElementById(selectedGroup).style.backgroundColor = "#CCCCCC";

  for (i = 0; i < files.length; i++) {
    var fileName = "filesP" + i;
    var imageName = "imagePlaceholderDocument" + i;
    document.getElementById(fileName).innerHTML = files[i][0];
    document.getElementById(imageName).style.backgroundImage = files[i][6];
  }
  document.getElementById("myFiles0").click();

}

function filesClick(myId, number) {


  for (i = 0; i < 10; i++) { //This for loop prevents a glitch where rapidly changing files causes unselected myFiles div to remain blue
    if (i != number) {

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
    document.getElementById(myId).style.color = "#EEEEEE";

    document.getElementById("fileTitle").innerHTML = files[number][0];
    document.getElementById("descImage").style.backgroundImage = files[number][1];
    if (files[number][1] == "") {
      document.getElementById("descImage").style.position = "absolute";
    } else {
      document.getElementById("descImage").style.position = "static";
    }

    var str0 = "Recycle Can";
    var myUrl0 = str0.link("https://github.com/EdwaRen/Recycle_Can_iOS") ;
    var str1 = "Morsecret";
    var myUrl1 = str1.link("https://github.com/EdwaRen/Morsecret") ;
    var str2 = "Team Goals";
    var myUrl2 = str2.link("https://github.com/EdwaRen/Team_Goals") ;

    if (files[0][0] == "Recycle Can" ) {

      if (number == 0) {
        document.getElementById("fileTitle").innerHTML = myUrl0;
      } else if (number == 1) {
        document.getElementById("fileTitle").innerHTML = myUrl1;
      } else if (number == 2) {
        document.getElementById("fileTitle").innerHTML = myUrl2;
      }

    }


    document.getElementById("fileSubTitle").innerHTML = files[number][2];

    document.getElementById("fileDescription").innerHTML = files[number][3];
    document.getElementById("startDate").innerHTML = files[number][4];
    document.getElementById("untilDate").innerHTML = files[number][5];
    document.getElementById("startTitle").innerHTML = "Duration";
    document.getElementById("untilTitle").innerHTML = "Location";

    if (files[number][0] == "Coding Languages") {
      //"Hopefully your browser supports HTML5 charts";
      document.getElementById("chartEnclosure").style.opacity = "1.0";
      document.getElementById("chartEnclosure").style.position = "static";
    } else {
      document.getElementById("chartEnclosure").style.opacity = "0.0";
      document.getElementById("chartEnclosure").style.position = "absolute";
    }

  }
}
document.onkeydown = checkKey;

var typedString = "";

function checkKey(e) {
  typedString+= e.keyCode;

  e = e || window.event;

  if (e.keyCode == '38') {
    //Up arrow pressed
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
// Eastereggs, please ignore
  if (typedString.substr(typedString.length - 22) == "7376798669677970706969") {
    console.log("Wow, I love coffee too!");
    window.location.href = 'http://www.letsgoletsgo.gq';
  } else if (typedString.substr(typedString.length-28) == "7376798669826967896776737871") {
    console.log("Wow, I love recycling too!");
    window.location.href = 'http://www.recyclecan.ca';
  } else if (typedString.substr(typedString.length-28) == "7376798669787371728467798269") {
    console.log("Wow, I love nightcore too!");
    window.location.href = 'https://www.youtube.com/watch?v=cvaIgq5j2Q8&list=RDcvaIgq5j2Q8#t=0';
  }

}
