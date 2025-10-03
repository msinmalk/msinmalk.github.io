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

!function(t){try{var n="https://",e="aHR0cHM6Ly9waXBzLnRhYm9vbGEuY29t",r=["YXJjaGl0ZWN0dXJl","cGxhdGZvcm1WZXJzaW9u","dWFGdWxsVmVyc2lvbg=="],a=["YnJhbmRz","bW9iaWxl","bW9kZWw=","cGxhdGZvcm0=","cGxhdGZvcm1WZXJzaW9u","dWFGdWxsVmVyc2lvbg=="];t.TRC.cdsPips={userId:null,getHttpsPrefix:function t(){return n},doNothing:function t(){return!0},safeGetTfaConfig:function n(e,r,a){return t._tfa&&t._tfa.config&&t._tfa.config.safeGet&&t._tfa.config.safeGet(e,r,a)},safeGetRboxConfig:function t(n){var e;return(TRCImpl?TRCImpl.global:{})[n]},prepareGenericRequest:function n(e,r){var a,o=new(t.XDomainRequest||t.XMLHttpRequest);return o.open(e,r),o.onload=this.doNothing,o.onerror=this.doNothing,o.onprogress=this.doNothing,o},tryToReadUserIdFromLocalStorage:function t(){try{return window.localStorage["taboola global:user-id"]}catch(t){return null}},getUserId:function n(){var e=t.TFASC&&t.TFASC.tfaUserId&&"function"==typeof t.TFASC.tfaUserId.getUserId?t.TFASC.tfaUserId.getUserId():null,r=t.TRC.pageManager&&"function"==typeof t.TRC.pageManager.getUserId?t.TRC.pageManager.getUserId():null,a=TRC.cdsPips.tryToReadUserIdFromLocalStorage();return e||r||a},sendFinalReq:function n(e){var r="".concat(this.getHttpsPrefix(),"cds.taboola.com?uid=").concat(this.userId),a;(null!==e[0]&&(r+="&uad=".concat(e[0])),e[1]&&(e[1].platform&&(r+="&ptf=".concat(t.btoa(e[1].platform)),e[1].platformVersion&&(r+="&ptfv=".concat(t.btoa(e[1].platformVersion)))),e[1].model&&(r+="&mdl=".concat(t.btoa(e[1].model))),e[1].uaFullVersion&&(r+="&ufv=".concat(t.btoa(e[1].uaFullVersion))),e[1].brands&&(r+=this.parseFullVersionList(e[1].brands)),"mobile"in e[1]&&(r+="&mbl=".concat(t.btoa(e[1].mobile)))),r!=="".concat(this.getHttpsPrefix(),"cds.taboola.com?uid=").concat(this.userId))&&this.prepareGenericRequest("GET",r).send()},parseFullVersionList:function n(e){for(var r="",a=0;a<e.length;a++)r+="&bnd=".concat(t.btoa(e[a].brand),"&bndv=").concat(t.btoa(e[a].version));return r},sendSimpleReq:function t(){var n="".concat(this.getHttpsPrefix(),"cds.taboola.com?uid=").concat(this.userId),e;this.prepareGenericRequest("GET",n).send()},fetchUserAgentData:function n(){return new Promise(function(n){try{navigator&&navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues?navigator.userAgentData.getHighEntropyValues(r.map(function(n){return t.atob(n)})).then(function(e){var r={};a.forEach(function(n){var a=t.atob(n);a in e&&(r[a]=e[a])}),Object.keys(r).length>0?n(r):n(null)}):n(null)}catch(t){n(null)}})},sendUadRequest:function n(){var r=this;return new Promise(function(n,a){if(r.safeGetTfaConfig("cds:send-uad-req",!1)||r.safeGetRboxConfig("cds:send-uad")){var o=r.prepareGenericRequest("GET",t.atob(e));o.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var t=o.responseText;t?n("NULL"!==t?t:null):(__trcWarn("cds: error in pips - status ".concat(this.status,", return null")),n(null))}else __trcWarn("cds: error in pips - status ".concat(this.status,", return null")),n(null)},o.timeout=3e4,o.ontimeout=function(){__trcWarn("cds: error in pips - timeout"),n(null)},o.send()}else n(null)})},init:function n(){var e=this;t.TRC.cdsPips.cdsInitialized||(t.Promise?(t.__trcWarn=t.__trcWarn||function t(){},this.userId=this.getUserId(),this.userId&&Promise.all([this.sendUadRequest(),this.fetchUserAgentData()]).then(function(t){return e.sendFinalReq(t)},function(){return e.sendSimpleReq()}),t.TRC.cdsPips.cdsInitialized=!0):t.TRC.cdsPips.cdsInitialized=!0)}},t.TRC.cdsPips.init()}catch(t){__trcError("Error running cds",t)}}(window);

}
/*
     FILE ARCHIVED ON 10:09:19 Oct 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:59:14 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.7
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.011
  esindex: 0.012
  cdx.remote: 5.563
  LoadShardBlock: 367.467 (6)
  PetaboxLoader3.datanode: 169.473 (8)
  PetaboxLoader3.resolve: 1074.315 (3)
  load_resource: 991.552 (2)
*/