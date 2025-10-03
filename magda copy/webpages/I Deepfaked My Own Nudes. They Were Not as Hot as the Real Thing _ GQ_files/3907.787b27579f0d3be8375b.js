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

(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[3907],{42820:(o,e,t)=>{const{asConfiguredComponent:a}=t(36380),{asThemedComponent:n}=t(3517),r=t(36125);o.exports=n(a(r,"ContentHeader"))},44122:(o,e,t)=>{const a=t(67294),n=t(45697),r=t(59185),{ActionBarWrapperContent:i,ActionBarWrapperComponent:s}=t(84945),{getVariationNames:c}=t(95545),{sizesFullName:l}=t(28657),d=({actionBarLargeScreenVariation:o,actionBarMobileScreenVariation:e,className:t,isActionBarStickyLargeScreen:n,actionBarButtons:c,articleLength:d,showActionBar:k})=>{if(!c||!(null==c?void 0:c.length)||!k)return null;const m=o?r[o]:r,u=e?r[e]:r;return o||e?a.createElement(i,{className:t,isActionBarStickyLargeScreen:n,actionBarHeight:d},a.createElement(s,null,a.createElement(m,{minScreenThreshold:l.xLarge,actionButtons:c,className:"large-screen"}),a.createElement(u,{maxScreenThreshold:l.large,actionButtons:c,className:"mobile"}))):a.createElement(i,{className:t,isActionBarStickyLargeScreen:n,actionBarHeight:d},a.createElement(s,null,a.createElement(r,{actionButtons:c,className:"default"})))};d.propTypes={actionBarButtons:n.arrayOf(n.oneOf(["audio","bookmark"])).isRequired,actionBarLargeScreenVariation:n.oneOf(c(r)),actionBarMobileScreenVariation:n.oneOf(c(r)),articleLength:n.number,className:n.string,isActionBarStickyLargeScreen:n.bool,showActionBar:n.bool},d.defaultProps={isActionBarStickyLargeScreen:!1,showActionBar:!1},o.exports=d},74914:(o,e,t)=>{const a=t(44122);o.exports=a},84945:(o,e,t)=>{const{default:a,css:n}=t(51117),{calculateSpacing:r,minScreen:i}=t(79720),{BREAKPOINTS:s}=t(85326),c=a.div.withConfig({displayName:"ActionBarWrapperComponent"})``,l=a.div.withConfig({displayName:"ActionBarWrapperContent"})`
  display: flex;
  justify-content: center;
  padding-bottom: ${r(4)};
  ${({isActionBarStickyLargeScreen:o,actionBarHeight:e})=>o&&n`
      ${i(s.lg)} {
        position: absolute;
        left: ${r(4)};
        z-index: 80;
        padding: 0;
        width: fit-content;
        height: ${e?`${e}px`:"100%"};
        ${c} {
          position: sticky;
          top: 50%;
          transition: all 300ms ease-in-out;
          height: fit-content;
        }
      }
    `}
`;o.exports={ActionBarWrapperContent:l,ActionBarWrapperComponent:c}},46919:(o,e,t)=>{const a=t(67294),{connect:n}=t(59800),r=t(45697),{useIntl:i}=t(36319),s=t(94184),c=t(99784).default,{asConfiguredComponent:l}=t(36380),d=t(57208),{googleAnalytics:k}=t(28601),m=t(94129),{saveThisStoryBookmarkIcon:u,savedToLibraryBookmarkIcon:g,loaderIcon:b}=t(94969),{ActionBarWrapper:p,ActionBarButton:h,ActionBarButtonDivider:f,ActionBarButtonText:y,ActionBarButtonSubText:B,ActionBarButtonIcon:v}=t(74655),S=({actionBarConfig:o,actionButtons:e,bookmarkId:t,buttonDirection:n,className:r,contentID:l,contentTitle:u,contentType:g,displayBookmarkAlert:b,documentUrl:S,doUpdateBookmarkedStatus:I,isBookmarkLoading:w,isUrlBookmark:x,maxScreenThreshold:T,minScreenThreshold:L,organizationID:A,shouldUseBookmarkV3:$,signInHed:C,signInHedSpanTag:V,signInMessage:M,signInModalConfig:U,user:D,userPlatform:H,variations:P={}})=>{var O;const N={bookmarkId:t,contentID:l,contentType:g,documentUrl:S,displayBookmarkAlert:b,doUpdateBookmarkedStatus:I,isUrlBookmark:x,organizationID:A,shouldUseBookmarkV3:$,signInHed:C,signInHedSpanTag:V,signInMessage:M,user:D,userPlatform:H},{formatMessage:E}=i(),{hideSecondaryButtonText:j=!1}=P,[_,R]=a.useState({}),{toggleBookmark:q}=m(N),{isVisible:Z,source:W}=U||{},z=(o,e,t={})=>{k.emitGoogleTrackingEvent(o,Object.assign({actionbar_button_type:e,actionbar_parent_id:l,actionbar_parent_title:u},t))};a.useEffect((()=>{R((o=>Object.assign(Object.assign({},o),{bookmark:{isActive:Boolean(Number(t)),inViewport:!1}})))}),[t]),a.useEffect((()=>{!Z&&"VERSO_BOOKMARKING"===W&&R((o=>Object.assign(Object.assign({},o),{bookmark:Object.assign(Object.assign({},(null==o?void 0:o.bookmark)||{}),{isInProcess:!1})})))}),[Z,W]),a.useEffect((()=>{var o;!1!==w&&D.isAuthenticated||!(null===(o=_.bookmark)||void 0===o?void 0:o.inViewport)||(R((o=>Object.assign(Object.assign({},o),{bookmark:Object.assign(Object.assign({},o.bookmark),{inViewport:!1})}))),z("actionbar-impression","bookmark",{actionbar_status:t?"active":"default"}))}),[null===(O=_.bookmark)||void 0===O?void 0:O.inViewport,w]),a.useEffect((()=>{if(window.document&&window.document.location){const o=d.parseQueryParams(window.location.search);o.action&&"addBookmark"===o.action&&D.isAuthenticated&&q()}}),[q,D.isAuthenticated]);const G=e=>{var t;const a=o[e];return(null===(t=_[e])||void 0===t?void 0:t.isActive)?E(c[a.afterActionLabel]):E(c[a.defaultLabel])},K=e=>{var t,a;const n=o[e];return(null===(t=_[e])||void 0===t?void 0:t.isInProcess)&&(null==n?void 0:n.loaderIcon)?n.loaderIcon:(null===(a=_[e])||void 0===a?void 0:a.isActive)?n.afterActionIcon:n.defaultIcon};return a.createElement(p,{"data-test-id":"ActionBar",buttonDirection:n,maxScreenThreshold:T,minScreenThreshold:L,onIntersectionViewport:(o,t)=>{o&&(e.forEach((o=>{"bookmark"===o&&R((o=>Object.assign(Object.assign({},o),{bookmark:Object.assign(Object.assign({},o.bookmark),{inViewport:!0})})))})),t())}},e.map(((i,c)=>{var l;const d=o[i];let k="";const m=j&&1===c;if(d){"audio"===i&&(k=" 45 minutes");const o=G(i);return a.createElement(a.Fragment,{key:i},a.createElement(h,{id:i,"aria-label":o+k,buttonDirection:n,onClick:o=>{((o,e)=>{switch(o){case"bookmark":z("actionbar-interaction","bookmark",{actionbar_status:t?"active":"default",actionbar_interaction_type:G(o)}),R((o=>Object.assign(Object.assign({},o),{bookmark:Object.assign(Object.assign({},o.bookmark),{isInProcess:!0})}))),q(e);break;case"audio":e.stopPropagation(),R(Object.assign(Object.assign({},_),{audio:{isActive:!_.audio||!_.audio.isActive}}))}})(i,o)},className:s({active:Boolean(null===(l=_[i])||void 0===l?void 0:l.isActive),[i]:i,[r]:r}),maxScreenThreshold:T},a.createElement(v,{dangerouslySetInnerHTML:{__html:K(i)},className:`${i}-button-icon`}),!m&&a.createElement(y,null,o,k&&a.createElement(B,null,k))),"row"===n&&c<e.length-1&&a.createElement(f,null))}return null})))};S.propTypes={actionBarConfig:r.objectOf(r.shape({afterActionIcon:r.string,afterActionLabel:r.string,defaultIcon:r.string,defaultLabel:r.string,loaderIcon:r.string})),actionButtons:r.arrayOf(r.oneOf(["audio","bookmark"])).isRequired,bookmarkId:r.number,buttonDirection:r.oneOf(["row","column"]),className:r.string,contentID:r.string,contentTitle:r.string,contentType:r.string,displayBookmarkAlert:r.func,documentUrl:r.string,doUpdateBookmarkedStatus:r.func,isBookmarkLoading:r.bool,isUrlBookmark:r.bool,maxScreenThreshold:r.string,minScreenThreshold:r.string,organizationID:r.string,shouldUseBookmarkV3:r.bool,signInHed:r.string,signInHedSpanTag:r.string,signInMessage:r.string,signInModalConfig:r.shape({isVisible:r.bool,source:r.string}),user:r.shape({amguuid:r.string,isAuthenticated:r.bool}),userPlatform:r.shape({federatedGraphqlUrl:r.string,siteCode:r.string,userPlatformProxy:r.string,xClientID:r.string}),variations:r.object},S.defaultProps={actionBarConfig:{bookmark:{afterActionIcon:g,afterActionLabel:"bookmarkSavedToLibrary",defaultIcon:u,defaultLabel:"bookmarkSaveThisStory",loaderIcon:b}},buttonDirection:"row",shouldUseBookmarkV3:!1},o.exports=n(((o,e)=>{const{coreDataLayer:{content:{contentType:t},site:{orgId:a}},"head.contentID":n,"head.canonicalUrl":r,"head.title":i,featureFlags:{shouldUseBookmarkV3:s},pageState:{bookmarkStatus:{bookmarkId:c,isUrlBookmark:l,isBookmarkLoading:d}},user:k,userPlatform:m,signInModalConfig:u}=o,{bookmarkDetails:g={},isPageScoped:b=!0}=e;return b?{bookmarkId:c,contentID:n,contentType:t,contentTitle:i,documentUrl:r,isBookmarkLoading:d,isUrlBookmark:l,organizationID:a,user:k,userPlatform:m,shouldUseBookmarkV3:s,signInModalConfig:u}:{bookmarkId:g.bookmarkId,contentID:g.contentId,contentType:t,contentTitle:i,documentUrl:r,isUrlBookmark:g.isUrlBookmark,organizationID:a,user:k,userPlatform:m,shouldUseBookmarkV3:s,signInModalConfig:u}}),(o=>({displayBookmarkAlert:()=>{o({type:"MERGE_KEY",key:"bookmarkAlert",value:{isVisible:!0}})},doUpdateBookmarkedStatus:e=>{o({type:"SET_KEY",key:"pageState.bookmarkStatus",value:e})}})))(l(S,"ActionBar"))},94969:(o,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.savedToLibraryBookmarkIcon=e.saveThisStoryBookmarkIcon=e.loaderIcon=e.tnySavedBookmarkIcon=e.tnySaveBookmarkIcon=e.tnySaveThisStoryBookmarkIcon=void 0,e.tnySaveThisStoryBookmarkIcon='<svg class="icon icon-bookmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Save this story</title><path class="icon-bookmark-fill" d="M20 23.9508L12.5 19.7312L5 23.9508V2.95081H14V3.93211H6V22.1845L12.5 18.5536L19 22.1845V8.83866H20V23.9508Z"></path><path class="icon-bookmark-fill" d="M23 3H20V0H19V3H16V4H19V7H20V4H23V3Z"></path></svg>',e.tnySaveBookmarkIcon='<svg class="icon icon-bookmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Save</title><path class="icon-bookmark-fill" d="M20 23.9508L12.5 19.7312L5 23.9508V2.95081H14V3.93211H6V22.1845L12.5 18.5536L19 22.1845V8.83866H20V23.9508Z"></path><path class="icon-bookmark-fill" d="M23 3H20V0H19V3H16V4H19V7H20V4H23V3Z"></path></svg>',e.tnySavedBookmarkIcon='<svg class="icon icon-bookmark icon-bookmark--activated" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Saved</title><path class="icon-bookmark-fill icon-bookmark--activated-outline" d="M20 24L12.5 19.7804L5 24V3H20V24ZM12.5 18.6028L19 22.2336V3.98131H6V22.2336L12.5 18.6028Z"></path><path class="icon-bookmark-fill icon-bookmark--activated-checkmark" d="M11.5541 13.7033L9 11.2033L9.66216 10.5552L11.5541 12.407L15.3378 8.70331L16 9.35146L11.5541 13.7033Z"></path></svg>',e.loaderIcon='<svg class="icon icon-loader" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path class="icon-loader-track" fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" />\n<path class="icon-loader-progress" d="M12 21C7.07368 21 3 16.9263 3 12H3.94737C3.94737 16.4526 7.54737 20.0526 12 20.0526C16.4526 20.0526 20.0526 16.4526 20.0526 12C20.0526 7.54737 16.4526 3.94737 12 3.94737V3C16.9263 3 21 7.07368 21 12C21 16.9263 16.9263 21 12 21Z" />\n<animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 0 0" to="360 0 0" repeatCount="indefinite"/>\n</svg>',e.saveThisStoryBookmarkIcon='<svg class="icon icon-bookmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Save this story</title><path class="icon-bookmark-stroke" d="M11.7661 16.3228L4.5 20.1695V3.5H19.5V20.1695L12.2339 16.3228L12 16.199L11.7661 16.3228Z" stroke-linecap="square"/></svg>',e.savedToLibraryBookmarkIcon='<svg class="icon icon-bookmark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Saved to library</title><path class="icon-bookmark--activated-fill" d="M11.7661 16.3228L4.5 20.1695V3.5H19.5V20.1695L12.2339 16.3228L12 16.199L11.7661 16.3228Z" stroke-linecap="square"/></svg>'},94129:(o,e,t)=>{const{useIntl:a}=t(36319),n=t(45697),r=t(47057),{default:i}=t(99784),s=t(8046),{trackBookmarkEvent:c}=t(68612),l="verso-story-page",d=({bookmarkId:o,contentID:e,contentType:t,displayBookmarkAlert:n,doUpdateBookmarkedStatus:d,isUrlBookmark:k,organizationID:m,shouldUseBookmarkV3:u,signInHed:g,signInHedSpanTag:b,signInMessage:p,user:h,userPlatform:f})=>{const{formatMessage:y}=a(),{amguuid:B="",isAuthenticated:v=!1}=h,{federatedGraphqlUrl:S,siteCode:I,userPlatformProxy:w,xClientID:x}=f,T=s(u),L=async o=>{o&&o.preventDefault();const{pathname:e,search:t}=window.location,a="action=addBookmark",n=t?`${e}${t}&${a}`:`${e}?${a}`;r.doDisplayModal({authSource:"sign-in-modal",source:"VERSO_BOOKMARKING",dangerousHed:g||"",dangerousHedSpanTag:b||"",dangerousDek:p||y(i.bookmarkSignInMessage),redirectURL:n,type:"default",analyticsType:"saved stories"})};return{toggleBookmark:async a=>v?o?(async e=>{e.preventDefault();try{const e=await T.proxyRemoveBookmark({amgUUID:B,bookmarkId:o,federatedGraphqlUrl:S,isUrlBookmark:k,source:l,userPlatformProxy:w,xClientID:x});if(e&&204!==e.status)return;o&&c(o,"unsave","action_bar"),d({bookmarkId:null,isUrlBookmark:null})}catch(o){console.error(o)}})(a):(async o=>{o&&o.preventDefault();try{const{statusCode:o,data:{id:a}={}}=await T.proxyCreateBookmark({amgUUID:B,copilotID:e,contentType:t,federatedGraphqlUrl:S,organizationID:m,siteCode:I,source:l,userPlatformProxy:w,xClientID:x});(201===o&&a||409===o)&&(a&&c(a,"save","action_bar"),d({bookmarkId:a,isUrlBookmark:!1}))}catch(o){console.error(o)}finally{window.history.replaceState({},document.title,document.location.pathname)}window.localStorage&&!window.localStorage.getItem("userHasUsedBookmarkFeature")&&(n(),window.localStorage.setItem("userHasUsedBookmarkFeature","true"))})(a):L(a),displaySignInModal:L}};d.propTypes={bookmarkId:n.number,contentID:n.string,contentType:n.string.isRequired,displayBookmarkAlert:n.func,documentUrl:n.string,doUpdateBookmarkedStatus:n.func,isUrlBookmark:n.bool,organizationID:n.string,shouldUseBookmarkV3:n.bool,signInHed:n.string,signInHedSpanTag:n.string,signInMessage:n.string,user:n.shape({amguuid:n.string,isAuthenticated:n.bool}).isRequired,userPlatform:n.shape({federatedGraphqlUrl:n.string,siteCode:n.string,userPlatformProxy:n.string,xClientID:n.string}).isRequired},d.defaultProps={shouldUseBookmarkV3:!1},o.exports=d},59185:(o,e,t)=>{const a=t(57);o.exports=a},74655:(o,e,t)=>{const{default:a,css:n}=t(51117),{BaseText:r}=t(74327),i=t(92727),{calculateSpacing:s,getColorStyles:c,maxScreen:l,minScreen:d,minMaxScreen:k}=t(79720),{minThresholds:m,maxThresholds:u}=t(515),g=a.span.withConfig({displayName:"ActionBarSecondaryButtonPrimaryIcon"})`
  display: flex;
  margin-right: ${s(1)};
`,b=a(r).withConfig({displayName:"ActionBarButtonText"})`
  white-space: nowrap;
`;b.defaultProps={as:"span",colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.utility.button-utility"};const p=a(r).withConfig({displayName:"ActionBarButtonSubText"})`
  padding-left: ${s(.5)};
`;p.defaultProps={as:"span",colorToken:"colors.interactive.base.dark",typeIdentity:"typography.definitions.utility.assistive-text"};const h=a.span.withConfig({displayName:"ActionBarButtonDivider"})`
  align-self: center;
  border-left: 1px solid;
  ${({theme:o})=>c(o,"border-color","colors.interactive.base.border")};
  height: ${s(3)};
`,f=a.button.withConfig({displayName:"ActionBarButton"})`
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: ${({buttonDirection:o})=>"column"===o&&"1px solid;"};
  border-radius: ${({buttonDirection:o})=>s("column"===o?1:6)};
  padding: 0 ${s(2)};
  height: ${s(6)};
  overflow: hidden;

  ${({buttonDirection:o})=>"column"===o?"\n        &:last-of-type:not(:first-of-type) {\n          border-top-left-radius: 0;\n          border-top-right-radius: 0;\n        }\n        &:not(:last-of-type) {\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        }\n      ":"row"===o?"\n        &:last-of-type:not(:first-of-type) {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0;\n        }\n        &:not(:last-of-type) {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0;\n        }\n      ":""};

  ${({theme:o})=>`\n      ${c(o,"border-color","colors.interactive.base.border")};\n      ${c(o,"background-color","colors.interactive.base.white")};\n    `};

  ${({buttonDirection:o})=>"column"===o&&`\n      min-width: ${s(7)};\n      height: ${s(7)};\n      &:last-of-type {\n        border-bottom: 0;\n      }\n    `}

  &:hover {
    text-decoration: none;
    ${({theme:o})=>c(o,"background-color","colors.interactive.base.highlight")};

    ${({maxScreenThreshold:o})=>o&&n`
        ${l(`${u[o]}px`)} {
          background-color: transparent;
        }
      `};
  }

  &:focus-visible {
    outline-style: auto;
  }

  &:focus {
    text-decoration: none;
  }

  ${g} .icon-bookmark-fill {
    ${({theme:o})=>c(o,"fill","colors.interactive.base.black")};
  }

  ${g} .icon-bookmark-stroke {
    ${({theme:o})=>c(o,"stroke","colors.interactive.base.black")};
  }

  ${g} .icon-loader {
    .icon-loader-track {
      ${({theme:o})=>c(o,"fill","colors.interactive.base.light")};
    }

    .icon-loader-progress {
      ${({theme:o})=>c(o,"fill","colors.interactive.base.brand-primary")};
    }
  }

  &.active {
    ${g} {
      .icon-bookmark--activated-outline {
        ${({theme:o})=>c(o,"fill","colors.interactive.base.brand-primary")};
      }

      .icon-bookmark--activated-checkmark {
        ${({theme:o})=>c(o,"fill","colors.interactive.base.black")};
      }

      .icon-bookmark--activated-fill {
        ${({theme:o})=>c(o,"fill","colors.interactive.base.brand-primary")};
      }
    }

    ${b} {
      ${({theme:o})=>c(o,"color","colors.interactive.base.brand-primary")};
    }
  }
`,y=a(i).withConfig({displayName:"ActionBarWrapper"})`
  display: none;
  flex-direction: ${({buttonDirection:o})=>`${o};`};
  justify-content: center;
  border: 1px solid;
  border-radius: ${s(6)};

  ${({buttonDirection:o})=>"column"===o&&`\n    border-radius: ${s(1)};\n    max-width: ${s(7.25)};\n    transition: max-width 300ms ease-in-out;\n\n    ${b} {\n      display: none;\n    }\n\n    ${g} {\n      margin-right: 0;\n    }\n\n    &:hover {\n      max-width: ${s(24)};\n      ${g} {\n        margin-right: ${s(1)};\n      }\n      ${b} {\n        display: unset;\n      }\n    }\n  `}

  ${({theme:o})=>`\n      ${c(o,"border-color","colors.interactive.base.border")};\n      ${c(o,"background-color","colors.interactive.base.white")};\n    `};

  ${({maxScreenThreshold:o,minScreenThreshold:e})=>{const t=e?m[e]:0;if(o){const e=u[o];return n`
        ${k(`${t}px`,`${e}px`)} {
          display: inline-flex;
        }
      `}return n`
      ${d(`${t}px`)} {
        display: inline-flex;
      }
    `}};
`;o.exports={ActionBarWrapper:y,ActionBarButton:f,ActionBarButtonDivider:h,ActionBarButtonText:b,ActionBarButtonSubText:p,ActionBarButtonIcon:g}},99784:(o,e,t)=>{Object.defineProperty(e,"__esModule",{value:!0});const a=t(36319);e.default=(0,a.defineMessages)({audioPrimaryLabel:{id:"AudioPrimaryLabel.Listen",defaultMessage:"Listen",description:"Listen"},audioSecondaryLabel:{id:"AudioSecondaryLabel.NowPlaying",defaultMessage:"Now playing",description:"Now playing"},bookmarkSaveThisStory:{id:"BookmarkPrimaryLabel.SaveThisStory",defaultMessage:"Save this story",description:"Save this story"},bookmarkSavedToLibrary:{id:"BookmarkPrimaryLabel.SavedToLibrary",defaultMessage:"Saved to library",description:"Saved to library"},bookmarkSave:{id:"BookmarkPrimaryLabel.Save",defaultMessage:"Save",description:"Save"},bookmarkSaved:{id:"BookmarkPrimaryLabel.Saved",defaultMessage:"Saved",description:"Saved"},bookmarkSignInMessage:{id:"Bookmark.SignInMessage",defaultMessage:"After signing in, you can save stories and easily revisit them on any device—even off-line.",description:"Bookmark sign in message"}})},57:(o,e,t)=>{const{asVariation:a}=t(95545),n=t(46919);n.SecondaryButtonWithNoText=a(n,"SecondaryButtonWithNoText",{hideSecondaryButtonText:!0}),n.Stacked=a(n,"Stacked",{},{buttonDirection:"column"}),o.exports=n}}]);

}
/*
     FILE ARCHIVED ON 10:02:15 Oct 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:58:40 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.698
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.012
  esindex: 0.014
  cdx.remote: 8.047
  LoadShardBlock: 69.71 (3)
  PetaboxLoader3.datanode: 84.553 (5)
  load_resource: 1290.903 (2)
  PetaboxLoader3.resolve: 1233.825
*/