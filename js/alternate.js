var div = document.createElement("div");
div.id = "fixedWidth";
div.style.width = "800px";
div.style.height = "90%";
div.style.background = "white";
div.style.opacity = "0.9";
div.style.color = "#333333";

div.style.position = "absolute";
div.style.top = "50%";
div.style.left = "50%";
div.style.transform = "translateX(-50%) translateY(-50%)";

div.style.overflowY = "scroll";
document.body.appendChild(div);

for (i = 0; i < groups.length; i++) {
  var divGrp = document.createElement("div");
  divGrp.id = "grpId" + i;
  divGrp.innerHTML = groups[i];
  // divGrp.style.marginLeft = "30px";
  divGrp.style.margin = "30px";

  // divGrp.style.marginTop = "10px";
  divGrp.style.textAlign = "left";
  divGrp.style.fontFamily = "RalewayBld, sans-serif";
  divGrp.style.fontSize = "30px";
  document.getElementById("fixedWidth").appendChild(divGrp);

  var tempFiles = [];

  switch (i) {
    case 0:
      tempFiles = files0;
      break;
    case 1:
      tempFiles = files1;
      break;
    case 2:
      tempFiles = files2;
      break;
    case 3:
      tempFiles = files3;
      break;
    case 4:
      tempFiles = files4;
      break;
    case 5:
      tempFiles = files5;
      break;
    case 6:
      tempFiles = files6;
      break;
    case 7:
      tempFiles = files7;
      break;
    case 8:
      tempFiles = files8;
      break;
    case 9:
      tempFiles = files9;
      break;

    default:
      console.log("groups length out of range");

  }

  for (j = 0; j < tempFiles.length; j++) {

    var divTitle = document.createElement("div");
    divTitle.id = "TitleId" + i+"_"+j;
    divTitle.innerHTML = tempFiles[j][0];
    divTitle.style.marginLeft = "10px";
    divTitle.style.marginTop = "10px";
    divTitle.style.textAlign = "left";
    divTitle.style.fontFamily = "RalewayReg, sans-serif";
    divTitle.style.fontSize = "25px";

    var divSubTitle = document.createElement("div");
    divSubTitle.id = "SubTitleId" + i+"_"+j;
    divSubTitle.innerHTML = tempFiles[j][2];
    divSubTitle.style.marginLeft = "10px";
    divSubTitle.style.marginTop = "2px";
    divSubTitle.style.textAlign = "left";
    divSubTitle.style.fontFamily = "RalewayRegIta, sans-serif";
    divSubTitle.style.fontSize = "18px";

    var divDesc = document.createElement("div");
    divDesc.id = "DescId" + i+"_"+j;
    divDesc.innerHTML = tempFiles[j][3];
    divDesc.style.marginLeft = "10px";
    divDesc.style.marginTop = "10px";
    divDesc.style.marginBottom = "40px";

    divDesc.style.textAlign = "left";
    divDesc.style.fontFamily = "RalewayReg, sans-serif";
    divDesc.style.fontSize = "15px";
    document.getElementById("grpId" + i).appendChild(divTitle);
    document.getElementById("grpId" + i).appendChild(divSubTitle);
    document.getElementById("grpId" + i).appendChild(divDesc);

    if (tempFiles[j].length > 7) {
      console.log("coding");

      var proficient = "";
      var fluent = "";
      var experienced = "";
      for (k = 7; k < tempFiles[j].length; k++) {
        console.log("coding2");

        if (tempFiles[j][k+1] >= 90) {
          proficient = proficient + tempFiles[j][k] + ", ";
          console.log("proficient", proficient);
        }
        else if (tempFiles[j][k+1] >= 70) {
          fluent = fluent + tempFiles[j][k] + ", ";
        }
        else {
          experienced = experienced + tempFiles[j][k] + ", ";
        }
        k++;
      }
      var divChart = document.createElement("div");
      divChart.id = "ChartId" + i+"_"+j;
      divChart.innerHTML = "Proficient: " + proficient.substring(0, proficient.length-2) + "<br ><br >Fluent: " +  fluent.substring(0, fluent.length-2) + "<br ><br >Experienced: " + experienced.substring(0, experienced.length-2);
      divChart.style.marginLeft = "10px";
      divChart.style.marginTop = "-30px";
      divChart.style.marginBottom = "40px";

      divChart.style.textAlign = "left";
      divChart.style.fontFamily = "RalewayReg, sans-serif";
      divChart.style.fontSize = "15px";
      document.getElementById("grpId" + i).appendChild(divChart);
    }





  }

}
