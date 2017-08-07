for (i = 0; i < groups.length; i++) {
  // SEtting up groups
  var groupNameTemp = "grp" + i;
  document.getElementById(groupNameTemp).innerHTML = groups[i];
  var groupImageNameTemp = "imagePlaceholder" + i;
  document.getElementById(groupImageNameTemp).style.backgroundImage = groupsImages[i];

}

var x = document.getElementById("finderTopBarTextP");
x.innerHTML = myName;

var divBack2 = document.createElement("title");
divBack2.innerHTML = myName;

document.head.appendChild(divBack2);
