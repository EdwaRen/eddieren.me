

var oErr_win0 = null;function PSwarning_win0(msg)
{
msg = PSmessageSubst_win0(msg, PSwarning_win0.arguments, 1);psAlert(msg, "Warning");}

function PSdeferWarning_win0(msg)
{
sDefMsg_win0 = PSmessageSubst_win0(msg, PSdeferWarning_win0.arguments, 1);bDefWarning_win0 = true;}

function PSerror_win0(obj, msg)
{
if (bReset_win0)
{
 resetChange(obj); bReset_win0 = false;}
else
{
 obj.PSsaveclass = obj.className; obj.className = "PSERROR";}
msg = PSmessageSubst_win0(msg, PSerror_win0.arguments, 2);psAlert(msg, "Error");oErr_win0=obj;}

function PSdeferError_win0(obj, msg)
{
sDefMsg_win0 = PSmessageSubst_win0(msg, PSdeferError_win0.arguments, 2);oDefErr_win0=obj;bDefWarning_win0 = false; }

function PSshowDeferredMsg_win0()
{
if (sDefMsg_win0=="")return;if (bDefWarning_win0)
 PSwarning_win0(sDefMsg_win0);else
 PSerror_win0(oDefErr_win0, sDefMsg_win0);sDefMsg_win0 = "";oDefErr_win0 = null; }

function PSclearError_win0(obj)
{
if (obj == oDefErr_win0)
{
 sDefMsg_win0 = "";  oDefErr_win0 = null; }
}

function PSmessageSubst_win0(msg, parms, startparm)
{
var pos;var res = "";var startpos = 0;var nparms = parms.length - startparm;if (nparms == 0)
 return msg;while (startpos < msg.length)
{
 pos = msg.indexOf("%", startpos); if (pos == -1 || pos == msg.length - 1)
 {
 res += msg.substring(startpos); return res; }
 res += msg.substring(startpos, pos); ++pos; if (msg.charAt[pos] == "%")
 {
 res += "%"; ++pos; startpos = pos; continue; }

 var numstr = ""; while (pos < msg.length)
 {
 var c = msg.charAt(pos); if ("0123456789".indexOf(c) == -1)
 break; numstr += c; ++pos; }

 startpos = pos; if (numstr.length == 0)
 continue; var num = parseInt(numstr); if (num > nparms)
 continue; res += parms[startparm + num - 1];}

return res;}

function FindString_win0(obj)
{
var s = prompt("Enter search string:","");if (s == null || s == "")
 return false;obj.value = s;return true;}

function DeleteCheck_win0(form,name)
{


var deleteAction = 'oParentWin.aAction_win0(oParentWin.document.win0' + ',"' + name + '")';psConfirm2("Delete Confirmation", "Delete current/selected rows from this page?  The delete will occur when the transaction is saved.", "OKCancel", " ", deleteAction);}

function DeleteCheck2_win0()
{
if (arguments.length == 0) 
 return confirm("Delete current/selected rows from this page?  The delete will occur when the transaction is saved.");else 
 {
 if (bAccessibility_win0) 
 var deleteAction = 'submitAction_win0(document.win0' + ',"' + arguments[0] + '")'; else 
 var deleteAction = 'oParentWin.aAction_win0(oParentWin.document.win0' + ',"' + arguments[0] + '")';     psConfirm2("Delete Confirmation", "Delete current/selected rows from this page?  The delete will occur when the transaction is saved.", "OKCancel", " ", deleteAction);  }
}

function AddMultiple_win0(obj)
{
var msg = "Enter number of rows to add:";var defreply = "1";while(true)
{
 var s = prompt(msg,defreply); if (s == null || s == "")
 return false; if (s.search(/^ *(\d*) *$/) == 0)
 {
 var n = parseInt(RegExp.$1); if (n > 0 && n <= 100)
 { 
 obj.value = RegExp.$1; return true; }
 } 
 msg = "Invalid value.  Please enter a number between 1 and 100." 
 + "\n" + "Enter number of rows to add:"; defreply = RegExp.$1;}
}



var oChange_win0 = null;var oDefErr_win0 = null;var sDefMsg_win0 = "";var bDefWarn_win0; var oKillFocus_win0 = null;var oTargetFocus_win0 = null;var bReset_win0 = false;function initVars_win0()
{


oChange_win0 = null;oDefErr_win0 = null;sDefMsg_win0 = "";bDefWarn_win0 = false; oKillFocus_win0 = null;oTargetFocus_win0 = null;bReset_win0 = false;nLastKey_win0 = 0;}
function moveFocus_win0(killobj)
{
if (typeof popupObj_win0 != "undefined" && popupObj_win0 && popupObj_win0.isShown) 
 ptCommonObj2.tryFocus0(popupObj_win0.popupFocus);if (oErr_win0!=null)
{
 oKillFocus_win0 = killobj; oTargetFocus_win0 = oErr_win0; oErr_win0.focus(); oErr_win0 = null;}
}

function doFocus_win0(obj,bTabonly,bDef)
{
if (obj == null) return;if (typeof gridRowSelRgbColor_win0 != "undefined") {
 var gridRowID = getGridRowID(obj);  if (gridRowID != null && gridRowID.length > 0 )
 HighLightTR(gridRowSelRgbColor_win0,'',gridRowID);}

bFieldFocus=1; if (document.activeElement != null && document.activeElement.tagName != null)
{ 
 if (document.activeElement.tagName.indexOf("SELECT") >= 0 || (document.activeElement.type != null && 
 (document.activeElement.type.indexOf("checkbox") >= 0 || document.activeElement.type.indexOf("radio") >= 0) ) ) 
 bFieldFocus=0;  else if (document.activeElement.tagName.indexOf("BODY") >=0) 
 bFieldFocus=0; }


if (window.focusHook)
 focusHook(obj);if (obj==oTargetFocus_win0)
{
 oTargetFocus_win0 = null; oKillFocus_win0 = null; return;}


if (typeof dateBoxOpen != "undefined" && dateBoxOpen)
 closeCal2(obj);if(!bTabonly || getLastKey_win0() == "\t".charCodeAt(0))
{
 if(oChange_win0!=null && oChange_win0!=obj)
 {
 oChange_win0.form.ICFocus.value=obj.name; submitAction_win0(oChange_win0.form,oChange_win0.name); oChange_win0 = null; }
 else if(bDef && oDefErr_win0!=null && oDefErr_win0!=obj)
 PSshowDeferredMsg_win0();}
moveFocus_win0(obj);}

function doFocusMac_win0(obj,bTabonly)
{
if (obj==oTargetFocus_win0)
{
 oTartgetFocus_win0 = null; oKillFocus_win0 = null; return;}


if (typeof dateBoxOpen != "undefined" && dateBoxOpen)
 closeCal2();document.win0.ICFocus.value = obj.name;if(oDefErr_win0!=null && oDefErr_win0!=obj)
 PSshowDeferredMsg_win0();moveFocus_win0(obj);}

function doReqField_win0(obj, bserver, bnumeric)
{

if (oKillFocus_win0==obj)
 return;var val;if(obj.PSsaveclass) obj.className = obj.PSsaveclass;if(obj.type == "select-one")
 val = obj.options[obj.selectedIndex].value;else
 val = obj.value;if (val.search(/^ *$/) == 0 || (bnumeric && val.search(/^[ 0]*$/) == 0))
{
 if (bserver)
 oChange_win0=obj; else
 PSdeferError(obj, "Field is required."); }
}

function addchg_win0(obj,id) {

if (typeof bCleanHtml == "undefined" || !bCleanHtml) return;if (obj) id = obj.id;if (id.length == 0) return;if (typeof document.chgFldArr_win0 != "undefined" && document.chgFldArr_win0 != "undefined")
 {
 var bFound = false; for (var i = 0; i < document.chgFldArr_win0.length; i++) {
 if (document.chgFldArr_win0[i] == id) {
 bFound = true; continue; }
 }
 if (!bFound) 
 document.chgFldArr_win0.push(id); }
}

function doEdits_win0(obj,sType,bHist,bEffdtSub,bDate,bYN,bUCase,bImmed, re)
{

gFocusObj=obj;if(sDefMsg_win0!="")
{
 PSshowDeferredMsg_win0(); return false;}


if(oChange_win0 != null)
{
 submitAction_win0(obj.form,obj.name); return true;}

if(obj.PSsaveclass) obj.className = obj.PSsaveclass;if(bUCase=='Y')
 {
 var temp = obj; if(obj.type == "select-one") temp = obj.options[obj.selectedIndex]; temp.value=temp.value.toUpperCase(); }

var bErr = false; if(sType!='') bErr = checkType_win0(obj, sType, re);if(!bErr && bHist=='Y') bErr = historyUpdated_win0(obj);if(!bErr && bEffdtSub=='Y') bErr =subscrollUpdated_win0(obj);if(!bErr && bDate=='Y') bErr = isReasonableDate_win0(obj);if(!bErr && bYN=='Y') bErr = isYN_win0(obj);if (bErr && bImmed=='Y') PSshowDeferredMsg_win0();return true;}


function isChanged(obj)
{
if (obj.type == "checkbox" || obj.type == "radio")
 return (obj.checked != obj.defaultChecked);else if (obj.type == "select-one")
 {
 if (obj.id == "#ICDataLang")
 return false; else
 return !(obj.options[obj.selectedIndex].defaultSelected); }
else if (obj.type == "select-multiple")
{
 for (var i =0; i < obj.options.length; ++i)
 {
 if (obj.options[i].defaultSelected != obj.options[i].selected)
 return true; }
 return false;}
else if (obj.type == "hidden" || obj.type == "button")
 return false;else
 return (obj.value != obj.defaultValue);}


function resetChange(obj)
{
if (obj.type == "checkbox")
 {
 obj.checked = obj.defaultChecked;  if (obj.id != null && obj.id != "")
 {
 var nEnd1 = (obj.id).indexOf("$"); if (nEnd1 >0)
 {
 var sHiddenId = (((obj.id).substr(0,nEnd1)).concat('$chk') ).concat((obj.id).substr(nEnd1)); var oHiddenObj = document.getElementById(sHiddenId); if (oHiddenObj != null)
 oHiddenObj.value = (obj.checked ? 'Y':'N'); }
 }
 }
else if (obj.type == "radio")
 {
 var arr = obj.form[obj.name]; for (var i = 0; i < arr.length; ++i)
 arr[i].checked = arr[i].defaultChecked; } 
else if (obj.type == "select-one")
 {
 var arr = obj.options; for (var i = 0; i < arr.length; ++i)
 arr[i].selected = arr[i].defaultSelected; } 
else
 obj.value = obj.defaultValue;}




function historyUpdated_win0(obj)
{
if (!isChanged(obj))
 return false;PSdeferError_win0(obj, "Cannot change current or history records unless in Correction mode.");bReset_win0 = true;return true;}

function subscrollUpdated_win0(obj)
{
if (!isChanged(obj))
 return false;PSdeferError_win0(obj, "Cannot change key field with effective dated subordinate data unless in Correction mode.");bReset_win0 = true;return true;}



function isReasonableDate_win0(obj)
{
if(obj.type == "select-one") obj = obj.options[obj.selectedIndex];var dateval = new Date(obj.value);var now = new Date();var diff = new Date(Math.abs(now.getTime() - dateval.getTime()));if (diff.getMonth > 0)
 
 PSdeferWarning_win0("Warning -- date out of range.");return false;}


function isYN_win0(obj)
{
var val;if(obj.type == "select-one")
 val = obj.options[obj.selectedIndex].value;else
 val = obj.value;if (val != 'Y' && val != 'N')
{
 
 PSdeferError_win0(obj, "Value must either be Y for Yes or N for No."); return true;}
return false;}


function isNumOnly_win0(obj)
{
var val = obj.value;if (val == '') return false;if (val.search(/^ *\d* *$/) != 0)
{
 
 PSdeferError_win0(obj, "Numeric Only field format error.  Please reenter."); return true;}
return false;}

function isNumeric_win0(obj,fmt,re)
{
var val = obj.value;if (val == '') return false;if (val.search(re) != 0)
{
 
 PSdeferError_win0(obj, "Number field format error. Please re-enter using the proper format.  %1", fmt); return true;}
return false;}

function isTime_win0(obj,fmt)
{
var val = obj.value;if (val == '') return false;if (!checkTime(val,fmt))
{
 
 PSdeferError_win0(obj, "Time field format error.  Please re-enter using the proper format."); return true;}
return false;}

function isDateTime_win0(obj,fmt)
{
var val = obj.value;if (val == '') return false;var newval = checkDateTime(val,fmt);if (newval == "")
{
 
 PSdeferError_win0(obj, "Datetime field format error.  Please reenter using the proper format."); return true;}
obj.value = newval;return false;}

function isDate_win0(obj,fmt)
{
var val = obj.value;if (val == '') return false;var dt = getDate(val,fmt,szCalendarType);if (dt==null)
{
 PSdeferError_win0(obj, "The system does not understand the date you entered.");  return true;}
obj.value = pt_formatDate(dt, fmt, szCalendarType);return false;}

function checkType_win0(obj,sType,re)
{
var cType = sType.substring(0, 1);var sFmt = sType.substring(1);switch(cType)
{
case 'N': return isNumOnly_win0(obj);case 'S': return isNumeric_win0(obj,sFmt,re);case 'D': return isDate_win0(obj,sFmt);case 'T': return isTime_win0(obj,sFmt);case 'X': return isDateTime_win0(obj,sFmt);}
return false;}

function getDateRegExpStr(fmt)
{

var dmy = fmt.substring(0, 3);var sep = fmt.substring(3, 4);var sepchars = "-/.";var sepstr = "\\-\/\\.";if (sepchars.indexOf(sep)==-1)
 sepstr += sep; var restr;if (dmy == "DMY" || dmy == "MDY")
{
 restr = "(\\d{1,2})["; restr += sepstr; restr += "]{1}(\\d{1,2})["; restr += sepstr; restr += "]{1}(\\d{4}|\\d{2})"; restr +=" *$|^ *"; restr +="(\\d{2})(\\d{2})(\\d{2}|\\d{4})"; }
else 
{
 restr = "(\\d{4}|\\d{2})["; restr += sepstr; restr += "]{1}(\\d{1,2})["; restr += sepstr; restr += "]{1}(\\d{1,2})"; restr +=" *$|^ *"; restr +="(\\d{2}|\\d{4})(\\d{2})(\\d{2})"; }
return restr;}

function getTimeRegExpStr(fmt)
{
var restr;restr = "(\\d{1,2})([:\\.]?(\\d{1,2})([:\\.]?(\\d{1,2})(\\.\\d*)?)?)?";if (fmt.length != 0)
 restr += " *(\\w*)"

return restr;}


function getDate(val,fmt,cal)
{

var todaystr = "today".toUpperCase();if (val.length > 0 && todaystr.indexOf(val.toUpperCase()) == 0) 
 return new Date();if(cal==null)
 cal="G"; var re = new RegExp("^ *" + getDateRegExpStr(fmt) + " *$");var parts= re.exec(val);if (parts==null)
 return null;var dmy = fmt.substring(0, 3);var defyr;if (fmt.length >=7)
 defyr = parseInt(fmt.substring(5), 10);else
 defyr = 50;var d, m, y;if (dmy == "DMY")
{
 d = (parseInt(parts[1],10)|parseInt(parts[4],10)); m = (parseInt(parts[2],10)|parseInt(parts[5],10)); y = (parseInt(parts[3],10)|parseInt(parts[6],10));}
else if (dmy == "MDY")
{
 m = (parseInt(parts[1],10)|parseInt(parts[4],10)); d = (parseInt(parts[2],10)|parseInt(parts[5],10)); y = (parseInt(parts[3],10)|parseInt(parts[6],10));}
else
{
 y = (parseInt(parts[1],10)|parseInt(parts[4],10)); m = (parseInt(parts[2],10)|parseInt(parts[5],10)); d = (parseInt(parts[3],10)|parseInt(parts[6],10));}
if (y<100)
{
 
 if (y<=defyr)
 y += 2000; else
 y += 1900;}
--m;if(cal=="T")
 y=y-543;if(cal=='H')
 var dt = new HijriDate(y,m,d);else
 var dt = new Date(y,m,d);if(cal=="G")
{
 if (dt.getFullYear()!=y||dt.getMonth()!=m||dt.getDate()!=d)
 return null;}

return dt;}

function checkTime(val,fmt)
{
var re = new RegExp("^ *" + getTimeRegExpStr(fmt) + " *$");var parts = re.exec(val);if (parts==null)
 return false;var h, m, s, ampm;h = parseInt(parts[1],10);if (parts.length>3)
 m = parseInt(parts[3],10);else
 m = 0;if (parts.length>5)
 s = parseInt(parts[5],10);else
 s = 0;if (parts.length>7)
 ampm = parts[7].toUpperCase();else
 ampm = "";if (fmt.length>0 && ampm.length>0)
{
 var i =fmt.indexOf(";"); var am, pm; if (i >0)
 {
 am=fmt.substring(0,i); pm=fmt.substring(i+1); if (pm.indexOf(ampm)==0)
 h +=12; else if (am.indexOf(ampm)!=0)
 return false; --h; }
}
if (h<0||h>23||m>59||s>59)
 return false;return true;}

function checkDateTime(val,fmt)
{
var re = /^ *([^ ]*) +([^ ]*) *$/;var parts=re.exec(val);if (parts==null)
 return "";var dt=parts[1];var tm=parts[2];var dtfmt = fmt.substring(0,4);var tmfmt = fmt.substring(4);var dtobj = getDate(dt,dtfmt);if (dtobj == null)
 return "";if (!checkTime(tm, tmfmt))
 return "";return pt_formatDate(dtobj, dtfmt) + " " + tm;}



function formatDate(dt, dateFormat, calendarType)
{
return pt_formatDate(dt, dateFormat, calendarType);}

function pt_formatDate(dt, dateFormat, calendarType)
{
var format = dateFormat.substring(0,3);var separator = dateFormat.substring(3,4);if(calendarType == "H")
{
 var day=Number(dt.day); var mnt=Number(dt.month) +1; var yr=Number(dt.year);}
else
{
var day = dt.getDate();var mnt = dt.getMonth() +1;var yr = dt.getFullYear();}
if (calendarType == null)
 calendarType = "G";if (dateFormat.length>=7)
{
 if (dateFormat.substring(4,5) == "2")
 {
 var yrdef = parseInt(dateFormat.substring(5,7), 10); var yr2 = yr%100; if (yr2 < yrdef)
 { 
 if (yr2 + 2000 == yr)
 yr = yr2; }
 else
 { 
 if (yr2 + 1900 == yr)
 yr = yr2; }
 }
}


if ((calendarType == "T") && (yr < 2443)) 
 yr=yr+543;var formattedDate;if (format == 'MDY')
 formattedDate = '' + padout(mnt) + separator + padout(day) + separator + padout(yr);else if (format == 'DMY')
 formattedDate = '' + padout(day) + separator +padout(mnt) + separator + padout(yr);else if (format == 'YMD')
 formattedDate = '' + padout(yr) + separator + padout(mnt) + separator + padout(day);return formattedDate;}

function padout(number)
{
return (number < 10) ? '0' + number : number;}


function setSelectElemOptions_win0()
{
var bIE = (navigator.userAgent.toLowerCase().indexOf('msie') || navigator.userAgent.toLowerCase().indexOf('trident'));if (typeof selectElemOptions_win0 != "undefined")
 {
 for (var i = 0; i < selectElemOptions_win0.length; i++)
 {
 var selectElem = document.forms['win0'].elements[selectElemOptions_win0[i][0]]; if (selectElem == null)
 continue; if (selectElem.options != null)
 var curLen = selectElem.options.length; else
 var curLen = 0; var options = optionsArray_win0[selectElemOptions_win0[i][1]];     var selected = selectElemOptions_win0[i][2]; var erroraccess = selectElemOptions_win0[i][3]; if (typeof options == "undefined" || options==null || selected == null)
 continue;   var invalidValueText = "(Invalid Value)"; for (var l = curLen - 1; l >= 0; l--) 
 {
 
 
 if (selectElem.options[selectElem.options.length - 1].value.length > 0 &&
 selectElem.options[selectElem.options.length - 1].text != invalidValueText)
 selectElem.remove(selectElem.options.length - 1); }
 
 if (selectElem.options != null)
 curLen = selectElem.options.length; else
 curLen = 0; for (var j = 0; j < options.length; j++)
 {
 if (selectElem.options != null)
 {
 selectElem.options[curLen + j] = new Option(options[j][1], options[j][0], false, false); if (bIE>=0) 
 selectElem.options[curLen + j].innerHTML=selectElem.options[curLen + j].innerText;  else
 selectElem.options[curLen + j].innerHTML=selectElem.options[curLen + j].textContent;  }
 }
 for (var k = 0; k < selected.length; k++)
 { 
 var selection = selected[k];          if (curLen > 0)
 selection += curLen;  if(erroraccess != null && erroraccess == "1")
 {
 var optiondescr = "ERROR:"+ options[selection][1];  selectElem.options[curLen + selection] = new Option(optiondescr,options[selection][0],false,false);  }
 if (selectElem.options != null)
 {
 selectElem.options[selection].selected = true; selectElem.options[selection].defaultSelected = true; }
 
 }
 } 
 } 
}

var UmmAlQura=new Array();UmmAlQura[0]= new Array(29, 30, 29, 29, 30, 29, 30, 30, 30, 30, 29, 30, 355); UmmAlQura[1]= new Array(29, 29, 30, 29, 29, 29, 30, 30, 30, 30, 29, 30, 354); UmmAlQura[2]= new Array(30, 29, 29, 30, 29, 29, 29, 30, 30, 30, 29, 30, 354); UmmAlQura[3]= new Array(30, 29, 30, 29, 30, 29, 29, 30, 29, 30, 29, 30, 354); UmmAlQura[4]= new Array(30, 29, 30, 30, 29, 30, 29, 30, 29, 29, 30, 29, 354); UmmAlQura[5]= new Array(30, 29, 30, 30, 29, 30, 29, 30, 30, 29, 30, 29, 355); UmmAlQura[6]= new Array(29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 30, 355); UmmAlQura[7]= new Array(29, 29, 30, 29, 30, 29, 30, 30, 29, 30, 30, 29, 354); UmmAlQura[8]= new Array(30, 29, 29, 30, 29, 29, 30, 30, 30, 29, 30, 30, 355); UmmAlQura[9]= new Array(29, 30, 29, 29, 30, 29, 29, 30, 30, 29, 30, 30, 354); UmmAlQura[10]=new Array(29, 30, 30, 29, 29, 30, 29, 30, 29, 30, 29, 30, 354); UmmAlQura[11]=new Array(29, 30, 30, 29, 30, 29, 30, 29, 30, 29, 29, 30, 354); UmmAlQura[12]=new Array(29, 30, 30, 30, 29, 30, 29, 30, 29, 30, 29, 29, 354); UmmAlQura[13]=new Array(30, 29, 30, 30, 29, 30, 30, 29, 30, 29, 30, 29, 355); UmmAlQura[14]=new Array(29, 30, 29, 30, 29, 30, 30, 29, 30 ,30, 29, 29, 354); HijriLeapYearCycle=new Array(0, 1,0,0,0,1, 0,1,0,0,0, 1,0,0,1,0, 0,1,0,1,0, 0,1,0,0,1, 0,1,0,0,1); HijriDayTable=new Array();HijriDayTable[0]= new Array(30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29); HijriDayTable[1]= new Array(30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 30);function GregorianToJulian(dt) {
 mon=dt.getMonth(); day=dt.getDate();  year=dt.getFullYear(); hour=12; min=0; sec=0; with (Math) { 
 GGG = 1; if( year < 1582 ) GGG = 0; if( year <= 1582 && mon < 10 ) GGG = 0; if( year <= 1582 && mon == 10 && day < 5 ) GGG = 0; JD = -1 * floor(7 * (floor((mon + 9) / 12) + year) / 4); S = 1; if ((mon - 9)<0) S=-1; A = abs(mon - 9); J1 = floor(year + S * floor(A / 7)); J1 = -1 * floor((floor(J1 / 100) + 1) * 3 / 4); JD = JD + floor(275 * mon / 9) + day + (GGG * J1); JD = JD + 1721027 + 2 * GGG + 367 * year - 0.5; JD = JD + (hour / 24); }
 return(JD);}


function JulianToGregorian(jul) {
 JD=jul; with (Math) { 
 Z = floor(JD+0.5); F = JD+0.5 - Z; if (Z < 2299161) {
 Y = Z
 } else
 {I = floor((Z - 1867216.25)/36524.25); Y = Z + 1 + I - floor(I/4); }
 B = Y + 1524; C = floor((B - 122.1)/365.25); D = floor(365.25 * C); T = floor((B - D)/ 30.600); RJ = B - D - floor(30.6001 * T) + F; DD = floor(RJ); if (T < 14) {
 MM = T - 1
 } else
 { if ((T == 14) || (T == 15)) MM = T - 13 
 } 
 if (MM > 2) {
 YY = C - 4716 } else
 { if ((MM == 1) || (MM == 2)) YY = C - 4715
 }
 }
return(new Date(YY,MM-1,DD));}

function HijriToJulian(year,month,day)
{

var julian;var cycles = 0;var cycledays = 0;var yeardays = 0;var monthdays = 0;var useummalqura = false;var dayspercycle = 10631.0; var yearspercycle = 30; cycles = Math.floor ((year-1) / yearspercycle);cycledays = cycles * dayspercycle;var cycleyears = year;cycleyears -= (yearspercycle * cycles);for (curyear = 1; curyear < cycleyears; curyear++) 
{
 yearproc=year-cycleyears+curyear; if ((yearproc) >= 1420 && (yearproc) <= 1434) 
 yeardays += UmmAlQura[yearproc-1420][12];  else
 if(HijriLeapYearCycle[curyear] == 1)
 yeardays += 355; else
 yeardays += 354;}

if(year >=1420 && year <= 1434) 
 useummalqura=true;else
 useummalqura=false;for (curmonth = 0; curmonth < month; curmonth++) {
 if (useummalqura == true)
 daysinmonth = UmmAlQura[year-1420][curmonth]; else 
 {
 if(HijriLeapYearCycle[curyear] == 1)
 daysinmonth = HijriDayTable[1][curmonth];  else
 daysinmonth = HijriDayTable[0][curmonth];  }
 
 monthdays += daysinmonth;}
julian = cycledays + yeardays + monthdays + day;julian += 1948439; return(julian)
}

function JulianToHijri(julian) 
{
 var year=0; var month=0; var day=1; var count=0; var count2=0; var julLeft = julian; var cycleLastDay = false; var UAQStart = 2451285; var UAQEnd = 2456599; if ((julLeft >= UAQStart) && (julLeft <= UAQEnd))
 { 
 year=1420; julLeft-=(UAQStart-1); for (count=0;julLeft>UmmAlQura[count][12];count++)
 {
 year++;julLeft-=UmmAlQura[count][12]; }
 for (count2=0;julLeft>UmmAlQura[count][count2];count2++)
 {
 month++;julLeft-=UmmAlQura[count][count2]; }
 day=julLeft; }
 else
 { 
 julLeft-=1948437; year=1+(Math.floor(julLeft/10631.0)*30); julLeft-= Math.floor(julLeft/10631.0)*10631.0; if (julLeft == 0)
 {
 cycleLastDay = true; year-=30; julLeft = 10630; }

 for (count=0;julLeft>(354+HijriLeapYearCycle[count+1]);count++)
 {
 year++;julLeft-=(354+HijriLeapYearCycle[count+1]); }
 for (count2=0;julLeft>(HijriDayTable[HijriLeapYearCycle[count+1]][count2]);count2++)
 {
 month++;julLeft-=(HijriDayTable[HijriLeapYearCycle[count+1]][count2]); }
 day=julLeft; if (cycleLastDay == true) day+=1; }
 if (day<10) 
 day="0"+day;  month+=2;  if (month<10) 
 month= "0"+(month);  if (year<10) 
 year="000"+year; else if (year<100) 
 year="00"+year; else if(year<1000) 
 year="0"+year; return(year+"-"+month+"-"+day);}

function getHijriMonthDays(year,month)
{

if(year >= 1420 && year <= 1434)
 return(UmmAlQura[year-1420][month]);else
 {
 var cycleyear = year%30;  isleapyear=HijriLeapYearCycle[cycleyear]; return HijriDayTable[isleapyear][month]; }

}

function HijriDate(yearVal, monthVal, dayVal) 
{
 if(yearVal!=null && monthVal != null && dayVal != null)
 {
 this.year=yearVal; this.month=monthVal; this.day=dayVal; }
 else
 {
 tempdt=new Date;  currJul=GregorianToJulian(tempdt); currHijriStr=JulianToHijri(currJul); this.year=Number(currHijriStr.substring(0,4)); this.month=Number(currHijriStr.substring(5,7))-1; this.day=Number(currHijriStr.substring(8,10));  if (this.month > 11)
 {
 this.month = this.month - 12; this.year = this.year + 1; }
 }

 this.daysOfMonth=daysOfMonth; this.adjustDay=adjustDay; this.adjustMonth=adjustMonth;  function daysOfMonth()
 {
 return(getHijriMonthDays(this.year,this.month)); }

 function adjustDay(delta)
 {
 dayAdj=this.day+delta; if(dayAdj < 1)
 {
 this.adjustMonth(-1); this.day=this.daysOfMonth()+dayAdj; }
 else if((dayAdj) > this.daysOfMonth())
 {
 this.day=dayAdj-this.daysOfMonth(); this.adjustMonth(+1); }
 else 
 this.day=dayAdj; return this.day; }

 function adjustMonth(delta)
 {
 monthAdj=this.month+delta; if(monthAdj < 0)
 {
 this.year--; this.month=12+monthAdj; }
 else if(monthAdj > 11)
 {
 this.year++; this.month=monthAdj-12; }
 else 
 this.month=monthAdj; return this.month; }
}

function psAlert(msg, msgTitle)
{
 if (bAccessibility_win0) 
 alert(msg); else
 {
 var shtml; if (msgTitle)
 shtml = "<div id=msgTitle>" + msgTitle + "</div>"; shtml += "<div id='alertmsg'><span class='popupText' >" + msg + "</span></div>"; shtml += "<div id='alertbutton'><a class='PSPUSHBUTTON' id='Left' style = 'border:0;'><span><input type=button id='#ALERTOK' name='#ALERTOK' class='PSPUSHBUTTONTBOK' value='OK' onclick=closeMsg(this); tabindex='1' alt='Ok (Enter)' title='Ok (Enter)'></div></span></a>"; addMsg(shtml); playMsg(); }
 

}
function psComfirm(msg, msgTitle)
{
 if (bAccessibility_win0) 
 alert(msg); else
 {
 var shtml; if (msgTitle)
 shtml = "<div id=msgTitle>"+msgTitle+"</div>"; shtml += "<div id='alertmsg'><span class='popupText' >"+msg+"</span></div>"; shtml += "<div id='alertbutton'><a class='PSPUSHBUTTON' id='Left' style = 'border:0;'><span><input type=button id='#ALERTOK' name='#ALERTOK' class='PSPUSHBUTTONTBOK' value='OK' onclick=closeMsg(this); tabindex='1' alt='Ok (Enter)' title='Ok (Enter)'></div></span></a>"; addMsg(shtml); playMsg(); }
 
}
