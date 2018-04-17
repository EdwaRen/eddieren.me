
module.exports = function ChartAnimateConfirm(props){
  // Handles the expand button
  var myInfo = require('../Info/PersonalInfo.js');
  var expandState = 0;
  var html = document.getElementsByTagName('html')[0];

  if (props.expandFull == 0) {
    //SPAGHETTI CODE!!!
    expandState = 1;
    //Transition animation when the expand navigation button is clicked (green circle in top left of finder display)
    document.getElementById("backShadow").style.webkitAnimationName = "totalTransform";
    document.getElementById("backShadow").style.webkitAnimationDuration = "0.15s";
    document.getElementsByClassName("bothWindows")[0].style.webkitAnimationName = "totalTransform";
    document.getElementsByClassName("bothWindows")[0].style.webkitAnimationDuration = "0.15s";

    document.getElementsByClassName("finderTopBar")[0].style.webkitAnimationName = "topTransform";
    document.getElementsByClassName("finderTopBar")[0].style.webkitAnimationDuration = "0.15s";

    document.getElementsByClassName("bottomElemeents")[0].style.webkitAnimationName = "bottomTransform";
    document.getElementsByClassName("bottomElemeents")[0].style.webkitAnimationDuration = "0.15s";

    document.getElementsByClassName("finderSideBar")[0].style.webkitAnimationName = "groupTransform";
    document.getElementsByClassName("finderSideBar")[0].style.webkitAnimationDuration = "0.15s";

    document.getElementsByClassName("finderFilesBar")[0].style.webkitAnimationName = "fileTransform";
    document.getElementsByClassName("finderFilesBar")[0].style.webkitAnimationDuration = "0.15s";

    document.getElementsByClassName("finderDescriptionBar")[0].style.webkitAnimationName = "descTransform";
    document.getElementsByClassName("finderDescriptionBar")[0].style.webkitAnimationDuration = "0.15s";

    //The code below transforms the chart. However, it crashes if there is a page without a chart so the conditional statement avoids this crash.
    if (myInfo.info[props.groupIndex][props.fileIndex].length > 7) {
      document.getElementsByTagName("dl")[0].style.webkitAnimationName = "chartTransform";
      document.getElementsByTagName("dl")[0].style.webkitAnimationDuration = "0.15s";
    }


    for (var i = 0; i < myInfo.info[props.groupIndex].length;i++) {
      document.getElementsByClassName("fileStyle")[i].style.webkitAnimationName = "fileStyleTransform";
      document.getElementsByClassName("fileStyle")[i].style.webkitAnimationDuration = "0.15s";
      document.getElementsByClassName("fileStyle2")[i].style.webkitAnimationName = "fileStyleTransform";
      document.getElementsByClassName("fileStyle2")[i].style.webkitAnimationDuration = "0.15s";
    }
    for (var i = 0; i < myInfo.info.length;i++) {
      document.getElementsByClassName("groupStyle")[i].style.webkitAnimationName = "groupStyleTransform";
      document.getElementsByClassName("groupStyle")[i].style.webkitAnimationDuration = "0.15s";
      document.getElementsByClassName("groupStyle2")[i].style.webkitAnimationName = "groupStyleTransform";
      document.getElementsByClassName("groupStyle2")[i].style.webkitAnimationDuration = "0.15s";
    }
    html.style.setProperty("--totalWidth", "75vw");
    html.style.setProperty("--totalHeight", "90vh");
    html.style.setProperty("--topWidth",  "75vw");
    html.style.setProperty("--topHeight", "10vh");
    html.style.setProperty("--groupWidth", "16vw");
    html.style.setProperty("--groupHeight", "75vh");
    html.style.setProperty("--fileWidth", "23vw");
    html.style.setProperty("--fileHeight", "75vh");
    html.style.setProperty("--descWidth", "36vw");
    html.style.setProperty("--descHeight", "75vh");
    html.style.setProperty("--chartWidth", "24vw");
    setTimeout(this.resetAnimation, 150);

  } else {
    //EVEN MORE SPAGHETTI CODE!!!!
    html.style.setProperty("--totalWidth", "600px");
    html.style.setProperty("--totalHeight", "450px");
    html.style.setProperty("--topWidth", "600px");
    html.style.setProperty("--topHeight", "70px");
    html.style.setProperty("--groupWidth", "130px");
    html.style.setProperty("--groupHeight", "380px");
    html.style.setProperty("--fileWidth", "180px");
    html.style.setProperty("--fileHeight", "380px");
    html.style.setProperty("--descWidth", "290px");
    html.style.setProperty("--descHeight", "380px");
    html.style.setProperty("--chartWidth", "140px");
    setTimeout(this.resetAnimation, 150);
    // console.log("minimizng");
    expandState = 0;
    document.getElementById("backShadow").style.webkitAnimationName = "totalTransformRev";
    document.getElementById("backShadow").style.webkitAnimationDuration = "0.15s";

    document.getElementsByClassName("bothWindows")[0].style.webkitAnimationName = "totalTransformRev";
    document.getElementsByClassName("bothWindows")[0].style.webkitAnimationDuration = "0.15s";

    document.getElementsByClassName("finderTopBar")[0].style.webkitAnimationName = "topTransformRev";
    document.getElementsByClassName("finderTopBar")[0].style.webkitAnimationDuration = "0.15s";

    document.getElementsByClassName("bottomElemeents")[0].style.webkitAnimationName = "bottomTransformRev";
    document.getElementsByClassName("bottomElemeents")[0].style.webkitAnimationDuration = "0.15s";

    document.getElementsByClassName("finderSideBar")[0].style.webkitAnimationName = "groupTransformRev";
    document.getElementsByClassName("finderSideBar")[0].style.webkitAnimationDuration = "0.15s";

    document.getElementsByClassName("finderFilesBar")[0].style.webkitAnimationName = "fileTransformRev";
    document.getElementsByClassName("finderFilesBar")[0].style.webkitAnimationDuration = "0.15s";

    document.getElementsByClassName("finderDescriptionBar")[0].style.webkitAnimationName = "descTransformRev";
    document.getElementsByClassName("finderDescriptionBar")[0].style.webkitAnimationDuration = "0.15s";

    //The code below transforms the chart. However, it crashes if there is a page without a chart so the conditional statement avoids this crash.
    if (myInfo.info[props.groupIndex][props.fileIndex].length > 7) {
      document.getElementsByTagName("dl")[0].style.webkitAnimationName = "chartTransformRev";
      document.getElementsByTagName("dl")[0].style.webkitAnimationDuration = "0.15s";
    }
    for (var i = 0; i < myInfo.info[props.groupIndex].length;i++) {
      document.getElementsByClassName("fileStyle")[i].style.webkitAnimationName = "fileStyleTransformRev";
      document.getElementsByClassName("fileStyle")[i].style.webkitAnimationDuration = "0.15s";
      document.getElementsByClassName("fileStyle2")[i].style.webkitAnimationName = "fileStyleTransformRev";
      document.getElementsByClassName("fileStyle2")[i].style.webkitAnimationDuration = "0.15s";
    }

    for (var i = 0; i < myInfo.info.length;i++) {
      document.getElementsByClassName("groupStyle")[i].style.webkitAnimationName = "groupStyleTransformRev";
      document.getElementsByClassName("groupStyle")[i].style.webkitAnimationDuration = "0.15s";
      document.getElementsByClassName("groupStyle2")[i].style.webkitAnimationName = "groupStyleTransformRev";
      document.getElementsByClassName("groupStyle2")[i].style.webkitAnimationDuration = "0.15s";
    }



  }

}
