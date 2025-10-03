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

var beaconHostname="infinityid.condenastdigital.com";function setOptions(cookie,options){return cookie.push("expires="+options.expires),cookie.push("path="+options.path),cookie=(!options.domain||cookie.push("domain="+options.domain))&&cookie,cookie=(!options.secure||cookie.push("secure"))&&cookie}var cookie={get:function(name){for(var cookie,cookies=document.cookie.split("; "),c=0;c<cookies.length;c++)if((cookie=cookies[c].split("="))[0]===name)return decodeURIComponent(cookie[1]);return!1},set:function(name,cValue,cOptions){if(name)return cOptions=cOptions||{},cValue=cValue||!0,name=name+"="+(!!cOptions.encode||!0?encodeURIComponent(cValue):cValue),cValue=[name],cOptions.path=cOptions.path||"/",cOptions.expires=new Date(+new Date+36e5*cOptions.expires),cValue=setOptions(cValue,cOptions),document.cookie=cValue.join("; "),name}};function ajax(opts){return new Promise(function(resolve,reject){var xhr=new XMLHttpRequest;xhr.open("GET",opts.URL),xhr.withCredentials=opts.cors||!1,xhr.onreadystatechange=function(){4===this.readyState&&(200<=this.status&&this.status<300?resolve(this.responseText):reject(new Error(this)))},xhr.send()})}function resetOurXid(){return ajax({URL:"//web.archive.org/web/20231008100219/https://infinityid.condenastdigital.com/?rand="+Date.now(),cors:!0}).then(function(newXid){return newXid&&cookie.set("CN_xid",newXid,{path:"/",expires:4320}),newXid}).catch(function(err){console.log("error resetting xid",err)})}function propagateXid(hostname){var xid=cookie.get("CN_xid");return!(!xid||window.location.hostname===hostname)&&new Promise(function(resolve,reject){var beacon=new Image;beacon.onerror=function(beaconError){console.warn("[ hotzones ads plugin 4d ] XID not propagated for ",hostname,beaconError),hostname===beaconHostname?resetOurXid().then(function(newXid){resolve(newXid)}):reject()},beacon.onload=function(){resolve()},beacon.src="https://"+hostname+"/infinityid/beacon?id="+encodeURIComponent(xid)})}function pixel(conf){var propagateHosts,ready;function pixelLoadHosts(){propagateHosts.forEach(function(hostname){propagateXid(hostname)})}function pixelLoad(){var canBeacon=propagateXid(beaconHostname);canBeacon&&canBeacon.then(pixelLoadHosts)}cookie.get("xid1")&&(propagateHosts=["www.allure.com","www.architecturaldigest.com","www.bonappetit.com","www.cntraveler.com","www.epicurious.com","www.glamour.com","www.gq.com","www.newyorker.com","pitchfork.com","www.self.com","www.teenvogue.com","www.them.us","www.vanityfair.com","www.vogue.com","www.wired.com"],ready=document.readyState,(document.attachEvent?"complete"===ready:"loading"!==ready)?pixelLoad():document.addEventListener("DOMContentLoaded",pixelLoad))}window.cns&&window.cns.config&&window.cns.config.plugins&&window.cns.config.plugins["4d_xid_pixels"]&&window.cns.config.plugins["4d_xid_pixels"].enabled&&pixel();

}
/*
     FILE ARCHIVED ON 10:02:19 Oct 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:58:39 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.674
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.011
  esindex: 0.011
  cdx.remote: 11.69
  LoadShardBlock: 49.992 (3)
  PetaboxLoader3.datanode: 73.175 (5)
  load_resource: 149.403 (2)
  PetaboxLoader3.resolve: 118.379 (2)
*/