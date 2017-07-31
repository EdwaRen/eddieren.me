for (i = 0; i < groups.length; i++) {
  console.log("Setting up groups");
  var groupNameTemp = "grp" + i;
  document.getElementById(groupNameTemp).innerHTML = groups[i];
  console.log(document.getElementById(groupNameTemp));
  var groupImageNameTemp = "imagePlaceholder" + i;
  document.getElementById(groupImageNameTemp).style.backgroundImage = groupsImages[i];

}
