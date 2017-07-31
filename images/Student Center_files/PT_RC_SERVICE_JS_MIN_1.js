
function Service(value, url, seqNum, id, isDefault, height, useEdit, title, RCFLoc, instID)
{ 
 this.value = value; this.url = url;  this.seqNum = seqNum; this.id = id; this.isDefault = isDefault; this.height = height; this.useEdit = useEdit; this.title = title;  this.RCFLoc = RCFLoc;  this.instID = instID; }


function RCMenu()
{ 
 this.services = new Array();}

RCMenu.prototype = {
 
 addService : function(service) {
 this.services[this.services.length] = service; },

 
 getInstID : function(id) {
 for (i=0; i < this.services.length; i++) {
 if (this.services[i].id == id) 
 return this.services[i].instID; }
 return ""; },


 
 getValue : function(id) {
 for (i=0; i < this.services.length; i++) {
 if (this.services[i].id == id) 
 return this.services[i].value; }
 return ""; },
 
 
 getURL : function(id) {
 for (i=0; i < this.services.length; i++) {
 if (this.services[i].id == id) 
 return this.services[i].url; }
 return ""; },
 
 
 getDefaultURL: function() {
 var defaultID = this.getDefaultId(); return this.getURL(defaultID); },
 
 
 getDefaultSeqNum: function() {
 var defaultID = this.getDefaultId(); return this.services[defaultID].seqNum; },
 

 
 getDefaultId: function() {
 var defaultID = -1; if (this.services.length <= 0)
 return defaultID; for (i=0; i < this.services.length; i++) {
 if (this.services[i].isDefault == "Y") {
 defaultID = this.services[i].id; }
 }

 if (defaultID != -1) 
 return defaultID;  var smallestSeqNum = this.services[0].seqNum; for (i=0; i < this.services.length; i++) { 
 if (this.services[i].seqNum <= smallestSeqNum) {
 defaultID = this.services[i].id; smallestSeqNum = this.services[i].seqNum; }
 }
 return defaultID; },

 
 getHeight : function(id) {
 for (i=0; i < this.services.length; i++) {
 if (this.services[i].id == id) 
 return this.services[i].height; }
 
 return "0";   },
 
 
 getUseEdit : function(id) {
 for (i=0; i < this.services.length; i++) {
 if (this.services[i].id == id) 
 return this.services[i].useEdit; }
 return "0";  },

 setValue : function(id,newVal) {
 for (i=0; i < this.services.length; i++) {
 if (this.services[i].id == id) {
 this.services[i].value = newVal; break; }
 }
 }
}
