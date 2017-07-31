
var thisGetContxtRoot = function(strURL) {
 var root = ""; var rootIdx = strURL.indexOf("://"); if (rootIdx != -1) {
 root = strURL.substr(rootIdx + 3); var srvlet = String(root).match(/\/ps(c|p)\//); if (srvlet != null) {
 rootIdx = root.indexOf("/"); if (rootIdx != -1)
 root = root.substr(rootIdx, srvlet.index - rootIdx); }
 }
 return root;};function getptBaseURI()
{
 var ptBaseURI = ""; var nPos = String(location).indexOf('\/psp\/'); if (nPos != -1)
 {
 ptBaseURI = String(location).substr(nPos,String(location).length); var addressLoc = String(ptBaseURI).match(/\/ps(c|p)\/?([^\/]*)?\/?([^\/]*)?\/?([^\/]*)?\//); if (addressLoc)
 ptBaseURI = addressLoc[0].replace('\/psp\/','\/psc\/'); else 
 ptBaseURI = ""; }
 else 
 ptBaseURI = String(location).match(/\/ps(c|p)\/?([^\/]*)?\/?([^\/]*)?\/?([^\/]*)?\//)[0].replace('psp','psc'); ptBaseURI = thisGetContxtRoot(String(location)) + ptBaseURI; return ptBaseURI;}


var currURL = document.location.href;if (currURL.indexOf("&psredirecttop=y") !== -1) { 
 
 currURL = currURL.replace("&psredirecttop=y", "");  top.location.href = currURL; }


var ptBaseURI = getptBaseURI();var ptIframeHdr = {
 isHomepage: /\/h\/\?tab=/.test(location),
 quirksMode: document.compatMode != "CSS1Compat",
 favPopup : null,
 favContentOptions : null,
 isFavFirstTime : true,
 favDescr : null,
 favOkBtn : null,
 uninav : null,
 uninavtarget : null,
 favCancelBtn : null,
 favObjName : null,
 popupExists: false,
 favList : [], 
 isNavColl : false, 
 navLabel : "", 
 navObjName : "", 
 linksParent: null, 
 hdrSrchAS: null, 
 isSmartNav : false,
 noDescrVal : false, 
 searchURI : ptBaseURI + "s/WEBLIB_PORTAL.PORTAL_SEARCH_PB.FieldFormula.ISCRIPT_PortalSearch",
 isSafariOniPad : false, 
 
 init: function() {
 
 
 ptIframeHdr.isSafariOniPad = browserInfoObj2.isiPad && browserInfoObj2.isSafari; ptIframeHdr.atfLink = ptUtil.id("pthdr2atf");   if (ptIframeHdr.atfLink) {
 ptIframeHdr.favContentOptions = {
 title : "", 
 focusEl : ptUtil.id("ptifrmatfdescr"),
  onOpen : ptIframeHdr.favInit, 
 onClose : ptIframeHdr.favClose 
 }; }
 ptIframeHdr.linksParent = ptUtil.id("pthdr2links");  ptIframeHdr.addEvents(); ptIframeHdr.rtlSetWidth();    var srchInput = ptUtil.id("pthdr2srchinput"); if (srchInput && typeof ptASObj !== "undefined") {
 var limit = parseInt(document.searchhdr.AS_LIMIT.value, 10); if (limit > 0 && ptIframeHdr.hdrSrchAS == null) {
 var asOptions = {
 searchURI: ptIframeHdr.searchURI + "?LIMIT=" + document.searchhdr.AS_LIMIT.value + "&SEARCH_TEXT="
 };   ptIframeHdr.hdrSrchAS = new ptASObj(srchInput, asOptions, "ptIfrmAS");  ptEvent.add(document,"click",ptIframeHdr.hdrSrchAS.clearSuggestions); }
 } 
 
 },

 addEvents: function() {

 
 if (this.linksParent) {
 var hdrLinks = this.linksParent.getElementsByTagName("a"); for (var i = 0; i < hdrLinks.length; i++) {
 ptEvent.add(hdrLinks[i],"click",this.onClickHdrLink); }
 }

 
 var hdrSearch = ptUtil.id("pthdr2srchinput"); if (hdrSearch) {
 ptEvent.add(hdrSearch,"focus",function () { 
 if (this.value === this.defaultValue) {
 this.value = "";  }
 });  var goButton = ptUtil.id("pthdr2go"); if (goButton) {
 ptEvent.add(goButton,"click",function () {
 var newHref = this.href + "?SEARCH_TEXT=" + encodeURI(document.searchhdr.SEARCH_TEXT_HDR.value);   if (!ptIframeHdr.isHomepage && !ptUtil.isClassMember(this,"pthns")) { 
 ptIframe.saveWarning(newHref); } else {
 window.open(newHref,"_parent"); }
 return false; }); }
 }
 },

 onClickHdrLink : function(e) {

 
 if (typeof(pthNav) !== "undefined" && !ptIframeHdr.isHomepage) { pthNav.mru.save(this); }

 switch(this.id) {
 case "pthdr2mcf":
 PopupMCFConsole(); break; case "pthdr2cti":
 PopupCTIConsole(); break; case "pthdr2ppm":
 PopupPPMConsole(); break; case "pthdr2atf": 
 
 if (ptIframeHdr.isAccessibility()) { 
 if (!ptIframeHdr.isHomepage && !ptUtil.isClassMember(this,"pthns")) { 
 ptIframe.saveWarning(this.href); } else {
 window.open(this.href,"_parent"); }
 return false;  }

 if (typeof ptIframe !== "undefined" && ptIframe.popup) {
 ptIframe.popup.open(ptIframeHdr.favContentOptions); } else if (ptIframeHdr.isHomepage) {
 if (typeof(ptIframeHdr.popup) === "undefined") { 
 var popup = ptUtil.id("ptifrmpopup"); if (popup) {
 ptIframeHdr.popup = new ptPopup(popup,{center:true,draggable:false,resizeable:false}); }
 }
 ptIframeHdr.popup.open(ptIframeHdr.favContentOptions); }
 break; default:
 
 if (!ptIframeHdr.isHomepage && !ptUtil.isClassMember(this,"pthns")) { 
 var linkId = this.id; if ((typeof(pthNav) !== "undefined" && typeof(pthNav.abn) !== "undefined") && 
 (linkId === "pthdr2home" || linkId === "pthdr2logout")) {
 ptIframe.saveWarning(this.href,function(tgt) {

 if (linkId === "pthdr2logout") {
 pthNav.abn.search.clearData(); } 
 open(tgt,"_parent"); }); } else if (typeof(ptIframe) !== "undefined") {
 ptIframe.saveWarning(this.href); } else if (typeof(saveWarning) !== "undefined") {
 
 saveWarning("TargetContent",document.forms[0],"_top",this.href)
 } else {
 open(this.href,"_parent"); }
 } else { 
 open(this.href,"_parent"); }
 } 
 return false; },

 
 favInit : function () {

 
 if (ptIframeHdr.isFavFirstTime) {

 if (typeof ptIframe !== "undefined") {
 ptIframeHdr.favPopup = ptIframe.popup; } else {
 ptIframeHdr.favPopup = ptIframeHdr.popup; }

 ptIframeHdr.favDescr = ptUtil.id("ptifrmatfdescr"); ptIframeHdr.favObjName = ptUtil.id("ptifrmatfname");  ptIframeHdr.favOkBtn = ptUtil.id("ptifrmatfok"); ptIframeHdr.favCancelBtn = ptUtil.id("ptifrmatfcancel");  var favList = ptUtil.id("ptifrmatflist"); if (favList && favList.value !== "") {
 ptIframeHdr.favList = favList.value.split(","); }

 
 ptIframeHdr.favAddEvents(); ptIframeHdr.isFavFirstTime = false; }

 
 if (ptIframeHdr.navLabel !== "" && ptIframeHdr.navObjName !== "") {
 ptIframeHdr.favDescr.value = ptIframeHdr.navLabel; ptIframeHdr.favObjName.value = ptIframeHdr.navObjName; }

 
 if (!ptIframeHdr.noDescrVal) { 
 
 if (ptIframeHdr.favDescr.value === "") { 
 ptIframeHdr.favPopup.error("","This page can\'t be added as a favorite, because it is not registered in this portal.",function(){},true); return; }
 } else {
 ptIframeHdr.noDescrVal = false; }

 
 ptEvent.add(document,"keydown",ptIframeHdr.favDoKeyDown); },

 
 
 favAddEvents : function () {
 ptEvent.add(ptIframeHdr.favOkBtn,"click",ptIframeHdr.favDoOk); ptEvent.add(ptIframeHdr.favOkBtn,"keydown",ptIframeHdr.favDoOk); ptEvent.add(ptIframeHdr.favCancelBtn,"click",ptIframeHdr.favDoCancel); ptEvent.add(ptIframeHdr.favCancelBtn,"keydown",ptIframeHdr.favDoCancel); ptEvent.add(ptIframeHdr.favDescr,"keydown",ptIframeHdr.favDoOk); },

 
 favDoKeyDown : function (e) {

 
 
 var tgtId = e.target.id; if (tgtId === ptIframeHdr.favDescr.id || 
 tgtId === ptIframeHdr.favOkBtn.id ||
 tgtId === ptIframeHdr.favCancelBtn.id) {

 var keyCode = ptUtil.getKeyCode(e); var isShiftKey = ptUtil.isShiftKey(e);  if (keyCode == 9) {
 if (!isShiftKey) {
 if (tgtId === ptIframeHdr.favDescr.id) {
 ptIframeHdr.setFocus(ptIframeHdr.favOkBtn); return false; } else if (tgtId === ptIframeHdr.favOkBtn.id) {
 ptIframeHdr.setFocus(ptIframeHdr.favCancelBtn); return false; } else if (tgtId === ptIframeHdr.favCancelBtn.id) {
 ptIframeHdr.setFocus(ptIframeHdr.favDescr); return false; }
 } else {
 if (tgtId === ptIframeHdr.favDescr.id) {
 ptIframeHdr.setFocus(ptIframeHdr.favCancelBtn); return false; } else if (tgtId === ptIframeHdr.favOkBtn.id) {
 ptIframeHdr.setFocus(ptIframeHdr.favDescr); return false; } else if (tgtId === ptIframeHdr.favCancelBtn.id) {
 ptIframeHdr.setFocus(ptIframeHdr.favOkBtn); return false; } 
 }
 
 } else if (keyCode == 13) {
 if (tgtId === ptIframeHdr.favOkBtn.id || tgtId === ptIframeHdr.favDescr.id) {
 ptIframeHdr.favOkBtn.handle.call(ptIframeHdr.favOkBtn,e); return false; } else if (tgtId === ptIframeHdr.favCancelBtn) {
 ptIframeHdr.favCancelBtn.handle.call(ptIframeHdr.favCancelBtn,e); return false; }
 
 } else if (keyCode == 27) {
 if (tgtId === ptIframeHdr.favOkBtn.id || 
 tgtId === ptIframeHdr.favDescr.id || 
 tgtId === ptIframeHdr.favCancelBtn.id) {
 ptIframeHdr.favCancelBtn.handle.call(ptIframeHdr.favCancelBtn,e); return false; }
 } 
 }
 return true; },

 
 favDoOk : function (e) {
 if (e.type === "click" || ptUtil.getKeyCode(e) == 13) {
 ptIframeHdr.checkAddToFav(); return false; } else if (ptUtil.getKeyCode(e) == 27) {
 ptIframeHdr.favPopup.close(); return false; }
 return true; },

 
 favDoCancel : function (e) {

 
 
 if (e.type === "click" || ptUtil.getKeyCode(e) == 13
 || ptUtil.getKeyCode(e) == 27) {
 ptIframeHdr.favPopup.close(); return false; }
 return true; },

 
 favOpen : function () {

 if (typeof ptIframe !== "undefined") {
 ptIframe.popup.close(); ptIframe.popup.open(ptIframeHdr.favContentOptions); } else {
 ptIframeHdr.popup.close(); ptIframeHdr.popup.open(ptIframeHdr.favContentOptions); }
 },

 
 favClose : function () {
 ptEvent.remove(document,"keydown",ptIframeHdr.favDoKeyDown); },

 
 setFocus : function (obj) {
 if (obj) { obj.focus(); }
 },

 
 checkAddToFav : function () {

 if (ptIframeHdr.favDescr && ptIframeHdr.favObjName) {

 
 if (ptIframeHdr.favDescr.value === "") {
 ptIframeHdr.noDescrVal = true; ptIframeHdr.favPopup.error("","The favorite description field is a required field.",ptIframeHdr.favOpen); return false; } else {
 
 for (var i = 0; i < ptIframeHdr.favList.length; i++) {
 if (ptIframeHdr.favDescr.value === ptIframeHdr.favList[i]) {
 ptIframeHdr.favPopup.prompt("","The description you have entered for the favorite already exists. Would you like to overwrite it?",
 "OK_CANCEL", ptIframeHdr.saveAddToFav, ptIframeHdr.favOpen,2); return false; }
 }
 }
 }
 ptIframeHdr.saveAddToFav(); },

 saveAddToFav : function () {

 var keys = "", 
 navColl = ptIframeHdr.isNavColl ? "true" : "false",
 smartNav = ptIframeHdr.isSmartNav ? "true" : "false"; if (!ptIframeHdr.isNavColl) {
 keys = encodeURIComponent(ptIframeHdr.getKeysForFav()); }

 
 var baseURI = getptBaseURI();  var lnode = ptIframeHdr.favDescr.attributes['lnode'].value; var rnode = ptIframeHdr.favDescr.attributes['rnode'].value; if (rnode != ""){
 var NodeUpdate = String(baseURI).indexOf('\/'+rnode+'\/'); if(NodeUpdate != -1)
 baseURI = String(baseURI).replace('\/'+rnode+'\/','\/'+lnode+'\/'); }

 
  var sVal = "", s = ptUtil.id("PTISSID");  if (s) { sVal = s.value; }

 var ajaxURL = baseURI + "s/WEBLIB_PTIFRAME.ISCRIPT1.FieldFormula.IScript_PT_AddToFav"
 + "?favdescr=" + encodeURIComponent(ptIframeHdr.favDescr.value)
 + "&favname=" + ptIframeHdr.favObjName.value
 + "&navcoll=" + navColl
 + "&keys=" + keys
 + "&uninav=" + ptIframeHdr.favDescr.attributes['uninav'].value
 + "&uninavtargetfav=" + ptIframeHdr.favDescr.attributes['uninavtargetfav'].value
 + "&smartnav=" + smartNav
 + "&PTISSID=" + sVal; var loader = new net2.ContentLoader(ajaxURL,null,null,"GET",
 function () {
 
 var favSaveMsg = this.req.responseText; if (favSaveMsg !== "") {
 
 ptIframeHdr.favList.push(ptIframeHdr.favDescr.value);  ptIframeHdr.favPopup.message("",favSaveMsg); } else {
 ptIframeHdr.favPopup.message("","A failure has occurred saving this favorite.  Please contact your portal administrator."); }
  }, null,null,"application/x-www-form-urlencoded"); loader = null;   if (typeof ptNav2 !== "undefined") {
 ptNav2.forceNavFavUpdate(); }

 if (typeof pthNav !== "undefined") { pthNav.forceNavFavUpdate(); }
 },

 
 updAddToFavPopup : function (favLabel,favObjName,isNavColl,srcURL,isSmartNav) {
 
 if (this.isAccessibility()) {
 if (this.atfLink && ptUtil.getCSSValue(this.atfLink,"display") !== "none") {
 var favURL = this.atfLink.href.split("?")[0]; this.atfLink.href = favURL + "?PortalContentURL=" + 
 encodeURIComponent(srcURL.split("?")[0]) + 
 "&PortalActualURL=" + encodeURIComponent(srcURL); }
 return; }

 ptIframeHdr.isSmartNav = (typeof(isSmartNav) !== "undefined" && isSmartNav) ? true : false; if (!favLabel || !favObjName) { return; }
 ptIframeHdr.navLabel = decodeURI(favLabel); ptIframeHdr.navObjName = favObjName; ptIframeHdr.isNavColl = isNavColl; },

 getKeysForFav : function () {

 var retVal = "", tgtFrame = parent.frames["TargetContent"]; if (tgtFrame && !isCrossDomain(tgtFrame) && tgtFrame.strCurrUrl) {

 var pos = tgtFrame.strCurrUrl.indexOf("?"); if (pos !== -1) {
 retVal = tgtFrame.strCurrUrl.slice(pos + 1); }
 }
 return retVal; },

 
 atfShow : function () {
 if (this.atfLink && ptUtil.getCSSValue(this.atfLink,"display") === "none") {
 this.atfLink.style.display = "block"; this.atfToggleSep("show"); }
 },

 
 atfHide : function() {
 if (this.atfLink && ptUtil.getCSSValue(this.atfLink,"display") !== "none") {
 this.atfLink.style.display = "none"; this.atfToggleSep(); }
 },

 
 atfToggleSep : function (show) {

 var sep = this.atfLink.parentNode.nextSibling;   while (sep) {
 if (sep.nodeName.toLowerCase() === "dt") {
 if (show) {
 sep.style.display = "block"; } else {
 sep.style.display = "none"; }
 return; }
 sep = sep.nextSibling; }
 },

 
 
 
 rtlSetWidth : function () {
 if (("ltr" === "rtl" && browserInfoObj2.isIE) && 
 (this.quirksMode || !document.documentMode)) {

 
 if (this.linksParent) {
 var liEls = this.linksParent.getElementsByTagName("dt"); if (liEls.length !== 0) {
 
 var lastLi = liEls[liEls.length - 1]; var mWidth = parseInt(ptUtil.getCSSValue(lastLi,"marginLeft")) * 2;   this.linksParent.style.width = liEls[0].getBoundingClientRect().right -
 lastLi.getBoundingClientRect().left + mWidth + "px"; }
 }
 }
 },

 
 
 favListReload : function () {

 var baseURI = getptBaseURI(); var ajaxURL = baseURI + "s/WEBLIB_PTIFRAME.ISCRIPT1.FieldFormula.IScript_PT_AddToFavList"; var listLoader = new net2.ContentLoader(ajaxURL,null,null,"GET",
 function () {
 var favList = this.req.responseText;  ptIframeHdr.favList.splice(0);   if (favList !== "") { ptIframeHdr.favList = favList.split(","); }
  },null,null,"application/x-www-form-urlencoded"); listLoader = null; },
 
 isAccessibility : function () {
 if (typeof(this.isAccessible) === "undefined") { 
 if (typeof(ptNav2Info) !== "undefined" && ptNav2Info.accessSelectedTxt !== "") {
 this.isAccessible = true; } else {
 this.isAccessible = false; }
 }
 return this.isAccessible; }

}; if (typeof(ptEvent) !== "undefined" && !ptIframeHdr.linksParent) {
 ptEvent.load(ptIframeHdr.init);} 


var ptPopup = function (el,options) {
 
 var popupDefaults = {
 center : true,
 draggable : false,
 resizeable : false 
 };  var contentDefaults = {
 title : "", 
 focusEl : null, 
 onOpen : function () {}, 
 onClose : function () {}, 
 onResize : null 
 }; var popup = {
 element : el, 
 popupDiv : null, 
 options : options, 
 mask : null, 
 msgTitle : null, 
 msg : null, 
 msgText : null, 
 msgBtns : null, 
 msgBtn1 : null, 
 btnBtn2 : null, 
 titleClose : null, 
 content : null, 
 contentOptions : null, 
 container : null,
 layoutTbl : null,
 isHidden : true, 
 centerPopup : true, 
 quirksMode: document.compatMode != "CSS1Compat", 
 fatalError: false,

 init : function () {

 
 
 if (this.element) {
 this.popupDiv = ptUtil.id("ptpopup"); if (this.popupDiv) {
 
 this.titleClose = ptUtil.id("ptpopupclose"); this.msgBtns = ptUtil.id("ptpopupmsgbuttons"); this.msgText = ptUtil.id("ptpopupmsgtext"); this.msgBtn1 = ptUtil.id("ptpopupmsgbtn1"); this.msgBtn2 = ptUtil.id("ptpopupmsgbtn2"); this.content = ptUtil.id("ptpopupcontent"); this.container = ptUtil.id("ptpopupcontainer"); this.layoutTbl = ptUtil.id("ptpopuplayouttbl"); this.msg = ptUtil.id("ptpopupmsg"); this.msgTitle = ptUtil.id("ptpopoptitle"); if (this.quirksMode) { this.shadow = ptUtil.id("ptpopupshadow"); }
 this.createMask(); this.addEvents(); } else {
 
 
 
 this.createMask(); this.build(); }
 } else {
 return; }

 if (!this.options) { this.options = popupDefaults; }

 if (this.options.draggable) {
 this.msgTitle.style.cursor = "move"; this.dragResize.init(this.msgTitle); }
 this.centerPopup = this.options.center; },

 build : function (ajaxReq) {
 var baseURI = getptBaseURI(); var ajaxURL = baseURI + "s/WEBLIB_PTIFRAME.ISCRIPT1.FieldFormula.IScript_PT_Popup"
  + "?apppkgpath=" + this.options.appPkgPath
 + "&params=" + this.options.params
 + "&title=" + this.options.title
 + "&btntype=" + this.options.buttonType
 + "&customtitlebtns=" + this.options.customTitleBtns; var loader = new net2.ContentLoader(ajaxURL,null,null,"GET",
 function () {

 
 
 var popupHTML = this.req.responseText;  ptUtil.appendHTML(popup.element,popupHTML);  popup.titleClose = ptUtil.id("ptpopupclose"); popup.msgBtns = ptUtil.id("ptpopupmsgbuttons"); popup.msgText = ptUtil.id("ptpopupmsgtext"); popup.msgBtn1 = ptUtil.id("ptpopupmsgbtn1"); popup.msgBtn2 = ptUtil.id("ptpopupmsgbtn2"); popup.content = ptUtil.id("ptpopupcontent"); popup.msg = ptUtil.id("ptpopupmsg"); popup.addEvents(); },null,null,"application/x-www-form-urlencoded"); },

 
 createMask : function () {

 
 var maskDiv = document.createElement("div"); maskDiv.innerHTML = "<div id='ptpopupmask'>&nbsp;</div>"; maskDiv = maskDiv.firstChild; maskDiv.style.display = "none";    if (browserInfoObj2.isIE && (this.quirksMode || !document.documentMode)) {

 
 
 document.body.appendChild(this.element); this.element.insertBefore(maskDiv,this.element.firstChild); } else {
 document.body.insertBefore(maskDiv,document.body.firstChild); }
 this.mask = maskDiv; },

 addEvents : function () {
 
 if (this.titleClose) { ptEvent.add(this.titleClose,"click",this.hide); }
 },

 show : function () {
 try {
 popup.mask.style.display = "block"; popup.content.style.display = "block"; popup.element.style.display = "block"; popup.isHidden = false; } catch (e) {}
 return false; },

 hide : function () {

 try {
 popup.mask.style.display = "none"; popup.element.style.display = "none";  popup.container.style.width = "auto"; popup.container.style.height = "auto"; popup.element.style.width = "auto"; popup.element.style.height = "auto"; popup.element.style.top = "0px"; popup.element.style.left = "0px"; popup.isHidden = true; popup.contentOptions.onClose.call(); } catch (e) {}
 return false; },

 center : function(isResize) {

 if (!this.element) { return; }

 
 var d = ptUtil.winSize(); var popupHeight = this.element.offsetHeight; var oShim = 10;  if (ptIframeHdr.isSafariOniPad) {
 if (popupHeight > d.height || popupWidth > d.width) {

 this.container.style.width = "auto"; this.container.style.height = "auto"; this.element.style.width = "auto"; this.element.style.height = "auto"; var popLeft, popTop = 50, popWidth = this.element.offsetWidth; if (popWidth < d.width) {
 popLeft = (d.width / 2) - (popWidth / 2);  } else {
 popLeft = popTop;  }

 this.element.style.top = popTop + "px"; this.element.style.left = popLeft + "px"; return; }
 }

 if (typeof(isResize) !== "undefined") {

 var cHeight = d.height - (oShim * 2);   if (browserInfoObj2.isIE && (this.quirksMode || !document.documentMode)) {

 this.container.style.width = "auto"; this.container.style.height = "auto"; this.element.style.width = "auto"; this.element.style.height = "auto"; this.contentOptions.onResize.call(this,0,cHeight,isResize); } else {
  this.contentOptions.onResize.call(this,0,cHeight,isResize); if (popupHeight === this.element.offsetHeight) { return; }
 }
 
 popupHeight = this.element.offsetHeight; }

 
 var popupWidth = this.element.offsetWidth; if ((popupHeight > d.height || popupWidth > d.width) && typeof(isResize) === "undefined") {

 var cHeight = d.height - (oShim * 2); if (browserInfoObj2.isiPad && browserInfoObj2.isSafari) 
 cHeight = popupHeight;  var cWidth = d.width - (oShim * 2); if (this.contentOptions.onResize) {
 this.contentOptions.onResize.call(this,cWidth,cHeight,isResize); popupHeight = this.element.offsetHeight; popupWidth = this.element.offsetWidth; }
 }

 
 
 var ieSetWidth = function () {
 var c = popup.container; if (popup.quirksMode) {
 popupWidth = popup.getIEPopupWidth(); c.style.width = popupWidth + "px";    } else if (!document.documentMode || document.documentMode === 7) {
 c.style.width = popup.layoutTbl.offsetWidth + "px"; popupWidth = popup.element.offsetWidth; }
 }; var ieSetHeight = function () {
 if (popup.quirksMode) {
 
 
 popup.shadow.style.height = popupHeight + "px"; popup.shadow.style.width = popupWidth + "px"; } 
 }; var popupTop, popupLeft; if (popupHeight > d.height || popupWidth > d.width) {

 if (browserInfoObj2.isIE) {
 ieSetWidth(); ieSetHeight(); }

 popupTop = oShim; if (popupWidth < d.width) {
 popupLeft = (d.width / 2) - (popupWidth / 2);  } else {
 popupLeft = oShim;  }

 this.element.style.top = popupTop + "px"; this.element.style.left = popupLeft + "px"; } else {

 if (browserInfoObj2.isIE) {
 ieSetWidth(); ieSetHeight(); }

 popupTop = (d.height / 2) - (popupHeight / 2); popupLeft = (d.width / 2) - (popupWidth / 2); this.element.style.top = popupTop + "px"; this.element.style.left = popupLeft + "px"; }

 
 
 if (!browserInfoObj2.isIE && this.quirksMode) {
 popup.mask.style.position = "fixed"; }

 
 
 if (browserInfoObj2.isIE && (this.quirksMode || !document.documentMode)) {
 this.setIEMaskProps(-popupTop,-popupLeft,-1,d.height,d.width); }
 },

 
 getIEPopupWidth : function () {

 if (!browserInfoObj2.isIE) { return; }

 if (this.isHidden) { 
 popup.element.style.visibility = "hidden"; popup.element.style.display = "block"; }

 var popupWidth, c = this.container; if (this.quirksMode) {

 
 
 var cWidth = c.offsetWidth - c.clientWidth;  cWidth += parseFloat(c.currentStyle["paddingLeft"]) + parseFloat(c.currentStyle["paddingRight"]); cWidth += parseFloat(c.currentStyle["marginLeft"]) + parseFloat(c.currentStyle["marginRight"]); popupWidth = this.layoutTbl.offsetWidth + cWidth;    } else if (!document.documentMode || document.documentMode === 7) {
 var currWidth = c.currentStyle["width"]; c.style.width = popup.layoutTbl.offsetWidth + "px"; popupWidth = this.element.offsetWidth; c.style.width = currWidth; } else { 
 popupWidth = this.element.offsetWidth; }

 if (this.isHidden) {
 popup.element.style.visibility = ""; popup.element.style.display = "none"; }
 return popupWidth; },

 
 
 setIEMaskProps : function (t,l,z,h,w) {

 if (t === "undefined" || l === "undefined" || z === "undefined") { return; }
 var pms = popup.mask.style; pms.top = t + "px"; pms.left = l + "px"; pms.zIndex = z; if (typeof(h) !== "undefined" && !ptIframeHdr.isHomepage) { 
 pms.height = h + "px";  } 
 else {
 pms.height = document.body.scrollHeight + "px";  }
 if (typeof(w) !== "undefined" && !ptIframeHdr.isHomepage) { 
 pms.width = w + "px";  }
 else {
 pms.width = document.body.scrollWidth + "px";  }
 },

 
 
 trapClick : function (e) {

 if (e.target.id === popup.mask.id) {

 
 if (ptUtil.getCSSValue(popup.msg,"display") !== "none") {
 popup.tryFocus(popup.msgBtn1); return false; } else {

 
 popup.tryFocus(popup.content.getElementsByTagName("input")[0]); return false
 }
 } 
 return true; },

 tryFocus : function (obj) {

 if (obj && typeof obj.focus !== "undefined") {
 try {
 obj.focus(); } catch(err){}
 }
 },

 
 
 trapKeyDown : function (e) {

 if (ptUtil.getCSSValue(popup.msg,"display") !== "none") {
 var keyCode = ptUtil.getKeyCode(e);  if (ptUtil.getCSSValue(popup.msg,"display") !== "none") {
 
 if (keyCode == 13 || keyCode == 27) {
 popup.msgBtn1.handle.call(popup.msgBtn1,e); return false; } else {
 popup.msgBtn1.focus(); return false; } 
 }
 }
 return true; },

 
 
 swapHandlers : function (msgObj,show) {

 if (show) {

 
 ptEvent.add(document,"click",popup.trapClick); ptEvent.add(document,"keydown",popup.trapKeyDown);  ptEvent.add(popup.msgBtn1,"click",msgObj.doOk); ptEvent.add(popup.msgBtn1,"keydown",msgObj.doOk);  ptEvent.remove(popup.titleClose,"click",popup.hide); ptEvent.add(popup.titleClose,"click",msgObj.doOk); } else {
 
 ptEvent.remove(document,"click",popup.trapClick); ptEvent.remove(document,"keydown",popup.trapKeyDown);  ptEvent.remove(popup.msgBtn1,"click",msgObj.doOk); ptEvent.remove(popup.msgBtn1,"keydown",msgObj.doOk);  ptEvent.remove(popup.titleClose,"click",msgObj.doOk); ptEvent.add(popup.titleClose,"click",popup.hide); }
 },

 
 error : {
 btn1Handler : null,
 btn1OrigFloatVal : "",
 show : function (title,msg,btn1Handler,fatalError) {

 if (!msg || !btn1Handler) { return; }
 if (popup.msg) {

 this.btn1Handler = btn1Handler;  popup.msgTitle.replaceChild(document.createTextNode(title),
 popup.msgTitle.firstChild); var msgText = document.createTextNode(msg);  popup.msgText.replaceChild(msgText,popup.msgText.firstChild);  this.btn1OrigFloatVal = ptUtil.getCSSValue(popup.msgBtn1,"float"); ptUtil.setCSSValue(popup.msgBtn1,"float","none");  popup.msgBtn2.parentNode.parentNode.style.display = "none";  ptUtil.swapClass(popup.msgBtns,"ptpopupmsgbtnsprompt","ptpopupmsgbtns"); popup.msgBtns.style.textAlign = "center"; popup.swapHandlers(this,true);  popup.content.style.display = "none"; popup.mask.style.display = "block"; popup.element.style.display = "block"; popup.msg.style.display = "block"; popup.center();  popup.msgBtn1.focus(); if (typeof(fatalError) !== "undefined" && fatalError) { popup.fatalError = true; }
 return false; }
 },

 doOk : function (e) {

 if (e.type === "click" || ptUtil.getKeyCode(e) == 13
 || ptUtil.getKeyCode(e) == 27) {

 
 ptUtil.setCSSValue(popup.msgBtn1,"float",popup.error.btn1OrigFloatVal); popup.msgBtn2.style.display = "inline-block"; popup.msgBtns.style.textAlign = "";  popup.msg.style.display = "none"; popup.element.style.display = "none"; popup.content.style.display = "block"; popup.mask.style.display = "none";  popup.swapHandlers(popup.error,false);   popup.error.btn1Handler.call(); return false; }
 return true; }
 }, 

 
 
 message : {
 btn1OrigFloatVal : "",
 show : function (title,msg) {

 if (!msg) { return; }
 if (popup.msg) {

 
 popup.msgTitle.replaceChild(document.createTextNode(title),
 popup.msgTitle.firstChild);  var msgText = document.createTextNode(msg); popup.msgText.replaceChild(msgText,popup.msgText.firstChild);  this.btn1OrigFloatVal = ptUtil.getCSSValue(popup.msgBtn1,"float"); ptUtil.setCSSValue(popup.msgBtn1,"float","none");  popup.msgBtn2.parentNode.parentNode.style.display = "none"; popup.swapHandlers(this,true);  popup.content.style.display = "none"; popup.mask.style.display = "block"; popup.element.style.display = "block"; popup.msg.style.display = "block";  popup.center();  var okAncWidth = popup.msgBtn1.parentNode.parentNode.offsetWidth; popup.msgBtns.style.marginLeft = (popup.msgText.offsetWidth - okAncWidth) / 2 + "px";  popup.msgBtn1.focus(); return false; }
 },

 
 doOk : function (e) {

 if (e.type === "click" || ptUtil.getKeyCode(e) == 13
 || ptUtil.getKeyCode(e) == 27) {

 ptUtil.setCSSValue(popup.msgBtn1,"float",popup.message.btn1OrigFloatVal); popup.msgBtn2.style.display = "inline-block"; popup.msgBtns.style.marginLeft = "0"; popup.msgBtns.style.textAlign = "";   popup.msg.style.display = "none"; popup.element.style.display = "none"; popup.content.style.display = "block"; popup.mask.style.display = "none";  popup.swapHandlers(popup.message,false); popup.hide(); return false; }
 return true; }
 }, 

 prompt : {
 btn1Handler : null,
 btn2Handler : null,
 btnFocus : null,
 popupHasContent : false,
 init : function (title,msg,btnType,btn1Handler,btn2Handler,btnFocus) {

 if (!msg || !btnType || !btn1Handler || !btn2Handler) { return; }

 this.btn1Handler = btn1Handler; this.btn2Handler = btn2Handler; if (!btnFocus) {
 this.btnFocus = popup.msgBtn1; } else {

 if (btnFocus === 1) {
 this.btnFocus = popup.msgBtn2; } else {
 this.btnFocus = popup.msgBtn2; }
 }

 if (popup.msg) {

 
 popup.msgTitle.replaceChild(document.createTextNode(title),
 popup.msgTitle.firstChild);   var msgText = document.createTextNode(msg); popup.msgText.replaceChild(msgText,popup.msgText.firstChild);   popup.msgBtn2.parentNode.parentNode.style.display = "inline-block"; this.show(); this.btnFocus.focus(); }
 },

 show : function () {

 popup.content.style.display = "none"; popup.mask.style.display = "block"; popup.element.style.display = "block"; popup.msg.style.display = "block"; ptUtil.swapClass(popup.msgBtns,"ptpopupmsgbtns","ptpopupmsgbtnsprompt");   ptEvent.add(document,"click",popup.trapClick); ptEvent.add(document,"keydown",this.keyDownHandler);  ptEvent.add(popup.msgBtn1,"click",this.doOk); ptEvent.add(popup.msgBtn1,"keydown",this.doOk);  ptEvent.add(popup.msgBtn2,"click",this.doCancel); ptEvent.add(popup.msgBtn2,"keydown",this.doCancel);  ptEvent.remove(popup.titleClose,"click",popup.hide); ptEvent.add(popup.titleClose,"click",this.doClose); },

 hide : function () {
 
 
 ptEvent.remove(document,"click",popup.trapClick); ptEvent.remove(document,"keydown",this.keyDownHandler); ptEvent.remove(popup.msgBtn1,"click",this.doOk);  ptEvent.remove(popup.msgBtn1,"keydown",this.doOk); ptEvent.remove(popup.msgBtn2,"click",this.doCancel);  ptEvent.remove(popup.msgBtn2,"keydown",this.doCancel);  ptEvent.remove(popup.titleClose,"click",this.doClose); ptEvent.add(popup.titleClose,"click",popup.hide); popup.msg.style.display = "none"; popup.element.style.display = "none"; popup.content.style.display = "block"; popup.mask.style.display = "none"; },

 
 keyDownHandler : function (e) {

 var keyCode = ptUtil.getKeyCode(e);  if (keyCode == 9) {
 if (e.target.id === popup.msgBtn1.id) {
 popup.msgBtn2.focus(); return false; } else if (e.target.id === popup.msgBtn2.id) {
 popup.msgBtn1.focus(); return false; }

 
 } else if (keyCode == 13) {
 popup.msgBtn1.handle.call(popup.msgBtn1,e);  } else if (keyCode == 27) {
 popup.msgBtn2.handle.call(popup.msgBtn2,e); }
 },

 
 doOk : function (e) {

 if (e.type === "click" || ptUtil.getKeyCode(e) == 13) {
 popup.prompt.hide(); popup.prompt.btn1Handler.call(e); return false; }
 return true; },

 
 doCancel : function(e) {

 if (e.type === "click" || ptUtil.getKeyCode(e) == 13
 || ptUtil.getKeyCode(e) == 27) {
 popup.prompt.hide(); popup.prompt.btn2Handler.call(e); return false; }
 return true; },

 
 doClose : function(e) {
 popup.prompt.hide(); return false; }
 }, 

 dragResize : {
 el: null,  
 hndl: null, 
 minHeight: 0, maxHeight: 0, 
 minWidth: 0, maxWidth: 0,
 minTop: 0, maxTop: 0, 
 minLeft: 0, maxLeft: 0,
 currMouseX: 0, 
 currMouseY: 0,
 lastMouseX: 0, 
 lastMouseY: 0,
 mOffX: 0, 
 mOffY: 0, 
 elX: 0, 
 elW: 0, 
 elY: 0, 
 elH: 0, 

 init : function (handle,config) {
 if (!handle) { return; }

 popup.dragResize.hndl = handle; this.el = popup.popupDiv.parentNode;   ptEvent.add(this.hndl,"mousedown",this.onMouseDown); },

 
 onMouseDown : function (e) {

 var dr = popup.dragResize;   if (!dr.el) { dr.el = popup.popupDiv.parentNode; }

 
 
 
 if (browserInfoObj2.isIE && (popup.quirksMode || !document.documentMode)) {

 
  popup.mask = popup.mask.parentNode.removeChild(popup.mask); popup.mask = document.body.insertBefore(popup.mask,document.body.firstChild); popup.setIEMaskProps("0","0",600); }

 var d = ptUtil.winSize();    dr.minTop = 0; dr.minLeft = 0; dr.maxTop = d.height; dr.maxLeft = d.width;  dr.minHeight = 5;   ptEvent.add(document,"mousemove", dr.onMouseMove); ptEvent.add(document,"mouseup", dr.onMouseUp); ptEvent.add(document,"mouseout",dr.onMouseOut);  dr.lastMouseX = e.pageX; dr.lastMouseY = e.pageY;  dr.elX = parseInt(ptUtil.getCSSValue(dr.el,"left")); dr.elY = parseInt(ptUtil.getCSSValue(dr.el,"top"));  dr.elW = dr.el.offsetWidth; dr.elH = dr.el.offsetHeight; return false; },

 
 
 
 onMouseMove : function (e) {

 var dr = popup.dragResize;  dr.currMouseX = e.pageX; dr.currMouseY = e.pageY;   var diffX = dr.currMouseX - dr.lastMouseX + dr.mOffX; var diffY = dr.currMouseY - dr.lastMouseY + dr.mOffY; dr.mOffX = dr.mOffY = 0;   dr.lastMouseX = dr.currMouseX; dr.lastMouseY = dr.currMouseY;  dr.constraintCheck(diffX,diffY);  dr.el.style.left = dr.elX + "px"; dr.el.style.top = dr.elY + 'px'; return false; },

 
 onMouseUp : function (e) {

 var dr = popup.dragResize; ptEvent.remove(document,"mousemove", dr.onMouseMove); ptEvent.remove(document,"mouseup", dr.onMouseUp); ptEvent.remove(document,"mouseout",dr.onMouseOut);    if (browserInfoObj2.isIE && (popup.quirksMode || !document.documentMode)) {

 
  popup.mask = popup.mask.parentNode.removeChild(popup.mask); popup.mask = dr.el.insertBefore(popup.mask,dr.el.firstChild);  popup.setIEMaskProps(-dr.elY,-dr.elX,-1); }

 
 dr.mOffX = dr.mOffY = 0; return false; },

 
 
 
 
 
 onMouseOut : function(e) {
 var tgt = e.toElement || e.relatedTarget; if (!tgt) { popup.dragResize.onMouseUp(e); }
 },

 
 constraintCheck : function (diffX,diffY) {

 var dX = diffX, dY = diffY;  if (this.elX + dX < this.minLeft) {
 this.mOffX = (dX - (diffX = this.minLeft - this.elX)); } else if (this.elX + this.elW + dX > this.maxLeft) {
 this.mOffX = (dX - (diffX = this.maxLeft - this.elX - this.elW)); }
 
 
 if (this.elY + dY < this.minTop) { 
 this.mOffY = (dY - (diffY = this.minTop - this.elY)); } else if (this.elY + this.elH + dY > this.maxTop) {
 this.mOffY = (dY - (diffY = this.maxTop - this.elY - this.elH)); }
 this.elX += diffX; this.elY += diffY; }
 } 
 };    this.open = function (options) {





 if (options) {
 popup.contentOptions = options; } else {
 popup.contentOptions = contentDefaults; }

 if (popup.contentOptions.draggable) {
 popup.msgTitle.style.cursor = "move"; popup.dragResize.init(popup.msgTitle); } else {
 }





 popup.contentOptions.onOpen.call();  if (popup.fatalError) { popup.fatalError = false; return false; }

 ptEvent.add(document,"click",popup.trapClick);  popup.msgTitle.replaceChild(document.createTextNode(popup.contentOptions.title),popup.msgTitle.firstChild); popup.show(); popup.center();  try {
 if (popup.contentOptions.focusEl) {popup.contentOptions.focusEl.focus();}
 }
 catch(e) {
 return;  }
 return false; }

 this.close = function () {
 ptEvent.remove(document,"click",popup.trapClick); popup.hide(); return false; }

 this.message = function (title,msg) { popup.message.show(title,msg); }

 this.error = function (title,msg,btn1Handler,fatalError) { popup.error.show(title,msg,btn1Handler,fatalError); }

 this.prompt = function (title,msg,btnType,btn1Handler,btn2Handler,btnFocus) {
 popup.prompt.init(title,msg,btnType,btn1Handler,btn2Handler,btnFocus); if (popup.centerPopup) { popup.center(); }
 }

 this.resize = function () { popup.center(1); }

 this.setCenter = function (centerVal) { popup.centerPopup = centerVal; }

 this.setLocation = function (xPos,yPos) {
 popup.centerPopup = false; popup.element.style.top = yPos + "px"; popup.element.style.left = xPos + "px"; }

 this.getPopupHeight = function () {  
 var h; if (popup.isHidden) { 
 popup.element.style.visibility = "hidden"; popup.element.style.display = "block"; h = popup.element.offsetHeight; popup.element.style.visibility = ""; popup.element.style.display = "none"; } else {
 h = popup.element.offsetHeight; }
 return h; }

 this.getPopupWidth = function () {  
 if (browserInfoObj2.isIE) {
 return popup.getIEPopupWidth(); } else { 
 var w; if (popup.isHidden) {
 popup.element.style.visibility = "hidden"; popup.element.style.display = "block"; w = popup.element.offsetWidth; popup.element.style.visibility = ""; popup.element.style.display = "none"; } else {
 w = popup.element.offsetWidth; }
 return w; }
 }
 popup.init(); }; 