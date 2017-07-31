


var ptBaseURI = getptBaseURI();var ptNav2 = {
  isHomepage: /\/h\/\?tab=/.test(location),
 serviceURI: ptBaseURI + "s/WEBLIB_PT_NAV.ISCRIPT1.FieldFormula.IScript_PT_NAV_INFRAME",
  searchURI : ptBaseURI + "s/WEBLIB_PORTAL.PORTAL_SEARCH_PB.FieldFormula.",
 root: ptNav2Info.branding.tree,
  liFldr: "li." + ptNav2Info.branding.fldr,
  liFldrOpen: "li." + ptNav2Info.branding.fldrOpen,
 fldrAncIdPrefix: "fldra_",
 crefLiIdPrefix: "crefli_",
 favLiIdPrefix : "crefli_fav_",
 iframe: null,  
 iframeObjName : "", 
 block : null, 
 blockParent : null, 
 loadStyle : "ptnav2loading", 
 templateId : (typeof(ptAppliedTemplateId) !== "undefined") ? ptAppliedTemplateId : "", 
 ptNav2AS: null, 
  iframeNav : ptUtil.id("ptifrmnav"), 

 init: function () {


 
 if (!ptNav2.isHomepage) {
 ptNav2.iframe = ptUtil.id("ptifrmtgtframe"); if (ptNav2.iframeNav)
 ptUtil.id(ptNav2.root).style.width = ptNav2.iframeNav.scrollWidth + "px"; }

 ptNav2.addEvents(); ptNav2.addKeyEvent(); ptNav2.addSearchEvent(); if (browserInfoObj2.isIE && document.compatMode !== "CSS1Compat")
 ptUtil.setCSSValue(ptUtil.id(ptNav2.root),"zoom","1");   if (top != self) {
 var frameDiv = ptUtil.id("ptnav2framecontainer"); if (frameDiv) {

 
 if (browserInfoObj2.isIE && document.compatMode !== "CSS1Compat") {
 ptUtil.setCSSValue(ptUtil.id(ptNav2.root),"position","relative"); }

 
 if (window.ptcxmNav != undefined && ptcxmNav) {
 ptUtil.setCSSValue(document.body,"width","auto"); ptUtil.setCSSValue(frameDiv,"maxWidth","none"); } else { 
 
 
 ptUtil.setCSSValue(frameDiv,"position","absolute");  if ("ltr" === "rtl" && browserInfoObj2.isMozilla) {
 browserInfoObj2 = { version: (browserInfoObj2.browser.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1]}; if (parseFloat(browserInfoObj2.version) < 1.9) {
 ptUtil.setCSSValue(frameDiv,"left","0"); }
 }
 }
 }
 }

 
 
 
 

 if (window.ptcxmNav != undefined && ptcxmNav) {
  ptNav2.cxmScrollPgltIntoView();   } else if (!ptNav2.iframe) {
  ptNav2.scrollObjIntoView(); }

 
 ptNav2.block = ptUtil.id("ptnav2block"); if (ptNav2.block) {
 ptNav2.blockParent = ptNav2.block.parentNode; }

 
 var srchInput = ptUtil.id("ptnav2srchinput"); if (srchInput && (typeof(ptASObj) != "undefined") && (typeof document.ptnav2srchform.AS_LIMIT != "undefined")){
 var limit = parseInt(document.ptnav2srchform.AS_LIMIT.value, 10); if ((limit > 0) && (ptNav2.ptNav2AS == null)) {
 if (typeof document.ptnav2srchform.MENU_SEARCH_CAT != "undefined") 
 ptNav2.searchURI += "IScript_SESPortalQry";  else
 ptNav2.searchURI += "ISCRIPT_PortalSearch";  var asOptions = {
  searchURI: ptNav2.searchURI + "?LIMIT=" + document.ptnav2srchform.AS_LIMIT.value + "&SEARCH_TEXT="
 };  ptNav2.ptNav2AS = new ptASObj(srchInput,asOptions, "ptNav2AS");  ptEvent.add(document,"click",ptNav2.ptNav2AS.clearSuggestions);   var pgltHeader = ptUtil.id("ptpgltlbl_MENU");  if (pgltHeader)
 ptEvent.add(pgltHeader, "mousedown", ptNav2.ptNav2AS.clearSuggestions);  }
 } 
 },

 checkSignonResponse : function (r) {
  if (r) {
  var newURL; var hIdx =String(location).search(/\/h\/\?tab=/gi);  if (hIdx != -1) 
  newURL = String(location).substring(0, hIdx) + "/?"; else
  newURL = location + "&";   window.location = newURL + "cmd=login&errorCode=105";  return true;  }
  return false; },


 
 addEvents : function (node) {

 
 if (!node) {
 node = ptUtil.id(ptNav2.root); }

 
 var ancNodes = node.getElementsByTagName("a"); for (var i = 0; i < ancNodes.length; i++) {
 ptEvent.add(ancNodes[i],"click",this.onClickCref); }

 
 var divNodes = node.getElementsByTagName("div"); for (i = 0; i < divNodes.length; i++) {
 ptEvent.add(divNodes[i],"click",ptNav2.onClickFldr); }

 }, 

 
 onClickFldr : function (e) {

 
 ptNav2.doFldrClick(this.parentNode);  return false; },

 
 
 onClickCref : function (e) {

 
 if (typeof bcUpdater != "undefined" && bcUpdater) {
 bcUpdater.setStoredData(bcUpdater.isMenuCrefNav, "T"); }
 
 
 if (ptUtil.isClassMember(this,"ptnnonavcoll")) {
 ptNav2.doFldrClick(this.parentNode,true); return false; }

 
 
 
 if (this.parentNode.id === ptNav2.crefLiIdPrefix + "PT_PORTAL_ADD_FAV_GBL") {
 var hdrFavEl = ptNav2.getAddToFavHref(); if (hdrFavEl) {
 this.href = hdrFavEl.href;  if (hdrFavEl.handle) {
 hdrFavEl.handle.call(hdrFavEl,e); return;  }
 }
 }

 var target = "_parent"; var newWinOpts = ""; var saveWarn = "Y";  if (ptUtil.isClassMember(this,"ptnns")) saveWarn = "N";  if (ptUtil.isClassMember(this,"ptnnw")) {
 target = "_blank"; var dirs = "directories";  var locs = "location";  var mbar = "menubar";  var tbar = "toolbar"; if (ptUtil.isClassMember(this,"ptnbd")) dirs += "=no";  if (ptUtil.isClassMember(this,"ptnbl")) locs += "=no"; if (ptUtil.isClassMember(this,"ptnbm")) mbar += "=no"; if (ptUtil.isClassMember(this,"ptnbt")) tbar += "=no"; newWinOpts = "resizable,scrollbars,status," + dirs + "," + locs + "," + mbar + "," + tbar; }

 
 if (ptNav2.iframe) {

 
 if (saveWarn === "Y") {
 ptIframe.saveWarning(this,ptNav2.iframeDoClick,target,newWinOpts); return false; } else {
 
 if (target.toLowerCase() === "_blank") {
 open(this.href,target,newWinOpts); } else {
 ptNav2.iframeDoClick(this); }
 return false; }
 }

 
 addExtraParam(saveWarn,"TargetContent",null,target,this.href,newWinOpts);  return false; },

 doFldrClick : function (node,scrollIntoView) {
 var selectedElem;  ptUtil.id(ptNav2.root).style.width = "";   if (ptUtil.isClassMember(node,ptNav2Info.branding.fldrOpen)) {

 
 ptNav2.removeSelectedClass();  ptNav2Info.selectedId = ptNav2.fldrAncIdPrefix + node.id;  if (node.parentNode.id !== ptNav2.root) {
 
 ptUtil.addClass(ptUtil.id(ptNav2.fldrAncIdPrefix + node.parentNode.parentNode.id),ptNav2Info.branding.selected); ptNav2Info.selectedId = ptNav2.fldrAncIdPrefix + node.parentNode.parentNode.id; ptNav2.addSelectedText(ptUtil.id(ptNav2Info.selectedId).firstChild);   ptNav2.setFldrBkgrnd();   } else {
 ptNav2Info.selectedId = ""; }


 
 ptUtil.swapClass(node.parentNode,ptNav2Info.branding.fldrOpen,ptNav2Info.branding.fldrClose,ptNav2.liFldrOpen);  ptUtil.addClass(node,ptNav2Info.branding.fldrClose); if ((node.id === "MYFAVORITES") && (node.nodeName.toUpperCase() === "LI")) 
 ptNav2.removeSelectedText(ptUtil.id(ptNav2.fldrAncIdPrefix + node.id).firstChild); if (ptNav2.iframeNav && ptNav2Info.selectedId !== "") 
 ptUtil.id(ptNav2.root).style.width = ptNav2.iframeNav.scrollWidth + "px";   } else if (ptUtil.isClassMember(node,ptNav2Info.branding.fldrClose)) {

 
 ptNav2.removeSelectedClass();  ptNav2Info.selectedId = ptNav2.fldrAncIdPrefix + node.id;  ptNav2.setFldrBkgrnd();  selectedElem = ptUtil.id(ptNav2Info.selectedId);  ptUtil.addClass(selectedElem,ptNav2Info.branding.selected); ptNav2.addSelectedText(selectedElem.firstChild);   ptUtil.swapClass(node.parentNode,ptNav2Info.branding.fldrOpen,ptNav2Info.branding.fldrClose,ptNav2.liFldrOpen);  ptUtil.swapClass(node,ptNav2Info.branding.fldrClose,ptNav2Info.branding.fldrOpen);   if (ptNav2.iframe && node.id === "MYFAVORITES" && ptNav2.iframeObjName !== "PT_PORTAL_EDIT_FAV_GBL") {
 ptNav2.atfShow(); }

 if (scrollIntoView) {
 ptNav2.scrollObjIntoView(); }
 if (ptNav2.iframeNav) 
 ptUtil.id(ptNav2.root).style.width = ptNav2.iframeNav.scrollWidth + "px";   } else {

 
 var fldrPath = "&FolderPath="; var fldrAnc = ptUtil.id(this.fldrAncIdPrefix + node.id); if (fldrAnc) {
  var re = new RegExp("[?&]" + "FolderPath" + "=([^&$]*)", "i");  var path = fldrAnc.href.match(re); if (path) {
 fldrPath += path[1]; }
 }

 var templateType = ptNav2.iframe ? "IFRM" : ""; var fldrId = node.id; var ajaxUrl = ptNav2.serviceURI + "?pt_fname=" + fldrId + fldrPath + "&mode=x" + 
 "&templatetype=" + templateType + "&templateid=" + this.templateId + ptNav2Info.userLang; if (ptNav2Info.accessSelectedTxt !== "")
 ajaxUrl += "&ptlayout=A";  var currNode = node; ptNav2.addBlock(node,ptNav2.blockParent,ptNav2.loadStyle); var loader = new net2.ContentLoader(
 ajaxUrl, 
 null, 
 fldrId, 
 "GET",
 function () {
 if (ptNav2.checkSignonResponse(this.req.getResponseHeader("RespondingWithSignonPage")))
  return;  var respHTML = this.req.responseText;  ptNav2.removeSelectedClass();  ptNav2Info.selectedId = ptNav2.fldrAncIdPrefix + currNode.id;  ptUtil.addClass(ptUtil.id(ptNav2.fldrAncIdPrefix + currNode.id),ptNav2Info.branding.selected); ptNav2.addSelectedText(ptUtil.id(ptNav2Info.selectedId).firstChild);   ptUtil.swapClass(currNode.parentNode,ptNav2Info.branding.fldrOpen,ptNav2Info.branding.fldrClose,ptNav2.liFldrOpen);   ptUtil.appendHTML(currNode,respHTML);  ptUtil.addClass(currNode,ptNav2Info.branding.fldrOpen);    if (respHTML !== "") {
 
 ptNav2.setFldrBkgrnd();  if (ptNav2.iframeNav) 
 ptUtil.id(ptNav2.root).style.width = ptNav2.iframeNav.scrollWidth + "px";   ptNav2.addEvents(currNode.lastChild); }

 
 
 
 if (scrollIntoView) {
 ptNav2.scrollObjIntoView(); }

 
 ptNav2.removeBlock(currNode,ptNav2.blockParent,ptNav2.loadStyle);  },
 null,
 null, 
 "application/x-www-form-urlencoded"
 ); loader = null; }
 },

 
 nextUl : function (node) {

 var sibling = node.nextSibling; while (sibling) {
 if (sibling.nodeName.toLowerCase() === "ul") {
 return sibling; }
 sibling = sibling.nextSibling; }
 return null; },

 
 setFldrBkgrnd : function () {

 if (ptNav2Info.selectedId !== "") {
 var selNode = ptUtil.id(ptNav2Info.selectedId);  if (selNode) { 
 var ulNode = ptNav2.nextUl(selNode); if (ulNode) {
 ptUtil.addClass(ulNode,ptNav2Info.branding.fldrSelBkgrnd); }
 }
 }

 },

 
 addKeyEvent : function () {

 
 
 if (ptNav2.iframe) { return; }

 ptEvent.add(document,"keyup",function (evt) {

 var keyCode = ptUtil.getKeyCode(evt); var actualKeyCode = keyCode | 0x40; var bIsCtrlKey = ptUtil.isCtrlKey(evt);  if (bIsCtrlKey && actualKeyCode == 90) {

 if (ptNav2.isHomepage) {
 ptNav2.setSearchFocus(); return false; }

 
 var subFrame = parent.document.getElementById("SubFrame");  if (subFrame) { 
 
 var noCols = "0,*"; if("ltr" === "rtl") {
 noCols = "*,0"; }
 }

 
  
  
 
  if (subFrame && subFrame.cols !== noCols) {
 ptNav2.setSearchFocus(); } else {
 var hdrFrame = parent.frames["UniversalHeader"]; if (hdrFrame && !isCrossDomain(hdrFrame)) {
  if (hdrFrame.keyHandler) {
 if (hdrFrame.keyHandler(89, isAltKey, bIsCtrlKey)) {
 ptNav2.setSearchFocus(); }
 }
 }
 }
 } else {
 
  var isAltKey = ptUtil.isAltKey(evt); if (isAltKey || bIsCtrlKey) {
  parentKeyHandler(window, keyCode, isAltKey, bIsCtrlKey); }
 }
 }
 ); },

 
 getAddToFavHref: function() {

 
 if (ptNav2.iframe) {
 return ptUtil.id("pthdr2atf"); }

 
 var doc = document; if (parent != self) {
 try {
 doc = parent.frames['UniversalHeader'].document; } catch (e) {
 alert("UniversalHeader not found"); return false; }
 } 

 
 for (var i = 0; i < doc.anchors.length; i++) {
 if (doc.anchors[i].name == "AddToFavorites") {
 return doc.anchors[i]; }
 }
 },

 
 
 addSearchEvent : function () {

 
 var goButton = ptUtil.id("ptnav2go"); if (goButton) {
 if (document.ptnav2srchform) 
 ptEvent.add(document.ptnav2srchform[0],"keyup", function(evt){if (evt.keyCode == 13) searchProcessing(1);}); if (/\/h\/\?tab=/.test(location)) 
 ptEvent.add(goButton,"click",function (){searchProcessing(1);}); ptEvent.add(goButton,"click",function () {
 var newHref = this.href + "?SEARCH_TEXT=" + encodeURI(document.ptnav2srchform.SEARCH_TEXT.value);  if (typeof document.ptnav2srchform.SEARCH_TYPE != "undefined" &&
 typeof document.ptnav2srchform.MENU_SEARCH_CAT != "undefined"){ 
 newHref += "&SEARCH_TYPE=" + encodeURI(document.ptnav2srchform.SEARCH_TYPE.value); newHref += "&MENU_SEARCH_CAT=" + encodeURI(document.ptnav2srchform.MENU_SEARCH_CAT.value); }
 if (!ptUtil.isClassMember(this,"ptnns")) {
 if (ptNav2.iframe) {
 ptIframe.saveWarning(newHref); } else {
 saveWarning("TargetContent",null,"_parent",newHref); }
 } else {
 window.open(newHref,"_parent"); }
 return false; }
 ); }
 },

 
 
 setSearchFocus : function () {

 if (document.ptnav2srchform) {
 document.ptnav2srchform[0].focus(); } else {

 var navRoot = ptUtil.id(ptNav2.root); if (navRoot) {
 var ancs = navRoot.getElementsByTagName("a"); try {
 ancs[0].focus(); } catch (err) {}
 }
 }

 return true; },

 
 removeSelectedClass : function() {

  if (ptNav2Info.selectedId !== "") {

  var selNode = ptUtil.id(ptNav2Info.selectedId);  if (selNode) {
  
  if (selNode.nodeName.toLowerCase() === "a") {
  var ulNode = ptNav2.nextUl(selNode);  if (ulNode) {
  ptUtil.removeClass(ulNode,ptNav2Info.branding.fldrSelBkgrnd);  }

  
  } else {
  
  
  if (selNode.parentNode.id !== ptNav2.root) {
  ptUtil.removeClass(selNode.parentNode,ptNav2Info.branding.fldrSelBkgrnd);  }
  }

  
  ptUtil.removeClass(selNode,ptNav2Info.branding.selected);  if (ptNav2Info.selectedId.indexOf(ptNav2.crefLiIdPrefix) > -1)
 ptNav2.removeSelectedText(selNode.firstChild.firstChild);  else
 ptNav2.removeSelectedText(selNode.firstChild);   }
  }
 }, 

 
 addSelectedText : function(aLink) {
 if (ptNav2Info.accessSelectedTxt !== "")
 aLink.nodeValue = ptNav2Info.accessSelectedTxt + " " + aLink.nodeValue; },

 
 removeSelectedText : function (aLink) {
 if ((ptNav2Info.accessSelectedTxt !== "") && (aLink.nodeValue.search(ptNav2Info.accessSelectedTxt) !== -1))
 aLink.nodeValue = aLink.nodeValue.slice(ptNav2Info.accessSelectedTxt.length + 1); },


 
 
 cxmScrollPgltIntoView : function () {
 
  var ptcxmtpanchors = ptUtil.getElemsByClass("ptcxmfocus","","a");  if (ptcxmtpanchors && ptcxmtpanchors.length != 0) {
  if (ptUtil.isClassMember(ptcxmtpanchors[0],"ptcxmfocus")) {
  ptcxmtpanchors[0].scrollIntoView();  }
 } else {
 ptNav2.scrollObjIntoView(); }
 },

 
 scrollObjIntoView : function() {

 if (ptNav2Info.selectedId !== "") {

 var selNode = ptUtil.id(ptNav2Info.selectedId); if (selNode) {
 var isCref = ptUtil.isClassMember(selNode,ptNav2Info.branding.cref);  if (browserInfoObj2.isSafari) {
 ptNav2.safariScrollObj(selNode,isCref); return; }

 if ("ltr" === "ltr") {

 
 if (isCref) {

 
 
 if (selNode.parentNode.id !== ptNav2.root) {
 selNode = selNode.parentNode.parentNode.firstChild; }

 
 
 } else {
 selNode = selNode.parentNode.firstChild; }

 
 
 
 if (selNode.nodeType !== 1) {
 selNode = selNode.nextSibling; while (selNode && selNode.nodeType !== 1) {
 selNode = selNode.nextSibling; }
 }

 
 function scrollIntoViewPers(element, container) {
 var elemPos = 0, elem = element; while(elem.id != container.id) {
 elemPos += elem.offsetTop; elem = elem.parentNode; }
 container.scrollTop = elemPos - 2;  };  try {
 if (ptUtil.id("ptifrmnav") && ptUtil.id("pthdr2srchpromptdiv_GBL")) {
 scrollIntoViewPers(selNode, top.document.getElementById("ptifrmnav"));  }
 else {
 selNode.scrollIntoView(); }
 } catch (e) {} 

 } else {
 
 
 var crefAnc;  if (isCref) {

 
 
 if (selNode.parentNode.id === ptNav2.root) {

 
 
 crefAnc = selNode.firstChild; while (crefAnc && crefAnc.nodeName.toLowerCase() !== "a") {
 crefAnc = crefAnc.nextSibling; }
 } else {
 
 
 crefAnc = ptUtil.id(ptNav2.fldrAncIdPrefix + selNode.parentNode.parentNode.id); }
 } else {
 
 
 if (selNode.parentNode.parentNode.id === ptNav2.root) {
 crefAnc = selNode; } else {
 
 
 crefAnc = ptUtil.id(ptNav2.fldrAncIdPrefix + selNode.parentNode.parentNode.parentNode.id); }
 }

 if (crefAnc && crefAnc.nodeName.toLowerCase() === "a") {
 crefAnc.scrollIntoView(); }
 }
 }
 } else {
 
 
 if (parent.document.ptnav2srchform) {

 
 
 try {
 parent.document.ptnav2srchform[0].focus(); } catch (e) {}

 
 } else if (parent.document.searchhdr) {
 parent.document.searchhdr[0].focus();  } else {
 var l = document.links[0]; if (l && l.style.visibility !== "hidden") {
 l.focus(); }
 }
 }
 },

 
 
 
 safariScrollObj : function (selNode,isCref) {

 var safariTimer = setInterval(function () {

 
 if (document.readyState == "loaded" || document.readyState == "complete") {

 
 clearInterval(safariTimer); safariTimer = null;  if (isCref) {
 
 
 if (selNode.parentNode.id !== ptNav2.root) {
 selNode = selNode.parentNode.parentNode.firstChild; }
 } else {
 
 
 selNode = selNode.parentNode.firstChild; }
 selNode.scrollIntoView(); }
 }, 5);  },

 
 iframeDoClick : function (tgt) {

 
 if (ptUtil.isClassMember(tgt,"ptntop")) {
 window.open(tgt.href,"_self"); return; }

 
 
 var result = tgt.href.search(/\/e\/\?url=([^&$]*)/); var newURL; if (result > -1) {
 newURL = decodeURIComponent(String(RegExp.$1)); } else {
 newURL = String(tgt.href).replace('\/psp\/','\/psc\/'); }

 
 
 
 
 var isFavNavColl = false; var navColl = tgt.id.indexOf(ptNav2.fldrAncIdPrefix) > -1 ; var updTgtFrame = false; var currNode; var prevSelNode;  var selectedElem;  if (!navColl) {

 

 
 if (ptNav2Info.selectedId !== "") {

 
 if (ptNav2Info.selectedId.indexOf(ptNav2.fldrAncIdPrefix) > -1) {

 
 if (tgt.parentNode.parentNode.id === ptNav2.root) {

 
 while (ptNav2Info.selectedId !== "") {
 currNode = ptUtil.id(ptNav2Info.selectedId).parentNode; ptNav2.doFldrClick(currNode); }
 } else {

 prevSelNode = ptUtil.id(ptNav2Info.selectedId);    if (prevSelNode.parentNode.parentNode.parentNode.id === 
 tgt.parentNode.parentNode.parentNode.id) {
 ptNav2.doFldrClick(prevSelNode.parentNode)
 }

 
 selectedElem = ptUtil.id(ptNav2Info.selectedId);  ptUtil.removeClass(selectedElem,ptNav2Info.branding.selected); ptNav2.removeSelectedText(selectedElem.firstChild);  }
 } else {
 

 
 if (tgt.parentNode.parentNode.id === ptNav2.root) {

 
 ptNav2.removeSelectedClass();   currNode = ptUtil.id(ptNav2Info.selectedId); if (currNode && currNode.parentNode.id !== ptNav2.root) { 
 
 ptNav2Info.selectedId = ptNav2.fldrAncIdPrefix + currNode.parentNode.parentNode.id; while (ptNav2Info.selectedId !== "") {
 currNode = ptUtil.id(ptNav2Info.selectedId).parentNode; ptNav2.doFldrClick(currNode); }
 }
 else if (!currNode && (ptNav2Info.topParentId !== "") && ptUtil.id(ptNav2Info.topParentId)) {
 
 currNode = ptUtil.id(ptNav2Info.topParentId).parentNode;  ptNav2.doFldrClick(currNode);  }

 } else {
 currNode = ptUtil.id(ptNav2Info.selectedId);    var newTgtParent = tgt.parentNode.parentNode.parentNode.id; if (currNode.parentNode.parentNode.id === newTgtParent) {
 ptUtil.removeClass(currNode,ptNav2Info.branding.selected); ptNav2.removeSelectedText(currNode.firstChild.firstChild);  } else {

 
 ptNav2.removeSelectedClass();  ptNav2.doFldrClick(currNode.parentNode.parentNode); }
 }
 }
 }

 
 ptNav2Info.selectedId = tgt.parentNode.id; selectedElem = ptUtil.id(ptNav2Info.selectedId);  ptNav2.addSelectedText(selectedElem.firstChild.firstChild);   ptUtil.addClass(selectedElem,ptNav2Info.branding.selected); updTgtFrame = true; } else {
 

 if (ptNav2Info.selectedId.indexOf(ptNav2.crefLiIdPrefix) > -1) {

 

 
 ptNav2.removeSelectedClass(); currNode = ptUtil.id(ptNav2Info.selectedId); if (currNode) { 
 
 
 if (currNode.parentNode.id === ptNav2.root || 
 tgt.parentNode.parentNode.id === ptNav2.root) {
 ptNav2.doFldrClick(tgt.parentNode,true);   } else if (currNode.parentNode.parentNode.id === tgt.parentNode.id) {

 
 ptNav2Info.selectedId = tgt.id; ptNav2.setFldrBkgrnd();   selectedElem = ptUtil.id(ptNav2Info.selectedId);  ptUtil.addClass(selectedElem,ptNav2Info.branding.selected); ptNav2.addSelectedText(selectedElem.firstChild);     } else if (currNode.parentNode.parentNode.id === tgt.parentNode.parentNode.parentNode.id) {

 
 
 ptNav2Info.selectedId = ptNav2.fldrAncIdPrefix + currNode.parentNode.parentNode.id; ptNav2.doFldrClick(tgt.parentNode,true);   } else {

 
 
 ptNav2Info.selectedId = ptNav2.fldrAncIdPrefix + currNode.parentNode.parentNode.id;  var newTgtParent = tgt.parentNode.parentNode.parentNode.id

 
 
 while (currNode.parentNode.parentNode.id !== newTgtParent) {
 currNode = ptUtil.id(ptNav2Info.selectedId).parentNode; ptNav2.doFldrClick(currNode); }

 
 ptNav2.doFldrClick(tgt.parentNode,true); }
 } 
 else if (!currNode && (ptNav2Info.topParentId !== "")) {
 currNode = ptUtil.id(ptNav2Info.topParentId).parentNode;  ptNav2.doFldrClick(currNode);  }
 updTgtFrame = true; } else {

  if (ptNav2Info.selectedId === "") {

 

 var re = new RegExp("[?&]" + "pt_fname" + "=([^&$]*)", "i");   if (!(ptNav2.iframe.src.search(re) > -1) || 
 tgt.id !== ptNav2.fldrAncIdPrefix + RegExp.$1) {
 updTgtFrame = true; }

 ptNav2.doFldrClick(tgt.parentNode,true); } else if (ptNav2Info.selectedId !== tgt.id) {

 

 
 
 if (!ptUtil.isClassMember(tgt.parentNode,ptNav2Info.branding.fldrOpen)) {
 ptNav2.doFldrClick(tgt.parentNode,true); } else {

 
 while (ptNav2Info.selectedId !== tgt.id) {
 currNode = ptUtil.id(ptNav2Info.selectedId).parentNode; ptNav2.doFldrClick(currNode,true); }
 }

 updTgtFrame = true; } else {

 
 

 
 

 
 
 
 
 
 var re = new RegExp("[?&]" + "pt_fname" + "=([^&$]*)", "i"); var isTgtNavColl = ptNav2.iframe.src.search(re) > - 1; if (!isTgtNavColl) {

 
 
 if (!ptUtil.isClassMember(tgt.parentNode,ptNav2Info.branding.fldrOpen)) {
 ptNav2.doFldrClick(tgt.parentNode,true); }

 updTgtFrame = true; } else {
 
 

 
 var clickedFldr = ptNav2Info.selectedId.substr(ptNav2.fldrAncIdPrefix.length); if (clickedFldr !== RegExp.$1) {
 updTgtFrame = true; }
 }
 }
 }
 }

 if (updTgtFrame) {
 ptNav2.iframeUpdate(newURL,navColl,tgt); }

 return false; },

 
 iframeUpdate : function (newURL,navColl,tgt) {

 
 var title = browserInfoObj2.isIE ? tgt.innerText : tgt.textContent; ptNav2.iframe.src = newURL; document.title = title; if (!navColl) {
 
 if (ptNav2Info.selectedId.indexOf(ptNav2.favLiIdPrefix) > -1) {
 ptNav2.iframeObjName = ptNav2Info.selectedId.substr(ptNav2.favLiIdPrefix.length); } else {
 ptNav2.iframeObjName = ptNav2Info.selectedId.substr(ptNav2.crefLiIdPrefix.length); }

 
 
 ptNav2.scrollObjIntoView(); } else {
 ptNav2.iframeObjName = tgt.parentNode.id; }

 
  if (ptNav2Info.autoMenuCollapse == "True") 
 ptIframe.toggleNav(true);    if (ptNav2.iframeObjName !== "PT_PORTAL_EDIT_FAV_GBL") {

 if (ptNav2.iframeObjName !== "PT_PORTAL_ADD_FAV_GBL") {
 
 ptNav2.atfShow();   try {
 ptIframeHdr.updAddToFavPopup(title,ptNav2.iframeObjName,navColl); ptIframeHdr.atfShow(); } catch (err) {}
 }
 } else {

 
 ptNav2.atfHide()

 
 try {
 ptIframeHdr.atfHide(); } catch (err) {}
 }

 
 if (ptIframe && ptIframe.rc) {
 ptIframe.rc.cleanup(); }

 },

 
 forceNavFavUpdate : function () {

 
 var myFav = ptUtil.id("MYFAVORITES"); if (!myFav) { return; }

 
 
 
 
 if (ptUtil.isClassMember(myFav,ptNav2Info.branding.fldrClose)) {
 
 try {
 var ulNode = ptNav2.findChildNode(myFav,"ul"); myFav.removeChild(ulNode); } catch (e) {}

 
 
 
 ptUtil.removeClass(myFav,ptNav2Info.branding.fldrClose);  } else if (ptUtil.isClassMember(myFav,ptNav2Info.branding.fldrOpen)) {

 

 
 ptNav2.doFldrClick(myFav);  try {
 var ulNode = ptNav2.findChildNode(myFav,"ul"); myFav.removeChild(ulNode); } catch (e) {}

 
 ptUtil.removeClass(myFav,ptNav2Info.branding.fldrClose);  ptNav2.doFldrClick(myFav); }
 },

 
 atfShow : function () {

 
 var myFav = ptUtil.id("MYFAVORITES"); if (!myFav) { return; }

 var atfLink = ptUtil.id(ptNav2.crefLiIdPrefix + "PT_PORTAL_ADD_FAV_GBL");  if (ptUtil.isClassMember(myFav,ptNav2Info.branding.fldrOpen)) {

 if (atfLink) {
 if (ptUtil.getCSSValue(atfLink,"display") === "none") {
 atfLink.style.display = "list-item"; }
 } 
 }
 },

 
 atfHide : function () {

 var atfNode = ptUtil.id(ptNav2.crefLiIdPrefix + "PT_PORTAL_ADD_FAV_GBL"); if (atfNode) {
 atfNode.style.display = "none"; }
 },

 
 
 
 
 
 
 findChildNode : function (pNode,cTagName) {

 if (!pNode || !cTagName || cTagName === "") { return }; var cNode = pNode.firstChild; while (cNode) {
 if (cNode.nodeName.toLowerCase() === cTagName ) {
 break; }
 cNode = cNode.nextSibling; }
 return cNode; },

 
 
 forceNavEditFavUpdate : function () {

 
 var myFav = ptUtil.id("MYFAVORITES"); if (!myFav) { return; }

 
 ptNav2.doFldrClick(myFav);  try {
 var ulNode = ptNav2.findChildNode(myFav,"ul"); myFav.removeChild(ulNode); } catch (e) {}

 
 ptUtil.removeClass(myFav,ptNav2Info.branding.fldrClose);   var templateType = ptNav2.iframe ? "IFRM" : ""; var fldrId = myFav.id; var ajaxUrl = ptNav2.serviceURI + "?pt_fname=" + fldrId + "&mode=x" + "&templatetype=" + templateType + "&templateid=" + this.templateId + ptNav2Info.userLang; if (ptNav2Info.accessSelectedTxt !== "")
 ajaxUrl += "&ptlayout=A";  var currNode = myFav; var editFavLoader = new net2.ContentLoader(
 ajaxUrl, 
 null, 
 fldrId, 
 "GET",
 function () {
 if (ptNav2.checkSignonResponse(this.req.getResponseHeader("RespondingWithSignonPage")))
 return;  var respHTML = this.req.responseText;  ptNav2.removeSelectedClass();  ptNav2Info.selectedId = ptNav2.fldrAncIdPrefix + currNode.id;  ptUtil.addClass(ptUtil.id(ptNav2.fldrAncIdPrefix + currNode.id),ptNav2Info.branding.selected);   ptUtil.appendHTML(currNode,respHTML); ptUtil.addClass(currNode,ptNav2Info.branding.fldrOpen);  ptNav2.setFldrBkgrnd();  ptNav2.addEvents(currNode.lastChild);   ptUtil.removeClass(ptUtil.id(ptNav2.fldrAncIdPrefix + myFav.id),
  ptNav2Info.branding.selected);  ptNav2Info.selectedId = ptNav2.favLiIdPrefix + "PT_PORTAL_EDIT_FAV_GBL";  ptUtil.addClass(ptUtil.id(ptNav2Info.selectedId),ptNav2Info.branding.selected);  ptNav2.atfHide();  if (typeof ptIframeHdr !== "undefined" && ptIframeHdr.favListReload) {
 ptIframeHdr.favListReload(); }
 },
 null,
 null, 
 "application/x-www-form-urlencoded"
 ); editFavLoader = null; },

 langRefresh : function (lang) {

  var selNode = ptUtil.id(ptNav2Info.selectedId); if (!selNode) { return; }

 
 
 var ajaxUrl = ptBaseURI + "s/WEBLIB_PT_NAV.ISCRIPT1.FieldFormula.IScript_PT_LangChange" + 
 "?lang=" + lang; var langLoader = new net2.ContentLoader(
 ajaxUrl, 
 null, 
 null, 
 "GET",
 function () {

 
 
 
 
 ptNav2Info.userLang = this.req.responseText; var refreshURL = selNode.firstChild.href + ptNav2Info.userLang;  if (ptNav2.iframe) {
 window.location.href = refreshURL;  } else {
 parent.document.location.href = refreshURL; }

 },
 null,
 null, 
 "application/x-www-form-urlencoded"
 ); langLoader = null; },

 
 addBlock : function (loadingNode,blockedNode,loadingStyle) {

 if (!loadingNode || !blockedNode) { return; }

 var block; (function() {
 try {
 block = ptNav2.blockParent.removeChild(ptNav2.block); } catch(e) {
 setTimeout(arguments.callee,0); return; }
 blockedNode.appendChild(block); block.style.height = blockedNode.offsetHeight + "px"; block.style.width = blockedNode.offsetWidth + "px"; block.style.display = "block";      if (loadingStyle) {
 ptUtil.addClass(loadingNode,loadingStyle); }

 })(); },

 
 removeBlock : function (loadingNode,blockedNode,loadingStyle) {

 if (!loadingNode || !blockedNode) { return; }

 var block = blockedNode.removeChild(ptNav2.block); ptNav2.blockParent.appendChild(block); block.style.display = "none";  block.style.height = 0; block.style.width = 0; if (loadingStyle) {
 ptUtil.removeClass(loadingNode,loadingStyle); }
 }
}; function keyHandler(keyCode, isAltKey, isCtrlKey) {

 var actualKeyCode = keyCode | 0x40;  if (isCtrlKey && actualKeyCode == 90) {

 
 var subFrame = parent.document.getElementById("SubFrame"); if (subFrame) { 

 
 var noCols = "0,*"; if("ltr" === "rtl") {
 noCols = "*,0"; }

 
 
 
 
 if (subFrame.cols !== noCols) {
 ptNav2.setSearchFocus(); } else {

 var hdrFrame = parent.frames["UniversalHeader"]; if (hdrFrame && !isCrossDomain(hdrFrame)) {
  if (hdrFrame.keyHandler) {
 if (hdrFrame.keyHandler(89, isAltKey, isCtrlKey)) {
 ptNav2.setSearchFocus(); }
 }
 }
 }
 }
 }

 return false;}











function parentKeyHandler(currFrame, keyCode, isAltKey, isCtrlKey) {

 var tgtFrame; for (var i = 0; i < parent.frames.length; i++) {

  tgtFrame = parent.frames[i];  if (tgtFrame.name != "NAV") {
  if (isCrossDomain(tgtFrame))
  continue; }

 if (tgtFrame.name != currFrame.name) {

 
 if (tgtFrame.keyHandler) {

 
 if (tgtFrame.keyHandler(keyCode, isAltKey, isCtrlKey)) {
 return true; }
 }
 }
 }
}



ptEvent.load(ptNav2.init);