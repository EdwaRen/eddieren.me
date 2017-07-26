
$(document).ready(function(){
  // $(".bothWindows").remove();

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
      if (1 < files.length) {
        fadeDescription();
      }
    });
    $("#myFiles2").click(function(){
      if (2 < files.length) {
        fadeDescription();
      }
    });
    $("#myFiles3").click(function(){
      if (3 < files.length) {
        fadeDescription();
      }
    });
    $("#myFiles4").click(function(){
      if (4 < files.length) {
        fadeDescription();
      }
    });
});

function fadeFiles() {
  console.log("fading files");
  $("#myFiles0").fadeOut(1);
  $("#myFiles0").fadeIn(300);
  // $("#myFiles0").slideDown();

  $("#myFiles1").fadeOut(1);
  $("#myFiles1").fadeIn(300);
  // $("#myFiles1").slideDown();

  $("#myFiles2").fadeOut(1);
  $("#myFiles2").fadeIn(300);
  // $("#myFiles2").slideDown();

  $("#myFiles3").fadeOut(1);
  $("#myFiles3").fadeIn(300);
  // $("#myFiles3").slideDown();

  $("#myFiles4").fadeOut(1);
  $("#myFiles4").fadeIn(300);

  $("#descReadmeTutorial").fadeOut(1);
}

function fadeDescription() {
  $("#descReadmeTutorial").fadeOut(1);
  $("#descReadmeTutorial").fadeIn(500);
}
