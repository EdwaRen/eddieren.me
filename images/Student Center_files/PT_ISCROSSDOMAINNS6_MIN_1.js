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