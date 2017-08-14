"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","70ae4097b9ea844466449b8c7d99256c"],["/static/css/main.126deadc.css","34f00e21b8fc8d0160cee295659b1640"],["/static/js/main.64c0427b.js","32cd5d6c60f4e8e816ced13cc8ee6f39"],["/static/media/Education.cb9f8525.png","cb9f8525bd1bbfeb67ad1fcd1ccef158"],["/static/media/Edward_ProfilePic.772b386c.png","772b386c540e454d6f4d571645ec6471"],["/static/media/Experience.ccc48890.png","ccc4889063d5930c2db14a2f384d79ff"],["/static/media/Network.2686cc8c.png","2686cc8cf0543fd300f3035d3560a183"],["/static/media/Profile.9a6833a9.png","9a6833a92ae2b5b418c4b4e223535e65"],["/static/media/Projects.9258542e.png","9258542eedc2e6acd9ed7eae56eabab1"],["/static/media/ProjectsIcon2.0858db27.png","0858db275cb91c71e44746c6dca6ec00"],["/static/media/Raleway-Bold.575e4317.ttf","575e4317521b381ac94c0c8207c81979"],["/static/media/Raleway-Italic.dd03a26a.ttf","dd03a26a6d06f63d75ceeac6b491f26a"],["/static/media/Raleway-Medium.430a0518.ttf","430a0518f5ff3b6c8968b759a29b36e2"],["/static/media/Raleway-Regular.580d0778.ttf","580d0778ad254335be45bf58bb449f43"],["/static/media/email2.82778583.png","827785835c314fc88724087e7db24e59"],["/static/media/facebook2.e415d0c2.png","e415d0c21be5a0b6d40b24ededf4be92"],["/static/media/finderDescriptionBar.08e11be5.png","08e11be58f77e02dbd14bbf9cf58c32a"],["/static/media/finderFilesBar.ede7456a.png","ede7456a91c5b6cd09749e7308e9f4bb"],["/static/media/finderReturnIcon.3b554d86.png","3b554d86f5593a0860c667f7cc4568ba"],["/static/media/finderSideBar.7eadfeb7.png","7eadfeb740877a7f70e7daa31c4323b4"],["/static/media/finderTopBar.a7792d7f.png","a7792d7f2e4681ce291dd8b962ef4c75"],["/static/media/github2.67c95089.png","67c950896a041e5f470d4eceebb35839"],["/static/media/linkedin2.6a1d852f.png","6a1d852f2c87ef9679deb3d460da8f3e"],["/static/media/open-book.b7dfa06f.png","b7dfa06fbd8fe1e1dbf3f76ff10f6c44"],["/static/media/styleGraph.64d03ac2.scss","64d03ac2f357dbe66dd995b59586f8f1"],["/static/media/trashIconEmptySmall.1ed3c272.png","1ed3c272bb0655d2e047b3c349e9f366"],["/static/media/trashIconFilledSmall.5bb35bb5.png","5bb35bb5e1bfffd6dd893dc8248040e0"],["/static/media/triangulated-image.de66bda9.jpg","de66bda9a1cc04dbb1bdaad385dc12b5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});