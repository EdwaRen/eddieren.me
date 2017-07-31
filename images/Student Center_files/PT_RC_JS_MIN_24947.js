function ptSidePanel(){}

ptSidePanel.prototype = {
 
 CSS_PAGELETAREA_DOCKED : "ptalPgltArea_docked",
 CSS_PAGELETAREA_UNDOCKED : "ptalPgltArea_float",
 CSS_PAGELETAREA_VISIBLE : "ptalPgltArea_visible",
 CSS_PAGELETAREA_HIDDEN : "ptalPgltArea_hidden",
 CSS_PAGELETAREA_MOVING : "ptalPgltArea_moving",
 CSS_PAGELETAREA_RESIZING : "ptalPgltArea_resizing",
 CSS_PAGELETGROUP_SELECTED : "selected",
 CSS_AJAX_PROCESSING : "ptalAJAXProcessing",
 CSS_POSITION_ABSOLUTE : "absolute",

 
 ID_TARGETCONTENTFRAME : "ptifrmtgtframe",
 ID_RELATEDCONTENTFRAME : "SRelatedContent",
 ID_PAGELETAREAFRAME : "ptalPgltAreaFrame",
 ID_CONTENTCONTAINER : "ptifrmcontent",
 ID_TARGETCONTENTFRAMECONTAINER : "ptifrmtarget",
 ID_RELATEDCONTENTFRAMECONTAINER : "ptifrmrc",
 ID_PAGEMASK : "ptalPageMask",
 ID_PAGELETAREA_ANCHORCONTAINERDIV : "ptalPgltAreaAnchorContainerDiv",
 ID_PAGELETAREA_ANCHORCONTAINER : "ptalPgltAreaAnchorContainer",
 ID_PAGELETAREA_ANCHOR_LOC : "ptalPgltAreaAnchorLoc",
 ID_PAGELETAREA_ANCHOR : "ptalPgltAreaAnchor",
 ID_PAGELETAREA_CONTAINERDIV : "ptalPgltAreaContainerDiv",
 ID_PAGELETAREA_CONTAINER : "ptalPgltAreaContainer",
 ID_PAGELETAREA : "ptalPgltArea",
 ID_PAGELETAREA_BODY : "ptalPgltAreaBody",
 ID_PAGELETAREA_BODY_ANCHOR : "ptalPgltAreaBodyAnchor",
 ID_PAGELETAREA_HEADER : "ptalPgltAreaHeader",
 ID_PAGELETAREA_HEADERLABEL : "ptalPgltAreaHeaderLabel",
 ID_PAGELETAREA_FRAMEDIV : "ptalPgltAreaFrameDiv",
 ID_PAGELETGROUP_CONTAINER : "ptalPageletGroupsDiv",
 ID_PAGELETGROUP_TAB : "ptalPgTab_",
 ID_PAGELETGROUP : "ptalPg_",
 ID_PAGELETAREA_RESIZE_ICON : "ptalPgltAreaResize",
 ID_PAGELETAREA_RESIZE_BAR : "ptalPgltAreaResizeBar",
 ID_PAGELETAREA_SHADOWBORDER_V : "ptalShadowBorderVertical",
 ID_ICON_SHOW_PAGELETAREA_ANCHOR : "ptalPgltAreaShowAnchor",
 ID_ICON_HIDE_PAGELETAREA_ANCHOR : "ptalPgltAreaHideAnchor",
 ID_ICON_SHOW_PAGELETAREA : "ptalPgltAreaShow",
 ID_ICON_HIDE_PAGELETAREA : "ptalPgltAreaHide",
 ID_ICON_CLOSE_PAGELETAREA : "ptalPgltAreaClose",

 UNDEFINED : "undefined",

 initialSize : 256,
 visible : true,
 docked : false,
 isResized : false,

 ptIframe : null,
 ptalTemplate : null,
 ptalPageletArea : null,

 objTCframe : null,
 objPAframe : null,
 objContentContainer : null,
 objTCframeContainer : null,
 objPageMask : null,
 objPageletAreaAnchorContainer : null,
 objPageletAreaAnchor : null,
 objPageletAreaContainer : null,
 objPageletArea : null,
 objPageletAreaBody : null,
 objPageletAreaBodyAnchor : null,
 objPageletAreaHeader : null,
 objPageletAreaHeaderLabel : null,
 objPageletAreaShadowVBorder : null,
 objAnchorIconShowPageletArea : null,
 objAnchorIconHidePageletArea : null,
 objIconShowPageletArea : null,
 objIconHidePageletArea : null,
 objIconClosePageletArea : null,

 DEFAULT_VALUE : -9999,
 MINIMUM_PA_SIZE : {left : 0, right : 0, top : 0, width : 200, height : 200},

 anchor_size : { width : -9999, height : -9999 },
 pa_size: { left : -9999, right : -9999, top : -9999, bottom : -9999, width : -9999, height : -9999 },
 padding_tc : { left : -9999, right : -9999, top : -9999, bottom : -9999 },
 padding_rc : { left : -9999, right : -9999 },
 resizingTimer : null,
 draggingElementId : "",
 draggingTimer : null,
 lastMousePos : { x : -9999, y : -9999 },

 currContainerName : "", 

 init : function(strContainer){
 this.currContainerName = strContainer; this.objTCframe = document.getElementById(this.ID_TARGETCONTENTFRAME); this.objPAframe = document.getElementById(this.ID_PAGELETAREAFRAME); this.objContentContainer = document.getElementById(this.ID_CONTENTCONTAINER); this.objTCframeContainer = document.getElementById(this.ID_TARGETCONTENTFRAMECONTAINER); this.objPageMask = document.getElementById(this.ID_PAGEMASK); this.objPageletAreaAnchorContainer = document.getElementById(this.ID_PAGELETAREA_ANCHORCONTAINER); this.objPageletAreaAnchor = document.getElementById(this.ID_PAGELETAREA_ANCHOR); this.objPageletAreaContainer = document.getElementById(this.ID_PAGELETAREA_CONTAINER); this.objPageletArea = document.getElementById(this.ID_PAGELETAREA); this.objPageletAreaBody = document.getElementById(this.ID_PAGELETAREA_BODY); this.objPageletAreaBodyAnchor = document.getElementById(this.ID_PAGELETAREA_BODY_ANCHOR); this.objPageletAreaHeader = document.getElementById(this.ID_PAGELETAREA_HEADER); this.objPageletAreaHeaderLabel = document.getElementById(this.ID_PAGELETAREA_HEADERLABEL); this.objPageletAreaShadowVBorder = document.getElementById(this.ID_PAGELETAREA_SHADOWBORDER_V); this.objAnchorIconShowPageletArea = document.getElementById(this.ID_ICON_SHOW_PAGELETAREA_ANCHOR); this.objAnchorIconHidePageletArea = document.getElementById(this.ID_ICON_HIDE_PAGELETAREA_ANCHOR); this.objIconShowPageletArea = document.getElementById(this.ID_ICON_SHOW_PAGELETAREA); this.objIconHidePageletArea = document.getElementById(this.ID_ICON_HIDE_PAGELETAREA); this.objIconClosePageletArea = document.getElementById(this.ID_ICON_CLOSE_PAGELETAREA); var obj = document.getElementById(this.ID_PAGELETAREA_ANCHOR_LOC); if (obj) obj.parentNode.replaceChild(this.objPageletAreaAnchor, obj); this.objPAframe.style.width = this.MINIMUM_PA_SIZE.width + "px"; if ((this.objPageletAreaHeader) && (this.objPageletAreaHeader.clientWidth > this.MINIMUM_PA_SIZE.width)) {
 this.MINIMUM_PA_SIZE.width = this.objPageletAreaHeader.clientWidth; }

 this.initShowHidePanelEvent(); }, 

 
 initShowHidePanelEvent: function () {

 function getStyle(el,styleProp)
 {
 var x = document.getElementById(el); if (x.currentStyle)
 var y = x.currentStyle[styleProp]; else if (window.getComputedStyle)
 var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp); return y; }
 document.body.onkeyup = function(evt) {
 if (!evt) evt = window.event; if ( evt.altKey ) {
 if(evt.keyCode==112 && (typeof(ptalPage) != 'undefined' && ptalPage != null)) { 
 if(document.getElementById('ptalPgltAreaHide').style.display != 'none')
 ptalPage.onHidePageletArea(); else if(document.getElementById('ptalPgltAreaShow').style.display != 'none')
 ptalPage.onShowPageletArea(); } else if(evt.keyCode==113 && ptrc.IsPageRCEnabled() && (typeof(RCPage) != 'undefined' && RCPage != null)) { 
 if(document.getElementById('vRCPgltAreaHide').style.display != 'none')
 RCPage.onHidePageletArea(); else if(document.getElementById('vRCPgltAreaShow').style.display != 'none')
 RCPage.onShowPageletArea(); }
 }
 }
 }, 

 
 showElement : function (pObj) {
 if ((typeof pObj != this.UNDEFINED) && (pObj) && (pObj.style)) {
 if (pObj == this.objPageletAreaContainer) {
 
 ptUtil.swapClass(pObj, this.CSS_PAGELETAREA_HIDDEN, this.CSS_PAGELETAREA_VISIBLE); if (this.docked) {
 if (pObj.style.visibility) pObj.style.visibility = ""; } else {
 pObj.style.visibility = "visible"; }

 
 if (pObj.style.opacity) pObj.style.opacity = ""; if (pObj.style.filter) pObj.style.filter = ""; } else {
 pObj.style.display = ""; }
 }

 }, 

 
 showElementById : function (pObjId) {
 if ((typeof pObjId != this.UNDEFINED) && (pObjId)) {
 this.showElement(document.getElementById(pObjId)); }
 }, 

 
 hideElement : function (pObj) {
 if ((typeof pObj != this.UNDEFINED) && (pObj) && (pObj.style)) {
 if (pObj == this.objPageletAreaContainer) {
 
 ptUtil.swapClass(pObj, this.CSS_PAGELETAREA_VISIBLE, this.CSS_PAGELETAREA_HIDDEN); if (this.docked) {
 if (pObj.style.visibility) pObj.style.visibility = ""; } else {
 pObj.style.visibility = "hidden"; }

 
 if (pObj.style.opacity) pObj.style.opacity = ""; if (pObj.style.filter) pObj.style.filter = ""; } else {
 pObj.style.display = "none"; }
 }

 }, 


 
 hideElementById: function (pObjId) {
 if ((typeof pObjId != this.UNDEFINED) && (pObjId)) {
 this.hideElement(document.getElementById(pObjId)); }

 }, 


 
 setProcessingFlag : function (pObjId, pFlag) {

 if ((typeof pObjId == this.UNDEFINED) || (pObjId)) return; if ((typeof pFlag == this.UNDEFINED)) pFlag = false; var obj = document.getElementById(pObjId); if (obj) obj.processing = ((pFlag) ? true : false); }, 


 
 isProcessingPageletArea : function () {

 return ((this.objPageletAreaAnchorContainer && this.objPageletAreaAnchorContainer.processing) ||
 (this.objPageletAreaContainer && this.objPageletAreaContainer.processing)); }, 

 
 fadeInElement : function (pObj, pSec, pStep) {

 if ((typeof pObj == this.UNDEFINED) || (!pObj)) return; if ((typeof pSec == this.UNDEFINED) || (!pSec)) pSec = 0.5; if ((typeof pStep == this.UNDEFINED) || (!pStep)) pStep = 5; this.setProcessingFlag(pObj.id, true); if (pObj == this.objPageletAreaContainer) {
 
 pObj.parentNode.visibility = "hidden"; this.showElement(pObj); ptCommonObj2.setOpaq(pObj.id, 0); pObj.parentNode.visibility = ""; } else {
 ptCommonObj2.setOpaq(pObj.id, 0); this.showElement(pObj); }

 for (i=1; i <= 100/pStep; i++) {
 setTimeout("{ptCommonObj2.setOpaq('" + pObj.id + "', " + (i * pStep) + ");}", (i * pStep * pSec * 10)); }

 setTimeout(this.currContainerName + ".setProcessingFlag('" + pObj.id + "', false);", pSec * 1000); }, 


 
 fadeInElementById : function (pObjId, pSec, pStep) {

 if ((typeof pObjId != this.UNDEFINED) && (pObjId)) {
 this.fadeInElement(document.getElementById(pObjId)); }

 }, 


 
 fadeOutElement : function (pObj, pSec, pStep) {

 if ((typeof pObj == this.UNDEFINED) || (!pObj)) return; if ((typeof pSec == this.UNDEFINED) || (!pSec)) pSec = 0.5; if ((typeof pStep == this.UNDEFINED) || (!pStep)) pStep = 5; this.setProcessingFlag(pObj.id, true); ptCommonObj2.setOpaq(pObj.id, 100); for (i=1; i <= 100/pStep; i++) {
 setTimeout("ptCommonObj2.setOpaq('" + pObj.id + "', " + (100 - i * pStep) + ")", (i * pStep * pSec * 10)); }

 setTimeout("{" + this.currContainerName + ".hideElementById('" + pObj.id + "'); " + this.currContainerName + ".setProcessingFlag('" + pObj.id + "', false);}", (pSec * 1000)); }, 


 
 fadeOutElementById : function (pObjId, pSec, pStep) {

 if ((typeof pObjId != this.UNDEFINED) && (pObjId)) {
 this.fadeOutElement(document.getElementById(pObjId)); }

 }, 



 
 resize : function (pResizeTCOnly) {

 if (typeof pResizeTCOnly == this.UNDEFINED) pResizeTCOnly = false; if (!this.ptIframe) return; if (this.resizingTimer) clearTimeout(this.resizingTimer);  if (this.ptalTemplate && !pResizeTCOnly) {
 
 this.ptalTemplate.setConstrants(); var sizeChanged = false;  if (this.pa_size.width > this.ptalTemplate.constrants.maxWidth) {
 this.pa_size.width = this.ptalTemplate.constrants.maxWidth; sizeChanged = true; }
 if (this.pa_size.height > this.ptalTemplate.constrants.maxHeight) {
 this.pa_size.height = this.ptalTemplate.constrants.maxHeight; sizeChanged = true; }

 
 if (sizeChanged && this.docked && this.visible && browserInfoObj2.isFF) {
 this.resizingTimer = setTimeout(this.currContainerName + ".resize();", 50); }

 
 this.ptalTemplate.setPaddings(); }


 
 if ((this.visible || this.docked) && !pResizeTCOnly) this.resizePageletArea();  if (this.ptalTemplate.parent.padding_tc.left !== this.DEFAULT_VALUE) {
 if(!this.objIconShowPageletArea.style.display)
 this.objTCframe.parentNode.style.left = this.ptalTemplate.parent.padding_tc.left + document.images['ptalPgltAreaShowImg'].width +"px"; else
 this.objTCframe.parentNode.style.left = this.ptalTemplate.parent.padding_tc.left + "px"; }

 var padding = ((this.ptalTemplate.parent.padding_tc.right !== this.DEFAULT_VALUE) ? this.ptalTemplate.parent.padding_tc.right : 0); this.ptIframe.resizeWidth(this.ID_TARGETCONTENTFRAME, padding);  if (this.ptalTemplate.parent.padding_tc.top !== this.DEFAULT_VALUE) {
 this.objTCframe.parentNode.style.top = this.ptalTemplate.parent.padding_tc.top + "px"; } else {
 this.objTCframe.parentNode.style.top = ""; }

 padding = ((this.ptalTemplate.parent.padding_tc.bottom !== this.DEFAULT_VALUE) ? this.ptalTemplate.parent.padding_tc.bottom : 0); this.ptIframe.resizeHeight(this.ID_TARGETCONTENTFRAME, padding); this.ptIframe.rc.resize();  }, 



 
 resizePageletArea : function () {

 
 if (this.ptalTemplate) this.ptalTemplate.resizePageletArea();  if (this.docked) {
 if (this.ptalTemplate) this.ptalTemplate.setPaddings(); this.resize(true); };  if (this.visible && !this.docked && browserInfoObj2.isIE && document.compatMode && (document.compatMode == "CSS1Compat")) {
 this.objPageletAreaShadowVBorder.style.height = (this.objPageletAreaBody.clientHeight - 12) + "px"; }

 }, 


 
 showPageletArea : function (pNoFading) {

 if (typeof pNoFading == this.UNDEFINED) pNoFading = false;  this.visible = true; this.ptalTemplate.parent.visible = true;  if (this.allowMinimize) {
 this.showElement(this.objAnchorIconHidePageletArea); this.hideElement(this.objAnchorIconShowPageletArea); if (this.docked) {
 this.showElement(this.objIconHidePageletArea); } else {
 this.hideElement(this.objIconHidePageletArea); }
 this.hideElement(this.objIconShowPageletArea); this.showElement(this.objIconClosePageletArea); } else {
 this.hideElement(this.objAnchorIconHidePageletArea); this.hideElement(this.objAnchorIconShowPageletArea); this.hideElement(this.objIconHidePageletArea); this.hideElement(this.objIconShowPageletArea); this.hideElement(this.objIconClosePageletArea); }

 
 this.ptalTemplate.parent.setPageletAreaHeaderIcons();  this.ptalTemplate.setPaddings();  this.resizePageletArea();  if (browserInfoObj2.isIE || pNoFading) {
 
 this.showElement(this.objPageletAreaContainer);  this.fixPageletGroupTabs(this.currContainerName);  if (this.docked) this.ptalTemplate.parent.resize(); } else {
 
 this.fadeInElement(this.objPageletAreaContainer);  if (this.docked) setTimeout(this.currContainerName + ".resize()", 600); }

 
 if (!this.docked && this.allowAutoHide && this.allowMinimize) {
 this.ptalTemplate.parent.addDocClickEventHandlers(); }

 
 if (this.objPAframe)
 this.objPAframe.focus(); }, 


 
 hidePageletArea : function (pNoFading) {

 if (!this.allowMinimize) return; if (typeof pNoFading == this.UNDEFINED) pNoFading = false;  this.visible = false; this.ptalTemplate.parent.visible = false;  this.hideElement(this.objAnchorIconHidePageletArea); this.showElement(this.objAnchorIconShowPageletArea); if (this.docked) {
 this.showElement(this.objIconShowPageletArea); } else {
 this.hideElement(this.objIconShowPageletArea); }
 this.hideElement(this.objIconHidePageletArea);  this.ptalTemplate.setPaddings();  if (browserInfoObj2.isIE || pNoFading) {
 
 this.hideElement(this.objPageletAreaContainer);  if (this.docked) this.ptalTemplate.parent.resize(); } else {
 
 this.fadeOutElement(this.objPageletAreaContainer);  if (this.docked) setTimeout(this.currContainerName + ".resize()", 600); }

 
 if (!this.docked && this.allowAutoHide && this.allowMinimize) {
 this.ptalTemplate.parent.removeDocClickEventHandlers(); }

 }, 


 
 cancelEventBubble : function (pEvent) {

 if (window.event) {
 
 window.event.cancelBubble = true; } else if ((typeof pEvent != this.UNDEFINED) && (pEvent)) {
 
 pEvent.stopPropagation(); }

 }, 


 
 onDraggingStart : function (pEvent, currElem) {

 if (!this.visible) return;  switch (currElem.id) {
 case this.ID_PAGELETAREA_HEADERLABEL:
 
 if (this.docked) return; this.objPageletArea.style.position = this.CSS_POSITION_ABSOLUTE;  if (this.objPAframe) {
 if (this.pa_size.width == this.DEFAULT_VALUE) {
 this.pa_size.width = this.objPAframe.clientWidth; }

 if (this.pa_size.height == this.DEFAULT_VALUE) {
 this.pa_size.height = this.objPAframe.clientHeight; }
 }

 break; case this.ID_PAGELETAREA_RESIZE_BAR:
 
 if (!this.docked) return; break; case this.ID_PAGELETAREA_RESIZE_ICON:
 
 if (this.docked) return; break; }

 
 this.draggingElementId = currElem.id; this.ptalTemplate.parent.draggingElementId = currElem.id; this.lastMousePos.x = pEvent.pageX; this.lastMousePos.y = pEvent.pageY;  switch (this.draggingElementId) {
 case this.ID_PAGELETAREA_HEADERLABEL:
 ptUtil.addClass(this.objPageletAreaContainer, this.CSS_PAGELETAREA_MOVING); break; default:
 ptUtil.addClass(this.objPageletAreaContainer, this.CSS_PAGELETAREA_RESIZING); break; }

 
 if (this.ptalTemplate) {
 this.ptalTemplate.draggingStart(); this.ptalTemplate.setConstrants(); }

 
 ptEvent.add(document, "mousemove", this.ptalTemplate.parent.onDragging); ptEvent.add(document, "mouseup", this.ptalTemplate.parent.onDraggingEnd); ptEvent.add(document, "click", this.ptalTemplate.parent.onDraggingEnd);  if (this.objPageMask) {
 this.objPageMask.style.display = "block";  if (this.ptalTemplate) {
 this.objPageMask.style.cursor ="col-resize"; }
 }

 
 this.cancelEventBubble(pEvent); return false; }, 


 
 onDragging : function (pEvent) {

 if (!this.draggingElementId) return;  var diffx = pEvent.pageX - this.lastMousePos.x; var diffy = pEvent.pageY - this.lastMousePos.y;  if ("ltr" == "rtl") diffx = (-diffx);  this.lastMousePos.x = pEvent.pageX; this.lastMousePos.y = pEvent.pageY;  if (this.ptalTemplate) {

 var sizeChanged = this.ptalTemplate.dragging({diffWidth:diffx, diffHeight:diffy}); if (sizeChanged) {
 switch (this.draggingElementId) {
 case this.ID_PAGELETAREA_HEADERLABEL:
 
 this.isMoved = true; this.ptalTemplate.parent.movePageletArea(); break; default:
 
 this.isResized = true; this.ptalTemplate.setPaddings(); this.resizePageletArea(); break; }
 }

 }

 
 if (this.draggingTimer) clearTimeout(this.draggingTimer); this.draggingTimer = setTimeout(this.currContainerName + ".onDraggingEnd();", 5000);  this.cancelEventBubble(pEvent); return false; }, 


 
 onDraggingEnd : function (pEvent) {

 
 if (this.draggingTimer) clearTimeout(this.draggingTimer);  ptEvent.remove(document, "mousemove", this.ptalTemplate.parent.onDragging); ptEvent.remove(document, "mouseup", this.ptalTemplate.parent.onDraggingEnd); ptEvent.remove(document, "click", this.ptalTemplate.parent.onDraggingEnd); if (this.draggingTimer) clearTimeout(this.draggingTimer);  ptUtil.removeClass(this.objPageletAreaContainer, this.CSS_PAGELETAREA_MOVING); ptUtil.removeClass(this.objPageletAreaContainer, this.CSS_PAGELETAREA_RESIZING);  if (this.ptalTemplate) {
 this.ptalTemplate.draggingEnd(); }

 
 setTimeout(this.currContainerName + ".fixPageletGroupTabs('" + this.currContainerName + "');", 50);  this.draggingElementId = ""; this.ptalTemplate.parent.draggingElementId = ""; this.lastMousePos.x = this.DEFAULT_VALUE; this.lastMousePos.y = this.DEFAULT_VALUE;  if (this.docked) {
 this.resize(); }

 
 if (this.objPageMask) {
 this.objPageMask.style.display = "none";  this.objPageMask.style.cursor = ""; }


 
 this.cancelEventBubble(pEvent); return false; }, 


 
 fixPageletGroupTabs : function (containerName) {

 
 if ((browserInfoObj2.isIE) && (browserInfoObj2.version <= 7)) {
 var obj = document.getElementById(this.ID_PAGELETGROUP_CONTAINER); if (obj) {
 setTimeout("var obj = document.getElementById(" + containerName + ".ID_PAGELETGROUP_CONTAINER); obj.innerHTML = obj.innerHTML; obj.style.visibility = '';", 10); obj.style.visibility = "hidden"; }
 }

 }, 



 
 onTogglePageletArea : function () {

 if (this.visible) {
 this.onHidePageletArea(); } else {
 this.onShowPageletArea(); }

 if (!this.docked) {
 
 try {
 if (this.visible) {
 this.objAnchorIconHidePageletArea.focus(); } else {
 this.objAnchorIconShowPageletArea.focus(); }
 } catch (e) {
 }

 
 this.isOverIframe = true; }

 }, 


 resizeBottomRC : function (pTCHeight, pRCHeight) {
 if (!this.ptIframe) return; var bottomRCObj = document.getElementById("RelatedContent"); if (!bottomRCObj) return; if (this.padding_rc.left === this.DEFAULT_VALUE) {
 bottomRCObj.style.left = this.objTCframe.style.left; bottomRCObj.parentNode.style.left = this.objTCframe.parentNode.style.left; } else {
 bottomRCObj.style.left = this.padding_rc.left + "px"; bottomRCObj.parentNode.style.left = this.padding_rc.left + "px"; }

 if (this.padding_rc.right === this.DEFAULT_VALUE) {
 bottomRCObj.style.width = this.objTCframe.style.width; bottomRCObj.parentNode.style.width = this.objTCframe.style.width; } else {
 bottomRCObj.style.width = (this.objTCframe.clientWidth + this.padding_rc.right) + "px"; bottomRCObj.parentNode.style.width = bottomRCObj.style.width; }
 bottomRCObj.parentNode.style.top = pTCHeight + "px"; var padding = ((this.padding_tc.bottom !== this.DEFAULT_VALUE) ? this.padding_tc.bottom : 0); this.ptIframe.resizeHeight(this.ID_TARGETCONTENTFRAME, pRCHeight + padding); if (typeof this.ptIframe.resizeOtherIframes != "undefined")
 this.ptIframe.resizeOtherIframes(pRCHeight + padding); bottomRCObj.style.height = (pRCHeight - padding - ((this.ptIframe.rcSep) ? this.ptIframe.rcSep.offsetHeight: 0)) + "px"; var rc = window.frames['RelatedContent']; var RCArea = rc.document.getElementById('RCArea'); if(!RCArea) return; var height = bottomRCObj.offsetHeight; if (height > bottomRCObj.offsetTop) height = height - bottomRCObj.offsetTop;   RCArea.style.height = height + "px"; }, 


 
 onShowPageletArea : function () {
 
 if (this.isProcessingPageletArea()) return; this.showPageletArea(); }, 


 
 onHidePageletArea : function () {
 
 if (this.isProcessingPageletArea()) return; this.hidePageletArea(); }, 


 
 onResizePageletArea : function () {
 this.resizePageletArea(); } 

}; var RCPage = {

 
 initialSize : 256,
 visible: false, 
 initialized: false, 
 resizeHandlerAttached: false, 
 docked: true,

 
 ptIframe: null, 
 ptalTemplate: null, 
 ptalPageletArea: null, 

 
 objTCframeContainer: null,
 objPAframe: null,
 objPageletAreaContainer: null, 
 objPageletAreaBodyAnchor: null,
 objPageletArea: null, 
 objPageletAreaHeader: null, 
 objPageletAreaHeaderLabel: null, 
 objIconShowPageletArea: null, 
 objIconHidePageletArea: null, 
 objIconDockPageletArea: null, 
 objIconUndockPageletArea: null, 
 objPageMask: null,

 
 DEFAULT_VALUE: -9999,
 MINIMUM_PA_SIZE: { left: 0, right: 0, top: 0, width: 200, height: 200 },
 anchor_size : { width : -9999, height : -9999 },
 pa_size: { left: -9999, right: -9999, top: -9999, bottom: -9999, width: -9999, height: -9999 },
 padding_tc: { left: -9999, right: -9999, top: -9999, bottom: -9999 },
 padding_rc: { left: -9999, right: -9999 },

 
 UNDEFINED: "undefined",
 ID_TARGETCONTENTFRAME: "ptifrmtgtframe",
 ID_PAGELETAREA_CONTAINER : "vRCPgltAreaContainer",
 ID_PAGELETAREA_ANCHORCONTAINER: "vRCPgltAreaAnchorContainer",
 ID_PAGELETAREA_ANCHOR: "vRCPgltAreaAnchor",
 ID_PAGELETAREA_BODY_ANCHOR : "vRCPgltAreaBodyAnchor",
 ID_PAGELETAREA: "vRCPgltArea",
 ID_PAGELETAREA_HEADER: "vRCPgltAreaHeader",
 ID_PAGELETAREA_HEADERLABEL: "vRCPgltAreaHeaderLabel",
 ID_PAGELETAREA_RESIZE_BAR: "vRCPgltAreaResizeBar",
 ID_ICON_SHOW_PAGELETAREA: "vRCPgltAreaShow",
 ID_ICON_HIDE_PAGELETAREA: "vRCPgltAreaHide",
 ID_PAGELETAREAFRAME : "SRelatedContent",
 ID_PAGEMASK : "ptalPageMask", 
 CSS_RC_HIDDEN : "vRCHidden",

 RCPanel: null,

 
 
 
 init: function() {

 this.createSidePanel();  if ((typeof ptIframe != this.UNDEFINED) && (ptIframe)) {
 this.ptIframe = ptIframe; this.RCPanel.ptIframe = ptIframe; }

 
 this.objTCframeContainer = document.getElementById("ptifrmtarget"); this.objPAframe = document.getElementById(this.ID_PAGELETAREAFRAME); this.objPageletAreaContainer = document.getElementById(this.ID_PAGELETAREA_CONTAINER); this.objPageletArea = document.getElementById(this.ID_PAGELETAREA); this.objPageletAreaHeader = document.getElementById(this.ID_PAGELETAREA_HEADER); this.objPageletAreaHeaderLabel = document.getElementById(this.ID_PAGELETAREA_HEADERLABEL); this.objIconShowPageletArea = document.getElementById(this.ID_ICON_SHOW_PAGELETAREA); this.objIconHidePageletArea = document.getElementById(this.ID_ICON_HIDE_PAGELETAREA); this.objPageletAreaBodyAnchor = document.getElementById(this.ID_PAGELETAREA_BODY_ANCHOR); this.objPageMask = document.getElementById(this.ID_PAGEMASK);  this.anchor_size.width = 0; this.anchor_size.height = 0; this.ptalTemplate.init(this);  this.addResizeEventHandlers(); this.visible = false; this.RCPanel.visible = false; this.initialized = true; }, 

 createSidePanel: function() {
 
 this.RCPanel = new ptSidePanel(); this.RCPanel.ptalTemplate = this.ptalTemplate; this.RCPanel.initialSize = this.initialSize; this.RCPanel.allowMinimize = true; this.RCPanel.visible = this.visible; this.RCPanel.docked = true; this.RCPanel.allowUndock = false; this.RCPanel.allowAutoHide = false; this.RCPanel.CSS_PAGELETAREA_VISIBLE = "vRCPgltArea_visible"; this.RCPanel.CSS_PAGELETAREA_HIDDEN = "vRCPgltArea_hidden"; this.RCPanel.CSS_PAGELETAREA_RESIZING = "vRCPgltArea_resizing"; this.RCPanel.ID_PAGELETAREAFRAME = "SRelatedContent"; this.RCPanel.ID_PAGELETAREA_ANCHORCONTAINER = this.ID_PAGELETAREA_ANCHORCONTAINER; this.RCPanel.ID_PAGELETAREA_CONTAINERDIV = "vRCPgltAreaContainerDiv"; this.RCPanel.ID_PAGELETAREA_CONTAINER = "vRCPgltAreaContainer"; this.RCPanel.ID_PAGELETAREA = this.ID_PAGELETAREA; this.RCPanel.ID_PAGELETAREA_BODY = "vRCPgltAreaBody"; this.RCPanel.ID_PAGELETAREA_BODY_ANCHOR = "vRCPgltAreaBodyAnchor"; this.RCPanel.ID_PAGELETAREA_HEADER = "vRCPgltAreaHeader"; this.RCPanel.ID_PAGELETAREA_HEADERLABEL = "vRCPgltAreaHeaderLabel"; this.RCPanel.ID_PAGELETAREA_FRAMEDIV = "vRCPgltAreaFrameDiv"; this.RCPanel.ID_PAGELETGROUP_CONTAINER = "vRCPageletGroupsDiv"; this.RCPanel.ID_PAGELETAREA_RESIZE_BAR = "vRCPgltAreaResizeBar"; this.RCPanel.ID_ICON_SHOW_PAGELETAREA = "vRCPgltAreaShow"; this.RCPanel.ID_ICON_HIDE_PAGELETAREA = "vRCPgltAreaHide"; this.RCPanel.ID_PAGEMASK = "ptalPageMask"; this.RCPanel.init("RCPage.RCPanel"); },

 
 hideRC: function() {
 if (!this.RCPanel) { return; } 
 ptUtil.addClass(this.objPageletAreaContainer, RCPage.CSS_RC_HIDDEN);  var WCPanelSize = ((typeof ptalPage != "undefined") && ptalPage && (ptalPage.objPageletArea) && (ptalPage.objPageletArea.style.right != "")) ? ptalPage.objPageletAreaContainer.clientWidth : 0; if (WCPanelSize > 0) {
 
 ptIframe.resizeWidth(this.ID_TARGETCONTENTFRAME, WCPanelSize); } else {
 ptIframe.resizeWidth(this.ID_TARGETCONTENTFRAME, 0); }
 this.visible = false; ptrc.bRCHided = true; },

 resize: function(pResizeTCOnly) {
 this.RCPanel.resize(pResizeTCOnly); },

 resizeRCFrame: function() {
 
 var rc = window.frames['SRelatedContent']; if (rc){
 var RCArea = rc.document.getElementById('RCArea'); if (RCArea)
 RCArea.style.height = (this.objPAframe.offsetHeight - 20) + "px"; }
 },


 showPageletArea: function(pNoFading) {
 ptUtil.removeClass(this.objPageletAreaContainer, RCPage.CSS_RC_HIDDEN); RCPage.RCPanel.showPageletArea(pNoFading); ptrc.bRCExpanded = true; },

 
 hidePageletArea: function(pNoFading) {
 ptUtil.removeClass(this.objPageletAreaContainer, RCPage.CSS_RC_HIDDEN);  RCPage.RCPanel.hidePageletArea(pNoFading); ptrc.bRCExpanded = false; },

 
 onShowPageletArea: function(bOldParam, id) {
 if (!RCPage.initialized) 
 RCPage.init();  ptrc.bSavedRCExpanded = true; ptrc.bRCExpanded = true; ptrc.bRCHided = false;  if (!ptrc.bFirstSideFrameExpanded)
 ptrc.openMaxServices(id); if (!RCPage.visible)
 RCPage.showPageletArea(); RCPage.visible = true; setTimeout("document.getElementById('vRCPgltAreaHide').focus();",1000); },

 
 onHidePageletArea: function(pNoFading) {
 if (!RCPage.initialized) 
 RCPage.init();  RCPage.visible = false; RCPage.hidePageletArea(pNoFading); ptUtil.removeClass(RCPage.objPageletAreaBodyAnchor , RCPage.CSS_RC_HIDDEN);  RCPage.objIconShowPageletArea .style.display = ""; ptrc.bRCExpanded = false; ptrc.bSavedRCExpanded = false; ptrc.bRCHided = true;  setTimeout("document.getElementById('vRCPgltAreaShow').focus();",500); },

 
 addResizeEventHandlers: function() {

 if (this.resizeHandlerAttached) return; this.resizeHandlerAttached = true;  obj = this.objIconShowPageletArea; if (obj) ptEvent.add(obj, "mousedown", this.RCPanel.cancelEventBubble); obj = this.objIconHidePageletArea; if (obj) ptEvent.add(obj, "mousedown", this.RCPanel.cancelEventBubble); obj = document.getElementById(this.ID_PAGELETAREA_RESIZE_BAR); if (obj) ptEvent.add(obj, "mousedown", this.onDraggingStart); }, 


 
 onDraggingStart: function(pEvent) {
 RCPage.RCPanel.onDraggingStart(pEvent, this); return false; }, 


 
 
 
 onDragging: function(pEvent) {
 RCPage.RCPanel.onDragging(pEvent); return false; }, 



 
 onDraggingEnd: function(pEvent) {
 RCPage.RCPanel.onDraggingEnd(pEvent); return false; }, 

 
 adjustRCFrameWidth : function(buf){
 this.pa_size.width += buf; this.ptalTemplate.setConstrants(); if (this.ptalTemplate) this.ptalTemplate.resizePageletArea(); },

 setPageletAreaHeaderIcons: function(dummy) {
 
 },

 selectPageletGroup : function (pGroupId) {
 
 }

}; function RCSideTemplate() {}

RCSideTemplate.prototype = {

 
 parent : null, 
 constrants : null, 

 default_position : { left : -9999, right : -9999, top : -9999, bottom : -9999 },

 init : function (pParent) {

 this.parent = pParent; if (this.parent) {
 
 this.default_position.left = this.parent.DEFAULT_VALUE; this.default_position.right = this.parent.DEFAULT_VALUE; this.default_position.top = this.parent.DEFAULT_VALUE; this.default_position. bottom= this.parent.DEFAULT_VALUE; }

 
 this.resetPosition(); this.resetSize();  this.setPaddings(); }, 


 
 resetPosition : function () {
 if (!this.parent) return; this.parent.pa_size.left = this.default_position.left; this.parent.pa_size.right = this.default_position.right; this.parent.pa_size.top = this.default_position.top; this.parent.pa_size.bottom = this.default_position.bottom; }, 


 
 resetSize : function () {

 if (!this.parent) return; this.setConstrants();  this.parent.pa_size.width = this.constrants.defaultWidth; this.parent.pa_size.height = this.constrants.defaultHeight; }, 



 
 
 
 setPaddings : function () {

 if (!this.parent) return;  var WCPanelSize = ((typeof ptalPage != "undefined") && ptalPage && (ptalPage.objPageletArea) && (ptalPage.objPageletArea.style.right != "")) ? ptalPage.objPageletAreaContainer.clientWidth : 0; this.parent.padding_tc.right = (this.parent.visible ? this.parent.objPageletAreaContainer.clientWidth : this.parent.objPageletAreaBodyAnchor.clientWidth) + WCPanelSize; this.parent.padding_rc.left = this.parent.DEFAULT_VALUE; this.parent.padding_rc.right = this.parent.DEFAULT_VALUE; }, 


 
 setConstrants : function () {

 if (!this.parent) return;  var defaultWidth = this.parent.initialSize; var defaultHeight = this.parent.DEFAULT_VALUE;  var minWidth = this.parent.MINIMUM_PA_SIZE.width; var minHeight = this.parent.MINIMUM_PA_SIZE.height;  var maxWidth = 2000; var maxHeight = 2000; if (this.parent.ptIframe) {
 var otherSideSize = 0; if (this.parent.ptIframe.leftMenuNav)
 otherSideSize = this.parent.ptIframe.leftMenuNav.offsetWidth + 10; else if ((typeof ptalPage != "undefined") && ptalPage && (ptalPage.objPageletArea) && (ptalPage.objPageletArea.style.left != ""))
 otherSideSize = ptalPage.objPageletAreaContainer.offsetWidth; maxWidth = this.parent.ptIframe.winSize().width - otherSideSize; maxWidth = (maxWidth > 500) ? (maxWidth - 10) : (maxWidth - 50);  maxHeight = this.parent.ptIframe.winSize().height - 20; maxHeight -= this.parent.ptIframe.getPos(this.parent.objPAframe).y; }

 if (maxWidth < minWidth) maxWidth = minWidth; if (maxHeight < minHeight) maxHeight = minHeight;  if (defaultWidth > maxWidth) defaultWidth = maxWidth; if (defaultWidth < minWidth) defaultWidth = minWidth;  this.constrants = {defaultWidth:defaultWidth, defaultHeight:defaultHeight, minWidth:minWidth, minHeight:minHeight, maxWidth:maxWidth, maxHeight:maxHeight}; }, 




 
 getResizingCursor : function () {
 if (!this.parent) return ""; return (("ltr" == "rtl") ? "e-resize" : "w-resize"); },


 
 draggingStart : function () {
 },


 
 dragging : function (pDiff) {

 if (!this.parent) return; if ((typeof pDiff == this.parent.UNDEFINED) || (!pDiff)) return; var sizeChanged = false; var newSize = this.parent.pa_size.width - pDiff.diffWidth; newSize = ((newSize > this.constrants.maxWidth) ? this.constrants.maxWidth : newSize); newSize = ((newSize < this.constrants.minWidth) ? this.constrants.minWidth : newSize); if (newSize != this.parent.pa_size.width) {
 if ((newSize > this.parent.pa_size.width) && (this.parent.objTCframeContainer.clientWidth <= 10))
 return sizeChanged;  this.parent.pa_size.width = newSize; sizeChanged = true; }

 return sizeChanged; }, 


 
 draggingEnd : function () {
 }, 



 
 resizePageletArea : function () {

 if (!this.parent || !this.parent.ptIframe) return;  if (this.parent.pa_size.width !== this.parent.DEFAULT_VALUE) {
 this.parent.objPAframe.style.width = this.parent.pa_size.width + "px"; }

 
 if (this.parent.docked) {
 if (this.parent.visible) {
 this.parent.ptIframe.resizeHeight(this.parent.ID_PAGELETAREAFRAME, 0); } else if (this.parent.objPageletAreaBodyAnchor) {
 
 var obj = this.parent.objPageletAreaBodyAnchor; obj.style.height = (this.parent.ptIframe.winSize().height - this.parent.ptIframe.getPos(this.parent.objPageletAreaContainer).y) + "px";  if (browserInfoObj2.isIE) {
 setTimeout("var obj = document.getElementById('" + this.parent.ID_PAGELETAREA_BODY_ANCHOR + "'); obj.innerHTML = obj.innerHTML;obj.style.visibility = '';", 10); obj.style.visibility = "hidden"; }

 }

 } else if (this.parent.pa_size.height !== this.parent.DEFAULT_VALUE) {
 this.parent.objPAframe.style.height = this.parent.pa_size.height + "px"; } else {
 this.parent.ptIframe.resizeHeight(this.parent.ID_PAGELETAREAFRAME, 50); }

 } 

};function ptalPagelet(){}

ptalPagelet.prototype = {

 MINIMUM_PAGELET_HEIGHT : 50,
 
 ID_PAGELET_BODY : "" , 
 ID_PAGELET_BODY_DIV :"",
 ID_PAGELET : "ptalPglt_",
 ID_PAGELET_HEADER_LABEL : "ptalPgltHeaderLabel_",
 ID_PAGELETAREAFRAME : "ptalPgltAreaFrame",
 ID_PAGELET_NO_MIN_PAGELET : "ptalNominPagelets",
 ID_MORE_PAGELETS : "ptalPgltMorePagelets",
 ID_PAGELET_AREA_MORE_PAGELETS : "ptalPgltAreaMorePagelets",
 ID_SHOW_MORE_PAGELETS : "ptalPgltShowMorePagelet_",
 ID_MORE_PAGELET_BUTTON :"ptalMorePageletsbutton",
 ID_PAGELET_BODY_DIV_ALT : "",
 ID_ALL_PAGELETSDIV : "",
 ID_PAGELET_FRAME : null,

 CSS_PAGELET_MAX : "ptalPageletMax",
 CSS_PAGELET_MIN : "ptalPageletMin",
 CSS_PAGELET_MIN_HIDDEN : "ptalPageletMinHidden",
 CSS_PAGELET_LOADING : "ptalPageletLoading",
 CSS_MOREPAGELET_DISABLED : "ptalMorePageletsLinkdisabled",
 CSS_MOREPAGELET : "ptalMorePagelets",
 CSS_PAGELET_LOADING_HIDDEN : "ptalPageletLoadingHidden",
 
 
 resizingTimer : null,
 draggingElementId : "",
 draggingTimer : null,
 
 lastMousePos : { x : -9999, y : -9999 },
 nsize:0,
 resizeElement : false,
 
 diffy :0,
 
 draggingEnd : false,
 maxResizeHeight : 0,
 doneCalcMaxResizeHeight : false, 
 noMaxPglts: 0,
 noPglts: 0,
 noMinPglts:0,
 noMinMorePglts:0,
 nMinPagelets : 0,
 
 timeout : 500,
 closetimer : 0,
 ddmenuitem : 0,
 objPAframe : null,
 objFrame : null,
 pgltContainerHeight : 0,
 parent : null,
 objAllPgltsDiv : null,
 pgltAreaDocument : null,
 strObjectName :null,
 ptalPageletArea: null,
 removeElement:"",
 prefixLen : 9, 

 GetElementTop:function(evt, object) 
 {
 if(evt.pageY) return evt.pageY; else if (evt.clientY)
 return evt.clientY; else return null; },

 GetElementleft:function(evt, object) 
 {
 if(evt.pageX) return evt.pageX; else if (evt.clientX)
 return evt.clientX ; else return null; },

 onAddEvent:function (el, evname, func) {
 if (el == null)
 return; if (el.attachEvent) { 
 el.attachEvent("on" + evname, func); } else if (el.addEventListener) { 
 el.addEventListener(evname, func, true); } else {
 el["on" + evname] = func; }
 },

 
 mopen : function(event, id)
 {
 
 this.mcancelclosetime(); el = this.pgltAreaDocument.getElementById(this.ID_PAGELET_AREA_MORE_PAGELETS); var intelemTop = this.GetElementTop(event,el); var intelemLeft = this.GetElementleft(event,el);  if((typeof ddmenuitem != "undefined") && ddmenuitem) ddmenuitem.style.visibility = 'hidden';  ddmenuitem = this.pgltAreaDocument.getElementById(id); var divpagecontrols = this.pgltAreaDocument.getElementById(id); intelemLeft -= ddmenuitem.offsetWidth; intelemTop += el.offsetHeight; var frameHeight = parseInt(this.objFrame.style.height); var limit = (intelemTop > frameHeight)?(intelemTop - frameHeight):0;  divpagecontrols.style.top = intelemTop - divpagecontrols.offsetHeight - limit + "px"; divpagecontrols.style.left= intelemLeft+"px"; ddmenuitem.style.position = "absolute"; ddmenuitem.style.top = ddmenuitem.offsetTop - 10 + "px"; ddmenuitem.style.visibility = 'visible'; },



 mclose : function()
 {
 if((typeof ddmenuitem != "undefined") && ddmenuitem) ddmenuitem.style.visibility = 'hidden'; },


 mclosetime : function()
 {
 this.closetimer = window.setTimeout(this.mclose, this.timeout); },


 mcancelclosetime : function()
 {
 if(this.closetimer)
 {
 window.clearTimeout(this.closetimer); this.closetimer = null; }
 },

 init : function ()
 {
 this.objFrame = document.getElementById(this.ID_PAGELET_FRAME); this.objAllPgltsDiv = this.objFrame.contentWindow.document.getElementById(this.ID_ALL_PAGELETSDIV); this.nMinPagelets = this.objFrame.contentWindow.document.getElementById(this.ID_PAGELET_NO_MIN_PAGELET); this.pgltAreaDocument = this.objFrame.contentWindow.document; this.prefixLen = this.ID_PAGELET.length;  },


 getPgltClass : function (searchClass,node,tag) {
 var classElems = []; if (!node) { node = document; }
 if (!tag) { tag = "*"; }
 var els = node.getElementsByTagName(tag); var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)"); for (var i = 0, j = els.length; i < j; i++)
 if (pattern.test(els[i].className) ) { classElems.push(els[i]); }

 return classElems; },

 findallpglts : function () {
 
 var colNode; var pglts; colNode = this.pgltAreaDocument.getElementById("ptcol1"); if (colNode)
 pglts = this.getPgltClass("ptalhpli",colNode,"li"); return pglts; },
 
 isPageletMinimized : function (pId) {
 var obj = this.pgltAreaDocument.getElementById(this.ID_PAGELET + pId); var objBody = this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY + pId);  if (obj) {
 
 return ((obj.className.indexOf(this.CSS_PAGELET_MIN) > 0) || (objBody.className.indexOf(this.CSS_PAGELET_MIN) > 0));  } else {
 return true; }

 }, 

 isPageletMinimizedMoreList : function (pId) {
 var obj = this.pgltAreaDocument.getElementById(this.ID_PAGELET + pId); if (obj) {
 return (obj.className.indexOf(this.CSS_PAGELET_MIN_HIDDEN) > 0); } else {
 return true; }

 }, 


 findmaxpagelets : function() {
 var pglts = this.findallpglts(); this.noMaxPglts = 0; this.noMinPglts = 0; for(var k=0; k < pglts.length; k++) {
 var pname =pglts[k].id.slice(this.prefixLen); if (! this.isPageletMinimized(pname))
 this.noMaxPglts += 1;  else {
 
 this.noMinPglts += 1; }
 }
 },

 
 movepageletstomore : function(allpglts,pType) {
 
 var ptalNominPagelets = parseInt(this.nMinPagelets.innerHTML); this.findmaxpagelets(); var nMinimizedPagelets = this.noMinPglts;  for(var i =allpglts.length-1; i>=0; i--) {
 var pname = allpglts[i].id.slice(this.prefixLen); if ((this.pgltAreaDocument.getElementById(this.ID_PAGELET+pname).className.indexOf(this.CSS_PAGELET_MIN_HIDDEN) == -1) && this.isPageletMinimized(pname)) {
 
 if(nMinimizedPagelets> ptalNominPagelets) {
 nMinimizedPagelets -= 1; var pageletdiv= this.pgltAreaDocument.getElementById("ptpgltdiv_"+pname); var element = this.pgltAreaDocument.getElementById(this.ID_PAGELET+pname); if (!ptUtil.isClassMember(element, this.CSS_PAGELET_MIN_HIDDEN)) {
 
 
 element.style.display="none"; pageletdiv.style.display="none"; ptUtil.swapClass(element,this.CSS_PAGELET_MIN, this.CSS_PAGELET_MIN_HIDDEN); var objname = this.pgltAreaDocument.getElementById(this.ID_PAGELET_HEADER_LABEL+pname); var ptitle = objname.innerHTML; var divmorepagelets = this.pgltAreaDocument.getElementById(this.ID_MORE_PAGELETS); if((divmorepagelets.childNodes.length == 1) && (divmorepagelets.innerHTML == "&nbsp;"))
 divmorepagelets.removeChild(divmorepagelets.firstChild); var morepglt = this.pgltAreaDocument.createElement("a"); morepglt.setAttribute("id",this.ID_SHOW_MORE_PAGELETS+pname); morepglt.setAttribute("name",pname); morepglt.setAttribute("title","Click to show the "+ptitle); morepglt.className = "PSHYPERLINK"; morepglt.setAttribute("href","javascript:void(0)"); ptEvent.add(morepglt,"click",this.ptalPageletArea.removeElementMore); morepglt.innerHTML = objname.innerHTML; divmorepagelets.appendChild(morepglt); divmorepagelets.style.visibility = "hidden";  var morediv = this.pgltAreaDocument.getElementById(this.ID_MORE_PAGELET_BUTTON); var blSpan = morediv.firstChild; if (blSpan)
 blSpan.style.display = 'block'; var grSpan = morediv.firstChild.nextSibling; if (grSpan)
 grSpan.style.display = 'none'; break;  }
 }

 }

 }
 
 },

 removeElementFromMoreOnly : function(pType, pId) { 
 var obj = this.pgltAreaDocument.getElementById(this.ID_MORE_PAGELETS); if(!pId) pId = this.removeElement; var objPagelet = this.pgltAreaDocument.getElementById(this.ID_SHOW_MORE_PAGELETS+pId); obj.removeChild(objPagelet); if(obj.childNodes.length == 0) {
 
 var morediv = this.pgltAreaDocument.getElementById("ptalMorePageletsbutton"); var blSpan = ptUtil.getFirstChild(morediv); if (blSpan) {
 blSpan.style.display = 'none';  var grSpan = ptUtil.getNextSibling(blSpan, "span");  if (grSpan)
  grSpan.style.display = 'block'; }
 }
 el =this.pgltAreaDocument.getElementById(this.ID_PAGELET_AREA_MORE_PAGELETS); var intelemLeft = el.offsetWidth; var intelemTop = el.offsetHeight;  var morePgltsListDiv = document.getElementById("ptalPgltMorePagelets"); if (morePgltsListDiv)
 morePgltsListDiv.style.visibility = 'hidden';  if((typeof ddmenuitem != "undefined") && ddmenuitem) ddmenuitem.style.visibility = 'hidden'; var divpagecontrols = this.pgltAreaDocument.getElementById(this.ID_MORE_PAGELETS); divpagecontrols.style.top = intelemTop - divpagecontrols.offsetHeight + "px"; },

 removeElementMore : function(pType,pId) {
 var headerObj = this.pgltAreaDocument.getElementById("ptalPgltHeaderLabel_"+pId); if (headerObj)
 pType = headerObj.getAttribute("pType");  this.removeElementFromMoreOnly(pType, pId);  this.ptalPageletArea.onShowPagelet(pType,pId); },

 calculatemaxresize : function (){
 var length1 = this.draggingElementId.length; var pageletName = this.draggingElementId.substring(17,length1); var beforepgltheight = 0; var addedPreviousPageletHeight = false; var doneHeightCalculation = false; this.objPAframe = document.getElementById(this.ID_PAGELETAREAFRAME); var de = this.pgltAreaDocument; var pgltindex = 0; this.doneCalcMaxResizeHeight = true; var allpglts = this.findallpglts(); var height1 = window.innerHeight || self.innerHeight || (de && de.clientHeight) || document.body.clientHeight; if(this.pgltContainerHeight == 0)
 {
 
 height1 = this.objAllPgltsDiv.offsetHeight; this.pgltContainerHeight = height1; }
 else
 height1 = this.pgltContainerHeight;  for(var i=0; i<allpglts.length;i++) {
 pname = allpglts[i].id.slice(this.prefixLen); if(pname == pageletName && i==0)
 {
 var maxheight = height1 - ((this.noMaxPglts - 1) * this.MINIMUM_PAGELET_HEIGHT) - ((this.noMaxPglts - 1) * 28) - (this.noMinPglts * 24) ; this.maxResizeHeight = maxheight;  doneHeightCalculation = true; break;  }
 else
 {
 if(pname != pageletName)
 {
 if (! this.isPageletMinimized(pname))
 {
 if(this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY_DIV+pname))
 beforepgltheight += parseInt(this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY_DIV+pname).offsetHeight) + 28 ; else
 beforepgltheight += parseInt(this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY_DIV_ALT+pname).offsetHeight) + 28 ; }
 else
 {
 var objPgltName = this.pgltAreaDocument.getElementById(this.ID_PAGELET + pname); if (!objPgltName.className.indexOf(this.CSS_PAGELET_MIN_HIDDEN) > 0)
 beforepgltheight += 24; }
 }
 else
 {

 pgltindex = i; break; }
 }
 }
  
 if(!doneHeightCalculation)
 { 
 for(var lgt = pgltindex+1; lgt <allpglts.length; lgt ++) 
 {  
  pname = allpglts[lgt].id.slice(9); if (! this.isPageletMinimized(pname))
 beforepgltheight += this.MINIMUM_PAGELET_HEIGHT + 28; else
 beforepgltheight += 24;  }
 }
 
 if(!doneHeightCalculation)
 {
 height1 = height1 - beforepgltheight; this.maxResizeHeight = height1; }
 
 },


 realignpglts : function() {
 var de = this.pgltAreaDocument; var height1 = window.innerHeight || self.innerHeight || (de && de.clientHeight) || document.body.clientHeight; height1 = this.pgltContainerHeight; var allpglts = this.findallpglts(); var pagletsizevalue = 0; var length1 = this.draggingElementId.length; var pageletName = this.draggingElementId.substring(17,length1); for(var mt=0; mt<allpglts.length;mt++) {
 pname = allpglts[mt].id.slice(this.prefixLen); if(this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY_DIV+pname))
 height1 = height1 - (parseInt(this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY_DIV+pname).offsetHeight) +28 ); else if(this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY_DIV_ALT+pname))
 height1 = height1 - (parseInt(this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY_DIV_ALT+pname).offsetHeight) +28 ); else height1 = height1 - 24; if (pname == pageletName)
 break; }
 var doresize = 0; var pgltresizeindex = 0; var maxPgltNo = 0; var minPgltNo = 0; for(var m=0; m<allpglts.length;m++) {
 pname = allpglts[m].id.slice(this.prefixLen);  if(doresize == 0)
 {
 if(pname == pageletName){
 doresize =1; pgltresizeindex = m; m = m +1; }
 }

 if(doresize==1 && m!=allpglts.length)
 {
 pname = allpglts[m].id.slice(this.prefixLen);  if (! this.isPageletMinimized(pname))
 maxPgltNo += 1; else
 {
 minPgltNo += 1; }
 
 }
 
 }

 height1 = height1 - (minPgltNo * 24); if (this.ID_PAGELET_FRAME == "ptalPgltAreaFrame")
 height1 = height1 - (maxPgltNo * 28);  else
 height1 = height1 - allpglts.length ;  if(maxPgltNo >0)
 height1 = height1/maxPgltNo;  for(var lm=pgltresizeindex+1; lm<allpglts.length;lm++) {
 pname = allpglts[lm].id.slice(this.prefixLen); if (! this.isPageletMinimized(pname))
 {
 if (height1 > 0) {
 if (this.ID_PAGELET_FRAME == "ptalPgltAreaFrame")
 this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY+pname).style.height= height1 + "px";  if(this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY_DIV+pname))
 this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY_DIV+pname).style.height= height1 + "px";  else
 this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY_DIV_ALT+pname).style.height= height1 + "px";  }
 }
 }
 if (this.ID_PAGELET_FRAME == "ptalPgltAreaFrame")
 this.ptalPageletArea.adjustPageletsScroll(); },

 resizePagelet : function (differencey) {
 this.diffy += differencey; this.resizeElement = true; var length1 = this.draggingElementId.length; var pageletName = this.draggingElementId.substring(17,length1);  var pgltBodyDivsize = parseInt(this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY_DIV+pageletName).clientHeight); pgltBodyDivsize += differencey; var pgltBodysize = parseInt(this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY+pageletName).offsetHeight); pgltBodysize += differencey; var de = this.pgltAreaDocument.documentElement;  var height = window.innerHeight || self.innerHeight || (de && de.clientHeight) || document.body.clientHeight; this.findmaxpagelets(); if(!this.doneCalcMaxResizeHeight)
 this.calculatemaxresize(); if(this.MINIMUM_PAGELET_HEIGHT < pgltBodyDivsize && this.maxResizeHeight > pgltBodyDivsize)
 {
 this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY_DIV+pageletName).style.height = pgltBodysize + "px"; if (this.ID_PAGELET_FRAME == "ptalPgltAreaFrame")
 this.pgltAreaDocument.getElementById(this.ID_PAGELET_BODY+pageletName).style.height = pgltBodysize + "px";  }
 }
};var timeout = 500;var closetimer =0;var ddmenuitem =0;var ptrc = {
 RC_EXPAND: "75%,*",
 RC_MIN: "*,30",  
 RC_MAX: "*,95%",  
 RC_HIDE: "*,0%",
 selectedURL: null, 
 selectedSeqNum: null, 
 selectedServiceId: null, 
 bRCExpanded: false,
 bRCHided: true,
 expandedRCRow: null,
 expandedRCCol: null, 
 bUpdateRCMenu: false,  
 rcMenu: null,  
 service: null,  
 fldNameSeparator: "^",  
 fldNameSeparatorInPrompt: "$", 
 missingReqParamURL: null,
 bInitExpandedView: false,  
 bInitialServiceRequest: true, 
 bRefreshService: true,  
 bServiceLoadedInFrame: false, 
 bComponentLevelService: false, 
 rcFrameSrc: null, 
 bRCFrameSrcSet: false,   
 numMaxMinPglts: 3,  
 
 bSavedRCHided: false,
 bSavedRCExpanded: true,
 currentComponent: null,
 currentPage:null, 
 previousComponent: null,
 savedSelectedId: null,
 isSameComponentVisited: false, 
 isRowSelcted:false,
 sRowData:"",
 typeRC : "S",  
 addedSideRCDragHandler : false,
 parentRCFrame : null, 
 bFirstSideFrameExpanded : false, 
 portalCrefID : null, 
 RC_COL_MAXSIZE : ("ltr" === "ltr") ? "195,*,266" : "266,*,195", 
 RC_COL_MINSIZE : ("ltr" === "ltr") ? "195,*,10" : "10,*,195", 
 szModalCloseImg:"",
 szModalResizeImg:"",
 bInitiatedFromLink : false,

 
 initRC: function() {
 
 if (this.getRCMenuOnTC() == null){
 if (!this.bInitialServiceRequest) 
 this.saveState();  if (!ptRC2.isFrame() && ((this.typeRC == "S") || RCPage.visible)) 
 RCPage.hideRC(); else
 this.onHideRC(); this.bInitialServiceRequest = true; }else {
 this.parentRCFrame = window.top.document.getElementById(this.typeRC + 'RelatedContent');  if (this.isSameComponent())
 this.saveState(); else {
 this.selectedSeqNum = null; this.selectedServiceId = null; this.bRCHided = true; this.bRCExpanded = false; this.selectedURL = null; this.bInitialServiceRequest = true;  this.onAddChangeEvent(); }
 
 if (ptRC2.isFrame()) {
 ptEvent.add(ptUtil.id("TargetContent"),"resize",function() {
 ptrc.onResize(); }); }
 }
 },

 
 
 getRCMenuOnTC: function() {
 var tc = window.frames['TargetContent']; if (tc == null) {
 return null; }

 var rcMenuOnTC = null; try {
 rcMenuOnTC = tc.document.getElementById('rcMenuOnTC'); } catch(e) {
 return; }

 return rcMenuOnTC; },


 
mopen : function(event)
{
 
 this.mcancelclosetime();var el =document.getElementById("ptrcDropDowndiv_RelatedContent");var left=0;var dropdown=document.getElementById("ptsrc_dropdownicon_RelatedContent");while( dropdown != null && dropdown.id != "ptifrmrc") {
left += dropdown.offsetLeft;dropdown = dropdown.offsetParent;}

var el =document.getElementById("ptrcDropDowndiv_RelatedContent");var top=0;  this.mclose();  ddmenuitem = document.getElementById("ptrcDropdown_RelatedContent");var divpagecontrols = document.getElementById("ptrcDropdown_RelatedContent");top=document.getElementById("ptrcDropDowndiv_RelatedContent").offsetTop ;var intelemLeft = ddmenuitem.offsetWidth; ddmenuitem.style.visibility = 'visible';var ele=document.getElementById("ptrcdropdownicon_RelatedContent").children[0];if(ptUtil.isClassMember(document.getElementById("ptrcControls_Related Content"),"ptrcPgltcontrolshadowbottom"))
 {
 ptUtil.swapClass(document.getElementById("ptrcControls_RelatedContent"),"ptrcPgltcontrolshadowbottom","ptrcPgltcontrolshadowabove"); }


if(!browserInfoObj2.isIE)
{
divpagecontrols.style.left= left + 2 + ele.clientWidth - ddmenuitem.offsetWidth +"px";divpagecontrols.style.top = top + 4 + "px";}
else
{
divpagecontrols.style.left= left + ele.clientWidth + 5 - ddmenuitem.offsetWidth +"px";divpagecontrols.style.top = top + 4 + "px";}



if( document.getElementById("RelatedContent").style.display == "none")
{
divpagecontrols.style.top= top + ele.clientHeight - ddmenuitem.offsetHeight - 18 + "px"; if(browserInfoObj2.isIE) 
 {
 divpagecontrols.style.left= left + ele.clientWidth - ddmenuitem.offsetWidth -workcenter +"px"; divpagecontrols.style.top = top + ele.clientHeight - ddmenuitem.offsetHeight - 14 + "px"; }

 if(ptUtil.isClassMember(document.getElementById("ptrcControls_RelatedContent"),"ptalPgltcontrolshadowabove"))
 {
 ptUtil.swapClass(document.getElementById("ptrcControls_RelatedContent"),"ptrcPgltcontrolshadowabove","ptrcPgltcontrolshadowbottom"); }
 ptUtil.swapClass(ele,"ptrcPgltcontrolsdropdown","ptrcPgltcontrolsdropdownclickedBottomBorder");}
else
ptUtil.swapClass(ele,"ptrcPgltcontrolsdropdown","ptrcPgltcontrolsdropdownclickedTopBorder");},


mclose : function()
{
 if(ddmenuitem){
 ddmenuitem.style.visibility = 'hidden';   var ele=document.getElementById("ptrcdropdownicon_RelatedContent").children[0]; if(ptUtil.isClassMember(ele,"ptrcPgltcontrolsdropdownclickedTopBorder"))
 ptUtil.swapClass(ele,"ptrcPgltcontrolsdropdownclickedTopBorder","ptrcPgltcontrolsdropdown"); else ptUtil.swapClass(ele,"ptrcPgltcontrolsdropdownclickedBottomBorder","ptrcPgltcontrolsdropdown"); } 
},


mclosetime : function()
{
 closetimer = window.setTimeout(this.mclose, timeout);},


mcancelclosetime : function()
{
 if(closetimer)
 {
 window.clearTimeout(closetimer); closetimer = null; }
},

mkeyevents : function(ev) {

var key = (window.event) ? window.event.keyCode: ev.keyCode;if(key==13)
this.mopen(ev);if(key==27)
this.mclose();else if(key==40)
{
var i=0;var op=document.getElementById("ptrcDropdown_RelatedContent").children;while(op[i].style.display=="none")i++;op[i].focus();}

else return;if(ev.preventDefault) ev.preventDefault();else ev.returnValue = false;},

marrowkeys : function(ev, func) {
var key = (window.event) ? window.event.keyCode: ev.keyCode;var op = ev.currentTarget || ev.srcElement;op=op.parentElement.children;var i=0;var currenttarget = ev.currentTarget || ev.srcElement ;while(op[i]!= currenttarget && op[i]!= null)i++;if(key == 27) ptrc.mclose(); else if(key==13)
{
if(func == "newwin") ptrc.onNewWindow();else if(func == "refresh") ptrc.onRefresh();else if(func == "hide") ptrc.onHideRC('true');}

else if(key == 40) 
{
 if(op[i+1]!=null)
 {
 currenttarget.blur(); op[i+1].focus(); }
}

else if(key == 38) 
{
 if(op[i-1]!= null)
 {
 currenttarget.blur(); op[i-1].focus(); }
}

else return false;if(ev.preventDefault) ev.preventDefault();else ev.returnValue = false;},

 
 isSameComponent: function() {
 if ((this.currentComponent != null) && (this.currentComponent == this.previousComponent))
 {isSameComponentVisited = true; return true;} 
 else
 return false; },

 
 setPreviousComponent: function(prevComponent) {
 if ((prevComponent != null) && (typeof(prevComponent) !== "undefined"))
 this.previousComponent = prevComponent; else
 this.previousComponent = this.currentComponent; },

 
 
 
 setComponentInfo: function(currComponent, bCompService, currPage, portalCrefID) {
 this.setPreviousComponent();  this.currentComponent = currComponent; this.currentPage = currPage;  this.bComponentLevelService = bCompService; this.portalCrefID = portalCrefID;  },


 
 saveState: function() {
 this.bSavedRCHided = this.bRCHided; this.bSavedRCExpanded = this.bRCExpanded; this.savedSelectedId = this.selectedServiceId; },

 
 restoreState: function() {
 if (this.bSavedRCHided && !this.bRCHided)
 this.onHideRC("true"); else if (!this.bSavedRCHided && this.bRCHided)
 this.onHideRC("false"); if (!this.bRCHided) {
 if (this.selectedServiceId != this.savedSelectedId) {
 this.selectedServiceId = this.savedSelectedId; }
 
 this.bRefreshService = true;  this.onRefresh(); if (this.bSavedRCExpanded && !this.bRCExpanded)
 this.rcBodyToggle(); else if (!this.bSavedRCExpanded && this.bRCExpanded)
 this.rcBodyToggle(); }
 },
 
 
 
 
 onResize: function() {
 if (!ptRC2.isFrame())
 return; var rc = window.frames['RelatedContent'];  if (rc) {
 try {
 var rcArea = rc.document.getElementById('RCArea'); if (rcArea && rc.frameElement.clientHeight)
 rcArea.style.height = (rc.frameElement.clientHeight - 12) + "px"; } catch(e){}
 }
 },

 resizeSideRCFrame: function(rc, offset) {
 if (rc){
 if (this.typeRC == "SF") {
 var resizeBar = rc.document.getElementById("vRCResizeBar"); resizeBar.className = "vSFRCResizeBar"; resizeBar.style.height = rc.frameElement.clientHeight + "px"; var imgBar = rc.document.getElementById("vRCBarImg"); imgBar.vspace = (rc.frameElement.clientHeight / 2) - 2; }
 }
 },

 
 getPos: function(el) {
 var x = 0, y = 0; var e = el; while(e) {
 x += e.offsetLeft || 0; y += e.offsetTop || 0; e = e.offsetParent; }
 return {x:x, y:y}; },

 
 winSize: function() {
 var de = document.documentElement; var height = window.innerHeight || self.innerHeight || (de && de.clientHeight) || document.body.clientHeight; var width = window.innerWidth || self.innerWidth || (de && de.clientWidth) || document.body.clientWidth; return {height:height, width:width}; },

 
 resizeHeight: function(e, buf) {
 var elem = ptUtil.id(e); try {
 elem.style.height = String(winSize().height - (getPos(elem).y) - buf) + 'px'; } catch(err) {}
 },

 
 resizeWidth: function (e,buf) {
 var elem = ptUtil.id(e); try {
 if ("ltr" === "ltr") {
 elem.style.width = String(winSize().width - getPos(elem).x - buf) + "px"; } else {
 
 if (e === "ptifrmtgtframe") {
 elem.style.width = String(getPos(elem).x + elem.offsetParent.offsetWidth - buf) + "px"; }
 }
 } catch(err) {}
 },

 
 onSideRCMouseOut : function(e){
 var rc = window.frames['SFRelatedContent']; ptrc.resizeSideRCFrame(rc, 40); if (browserInfoObj2.isIE) rc.ptPanelPagelet.resizeArea();  },

 
 onLoadTC:function () {
 
 if (isSessionLoggedout(false))
 return;  this.typeRC = ((this.typeRC == "S") && ptRC2.isFrame()) ? "SF" : this.typeRC; var rc = document.getElementById(this.typeRC + "RelatedContent"); if (rc == null)  return;   if (browserInfoObj2.isiPad && browserInfoObj2.isSafari && (this.typeRC === "")) {
 rc.scrolling = "yes"; }

 
 var pgltFrame = document.getElementById("ptalPgltAreaFrame"); if(pgltFrame) {
 try {
 pgltFrame.contentWindow.hideProcessingIcons(); }catch(e){}
 }

 
 this.initRC(); if (!this.rcFrameSrc) return;   if (rc) rc.src = this.rcFrameSrc; this.bRCFrameSrcSet = true; this.rcFrameSrc = null; if (browserInfoObj2.isFF)
 this.onLoadRC(); },

 
 onLoadRC:function () {
 
 if (isSessionLoggedout(false))
 return; var doIt = false; if ((this.typeRC != "S") && this.bRCFrameSrcSet)
 doIt = true; else if (this.typeRC == "S") {
 doIt = true; }

 
 if (doIt) {
 if (this.isSameComponent() && !this.bInitialServiceRequest ) { 
 
 
 this.saveState(); } 
 ptrc.bFirstSideFrameExpanded = false;  this.parentRCFrame = window.top.document.getElementById(this.typeRC + 'RelatedContent');  if (this.typeRC != ""){
 this.rcMenu = null; ptrc.onUpdateRCMenu();  }
 if (this.rcMenu && (this.rcMenu.services.length > 0) && (this.typeRC == "S") && !ptRC2.isFrame()){
 if (this.bSavedRCExpanded && !this.bSavedRCHided){ 
 this.openMaxServices();   if (this.rcMenu && !RCPage.visible) {
 RCPage.onShowPageletArea(); }
 } else
 RCPage.onHidePageletArea(true);  } else if (this.rcMenu && (this.rcMenu.services.length > 0) && (this.typeRC == "SF")){
 if (this.bSavedRCExpanded && !this.bSavedRCHided) 
 this.openMaxServices(); else { 
 var tcf = window.document.getElementById("SubFrame");  tcf.cols = ptrc.RC_COL_MINSIZE; ptrc.toggleSideRCFrame("false");  }
 } else if (this.isDefaultService() && this.bInitExpandedView) {
 
 this.rcMenu = null;   this.onRefresh();  if (!this.bInitExpandedView) 
 this.rcBodyToggle(); } else {
 if (!this.bInitExpandedView && ptRC2.isFrame())
 this.onHideRC();  this.bRefreshService = true; }

 
 
 if ((this.typeRC == "") && ((this.isSameComponent() && isSameComponentVisited == false)||(this.isSameComponent()))) 
 this.restoreState(); this.bRCHided = false;    if (ptRC2.isIFrame() && (this.typeRC != "S")) {
 var rc = window.frames[this.typeRC + 'RelatedContent']; if (rc == null) return; var RCArea = rc.document.getElementById('RCArea'); if(!RCArea) return; var height = ptIframe.rcIframe.offsetHeight; if (height > ptIframe.rcIframe.offsetTop)
 height = height - ptIframe.rcIframe.offsetTop; if (height>12) height = height -12; RCArea.style.height = height + "px"; }
 
 }
 },

 getRCScrollY: function () {
 var rc = window.frames[this.typeRC + 'RelatedContent']; if (rc == null) return 0; return rc.document.body.scrollTop; },

 
 
 
 showHide: function (obj, bShow,bInline) {
 if (obj == null)
 return; if (bShow) {
 if ((typeof (bInline) != 'undefined') && bInline)
 obj.style.display="inline"; else
 obj.style.display="block"; } else {
 obj.style.display="none"; }
 },

 onProcessingRC:function (opt) {
 var rc = window.frames[this.typeRC + 'RelatedContent']; if (rc == null)
 return; var waitobj = rc.document.getElementById("ptrcProcessing"); if (waitobj == null)
 return; if (opt == 0) {
 this.showHide(waitobj, false); return; }

 if (opt == 1) {
 this.showHide(waitobj, true); return; }
 },

 setMissingRequiredParamURL:function(missingReqParamURL) {
 this.missingReqParamURL = missingReqParamURL; },

 
 setRCFrameSrcPrefix:function(rcFrameSrcPrefix) {
 if (this.typeRC != "") {
 this.rcFrameSrc = rcFrameSrcPrefix; if (ptRC2.isFrame())
 this.rcFrameSrc += "&isFrame=1"; } else {
 
 if (ptRC2.isFrame()) 
 this.rcFrameSrc = rcFrameSrcPrefix + "_Frame"; else 
 this.rcFrameSrc = rcFrameSrcPrefix; }

 },

 setRCFrameSrc:function(){
 
 var rc = window.top.document.getElementById(this.typeRC + 'RelatedContent');  if (rc && rc.src != ptrc.rcFrameSrc)
 rc.src = ptrc.rcFrameSrc; ptrc.bRCFrameSrcSet = true; ptrc.rcFrameSrc = null;  ptrc.bRefreshService=true
 },

 
 
 
 
 
 getURLParamValue:function(url, paramIdx, reqFlagsCnt) {
 var paramValue = ""; if (reqFlagsCnt <= 0 || paramIdx > reqFlagsCnt)
 return paramValue; var params = url.split("=");   var totalParamCnt = params.length - 1; var noneSrvParamCnt = totalParamCnt - reqFlagsCnt;  var paramIdxInURL = noneSrvParamCnt + paramIdx;  var valueNParam = params[paramIdxInURL];   paramValue = (valueNParam.split("&"))[0];   return paramValue; },

 
 isRequiredParamProvided:function(url, requiredFlags) {
 var bRequiredParamProvided = true; if ( (requiredFlags == "") || (requiredFlags.search("Y") == -1) )
 return bRequiredParamProvided; var reqFlags = requiredFlags.split("$"); var reqFlagsCnt = reqFlags.length - 1;  var beginIdx = reqFlagsCnt;  for (i = beginIdx; i > 0; i--) {
 if (reqFlags[i] == "Y") {
 paramValue = this.getURLParamValue(url, i, reqFlagsCnt); if (paramValue == "") {
 bRequiredParamProvided = false; break; }
 }
 }

 return bRequiredParamProvided; },

 
 openMaxServices:function (id) {
 if (this.typeRC == "") return;  if (ptrc.rcMenu == null || !RCPage.visible || this.bInitiatedFromLink)
 ptrc.onUpdateRCMenu();  if (ptrc.rcMenu == null)
 return;  this.bFirstSideFrameExpanded = true;  var nNumMinPglt = 0; var rc = window.frames[this.typeRC + 'RelatedContent']; this.bInitiatedFromLink = false; for (var i=0; i<this.rcMenu.services.length; i++) {
 if (this.rcMenu.services[i].isDefault == "Y"){
 if (typeof id == 'undefined' || (typeof id !== 'undefined' && this.rcMenu.services[i].id !== id))
 eval(this.rcMenu.getValue(this.rcMenu.services[i].id)); }
 else {
 
 var liPglt = rc.document.getElementById("ptrc_service_" + i);  if (liPglt) {
 liPglt.className = "ptalhpli"; nNumMinPglt ++; } 
 
 } 
 }
 this.bInitiatedFromLink = true; rc.ptPanelPagelet.noPglts =0;  }, 



 
 onService:function (url, seqNum, id, bDefault, height, useEdit,nOpenMode, RCFLoc, instID, szServType) {
 if (window.top.ptrcMenu)
 window.top.ptrcMenu.closeRCMenu(); if (nOpenMode == "0")
 onRCService(url,nOpenMode); else if (nOpenMode == "4") 
 onRCService(url,nOpenMode); else if (nOpenMode == "2")
 onRCService(url,nOpenMode); else if (nOpenMode == "3")
 onRCService(url,nOpenMode); else {
 if (url == null) return; var rcAreaId = "RCArea";  var rc = window.frames[this.typeRC + 'RelatedContent']; if (rc == null) return; try {
 if (RCFLoc == "S") 
 this.typeRC = !ptRC2.isFrame() ? RCFLoc : "SF";  if (this.typeRC != "") {
 var pglts = rc.document.getElementsByTagName("iframe"); var sid = id; for (var i=0; i<this.rcMenu.services.length; i++) {
 if (this.rcMenu.services[i].id == id) {
 sid=i; break; }
 }
 rcAreaId = "ptrc_serviceID_" + sid; this.bRefreshService = true; }
 
 var RCArea = rc.document.getElementById(rcAreaId);  if (RCArea != null) { 
 this.selectedURL = url; this.selectedSeqNum = seqNum; this.selectedServiceId = id;  if (!this.bRCExpanded || this.bRCHided || (this.typeRC == "SF")) 
 this.onExpandRC("true", height);  if (browserInfoObj2.isiPad && browserInfoObj2.isSafari && this.typeRC == "")
 {
 RCArea.onload = function() {
 var titleBar = ptUtil.id("ptrctitlebar"); if(typeof(titleBar) !== "undefined" && titleBar != null && RCArea.offsetWidth > 0)
 titleBar.style.width = (RCArea.offsetWidth-40) + "px";  }
 }
 if (RCArea.src == url)
 this.bRefreshService = true;  if (this.bInitialServiceRequest || this.bRefreshService) {
 if (this.typeRC != ""){
 var pgltBody = RCArea.parentNode;  var htmlID = pgltBody.id.slice(10);  if (pgltBody && /ptPgltMin/i.test(pgltBody.className)) 
 setTimeout(function(){var bSave=(bDefault=="N")?1:0; rc.ptPanelPagelet.maximize(htmlID,bSave);}, 0);  }

 RCArea.src = url; this.bServiceLoadedInFrame = true; rc.scrollTo(0,0);  } else {
 
 this.bServiceLoadedInFrame = false; }
 this.bInitialServiceRequest = false; if (ptRC2.isIFrame() && (this.typeRC == "S"))
 ptIframe.rcIframe.parentNode.style.display = "";  }
 else {
 return; }
 } catch (e) {
 return; }
 }
 if (this.bInitiatedFromLink && this.bFirstSideFrameExpanded)
 this.bFirstSideFrameExpanded = false; if (this.typeRC == 'S') { 
 if (!RCPage.visible && this.bRefreshService) {
 RCPage.onShowPageletArea("true", id); }
 RCPage.RCPanel.resizePageletArea(); if (!this.bFirstSideFrameExpanded)
 this.openMaxServices(id); }else
 this.setRCMenuState();  if(rc.ptPanelPagelet)rc.ptPanelPagelet.addScrollEventHandlers(); }, 

 
 getURLByFld:function (url, seqNum, id, bDefault, height, useEdit, fieldNames, fieldParams, bFromLink, onChangeFieldName, refreshFlags, nullFlags, URLParamsEscaped, requiredFlag,szSerName,instID,nOpenMode, RCFLoc, pnlfieldNames,sPageFieldValues) {
 if (url == null) 
 return null; var tc = window.frames['TargetContent']; if (tc == null) 
 return null; if (seqNum == null || id == null) 
 return null; if ( (bFromLink == "false") && (this.selectedServiceId != null ) && (id == this.selectedServiceId))
 return null; if (typeof(pnlfieldNames) == 'undefined')
 pnlfieldNames = fieldNames; if (bFromLink && typeof(isRowSelcted) != 'undefined' && isRowSelcted && typeof(sRowData) != 'undefined')
 {
 var fn = fieldNames.split(this.fldNameSeparator); var pnlfn = pnlfieldNames.split(this.fldNameSeparator); for (i = 1; i < pnlfn.length; i++)
 {
 var pagefieldName = pnlfn[i]; var fld = fn[i]; var nPos1 = fld.lastIndexOf("$"); if (nPos1 != -1)
 {
 var fldBase = fld.substr(0,nPos1); var nPos2 = sRowData.indexOf(fldBase); if (nPos2 != -1)
 {
 var nPos3 = nPos2+fldBase.length; var nPos4 = sRowData.indexOf(this.fldNameSeparator,nPos3); if (nPos4 == -1)
 nPos4 = sRowData.length; var sOccur = sRowData.substr(nPos3,nPos4-nPos3); fldBase = fldBase+sOccur; fieldNames = fieldNames.replace(fn[i],fldBase); var nPos5 = pagefieldName.lastIndexOf("$"); if (nPos5 != -1)
 {
 var nPnlFldBase = pagefieldName.substr(0,nPos1); nPnlFldBase = nPnlFldBase+sOccur; pnlfieldNames = pnlfieldNames.replace(pagefieldName,nPnlFldBase); }
 }
 if (pagefieldName =="")
 pagefieldName = fn[i]; }
 } 
 }

 var paramStr = "";  if (fieldNames != "" && fieldParams != "") {
 var fn = fieldNames.split(this.fldNameSeparator); var pnlfn = pnlfieldNames.split(this.fldNameSeparator); var PgFldValues = null; if (typeof(sPageFieldValues) != 'undefined' && sPageFieldValues != null)
 PgFldValues = sPageFieldValues.split(this.fldNameSeparator); var fp = fieldParams.split("$"); var fRef; var fVal; var fFirstChild; for (i = 1; i < pnlfn.length; i++) { 
 var pagefieldName = pnlfn[i]; if (pagefieldName =="")
 pagefieldName = fn[i]; fRef = tc.document.getElementById(pagefieldName)
 if (fRef != null) { 
 if((fRef.type == "select-multiple") || (fRef.type == "select-one"))
 fVal = fRef.options[fRef.selectedIndex].text; else if((fFirstChild = fRef.firstChild)) {
 
 fVal = fFirstChild.data; } else {
 fVal = fRef.value; } 
 if (URLParamsEscaped == 'Y') {
 if (fRef.innerHTML == "&nbsp;")
 paramStr = paramStr + fp[i] + "=" + " ";  else
 paramStr = paramStr + fp[i] + "=" + escape(fVal); } else {
 paramStr = paramStr + fp[i] + "=" + fVal; }
 } else
 {
 if (PgFldValues != null && pnlfn.length == PgFldValues.length)
 paramStr = paramStr + fp[i] + "="+PgFldValues[i]; else
 paramStr = paramStr + fp[i] + "="; }
 } 
 }

 if (url.indexOf("&") == -1)
 {
 if (paramStr.indexOf("&") == 0)
 paramStr = paramStr.substr(1,paramStr.length); }
 
 if (this.isRequiredParamProvided(url + paramStr, requiredFlag) || this.missingReqParamURL == null)
 return url + paramStr; else 
 return this.missingReqParamURL;  }, 
 

 onServiceByFld:function (url, seqNum, id, bDefault, height, useEdit, fieldNames, fieldParams, bFromLink, onChangeFieldName, refreshFlags, nullFlags, URLParamsEscaped, requiredFlag,szSerName,instID,nOpenMode, RCFLoc, szServType, pnlfieldNames,sPageFieldValues) {
 var serviceURL = this.getURLByFld(url, seqNum, id, bDefault, height, useEdit, fieldNames, fieldParams, bFromLink, onChangeFieldName, refreshFlags, nullFlags, URLParamsEscaped, requiredFlag,szSerName,instID,nOpenMode, RCFLoc, pnlfieldNames,sPageFieldValues); if (serviceURL == null)
 return; this.onService(serviceURL, seqNum, id, bDefault, height, useEdit,nOpenMode, RCFLoc, instID, szServType); }, 


 onUpdateRC:function () {
 if (this.selectedServiceId)
 this.onService(this.rcMenu.getURL(this.selectedServiceId), this.selectedSeqNum, this.selectedServiceId, "Y", this.rcMenu.getHeight(this.selectedServiceId)); },

 
 
 onRefresh: function (bCheckRCFrameReload) {
 if (this.selectedServiceId) {
 if ((typeof bCheckRCFrameReload != "undefined") && (bCheckRCFrameReload === true)) {
 var refreshFlags = this.getRefreshFlags(this.rcMenu.getValue(this.selectedServiceId));   if ((typeof refreshFlags != "undefined") && refreshFlags.indexOf("$Y") == -1) 
 return;  }
 this.onUpdateRCMenu();  eval(this.rcMenu.getValue(this.selectedServiceId)); } else {
 if (this.rcMenu == null) {
 this.onHideRC(); this.onUpdateRCMenu(); }
 if (this.rcMenu != null) {
 this.onUpdateRCMenu();   var defaultId = this.rcMenu.getDefaultId(); eval(this.rcMenu.getValue(defaultId)); }
 }
 },

 onHoverRefresh :function() {
 document.getElementById("ptrcrefresh").style.display="none"; document.getElementById("ptrcrefreshonhover").style.display="inline";},

 onMouseoutRefresh :function() {
 document.getElementById("ptrcrefreshonhover").style.display="none"; document.getElementById("ptrcrefresh").style.display="inline";},

 onHideRC:function (bHided) {
 if (((typeof bHided == "undefined") || bHided) && RCPage && RCPage.visible) 
 RCPage.hideRC(); if (ptRC2.isIFrame()) {
 var rc = window.top.document.getElementById(this.typeRC + 'RelatedContent'); if (rc == null) 
 return; if (bHided == null || bHided == "true") {
 rc.style.display = 'none'; this.bRCHided = true; if (typeof(ptIframe) !== "undefined" && ptIframe.rc) 
 ptIframe.rc.toggleDisplay(this.bRCHided); } else {
 this.onExpandRC(); this.bRCHided = false; }
 return; } else if (ptRC2.isFrame()) {
 var tcf = window.top.document.getElementById('TargetContentFrame'); if (this.bHided == null || this.bHided == "true") {
 
 var subFrame = window.document.getElementById("SubFrame"); subFrame.cols = ("ltr" === "ltr") ? "195,*,0" : "0,*,195";  tcf.rows = this.RC_HIDE; this.bRCHided = true; } else {
 this.onExpandRC(); this.bRCHided = false; }
 return; } else {
 return; }
 },

 onExpandRC:function (bExpanded, expandedSize) {
 if (ptRC2.isIFrame()) {
 var rc = window.top.document.getElementById(this.typeRC + 'RelatedContent'); if (rc == null)
 return; if (bExpanded == null || bExpanded == "true") {
 
 if (ptIframe.isRCMin) 
 this.rcBodyToggle(); rc.style.display = 'block'; this.bRCExpanded = true; var rcSize; if (typeof(expandedSize) !== "undefined") 
 rcSize = expandedSize; else 
 rcSize = 0;  if (ptIframe && ptIframe.rc && (this.typeRC != "S")) {
 
 ptIframe.rc.toggleDisplay(!this.bRCExpanded); }
 } else {
 rc.style.display = 'none'; this.bRCExpanded = false; if (ptIframe && ptIframe.rc) {
 ptIframe.rc.toggleDisplay(!this.bRCExpanded); }
 }
 return; } else if (ptRC2.isFrame()) {
 if (this.typeRC == "SF")
 this.toggleSideRCFrame(bExpanded, expandedSize); else {
 this.setRCMenuState();  this.toggleBottomRCFrame(bExpanded, expandedSize); }
 this.bRCHided = false; return; } else {
 return; }
 },

 toggleBottomRCFrame: function (bExpanded, expandedSize) {
 var tcf = window.top.document.getElementById('TargetContentFrame');  if (bExpanded == null || bExpanded == "true") {
 if (bExpanded != null && expandedSize != null) {
 if (expandedSize == "0")
 expandedSize = this.RC_EXPAND; tcf.rows = expandedSize; } else if (this.expandedRCRow == null || this.expandedRCRow == this.RC_MIN) {
 tcf.rows = this.RC_EXPAND; } else {
 tcf.rows = this.expandedRCRow; }
 this.bRCExpanded = true; if (!this.bServiceLoadedInFrame && !this.bInitialServiceRequest)
 this.onRefresh(); } else {
 tcf.rows = this.RC_MIN; this.bRCExpanded = false; }
 this.expandedRCRow = tcf.rows; }, 

 toggleSideRCFrame: function (bExpanded, expandedSize) {
 
 var tcf = window.document.getElementById("SubFrame"); var rcf = window.frames['SFRelatedContent']; var imgBar = rcf.document.getElementById("vRCBarImg"); if (bExpanded == null || bExpanded == "true") {
 if (!ptrc.bFirstSideFrameExpanded)
 ptrc.openMaxServices();  if (bExpanded != null && expandedSize != null) {
 if (expandedSize == "0")
 expandedSize = ptrc.RC_COL_MAXSIZE; tcf.cols = expandedSize; var oldExpander = rcf.document.getElementById("ptrccollapse_expand"); if (oldExpander) oldExpander.parentNode.parentNode.style.display = "none"; rcf.document.getElementById("ptrcServiceFrame").className = "SFRCPosition"; imgBar.className = "";  imgBar.parentNode.title = 'Collapse' + ' ' + 'Related Content'; } else if (this.expandedRCCol == null || this.expandedRCCol == this.RC_MIN) {
 tcf.cols = ptrc.RC_COL_MAXSIZE; imgBar.className = ""; imgBar.parentNode.title = 'Collapse' + ' ' + 'Related Content'; } else {
 tcf.cols = ptrc.RC_COL_MAXSIZE; }
 this.bRCExpanded = true; this.resizeSideRCFrame(rcf, 40); if (!this.bServiceLoadedInFrame && !this.bInitialServiceRequest)
 this.onRefresh(); } else { 
 tcf.cols = ptrc.RC_COL_MINSIZE; this.bRCExpanded = false; try {
 rcf.document.getElementById("ptrcServiceFrame").className = "SFRCPosition";  this.resizeSideRCFrame(rcf, 40); if (imgBar){
 imgBar.className = "flip-horizontal"; imgBar.parentNode.title = 'Expand' + ' ' + 'Related Content'; } 
 }catch(e) {}
 }
 if ((this.typeRC == "SF") && !this.addedSideRCDragHandler){
 ptEvent.add(ptUtil.id("TargetContent"),"resize",ptrc.onSideRCMouseOut); this.addedSideRCDragHandler = true; }
 }, 


 onToggleRC:function () {
 if (this.bRCHided) 
 this.onRefresh(); else
 this.onHideRC("true"); },

 
 onMinMaxRC:function () {
 if (this.bRCExpanded)
 this.onExpandRC("false"); else
 this.onExpandRC("true", this.RC_MAX); },

 onCollapseExpandRC:function () {
 if (this.bRCExpanded)
 this.onExpandRC("false"); else
 this.onExpandRC("true"); },

 isProcessNeededForOnChange: function (handleOnChange, fieldName, allowNull, seqNum, serviceId) {
 var bIsProcessNeededForOnChange = false;  if (this.bRCHided)
 return bIsProcessNeededForOnChange;  if (serviceId != this.selectedServiceId) {
 if (this.typeRC != "")
 bIsProcessNeededForOnChange = true;  return bIsProcessNeededForOnChange; }

 if (handleOnChange != "Y")
 return bIsProcessNeededForOnChange; var tc = window.frames['TargetContent']; if (tc == null) {
 return bIsProcessNeededForOnChange; }

 bIsProcessNeededForOnChange = true; if (allowNull == "N") { 
 field = tc.document.getElementById(fieldName); if (field == null || field.value == "") {
 bIsProcessNeededForOnChange = false; }
 }

 return bIsProcessNeededForOnChange; },

 
 onChangeField:function (evt) {
 var e_out; var ie_var = "srcElement"; var moz_var = "target"; var prop_var = "onChange";  evt[moz_var] ? e_out = evt[moz_var][prop_var] : e_out = evt[ie_var][prop_var]; var fieldName = ptrc.getOnChangeFieldNameFromonServiceByFld(e_out); var fieldNames = ptrc.getFieldNames(e_out); var fieldNameIndex = ptrc.getFieldNameIndex(fieldNames, fieldName); var refreshFlags = ptrc.getRefreshFlags(e_out); var handleOnChange = ptrc.getFlagOnAGivenPosition(refreshFlags, fieldNameIndex, "$"); var allowNulls = ptrc.getIsNullFlags(e_out); var allowNull = ptrc.getFlagOnAGivenPosition(allowNulls, fieldNameIndex, "$"); var seqNum = ptrc.getSeqNum(e_out); var serviceId = ptrc.getServiceId(e_out);  if (ptrc.isProcessNeededForOnChange(handleOnChange, fieldName, allowNull, seqNum, serviceId)) {
 eval(e_out); }
 },

 onAddEvent:function (el, evname, func) {
 if (el == null)
 return; if (el.attachEvent) { 
 el.attachEvent("on" + evname, func); } else if (el.addEventListener) { 
 el.addEventListener(evname, func, true); } else {
 el["on" + evname] = func; }
 },

 isFldService:function (serviceValue) {
 var bFldService = false; var searchStr = "onServiceByFld";  if (serviceValue.search(searchStr) != -1)
 bFldService = true; return bFldService; },

 
 
 htmlDecode:function(str) {
 str = str.replace(/\&lt\;/g, '<').replace(/\&gt\;/g, '>').replace(/\&quot\;/g, '"').replace(/\&amp\;/g, "&"); return str;  },

 onAddChangeEvent:function () {
 var tc = window.frames['TargetContent']; if (tc == null) 
 return;  var rcMenuOnTC = this.getRCMenuOnTC(); if (rcMenuOnTC == null) 
 return; var rcMenuSpan = rcMenuOnTC.getElementsByTagName("span");  if (rcMenuSpan != null && rcMenuSpan.length > 0) {
 var fieldNames, fn, el, fldService; var hrefURL = null; for (var i=0; i < rcMenuSpan.length; i++)
 {
 if (rcMenuSpan[i].className == "ptrcMenuItem") {
 hrefURL = this.getHrefURL(rcMenuSpan[i].innerHTML);  hrefURL = this.htmlDecode(hrefURL); if (this.isFldService(hrefURL)) {
 fieldNames = this.getFieldNames(hrefURL); fn = fieldNames.split(this.fldNameSeparator); for (var j = 1; j < fn.length; j++) {
 if (fn[j].indexOf("$") != -1) continue; el = tc.document.getElementById(fn[j]); if (el != null) {
 this.onAddEvent(el, 'change', ptrc.onChangeField); this.onAddEvent(el, 'blur', ptrc.onChangeField); fldService = hrefURL.replace(/true/, "false");  fldService = hrefURL.replace(/onChangeFieldName/, fn[j]);  el.onChange = fldService; }
 }
 }
 }
 }
 }
 },


 
 
 getURL:function (serviceValue) {
 var spl = serviceValue.split("'"); return spl[1]; },

 
 
 
 getTitle:function (serviceHref) {
 var beginPos = serviceHref.search(/">/);  var endPos = serviceHref.search(/<\//); if (beginPos == -1 || endPos == -1) {
 return "unknown"; }

 beginPos = beginPos + 2;  return(serviceHref.substring(beginPos,endPos)); },

 getSeqNum:function (serviceValue) {
 var spl = serviceValue.split("'"); return spl[3]; },


 getRCFLoc:function (serviceValue) {
 var spl = serviceValue.split("'"); if (/.onServiceByFld/i.test(serviceValue))
 return spl[35]; else
 return spl[15]; },

 getInstID:function (serviceValue) {
 var spl = serviceValue.split("'"); if (/.onServiceByFld/i.test(serviceValue))
 return spl[31]; else
 return spl[17]; },



 getServiceId:function (serviceValue) {
 var spl = serviceValue.split("'"); return spl[5]; },

 getDefaultParam: function (serviceValue) {
 var spl = serviceValue.split("'"); return spl[7]; },

 getHeight: function (serviceValue) {
 var spl = serviceValue.split("'"); return spl[9]; },

 getUseEdit: function(serviceValue) {
 var spl = serviceValue.split("'"); return spl[11]; },

 
 getFieldNames:function (serviceValue) {
 var spl = serviceValue.split("'"); return spl[13]; },

 
 getOnChangeFieldNameFromonServiceByFld:function (serviceValue) {
 var spl = serviceValue.split("'"); return spl[19]; },

 getRefreshFlags:function (serviceValue) {
 var spl = serviceValue.split("'"); return spl[21]; },

 getIsNullFlags:function (serviceValue) {
 var spl = serviceValue.split("'"); return spl[23]; },

 
 getFlagOnAGivenPosition:function (flags, index, separator) {
 var flagsArray = flags.split(separator); if (index < flagsArray.length)
 return flagsArray[index]; else {
 return "N";  }
 },

 
 getFieldNameIndex: function (fieldNames, fieldName) {
 var foundIndex = 0; var fn = fieldNames.split(this.fldNameSeparator); for (i = 1; i < fn.length; i++) { 
 if (fn[i] == fieldName) {
 foundIndex = i; break; }
 }
 return foundIndex; },

 
 
 
 getHrefURL: function (value) {
 
 var hRefIndex = 0; var spl = value.split("\""); for (i = 1; i < spl.length; i++) { 
 var sCont = spl[i]; sCont = sCont.replace(/^\s+|\s+$/g,""); if (sCont == "href="){
 hRefIndex = i; break; }
 
 }
 return spl[hRefIndex+1]; },

 
 isDefaultService:function() {
 var bDefaultService = false; var rcMenuOnTC = this.getRCMenuOnTC(); if (rcMenuOnTC == null) 
 return bDefaultService; var rcMenuSpan = rcMenuOnTC.getElementsByTagName("span");  var hrefURL = null; if (rcMenuSpan != null && rcMenuSpan.length >0) {
 for (var i= rcMenuSpan.length - 1; i >= 0; i--) {
 hrefURL = this.getHrefURL(rcMenuSpan[i].innerHTML);  hrefURL = this.htmlDecode(hrefURL); if (this.getDefaultParam(hrefURL) == "Y") {
 bDefaultService = true; break; }
 }
 }
 return bDefaultService; },

 buildRCMenuObj:function () {
 var rcMenuOnTC = this.getRCMenuOnTC(); if (rcMenuOnTC == null) {
 return; }

 var rcMenuSpan = rcMenuOnTC.getElementsByTagName("span");  var seqNum = null; var serviceId = null; var hrefURL = null; var serviceTitle = null; var i;  if (rcMenuSpan != null && rcMenuSpan.length >0) {
 this.rcMenu = new RCMenu(); for (var i= rcMenuSpan.length - 1; i >= 0; i--){
 if (rcMenuSpan[i].className == "ptrcMenuItem") {
 hrefURL = this.getHrefURL(rcMenuSpan[i].innerHTML);  hrefURL = this.htmlDecode(hrefURL); if (this.getServiceTarget(hrefURL) != "1") continue; seqNum = this.getSeqNum(hrefURL); serviceId = this.getServiceId(hrefURL); service = new Service(hrefURL, this.getURL(hrefURL), seqNum, serviceId, this.getDefaultParam(hrefURL), this.getHeight(hrefURL), this.getUseEdit(hrefURL), this.getTitle(rcMenuSpan[i].innerHTML),this.getRCFLoc(hrefURL),this.getInstID(hrefURL));  this.rcMenu.addService(service); }
 }
 
 this.rcMenu.services.sort(function(a,b){if (a.seqNum == b.seqNum){return ((a.title < b.title) ? -1 : ((a.title > b.title) ? 1 : 0));} else {return (a.seqNum - b.seqNum);}});  for (i=0; i<this.rcMenu.services.length; i++)
 this.setRCPageletHeader(i, this.rcMenu.services[i].id, this.rcMenu.services[i].title);  }
 },


 buildRCMenu:function () {
 var rcMenuStr = ""; var rcMenuOnTC = this.getRCMenuOnTC(); if (rcMenuOnTC == null) 
 return rcMenuStr; var rcMenuSpan = rcMenuOnTC.getElementsByTagName("span");  var rcServicePrefix = "<li><a href=\""; var rcServiceSelectedPrefix = "<li id='selected'><a href=\""; var rcServiceSuffix ="</span></a></li>"; var seqNum = null; var serviceId = null; var hrefURL = null; var serviceTitle = null; if (rcMenuSpan != null && rcMenuSpan.length >0) {
 this.rcMenu = new RCMenu(); rcMenuStr = "<div id='ptrcServiceTab'><ul>"; var tc = window.frames['TargetContent']; var isTangSS = false; if(typeof(tc) != "undefined" && tc != null)
 isTangSS = ((typeof(tc.ptStyleSheet) != "undefined") && (tc.ptStyleSheet.indexOf("TANGERINE") != -1)) ? true : false; for (var i= isTangSS ? 0 :(rcMenuSpan.length - 1);  ((isTangSS && i < rcMenuSpan.length) || (!isTangSS && i >= 0));  isTangSS ? i++ : i--)
 {
 if (rcMenuSpan[i].className == "ptrcMenuItem") {
 hrefURL = this.getHrefURL(rcMenuSpan[i].innerHTML);  hrefURL = this.htmlDecode(hrefURL); if (this.getServiceTarget(hrefURL) != "1") continue; seqNum = this.getSeqNum(hrefURL); serviceId = this.getServiceId(hrefURL); serviceTitle = this.getTitle(rcMenuSpan[i].innerHTML); service = new Service(hrefURL, this.getURL(hrefURL), seqNum, serviceId, this.getDefaultParam(hrefURL), this.getHeight(hrefURL), this.getUseEdit(hrefURL)); this.rcMenu.addService(service); if (this.selectedServiceId != null && serviceId == this.selectedServiceId)
 rcMenuStr = rcMenuStr + rcServiceSelectedPrefix + hrefURL +"\"><span>" + serviceTitle + rcServiceSuffix; else
 rcMenuStr = rcMenuStr + rcServicePrefix + hrefURL +"\"><span>" + serviceTitle + rcServiceSuffix; }
 }
 rcMenuStr = rcMenuStr + "</ul></div>"; }
 return rcMenuStr; },

 
 onUpdateRCMenu:function () {
 var rcMenuOnRC = ""; if (ptRC2.isIFrame()) {
 rcMenuOnRC = ptUtil.id(this.typeRC + "rcMenuOnRC"); if (rcMenuOnRC == null) {
 return; }
 } else if (ptRC2.isFrame()) {
 var rc = window.frames[this.typeRC + 'RelatedContent']; if (rc == null)
 return; try {
 rcMenuOnRC = rc.document.getElementById('rcMenuOnRC'); } catch(e) {}
 } else {
 return; }

 if (rcMenuOnRC != null) {
 if (this.typeRC == "")
 rcMenuOnRC.innerHTML = this.buildRCMenu(); else {
 if (this.rcMenu == null || this.bRefreshService)
 this.buildRCMenuObj();  }
 }
 },

 
 onNewWindow:function () {
 if (this.selectedServiceId != null)
 
 window.open(this.selectedURL, '_blank');  else if (this.rcMenu != null) {
 
 window.open(this.rcMenu.getDefaultURL(), '_blank'); }
 },


 setRCPageletHeader: function(htmlID, serviceId, serviceName){
 var rc = window.frames[this.typeRC + 'RelatedContent']; var pgltName = rc.document.getElementById("ptrc_servicename_" + htmlID); if (pgltName) pgltName.innerHTML = serviceName; var useEdit = this.rcMenu.getUseEdit(serviceId); var bNewWindow = useEdit & 1;  var bRefresh = useEdit & 2;  var newWin; var refresh; var icoNewWin = rc.document.getElementById("ptsrc_newwin_" + htmlID); var icoRefresh = rc.document.getElementById("ptsrc_refresh_" + htmlID); var icoMin = rc.document.getElementById("ptsrc_min_" + htmlID); var icoMax = rc.document.getElementById("ptsrc_max_" + htmlID); if (icoNewWin) {
 if ( (bNewWindow && (ptUtil.getCSSValue(icoNewWin,"display") == "none")) || 
 (!bNewWindow && (ptUtil.getCSSValue(icoNewWin,"display") == "block")) ) {
 this.showHide(icoNewWin, bNewWindow);  }
 icoNewWin.alt += " " + serviceName; }

 if (icoRefresh) {
 if ( (bRefresh && (ptUtil.getCSSValue(icoRefresh,"display") == "none")) ||
 (!bRefresh && (ptUtil.getCSSValue(icoRefresh,"display") == "inline")) ) {
 this.showHide(icoRefresh, bRefresh);  }
 icoRefresh.alt += " " + serviceName; }

 if (icoMin) {
 this.showHide(icoMin, 0);  icoMin.alt += " " + serviceName; }
 if (icoMax) {
 this.showHide(icoMax, 1);  icoMax.alt += " " + serviceName; }

 var resizeBar = rc.document.getElementById("pageletresizebar_" + htmlID); if (resizeBar){
 var resizeImg = resizeBar.getElementsByTagName("img")[0]; resizeImg.alt = resizeImg.alt.replace("%1", serviceName); }

 var ifr = rc.document.getElementById("ptrc_area_" + htmlID); if (ifr) {
 ifr = ifr.getElementsByTagName("iframe")[0]; ifr.title = serviceName + " Related Content";  ifr.setAttribute("serviceId", serviceId); }
 },


 setRCMenuState: function () {
 this.onUpdateRCMenu();  var useEdit = this.rcMenu.getUseEdit(this.selectedServiceId); var bNewWindow = useEdit & 1; var bRefresh = useEdit & 2; var newWin; var refresh; if (this.typeRC != "" || ptRC2.isIFrame()) {
 
 var rcBoby = ptUtil.id(this.typeRC + "RelatedContent"); if (!rcBoby) { return; }

 newWin = ptUtil.id(this.typeRC + "ptrcnewwin"); refresh = ptUtil.id(this.typeRC + "ptrcrefresh"); } else if (ptRC2.isFrame()) {
 var rc = window.frames[this.typeRC + 'RelatedContent']; if (rc == null) 
 return; var expCollImg = rc.document.getElementById("ptrccollapse_expand"); if (expCollImg) {
 if (this.bRCExpanded) {
 ptUtil.swapClass(expCollImg,"ptrccollapse","ptrcexpand"); } else {
 ptUtil.swapClass(expCollImg,"ptrcexpand","ptrccollapse"); }
 }

 newWin = rc.document.getElementById("ptrcnewwin"); refresh = rc.document.getElementById("ptrcrefresh"); if (this.typeRC == "SF") {
 var titleObj = rc.document.getElementById("rcFrameTitle"); if (title) {
 try {
 titleObj.style.width = 0; if (titleObj.firstChild)
 titleObj.removeChild(titleObj.firstChild); }catch(e){}
 }
 if (newWin) newWin.parentNode.parentNode.align="right"; }

 } else {
 return; }

 if (newWin) {
 
 if ( (bNewWindow && (ptUtil.getCSSValue(newWin,"display") == "none")) ||
 (!bNewWindow && (ptUtil.getCSSValue(newWin,"display") == "block")) ) {
 this.showHide(newWin, bNewWindow); }
 }

 if (refresh) {
 
 if ( (bRefresh && (ptUtil.getCSSValue(refresh,"display") == "none")) ||
 (!bRefresh && (ptUtil.getCSSValue(refresh,"display") == "inline")) ) {
 this.showHide(refresh, bRefresh,true); }
 }
 },

 
 setInitExpandedView:function(bFlag) {
 this.bInitExpandedView = bFlag; if (!this.bInitExpandedView) {
 this.bRefreshService = false;  this.bInitialServiceRequest = true; if (!this.isSameComponent()) { 
 this.bSavedRCHided = true;  this.bSavedRCExpanded = false;  } 
 }
 },

 
 setRCFrameLoc:function(loc){
 if (loc === "S") 
 this.typeRC = ptRC2.isFrame() ? "SF" : "S";  else
 this.typeRC = "";  },



 fireOnChangeIfNeeded:function(name) {
 var fn = name.split(this.fldNameSeparator); if (fn.length > 0) {
 
 var tc = window.frames['TargetContent']; if (tc == null) {
 return; }

 
 var field = tc.document.getElementById(fn[1]);  var newEvt = document.createEventObject(); if (field != null) {
 var bFired = field.fireEvent("onchange", newEvt); }
 }
 },

 refreshRCOnChangeIfNeeded:function (fieldNameParam) {
 if (fieldNameParam == null || fieldNameParam == "" || this.rcMenu == null)
 return;  if (fieldNameParam.length > 0) {
 var tc = window.frames['TargetContent']; if (tc == null) 
 return; var fieldName; if (fieldNameParam.indexOf(this.fldNameSeparatorInPrompt) > 0) { 
 var fn = fieldNameParam.split(this.fldNameSeparatorInPrompt); fieldName = fn[0]; }
 else
 fieldName = fieldNameParam;  var field = tc.document.getElementById(fieldName); var fieldNames = this.getFieldNames(this.rcMenu.getValue(this.selectedServiceId)); if (fieldNames != null && fieldNames.match(fieldName) != null) { 
 var matchStr = "=" + field.value; if (this.selectedURL.match(matchStr) == null) 
 this.onRefresh(); }
 }
 },

 
 toggleRCBody:function (rcBodyHeight) {
 if (ptIframe && ptIframe.rc) 
 ptIframe.rc.toggleHeight(rcBodyHeight); },

 
 rcBodyToggle:function () {

 if (ptRC2.isIFrame()) {
 
 var rcBoby = ptUtil.id("RelatedContent"); if (!rcBoby) { return; }

 var height; var expCollImg = ptUtil.id("ptrccollapse_expand"); if (ptUtil.getCSSValue(rcBoby,"display") === "none") {
 rcBoby.style.display = "block"; this.bRCExpanded = true;    height = 0; ptUtil.swapClass(expCollImg,"ptrccollapse","ptrcexpand"); if (!this.bServiceLoadedInFrame)
 this.onRefresh();  } else {
 this.bRCExpanded = false; rcBoby.style.display = "none"; ptUtil.swapClass(expCollImg,"ptrcexpand","ptrccollapse");  var titleBar = ptUtil.id("ptrctitlebar"); var TCSpacer = ptUtil.id("ptrcTCSpacer"); height = titleBar.offsetHeight + TCSpacer.offsetHeight; }
 this.toggleRCBody(height); } else if (ptRC2.isFrame()) {
 this.onCollapseExpandRC(); }
 },




onServiceByScroll:function (serviceName,scrollFieldName,bManual,bRefresh,nOpenMode,nInstID,sRecFldName,sPageFieldValues) {
 var serviceName1 = serviceName; var h = String.fromCharCode(160); while(serviceName1.indexOf(h) != -1)
 serviceName1 = serviceName1.replace(h," "); serviceName = serviceName1; if (typeof(sRecFldName) == 'undefined')
 sRecFldName = scrollFieldName; var hrefURL = this.getServURL(serviceName,true,nInstID); var OrighrefURL = hrefURL; sorigFieldNames = ""; if (hrefURL)
 {
 sorigFieldNames = this.getFieldNames(hrefURL); if (typeof(bPreProceesed) == 'undefined')
 {
 fn = scrollFieldName.split(this.fldNameSeparator); fn1 = sRecFldName.split(this.fldNameSeparator); for (var j = 1; j < fn.length; j++) {
 sorigFieldNames = this.getFieldNames(hrefURL); fieldNames = sorigFieldNames; var nPos = fn[j].indexOf("$"); if (nPos!=-1)
 sNewField = fn[j].substring(0,nPos+1); nPos = fn1[j].indexOf("$"); if (nPos!=-1)
 sNewRecField = fn1[j].substring(0,nPos+1); if (sNewField != sNewRecField)
 {
 var st = fieldNames.indexOf(sNewRecField); if (st == -1)
 st = fieldNames.indexOf(sNewField); var ed = fieldNames.indexOf(this.fldNameSeparator,st+1); if (ed == -1)
 ed = fieldNames.length; var strOrigField =fieldNames.substring(st,ed); fieldNames = fieldNames.replace(strOrigField,fn[j]); hrefURL = hrefURL.replace(sorigFieldNames,fieldNames); }
 else
 {
 var st = fieldNames.indexOf(sNewField); var ed = fieldNames.indexOf(this.fldNameSeparator,st+1); if (ed == -1)
 ed = fieldNames.length; var strOrigField =fieldNames.substring(st,ed); fieldNames = fieldNames.replace(strOrigField,fn[j]); hrefURL = hrefURL.replace(sorigFieldNames,fieldNames); }
 }
 }
 else
 hrefURL = hrefURL.replace(sorigFieldNames,scrollFieldName); sorigFieldNames = this.getFieldNames(hrefURL); var sPnlFlds = this.getPanleFieldNames(hrefURL); if ((typeof(sPnlFlds) != 'undefined') && (sPnlFlds != this.fldNameSeparator))
 hrefURL = hrefURL.replace(sPnlFlds,sorigFieldNames); var sHREFPageFieldValues = this.getPageFieldValues(hrefURL); if ((typeof(sHREFPageFieldValues) != 'undefined'))
 {
 var nPos = hrefURL.indexOf(sHREFPageFieldValues); hrefURL = hrefURL.replace(sHREFPageFieldValues,sPageFieldValues); }

 var sNewFieldNames = this.getFieldNames(hrefURL); var bUpdate = false; if (hrefURL != OrighrefURL)
 bUpdate = true; if (bUpdate)
 this.UpdateServURL(serviceName,hrefURL,sorigFieldNames,sNewFieldNames,nInstID);   if (bManual)
 eval(hrefURL); else if(bRefresh)
 {
 if (this.getServiceId(hrefURL) == this.selectedServiceId && this.bRCHided == false)
 eval(hrefURL); }
 }
 },

 
 SetScrollFieldList:function (scrlList,changeFldList,strFocusServLst) {

 if (this.scrollFieldList == null)
 this.scrollFieldList = scrlList ; else
 {
 this.scrollFieldList += '~'; this.scrollFieldList += scrlList ; }
 if (this.scrollChgFldList == null)
 this.scrollChgFldList = changeFldList ; else
 {
 this.scrollChgFldList += '~'; this.scrollChgFldList += changeFldList ; }
 },


 
 onFocusScrlField:function (evt) {

 var e_out; var ie_var = "srcElement"; var moz_var = "target"; var prop_var = "onFocus";  evt[moz_var] ? e_out = evt[moz_var][prop_var] : e_out = evt[ie_var][prop_var]; var sEvtArg = e_out; isRowSelcted = true; var nPos = sEvtArg.indexOf("~"); var sParent; var sServList = null; if (nPos != -1)
 {
 sParent = sEvtArg.substr(0,nPos); sServList = sEvtArg.substr(nPos+1,sEvtArg.length); var nPos1 = sServList.indexOf("~"); if (nPos1 != -1)
 {
 sRowData = sServList.substr(nPos+1,sServList.length); sServList = sServList.substr(0,nPos); }
 }
 else
 sParent = sEvtArg; var tc = window.frames['TargetContent']; if (tc == null) {
 return; }

 var rcMenuOnTC = tc.document.getElementById(sParent); if (rcMenuOnTC == null) {
 return; }

 var rcMenuSpan = rcMenuOnTC.getElementsByTagName("span"); if (rcMenuSpan != null && rcMenuSpan.length > 0) {
 var fieldNames,serviceName; var hrefURL = null; for (var i=0; i < rcMenuSpan.length; i++)
 {
 if (rcMenuSpan[i].className == "ptrcMenuItem") {
 hrefURL = ptrc.getHrefURL(rcMenuSpan[i].innerHTML); hrefURL = ptrc.htmlDecode(hrefURL); flds = hrefURL.split("'"); fieldNames = flds[3]; serviceName = flds[1]; var bAutoChg = false; if ((typeof(sServList) !== "undefined")&& (sServList != null) && (sServList.indexOf(serviceName) != -1))
 bAutoChg = true; var nInstID = "1"; var nPos1 = serviceName.lastIndexOf("$"); if (nPos1 != -1)
 {
 nInstID = serviceName.substr(nPos1+1,serviceName.length); serviceName = serviceName.substr(0,nPos1); }

 ptrc.onServiceByScroll(serviceName,fieldNames,false,bAutoChg,0,nInstID); }
 }
 }

 },

 
 SetRcEnabled:function (flag)
 {
 this.scrollFieldList = null; this.scrollChgFldList = null; this.bEnabled = flag; },

 IsPageRCEnabled:function ()
 {
 return this.bEnabled; },

 
 onChangeScrlField:function (evt) {

 var e_out; var ie_var = "srcElement"; var moz_var = "target"; var prop_var = "onChange";  evt[moz_var] ? e_out = evt[moz_var][prop_var] : e_out = evt[ie_var][prop_var]; var serv = e_out.split("~"); for (i = 1; i < serv.length;i++) {
 var args = serv[i].split("$"); if(args.length != 2)
 continue;  var hRefURL = ptrc.getServURL(args[0],true, args[1]); if (hRefURL == null) continue; if (ptrc.getServiceId(hRefURL) == ptrc.selectedServiceId)
 {
 eval(hRefURL); break; }
 }
 },

 

 SubscribeToEvents:function (scrollFieldList, changeFirldList) {
 
 this.scrollFieldList = scrollFieldList; this.scrollChgFldList = changeFirldList; var tc = window.frames['TargetContent']; if (tc == null) {
 return null; }
 if ((this.scrollFieldList == null) || (typeof(this.scrollFieldList) == "undefined"))
 return; var fl = this.scrollFieldList.split("~"); var bRefreshOnChange = false; if ((this.scrollChgFldList != null) && (typeof(this.scrollChgFldList) !== "undefined"))
 bRefreshOnChange = true; for (j = 0; j < fl.length; j++) {
 var strscrl = fl[j]; var fn = strscrl.split(this.fldNameSeparator); var sParentName = fn[0]; for (i = 1; i < fn.length; i++) {
 var strFld = fn[i]; var strServLst; if (bRefreshOnChange)
 {
 var nPos = this.scrollChgFldList.indexOf(strFld); if (nPos != -1)
 {
 var nPos1 = this.scrollChgFldList.indexOf("~",nPos); if (nPos1 == -1)
 nPos1 = this.scrollChgFldList.length; var strChgFld = this.scrollChgFldList.substr(nPos,nPos1-nPos)
 var nPos2 = strChgFld.indexOf("$$"); var strOcc = strChgFld.substr(0,nPos2); strServLst= strChgFld.substr(nPos2,strChgFld.length); strServLst = strServLst.replace("$$","~"); var nPos3 = strServLst.indexOf(this.fldNameSeparator); if (nPos3 != -1)
 strServLst = strServLst.substr(0,nPos3); var elChg = tc.document.getElementById(strFld); if (elChg != null){
 this.onAddEvent(elChg,'change', ptrc.onChangeScrlField); elChg.onChange = sParentName+strServLst; }
 }
 }

 var el = tc.document.getElementById(strFld); if (el != null){
 this.onAddEvent(el, 'focus', ptrc.onFocusScrlField); if ((typeof(strServLst) !== "undefined")&& (strServLst != null))
 sParentName = sParentName+strServLst+"~"+strscrl; el.onFocus = sParentName; }
 }
 }
 this.scrollFieldList = null; this.scrollChgFldList = null; },

 
 getServURL:function (servName,bFldServ,nInstID) {
 var tc = window.frames['TargetContent']; if (tc == null) {
 return; }

 var rcMenuOnTC = this.getRCMenuOnTC(); if (rcMenuOnTC == null) {
 return; }
 var rcMenuSpan = rcMenuOnTC.getElementsByTagName("span"); if (rcMenuSpan != null && rcMenuSpan.length > 0) {
 var fieldNames,sorigFieldNames, fn, sNewField, fldService; var hrefURL = null; for (var i=0; i < rcMenuSpan.length; i++)
 {
 if (rcMenuSpan[i].className == "ptrcMenuItem") {
 hrefURL = this.getHrefURL(rcMenuSpan[i].innerHTML); hrefURL = this.htmlDecode(hrefURL); var URLServiceName = this.getServiceNameFromURL(hrefURL); var servInstID = this.getServiceInstID(hrefURL); if (URLServiceName != null && typeof(URLServiceName) !== "undefined") {
 if((URLServiceName.toUpperCase() == servName.toUpperCase()) &&(servInstID == nInstID)) {
 if (bFldServ == true){
 if(this.isFldService(hrefURL) == false)
 return null; }
 return hrefURL; }
 }
 }
 }
 }
 },

 
 UpdateServURL:function (servName,ServURL,sorigFieldNames,sNewFieldNames,nInstID) {
 var tc = window.frames['TargetContent']; if (tc == null) {
 return; }
 var rcMenuOnTC = this.getRCMenuOnTC(); if (rcMenuOnTC == null) {
 return; }
 var rcMenuSpan = rcMenuOnTC.getElementsByTagName("span"); if (rcMenuSpan != null && rcMenuSpan.length > 0) {
 var fieldNames,sorigFieldNames, fn, sNewField, fldService; var hrefURL = null; for (var i=0; i < rcMenuSpan.length; i++)
 {
 if (rcMenuSpan[i].className == "ptrcMenuItem") {
 hrefURL = this.getHrefURL(rcMenuSpan[i].innerHTML); var URLServiceName = this.getServiceNameFromURL(hrefURL); var servInstID = this.getServiceInstID(hrefURL); if((URLServiceName == servName) && (servInstID == nInstID)) {
 sorigFieldNames = this.getFieldNames(rcMenuSpan[i].innerHTML)
 rcMenuSpan[i].innerHTML = rcMenuSpan[i].innerHTML.replace(sorigFieldNames,sNewFieldNames); if (this.rcMenu != null)
 {
 this.rcMenu.setValue(this.getServiceId(hrefURL),ServURL); this.onUpdateRCMenu(); }
 break; }
 }
 }
 }
 },

 getServiceNameFromURL:function (serviceValue) {
 var spl = serviceValue.split("'"); return spl[29]; },

 getServiceInstID:function (serviceValue) {
 var spl = serviceValue.split("'"); return spl[31]; },

 getServiceTarget:function (serviceValue) {
 var spl = serviceValue.split("'"); if (this.isFldService(serviceValue))
 return spl[33]; else
 return spl[13]; },
 getPanleFieldNames:function (serviceValue) {
 var spl = serviceValue.split("'"); if (this.isFldService(serviceValue))
 return spl[39];  else
 return ""; },
 getPageFieldValues:function (serviceValue) {
 var spl = serviceValue.split("'"); if (this.isFldService(serviceValue))
 return spl[41];  else
 return ""; },


 
 RefreshScroll:function (szActionScrl){
 var szScrlName = "rcMenuOnTC_"; szScrlName += szActionScrl; var strServLst=""; var tc = window.frames['TargetContent']; if (tc == null) {
 return null; }
 if ((typeof(this.scrollFieldList) == "undefined") || (this.scrollFieldList == null))
 return;  var fl = this.scrollFieldList.split("~"); var bRefreshOnChange = false; if ((this.scrollChgFldList != null) && (typeof(this.scrollChgFldList) !== "undefined"))
 bRefreshOnChange = true; for (j = 0; j < fl.length; j++) {
 var strscrl = fl[j]; var fn = strscrl.split(this.fldNameSeparator); var nPos = fn[0].indexOf("$hrc"); if (nPos == -1) return; var szScrlparentName = fn[0].substr(0,nPos); if (szScrlparentName != szScrlName) continue; for (i = 1; i < fn.length; i++) {
 var strFld = fn[i]; if (bRefreshOnChange)
 {
 var nPos = this.scrollChgFldList.indexOf(strFld); if (nPos != -1)
 {
 var nPos1 = this.scrollChgFldList.indexOf("~",nPos); if (nPos1 == -1)
 nPos1 = this.scrollChgFldList.length; var strChgFld = this.scrollChgFldList.substr(nPos,nPos1-nPos)
 var nPos2 = strChgFld.indexOf("$$"); var strOcc = strChgFld.substr(0,nPos2); strServLst += strChgFld.substring(nPos2,strChgFld.length); strServLst = strServLst.replace("$$","~"); }
 }
 }
 }
 var sl = strServLst.split("~"); for (i = 1; i < sl.length; i++) {
 var strServName = sl[i]; var servURL = this.getServURL(strServName,true); if (this.getServiceId(servURL) == this.selectedServiceId)
 {
 this.onRefresh(); break; }
 }
 },
 setModalWinImgURL:function (szCloseImg,szResizeImg){
 szModalCloseImg = szCloseImg; szModalResizeImg = szResizeImg; }
}



RCPage.ptalTemplate = new RCSideTemplate();