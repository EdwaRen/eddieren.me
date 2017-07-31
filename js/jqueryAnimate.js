//
// Copyright (c) 2017 by Edward Ren. All Rights Reserved.
//


$(document).ready(function(){

    // $( ".bothWindows" ).remove();
  // $(".bothWindows").remove();
    $("#backShadow").fadeOut(0);
    $("#backShadow").fadeIn(400);

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
    $("#myGroup7").click(function(){
      fadeFiles();
    });
    $("#myGroup8").click(function(){
      fadeFiles();
    });
    $("#myGroup9").click(function(){
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

    $("#myFiles5").click(function(){
      if (5 < files.length) {
        fadeDescription();
      }
    });

    $("#myFiles6").click(function(){
      if (6 < files.length) {
        fadeDescription();
      }
    });

    $("#myFiles7").click(function(){
      if (7 < files.length) {
        fadeDescription();
      }
    });

    $("#myFiles8").click(function(){
      if (8 < files.length) {
        fadeDescription();
      }
    });

    $("#myFiles9").click(function(){
      if (9 < files.length) {
        fadeDescription();
      }
    });
});

function fadeFiles() {
  // fading files
  // $("#myFiles0").stop();
  // $("#myFiles0").fadeOut(1);
  // $("#myFiles0").fadeIn(300);

  $("#myFiles1").stop();
  $("#myFiles1").fadeOut(1);
  $("#myFiles1").fadeIn(350);
  // $("#myFiles1").slideDown();

  $("#myFiles2").stop();
  $("#myFiles2").fadeOut(1);
  $("#myFiles2").fadeIn(400);
  // $("#myFiles2").slideDown();

  $("#myFiles3").stop();
  $("#myFiles3").fadeOut(1);
  $("#myFiles3").fadeIn(450);
  // $("#myFiles3").slideDown();

  $("#myFiles4").stop();
  $("#myFiles4").fadeOut(1);
  $("#myFiles4").fadeIn(500);

  $("#myFiles5").stop();
  $("#myFiles5").fadeOut(1);
  $("#myFiles5").fadeIn(500);

  $("#myFiles6").stop();
  $("#myFiles6").fadeOut(1);
  $("#myFiles6").fadeIn(500);

  $("#myFiles7").stop();
  $("#myFiles7").fadeOut(1);
  $("#myFiles7").fadeIn(500);

  $("#myFiles8").stop();
  $("#myFiles8").fadeOut(1);
  $("#myFiles8").fadeIn(500);

  $("#myFiles9").stop();
  $("#myFiles9").fadeOut(1);
  $("#myFiles9").fadeIn(500);

  // $("#descReadmeTutorial").fadeOut(1);
}

function fadeDescription() {
  $("#descReadmeTutorial").stop();
  $("#descReadmeTutorial").fadeOut(0);
  $("#descReadmeTutorial").fadeIn(500);
}

function fadeBackShadowIn() {
  $("#backShadow").fadeIn(400);

}
