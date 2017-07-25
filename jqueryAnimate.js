$(document).ready(function(){
    $("#myGroup0").click(function(){
        fadeFiles();
    });
    $("#myGroup1").click(function(){
      fadeFiles();
    });
    $("#myGroup2").click(function(){
        fadeFiles();
    });
    $("#myGroup3").click(function(){
      fadeFiles();
    });
    $("#myGroup4").click(function(){
        fadeFiles();
    });
    $("#myGroup5").click(function(){
      fadeFiles();
    });
    $("#myGroup6").click(function(){
      fadeFiles();
    });
    $("#myFiles0").click(function(){
      fadeDescription();
    });
    $("#myFiles1").click(function(){
      fadeDescription();
    });
    $("#myFiles2").click(function(){
      fadeDescription();
    });
    $("#myFiles3").click(function(){
      fadeDescription();
    });
});

function fadeFiles() {
  console.log("fading files");
  $("#myFiles0").fadeOut(1);
  $("#myFiles0").fadeIn(300);
  $("#myFiles1").fadeOut(1);
  $("#myFiles1").fadeIn(300);
  $("#myFiles2").fadeOut(1);
  $("#myFiles2").fadeIn(300);
  $("#myFiles3").fadeOut(1);
  $("#myFiles3").fadeIn(300);
  $("#descReadmeTutorial").fadeOut(1);
}

function fadeDescription() {
  $("#descReadmeTutorial").fadeOut(1);
  $("#descReadmeTutorial").fadeIn(300);
}
