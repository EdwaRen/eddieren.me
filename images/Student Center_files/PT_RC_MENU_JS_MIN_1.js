
var ptrcMenu = {
 RCMENUITEM_HT: 20, 
 RCMENUITEM_WD: 130, 
 dropdown: null, 
 rcMenuSpan: null, 
 showFlag: false, 
 menuID:null,
 closetimer:null,
 actEvt:null,
 
 
getAbsolutePos:function(el) {
 var SL = 0, ST = 0; var is_div = /^div$/i.test(el.tagName); if (is_div && el.scrollLeft)
 SL = el.scrollLeft; if (is_div && el.scrollTop)
 ST = el.scrollTop; var r = { x: el.offsetLeft - SL, y: el.offsetTop - ST }; if (el.offsetParent) {
 var tmp = this.getAbsolutePos(el.offsetParent); r.x += tmp.x; r.y += tmp.y; }
 return r;},


dropDownHoverImg : function() {
var tc = window.frames['TargetContent'];if(tc.document.getElementById("ptrcMenuLinkImage")!=null)
{
tc.document.getElementById("ptrcMenuLinkImage").style.display="none";tc.document.getElementById("ptrcMenuLinkImageOnhover").style.display="inline";}
},

dropDownNormalImg : function() {
if(!this.showFlag)
{
var tc = window.frames['TargetContent'];if(tc.document.getElementById("ptrcMenuLinkImageOnhover"))
{
tc.document.getElementById("ptrcMenuLinkImageOnhover").style.display="none";tc.document.getElementById("ptrcMenuLinkImage").style.display="inline";}
}
},

 
 
toggle:function(evt,menuID) { 
 var tc = window.frames['TargetContent']; if (tc == null) {
 return; }
 
 var objHeader = tc.document.getElementById("RCPAGEMENUHEADER"); var objCont = tc.document.getElementById("RCPAGEMENUCONTENT"); var objRC = tc.document.getElementById("rcMenuOnTC"); if (objRC == null) {
 return; }
 this.showFlag = !this.showFlag; if (this.showFlag)
 {
 this.dropDownHoverImg(); objHeader.style.display = "inline"; objCont.style.display = "inline"; var rPos = this.getAbsolutePos(objRC); objHeader.style.position= "absolute";  objHeader.style.visibility ="visible"; objHeader.style.left = rPos.x-10+"px"; objHeader.style.top = rPos.y-1+"px"; var objHeaderEl = tc.document.getElementById("RCPAGEMENUHEADERL"); objHeaderEl.style.height = objRC.offsetHeight+14+"px"; objHeaderEl.style.width = objRC.offsetWidth+4+"px"; objCont.style.position= "absolute"; objCont.style.left = rPos.x-10+"px"; objCont.style.top = rPos.y+objRC.offsetHeight+10+"px"; var ContWidth = objCont.offsetWidth; var RcWidth = objRC.offsetWidth; if (ContWidth<objHeader.offsetWidth)
 {
 var objContDivTR = tc.document.getElementById("RCPAGEMENUCONTENTDIVTR"); objContDivTR.style.visibilty = "hidden"; var objContDiv = tc.document.getElementById("RCPAGEMENUCONTENTDIV"); objContDiv.style.display = "none"; objContDiv.style.visibilty = "hidden"; objCont.style.width = objHeader.offsetWidth+"px"; }
 else
 {
 var objContDiv = tc.document.getElementById("RCPAGEMENUCONTENTDIV"); objContDiv.style.marginLeft = objRC.offsetWidth+14+"px"; objContDiv.style.width = ContWidth-(objHeader.offsetWidth)+"px"; }
 objCont.style.visibility ="visible"; if (document.all)
  objCont.style.display = "inline"; }
 else
 {
 objHeader.style.visibilty = "hidden"; objCont.style.visibilty = "hidden"; objHeader.style.display = "none"; objCont.style.display = "none"; this.dropDownNormalImg(); }
 }, 

 
close:function(evt) {
 ptrcMenu.actEvt = evt; ptrcMenu.closetimer = window.setTimeout("window.top.ptrcMenu.closeRCMenu();", 300);},

cancelTimer:function(evt) {
if (this.closetimer)
 {
 clearTimeout(this.closetimer);  this.closetimer = null; }
},
 
 closeRCMenu:function() {

if (ptrcMenu.closetimer)
 {
 window.clearTimeout(ptrcMenu.closetimer);  ptrcMenu.closetimer = null; }
 if ((ptrcMenu.menuID != null) && (typeof(ptrcMenu.menuID) !== "undefined")) 
 ptrcMenu.showFlag && ptrcMenu.toggle(ptrcMenu.actEvt,ptrcMenu.menuID); else
 ptrcMenu.showFlag && ptrcMenu.toggle(ptrcMenu.actEvt); }
}
