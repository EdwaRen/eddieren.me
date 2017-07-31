for (i = 0; i < groups.length; i++) {
  // SEtting up groups
  var groupNameTemp = "grp" + i;
  document.getElementById(groupNameTemp).innerHTML = groups[i];
  var groupImageNameTemp = "imagePlaceholder" + i;
  document.getElementById(groupImageNameTemp).style.backgroundImage = groupsImages[i];

}
