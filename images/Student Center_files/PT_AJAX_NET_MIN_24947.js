




function WaitingObjRec(objForm, ICAcation, arrParams, bAjax, bPrompt)
{
this.WaitingObjForm = objForm; this.WaitingICAction = ICAcation; this.WaitingArrParams = arrParams; this.WaitingbAjax = bAjax; this.WaitingbPrompt = bPrompt; };if (typeof(net2) === "undefined") 
{
var net2 = {};var promptFieldName = ""; var rteditorlist = ""; var bPerf = false; net2.READY_STATE_UNINITIALIZED=0;net2.READY_STATE_LOADING=1;net2.READY_STATE_LOADED=2;net2.READY_STATE_INTERACTIVE=3;net2.READY_STATE_COMPLETE=4;net2.bInProcess=false; net2.InProcessElTagName=""; net2.InProcessICActionValue=""; net2.prevReadyState = net2.READY_STATE_UNINITIALIZED; net2.form = null;net2.url = null 
net2.params = ""; net2.bAlert=true; net2.EXCLUDEPORTALURL = "/s/WEBLIB_PT_NAV.ISCRIPT1.FieldFormula.IScript_PT_NAV_MRU_Update"; net2.WaitingObjForm=null; net2.WaitingICAction=""; net2.WaitingArrParams=null; net2.WaitingbAjax=false; net2.WaitingbPrompt=false; net2.bScript=false; net2.arrScript = new Array(); net2.arrSrcScript = new Array(); net2.arrSrcScriptApp = new Array(); net2.arrSrcCSSApp = ""; net2.nScript=-1; net2.nSrcScript=-1; net2.nScriptfiles=0; net2.nScriptfileIndex=0; net2.oScript=""; net2.oSaveObj=""; net2._HASTYLE="_HAStyle";net2.ENDSCRIPT="%/script>";net2.ENDSTYLE="%/style>";net2.PSSTYLEREQ="/PSSTYLEREQ_";net2.PSHEIGHT = "height='";net2.msgList;net2.OnloadScriptList;net2.ContentLoader=function(url,form,name,method,onload,onerror,params,contentType,bAjax,bPrompt, headerArray,isAsync, sXMLResponse)
{
if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && bPerf)
{
this.nStartAll = (new Date()).valueOf();ptConsole2.append((new Date()).valueOf() + " request start");}

this.url=(typeof url =="undefined" || !url) ? null: url;if (!this.url)
{
 alert("url is required."); return;}

this.WaitingObjQueue = new Array(); this.bAlert=true;gFocusObj = null;this.req=null;this.formname = "";this.paramsModal = "";this.paramsModal2 = "";this.form = (typeof form == "undefined" || !form) ? null : form;if (this.form)
 this.formname = this.form.name;this.bInProcess=false;this.win = window;this.doc = document;if (browserInfoObj2.isIE) {
 if (this.form != null && typeof this.form.document != "undefined")
 this.doc = this.form.document; else if (this.form != null && typeof this.form.ownerDocument != "undefined")
 this.doc = this.form.ownerDocument; }
else {
 if (this.form != null && typeof this.form.ownerDocument != "undefined")
 this.doc = this.form.ownerDocument;}
this.contentType=(typeof contentType =="undefined" || !contentType) ? null: contentType;this.name=(typeof name =="undefined" || !name) ? null: name;this.params=(typeof params =="undefined"|| !params) ? "": params;this.bAjax=(typeof bAjax =="undefined") ? 1: bAjax;this.bPrompt=(typeof bPrompt =="undefined") ? 0: bPrompt;this.bTypeAhead = false;this.bTypeAheadOnly = false;this.TAFieldID ="";this.TAFieldValue ="";if (this.form && typeof this.form.ICTypeAheadID != 'undefined' && this.form.ICTypeAheadID.value != '') 
{
this.bTypeAhead = true;this.bPrompt = false;this.TAFieldID = this.form.ICTypeAheadID.value;var TAField = document.getElementById(this.form.ICTypeAheadID.value);if (TAField != null) this.TAFieldValue = TAField.value;}
this.onerror=(typeof onerror =="undefined" || !onerror) ? this.defaultError: onerror;this.bCallBack = (typeof onload =="undefined" || !onload)? 0: 1;this.onload=(typeof onload =="undefined" || !onload) ? this.processXML: onload;this.headerArray=(typeof headerArray == "undefined" || !headerArray) ? null: headerArray;this.isAsync = typeof(isAsync) === "undefined" ? true : isAsync;this.sXMLResponse = (typeof sXMLResponse == "undefined" || !sXMLResponse) ? null : sXMLResponse;if (this.sXMLResponse) {
 this.processXML(); return;}

if (this.form || method && method.toUpperCase().indexOf("POST") !== -1) {
 if (!this.isResumitAndAllowed(this.form)) {

 return;}
 this.method="POST";} else {
 this.method="GET";}

if (!this.contentType && this.form && this.method.indexOf("POST")!=-1)
 this.contentType='application/x-www-form-urlencoded';if (!this.isPCModal()) {
 if (typeof CKEDITOR != 'undefined') UpdateEditorLinkedField(); if (!this.processPIAPostParams())
 return;  this.InProcessElTagName = ""; this.bInProcess = false; this.InProcessICActionValue ="";  this.SetWaitingObject(null,"",null,false,false); var url = this.form.action; if (typeof this.form.ICFromPagelet != 'undefined')
 url = this.form.ICContentURL.value; if (url.indexOf('?') == -1)
 url += '?ICDoModal=1&' + this.paramsModal2; else
 url += '&ICDoModal=1&' + this.paramsModal2;  this.params = 'ICDoModal=1&' + this.params; this.loadXMLDoc(true);}
else
 this.loadXMLDoc();}

net2.ContentLoader.prototype={
isAnyHtmlArea: function() {
 if (this.form) {
 var bSearch = false; var sScript = "if ((typeof bSearchDialog_" + this.form.name + " != 'undefined') && bSearchDialog_" + this.form.name + ") bSearch = true; "; eval(sScript); if (!bSearch && (typeof bCleanHtml != "undefined") && !bCleanHtml) return true; }
 return false;},
isPCModal: function() {
 if (this.bPrompt) return false; if (this.name && (
 this.name.indexOf("$hmodal") != -1 ||
 this.name.indexOf("$hpers") != -1 ||
 (!this.isAnyHtmlArea() && this.name.indexOf("$spellcheck") != -1)))
 return false; return true;},
isResumitAndAllowed:function(form)
{ 
if (this.bCallBack || !form || !form.ICAction || !form.ICResubmit || this.name.indexOf('Resubmit') != -1) return true;try {
 if (typeof window.modWin != 'undefined' && window.modWin != null && typeof window.modWin.bProcess != 'undefined' && window.modWin.bProcess) {
 var sScript = "processing_" + this.form.name + "(0, 3000);"; eval(sScript); return false; }
 } catch (e) {
 
 window.modWin = null; this.SetInProcess(false); this.SetWaitingObject(null,"",null,false,false); closeModalAll(); var sScript = "processing_" + this.form.name + "(0, 3000);"; eval(sScript); return true; }

 var sResubmit = form.ICResubmit.value; var nResubmit = new Number(sResubmit.valueOf()); if (nResubmit < 1) return true; if ((typeof this.win != 'undefined') && this.win.name == "PageletArea") {
 form.ICResubmit.value=0; return true; }
 
 var el = document.getElementById(form.ICAction.value);   if (!el || typeof el == 'undefined' || el.disabled)
 return true; switch(el.type)
 {
 case "text":
 form.ICResubmit.value=0; return true; case "textarea":
 form.ICResubmit.value=0; return true; case "checkbox":
 form.ICResubmit.value=0; return true; case "radio":
 form.ICResubmit.value=0; return true; case "select-one":
 form.ICResubmit.value=0; return true; case "select-multiple":
 form.ICResubmit.value=0; return true; default:
 return false; }
 return false; },

 
 createXMLHTTPRequest:function()
 {
 if (window.XMLHttpRequest) 
 return new XMLHttpRequest(); try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
 catch (e) {}
 try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
 catch (e) {}
 try { return new ActiveXObject("Msxml2.XMLHTTP"); }
 catch (e) {}
 try { return new ActiveXObject("Microsoft.XMLHTTP"); } 
 catch (e) {}
 
 
 throw new Error("This browser does not support XMLHttpRequest."); },

 createIEXMLParser:function()
 {
 
 try { return new ActiveXObject("Microsoft.XMLDOM"); } 
 catch (e) {throw new Error("This browser does not support XMLDOM Parser.");}
 },
 
 loadXMLDoc:function(bParamsDone)
 { 
 
 if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && bPerf)
 ptConsole2.append((new Date()).valueOf() + " processPIAPostParams start");  if (typeof bParamsDone == 'undefined' || !bParamsDone) {
 if (!this.processPIAPostParams()) 
 return; }

 this.SetInProcess(true, this.form); if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && bPerf)
 ptConsole2.append((new Date()).valueOf() + " processPIAPostParams end and server start"); if (this.method.indexOf("GET")!=-1 && this.params.length>0)
 this.url +="?"+this.params;  if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && !bPerf)
 ptConsole2.append((new Date()).valueOf() + " url:\n" + this.url + "\nparams:"+this.params.length+"\n" + this.params); try { this.req=this.createXMLHTTPRequest(); }
 catch(e)
 {
 alert(e); this.SetInProcess(false); this.SetWaitingObject(null,"",null,false,false); this.onerror.call(this); }

 if (this.req)
 {
 try 
 {
 var loader=this; this.req.onreadystatechange=function()
 {
 loader.onReadyState.call(loader); }

 if (browserInfoObj2.isSafari2x) { this.isAsync = false; }

 this.req.open(this.method,this.url,this.isAsync); if (this.isAsync && typeof this.req.withCredentials != 'undefined')
 this.req.withCredentials = "true"; if (this.contentType)
 {
 this.req.setRequestHeader('Content-Type', this.contentType); }

 
 if (this.headerArray) {
 for (var i=0; i<this.headerArray.length; i++){
 if (this.headerArray[i][0] && this.headerArray[i][1])
 this.req.setRequestHeader(this.headerArray[i][0], this.headerArray[i][1]); } 
 }

 nLastAction = 1; if (!this.bPrompt && typeof nResubmit != 'undefined' && !this.bCallBack)
 nResubmit++; this.req.send(this.params);  }
 catch (err)
 {
 try 
 {
 if (!this.isAsync && ((this.url).indexOf(net2.EXCLUDEPORTALURL) > -1)) {
 
 
 
 } else
 alert("Error in opening/sending request: - Error: " + err + " - Url:" + this.url + ", - URL Parameters: " + this.params); }
 catch (e)
 {
 alert("Error in opening/sending request url: " + this.url + ", URL Param: " + this.params); }
 
 this.sendErrorHandler(); return; }
 }
 },

 
 GetInProcess2:function()
 {
 return (this.InProcessElTagName=="A" && this.GetInProcess()) ? true : false; },

 
 GetInProcess:function()
 {
 return (this.bInProcess) ? true : false; },

 
 
 SetInProcess:function(bProcess,oForm)
 {
 this.bInProcess = bProcess; if (bProcess && typeof oForm != "undefined" && oForm != null)
 {
 var el = document.getElementById(oForm.ICAction.value); if (el != null)
 this.InProcessElTagName = el.tagName; else
 this.InProcessElTagName = ""; this.InProcessICActionValue = oForm.ICAction.value;  }

 if (!bProcess)
 {
 this.InProcessElTagName=""; this.InProcessICActionValue="";  }

 },

 GetInProcessICActionValue:function()
 {
 return (this.InProcessICActionValue); },
 
 GetWaitingObjectList:function()
 {
 return (this.WaitingObjQueue); },

 GetWaitingObject:function()
 {
 if (this.WaitingObjQueue.length > 0) {
 var obj = this.WaitingObjQueue.shift();  return {v:obj.WaitingObjForm,w:obj.WaitingICAction,x:obj.WaitingArrParams,y:obj.WaitingbAjax,z:obj.WaitingbPrompt}; }
 else
 return null; },
 
 SetWaitingObject:function(oForm,strAction,ArrParams,bAjax,bPrompt)
 {
 if (oForm == null || strAction == "")
 this.WaitingObjQueue = new Array();  else {
 
 var found = false; for (var i=0; i < this.WaitingObjQueue.length; i++) {
 if (this.WaitingObjQueue[i].WaitingObjForm.name == oForm.name) {
 found = true; break; }
 }
 
 if (found == false) { 
 var obj = new WaitingObjRec(oForm, strAction, ArrParams, bAjax, bPrompt); this.WaitingObjQueue.push(obj); }
 }
 },
 
 GetWaitingICAction:function()
 {
 return (this.WaitingObjQueue.length == 0) ? "" : this.WaitingObjQueue[0].WaitingICAction;  },

 onReadyState:function() {
 var req = this.req; try 
 {
  
 if (req.readyState == net2.READY_STATE_COMPLETE ) 
 {
 
 
 try 
 {
 if (req.status == 200) 
 {
 try {
 this.onload.call(this); }
 catch (e)
 {
 
 return; }
 }
 else
 {
 
  
  
 if ((this.url).indexOf(net2.EXCLUDEPORTALURL) > -1) 
  return;       this.sendErrorHandler(); return; }
 } 
 catch(e) 
 {
  
 
 this.sendErrorHandler(); return; }
 } 
 } 
 catch(ex) 
 {
 
 this.sendErrorHandler(); return; }
 },
 
 clearRequestProcessFlags:function()
 {
 this.SetInProcess(false); nResubmit = 0; },
 
 sendErrorHandler:function()
 {
 this.bAlert=false; this.clearRequestProcessFlags(); sScript = "processing_" + this.form.name + "(0)"; eval(sScript); this.onerror.call(this); this.bAlert=true; this.req.abort(); },
 
 defaultError:function()
 {
 this.clearRequestProcessFlags(); if (this.bAlert)
 {
 try
 {
 alert("Error fetching data!" +"\n\nreadyState:"+this.req.readyState + "\nheaders: "+this.req.getAllResponseHeaders()); }
 catch (e)
 {
 alert("Error fetching data due to network issue!"); }
 }
 },

 
 processPIAPostHiddenParams: function(sTmp, sTmpModal, sTmpModal2)
 {
 
 var hiddenObj = this.doc.getElementById(this.form.name + 'divPSHIDDENFIELDS');   {
 var hChildNDs = hiddenObj.children; var end = hChildNDs.length; for (var i = 0; i < end; i++) 
 {
 var eObj = hChildNDs[i]; if (typeof eObj.id == 'undefined') 
 continue; var eId = eObj.id; if ((eId == "#ICIncludeHistory" || eId == "#ICCorrectHistory" || eId == "#ICMatchCase") && !eObj.checked)
 continue; if (eId.indexOf("$hnewpers$") != -1)
 {
 var gid = this.form.name + 'div' + eId.split("$")[0] + '$' + eId.split("$")[2]; var gObj = this.doc.getElementById(gid); if (!gObj) 
 continue; }
 
 sTmp += ptCommonObj2.getNV(eObj); if (eId != "ICResubmit" && eId != "ICType" && eId != "ICElementNum" && eId != "ICStateNum")
 { }
 else {
 if (eId == "ICResubmit")
 sTmpModal += "ICResubmit=1&ICAJAX=1&"; else
 sTmpModal += ptCommonObj2.getNV(eObj); }
 
 if (eId.indexOf("$hnewpers$") != -1)
 continue;  sTmpModal2 += ptCommonObj2.getNV(eObj); } 
 } 
 
 return [sTmp, sTmpModal, sTmpModal2]; },

 
 processPIAPostChangedParams: function(sTmp, sTmpModal, sTmpModal2)
 {
 
 var sScript = "var chgFldArr = this.doc.chgFldArr_" + this.form.name + ";"; eval(sScript); if (this.bTypeahead && chgFldArr.length == 1 && this.TAFieldID == chgFldArr[0])
 { 
 this.bTypeAheadOnly = true; sTmp += "ICTypeAheadOnly=1&"; }

 
 while (chgFldArr.length > 0) 
 {
 var eId = chgFldArr.shift(); var eObj = null; var cId = this.form.name + "div" + eId; if (cId.indexOf("$selm") != -1)
 cId = this.form.name + "div" + eId.replace('$selm', '$selmh'); var cObj = this.doc.getElementById(cId); if (cObj) 
 {
 var ochangedObjects = cObj.children; var end = ochangedObjects.length; for (var i = 0; i < end; i++)
 {
 var eObjTmp = ochangedObjects[i]; if (typeof eObjTmp.id == 'undefined' || (eId != eObjTmp.id)) continue; eObj = eObjTmp; }
 }

 if (eObj == null)
 eObj = this.doc.getElementById(eId);  if (eObj == null)
 continue;  if ((eId == "#ICIncludeHistory" || eId == "#ICCorrectHistory" || eId == "#ICMatchCase") && !eObj.checked)
 continue; else { 
 if (eObj.tagName == "INPUT" && (eObj.type == "checkbox" || eObj.type == "radio")) 
 {
 var idArr = eObj.id.split("$"); var id = idArr[0]; var eObj2 = null; if (eObj.type == "checkbox") 
 {
 var eid = eObj.id; if (eid.indexOf("$selm") != -1)
 id = eid.replace('$selm', '$selmh'); else
 id = eObj.id + "$chk"; if (cObj)
 {
 var ochangedChildNDs = cObj.children; var end = ochangedChildNDs.length; for (var i = 0; i < end; i++) 
 {
 var eObjTmp = ochangedChildNDs[i]; if (typeof eObjTmp.id == 'undefined' || (id != eObjTmp.id)) 
 continue; eObj2 = eObjTmp; }
 }
 if (eObj2 == null)
 eObj2 = this.doc.getElementById(id); if (eid.indexOf("$selm") == -1)
 {
 if (!eObj2 && idArr.length > 1) 
 {
 id = idArr[0]; for (var i = 1; i < idArr.length - 1; i++)
 id += '$' + idArr[i]; id += "$chk$" + idArr[idArr.length - 1]; if (cObj) 
 {
 var ochangedChildNDs = cObj.children; var end = ochangedChildNDs.length; for (var i = 0; i < end; i++) 
 {
 var eObjTmp = ochangedChildNDs[i]; if (typeof eObjTmp.id == 'undefined' || (id != eObjTmp.id)) continue; eObj2 = eObjTmp; }
 }
 if (eObj2 == null)
 eObj2 = this.doc.getElementById(id); }
 } 
 } 
 else if (eObj.type == "radio")
 {
 var tscript = 'var radioGrp = this.form.' + eObj.name; eval(tscript); for (var j = 0; j < radioGrp.length; j++) 
 {
 if (radioGrp[j].checked)
 eObj = radioGrp[j]; }
 id = eObj.id + "$rad"; if (cObj)
 {
 var ochangedChildNDs = cObj.children; var end = ochangedChildNDs.length; for (var i = 0; i < end; i++)
 {
 var eObjTmp = ochangedChildNDs[i]; if (typeof eObjTmp.id == 'undefined' || (id != eObjTmp.id)) continue; eObj2 = eObjTmp; }
 }
 if (eObj2 == null)
 eObj2 = this.doc.getElementById(id); if (!eObj2 && idArr.length > 1)
 {
 id = idArr[0]; for (var i = 1; i < idArr.length - 1; i++)
 id += '$' + idArr[i]; id += "$rad$" + idArr[idArr.length - 1]; if (cObj)
 {
 var ochangedChildNDs = cObj.children; var end = ochangedChildNDs.length; for (var i = 0; i < end; i++) 
 {
 var eObjTmp = ochangedChildNDs[i]; if (typeof eObjTmp.id == 'undefined' || (id != eObjTmp.id)) continue; eObj2 = eObjTmp; }
 }
 if (eObj2 == null)
 eObj2 = this.doc.getElementById(id); }
 } 
 
 if (eObj2) 
 {
 sTmp += ptCommonObj2.getNV(eObj2); sTmpModal2 += ptCommonObj2.getNV(eObj2); }

 if (!eObj.checked)
 continue; }
 sTmp += ptCommonObj2.getNV(eObj); sTmpModal2 += ptCommonObj2.getNV(eObj); }
 } 

 return [sTmp, sTmpModal, sTmpModal2]; },

 
 processPIAPostUncleanForm: function(sTmp, sTmpModal, sTmpModal2)
 {
 var frmElements = this.form.elements; var len = frmElements.length; for (var i = 0; i < len; i++) 
 {
 var eObj = frmElements[i]; var eId = eObj.id;  if (typeof eId != 'undefined') 
 {
 if (eId != "ICResubmit" && eId != "ICType" && eId != "ICElementNum" && eId != "ICStateNum")
 { }
 else {
 if (eId == "ICResubmit")
 sTmpModal += "ICResubmit=1&ICAJAX=1&"; else
 sTmpModal += ptCommonObj2.getNV(eObj); }
 }

 if ((eId == "#ICIncludeHistory" || eId == "#ICCorrectHistory" || eId == "#ICMatchCase") && !eObj.checked)
 continue; else { 
 if (eObj.tagName == "INPUT" && (eObj.type == "checkbox" || eObj.type == "radio")) 
 {
 if (!eObj.checked)
 continue; }
 }

 sTmp += ptCommonObj2.getNV(eObj); if (eId.indexOf("$hnewpers$") == -1)
 sTmpModal2 += ptCommonObj2.getNV(eObj); } 
 
 return [sTmp, sTmpModal, sTmpModal2]; },

 
 processPIAPostParams: function() 
 {
 if (!this.form)
 return true; var sTmp = ""; var sTmpModal = ""; var sTmpModal2 = "ICAJAX=1&";  if ((typeof bCleanHtml != "undefined") && bCleanHtml) 
 { 
 if (ptCommonObj2.isPromptReq(this.name) && this.name.indexOf("$prompt") !=-1 && !this.bTypeAhead) 
 {
 var aName = this.name.replace("$prompt", ""); sScript = "addchg_"+this.form.name+"(null,aName);"; eval(sScript); }

 
 var returnValues = this.processPIAPostHiddenParams(sTmp, sTmpModal, sTmpModal2); sTmp = returnValues[0]; sTmpModal = returnValues[1]; sTmpModal2 = returnValues[2];  var returnValues = this.processPIAPostChangedParams(sTmp, sTmpModal, sTmpModal2); sTmp = returnValues[0]; sTmpModal = returnValues[1]; sTmpModal2 = returnValues[2]; } 
 else {
 
 var returnValues = this.processPIAPostUncleanForm(sTmp, sTmpModal, sTmpModal2); sTmp = returnValues[0]; sTmpModal = returnValues[1]; sTmpModal2 = returnValues[2]; }

 if (this.params != "") 
 this.params += "&"; if (this.bAjax) 
 this.params += "ICAJAX=1";  else 
 this.params += "ICAJAX=0"; if (this.bPrompt) 
 this.params += "&ICSPROMPT=1"; if (typeof (bSearchDialog_empty) != "undefined" && bSearchDialog_empty)
 this.params += "&ICFRMSEARCH=1";   var bNavTypeDropDown = 0; if (!isCrossDomain(parent) && typeof (parent.ptIframe) != "undefined") 
 {
 if (typeof (parent.pthNav) != "undefined") 
 bNavTypeDropDown = 1; }

 if (bNavTypeDropDown) 
 this.params += "&ICNAVTYPEDROPDOWN=1";  else 
 this.params += "&ICNAVTYPEDROPDOWN=0"; if (sTmpModal != "") 
 this.paramsModal = sTmpModal; if (sTmpModal2 != "") 
 this.paramsModal2 = sTmpModal2; if (sTmp != "") 
 this.params += ("&" + sTmp);  if ((this.params).lastIndexOf("&") == ((this.params).length - 1))
 this.params = (this.params).substr(0, (this.params).length - 1); return true; },





reduceScrollareaHeight:function(id, data)
 {
 if (!id || id =="" || !data || data =="" || this.bTypeahead)
 return;  var icActionVal =this.GetInProcessICActionValue();  if (typeof icActionVal != "undefined" && icActionVal && icActionVal.indexOf("$new$") >= 0)
 return; if (data.indexOf("$scrolli$") < 0 && data.indexOf("$scroll$") < 0 && data.indexOf("$scrollm$") < 0 ) 
 return; var updateObj = document.getElementById(id);  if (!updateObj)
 return;  if (updateObj.children.length <1)
 return;    var scrollAreObj = updateObj.children[0];  if (!scrollAreObj)
 return;   if (scrollAreObj.className == "" || scrollAreObj.className == " " || (scrollAreObj.className).indexOf("SCROLLAREA")>=0 || (scrollAreObj.className).indexOf("GRIDWBO")>=0)
 {
 var parentObj = scrollAreObj.offsetParent; if (parentObj && parentObj.nodeName == "TD")
 {
 var prevSibling; if (browserInfoObj2.isIE) 
 {
 if (typeof parentObj.previousElementSibling =="undefined")
 prevSibling = parentObj.previousSibling; else 
 prevSibling = parentObj.previousElementSibling;  }
 else
 prevSibling = parentObj.previousElementSibling;   var newHeight = 0;  var newData; if (typeof String.prototype.trim != "function")
 newData = data; else 
 newData = data.trim(); var nEnd = newData.indexOf(">"); if (newData.indexOf("<") == 0 && nEnd > 0)
 {
 newData = newData.substr(0, nEnd+1); var nStart = newData.indexOf(net2.PSHEIGHT); if (nStart >=0)
 {
 newData = newData.substr(nStart+ (net2.PSHEIGHT).length); var nEnd = newData.indexOf("'"); newData = newData.substr(0,nEnd); newHeight = Number(newData); }
 }
 
 
 if (prevSibling && prevSibling.nodeName == "TD" && prevSibling.innerHTML == "")
 {
 if (newHeight >0)
 {
 if (prevSibling.height > newHeight)
 prevSibling.style.height = newHeight + "px"; }
 else if (prevSibling.height > 228)
 {
 prevSibling.style.height = 100 + "px"; } 
 }
 
 
 if (prevSibling && prevSibling.height > 228)
 this.reduceGroupboxHeight(prevSibling); }
 }
 },


 
 reduceGroupboxHeight:function(prevSibling) 
 {
 if (!prevSibling)
 return; if (prevSibling.offsetParent && prevSibling.offsetParent.offsetParent && prevSibling.offsetParent.offsetParent.offsetParent
  && prevSibling.offsetParent.offsetParent.offsetParent.offsetParent)
  {
  if (prevSibling.offsetParent.className == "PSGROUPBOX" &&
  prevSibling.offsetParent.offsetParent.className == "" &&
  prevSibling.offsetParent.offsetParent.offsetParent.className=="PSGROUPBOXWBO" &&
  prevSibling.offsetParent.offsetParent.offsetParent.offsetParent.nodeName=="TD")
  {
  var currentObj = prevSibling.offsetParent.offsetParent.offsetParent.offsetParent;  var prevTdSibling;  if (browserInfoObj2.isIE) 
  {
  if (typeof currentObj.previousElementSibling =="undefined")
  prevTdSibling = currentObj.previousSibling;  else 
  prevTdSibling = currentObj.previousElementSibling;   }
  else
  prevTdSibling = currentObj.previousElementSibling;   if (prevTdSibling && prevTdSibling.nodeName == "TD" && prevTdSibling.innerHTML == "")
  {
  if (prevTdSibling.height > 90)
  prevTdSibling.style.height = 90 + "px";  }
 
  }
 }
 },
 



























 processXML:function()
 {
 oDoc = document; var bModalErr = false; if (!this.sXMLResponse) {
 var val = getPSLoginCookieValue();  if (val == -1)
 {
 if (isSignout())
 self.location=timeOutURL;  else
 window.parent.document.body.innerHTML=this.req.responseText; return; }
 if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && bPerf)
 {
 this.nStartResponse = (new Date()).valueOf(); ptConsole2.append((new Date()).valueOf() + " server return. response:"+this.req.responseText.length); } 


 var ct = this.req.getResponseHeader("content-type"); var bModal = this.req.getResponseHeader('bModal'); var sCancelName = this.req.getResponseHeader('sCancelName'); this.bModal = bModal; if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && !bPerf) {
 this.nStartResponse = (new Date()).valueOf();  if (ct.indexOf("xml") != -1 || ct.indexOf("html") != -1)
 ptConsole2.append((new Date()).valueOf() + " bModal:" + bModal + "\n response:"+this.req.responseText.length+"\n" + this.req.responseText); else
 ptConsole2.append((new Date()).valueOf() + " bModal:" + bModal + "\n content type:" + ct); }

 if (bModal == 2 || bModal == 5) {
 if (bModal == 5 && typeof window.winParent != 'undefined' && window.winParent != null) {
 var bNotXML = 0; if (ct.indexOf("xml") == -1) {
 bNotXML = 1;  }
 sScript = "var win = getFirstParentWin();"; loader == null; sScript += "win.nResubmit++;win.aAction_" + this.form.name + "(this.form, 'Resubmit');"; pm.updateMessageEvents(this.name); eval(sScript); if (bNotXML)
 closeModalAll(); return; }
 else if (bModal == 2 && (typeof window.modWin == 'undefined' || window.modWin == null)
 && (typeof window.modWinClosed == 'undefined' || window.modWinClosed == null)
 && (typeof window.winParent != 'undefined') && window.winParent != null) {
 winParent.nResubmit++; loader == null; var sScript = "winParent.aAction_" + this.form.name + "(this.form, 'Resubmit');"; pm.updateMessageEvents(this.name); eval(sScript); return; }
 else {
 nResubmit = 0; try {
 var sScript = "this.form = oDoc." + this.form.name + ";"; eval(sScript); if (bModal == 5 && ct.indexOf("xml") == -1) {
 if (typeof window.winParent != 'undefined' && window.winParent != null) {
 alert("FATAL ERROR bModal=" + bModal + " - Partial page refresh should be returned, but not."); this.SetInProcess(false); this.SetWaitingObject(null, "", null, false, false); closeModal(); return; }
 else {
 bModal = ""; this.bModal = bModal; }
 }
 }
 catch (err) {
 if (typeof window.winParent != 'undefined' && window.winParent != null) {
 alert("FATAL ERROR bModal=" + bModal + " - Partial page refresh should be returned, but not."); this.SetInProcess(false); this.SetWaitingObject(null, "", null, false, false); closeModal(); return; }
 else {
 bModal = ""; this.bModal = bModal; }
 }
 }
 }

 bModalErr = this.req.responseText.indexOf("<div id='PSMODAL_ERR'") > 0; if (ct.indexOf("xml") == -1 && !bModalErr) { 
 if (bModal == 3 || bModal == 4 || bModal == 5 || bModal == 6) 
 { 
 var url = this.form.action; if (typeof this.form.ICFromPagelet != 'undefined')
 url = this.form.ICContentURL.value; var parentWin = window.winParent; if (bModal == 6) {
 parentWin = getFirstParentWin(); url += '?' + this.paramsModal; this.SetInProcess(false); this.SetWaitingObject(null,"",null,false,false); closeModalAll(); parentWin.modWin = null; parentWin.doModal(url, this.bPrompt, parentWin, sCancelName); return; }
 else if (bModal != 3 && parentWin != null && this.form) {
 if (typeof window.modWin != 'undefined' && window.modWin != null) {
 this.form.ICResubmit.value = "1"; this.form.submit(); return; }
 else { 
 winParent.doModal(url + '?' + this.paramsModal, this.bPrompt, winParent, sCancelName); return; }
 }
 else {
 if (bModal == 4)
 this.closeModal(); nResubmit = 0; loader = null;  doModal(url + '?' + this.paramsModal, this.bPrompt, window, sCancelName); return; }
 } 
 if (bModal == 2)
 {
 this.SetInProcess(false); this.SetWaitingObject(null,"",null,false,false); this.closeModal(); }
 if (typeof this.form.ICFromPagelet != 'undefined') {
 var sResubmitURL = this.req.getResponseHeader('sResubmitURL'); if (sResubmitURL)
 this.form.ICResubmitURL.value = sResubmitURL; }
 this.form.ICResubmit.value="1"; if (window.winParent != null && bModal != 7) {
 doUpdateFirstParent(this.form, this.name, getFirstParentWin()); return; }
 else {
 this.form.submit(); if (ct.indexOf("html") == -1) {
 var sScript = "processing_" + this.form.name + "(0, 3000);"; eval(sScript); }
 this.SetInProcess(false); this.SetWaitingObject(null,"",null,false,false); return; }
 } 
 } 

 if (bModalErr)
 {
 
 var nLen = this.req.responseText.length;  var nPos = this.req.responseText.indexOf("<?xml");  var nStrLen= nLen - nPos - 26;  this.sXMLResponse = this.req.responseText.substr(nPos, nStrLen);  }
 
 var xmlDoc = null; var bRecSep = 0;  var bGrpSep = 0;  var bFilSep = 0;  var bUniSep = 0;  var bSOH = 0;  var bSUB = 0;  var bFF = 0;   if (window.ActiveXObject)
 {
 if (this.sXMLResponse) {
 xmlDoc = this.createIEXMLParser(); xmlDoc.async = "false"; xmlDoc.loadXML(this.sXMLResponse); }
 else {
 var bHaveErr = false; if (typeof this.req.responseXML.parseError != 'undefined') {
 if (this.req.responseXML.parseError.errorCode != 0)
 bHaveErr = true; }
 else {
 if (this.req.responseXML.documentElement.nodeName != 'parsererror' || this.req.responseXML.getElementsByTagName('parsererror').length >0)
 bHaveErr = true; }

 if (!bHaveErr) 
 xmlDoc = this.req.responseXML; else { 
 xmlDoc = this.createIEXMLParser(); xmlDoc.async = "false"; try { 
 var sText = this.req.responseText; if (sText.indexOf("\u001E") != -1) {
 bRecSep = 1; sText = sText.replace(/\u001E/g, "&#30;");  }
 if (sText.indexOf("\u001D") != -1) {
 bGrpSep = 1; sText = sText.replace(/\u001D/g, "&#29;");  }
 if (sText.indexOf("\u001C") != -1) {
 bFilSep = 1; sText = sText.replace(/\u001C/g, "&#28;");  }
 if (sText.indexOf("\u001F") != -1) {
 bUniSep = 1; sText = sText.replace(/\u001F/g, "&#31;");  }
 if (sText.indexOf("\u0001") != -1) {
 bSOH = 1; sText = sText.replace(/\u0001/g, "&#1;");  }
 if (sText.indexOf("\u001A") != -1) {
 bSUB = 1; sText = sText.replace(/\u001A/g, "&#26;");  }
 if (sText.indexOf("\u000C") != -1) {
 bFF = 1; sText = sText.replace(/\u000C/g, "&#14;");  }
 xmlDoc.loadXML(sText); }
 catch (e) {
 alert("invalid xml"); return; }
 }
 }
 }
 else
 {
 var parser=new DOMParser(); if (this.sXMLResponse)
 xmlDoc = parser.parseFromString(this.sXMLResponse, "text/xml"); else
 xmlDoc = parser.parseFromString(this.req.responseText, "text/xml"); if (xmlDoc.documentElement.nodeName=="parsererror" || xmlDoc.getElementsByTagName('parsererror').length > 0) {
 var sText = this.req.responseText; if (sText.indexOf("\u001E") != -1) {
 bRecSep = 1; sText = sText.replace(/\u001E/g, "&#30;");  }
 if (sText.indexOf("\u0001") != -1) {
 bSOH = 1; sText = sText.replace(/\u0001/g, "&#1;");  }
 if (sText.indexOf("\u001A") != -1) {
 bSUB = 1; sText = sText.replace(/\u001A/g, "&#26;");  }
 if (sText.indexOf("\u000C") != -1) {
 bFF = 1; sText = sText.replace(/\u000C/g, "&#14;");  }

 xmlDoc=parser.parseFromString(sText,"text/xml"); if (xmlDoc.documentElement.nodeName=="parsererror" || xmlDoc.getElementsByTagName('parsererror').length > 0) {
 alert("xml is invalid"); return; }
 }
 } 
 
 var promptList = xmlDoc.getElementsByTagName("PFIELD");  var scriptList = xmlDoc.getElementsByTagName("GENSCRIPT"); var sysvar = xmlDoc.getElementsByTagName("SYSVAR"); net2.msgList = xmlDoc.getElementsByTagName("GENMSG"); var fieldList = xmlDoc.getElementsByTagName("FIELD"); rteditorlist = xmlDoc.getElementsByTagName("RTEDITORSCRIPT");  var modalfield = xmlDoc.getElementsByTagName("MFIELD"); var jsList = xmlDoc.getElementsByTagName("GENJS");  var cssList = xmlDoc.getElementsByTagName("GENCSS");   if (scriptList) 
 {
 for (var i=0; i < scriptList.length; i++)
 {
 var sTmp = ""; if(scriptList[i].firstChild != null)
 sTmp = (scriptList[i].firstChild.data).toLowerCase();  if (sTmp.indexOf("document.location=") == 0 || sTmp.indexOf("document.location =") == 0) 
 {
 pm.updateMessageEvents(this.name); var sTmp2 = scriptList[i].firstChild.data; var pos = 19; var sOrigURL =sTmp2.substring(pos, sTmp2.length - 2); var sURL = preProcessUrl(sOrigURL, window, top, this.form); sURL = sURL.replace(/&REG/g,"&%52%45%47");    for (var j=0; j < scriptList.length; j++)
 {
 if (i == j)
 continue; var sTmp3= scriptList[j].firstChild.data; if (sTmp3.indexOf("PS_switch_user_url") != -1)
 {
 eval(sTmp3); sURL = PS_switch_user_url + "&ruri=" + encodeURIComponent(sURL); break; }
 }
 scriptList[i].firstChild.data = sTmp2.substring(0, pos) + sURL + sTmp2.substring(sTmp2.length - 2); this.DoUrlAJAX(sURL, scriptList); if (sURL.indexOf("mailto:") ==0)
 break; else 
 return; } 
 } 
 } 

 
 if (cssList && cssList.length > 0) 
 { 
 eval(cssList[0].firstChild.data); this.processIncludeCSS(); }

 if (sysvar && sysvar.length>0) 
 {
 for (var i=0; i < sysvar.length; i++) 
 eval(sysvar[i].firstChild.data); }

 net2.nScript=-1; net2.nSrcScript=-1; net2.bScript=false; net2.arrScript = new Array();   if (jsList && jsList.length > 0) 
 {
 eval(jsList[0].firstChild.data); this.processIncludeJS(); }

 if (fieldList)
 {
 var sCleanData = ""; var sData = ""; if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && bPerf)
 ptConsole2.append((new Date()).valueOf() + " partial page refresh start");      if (this.bTypeAhead && typeof(saveTALostFocus) == "function")
 {
 var taLostFocus = saveTALostFocus(); }
 
 for (var flIdx=fieldList.length-1; flIdx > -1; flIdx--)
 {
 attrs=fieldList[flIdx].attributes; id=attrs.getNamedItem("id").value; oid = id.substr(3 + this.form.name.length, id.length); var obj = oDoc.getElementById(id); if (obj)
 { 
 if (obj.innerHTML.length == 0 && fieldList[flIdx].firstChild.data.length == 0)
 continue;   sCleanData = fieldList[flIdx].firstChild.data;  try {
 this.reduceScrollareaHeight(id,sCleanData.substr(0,200)); }
 catch (e) {}


 
 if ((typeof bCDATA != "undefined") && bCDATA && 
 (sCleanData.indexOf("&lt;![CDATA*") != -1 || sCleanData.indexOf("<![CDATA*") != -1) && 
 (sCleanData.indexOf("*]&gt;") != -1 || sCleanData.indexOf("*]>") != -1))
 sCleanData = this.restoreXMLData(sCleanData);  if (bRecSep == 1 && sCleanData.indexOf("&#30;") != -1)
 sCleanData = sCleanData.replace(/&#30;/g, "\u001E"); if (bGrpSep == 1 && sCleanData.indexOf("&#29;") != -1)
 sCleanData = sCleanData.replace(/&#29;/g, "\u001D"); if (bFilSep == 1 && sCleanData.indexOf("&#28;") != -1)
 sCleanData = sCleanData.replace(/&#28;/g, "\u001C"); if (bUniSep == 1 && sCleanData.indexOf("&#31;") != -1)
 sCleanData = sCleanData.replace(/&#31;/g, "\u001F"); if (bSOH == 1 && sCleanData.indexOf("&#1;") != -1)
 sCleanData = sCleanData.replace(/&#1;/g, "\u0001"); if (bSUB == 1 && sCleanData.indexOf("&#26;") != -1)
 sCleanData = sCleanData.replace(/&#26;/g, "\u001A"); if (bFF == 1 && sCleanData.indexOf("&#14;") != -1) 
 sCleanData = sCleanData.replace(/&#14;/g, "\u000C");  if (rteditorlist)
 {
 var RTArea = obj.getElementsByTagName('textarea'); if (RTArea.length >0)
 {
 var countrtarea; var ResponseDataObject= document.createElement('div'); ResponseDataObject.setAttribute('id','TempResponse'); ResponseDataObject.innerHTML = sCleanData; var RTAreanew = ResponseDataObject.getElementsByTagName('textarea'); for(var ii = 0; ii < RTArea.length; ii++)
 {
 countrtarea = 0; for(var jj=0; jj < RTAreanew.length; jj++)
 {
 if (RTArea[ii].id == RTAreanew[jj].id)
 countrtarea = countrtarea + 1; }
 if (countrtarea == 0 )
 { 
 if (typeof(CKEDITOR)!== "undefined") 
 {
 for ( var instanceName in CKEDITOR.instances)
 { 
 if (instanceName == RTArea[ii].id)
 eval(CKEDITOR.instances[instanceName].destroy()); } 
 }
 }
 } 
 } 
 RTArea = null; ResponseDataObject = null; RTAreanew = null; } 

 
 if ((typeof bCleanHtml != "undefined") && bCleanHtml) 
 {
 obj.innerHTML = "";  obj.innerHTML = sCleanData; }
 else 
 {
 if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && bPerf)
 ptConsole2.append((new Date()).valueOf() + "call processScript start");  sData = this.processScript(id, sCleanData); obj.innerHTML = ""; if (sData && sData.length>0)
 obj.innerHTML = sData; else
 obj.innerHTML = sCleanData;  if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && bPerf)
 ptConsole2.append((new Date()).valueOf() + "call processScript end"); }
 sCleanData = null; sData = null;   if ((browserInfoObj2.isIE) && (oid != "QUERYRESULT") && (obj.firstChild != null) && (obj.firstChild.tagName != null) && 
 (((obj.firstChild.tagName).toUpperCase().indexOf("TABLE") >= 0))) 
 {
 if (!(window.document.dir == 'rtl' && (oid == "PAGECONTAINER" || oid == "PSPANELTABS")))
 {
 if (window.document.dir != 'rtl')
 obj.style.width = 0;   obj.style.width = obj.firstChild.offsetWidth; }
 }
 } 
 } 
 
 if (typeof(taLostFocus) == "function")
 {
 taLostFocus(); }

 if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && bPerf)
 ptConsole2.append((new Date()).valueOf() + " partial page refresh end"); } 
 
 try {
 if (window.modWin && window.modWin.modalZoomName != null) {
 var zObj = window.document.getElementById(window.modWin.modalZoomName); if (zObj && zObj.style.display == "none") zObj.style.display = "block"; }
 } catch (e) {
 }
 
 
 
 if (this.bTypeahead && !this.bTypeAheadOnly)
 {
 var TAField = oDoc.getElementById(this.form.ICTypeAheadID.value); if (TAField != null && this.TAFieldValue != '' && TAField.value != this.TAFieldValue)
 TAField.value = this.TAFieldValue; }
 
 
 var sScript = "ptTAObj_" + this.formname + ".HideTheBox();"; try {
 eval(sScript); } catch (e) {
 }
 
 if (net2.msgList)
 {
 for (var i = 0; i < net2.msgList.length; i++) {
 var msg = net2.msgList[i].firstChild.data; addMsg(msg); }
 }

 if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && bPerf)
 ptConsole2.append((new Date()).valueOf() + " scripts start"); if (scriptList)
 net2.OnloadScriptList = scriptList; else 
 net2.OnloadScriptList=""; if (net2.bScript) { 
 net2.nScriptfileIndex=0; net2.nScriptfiles = net2.arrSrcScript.length; if (net2.nScriptfiles == 0) {
 this.finalCall(); return; } 

 this.getScriptfile(); }
 else {
 this.finalCall(); return; } 

if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && bPerf)
 ptConsole2.append((new Date()).valueOf() + " scripts & request end"); },




restoreXMLData:function(sRespdata) 
{
 var sTmpdata = sRespdata; if (sRespdata.indexOf("&lt;![CDATA*") != -1)
 sTmpdata=(sTmpdata.replace(/&lt;!\[CDATA\*/g,"&lt;![CDATA[")); if (sRespdata.indexOf("<![CDATA*") != -1)
 sTmpdata=(sTmpdata.replace(/<!\[CDATA\*/g,"<![CDATA[")); if (sRespdata.indexOf("*]&gt;") != -1)
 sTmpdata=(sTmpdata.replace(/\*\]\&gt;/g,"]]&gt;")); if (sRespdata.indexOf("*]>") != -1)
 sTmpdata=(sTmpdata.replace(/\*\]\>/g,"]]>")); return sTmpdata;},

loadedAllScriptfiles:function() 
{
 if (net2.nScriptfiles>0 && net2.nScriptfileIndex >= net2.nScriptfiles) 
 {
 this.finalCall(); return 1; }
 else if (net2.nScriptfiles>0)
 return 0; else
 return 1; },

getScriptfile:function() 
{
 if (this.loadedAllScriptfiles()) return;   var i = net2.nScriptfileIndex; if (net2.nScriptfiles>0 && i<net2.nScriptfiles) 
 {
 var tmp = net2.arrSrcScript[i].split("/"); var Id = tmp[tmp.length - 1].split("."); var newId = (Id[0].concat("_")).concat(Id[1]); var oldScript = document.getElementById(newId); var oHead=document.getElementsByTagName("head")[0]; if (oldScript) 
 {
 net2.nScriptfileIndex++; this.GetNextJSFile(); return; }
 net2.oScript = document.createElement("script");  net2.oScript.setAttribute("id",newId); net2.oScript.setAttribute("type","text/javascript"); net2.nScriptfileIndex++; if (net2.arrSrcScript[i]) {
 net2.oScript.setAttribute("src",net2.arrSrcScript[i]); net2.oSaveObj =this;  net2.oSaveHead = oHead; this.loadScriptfile(); } 
 else {
 this.GetNextJSFile(); }
 }
},


loadScriptfile: function()
{ 
 net2.oScript.onerror=net2.oScript.onload=net2.oScript.onreadystatechange = this.GotAsyncData; net2.oSaveHead.appendChild(net2.oScript);},


GotAsyncData:function() 
{
 

 
 if (!browserInfoObj2.isIE || (browserInfoObj2.isIE && (typeof (net2.oScript).readyState == "undefined" || (net2.oScript).readyState == "loaded" || (net2.oScript).readyState == "complete")))
 {
 
 net2.oSaveObj.getScriptfile(); } 
 return;},


GetNextJSFile:function() 
{
 this.getScriptfile();},

DoUrlAJAX: function(sURL, scriptList) {
 var bWorkCenter = isWorkCenter() && !isUrlFrmModal(sURL, window) && (window.ptalPageletArea || (parent && parent.ptalPageletArea)); var bWorkCenterDashboard = isWorkCenterDashboard(sURL); if(bWorkCenterDashboard && isUrlFrmModal(sURL, window) ) {
 if (typeof top.ptalPage == 'object' && top.ptalPage)
 sURL = top.ptalPage.appendPageParameters(sURL); top.document.getElementById('ptifrmtgtframe').src= sURL; this.closeModal(window.modalID); return; }
 if (isModeless(MTop().modlessId)) {
 window.doModeless(sURL, -1, -1, ''); }
 else if (bWorkCenter) {
 this.doWorkCenterRedirect(sURL); if (isUrlFrmModal(sURL, window))
 this.closeModal(window.modalID); net2.OnloadScriptList = scriptList; this.finalCall();  var sScript = "processing_" + this.form.name + "(1, 3000);";  eval(sScript); }
 else if (isUrlFrmModal(sURL, window)) {
 this.doModalRedirect(sURL); }
 else if (isPortalUrl(sURL)) {
 this.closeModal(); if (sURL.indexOf("&psredirecttop=y") !== -1) { 
 
 sURL = sURL.replace("&psredirecttop=y", "");  }
 top.location.href = sURL; }
 else {
 this.closeModal(); if (sURL.indexOf("mailto:") ==0)
 window.open(sURL);  else {
 if (sURL.indexOf("WEBLIB_PORTAL.PORTAL_HOMEPAGE.FieldFormula.IScript_HPCompRemove") !== -1)
 top.location.href=sURL; else
 window.location.href = sURL; }
 }
},

doWorkCenterRedirect : function(sURL) {
 var sTargetPSHomeSuffix = ""; var sTargetFrameURL = ""; try {
 sTargetFrameURL = top.document.getElementById('ptifrmtgtframe').contentWindow.location.href
 }
 catch(e) {
 sTargetPSHomeSuffix = "_newwin"; }
 if ((typeof sTargetFrameURL != "undefined") && sTargetFrameURL && sTargetFrameURL != "")

 {
 if(isPortalHomagPageUrl(sTargetFrameURL) || isPIAComponentUrl(sTargetFrameURL) || isPortalUrl(sTargetFrameURL))
  {
  if((getUrlHost(sTargetFrameURL) == getUrlHost(sURL)))
 {
  sTargetPSHomeSuffix = getPSHomeSuffix(sTargetFrameURL); }
 else if((getUrlHost(top.document.location.href) == getUrlHost(sURL)))
 {
 sTargetPSHomeSuffix=getPSHomeSuffix(top.document.location.href); }
 else
 {
 sTargetPSHomeSuffix = "_newwin"; }
 }
 }

 if((sTargetPSHomeSuffix == "_newwin" && getUrlHost(top.document.location.href) == getUrlHost(sURL)))
 {
 sTargetPSHomeSuffix=getPSHomeSuffix(top.document.location.href); }
 this.closeModal(); this.SetInProcess(false); if(sURL.indexOf("replaceCurrentTopWindow")==-1) 
 sURL = sURL.replace("/psp/","/psc/"); var nUrlPos = String(sURL).indexOf('\/psp\/'); if(nUrlPos === -1)
 var nUrlContPos = String(sURL).indexOf('\/psc\/');  if (nUrlPos != -1 || nUrlContPos != -1)
 {
 var sURLtemp = sURL.split("/"); var siteName = sURLtemp[4]; if(siteName.indexOf("_")!=-1)
 {
 var siteNametemp = siteName.lastIndexOf("_"); var siteNameNewWin = siteName.substring(siteNametemp + 1,siteName.length); if(isNaN(siteNameNewWin))
 {
 var siteNamenew = siteName + sTargetPSHomeSuffix; }
 else
 {
 var siteNamenew = siteName.substring(0,siteNametemp); siteNamenew = siteNamenew + sTargetPSHomeSuffix; }
 sURL = sURL.replace(siteName,siteNamenew); }
 else
 {
 var siteNametemp = "/" + siteName + sTargetPSHomeSuffix + "/";  sURL = sURL.replace("/"+siteName+"/", siteNametemp); }
 } 
 
 var obj = document.getElementById("WAIT_" + this.formname); if (obj) {
 obj.style.display="none"; }
 obj = document.getElementById("SAVED_" + this.formname); if (obj) {
 obj.style.display="none"; } 

 
 var isFromNavPane = (window.ptalPageletArea || (parent && parent.ptalPageletArea));  if (isFromNavPane && parent.ptIframe && parent.ptIframe.isWorkCenterDirty()) {
 var cancelFunction = function(arg1, arg2) {
 if(arg2.indexOf("replaceCurrentTopWindow")!=-1) 
 top.location.href=arg2; else 
 top.document.getElementById('ptifrmtgtframe').src= arg2; };  parent.ptIframe.saveWarningForWorkCenter(cancelFunction, null,2,this, sURL); } 
 else if(sURL.indexOf("replaceCurrentTopWindow")!=-1) 
 top.location.href=sURL; else 
 top.document.getElementById('ptifrmtgtframe').src= sURL;},

doModalRedirect: function(sUrl) {
 if (isPortalUrl(sUrl))
 top.location.href = sUrl; else
 getFirstParentWin().location.href = sUrl; closeModalAll();},

closeModal: function(ID){
 if (this.bTypeAhead && !(this.name.indexOf("Resubmit") !== -1)) 
 return; if ((typeof ID != 'undefined' && ID != null) || (typeof window.modWin != 'undefined' && window.modWin != null)) {
 if (typeof ID != 'undefined' && ID != null) {
 if (window.winParent) {
 ptCommonObj2.hidePopupMask(window.winParent); window.winParent.modWin = null; }
 closeModal(ID); } else {
 try { 
 if (window.winParent)
 {
 if (window.modWin.bMsg) 
 closeMsg(null, top.modId); else 
 {
 if (typeof window.modWin.modalID != 'undefined' && window.modWin.modalID != null)
 closeModal(window.modWin.modalID); else 
 {
 if (typeof window.modWin.id != 'undefined' && window.modWin.id != null)
 {
 var winID = window.modWin.id; var n = winID.indexOf("_"); var modWinNum = -1; if (n>-1 && winID.length >(n+1) && !isNaN(winID.substring(n+1)))
 {
 modWinNum = (winID.substring(n+1)).valueOf(); closeModal(modWinNum); }
 else
 closeModalAll(); }
 
 else
 closeModalAll(); }
 }
 }
 else {
 if (isWinModeless(window))
 closeModal(window.modWin.modalID); else
 closeModalAll(); }
 }
 catch (e) { }
 window.modWin = null; if (window.winParent)
 ptCommonObj2.hideParModalMask(window, window.winParent.modalID); else {
 if (isWinModeless(window))
 ptCommonObj2.hidePopupMask(window)
 else
 ptCommonObj2.hidePopupMask(top); }
 }
 }
 else if( typeof window != 'undefined' && window.name.indexOf("modWin_") !== -1)
 {
 var sName = this.name; if (sName.indexOf("#KEY") !== -1)
 {
 sName = sName.substring(4); if (sName.charCodeAt() == 27)
 {
 var modObj = MTop().document.getElementById(MTop().PTMOD_ + window.modalID); if (typeof modObj != 'undefined' && modObj && modObj.bRCFModal)
 {
 if (typeof MTop().ptDialog != 'undefined' && MTop().ptDialog)
 MTop().ptDialog.doCloseModalDialog(window.modalID); }
 }
 }
 }
},




finalCall:function()
{
 net2.arrSrcScript= new Array(); net2.nScriptfiles=0; net2.nScriptfileIndex=0; if (net2.bScript) { 
 var n= net2.arrScript.length; for (var xx=0; xx < n; xx++)
 {
 if (net2.arrScript[xx]) 
 this.addScript(id+"_"+xx,net2.arrScript[xx]);  }
 net2.arrScript = new Array(); net2.bScript = false; }

 
 if(window.ptalPageletArea || (parent && parent.ptalPageletArea))
 {
 var pageletname=this.form.parentElement.id.slice(14); if (window.ptalPageletArea)
 window.ptalPageletArea.fixPageletLinksById(pageletname); else
 parent.ptalPageletArea.fixPageletLinksById(pageletname); }
 var scriptData, el; if (net2.OnloadScriptList && net2.OnloadScriptList.length>0 ) { 
 for (var i=0; i < net2.OnloadScriptList.length; i++) 
 {
 if(net2.OnloadScriptList[i].firstChild != null)
 scriptData = net2.OnloadScriptList[i].firstChild.data;  if ((browserInfoObj2.isiPad && browserInfoObj2.isSafari) &&
 (scriptData.indexOf('window.open') === 0)) 
 {
 var scriptDataArrary= scriptData.split("'"); eval("window.location.href = '" + scriptDataArrary[1] + "'");  }
 else
 {
 var sTmp = scriptData.toLowerCase();  if (sTmp.indexOf('window.open') == 0 && sTmp.indexOf('http')== -1 && sTmp.indexOf('https')== -1)
 eval(decodeURI(scriptData)); else if (sTmp.indexOf("document.location") == -1)
 eval(scriptData);  else if (sTmp.indexOf("document.location.href") != -1)
 eval(scriptData);  }
 }
 }
 
 net2.OnloadScriptList="";  if (closeHideModal()){
 if (this.bModal == 2)
 closeModal(window.modWin.modalID); else
 window.modWin = null; }
 else 
 this.closeModal(); if (typeof ptConsole2 != 'undefined' && ptConsole2 && ptConsole2.isActive() && bPerf)
 {
 var nDuration = (new Date()).valueOf() - this.nStartResponse; var nTotalDuration = (new Date()).valueOf() - this.nStartAll; ptConsole2.append((new Date()).valueOf() + " scripts & request end. Resp: " + nDuration+" Total:"+ nTotalDuration); }
 
 if (this.sXMLResponse) {
 this.SetInProcess(false); this.SetWaitingObject(null,"",null,false,false); if (isAnyMsg()) 
 playMsg(); return; }
 var sScript = "if (ptGridObj_"+this.formname+") ptGridObj_"+this.formname+".restoreScrollPos();"; eval(sScript); var bMessage=isAnyMsg(); if (bMessage) {
 this.SetInProcess(false); this.SetWaitingObject(null,"",null,false,false); playMsg(); }
 else
 this.SetInProcess(false);    if (this.bPrompt) 
 promptFieldName = this.name;   if ( ptRC2.isEnabled() && (!this.bPrompt) && (promptFieldName.length > 0) ) {
 window.top.ptrc.refreshRCOnChangeIfNeeded(promptFieldName); promptFieldName = ""; } 
 
 
 if (ptRC2.isEnabled() && !this.bPrompt && typeof window.top.ptrc != 'undefined') 
 window.top.ptrc.onAddChangeEvent();  ptCommonObj2.generateABNSearchResults(this.form);   pm.updateMessageEvents(this.name);   bcUpdater.storeKeyList(); bcUpdater.updateAdvSearchLbl(); bcUpdater.removeRemoteData(); if (this.GetWaitingICAction() != "")
 {
 var objWaiting = this.GetWaitingObject(); if (objWaiting != null) {
 var sScript = "aAction0_" + (objWaiting.v).name + "(objWaiting.v, objWaiting.w, objWaiting.x, objWaiting.y, objWaiting.z);"; eval(sScript); }
 }
 delete (this.req);},

addScript:function(id,dscript) 
{
if (!id || !dscript) return;var sId=id+"_HAScript";var obScript = document.getElementById(sId);var obHead=document.getElementsByTagName("head")[0];if (obScript) {
 obHead.removeChild(obScript);}
obScript = document.createElement("script");obScript.setAttribute("type","text/javascript")
obScript.setAttribute("id",sId);obScript.text = dscript;obHead.appendChild(obScript);},


processIncludeJS: function() {
 var n = net2.arrSrcScriptApp.length; net2.bScript=true; for (var i = 0; i < n; i++) {
 if (net2.arrSrcScriptApp[i]) {
 net2.nSrcScript++; net2.arrSrcScript[net2.nSrcScript]=net2.arrSrcScriptApp[i]; }
 }
},


processIncludeCSS: function() {
 if (net2.arrSrcCSSApp.length == 0) 
 return; this.addStyle("", "css", net2.arrSrcCSSApp);},

addStyle:function(cssId,dstyle,src) 
{
var id = cssId;if (src) {
 var tmp = src.split("/"); var tmpId = tmp[tmp.length - 1].split("."); id = (tmpId[0].concat("_")).concat(tmpId[1]);}
else { 
 if (!dstyle || dstyle.length==0) 
 return; else
 id = id+net2._HASTYLE;}

var oStyle = document.getElementById(id);var oHead = document.getElementsByTagName("head")[0];if (oStyle) { 
 
 oStyle.parentNode.removeChild(oStyle); }


if (src) {
 oStyle=document.createElement("link")
 oStyle.setAttribute("id",id); oStyle.setAttribute("rel", "stylesheet")
 oStyle.setAttribute("type", "text/css")
 oStyle.setAttribute("href", src)
} 
else {
 oStyle = document.createElement('style'); oStyle.setAttribute("id",id); oStyle.type = 'text/css'; if (oStyle.styleSheet)
 oStyle.styleSheet.cssText=dstyle; else
 oStyle.innerHTML=dstyle;}
oHead.appendChild(oStyle);},

processScript:function(id,data)
{
var sData = new String(data);var myExp2= new RegExp("</script","gi");sData = sData.replace(/<script/gi,"%script");sData = sData.replace(myExp2,"%/script");myExp2= new RegExp("</style","gi");sData = sData.replace(/<style/gi,"%style");sData = sData.replace(myExp2,"%/style");if (sData.indexOf("%script")==-1 && sData.indexOf("%style")==-1) return null;var nLen = (net2.ENDSCRIPT).length; var pos=sData.indexOf("%script");if (pos != -1) net2.bScript=true;var pos2;var sJS=".js";while(pos>-1){
 pos2=sData.indexOf(net2.ENDSCRIPT,pos);  var sTmp = sData.substring(pos,pos2); pos3 = sTmp.indexOf(">"); var sTmp0 = sTmp.substring(0,pos3)
 if (sTmp0.length>0 && sTmp0.indexOf("src")!=-1)
 {
 var src = sTmp0.substring(sTmp0.indexOf("src")+5,sTmp0.length-1); net2.nSrcScript++; net2.arrSrcScript[net2.nSrcScript]=src; }
 else
 {
 sTmp = sTmp.substring(pos3+1,sTmp.length); if (sTmp.length>0)
 {
 ++net2.nScript; var pos1=sTmp.indexOf("%script") 
 if(pos1>-1){
 sTmp = sTmp.replace("%script","<script"); sTmp = sTmp.replace("%/script","</script"); }
 pos1=sTmp.indexOf("%style")
 if(pos1>-1){
 sTmp = sTmp.replace("%style","<style"); sTmp = sTmp.replace("%/style","</style"); }
 net2.arrScript[net2.nScript]=sTmp; }

 }
 
 if(rteditorlist)
 {
 for (var i=0; i < rteditorlist.length; i++)
 {
 var rteeditor = rteditorlist[i].attributes; var rteeditorid=rteeditor.getNamedItem("id").value; if(sTmp.indexOf(rteeditorid)!=-1)
 {
 if (typeof(CKEDITOR)!== "undefined") 
 {
 for ( var instanceName in CKEDITOR.instances )
 { 
 if (instanceName == rteeditorid)
 eval(CKEDITOR.instances[rteeditorid].destroy()); } 
 }
 }
 }
 }
 sData = sData.substring(0,pos)+sData.substring(pos2+nLen,sData.length); pos=sData.indexOf("%script"); }

var nStyle=-1;nLen = (net2.ENDSTYLE).length; pos=sData.indexOf("%style");while(pos>-1){
 pos2=sData.indexOf(net2.ENDSTYLE,pos); var sTmp = sData.substring(pos,pos2); pos3 = sTmp.indexOf(">"); var sTmp0 = sTmp.substring(0,pos3)
 if (sTmp0.length>0 && sTmp0.indexOf("src")!=-1)
 {
 var src = sTmp0.substring(sTmp0.indexOf("src")+5,sTmp0.length-1); ++nStyle; this.addStyle(id+"_"+nStyle,sTmp,src); }
 else
 {
 sTmp = sTmp.substring(pos3+1,sTmp.length); if (sTmp.length>0)
 {
 ++nStyle; this.addStyle(id+"_"+nStyle,sTmp,null); }
 }
 sData = sData.substring(0,pos)+sData.substring(pos2+nLen,sData.length); pos=sData.indexOf("%style"); }
 sData = sData.replace("%/style","</style");  return sData;}
}



net2.cmdQueues=new Array();net2.CommandQueue=function(id,url,onUpdate,freq)
{
 this.id=id; net2.cmdQueues[id]=this; this.url=url; this.queued=new Array(); this.sent=new Array(); this.onUpdate=onUpdate; if (freq)
 {
 this.repeat(freq); }
 this.lastUpdateTime=0;}

net2.CommandQueue.STATUS_QUEUED=-1;net2.CommandQueue.STATE_UNINITIALIZED=net2.READY_STATE_UNINITIALIZED;net2.CommandQueue.STATE_LOADING=net2.READY_STATE_LOADING;net2.CommandQueue.STATE_LOADED=net2.READY_STATE_LOADED;net2.CommandQueue.STATE_INTERACTIVE=net2.READY_STATE_INTERACTIVE;net2.CommandQueue.STATE_COMPLETE=net2.READY_STATE_COMPLETE;net2.CommandQueue.STATE_PROCESSED=5;net2.CommandQueue.PRIORITY_NORMAL=0;net2.CommandQueue.PRIORITY_IMMEDIATE=1;net2.CommandQueue.prototype={
 addCommand:function(command)
 {
 if (this.isCommand(command))
 {
 this.queue.append(command,true); if (command.priority==net2.CommandQueue.PRIORITY_IMMEDIATE)
 {
 this.fireRequest(); }
 }
 },

 fireRequest:function()
 {
 if (!this.onUpdate && this.queued.length==0)
 {
 return; }
 var data="lastUpdate="+this.lastUpdateTime+"&data="; for(var i=0;i<this.queued.length;i++)
 {
 var cmd=this.queued[i]; if (this.isCommand(cmd))
 {
 data+=cmd.toRequestString(); this.sent[cmd.id]=cmd; }
 }
 this.queued=new Array(); this.loader=new net2.ContentLoader(
 this.url,
 net2.CommandQueue.onload,
 net2.CommandQueue.onerror,
 "POST",data
 ); },

 isCommand:function(obj)
 {
 return (
 obj.implementsProp("id")
 && obj.implementsProp("priority")
 && obj.implementsFunc("toRequestString")
 && obj.implementsFunc("parseResponse")
 ); },

 repeat:function(freq){
 this.unrepeat(); if (freq>0)
 {
 this.freq=freq; var cmd="net2.cmdQueues["+this.id+"].fireRequest()"; this.repeater=setInterval(cmd,freq*1000); }
 },

 unrepeat:function()
 {
 if (this.repeater)
 {
 clearInterval(this.repeater); }
 this.repeater=null; }
}

net2.CommandQueue.onload=function()
{
 var xmlDoc=this.req.responseXML; var elDocRoot=xmlDoc.getElementsByTagName("responses")[0]; var lastUpdate=elDocRoot.attributes.getNamedItem("updateTime"); if (parseInt(lastUpdate)>this.lastUpdateTime)
 {
 this.lastUpdateTime=lastUpdate; }
 if (elDocRoot)
 {
 for(i=0;i<elDocRoot.childNodes.length;i++)
 {
 elChild=elDocRoot.childNodes[i]; if (elChild.nodeName=="command")
 {
 var attrs=elChild.attributes; var id=attrs.getNamedItem("id").value; var command=net2.commandQueue.sent[id]; if (command)
 {
 command.parseResponse(elChild); }
 }
 else if (elChild.nodeName=="update")
 {
 if (this.implementsFunc("onUpdate"))
 {
 this.onUpdate.call(this,elChild); }
 }
 } 
 } 
}


net2.CommandQueue.onerror=function()
{
 alert("problem sending the data to the server");}
}
