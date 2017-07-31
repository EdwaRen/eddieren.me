



document.props = new Object();document.props.location = document.location.href;document.props.domain = document.domain;function saveWarning2(frameName,form,target,Hide, url)
{
var currUrl=getFrameCurrUrl();if (currUrl.length==0)
currUrl = url;if (currUrl.indexOf("h=Y")!=-1)
currUrl = currUrl.replace("h=Y","h=N");else if (currUrl.indexOf("h=N")!=-1)
currUrl = currUrl.replace("h=N","h=Y");else if (currUrl.indexOf("?")!=-1)
currUrl = currUrl+"&h="+Hide;else
currUrl = currUrl+"?h="+Hide;saveWarning(frameName,form,target,currUrl);}

function saveWarning(frameName,form,target,url,bDelay)
{
var changed=null;if (form)
 changed = checkFormChanged(form, null);if (changed==null && top.frames && frameName.length>0 )
{
 objFrame = top.frames[frameName]; if (objFrame)
 changed=checkFrameChanged(objFrame);}

if ((changed==null) && top.frames)
 changed = checkAnyFrameChanged(top.frames);var rtn = true;if (changed)
{
 if (typeof(url)!= 'undefined' && url != "")
 {
 var saveCancelEvent = ""; var saveOKEvent = ""; var bModal = typeof modalCloseUrl != 'undefined'; if (url.substr(0,10) == "javascript")
 {
 url = url.replace(/'/g, '\\"') + "|";  var actions = url.split("|"); url = ""; saveCancelEvent = (bModal? 'oParentWin.' : '') + 'saveWarningEvent("'+url+'","'+target+'","'+actions[0]+'")';  if (actions[1] != "undefined" && actions[1] != "")
 saveOKEvent = (bModal? 'oParentWin.' : '') + 'saveWarningEvent("'+url+'","'+target+'","'+actions[1]+'")'; }
 else
 saveCancelEvent = (bModal? 'oParentWin.' : '') + 'saveWarningEvent("'+url+'","'+target+'")'; psConfirm2("Save Warning", "You have unsaved data on this page. Click OK to go back and save, or Cancel to continue.", "OKCancel", saveCancelEvent, saveOKEvent, null, bDelay); return; }
 else
 rtn = !confirm("You have unsaved data on this page. Click OK to go back and save, or Cancel to continue.");}
if (!url || url.substr(0,10) == "javascript")
 return rtn;if (rtn)
 open(url, target)
}

function saveWarningEvent(myUrl, myTarget, wAction)
{
if (myUrl && myUrl != "")
 open(myUrl, myTarget)
else
 eval(wAction);}


function setAnchorAndFocus(link)
{
setAnchor(link);var obj = document.anchors[link];if (obj == null && document.getElementById)
 obj=document.getElementById(link);if (obj != null)
 tryFocus(obj);}



function setAnchor(link)
{
var obj = document.anchors[link];if (obj == null && document.getElementById)
 obj=document.getElementById(link);if (obj!=null && typeof obj == 'object')
 {
 if (obj.scrollIntoView)
 obj.scrollIntoView(); else
 
 
 
 
 if (document.location.hash != ("#" + link) && document.location.hash != link)
 document.location.href = "#"+link; }
}


function checkAnyFrameChanged(frames)
{
for (var j=0; j < frames.length; ++j)
{
 var objFrame = frames[j]; if (checkFrameChanged(objFrame))
 return true;  if ((!isCrossDomain(objFrame)) && (objFrame.frames))
 if (checkAnyFrameChanged(objFrame.frames))
 return true;}
}


function checkFrameChanged(objFrame)
{
if (isCrossDomain(objFrame))
 return null;var objForms = objFrame.document.forms;if (!objForms)
 return null;var retval = null;for (var i=0; i < objForms.length; i++)
{
 var change = checkFormChanged(objForms[i], objFrame); if (change != null)
 {
 if (change)
 return true; retval = change; }
}

return retval;}




function checkRteChanged(objFrame)
{
if (objFrame == null || typeof(objFrame.CKEDITOR) == "undefined" || objFrame.CKEDITOR == null)
 return false;for ( var instanceName in objFrame.CKEDITOR.instances )
{
if (objFrame.CKEDITOR.instances[instanceName].checkDirty())
return true;}
return false;}

function checkFormChanged(form, objFrame)
{
if (!form.ICChanged)
 return null; if (form.ICChanged.value == "-1")
 return false; if (form.ICChanged.value == "1" && form.ICSaveWarningFilter) {
 if (form.ICSaveWarningFilter.value != "1")
 return true; }
else if (form.ICChanged.value == "1")
 return true;var bIsChanged;for (var j = 0; j < form.length; ++j)
{
 bIsChanged = isChanged(form.elements[j], objFrame); if (bIsChanged && form.ICSaveWarningFilter) {
 if (form.ICSaveWarningFilter.value != "1")
 return true; }
 else if (bIsChanged)
 return true;}
if (typeof(objFrame) != "undefined")
{
if (checkRteChanged(objFrame))
return true;}
return false;}


function ignoreChg(obj, objFrame)
{
if (obj.getAttribute == null)
 {
 var ignoreChgElem = null; if (objFrame != null)
 ignoreChgElem = objFrame.ignoreChgElem; if (ignoreChgElem == null)
 return false; for (var i=0; i<ignoreChgElem.length; i++)
 if (obj.name == ignoreChgElem[i])
 return true; return false; }
else
 return obj.getAttribute("PSnchg");}


function isChanged(obj, objFrame)
{
if (obj.type == "checkbox" || obj.type == "radio")
 return (obj.checked != obj.defaultChecked) && !ignoreChg(obj, objFrame);else if (obj.type == "select-one" && obj.selectedIndex > -1)
{
 if (obj.id == "#ICDataLang")
 return false;  else if (obj.id == "rcMenuOnTC")
 return false; else
 return !(obj.options[obj.selectedIndex].defaultSelected) && !ignoreChg(obj, objFrame);}
else if (obj.type == "select-multiple")
{
 for (var i =0; i < obj.options.length; ++i)
 {
 if (obj.options[i].defaultSelected != obj.options[i].selected)
 return !ignoreChg(obj, objFrame); }
 return false;}
else if (obj.type == "hidden" || obj.type == "button")
 return false;else
 return (obj.value != obj.defaultValue) && !ignoreChg(obj, objFrame);}

var timeoutWin=null;var timeoutWarningID=null;var timeoutID=null;function setupTimeoutMac() 
{
window.setTimeout("setupTimeout2();", 1000);}


function setLastAccessTime()
{
var scheme = window.location.href.substr(0,5);var secure = (scheme == "https") ? true : null;var newLastAccessTime = (new Date()).toUTCString();newLastAccessTime = newLastAccessTime.replace(/ /g, "_"); var nStart = newLastAccessTime.indexOf(",");if (nStart != -1)
 newLastAccessTime = newLastAccessTime.substring(nStart+2); setCookie("PS_TOKENEXPIRE", newLastAccessTime,'','/',document.domain, secure);}


function getLastAccessTime()
{
var strLastAccessTime = getCookieValue("PS_TOKENEXPIRE");if (strLastAccessTime == "" || strLastAccessTime == "-1")
 return -1; strLastAccessTime = strLastAccessTime.replace(/_/g, " "); return (new Date(strLastAccessTime).getTime());}


function clearTimers()
{
window.clearTimeout(timeoutWarningID);window.clearTimeout(timeoutID);timeoutWarningID=null;timeoutID = null;setLastAccessTime();}


function setupTimeout2()
{
if (typeof(totalTimeoutMilliseconds) != 'undefined' && totalTimeoutMilliseconds <= 2073200000)
 {
 if (!isSessionLoggedout(false))
 {
 clearTimers(); timeoutID = window.setTimeout('displayTimeoutMsg2()', totalTimeoutMilliseconds);  timeoutWarningID = window.setTimeout('displayTimeoutWarningMsg2()', warningTimeoutMilliseconds);  } 
 }
}


function clearupTimeout2()
{
if (typeof(totalTimeoutMilliseconds)!='undefined' && totalTimeoutMilliseconds <= 2073200000)
 {
 if (!isSessionLoggedout(true))
 clearTimers(); }
}



function displayTimeoutMsg2()
{
var bSessionLoggedout = isSessionLoggedout(true); if (!bSessionLoggedout) 
 {
 var nLastAccessTime = getLastAccessTime(); if (nLastAccessTime < 0 || typeof(totalTimeoutMilliseconds) == 'undefined')
 return;  var nTimeNow = (new Date()).getTime();  var nAdjTimeout= totalTimeoutMilliseconds - 1000;  var nTimeFromLastAccess = nTimeNow - nLastAccessTime;  var temptotalTimeoutMilliseconds = nAdjTimeout - nTimeFromLastAccess; if (temptotalTimeoutMilliseconds > 10000) 
 {
 if (typeof(timeoutID) != 'undefined' && timeoutID != null)
 window.clearTimeout(timeoutID); timeoutID = window.setTimeout('displayTimeoutMsg2()', temptotalTimeoutMilliseconds); return; }
 }


abnClearData();timeoutMsg = "Your session has been timed out. As a security precaution"
 + " " + totalTimeoutMilliseconds/60000 + " " + "minutes of inactivity.";self.location = timeOutURL; }


function displayTimeoutWarningMsg2()
{ 
if (isSessionLoggedout(true))
 {
 if (typeof(timeoutWarningID) != 'undefined' && timeoutWarningID != null)
 {
 window.clearTimeout(timeoutWarningID); }

 return; }

var nLastAccessTime = getLastAccessTime();if (nLastAccessTime <0 || typeof(warningTimeoutMilliseconds) == 'undefined')
 return; var nAdjWarningTimeout = warningTimeoutMilliseconds - 1000; var nTimeNow = (new Date()).getTime();var nTimeFromLastAccess = nTimeNow - nLastAccessTime; var tempwarningTimeoutMilliseconds = nAdjWarningTimeout - nTimeFromLastAccess;if (tempwarningTimeoutMilliseconds > 10000) 
 {
 if (typeof(timeoutWarningID) != 'undefined' && timeoutWarningID != null)
 {
 window.clearTimeout(timeoutWarningID); }

 timeoutWarningID = window.setTimeout('displayTimeoutWarningMsg2()', tempwarningTimeoutMilliseconds); return; }

timeoutWinOption = "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=330,height=220";timeoutWin =window.open( timeoutWarningPageURL, "timeoutWarning", timeoutWinOption, true);timeoutWin.focus();}

function getForm(document,formname)
{
var objForms = document.forms;if (!objForms)
 return null;for (var i=0; i < objForms.length; i++)
{
 if (objForms[i].name==formname)
 return objForms[i];}
return null;}


function getLoginCookieValue(cookiename)
{
var allcookies;allcookies = document.cookie;if (allcookies == "")
 return "-1";var start = allcookies.indexOf(cookiename + '=');if (start == -1) return "-1"; start += cookiename.length + 1; var end = allcookies.indexOf(';', start);if (end == -1) end = allcookies.length;var cookieval = allcookies.substring(start, end);var a = cookieval.split(' ');var winhref;try { 
 winhref=window.location.href; } 
catch (e) 
 {return "-1";}

winhref=winhref.toLowerCase(); var winurlpath; var s=0;s=winhref.indexOf("//");if (s==-1)
 s=0;s=winhref.indexOf("/",s+2);if (s==-1)
 winurlpath = winhref;else
 winurlpath = winhref.substring(0,s);for(var i=0; i < a.length; i++)
{
 if (a[i].length>0)
 {
 var urlpath = a[i].substring(0,a[i].lastIndexOf("/")); var pshome = a[i].substring(a[i].lastIndexOf("/"),a[i].length); urlpath = urlpath.toLowerCase(); pshome = pshome.toLowerCase();  var nPos = urlpath.indexOf("//"); if (nPos != -1)
 {
 var urlpath2 = urlpath.substring(0,nPos+2); var urlpath3 = urlpath.substring(nPos+2); var nPos1 = urlpath3.indexOf("/"); if (nPos1 != -1)
 urlpath = urlpath2 + urlpath3.substring(0,nPos1); }

 if ((urlpath.indexOf(winurlpath) !=-1) && urlpath.length == winurlpath.length && (winhref.indexOf(pshome) !=-1))
 return a[i]; }
}

return "-1";}

function getPSLoginCookieValue()
{
 return getLoginCookieValue("PS_LOGINLIST");}

function isLoginError()
{
var winhref=window.location.href;winhref=winhref.toLowerCase(); if (winhref.indexOf("error") !=-1)
 return true;else
 return false;}



function isSignout()
{
var bSignout = false;var allcookies = document.cookie;if (allcookies == "")
 return bSignout;var cookieName = "refresh";var start = allcookies.indexOf(cookieName + '=');if (start == -1) return bSignout; start += cookieName.length + 1;  var end = allcookies.indexOf(';', start);if (end == -1) end = allcookies.length;var cookieval = (unescape(allcookies.substring(start, end))).toLowerCase();var bTabDefault = cookieval.indexOf("?tab=default");if (bTabDefault != -1)
 bSignout = true;return bSignout;}


function isSessionLoggedout(bDontSetTimeoutURL)
{
var val = getPSLoginCookieValue(); if (val==-1)
 {
 if (typeof(bDontSetTimeoutURL) != 'undefined' && !bDontSetTimeoutURL)
 {
 if (isSignout())
 self.location=timeOutURL;  }
 return true; }
return false;}

function isIE() {
var isIE = ((navigator.appVersion.indexOf("MSIE")>0) || (navigator.appVersion.toLowerCase().indexOf("trident")>0));return isIE;}

function isMAC() {
var isMAC = navigator.appVersion.indexOf("Mac")>0;return isMAC;}

function addExtraParamEvent(tgturl, myTarget, wEvent)
{
if (tgturl != "")
{
 var newurl = ""; if (typeof URLIntercept == "function")
 {
 newurl = URLIntercept(tgturl,myTarget); if (newurl == "")
 return; else
 tgturl = newurl; }

 var bIsNS7 = (navigator.appName == "Netscape" && ((navigator.vendorSub == "7.0") || (navigator.vendorSub == "7.01") )); if (bIsNS7)
 open(tgturl, '_top'); else
 open(tgturl, myTarget, ((myTarget.toLowerCase() == '_blank') ? openNewWindowOption : ''));}
else
 eval(wEvent);}

function addExtraParam(saveWarn,frameName,form,target,tgturl,openNewWindowOption)
{
 var rtn = true; if (saveWarn == "Y")
 {
 var changed=null; if (form)
 changed = checkFormChanged(form, null); if (changed==null && top.frames && frameName.length>0 )
 {
 objFrame = top.frames[frameName]; if (objFrame)
 changed=checkFrameChanged(objFrame); }

 if ((changed==null) && top.frames)
 changed = checkAnyFrameChanged(top.frames); var rtn = true; if (changed)
 {
 if (typeof(tgturl)!= 'undefined' && tgturl != "")
 {
 var saveCancelEvent = ""; var saveOKEvent = ""; if (tgturl.substr(0,10) == "javascript")
 {
 tgturl = tgturl.replace(/'/g, '\\"') + "|";  var actions = tgturl.split("|"); tgturl = ""; saveCancelEvent = 'saveWarningEvent("'+tgturl+'","'+target+'","'+actions[0]+'")'; if (actions[1] != "undefined" && actions[1] != "")
 saveOKEvent = 'saveWarningEvent("'+tgturl+'","'+target+'","'+actions[1]+'")'; }
 else
 saveCancelEvent = 'saveWarningEvent("'+tgturl+'","'+target+'")'; return psConfirmSW(saveOKEvent, saveCancelEvent, window); }
 else
 rtn = !confirm("You have unsaved data on this page. Click OK to go back and save, or Cancel to continue."); }
 if (!tgturl)
 return rtn; }
 if (rtn)
 {
 var newurl = ""; if (typeof URLIntercept == "function"){
 newurl = URLIntercept(tgturl,target); if (newurl == "")
 return; else
 tgturl = newurl; }
 
 if (/\/h\/\?tab=/.test(location) && (target.toLowerCase() !== "_blank")) 
 ptLoadingStatus_empty(1); var bIsNS7 = (navigator.appName == "Netscape" && ((navigator.vendorSub == "7.0") || (navigator.vendorSub == "7.01") )); if (bIsNS7)
 open(tgturl, '_top'); else
 open(tgturl, target, ((target.toLowerCase() == '_blank') ? openNewWindowOption : '')); }
}

function psConfirmSW(saveOKEvent, saveCancelEvent, pWin) {
 return psConfirm2("Save Warning", "You have unsaved data on this page. Click OK to go back and save, or Cancel to continue.", "OKCancel", saveCancelEvent, saveOKEvent, pWin);}

function getFrameCurrUrl()
{
var objFrame = top.frames['TargetContent'];if (!objFrame)
 return "";else
{
if (!objFrame.strCurrUrl)
return "";else
 return objFrame.strCurrUrl;}
}

function psConfirm2(msgTitle, msg, msgType, event1, event2, pWin, bDelay) {
if (typeof bDelay == 'undefined') bDelay = false;if (typeof pWin == 'undefined' ||pWin == null) pWin = window;if (!msgType) msgType = "OK"; if (typeof modalCloseUrl != 'undefined' && modalCloseUrl)
 {
 var sOK = "OK"; var sCancel = "Cancel"; var sYes = "Yes"; var sNo = "No"; var shtml= "<div id=msgTitle style='display:none'>"+msgTitle+"</div>";  shtml+="<div id='alertmsg'><span class='popupText'>"+msg+"</span></div>"; if (msgType == "OKCancel")
 {
 shtml+="<div id='alertbutton'><a class='PSPUSHBUTTON' id='Left' style = 'border:0;'><span><input type=button id='#ALERTOK' name='#ALERTOK' class='PSPUSHBUTTONTBOK' value='"; shtml+=(sOK+"' tabindex='0' alt='"+sOK+"' title='"+sOK+"' onclick='"+event2+";closeMsg(this);' /></span></a>"); shtml+=("<a class='PSPUSHBUTTON' id='Left' style = 'border:0;'><span><input type=button id='#ALERTCANCEL' name='#ALERTCANCEL' class='PSPUSHBUTTONTBOK' value='"); shtml+=(sCancel+"' tabindex='0' alt='"+sCancel+"' title='"+sCancel+"' onclick='"+event1+";closeMsg(this);' /></span></a></div>"); }
 else if (msgType == "YesNoCancel")
 {
 shtml+="<div id='alertbutton'><a class='PSPUSHBUTTON' id='Left' style = 'border:0;'><span><input type=button id='#ALERTYES' name='#ALERTOK' class='PSPUSHBUTTONTBOK' value='"; shtml+=(sYes+"' tabindex='0' alt='"+sOK+"' title='"+sYes+"' onclick='"+event1+";closeMsg(this);' /></span></a>"); shtml+=("<a class='PSPUSHBUTTON' id='Left' style = 'border:0;'><span><input type=button id='#ALERTNO' name='#ALERTNO' class='PSPUSHBUTTONTBOK' value='"); shtml+=(sNo+"' tabindex='0' alt='"+sCancel+"' title='"+sNo+"' onclick='"+event2+";closeMsg(this);' /></span></a>"); shtml+=("<a class='PSPUSHBUTTON' id='Left' style = 'border:0;'><span><input type=button id='#ALERTCANCEL' name='#ALERTCANCEL' class='PSPUSHBUTTONTBOK' value='"); shtml+=(sCancel+"' tabindex='0' alt='"+sCancel+"' title='"+sCancel+"' onclick='closeMsg(this);' /></span></a></div>"); }
 else
 {
 shtml+="<div id='alertbutton'><a class='PSPUSHBUTTON' id='Left' style = 'border:0;'><span><input type=button id='#ALERTOK' name='#ALERTOK' class='PSPUSHBUTTONTBOK' value='"; shtml+=(sOK+"' tabindex='0' alt='"+sOK+"' title='"+sOK+"' onclick='closeMsg(this);' /></span></a></div>"); }
 var options = 'closeUrl: ' + modalCloseUrl + ';closeAlt:' + modalCloseAlt + ';resizeUrl: ' + modalResizeUrl + ';resizeAlt:' + modalResizeAlt + ';moveAlt:' + modalMoveAlt + ';'; addMsg(shtml, pWin, options); if (!bDelay)
 playMsg();   }
else
 {
 if (msgType == "OKCancel")
 {
 var rtn = !confirm(msg); if (rtn)
 eval(event1); else
 eval(event2); }
 }
}


function abnClearData() {

 try {
 if(!isCrossDomain(parent)) {
 if (typeof(parent.ptIframe) !== "undefined") {
 if(typeof(parent.pthNav) !== "undefined" &&
 typeof(parent.pthNav.abn) !== "undefined") {
 parent.pthNav.abn.search.clearData(); }
 } else { 
 if (/\/h\/\?tab=/.test(location) &&
 typeof(pthNav) !== "undefined" &&
 typeof(pthNav.abn) !== "undefined") {
 pthNav.abn.search.clearData(); }
 }
 }
 } catch (e) {}
}


function getMainPopupObject()
{ 
 return null;}



function isCrossDomain(objFrame)
{
var isForDomain = false;var domainName="";try
{
 domainName= objFrame.document.domain;} 
catch (exception)
{
 isForDomain = true; }
return isForDomain;}


function isCrossDomainTop() 
{ 
 var isForDomain = false; var objFrame; for (j=0;j<top.frames.length;j++)
 {
 objFrame = top.frames[j]; isForDomain=isCrossDomain(objFrame); if (isForDomain)
 break;  if (objFrame.frames && (objFrame.frames.length>0))
 {
 for (k=0;k<objFrame.frames.length;k++)
 {
 objFrame2 = objFrame.frames[k]; isForDomain=isCrossDomain(objFrame2); if (isForDomain)
 break; }
 }
 if (isForDomain)
 break; }
 return isForDomain;}
