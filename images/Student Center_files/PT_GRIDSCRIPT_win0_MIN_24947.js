



function PT_grid()
{}

PT_grid.prototype = {
saveScrollPos:function()
{
if (typeof ptGridObj_win0.gridArr=="undefined") return;for (var i = 0; i < ptGridObj_win0.gridArr.length; i++)
{
var gid = ptGridObj_win0.gridArr[i][0]; var brobj=document.getElementById('divgbr'+gid);if (brobj)
{
ptGridObj_win0.gridArr[i][1] = brobj.scrollLeft;ptGridObj_win0.gridArr[i][2] = brobj.scrollTop;}
}
},


getScrollPos:function(gridID)
{
 if (typeof ptGridObj_win0 =="undefined" || !ptGridObj_win0)
 return {x:0, y:0};  if (typeof ptGridObj_win0.gridArr=="undefined") 
 return {x:0, y:0};  for (var i = 0; i < ptGridObj_win0.gridArr.length; i++)
 {
 var gid = ptGridObj_win0.gridArr[i][0];  if (gid.length == gridID.length && gid.indexOf(gridID) == 0)
 return {x:ptGridObj_win0.gridArr[i][1], y:ptGridObj_win0.gridArr[i][2]};  }

 return {x:0, y:0}; },


restoreScrollPos:function()
{
if (typeof ptGridObj_win0.gridArr=="undefined") return;ptGridObj_win0.bRestore = true;for (var i = 0; i < ptGridObj_win0.gridArr.length; i++)
{
var gid = ptGridObj_win0.gridArr[i][0]; var brobj=document.getElementById('divgbr'+gid);var hrobj=document.getElementById('divghr'+gid);var blobj=document.getElementById('divgbl'+gid);if (brobj)
{
brobj.scrollLeft=ptGridObj_win0.gridArr[i][1];brobj.scrollTop=ptGridObj_win0.gridArr[i][2];}
if (hrobj)
 hrobj.scrollLeft = ptGridObj_win0.gridArr[i][1];if (blobj)
 blobj.scrollTop = ptGridObj_win0.gridArr[i][2];}
ptGridObj_win0.bRestore = false;},
doOnScroll:function(id, type){
var brid = 'divgbr'+id;var blid = 'divgbl'+id;var hrid = 'divghr'+id;var brobj=document.getElementById(brid);var hrobj=document.getElementById(hrid);if (brobj && hrobj)
 hrobj.scrollLeft = brobj.scrollLeft;var blobj=document.getElementById(blid);if (brobj && blobj)
{
if (type==1)
blobj.scrollTop = brobj.scrollTop;else
brobj.scrollTop = blobj.scrollTop;}

},
doScrollOnFocus:function(id, obj){
this.restoreScrollPos();var nTop = ptCommonObj2.getTopPos(obj);var brid = 'divgbr'+id;var blid = 'divgbl'+id;var brobj=document.getElementById(brid);var blobj=document.getElementById(blid);var offTop = nTop-ptCommonObj2.getTopPos(brobj);var nBRTop = ptCommonObj2.getTopPos(brobj);if (brobj && Math.abs(offTop) > 10 && nTop > (nBRTop+brobj.clientHeight))
{
 var bTAField = false; if (obj) 
 bTAField = isTypeAheadField(obj.id);  if (!bTAField || Math.abs(offTop) >= 200) {
 if (brobj)
 brobj.scrollTop += offTop; if (blobj)
 blobj.scrollTop += offTop; }
}
this.saveScrollPos();},
doScrollLeft:function(id, sLeft){
var brid = 'divgbr'+id;var hrid = 'divghr'+id;var brobj=document.getElementById(brid);var hrobj=document.getElementById(hrid);var offLeft = sLeft-ptCommonObj2.getLeftPos(brobj);if (brobj && hrobj)
{
hrobj.scrollLeft += offLeft;brobj.scrollLeft += offLeft;}
},
onSort:function(e)
{
if (e && e.button == 2) return; var obj = getEventTarget(e);ptGridObj_win0.doSort(obj.id);},
doSort:function(id)
{
var tmp = id.split("$");var gid_s = tmp[0];var gocc_s = tmp[1].split("#")[0];var gid = gid_s+'$'+gocc_s;var bSortable = false;for (var i = 0; i < gridList_win0.length; i++)
 {
 var ginfo = gridList_win0[i]; if (gid && gid != ginfo[0])
 continue;  var gheaders = gridHeaderList_win0[i];  if (!gheaders || typeof gheaders == "undefined")
 continue; for (var j = 0; (j < gheaders.length && !bSortable); j++)
 {
 var fn = gheaders[j][0]; if (!fn || fn != id)
 continue; if (gheaders[j][1] == 1) 
 bSortable =true;  }
}
if (!bSortable) return;var col = tmp[1].split("#")[1];var sId = gid_s+'$srt'+col+'$'+gocc_s;var cmap = document.getElementById(gid_s+"$hnewpers$0");var cols = cmap.value.split("#");var trgelem = cols[col].split("|");for (var i = 0; i < cols.length; ++i)
{
 elem = cols[i].split("|");  if (elem.length < 5 || col==i) continue;  if (elem[4]>0 && (trgelem[4]==0 || (trgelem[4]>0 && elem[4]<=trgelem[4])))
 ++elem[4];  cols[i] = elem.join("|");} 
trgelem[4] = "1";if (trgelem[3]==1)
trgelem[3] = 2;else
trgelem[3] = 1;cols[col] = trgelem.join("|"); cmap.value = cols.join("#"); submitAction_win0(document.win0,sId);},
getNumOfFreezeCol:function(cmap)
{
var cnt=0;var cols = cmap.value.split("#");for (var i = 0; i < cols.length; ++i)
{
 var elem = cols[i].split("|"); if (elem[2]=="1" && elem[5]>0) cnt++;}
return cnt;},
IsFreezeCol:function(cmap,ncol)
{
var cols = cmap.value.split("#");var elem = cols[ncol].split("|");if (elem[2] == "1") return true; else false;},
IsFlowCol:function(cmap,ncol)
{
var cols = cmap.value.split("#");var elem = cols[ncol].split("|");if (elem[2] == "0") return true; else false;},
setItem:function(cols, ncol, nitem, val)
{
if (ncol >= cols.length || ncol < 0)
 return false;var elems = cols[ncol].split("|");if (elems.length < 5)
 return false;var bChanged = (elems[nitem] != val);elems[nitem] = val;cols[ncol] = elems.join("|");return bChanged;},
setFrozen:function(cols, n, bSet)
{
if (bSet)
this.setItem(cols, n, 2, "1");else
this.setItem(cols, n, 2, "0");},
setSize:function(fld, n, val)
{
var cols = fld.value.split("#");this.setItem(cols, n, 5, val);fld.value = cols.join("#");},
getPos:function(cols,ncol)
{
for (var i = 0; i < cols.length; ++i)
{
 var elem = cols[i].split("|"); if (elem.length < 5)
 return -1; if (elem[0] == ncol)
 return i;}
return -1;},
moveCols:function(fld, pos1,pos2)
{
var cols = fld.value.split("#");if (pos1==pos2) return;var elem2 = cols[pos2].split("|"); var elem1 = cols[pos1].split("|");var ncol1=elem1[0];var ncol2=elem2[0]; if (elem2[2] == "1")
 this.setFrozen(cols, pos1, true);else
 this.setFrozen(cols, pos1, false);var col1 = cols[pos1]; var col2 = cols[pos2]; cols.splice(pos1,1);cols.splice(pos2,0,col1);fld.value = cols.join("#");},
setMoveCursor:function(evt)
{
var o=ptCommonObj2.getEO(evt);if (o && o != "undefined") 
o.style.cursor='pointer';},

adjustColumnWidth:function(hc, bc, nOffset)
{
if (!hc || !bc) 
 return;var htr1;if (hc.childNodes.length==0 || hc.childNodes[0].childNodes.length==0 || hc.childNodes[0].childNodes[0].childNodes.length==0)
 return; htr1=hc.childNodes[0].childNodes[0].childNodes[0];var btr1;if (bc.childNodes.length==0 || bc.childNodes[0].childNodes.length==0 || bc.childNodes[0].childNodes[0].childNodes.length==0)
 return;btr1=bc.childNodes[0].childNodes[0].childNodes[0]; if (!htr1 || !btr1) return;var dObjLastCol = null; var hObjLastCol = null; var bIsLastCol = false;var gid = hc.id.substring(6,hc.id.length).split("$")[0];var log = "";for (var j=0; j<htr1.childNodes.length; j++) {
 var dObj=btr1.childNodes[j];  var hObj=htr1.childNodes[j]; if (!dObj || !hObj) continue;  if (hObj.width == '') {
 
 
 hObjLastCol = hObj; dObjLastCol = dObj; continue; } 

 if (ptConsole2.isActive() && (dObj.clientWidth != hObj.clientWidth)) {
 var nSugWidth = dObj.clientWidth + nOffset; var id = hObj.id.substring(2, hObj.id.length); var sobj = document.getElementById(id); if (sobj) 
 log += 'Column: ' + sobj.innerHTML + ' curW:' + hObj.width + ' sugMinW:' + nSugWidth + '\n'; } 
 if ((dObj.clientWidth-hObj.clientWidth)>nOffset) { 
 hObj.width=dObj.clientWidth + 2*nOffset; }
 else if ((hObj.clientWidth-dObj.clientWidth)>0) {
 if (browserInfoObj2.isIE)
 dObj.width=hObj.clientWidth - 2*nOffset; else
 dObj.width=hObj.clientWidth - 1*nOffset -1; }
 } 
 
 if (dObjLastCol && hObjLastCol) { 
 var dObj=dObjLastCol;  var hObj=hObjLastCol;    if ((dObj.clientWidth-hObj.clientWidth)>nOffset) { 
 dObj.width=hObj.clientWidth- 2*nOffset; }
 else if ((hObj.clientWidth-dObj.clientWidth)>0)
 hObj.width=dObj.clientWidth + 2*nOffset;   var fn = hObj.id.split('th')[1]; var lObj = document.getElementById(fn).parentNode; if ((hObj.clientWidth-lObj.clientWidth)>2)
 lObj.width = hObj.clientWidth-2;  }
 if (ptConsole2.isActive() && log.length>0)
 ptConsole2.append("Grid: "+gid+"\n"+log+"\n");},


adjustColumnWidthHeight:function() {
if (!gridList_win0 || typeof gridList_win0 == "undefined" || !gridHeaderList_win0 || typeof gridHeaderList_win0 == "undefined")
 return;for (var i = 0; i < gridList_win0.length; i++)
 {
 var ginfo = gridList_win0[i]; if ( ginfo[4] && ginfo[4] != 1) continue; var gheaders = gridHeaderList_win0[i];  if (!gheaders || typeof gheaders == "undefined")
 continue;  if (ptConsole2.isActive() && !bPerf) {
 
 var lhc=document.getElementById('divghl'+ginfo[0]);  var lbc=document.getElementById('divgbl'+ginfo[0]);  this.adjustColumnWidth(lhc,lbc,3);   var rhc=document.getElementById('divghr'+ginfo[0]);  var rbc=document.getElementById('divgbr'+ginfo[0]);  this.adjustColumnWidth(rhc,rbc,3); }

 
 
 var lhc=document.getElementById('divghl'+ginfo[0]);  var rhc=document.getElementById('divghr'+ginfo[0]); var bHChanged=false; var bEmpty = false; if (lhc&&(lhc.children.length==0 || lhc.children[0].children.length==0 || lhc.children[0].children[0].children.length==0))
 bEmpty=true; if (rhc&&(rhc.children.length==0 || rhc.children[0].children.length==0 || rhc.children[0].children[0].children.length==0))
 bEmpty=true; if (lhc && rhc && !bEmpty) { 
 var lhtc1=lhc.children[0].children[0].children[0].children[0];  var rhtc1=rhc.children[0].children[0].children[0].children[0]; if (lhtc1.clientHeight>rhtc1.clientHeight) 
 {
 if ((lhtc1.clientHeight-rhtc1.clientHeight) < 5) 
 rhtc1.height=lhtc1.clientHeight+2; }
 else if (rhtc1.clientHeight>lhtc1.clientHeight)
 {
 if ((rhtc1.clientHeight-lhtc1.clientHeight) <5) 
 lhtc1.height=rhtc1.clientHeight+2; }
 }
 
 
 var lbc=document.getElementById('divgbl'+ginfo[0]);  var rbc=document.getElementById('divgbr'+ginfo[0]); if (lbc && rbc) { 
 var lbt=lbc.children[0].children[0]; var rbt=rbc.children[0].children[0];  for (var j=0; j<lbt.children.length; j++) {
 var lbtc1 = lbt.children[j]; var rbtc1 = rbt.children[j];  if (lbtc1.clientHeight > rbtc1.clientHeight) {
 if ((lbtc1.clientHeight - rbtc1.clientHeight) < 3) 
 rbtc1.children[0].height = lbtc1.clientHeight + 1; }
 else if (rbtc1.clientHeight > lbtc1.clientHeight) {
 if ((rbtc1.clientHeight - lbtc1.clientHeight) <3) 
 lbtc1.children[0].height = rbtc1.clientHeight + 1; }
 } 
 } 
 }
},


setHandCursor:function(evt) {
var o=ptCommonObj2.getEO(evt);if (o && o != "undefined") 
o.style.cursor='hand';},
initGrid: function(gid) {
 if (typeof gid == "undefined" || !gid || typeof gridList_win0 == "undefined") 
 return; var objHC = document.getElementById('divghrc' + gid); if (!objHC || (typeof objHC.bSet != 'undefined' && objHC.bSet)) 
 return;  for (var i = 0; i < gridList_win0.length; i++) {
 var ginfo = gridList_win0[i]; if (ginfo[4] && ginfo[4] != 1) continue; if (gid && gid != ginfo[0])
 continue; var nStart = gridList_win0[i][1]; var nStop = gridList_win0[i][2]; var gheaders = gridHeaderList_win0[i]; var gfields = gridFieldList_win0[i]; if (!gheaders || typeof gheaders == "undefined" || !gfields || typeof gfields == "undefined")
 continue; for (var j = 0; j < gheaders.length; j++) {
 var fn = gheaders[j][0]; var bSortable = (gheaders[j][1] == 1) ? true : false; var hObj = document.getElementById(fn + "#"); if (!hObj) {
 var sObj = document.getElementById(fn); if (!sObj || typeof sObj == "undefined") continue; ptEvent.add(sObj, "mouseover", ptGridObj_win0.setHandCursor); ptEvent.add(sObj, "mousedown", ptGridObj_win0.onSort); continue; } 
 else {
 var src = fn.split("#"); var tmp = src[0].split("$"); var cmap = document.getElementById(tmp[0] + "$hnewpers$0"); var sObj = document.getElementById("th" + fn); if (sObj.width != "") {
 ptEvent.add(hObj, "mouseover", ptGridResizeObj_win0.setResizeCursor); ptEvent.add(hObj, "mousedown", ptGridResizeObj_win0.TDselDown); }
 if (!browserInfoObj2.isIE) {
 var oTDsel = document.getElementById('pt_dragResize'); ptEvent.add(oTDsel, "mouseover", ptGridResizeObj_win0.setResizeCursor); ptEvent.add(oTDsel, "mouseup", ptGridResizeObj_win0.TDselUp); ptEvent.add(oTDsel, "mousemove", ptGridResizeObj_win0.TDselMove); ptEvent.add(oTDsel, "dragstart", ptGridResizeObj_win0.clearevt); ptEvent.add(oTDsel, "selectstart", ptGridResizeObj_win0.clearevt); }
 if (this.IsFreezeCol(cmap, src[1]) && gridList_win0[i][3] == 1) {
 if (bSortable) {
 var sObj = document.getElementById(fn); if (!sObj || typeof sObj == "undefined") continue; ptEvent.add(sObj, "mouseover", ptGridObj_win0.setHandCursor); ptEvent.add(sObj, "mousedown", ptGridObj_win0.onSort); }
 continue; }
 if ((this.IsFreezeCol(cmap, src[1]) && this.getNumOfFreezeCol(cmap) == 1) ||
 (this.IsFlowCol(cmap, src[1]) && (gheaders.length - this.getNumOfFreezeCol(cmap)) == 1)) {
 if (bSortable) {
 var sObj = document.getElementById(fn); if (!sObj || typeof sObj == "undefined") continue; ptEvent.add(sObj, "mouseover", ptGridObj_win0.setHandCursor); ptEvent.add(sObj, "mousedown", ptGridObj_win0.onSort); }
 }
 if ((this.IsFreezeCol(cmap, src[1]) && this.getNumOfFreezeCol(cmap) > 1) ||
 (this.IsFlowCol(cmap, src[1]) && (gheaders.length - this.getNumOfFreezeCol(cmap)) > 1)) {
 var osrc = document.getElementById(fn); ptEvent.add(osrc, "mouseover", ptGridObj_win0.setMoveCursor); ptGridDDObj_win0.addSource(osrc, false); }
 else {
 var sObj = document.getElementById(fn); if (sObj) {
 sObj.title = ''; sObj.alt = ''; }
 }
 ptGridDDObj_win0.addTarget('th' + fn, 'ptGridObj_win0.dropItems'); }
 }
 }

 if (ptGridDDObj_win0 != null)
 ptGridDDObj_win0.init(); objHC.bSet = true;},
initGriddd:function(){
if (ptConsole2.isActive() && bPerf)
 ptConsole2.append((new Date()).valueOf() + " Grid init start");if (typeof gridList_win0 == "undefined" || typeof gridHeaderList_win0 == "undefined" || typeof gridFieldList_win0 == "undefined" || typeof gridFieldList_win0[0] == "undefined")
 return;ptGridDDObj_win0 = new PT_gridDD();ptGridResizeObj_win0 = new PT_gridResize();var bArr=false;if (!ptGridObj_win0.gridArr)
{
 ptGridObj_win0.gridArr=new Array(); bArr=true; ptGridObj_win0.bRestore = false;}
if (!browserInfoObj2.isIE)
 this.initSetCapture();for (var i = 0; i < gridList_win0.length; i++)
 {
 var ginfo = gridList_win0[i]; if (bArr) 
 ptGridObj_win0.gridArr[i]=[ginfo[0],0,0];  } 
 
ptGridObj_win0.adjustColumnWidthHeight();if (ptConsole2.isActive() && bPerf)
 ptConsole2.append((new Date()).valueOf() + " Grid init end");},
resizeItem:function(srcId,val)
{
var src = srcId.split("#");var tmp = src[0].split("$");var gid_s = tmp[0];var gocc_s = tmp[1];var cmap = document.getElementById(gid_s+"$hnewpers$0");this.setSize(cmap,src[1],val);ptGridObj_win0.saveScrollPos();submitAction_win0(document.win0,gid_s+"$hnewpers$0");},
dropItems:function(srcId,trgId,x,y)
{
if (trgId.indexOf('th') != -1) 
 trgId = trgId.substring(2,trgId.length);var src = srcId.split("#");var trg = trgId.split("#");var tmp = src[0].split("$");var gid_s = tmp[0];var gocc_s = tmp[1];tmp = trg[0].split("$");var gid_t = tmp[0];var gocc_t = tmp[1];if (gid_s != gid_t || gocc_s != gocc_t) return; var cmap = document.getElementById(gid_s+"$hnewpers$0");this.moveCols(cmap,src[1],trg[1]);var ogbr_div=document.getElementById('divgbr'+src[0]);var nScrollLeft= 0;if (ogbr_div)
nScrollLeft = new Number(ogbr_div.scrollLeft);ptGridObj_win0.saveScrollPos();submitAction_win0(document.win0,gid_s+"$hnewpers$0");},
doArrowNavGrid:function(evt)
{
 evt= (evt)? evt: ((event)? event:null); if (!isShiftKey(evt))
 return;  var key = getKeyCode(evt); if (key>40 || key<37)
 {
 doKeyDown_win0(evt); return; }
 if (evt) ptCommonObj2.terminateEvent(evt); var obj = getEventTarget(evt); var isDropDown=false; var selectPos = -1; switch(obj.type) 
 {
 case "select-one": 
 {
 for (var i=0;i<obj.length;i++) {
 if (obj.options[i].selected)
 selectPos = i; }
 isDropDown=true; }
 }
 var id = obj.id; var nRowCnt = 0; var fn = null; if (!id) return; if (id)
 {
 var idarr = id.split("$"); if (idarr.length<2) return; if (isNaN(idarr[1]))
 {
 fn = idarr[0]+'$'+idarr[1]; nRowCnt = idarr[2]; }
 else
 {
 fn = idarr[0]; nRowCnt = idarr[1]; } 
 }
 if (typeof gridList_win0 != "undefined" && typeof gridFieldList_win0 != "undefined")
 { 
 for (var i = 0; i < gridList_win0.length; i++)
 {
 var gn = gridList_win0[i][0]; var nStart = gridList_win0[i][1]; var nStop = gridList_win0[i][2]; var gfields = gridFieldList_win0[i]; for (var j = 0; j < gfields.length; j++)
 {
 var gfield = gfields[j].replace(/%c/,nRowCnt); if (id==gfield)
 { 
 if (key == 40 && nRowCnt<nStop) 
 {
 var nCnt = ++nRowCnt;  var id2 = gfields[j];  id2 =id2.replace(/%c/,nCnt); var obj2 = document.getElementById(id2); if (obj2) ptCommonObj2.tryFocus(obj2); return; }
 if (key == 38 && nRowCnt>nStart) 
 {
 var nCnt = --nRowCnt; var id2 = gfields[j];  id2 =id2.replace(/%c/,nCnt); var obj2 = document.getElementById(id2); if (obj2) ptCommonObj2.tryFocus(obj2);  return; }
 if (key == 37 && j > 0) 
 {
 var jj = j-1;  var id2 = gfields[jj]; id2 =id2.replace(/%c/,nRowCnt); var obj2 = document.getElementById(id2); while (!ptCommonObj2.canFocus(obj2) && jj>-1)
 {
 jj--; id2 = gfields[jj]; id2 = id2.replace(/%c/,nRowCnt); obj2 = document.getElementById(id2)
 }
 if (obj2)
 {
 ptCommonObj2.tryFocus(obj2); ptGridObj_win0.doScrollLeft(gn,ptCommonObj2.getLeftPos(obj2));  }
 return; }
 if (key == 39 && j < (gfields.length-1)) 
 {
 var jj = j+1; var id2 = gfields[jj]; id2 =id2.replace(/%c/,nRowCnt);  var obj2 = document.getElementById(id2);  while (!ptCommonObj2.canFocus(obj2) && jj<(gfields.length-1))
 {
 jj++; id2 = gfields[jj]; id2 = id2.replace(/%c/,nRowCnt); obj2 = document.getElementById(id2) 
 }
 if (obj2)
 {
 ptCommonObj2.tryFocus(obj2); ptGridObj_win0.doScrollLeft(gn,ptCommonObj2.getLeftPos(obj2)); } 
 return; }
 } 
 } 
 }
 } 
},
terminateEvent:function(e)
{
e = e || window.event;if (e.stopPropagation != undefined) e.stopPropagation();else if (e.cancelBubble != undefined) e.cancelBubble = true;if (e.preventDefault != undefined) e.preventDefault();else e.returnValue = false;},
initSetCapture:function()
{
if (window.HTMLElement) { 

 var element = HTMLElement.prototype;  var capture = ["click", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout" ];  element.setCapture = function(){ 
 var self = this;  var flag = false;  this._capture = function(e){ 
 if (flag) {return} 
 flag = true;  var event = document.createEvent("MouseEvents");  event.initMouseEvent(e.type, 
 e.bubbles, e.cancelable, e.view, e.detail, 
 e.screenX, e.screenY, e.clientX, e.clientY, 
 e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 
 e.button, e.relatedTarget);  self.dispatchEvent(event);  flag = false;  };  for (var i=0; i<capture.length; i++) { 
 window.addEventListener(capture[i], this._capture, true);  } 
 };  element.releaseCapture = function(){ 
 for (var i=0; i<capture.length; i++) { 
 window.removeEventListener(capture[i], this._capture, true);  } 
 this._capture = null;  }; } 
}
}


function PT_gridResize()
{}
PT_gridResize.prototype = {
init:function(){
this.lLeft = 0;this.TDcellWidth=0;this.gname='';this.fname='';this.offset=0;this.lMin=0;this.colreorder=new Object();this.colreorder.srcObj=null;this.colreorder.trgObj=null; this.gname='';this.fname='';},
TDselDown : function(evt)
{
if (evt && evt.button == 2) return; var oth=ptCommonObj2.getEO(evt);ptGridResizeObj_win0.gname = oth.id.split("#")[0];ptGridResizeObj_win0.fname = oth.id.substring(0,oth.id.length-1);var oEL =document.getElementById('th'+ ptGridResizeObj_win0.fname);if (!oEL || oEL == "undefined")
 return;var oTDsel=document.getElementById('pt_dragResize');var ogh_div=oth.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode; var oghl_div = document.getElementById('divghl'+ ptGridResizeObj_win0.gname);var oghr_div = document.getElementById('divghr'+ ptGridResizeObj_win0.gname);var ogbl_div = document.getElementById('divgbl'+ ptGridResizeObj_win0.gname);var ogbr_div = document.getElementById('divgbr'+ ptGridResizeObj_win0.gname);if (ptGridResizeObj_win0.lMin==0)
 ptGridResizeObj_win0.lMin=ptCommonObj2.getWidth(oghl_div);if (ogh_div && typeof ogh_div != 'undefined' && ogh_div.id && (ogh_div.id.substring(0,6) == 'divghr')) 
 ptGridResizeObj_win0.offset = ptCommonObj2.getWidth(oghl_div);ptGridResizeObj_win0.titleHeight=0;var tst=oTDsel.style;var ogc_div = document.getElementById('divgc'+ ptGridResizeObj_win0.gname); if (ptGridResizeObj_win0.fname.split("#")[1] == 1)
 tst.pixelLeft=oEL.offsetLeft+10;else if (!browserInfoObj2.isIE)
 tst.pixelLeft=oEL.offsetLeft + ptGridResizeObj_win0.offset+8; else
 tst.pixelLeft=oEL.offsetLeft + ptGridResizeObj_win0.offset + 15;tst.posWidth=oEL.offsetWidth; tst.pixelHeight=3;tst.display='block';ptGridResizeObj_win0.clientX = evt.clientX;ptGridResizeObj_win0.dragTD=true; oTDsel.style.height=40+Math.max(ptCommonObj2.getHeight(oghr_div),ptCommonObj2.getHeight(oghr_div))+Math.max(ptCommonObj2.getHeight(ogbr_div),ptCommonObj2.getHeight(ogbr_div));ptGridResizeObj_win0.TDcellWidth =oEL.offsetWidth;if (!browserInfoObj2.isIE)
{
oTDsel.style.width = ptGridResizeObj_win0.TDcellWidth;oTDsel.style.left = tst.pixelLeft;oTDsel.style.top=tst.pixelTop;}

if (typeof document.win0.ICZoomGrid != 'undefined' && document.win0.ICZoomGrid.value == 1)
{


oTDsel.style.pixelLeft = tst.pixelLeft;oTDsel.style.zIndex= 350;}

oTDsel.setCapture();},
TDselMove : function(evt)
{
 if(document.all)evt = event; if (typeof evt=='undefined') return; ptGridResizeObj_win0.TDcellWidth = ptGridResizeObj_win0.TDcellWidth + (evt.clientX - ptGridResizeObj_win0.clientX); ptGridResizeObj_win0.clientX = evt.clientX; ptGridResizeObj_win0.TDcellWidth=Math.max(ptGridResizeObj_win0.TDcellWidth, 28);  var oTDsel = document.getElementById('pt_dragResize'); oTDsel.style.posWidth = ptGridResizeObj_win0.TDcellWidth;  var gc_div_id = 'divgc'+ ptGridResizeObj_win0.gname; var ogc_div = document.getElementById(gc_div_id); var oEL =document.getElementById('th'+ ptGridResizeObj_win0.fname);   oTDsel.style.top = ptCommonObj2.getTopPos(oEL) - 8 + document.body.scrollTop; if (!browserInfoObj2.isIE)
 {
 oTDsel.style.width = ptGridResizeObj_win0.TDcellWidth; oTDsel.style.cursor='E-resize'; }
},
TDselUp : function (evt)
{ 

 var oTDsel = document.getElementById('pt_dragResize'); oTDsel.releaseCapture(); ptGridResizeObj_win0.TDcellWidth = Math.max(ptGridResizeObj_win0.TDcellWidth, 28); var oColH = document.getElementById('th'+ptGridResizeObj_win0.fname); var oColD = document.getElementById('td'+ptGridResizeObj_win0.fname); var oWidth=oColD.width; oColD.style.overflow = 'hidden'; oColD.width = ptGridResizeObj_win0.TDcellWidth - 4; var cWidth = oColD.width; oColH.style.overflow = 'hidden'; oColH.width = cWidth; var rOffset = cWidth - oWidth; if (ptGridResizeObj_win0.offset==0)
 { 
 var oth=document.getElementById('th'+ptGridResizeObj_win0.fname); var ogbl_div=document.getElementById('divgbl'+ptGridResizeObj_win0.gname); var ogbl_td = null; var oghl = null; var oghl_td =null; if (ogbl_div && typeof ogbl_div != 'undefined')
 {
 ogbl_td = ogbl_div.parentNode; ogbl_div.style.width=Math.max(ptCommonObj2.getWidth(ogbl_div)+rOffset,ptGridResizeObj_win0.lMin); ogbl_td.width =ogbl_div.style.width; oghl_div=document.getElementById('divghl'+ptGridResizeObj_win0.gname); oghl_td = oghl_div.parentNode;  oghl_div.style.width=ogbl_div.style.width; oghl_td.width =ogbl_div.style.width; }
 var ogbr_div=document.getElementById('divgbr'+ptGridResizeObj_win0.gname); var ogbr_td = null; var oghr_div = null; var oghr_td = null; if (ogbr_div && typeof ogbr_div != 'undefined')
 {
 ogbr_td = ogbr_div.parentNode;  ogbr_div.style.width=ptCommonObj2.getWidth(ogbr_div)-rOffset; ogbr_td.width =ogbr_div.style.width; oghr_div=document.getElementById('divghr'+ptGridResizeObj_win0.gname); oghr_td = oghr_div.parentNode;  oghr_div.style.width=ogbr_div.style.width; oghr_td.width =ogbr_div.style.width; } 
 } 
 
 oTDsel.style.display='none'; ptGridObj_win0.resizeItem(ptGridResizeObj_win0.fname,cWidth);},
colsrc : function(evt)
{
this.colreorder.srcObj=ptCommonObj2.getEO(evt);window.event.cancelBubble = true;return;},
clearevt : function(evt)
{
window.event.cancelBubble = true;},
setResizeCursor:function(evt)
{var o=ptCommonObj2.getEO(evt);if (o && o != "undefined") 
o.style.cursor='E-resize';}
}

var ptGridObj_win0 = new PT_grid();function PT_gridDD()
{
 var mouse_x; var mouse_y;  var el_x; var el_y;  var idDragged; var CloneArr; var srcArr; var trgArr; var cZIndex;  var slideBack; var bMove;  var bMousedown;  var idMousedown; }

PT_gridDD.prototype = {
 init : function()
 {
 if(!this.srcArr || !this.trgArr) return; this.cZIndex = 10000;  this.idDragged = false;  this.__initDragDropScript();   this.slideBack = true; this.bMove = false;  this.bMousedown = false;  this.idMousedown=""; },
 addSource : function(obj,slideBackAfterDrop,xAxis,yAxis,dragOnlyWithinElId,functionToCallOnDrag)
 {
 if(!functionToCallOnDrag)functionToCallOnDrag=false; if(!this.srcArr)this.srcArr = new Array(); if(!this.CloneArr)this.CloneArr = new Array(); if(!obj) return;  if(xAxis!==false)xAxis = true; if(yAxis!==false)yAxis = true; var no = this.srcArr.length;  this.srcArr[no] = [obj,slideBackAfterDrop,xAxis,yAxis,dragOnlyWithinElId,functionToCallOnDrag];  obj.style.top = ptCommonObj2.getTopPos(obj) + 'px'; obj.style.left = ptCommonObj2.getLeftPos(obj) + 'px'; obj.onmousedown =this.__initDragDropElement; obj.setAttribute('dragableElement',no); this.CloneArr[no] = obj;   },
 addTarget : function(targetId,functionToCallOnDrop)
 {
 if(!this.trgArr)this.trgArr = new Array(); if(!document.getElementById(targetId)) return; var obj = document.getElementById(targetId); this.trgArr[this.trgArr.length] = [obj,functionToCallOnDrop];  },
 setSlide : function(slide)
 {
 this.slideBack = slide;   },
 __initDragDropScript : function()
 {
 var refToThis = this; var obj = document.getElementById('win0divPAGECONTAINER'); if (!obj) return; obj.onmouseout = this.__resetCursor;  obj.onmousemove = this.__moveDragableElement; obj.onmouseup = this.__stop_dragDropElement; obj.onselectstart = function() { return refToThis.__cancelSelectionEvent(false,this) }; objondragstart = function() { return ptCommonObj2.cancelEvent(false,this) };   obj = document.getElementById('popupContentModal'); if (obj && obj.innerHTML) {
 obj.onmouseout = this.__resetCursor;  obj.onmousemove = this.__moveDragableElement; obj.onmouseup = this.__stop_dragDropElement; obj.onselectstart = function() { return refToThis.__cancelSelectionEvent(false,this) }; objondragstart = function() { return ptCommonObj2.cancelEvent(false,this) };  } 
 },
 __resetCursor : function(e) 
 {
 var eObj = ptCommonObj2.getEO(e); if (eObj && eObj.style.cursor=="not-allowed")
 eObj.style.cursor=""; },
 __initDragDropElement : function(e) 
 {
 if (!e && window.event)
 e = window.event; if (e.button == 2) return;     ptGridDDObj_win0.bMousedown = true;  ptGridDDObj_win0.idMousedown = this.id;  ptGridDDObj_win0.idDragged = this.getAttribute('dragableElement'); ptGridDDObj_win0.idDragged = ptGridDDObj_win0.idDragged + ''; if(ptGridDDObj_win0.idDragged=='')ptGridDDObj_win0.idDragged = this.dragableElement;   ptGridDDObj_win0.mouse_x = e.clientX; ptGridDDObj_win0.mouse_y = e.clientY;  ptGridDDObj_win0.cZIndex = ptGridDDObj_win0.cZIndex + 1;  ptGridDDObj_win0.CloneArr[ptGridDDObj_win0.idDragged].style.zIndex = ptGridDDObj_win0.cZIndex;  ptGridDDObj_win0.currentEl_allowX = ptGridDDObj_win0.srcArr[ptGridDDObj_win0.idDragged][2]; ptGridDDObj_win0.currentEl_allowY = ptGridDDObj_win0.srcArr[ptGridDDObj_win0.idDragged][3]; var parentEl = ptGridDDObj_win0.srcArr[ptGridDDObj_win0.idDragged][4]; ptGridDDObj_win0.drag_minX = false; ptGridDDObj_win0.drag_minY = false; ptGridDDObj_win0.drag_maxX = false; ptGridDDObj_win0.drag_maxY = false; if(parentEl){
 var obj = document.getElementById(parentEl); if(obj){
 ptGridDDObj_win0.drag_minX = ptCommonObj2.getLeftPos(obj); ptGridDDObj_win0.drag_minY = ptCommonObj2.getTopPos(obj); ptGridDDObj_win0.drag_maxX = ptGridDDObj_win0.drag_minX + obj.clientWidth; ptGridDDObj_win0.drag_maxY = ptGridDDObj_win0.drag_minY + obj.clientHeight;  } 
 }
 
 if(ptGridDDObj_win0.srcArr[ptGridDDObj_win0.idDragged][1]){
 ptGridDDObj_win0.CloneArr[ptGridDDObj_win0.idDragged].style.top = ptCommonObj2.getTopPos(ptGridDDObj_win0.srcArr[ptGridDDObj_win0.idDragged][0]) + 'px'; ptGridDDObj_win0.CloneArr[ptGridDDObj_win0.idDragged].style.left = ptCommonObj2.getLeftPos(ptGridDDObj_win0.srcArr[ptGridDDObj_win0.idDragged][0]) + 'px'; }
 ptGridDDObj_win0.el_x = ptGridDDObj_win0.CloneArr[ptGridDDObj_win0.idDragged].style.left.replace('px','')/1; ptGridDDObj_win0.el_y = ptGridDDObj_win0.CloneArr[ptGridDDObj_win0.idDragged].style.top.replace('px','')/1;  return false; },
 __timerDragDropElement : function()
 {
 window.thisRef = this;        this.srcArr[this.idDragged][0].style.visibility = 'hidden';  if(this.srcArr[ptGridDDObj_win0.idDragged][5]){
 var id1 = this.CloneArr[this.idDragged].id + ''; var id2 = this.srcArr[this.idDragged][0].id + ''; var string = this.srcArr[ptGridDDObj_win0.idDragged][5] + '("' + id1 + '","' + id2 + '")'; eval(string); } 
 
 }, 
 __cancelSelectionEvent : function()
 {
 if (ptGridDDObj_win0.bMousedown) return false;   return true; },
 __moveDragableElement : function(e) 
 {
 if (!e && window.event)
 e = window.event;  var xdiff=0, ydiff=0;  if (ptGridDDObj_win0.bMousedown) 
 {
 xdiff=e.clientX - ptGridDDObj_win0.mouse_x;  ydiff=e.clientY - ptGridDDObj_win0.mouse_y;  if (xdiff != 0 || ydiff != 0) {
 ptGridDDObj_win0.bMove=true;  ptGridDDObj_win0.__timerDragDropElement();   }
 else return; }
 else return; var dragObj = ptGridDDObj_win0.CloneArr[ptGridDDObj_win0.idDragged]; if(ptGridDDObj_win0.currentEl_allowX && xdiff != 0){ 
 var leftPos = (xdiff+ ptGridDDObj_win0.el_x); if(ptGridDDObj_win0.drag_maxX){
 var tmpMaxX = ptGridDDObj_win0.drag_maxX - dragObj.offsetWidth; if(leftPos > tmpMaxX)leftPos = tmpMaxX
 if(leftPos < ptGridDDObj_win0.drag_minX)leftPos = ptGridDDObj_win0.drag_minX;  }
 dragObj.style.left = leftPos + 'px';  } 
 if(ptGridDDObj_win0.currentEl_allowY && ydiff !=0){ 
 var topPos = (ydiff+ ptGridDDObj_win0.el_y); if(ptGridDDObj_win0.drag_maxY){ 
 var tmpMaxY = ptGridDDObj_win0.drag_maxY - dragObj.offsetHeight;  if(topPos > tmpMaxY)topPos = tmpMaxY; if(topPos < ptGridDDObj_win0.drag_minY)topPos = ptGridDDObj_win0.drag_minY;  } 
 
 dragObj.style.top = topPos + 'px';  }
 oDragTxt = document.getElementById("pt_dragtxt");  oDragTxt.innerHTML = dragObj.innerHTML; oDragTxt.style.display="block";  oDragTxt.style.zIndex="999"; oDragTxt.style.width=dragObj.parentNode.width; oDragTxt.style.left = e.clientX + Math.max(document.body.scrollLeft,document.documentElement.scrollLeft); oDragTxt.style.top = e.clientY + Math.max(document.body.scrollTop,document.documentElement.scrollTop)-20; var srcId = dragObj.id.split("_")[0];  var trgNo=ptGridDDObj_win0.getValidTargetNo(srcId,e);  },
 getValidTargetNo : function(srcId,e)
 { 
 var dragObj = ptGridDDObj_win0.CloneArr[ptGridDDObj_win0.idDragged]; var srcId = dragObj.id.split("@")[0]; var srcGId = dragObj.id.split("#")[0];  var oDragTxt = document.getElementById("pt_dragtxt"); var eObj = ptCommonObj2.getEO(e); var leftPosMouse = e.clientX; var topPosMouse = e.clientY;  if(!ptGridDDObj_win0.trgArr)ptGridDDObj_win0.trgArr = new Array();  for(var no=0;no<ptGridDDObj_win0.trgArr.length;no++){
 var trgId=ptGridDDObj_win0.trgArr[no][0].id.split("@")[0]; trgId = trgId.substring(2,trgId.length); var trgGId = trgId.split("#")[0]; if (srcGId!=trgGId) continue; var tObj = document.getElementById(ptGridDDObj_win0.trgArr[no][0].id);  var leftPosEl = ptCommonObj2.getLeftPos(tObj); var topPosEl = ptCommonObj2.getTopPos(tObj); var widthEl = tObj.offsetWidth; var heightEl = tObj.offsetHeight; var sObj = document.getElementById(trgId);  if(leftPosMouse > leftPosEl+3 && leftPosMouse < (leftPosEl + widthEl)+3 && topPosMouse > topPosEl+3 && topPosMouse < (topPosEl + heightEl)+3){
 if(ptGridDDObj_win0.trgArr[no][1]) { 
 
 if (srcGId!=trgGId || trgId==srcId) { 
 eObj.style.cursor="not-allowed";  return -1; }
 else
 return no; }
 break; } 
 }
 eObj.style.cursor="not-allowed"; return -1;  },

 __getSortJScript : function(sId) 
 {
 var sScript=ptGridObj_win0.doSort(sId); return sScript; },

 __stop_dragDropElement : function(e) 
 {
 if (!ptGridDDObj_win0.bMove) { 
 
 if (ptGridDDObj_win0.bMousedown) { 
 ptGridDDObj_win0.bMousedown = false;  var idMousedwn= ptGridDDObj_win0.idMousedown; ptGridDDObj_win0.idMousedown = ""; var tmp_js = ptGridDDObj_win0.__getSortJScript(idMousedwn); if (tmp_js != "") 
 eval(tmp_js); }
 return;  }
 
 
 ptGridDDObj_win0.bMousedown = false;  ptGridDDObj_win0.bMove = false;  ptGridDDObj_win0.idMousedown = "";  if (!e && window.event)
 e = window.event;   dropDestination = ptCommonObj2.getEO(e); if (dropDestination.nodeType == 3) 
 dropDestination = dropDestination.parentNode; var trgNo=ptGridDDObj_win0.getValidTargetNo(ptGridDDObj_win0.srcArr[ptGridDDObj_win0.idDragged][0].id,e); if (trgNo!=-1) 
 eval(ptGridDDObj_win0.trgArr[trgNo][1] + '("' + ptGridDDObj_win0.srcArr[ptGridDDObj_win0.idDragged][0].id + '","' + ptGridDDObj_win0.trgArr[trgNo][0].id + '",' + e.clientX + ',' + e.clientY + ')'); else 
 ptGridDDObj_win0.__slideElementBackIntoItsOriginalPosition(ptGridDDObj_win0.idDragged);    ptGridDDObj_win0.idDragged = false; oDragTxt = document.getElementById("pt_dragtxt"); oDragTxt.innerHTML = ""; oDragTxt.style.display="none";   },
 __slideElementBackIntoItsOriginalPosition : function(numId)
 {
 
 var currentX = this.CloneArr[numId].style.left.replace('px','')/1; var currentY = this.CloneArr[numId].style.top.replace('px','')/1;   var targetX = ptCommonObj2.getLeftPos(ptGridDDObj_win0.srcArr[numId][0]); var targetY = ptCommonObj2.getTopPos(ptGridDDObj_win0.srcArr[numId][0]);;  if(this.slideBack){
 
 this.__processSlide(numId,currentX,currentY,targetX,targetY); }else{
 this.srcArr[numId][0].style.visibility = 'visible';  }
 
 },
 __processSlide : function(numId,currentX,currentY,targetX,targetY)
 { 
 
 var slideX = Math.round(Math.abs(Math.max(currentX,targetX) - Math.min(currentX,targetX)) / 10);   var slideY = Math.round(Math.abs(Math.max(currentY,targetY) - Math.min(currentY,targetY)) / 10);  if(slideY<3 && Math.abs(slideX)<10)slideY = 3;  if(slideX<3 && Math.abs(slideY)<10)slideX = 3;    if(currentX > targetX) slideX*=-1;  if(currentY > targetY) slideY*=-1;    currentX = currentX + slideX;  currentY = currentY + slideY;  if(Math.max(currentX,targetX) - Math.min(currentX,targetX) < 4)currentX = targetX; if(Math.max(currentY,targetY) - Math.min(currentY,targetY) < 4)currentY = targetY;  this.CloneArr[numId].style.left = currentX + 'px'; this.CloneArr[numId].style.top = currentY + 'px';    if(currentX!=targetX || currentY != targetY){
 window.thisRef = this;  setTimeout('window.thisRef.__processSlide("' + numId + '",' + currentX + ',' + currentY + ',' + targetX + ',' + targetY + ')',5); }else{ 
 this.srcArr[numId][0].style.visibility = 'visible'; } 
 }
}
var ptGridDDObj_win0 = null;var preID_win0=null; var orgColor_win0="white"; var frozn_win0="f"; var rowSelColor_win0=""; function resetVars_win0()
{
 if(typeof(preID_win0)!='undefined' && preID_win0 != null)
 HighLightTR(rowSelColor_win0, orgColor_win0, preID_win0, 1); }



function HighlightDone(sId)
{
 if(typeof(preID_win0)!='undefined' && preID_win0 != null) 
 {
 var saveID = preID_win0; var newID = sId; if (preID_win0.substr(0,1).indexOf(frozn_win0)==0) 
 saveID = preID_win0.substr(1); if (sId.substr(0,1).indexOf(frozn_win0)==0) 
 newID = sId.substr(1); if (saveID.length == newID.length && saveID.indexOf(newID) >=0) 
 return true; }

 
 return false;}


function HighLightTR(sRowSelColor, sRowOrgColor, sId, bRun) 
{
 if (typeof(bRun)=='undefined')
 {
 if (HighlightDone(sId))
 return; }
 
 if (rowSelColor_win0=="") 
 rowSelColor_win0 = sRowSelColor;  for (var i=0;i<2;i++) 
 {
 var obj; if (i== 0)
 obj=document.getElementById(preID_win0); else if (preID_win0.substr(0,1).indexOf(frozn_win0)==0) 
 obj=document.getElementById(preID_win0.substr(1));  else
 obj=document.getElementById(frozn_win0.concat(preID_win0));  if(typeof(obj) =='undefined' || obj==null)
 break; var x = obj.childNodes; for (var j=0;j<x.length;j++)
 {
 if((x[j].nodeName).indexOf("TD")==0 && (x[j].parentNode.nodeName).indexOf("TR") == 0)
 x[j].style.backgroundColor=orgColor_win0;  }
 }
 
 for (var i=0;i<2;i++) 
 {
 var obj; if (i== 0)
 obj=document.getElementById(sId); else if (sId.substr(0,1).indexOf(frozn_win0)==0)
 obj=document.getElementById(sId.substr(1)); else
 obj=document.getElementById(frozn_win0.concat(sId)); if(typeof(obj) =='undefined' || obj==null)
 break; var y = obj.childNodes; for (var j=0;j<y.length;j++)
 {
 if( (y[j].nodeName).indexOf("TD")==0 && (y[j].parentNode.nodeName).indexOf("TR") == 0)
 y[j].style.backgroundColor=rowSelColor_win0; }
 }
 preID_win0 = sId;  orgColor_win0 = sRowOrgColor;}


function hoverLightTR(sRowHoverColor, sRowOrgColor, bReset, sId) 
{
 if (HighlightDone(sId))
 return; for (var i=0;i<2;i++) 
 {
 var obj; if (i== 0)
 obj=document.getElementById(sId); else if (sId.substr(0,1).indexOf(frozn_win0)==0) 
 obj=document.getElementById(sId.substr(1));  else
 obj=document.getElementById(frozn_win0.concat(sId));  if(typeof(obj) =='undefined' || obj==null)
 break; var x = obj.childNodes; for (var j=0;j<x.length;j++)
 {
 if((x[j].nodeName).indexOf("TD")==0 && (x[j].parentNode.nodeName).indexOf("TR") == 0)
 {
 if (bReset) 
 x[j].style.backgroundColor=sRowOrgColor; else
 x[j].style.backgroundColor=sRowHoverColor; }
 }
 }
}
