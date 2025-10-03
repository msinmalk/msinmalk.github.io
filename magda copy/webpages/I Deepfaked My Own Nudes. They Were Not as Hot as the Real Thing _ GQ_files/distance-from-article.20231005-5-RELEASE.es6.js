var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*! 20231005-5-RELEASE */

!function(){let t=!1,e=100;const n=(()=>{let t=!1;const e=.6;return n=>{try{if(t)return;const r=TRC.DistanceFromArticle.measure(e);if(!r)return;const i=r.containerWithShortestDistFromArticle.distance;"function"==typeof n&&(n("distance_from_article","reported","",`${i}`),t=!0)}catch(t){__trcError("Error in reportArticleDistanceFromFeed",t)}}})();function r(n=.6){if(t)return;const r=i(n);r&&(e=TRCImpl.global["distance-violation-threshold"]||e,r.containerWithShortestDistFromArticle.distance<e?t=!0:u(r.articleElement,r.containerWithShortestDistFromArticle.distance))}function i(t=.6){const e=TRC.ArticleDetection.detectArticle(t);if(!e||!e.articleElement)return;const{articleElement:n,taboolaContainers:r,lowestContainer:i}=e,l=s(n,i),a=r.filter(t=>o(t,l));let u=a.map(t=>({container:t,distance:c(t,l)}));const f=u.every(t=>t.distance<=0);f?u.forEach(t=>{t.distance=Math.abs(t.distance)}):u=u.filter(t=>t.distance>0);const d=u.sort((t,e)=>t.distance-e.distance).shift();return d?{articleElement:n,containerWithShortestDistFromArticle:d}:void 0}function o(t,e){const n=o(t),r=o(e);return!i(n,r);function i(t,e){return t.x2<e.x1||e.x2<t.x1}function o(t){const e=a(t),n=e+t.offsetWidth,r={x1:e,x2:n};return r}}function c(t,e){const n=l(e)+e.offsetHeight,r=l(t);return r-n}function s(t,e){let n;return t.contains(e)&&(n=f(t,e)),n||t}function l(t){return t.getBoundingClientRect().top+window.pageYOffset}function a(t){return t.getBoundingClientRect().left+window.pageXOffset}function u(n,r){const i={distance:r,articleClasses:n.className,articleTag:n.nodeName,threshold:e},o={event_type:"END_OF_ARTICLE_MEASUREMENT",event_state:"REPORTED",event_value:JSON.stringify(i)};TRCImpl.sendEvent("supply-feature",{d:JSON.stringify(o)},null),TRC.util.isPercentEnabled(TRCImpl.global,"take-screenshot-on-violation")&&TRC.ModuleLoader.load("screenshot-capture",TRC.screenshotCaputre,function(){TRC.screenshotCaputre.init(document.body,{keepImages:!0})}.trcBind(this)),t=!0}function f(t,e){const n=d(t,e);return h(t,n)}function d(t,e){for(let n=0;n<t.children.length;++n)if(t.children[n].contains(e))return t.children[n]}function h(t,e){let n=e.previousElementSibling;for(;n;){const t=TRC.ArticleDetection.getAllTextLengthInElement(n);if(t)return n;n=n.previousElementSibling}}TRC.DistanceFromArticle={measureAndReport:r,measure:i,reportArticleDistanceFromFeed:n},window._trcIsUTactive&&(TRC.DistanceFromArticle.report=u)}();

}
/*
     FILE ARCHIVED ON 09:18:23 Oct 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:59:15 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.604
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.012
  esindex: 0.014
  cdx.remote: 47.296
  LoadShardBlock: 86.813 (3)
  PetaboxLoader3.datanode: 129.617 (5)
  load_resource: 1042.353 (2)
  PetaboxLoader3.resolve: 187.555 (2)
*/