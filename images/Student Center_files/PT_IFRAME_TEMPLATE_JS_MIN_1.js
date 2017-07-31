var ptIframe = {
 ceDiv: null,  
 cImg: null,  
 eImg: null,  
 leftNav: null, 
 leftMenuNav: null, 
 tgtDiv: null,  
 popup: null, 

 tgtIframe: null, 
 rcIframe: null, 
 rcUpMask: null,  
 rcDownMask: null, 
 rcDragHndl : null, 
 currRcSize : 0,
 isRCMin : false,  
  
 rcSep : null,  
 rcMinHeight : 0,  
 rcTitlebar : null, 
 rcTCSpacer : null, 

 init: function () {

 
 var rcMask = document.createElement("div"); rcMask.id="ptalPageMask"; rcMask.className ="ptalPageMask"; var theBody = document.getElementsByTagName("body"); if (theBody && theBody.length)
 theBody[0].appendChild(rcMask); ptIframe.ceDiv = ptUtil.id("ptifrmsbarcollexp"); ptIframe.cImg = ptUtil.id("ptifrmsbcoll"); ptIframe.eImg = ptUtil.id("ptifrmsbexp"); ptIframe.leftNav = ptUtil.id("ptifrmsidebar"); ptIframe.leftMenuNav = (ptIframe.leftNav) ? ptUtil.getFirstChild(ptIframe.leftNav): ptUtil.id("ptifrmnav"); ptIframe.tgtDiv = ptUtil.id("ptifrmtarget"); ptIframe.rcTitlebar = ptUtil.id("ptrctitlebar"); ptIframe.rcTCSpacer = ptUtil.id("ptrcTCSpacer");  if (ptUtil.getCSSValue(ptIframe.cImg,"display") == "none") {
 ptIframe.toggleNav(true); }

 
 ptEvent.add(ptIframe.cImg,"click",function(){ptIframe.toggleNav();});  ptEvent.add(ptIframe.eImg,"click",function(){ptIframe.toggleNav();});  ptIframe.resizeWidth("ptifrmtgtframe",0); ptIframe.resizeHeight("ptifrmnav",14);  ptIframe.resizeHeight("ptifrmtgtframe",0); ptIframe.tgtIframe = ptUtil.id("ptifrmtgtframe"); ptIframe.rcIframe = ptUtil.id("RelatedContent");  if (ptIframe.rcIframe) {
 ptIframe.rcDragHndl = ptUtil.id("ptifrmrchandle"); ptIframe.rcSep = ptUtil.id("ptifrmsep"); ptIframe.rcUpMask = ptUtil.id("ptifrmresizeupmask"); ptIframe.rcDownMask = ptUtil.id("ptifrmresizedownmask");  ptIframe.rc.dragResize.init(ptUtil.id("ptifrmrchandle")); }

 
 ptEvent.add(window,"resize",function() {ptIframe.resizeAll();}); ptEvent.add(window,"load",function() {ptIframe.resizeAll();});  ptEvent.add(document,"keyup",ptIframe.keyHandler);  var popup = ptUtil.id("ptifrmpopup"); if (popup) {

 var options = {
 center : true,
 draggable : false,
 resizeable : false
 }; ptIframe.popup = new ptPopup(popup,options); }

 
 if (typeof ptNav2 !== "undefined") {
 ptNav2.scrollObjIntoView(); }

 
 if (window.onbeforeprint !== "undefined") {
 ptEvent.add(window,"beforeprint",function(){
 iframeHeight = ptIframe.tgtIframe.offsetHeight;  ptIframe.tgtIframe.style.height = ptIframe.tgtIframe.contentWindow.document.body.scrollHeight + "px";  });  ptEvent.add(window,"afterprint",function(){ptIframe.tgtIframe.style.height = iframeHeight + "px";});  }
 },

 resizeAll: function() {
 ptIframe.resizeWidth("ptifrmtgtframe",0); ptIframe.resizeHeight("ptifrmtgtframe",0); ptIframe.resizeHeight("ptifrmnav",14);   if (!(browserInfoObj2.isiPad && browserInfoObj2.isSafari)) 
 ptIframe.rc.resize();  if (RCPage.initialized) {
 
 RCPage.resize(); if (RCPage.visible)
 ptrc.resizeSideRCFrame(window.frames['SRelatedContent'], 20); };  if (typeof ptCommonObj2.popMask != 'undefined' 
 && ptCommonObj2.popMask != null 
 && ptCommonObj2.popMask.style.display != "none")
 ptCommonObj2.setMaskSize(window);   },

 
 
 
 resizeHeight: function (e,buf) {
 var elem = ptUtil.id(e); try {
 elem.style.height = String(ptIframe.winSize().height - (ptIframe.getPos(elem).y) - buf) + 'px'; } catch(err) {}
 },

 resizeWidth: function (e,buf) {

 var elem = ptUtil.id(e); try {

 if ("ltr" === "ltr") {
 elem.style.width = String(ptIframe.winSize().width - ptIframe.getPos(elem).x - buf) + "px"; } else {

 
 if (e === "ptifrmtgtframe") {
 elem.style.width = String(ptIframe.getPos(elem).x + elem.offsetParent.offsetWidth - buf) + "px"; }
 }
 } catch(err) {}
 },

 
 winSize : function () {

 var de = document.documentElement; var height = window.innerHeight || self.innerHeight || (de && de.clientHeight) || document.body.clientHeight; var width = window.innerWidth || self.innerWidth || (de && de.clientWidth) || document.body.clientWidth; return {height:height, width:width}; },

 getPos : function (el) {

 var x = 0, y = 0; var e = el; while(e) {
 x += e.offsetLeft || 0; y += e.offsetTop || 0; e = e.offsetParent; }
 return {x:x, y:y}; },

 toggleNav: function(isAutoMenu) {

 
 if (isAutoMenu) {
 ptIframe.leftNav.style.display = "none";  ptUtil.swapClass(ptIframe.tgtDiv,"ptifrmtgtstd","ptifrmtgtmax");  if (ptIframe.rcIframe && ptUtil.getCSSValue(ptIframe.rcIframe.parentNode,"display") === "block") {
 ptUtil.swapClass(ptIframe.rcIframe.parentNode,"ptifrmrcstd","ptifrmrcmax"); ptIframe.rc.resize(); }

 ptIframe.showExpNavImage(); } else {
 if (ptUtil.getCSSValue(ptIframe.leftNav,"display") !== "none") {
 ptIframe.leftNav.style.display = "none";  ptUtil.swapClass(ptIframe.tgtDiv,"ptifrmtgtstd","ptifrmtgtmax");  if (ptIframe.rcIframe && ptUtil.getCSSValue(ptIframe.rcIframe.parentNode,"display") === "block") {
 ptUtil.swapClass(ptIframe.rcIframe.parentNode,"ptifrmrcstd","ptifrmrcmax"); ptIframe.rc.resize(); }

  ptIframe.showExpNavImage(); } else {
 ptIframe.leftNav.style.display = "inline"; ptUtil.swapClass(ptIframe.tgtDiv,"ptifrmtgtmax","ptifrmtgtstd");  if (ptIframe.rcIframe && ptUtil.getCSSValue(ptIframe.rcIframe.parentNode,"display") === "block") {
 ptUtil.swapClass(ptIframe.rcIframe.parentNode,"ptifrmrcmax","ptifrmrcstd"); ptIframe.rc.resize(); }
 if (RCPage.visible){
 var diff = ptIframe.winSize().width - RCPage.objPAframe.offsetWidth; if (ptIframe.leftMenuNav.offsetWidth > diff) {
 diff = (ptIframe.leftMenuNav.offsetWidth - diff) + 20; RCPage.adjustRCFrameWidth(0-diff); }
 }


  ptIframe.showCollNavImage(); ptIframe.resizeHeight("ptifrmnav",14); }
 }

 ptIframe.resizeWidth("ptifrmtgtframe",0); ptIframe.resizeWidth("RelatedContent",0); }, 

 showCollNavImage: function() {

 ptIframe.eImg.style.display = "none"; ptIframe.cImg.style.display = "block"; ptUtil.swapClass(ptIframe.ceDiv,"ptifrmnavtitleexp","PTPAGELETHEADER"); },

 showExpNavImage: function() {

 ptIframe.cImg.style.display = "none"; ptIframe.eImg.style.display = "block"; ptUtil.swapClass(ptIframe.ceDiv,"PTPAGELETHEADER","ptifrmnavtitleexp"); },

 
 isPIASaveWarning : function () {

 var retVal = false; var piaPopup = getMainPopupObject(); if (piaPopup && piaPopup.isSaveWarn) {
 retVal = true; }
 return retVal; },

 
 
 
 
 
 
 saveWarning : function(tgt,linkFn,tgtName,newWinOptions) {

 
 if (this.isPIASaveWarning()) { return; }

 if (!tgt) { return; }

 if (!tgtName) { tgtName = "_parent"; }

 
 
 var processClick = function () {
 if (ptIframe.tgtIframe) {
 try {
 var formName = ptIframe.tgtIframe.contentWindow.document.forms[0].name; if (!/empty/.test(formName) && (tgtName.toLowerCase() !== "_blank")) { 
 var procFunc = ptIframe.tgtIframe.contentWindow["processing_" + formName]; procFunc.call(procFunc,1,3000); }
 } catch (ex) {}
 } 
 if (typeof linkFn !== "undefined") {
 if (tgtName.toLowerCase() === "_blank") {
 open(tgt.constructor === String ? tgt : tgt.href,tgtName,newWinOptions); } else {
 linkFn.call(this,tgt); }
 } else {
 open(tgt.constructor === String ? tgt : tgt.href,tgtName); }

 return false; };  if (ptIframe.isDataChange()) {
 ptIframe.popup.prompt("Save Warning",
 "You have unsaved data on this page. Click OK to go back and save, or Cancel to continue.",
   "OK_CANCEL",
 function(){}, 
 processClick 
 ); return false; } else {
 processClick(); }

 },

 
 
 
 isDataChange : function () {

 var changed = false; if (top.frames) {
 changed = checkAnyFrameChanged(top.frames); }

 
 
 if (changed == "undefined") {
 changed = false; }

 return changed; },


 
 
 keyHandler : function (evt) {

 var keyCode = ptUtil.getKeyCode(evt); var actualKeyCode = keyCode | 0x40; var isCtrlKey = ptUtil.isCtrlKey(evt); if (isCtrlKey && (actualKeyCode == 89 || actualKeyCode == 90)) {
 ptIframe.handleNavKeyEvent(actualKeyCode); return false; } else {
 var isAltKey = ptUtil.isAltKey(evt); if (isAltKey || isCtrlKey) {
 ptIframe.parentKeyHandler(window, keyCode, isAltKey, isCtrlKey); return true; }
 }
 },

 
 
 handleNavKeyEvent : function (keyCode) {

 

 if (keyCode == 89) {
 if (typeof pthNav != "undefined"){
 if (!pthNav.isNavOpen){
  pthNav.openMainMenu();  }
  else{
 pthNav.closeNav();  }
  return false; } else if (typeof ptNav2 != "undefined")
 ptIframe.toggleNav(); } else if (keyCode == 90) {
 
 if (typeof pthNav != "undefined"){
 pthNav.setSearchFocus(); }
 else if (typeof ptNav2 != "undefined"){
 if (ptUtil.getCSSValue(ptIframe.leftNav,"display") === "none") {
 ptIframe.toggleNav(); }
 ptNav2.setSearchFocus(); }
 }

 },

 
 parentKeyHandler : function(caller,keyCode,isAltKey,isCtrlKey) {

 
 if (caller == self) {
 
 if (typeof parentKeyHandler != "undefined") {
 parentKeyHandler(caller,keyCode,isAltKey,isCtrlKey); return true; } else {
 
 var tgtFrame = parent.frames["TargetContent"]; if (tgtFrame && !isCrossDomain(tgtFrame) && tgtFrame.keyHandler) {
 tgtFrame.keyHandler(keyCode, isAltKey, isCtrlKey); return true; }

 }
 
 
 } else {
 if (isCtrlKey && (keyCode == 89 || keyCode == 90)) {
 ptIframe.handleNavKeyEvent(keyCode); return false; }
 }
 },

 
 rc : {

 
 toggleDisplay : function (hide) {

 if (!ptIframe.rcIframe) { return; }

 
 
 if (hide) {
 ptIframe.rcIframe.parentNode.style.display = "none"; ptIframe.resizeHeight("ptifrmtgtframe",0); } else {
 ptIframe.rcIframe.parentNode.style.display = "block"; this.resize(); }
 },

 
 resize : function (height) {

 if (!ptIframe.rcIframe || ptUtil.getCSSValue(ptIframe.rcIframe.parentNode,"display") === "none") {
 return; }

 
 var viewPortHeight = ptIframe.winSize().height -
 ptIframe.getPos(ptIframe.tgtIframe).y; var rcHeight;  if (typeof(height) !== "undefined") {

 
 if (!ptIframe.isRCMin) {
 rcHeight = height;  } else {
 rcHeight = ptIframe.rcMinHeight; }

 } else {

 if (!ptIframe.isRCMin) {

 
 if (ptIframe.currRcSize !== 0) {
 rcHeight = ptIframe.currRcSize;  } else {
 rcHeight = viewPortHeight * .40; }
 } else {
 rcHeight = ptIframe.rcMinHeight; }

 }

 
 if (browserInfoObj2.isiPad && browserInfoObj2.isSafari) {
 var pgHeight = 0;  var tgtHeight = 0;  var tc = window.frames['TargetContent']; var theForms = tc.document.getElementsByTagName("form");  if (theForms && theForms.length) {
 var theFormName = theForms[0].name; var pageContainerDiv = theFormName + "divPAGECONTAINER"; var pageContainer = tc.document.getElementById(pageContainerDiv); if (pageContainer != null) {
 var pgContainerHeight = pageContainer.offsetHeight; var ifrmTemplateHeight = 67;  var ifrmTemplate = ptUtil.id("ptifrmtemplate"); if (ifrmTemplate != null) 
 ifrmTemplateHt = ifrmTemplate.offsetHeight; pgHeight = ifrmTemplateHeight + pgContainerHeight;  }
 }
 if (pgHeight > 0) {
 tgtHeight = pgHeight;  } else {
 tgtHeight = viewPortHeight;  }
 } else {
 var tgtHeight = viewPortHeight - rcHeight; }

 
 if (!ptIframe.isRCMin) {
 ptIframe.currRcSize = rcHeight; }

 var RCPanelSize = ((typeof RCPage != "undefined") && RCPage && RCPage.objPageletAreaContainer) ? RCPage.objPageletAreaContainer.clientWidth : 0; if (RCPanelSize > 0) {
 RCPage.RCPanel.resizeBottomRC(tgtHeight, rcHeight); }
 else {

 
 ptIframe.resizeHeight("ptifrmtgtframe",rcHeight);   if (ptUtil.getCSSValue(ptIframe.leftNav,"display") !== "none") {
 ptUtil.swapClass(ptIframe.rcIframe.parentNode,"ptifrmrcmax","ptifrmrcstd"); } else {
 ptUtil.swapClass(ptIframe.rcIframe.parentNode,"ptifrmrcstd","ptifrmrcmax"); }

 
 
 var buf = (ptIframe.isRCMin) ? ptIframe.tgtDiv : 0; ptIframe.resizeWidth("RelatedContent",buf);  ptIframe.rcSep.style.width = ptUtil.getCSSValue(ptIframe.rcIframe,"width");  if (browserInfoObj2.isiPad && browserInfoObj2.isSafari) {
 if (typeof(height) === "undefined") {
 
 ptIframe.rcIframe.parentNode.style.top = tgtHeight + "px";  }
 }
 else {
 ptIframe.rcIframe.parentNode.style.top = tgtHeight + "px"; }

 var rcSepHeight = 0; if (ptIframe.rcSep) {
 rcSepHeight = ptIframe.rcSep.offsetHeight; }

 var rcTitlebaHeight = 0; if (ptIframe.rcTitlebar) {
 rcTitlebaHeight = ptIframe.rcTitlebar.offsetHeight; }
 var rcTCSpacerHeight = 0; if (ptIframe.rcTCSpacer) {
 rcTCSpacerHeight = ptIframe.rcTCSpacer.offsetHeight; }

 
 var rcHeaderHeight = rcTCSpacerHeight + rcSepHeight + rcTitlebaHeight; ptIframe.rcIframe.style.height = rcHeight - rcHeaderHeight + "px";    var rc = window.frames['RelatedContent'];  var RCArea = rc.document.getElementById('RCArea');  if(!RCArea) return;  var height = ptIframe.rcIframe.offsetHeight;  if (height > ptIframe.rcIframe.offsetTop)
  height = height - ptIframe.rcIframe.offsetTop;  if (height>12) height = height -12;   RCArea.style.height = height + "px";   }
 },



 
 toggleHeight : function (rcBodyHeight) {

 
 
  
 if (rcBodyHeight === 0) {
 ptIframe.isRCMin = false; ptIframe.rcDragHndl.style.display = "block"; } else {
 ptIframe.isRCMin = true; ptIframe.rcDragHndl.style.display = "none";  if (ptIframe.rcMinHeight === 0) {

 ptIframe.rcMinHeight = rcBodyHeight;   if (ptIframe.rcSep) {
 ptIframe.rcMinHeight += ptIframe.rcSep.offsetHeight; }
 }
 }

 this.resize(); },

 
 cleanup : function () {
 if (ptrc.typeRC == "S") {
  if (RCPage.RCPanel) {
  RCPage.hideRC(); ptIframe.resizeWidth("ptifrmtgtframe",0);  }
 } else {
 ptIframe.rcIframe.parentNode.style.display = "none";  ptIframe.resizeHeight("ptifrmtgtframe",0); }

 },

 
 
 dragResize : {

 element: null, 
 handle: null, 
 minHeight: 0, 
 minTop: 0,
 currMouseX: 0, 
 mouseY: 0, 
 lastMouseX: 0, 
 lastMouseY: 0, 
 mOffX: 0, 
 mOffY: 0, 
 elmY: 0, 
 elmH: 0, 

 init : function (handle,config) {

 if (!handle) { return; }

 ptIframe.rc.dragResize.handle = handle; if (handle.parentNode) {
 this.element = handle.parentNode.parentNode; }

 
 if (browserInfoObj2.isiPad && browserInfoObj2.isSafari) 
  ptEvent.add(this.handle, "touchstart",this.onMouseDown); else 
  ptEvent.add(this.handle,"mousedown",this.onMouseDown);  if (browserInfoObj2.isIE && browserInfoObj2.version <= 7) {
 ptIframe.rcUpMask.style.backgroundColor = "#FFFFFF"; ptIframe.rcDownMask.style.backgroundColor = "#FFFFFF"; ptIframe.rcUpMask.style.filter = "alpha(opacity=1)"; ptIframe.rcDownMask.style.filter = "alpha(opacity=1)"; }
 },

 
 onMouseDown : function (e) {

 
 
 if (ptIframe.isRCMin) { return false; }

 var dr = ptIframe.rc.dragResize; if (browserInfoObj2.isiPad && browserInfoObj2.isSafari) {
 var targetEvent = e.touches.item(0);   dr.handle.style.borderWidth = "3px"; dr.handle.style.borderStyle = "dotted";  dr.handle.style.borderColor = "red"; }

 
 
 if (!dr.element) {
 dr.element = dr.handle.parentNode.parentNode; }

 
 if (ptIframe.rcSep && dr.minHeight === 0) {
 dr.minHeight = ptIframe.rcSep.offsetHeight; }

 
 if (browserInfoObj2.isiPad && browserInfoObj2.isSafari) {
 ptEvent.add(document,"touchmove", dr.onMouseMove); ptEvent.add(document,"touchend", dr.onMouseUp); } else {
 ptEvent.add(document,"mousemove", dr.onMouseMove); ptEvent.add(document,"mouseup", dr.onMouseUp); }

 if (browserInfoObj2.isiPad && browserInfoObj2.isSafari) {
 dr.lastMouseX = targetEvent.clientX; dr.lastMouseY = targetEvent.clientY; } else {
  dr.lastMouseX = e.pageX; dr.lastMouseY = e.pageY; }

 dr.elmY = parseInt(ptUtil.getCSSValue(dr.element,"top")); dr.elmH = dr.element.offsetHeight;  dr.element.style.height = ptUtil.getCSSValue(ptIframe.rcIframe,"height");  ptIframe.rcUpMask.style.display = "block"; ptIframe.rcDownMask.style.display = "block"; if (browserInfoObj2.isiPad && browserInfoObj2.isSafari)
 e.preventDefault();  return false; },

 
 
 
 onMouseMove : function (e) {

 var dr = ptIframe.rc.dragResize;  if (browserInfoObj2.isiPad && browserInfoObj2.isSafari) {
 var targetEvent = e.touches.item(0);  dr.currMouseX = targetEvent.clientX; dr.currMouseY = targetEvent.clientY; } else {
 dr.currMouseX = e.pageX; dr.currMouseY = e.pageY; }

 
 
 var diffX = dr.currMouseX - dr.lastMouseX + dr.mOffX; var diffY = dr.currMouseY - dr.lastMouseY + dr.mOffY; dr.mOffX = dr.mOffY = 0;  dr.lastMouseX = dr.currMouseX; dr.lastMouseY = dr.currMouseY;  dr.constraintCheck(diffY);  dr.element.style.top = dr.elmY + 'px'; dr.element.style.height = dr.elmH + 'px'; if (browserInfoObj2.isiPad && browserInfoObj2.isSafari)
 e.preventDefault();  return false; },

 
 onMouseUp : function (e) {

 var dr = ptIframe.rc.dragResize; if (browserInfoObj2.isiPad && browserInfoObj2.isSafari) {
 dr.handle.style.borderStyle = "none";  ptEvent.remove(document,"touchmove", dr.onMouseMove); ptEvent.remove(document,"touchend", dr.onMouseUp); } else {
 ptEvent.remove(document,"mousemove", dr.onMouseMove); ptEvent.remove(document,"mouseup", dr.onMouseUp); }

 
 
 dr.mOffX = dr.mOffY = 0; ptIframe.rc.resize(dr.elmH);  ptIframe.rcUpMask.style.display = "none"; ptIframe.rcDownMask.style.display = "none"; return false; },

 
 constraintCheck : function (diffY) {

 var dY = diffY; if (this.elmH - dY < this.minHeight) {
 this.mOffY = (dY - (diffY = this.elmH - this.minHeight)); } else if ( this.elmY + dY < this.minTop) {
 this.mOffY = (dY - (diffY = this.minTop - this.elmY)); }

 this.elmY += diffY; this.elmH -= diffY; }
 }
 }
};ptEvent.load(ptIframe.init);