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

!function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);const t={DIV:1,P:1,ARTICLE:1,SECTION:1,I:1,EM:1,STRONG:1},e="div, p, article, section, i, em, strong",n=40;let o=null,r=null,l=null;function c(t){return Array.prototype.slice.call(t)}function i(t=.6){const e=a();if(!e||!e.length)return;const n=u(e),o=s(n,t);return{articleElement:o,taboolaContainers:e,lowestContainer:n}}function a(){const t=[];return document.querySelectorAll(".trc_related_container").forEach(l=>{e(l)||n(l)||o(l)||r(l)||t.push(l)}),t;function e(t){const e="Explore More"===t.getAttribute("data-parent-placement-name")&&TRC.dom.closest(t,'[data-parent-placement-name="Explore More"]'),n=t.getAttribute("data-placement-name")&&t.getAttribute("data-placement-name").indexOf("Explore More")>-1&&TRC.dom.closest(t,'[data-placement-name*="Explore More"]'),o=t&&TRC.dom.closest(t,'[id^="tbl-explore-more"]')||!1;return e||n||o}function n(t){return t&&(TRC.dom.closest(t,".tbl-next-up-inner")||TRC.dom.closest(t,'[id*="next-up"]'))}function o(t){return t&&TRC.dom.closest(t,".tbl-vignette")}function r(t){return!t||!t.querySelector("[data-item-id]")}}function u(t){return t.map(t=>({container:t,top:E(t)})).sort((t,e)=>e.top-t.top).shift().container}function s(t,e){const n=d(t),o=e*n,r=m(o,t);return r}function d(t){const e=[],n=document.body.children;l=t&&t.id||null;for(let o=0;o<document.body.childElementCount&&(e.push(n[o]),!TRC.dom.isAncestor(n[o],t));++o);return f(e)}function f(t){let e=0;return t.forEach(t=>{e+=p(t)}),e}function m(t,e){let n=document.body;for(;n.childElementCount;){const o=T(n,e);if(!(o.length>t))return 0===o.length&&void 0===o.el?n&&n.parentElement:n;n=o.el}return n}function p(n){let o=0;if(t[n.nodeName]&&(o=g(n)),n.querySelectorAll){const t=c(n.querySelectorAll(e)),r=h(t);r.forEach(t=>{t.offsetParent&&(o+=g(t))})}return o}function h(t){let e=!1,n=null;for(let o=0;o<t.length;o++)if(t[o]&&t[o].id&&l&&t[o].id.indexOf(l)>-1){e=!0,n=o;break}return!0===e&&null!==n?t.slice(0,n):t}function g(t){let e=0;return A(t)&&C(t)&&t.childNodes.forEach(t=>{3===t.nodeType?e+=t.textContent.trim().length:"A"===t.nodeName&&t.innerText&&t.innerText.length>n&&(e+=t.textContent.trim().length)}),e}function A(t){return!(t&&o&&o.contains(t))&&(!t||!t.hasAttribute("data-google-query-id")||(o=t,!1))}function C(t){return!(t&&r&&r.contains(t))&&(!(t&&t.classList&&t.classList.length>0&&t.classList.contains("trc_related_container")||t.hasAttribute("data-parent-placement-name"))||(r=t,!1))}function T(t,e){let n,o=0;const r=t.childNodes;for(let l=0;l<r.length;++l){const t=p(r[l]);if(o<t&&(n=r[l],o=t),TRC.dom.isAncestor(r[l],e))break}return{el:n,length:o}}function E(t){return t.getBoundingClientRect().top+window.pageYOffset}TRC.ArticleDetection={detectArticle:i,getAllTextLengthInElement:p},window._trcIsUTactive&&(TRC.ArticleDetection.getTaboolaContainers=a,TRC.ArticleDetection.isNotGoogleDFPAd=A,TRC.ArticleDetection.isNotTaboolaAd=C)}();

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
  captures_list: 0.55
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.011
  esindex: 0.013
  cdx.remote: 9.356
  LoadShardBlock: 275.859 (3)
  PetaboxLoader3.datanode: 301.343 (5)
  PetaboxLoader3.resolve: 246.972 (3)
  load_resource: 610.489 (2)
*/