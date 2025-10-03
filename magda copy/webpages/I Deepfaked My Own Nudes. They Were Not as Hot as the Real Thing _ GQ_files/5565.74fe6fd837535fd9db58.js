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

(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[5565],{47211:function(e,n,t){var i=this&&this.__rest||function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]])}return t};const a=t(45697),o=t(67294),{useState:r,useEffect:l}=t(67294),{connect:s}=t(59800),{loadData:d}=t(90949),c=t(69379),g=t(26895),{LoaderWrapper:p}=t(51159),h=t(62702),{trackComponent:u}=t(40199),m=e=>{var{dataUrl:n,storeKey:t,data:a,setData:s,loaderType:m="Circle"}=e,y=i(e,["dataUrl","storeKey","data","setData","loaderType"]);o.useEffect((()=>{u("GroupedNavigationContainer")}),[]);const[v,f]=r(!1),[b,C]=r(!1),w=g[m];return l((()=>{!async function(){if(!a&&n){f(!0);try{const e=await d({url:`${n}`}),i=e?e[t]:[];s(t,i)}catch(e){C(!0)}finally{f(!1)}}}()}),[n]),o.createElement(o.Fragment,null,b&&o.createElement(h.ContentCenterNoBackground,{ariaLive:"polite",className:"brand-background__lede",dangerousHed:"Oops",dangerousDek:"something went wrong"}),v&&o.createElement(p,null,o.createElement(w,null)),a&&o.createElement(c,Object.assign({groupedLinks:a},y)))};m.propTypes={analyticsEventForFilter:a.string,data:a.array,dataUrl:a.string.isRequired,filterLabel:a.string,hasAtoZIndex:a.bool,hasFilter:a.bool,loaderType:a.string,setData:a.func.isRequired,storeKey:a.string.isRequired},e.exports=s(((e,{storeKey:n})=>{var t;return{data:(null===(t=e.groupedNavigation)||void 0===t?void 0:t[n])||null}}),(e=>({setData:(n,t)=>{e({type:"MERGE_KEY",key:"groupedNavigation",value:{[n]:t}})}})))(m)},24616:(e,n,t)=>{e.exports=t(47211)},51159:(e,n,t)=>{const i=t(51117).default,{calculateSpacing:a}=t(79720),o=i.div.withConfig({displayName:"LoaderWrapper"})`
  padding-top: ${a(6)};
  text-align: center;
`;e.exports={LoaderWrapper:o}},66744:(e,n,t)=>{const i=t(67294),{useState:a,useRef:o,useEffect:r}=t(67294),l=t(45697),{useIntl:s}=t(36319),d=t(23493),c=t(58376).Z,{connector:g}=t(92078),{trackComponent:p}=t(40199),{googleAnalytics:h}=t(28601),u=t(24616),m=t(22397),y=t(81768),v=t(55754),{INITIAL_STATE:f,computeScroll:b}=t(37332),{ChannelNavigationWrapper:C,ChannelNavigationContainer:w,ChannelNavigationContent:k,ChannelNavigationLogoWrapper:N,ChannelNavigationLogo:$,ChannelNavigationScrollViewLogo:x,ChannelNavigationLinksWrapper:L,ChannelNavigationLinksList:E,ChannelNavigationLinkItem:I,ChannelNavigationLink:S,ChannelNavigationChannelDrawer:A,ChannelNavigationGroupedNavigation:T,ChannelNavigationGlobalDrawer:O,ChannelNavigationAccount:D,ChannelNavigationToggle:G,ChannelNavigationSecondaryMenu:_}=t(38621),M=({accountProps:e,isFixed:n,logo:t,isAccountsEnabled:l,scrollViewLogo:g,channelNavigationLinks:M,channelNavigationLogoBaseUrl:F,overrideChannelNavigationLinks:W,secondaryMenuProps:j,showExternalProfileLink:U,loaderType:B,onNavigationLinkClick:P,activeLinkIndex:Z,user:R,hideLinksOnMobile:z,hideDrawerScroll:H})=>{i.useEffect((()=>{p("ChannelNavigation")}),[]);const[V,q]=a(!1),[K,Y]=i.useState(!1),[X,J]=a(null),[Q,ee]=a(f),ne=o(null),{formatMessage:te}=s(),ie=W||M;i.useEffect((()=>{const e=e=>{"Escape"===e.key&&K&&(h.emitGoogleTrackingEvent("hamburger-menu-"+(K?"collapsed":"expanded")),Y(!1))};return K&&window.addEventListener("keyup",e),()=>window.removeEventListener("keyup",e)}),[K]);const ae=()=>{ee((e=>{var n,t,i,a;const o=b(e),r=(null!==(t=null===(n=null===document||void 0===document?void 0:document.body)||void 0===n?void 0:n.scrollHeight)&&void 0!==t?t:0)-(null!==(a=null===(i=null===document||void 0===document?void 0:document.body)||void 0===i?void 0:i.clientHeight)&&void 0!==a?a:0);return Object.assign(Object.assign({},o),{scrollHeight:r})}))};r((()=>{const e=d(ae,100);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[n]);const{direction:oe,pageYOffset:re,scrollHeight:le}=Q,se=K?y:v,de=n||re>0,ce=n||"up"!==oe&&re>0||le===re;return ie&&ie.length?i.createElement(C,{isFixed:de},i.createElement(w,{ref:ne,"data-testid":"channel-navigation",hideLinksOnMobile:z},i.createElement(k,{isFixed:de,isScrollingDown:ce},t&&g&&i.createElement(N,{isFixed:de,isScrollingDown:ce},i.createElement("a",{href:F},i.createElement($,Object.assign({isScrollingDown:ce},t)),ce&&i.createElement(x,Object.assign({isScrollingDown:ce},g))))),i.createElement(L,{isScrollingDown:ce,hideLinksOnMobile:z},i.createElement(E,{"data-journey-hook":"channel-navigation"},ie.map(((e,n)=>{const t=void 0===Z||n===Z;return i.createElement(I,{key:e.key||e.type},i.createElement(S,{tabIndex:0,isActive:t,label:e.text,href:e.href,as:"a",isInline:!0,onClick:n=>{e.apiEndpoint&&(n.preventDefault(),q(!0),J(Object.assign({},e))),P&&P(e),h.emitGoogleTrackingEvent(e.analyticsEvent)}},e.text))})))),U&&i.createElement(D,{isScrollingDown:ce,isAccountWithAvatar:!1,signInLabel:null==U?void 0:U.signInLabel,signInLink:null==U?void 0:U.signInLink,user:{isAuthenticated:!1}}),!U&&l&&R&&i.createElement(D,{isScrollingDown:ce,isAccountWithAvatar:e.accountIconInverted&&!0,accountLinks:e.accountLinks,savedStoriesLabel:null==e?void 0:e.savedStoriesLabel,accountBookmarkAlertLabel:null==e?void 0:e.accountBookmarkAlertLabel,accountLabel:null==e?void 0:e.accountLabel,accountAvatar:e.accountIconInverted,signInLabel:null==e?void 0:e.signInLabel,signInLink:null==e?void 0:e.signInLink,signOutLink:null==e?void 0:e.signOutLink,user:R,className:"standard-navigation__section--utility-links-login",tooltip:e.tooltip}),i.createElement(G,{tabIndex:0,isIconButton:!0,isScrollingDown:ce,ButtonIcon:se,label:"Open Navigation Menu",onClickHandler:()=>{h.emitGoogleTrackingEvent("hamburger-menu-"+(K?"collapsed":"expanded")),Y(!K)},role:"button","aria-expanded":K})),!!X&&i.createElement(A,{isOpen:V,onClose:()=>{q(!1)},hideDrawerScroll:H,contentLabel:te(c.channelDrawerContentLabel),showCloseButton:!0,className:"channel-navigation-drawer"},i.createElement(T,null,i.createElement(u,{storeKey:X.key,dataUrl:X.apiEndpoint,hasAtoZIndex:X.hasAtoZIndex,loaderType:B,hasFilter:X.hasFilter,filterLabel:X.filterLabel}))),i.createElement(O,{isOpen:K,onClose:()=>ee(!K),contentLabel:"Navigation Menu"},i.createElement(_,{isFixed:de},!l&&U?i.createElement(m,Object.assign({},j,{user:{isAuthenticated:!1},isAccountsEnabled:!0,contentAlign:"center"})):i.createElement(m,Object.assign({accountProps:e},j,{user:R,isAccountsEnabled:l,contentAlign:"center"}))))):null},F=l.shape({text:l.string,key:l.string,apiEndpoint:l.string});M.defaultProps={accountProps:{accountLinks:[]},hideLinksOnMobile:!1,isAccountsEnabled:!1},M.propTypes={accountProps:l.object,activeLinkIndex:l.number,channelNavigationLinks:l.arrayOf(F),channelNavigationLogoBaseUrl:l.string,hideDrawerScroll:l.bool,hideLinksOnMobile:l.bool,isAccountsEnabled:l.bool,isFixed:l.bool,loaderType:l.string,logo:l.object,onNavigationLinkClick:l.func,overrideChannelNavigationLinks:l.arrayOf(F),scrollViewLogo:l.object,secondaryMenuProps:l.object,showExternalProfileLink:l.object,user:l.shape({isAuthenticated:l.bool.isRequired})},M.displayName="ChannelNavigation",e.exports=g(M,{keysToPluck:["user","isAccountsEnabled","accountProps"]})},15565:(e,n,t)=>{const{asConfiguredComponent:i}=t(36380),a=t(66744);e.exports=i(a,"ChannelNavigation")},38621:(e,n,t)=>{const i=t(51117).default,{calculateSpacing:a,getColorToken:o,getColorStyles:r,getTypographyStyles:l,getZIndex:s,maxScreen:d}=t(79720),{hideVisually:c}=t(65496),{BREAKPOINTS:g,ZINDEX_MAP:p}=t(85326),{maxThresholds:h}=t(28657),u=t(7279),m=t(38167),y=t(63030),v=t(48655),f=t(70009),{SecondaryMenuAccount:b}=t(51275),{StandardNavigationDropdown:C,StandardNavigationAccountLabel:w,AccountDropdownToggleIcon:k,NavigationAccountSignIn:N,StandardNavigationSuccessLoginAlert:$,NavigationAccountIconWrapper:x,JourneyUnitDivider:L}=t(87649),{GridItem:E}=t(14134),{SignOutButtonWrapper:I}=t(7042),{AlertMessage:S}=t(19195),A=i.nav.withConfig({displayName:"ChannelNavigationWrapper"})`
  position: relative;
  z-index: ${p.persistentTopLayer};
  max-height: ${a(24)};
  ${({isFixed:e})=>e&&"\n      position: fixed;\n      top: 0;\n      right: 0;\n      left: 0;\n      "};
`;A.displayName="ChannelNavigationWrapper";const T=i.div.withConfig({displayName:"ChannelNavigationContainer"})`
  position: relative;
  ${({hideLinksOnMobile:e})=>`padding-bottom: ${a(e?0:7)};`}

  @media (min-width: ${g.md}) {
    border-bottom: 1px solid rgba(51, 51, 51, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.background")};
    padding-bottom: 0;
  }
`,O=i.div.withConfig({displayName:"ChannelNavigationContent"})`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  z-index: 1;
  margin: 0 auto;
  border-bottom: 1px solid
    ${({theme:e})=>o(e,"colors.consumption.lead.inverted.divider")};
  background: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.background")};
  @media (min-width: ${g.md}) {
    flex-wrap: ${({isScrollingDown:e})=>e?"nowrap":"wrap"};
  }
`,D=i.div.withConfig({displayName:"ChannelNavigationLogoWrapper"})`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: ${a(1)};

  @media (min-width: ${g.md}) {
    ${({isScrollingDown:e})=>e?`\n      left: ${a(3)};\n      position: absolute;\n      padding: ${a(1)};\n      width: unset;\n    `:`\n      width:100vw; \n      padding: ${a(1)} 0;\n    `}
  }
`,G=i(y).withConfig({displayName:"ChannelNavigationLogo"})`
  width: 96px;
  @media (min-width: ${g.md}) {
    display: flex;
    padding: ${a(1)} 0;
    width: 168px;
    height: 88px;
    ${({isScrollingDown:e})=>e&&`\n        ${c()}\n      `};
  }
`,_=i(y).withConfig({displayName:"ChannelNavigationScrollViewLogo"})`
  @media (max-width: ${g.md}) {
    ${c()}
  }
  padding: ${a(.5)} 0;
  width: 83px;
  height: unset;
`,M=i(v.NoMargins).withConfig({displayName:"ChannelNavigationLinksWrapper"})`
  > ${E} {
    grid-column: 1;
    margin: 0 auto;
    text-align: center;
    @media (min-width: ${g.md}) {
      grid-column: 2 / span 10;
    }
  }

  position: absolute;
  top: auto;
  transition: transform 0.5s ease-in-out;
  background: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.background")};
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  ${({isScrollingDown:e})=>e?"transform: translateY(-100%);":"transform: translateY(0%);"}

  @media (min-width: ${g.md}) {
    display: grid;
    position: initial;
    align-items: center;
    justify-content: center;
    transform: none;
    margin: 0 calculateSpacing(14.5);
    height: 64px;
  }

  @media (max-width: ${h.md}px) {
    ${({hideLinksOnMobile:e})=>e?`${c()};`:`padding: ${a(2)} 0 ${a(2)}\n      ${a(3)};\n      &::after {\n        background: linear-gradient(\n          to right,\n          rgba(0, 0, 0, 0.01) 31.25%,\n          ${({theme:e})=>o(e,"colors.consumption.lead.inverted.background")}\n            100%\n        );\n        content: '';\n        height: ${a(4)};\n        width: 48px;\n        bottom: ${a(2)};\n        right: 0;\n        position: sticky;\n        pointer-events: none;`}
  }
`,F=i.ul.withConfig({displayName:"ChannelNavigationLinksList"})`
  display: flex;
  margin: 0 auto;
  list-style: none;
  text-align: center;
  padding-inline-start: 0;

  @media (max-width: ${g.md}) {
    ${({hideLinksOnMobile:e})=>e?`${c()};`:""}
  }
`,W=i.li.withConfig({displayName:"ChannelNavigationLinkItem"})`
  padding-right: ${a(2)};

  &:last-child {
    padding-right: 0;
  }

  @media (min-width: ${g.md}) {
    margin-right: 0;
    padding-right: ${a(3)};
  }
`,j=i.a.withConfig({displayName:"ChannelNavigationLink"})`
  ${({theme:e})=>l(e,"typography.definitions.foundation.link-primary")}

  border: none;
  min-width: auto;
  text-decoration: none;
  white-space: nowrap;
  color: rgb(
    ${({theme:e})=>o(e,"colors.consumption.lead.inverted.link",{rgbOnly:!0})},
    ${({isActive:e})=>e?"1":"0.6"}
  );

  &:hover {
    color: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.link-hover")};
  }
`,U=i(m.Right).withConfig({displayName:"ChannelNavigationChannelDrawer"})`
  &&& {
    ${({hideDrawerScroll:e})=>e&&"\n        height: 100%;\n    "}
  }
  @media (min-width: ${g.md}) {
    width: 400px;
    max-width: 400px;

    && {
      height: 100%;
    }
  }
`,B=i.div.withConfig({displayName:"ChannelNavigationGroupedNavigation"})`
  padding: 0 ${a(4)} ${a(2)};
  height: 100%;
`,P=i(m).withConfig({displayName:"ChannelNavigationGlobalDrawer"})`
  height: auto;
`,Z=i(f).withConfig({displayName:"ChannelNavigationAccount"})`
  position: absolute;
  right: ${a(3)};
  border: none;
  background: transparent;
  padding: ${a(1)} ${a(1.5)};

  @media (min-width: ${g.md}) {
    left: inherit;
    padding: 0;
    min-width: auto;
  }

  &&&.standard-navigation-account {
    position: absolute;
    top: ${({isScrollingDown:e})=>a(e?1.4:14.4)};
    margin-right: ${({isAccountWithAvatar:e})=>a(e?4:3)};
    margin-left: ${a(1.5)};
    width: ${a(12)};
    height: ${a(6)};
    white-space: nowrap;
  }

  ${S} {
    white-space: normal;
  }

  @media (max-width: ${g.md}) {
    // The below line is to surface SignIn in mobile devices with avatar enabled
    // and hide the SignIn in mobile devices if avatar is not enabled
    ${({isAccountWithAvatar:e})=>!e&&"display: none;"}
    &&&.standard-navigation-account {
      top: ${a(.4)};
      z-index: 1;
      margin-right: ${a(2)};
    }
  }

  ${w} {
    justify-content: flex-end;
    color: ${({theme:e})=>o(e,"colors.interactive.base.white")};

    &:hover,
    &:link,
    &:visited,
    &:active {
      color: ${({theme:e})=>o(e,"colors.interactive.base.white")};

      svg {
        path {
          fill: ${({theme:e})=>o(e,"colors.interactive.base.white")};
        }
      }
    }

    ${x}:hover {
      ${({theme:e})=>r(e,"background","colors.interactive.base.dark")};
      border-color: transparent;
    }

    // Since, there is no journey unit rendered in ChannelNav,
    // explicitly setting the display of the divider line to none
    ${L} {
      display: none;
    }
  }

  .standard-navigation-account--icon,
  ${k} {
    svg {
      path {
        fill: ${({theme:e})=>o(e,"colors.interactive.base.white")};
      }
    }
  }

  ${C} {
    top: ${a(6)};
    right: ${a(.8)};
    background-color: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.background")};
    color: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.link")};

    &::before,
    &::after {
      content: none;
    }

    @media (min-width: ${g.md}) {
      right: ${a(.4)};
    }
  }

  ${C} .account-links__navigation {
    background-color: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.background")};

    .navigation__list-item {
      &:hover {
        background-color: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.background")};
      }

      .navigation__link {
        ${({theme:e})=>l(e,"typography.definitions.foundation.link-secondary")};
        color: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.link")};
      }
    }
  }

  ${N} {
    ${({theme:e})=>r(e,"color","colors.consumption.body.inverted.body")};
  }

  ${C}

  ${I}.account-links__sign-out {
    ${({theme:e})=>l(e,"typography.definitions.foundation.link-secondary")};
    color: ${o("colors.consumption.lead.inverted.link")};

    &:hover {
      background-color: ${o("colors.consumption.lead.standard.divider")};
      color: ${o("colors.consumption.lead.standard.link")};
    }
  }

  ${$} {
    top: ${a(6.75)};
    background-color: ${o("colors.interactive.base.black")};
    ${({theme:e})=>r(e,"border-color","colors.discovery.body.black.border")};

    ${d(g.md)} {
      left: -${a(30)};
    }

    .alert-arrow {
      &::before {
        border-color: transparent transparent
          ${o("colors.discovery.body.black.border")};
      }

      &::after {
        border-color: transparent transparent
          ${o("colors.interactive.base.black")};
      }
    }

    .alert-message {
      padding: ${a(3)} ${a(2)};
      max-width: fit-content;
      white-space: normal;
      ${({theme:e})=>r(e,"color","colors.consumption.lead.inverted.context-signature")};
    }

    .close-alert-button {
      svg {
        ${({theme:e})=>r(e,"fill","colors.interactive.base.white")};
      }
    }
  }
`,R=i(u.Utility).withConfig({displayName:"ChannelNavigationToggle"})`
  position: absolute;
  top: 14px;
  right: ${a(2)};
  z-index: ${s("dropdown")};
  border: none;
  background: transparent;
  padding: ${a(1)} ${a(1.5)};
  width: ${a(4)};
  height: ${a(4)};
  @media (min-width: ${g.md}) {
    top: ${({isScrollingDown:e})=>e?a(2.5):"124px"};
    left: inherit;
    padding: 0;
    min-width: auto;
  }

  & > div {
    position: absolute;
  }

  path {
    fill: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.link")};
  }

  &:focus {
    outline: 2px auto -webkit-focus-ring-color;
    border: unset;
    background: transparent;
  }

  &:hover {
    border-width: unset;
    border-style: none;
    border-color: transparent;
    background: transparent;

    path {
      fill: ${({theme:e})=>o(e,"colors.consumption.lead.inverted.link-hover")};
    }
  }
`,z=i.div.withConfig({displayName:"ChannelNavigationSecondaryMenu"})`
  padding-top: ${({isFixed:e})=>e?0:"62px"};
  height: 100%;
  ${b} {
    display: block;
  }

  @media (min-width: ${g.md}) {
    padding-top: ${({isFixed:e})=>e?0:"160px"};
  }

  @media (min-width: ${g.lg}) {
    height: 100vh;
    ${b} {
      display: none;
    }
  }
`;e.exports={ChannelNavigationWrapper:A,ChannelNavigationContainer:T,ChannelNavigationContent:O,ChannelNavigationLogoWrapper:D,ChannelNavigationLogo:G,ChannelNavigationScrollViewLogo:_,ChannelNavigationLinksList:F,ChannelNavigationLinksWrapper:M,ChannelNavigationLinkItem:W,ChannelNavigationLink:j,ChannelNavigationChannelDrawer:U,ChannelNavigationGlobalDrawer:P,ChannelNavigationGroupedNavigation:B,ChannelNavigationAccount:Z,ChannelNavigationToggle:R,ChannelNavigationSecondaryMenu:z}},58376:(e,n,t)=>{const i=t(36319);n.Z=(0,i.defineMessages)({toggleLabel:{id:"ChannelNavigation.ToggleLabel",defaultMessage:"Open Navigation Menu",description:"ChannelNavigation component toggle label"},channelDrawerContentLabel:{id:"ChannelNavigation.ChannelDrawerContentLabel",defaultMessage:"Runway filters navigation",description:"ChannelNavigation component channel drawer content label"},globalDrawerContentLabel:{id:"ChannelNavigation.GlobalDrawerContentLabel",defaultMessage:"Navigation Menu",description:"ChannelNavigation component global drawer content label"}})},20578:function(e,n,t){var i=this&&this.__rest||function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]])}return t};const a=t(67294),o=t(45697),r=t(94184),l=e=>{var{fillColor:n="#000",width:t="100px",height:o="100px",margin:l="20px",className:s=""}=e,d=i(e,["fillColor","width","height","margin","className"]);return a.createElement("svg",Object.assign({style:{width:t,height:o,margin:l,display:"inline-block"},className:r(s,"icon icon-loader")},d,{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0"}),a.createElement("path",{fill:n,d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"},a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})))};l.propTypes={className:o.string,fillColor:o.string,height:o.string,margin:o.string,width:o.string},e.exports=l},20684:(e,n,t)=>{const i=t(67294),{VogueWrapper:a}=t(36832);e.exports=()=>i.createElement(a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 36",textRendering:"geometricPrecision",shapeRendering:"geometricPrecision",className:"loader-vogue"},i.createElement("path",{id:"E",className:"st0",d:"M23.2612,0L23.2612,11.7649C23.2612,11.8148,23.0279,11.8315,23.0279,11.7649C23.0279,11.6982,23.2612,0.333282,12.7129,0.333282L8.76346,0.333282C8.54683,0.333282,8.41352,0.36661,8.41352,0.549915L8.41352,15.231C8.41352,15.3643,8.54683,15.4476,8.76346,15.4476L10.0799,15.4476C16.3456,15.4476,15.8457,9.14859,15.8457,9.08193C15.8457,9.01528,16.0957,9.03194,16.0957,9.08193C16.0957,9.13193,16.1123,22.2966,16.1123,22.3466C16.1123,22.3966,15.929,22.4132,15.929,22.3466C15.929,22.2799,15.779,15.7809,9.94661,15.7809L8.76346,15.7809C8.56349,15.7809,8.41352,15.8476,8.41352,15.9975L8.41352,31.7951C8.41352,31.9118,8.54683,32.0117,8.76346,32.0117C9.64666,32.0117,11.9296,32.0284,12.5629,32.0284C23.8945,32.0617,23.7445,19.8969,23.7445,19.8469C23.7445,19.797,24.0278,19.797,24.0278,19.8469L24.0278,32.445L0.114794,32.445C0.0481373,32.445,0.0481373,32.0951,0.114794,32.0951L2.49776,32.0951C2.71439,32.0951,2.84771,32.0284,2.84771,31.8784C2.84771,29.1455,2.84771,0.799877,2.84771,0.549915C2.84771,0.349946,2.58108,0.333282,2.49776,0.333282C2.46443,0.333282,1.23129,0.333282,0.0148091,0.333282C0.0148091,0.333282,-0.0685114,0.166641,0.0148091,0C0.0981296,0,23.2612,0,23.2612,0",opacity:"0",transform:"translate(4.15223,1.87884)",style:{animation:"E_o 1.5s linear infinite both"}}),i.createElement("path",{id:"U",className:"st0",d:"M27.1719,0.266719C25.7716,0.266719,24.3713,0.266719,24.3713,0.266719C24.3713,0.266719,24.0214,0.266719,24.0214,0.466748C24.0214,2.70041,24.0214,21.5031,24.0214,24.1868L24.0214,24.2034C24.038,30.8378,18.9372,33.0048,15.2701,33.0548L15.2701,33.0381C10.9528,33.0548,3.20169,32.338,3.20169,22.77C3.20169,22.77,3.18502,1.00016,3.16835,0.700115C3.15167,0.233381,2.55159,0.250051,2.55159,0.250051C2.55159,0.250051,0.10124,0.250051,0.017895,0.250051C-0.0654503,0.250051,-0.0487813,-0.1,0.017895,-0.1L11.9529,-0.1C12.0196,-0.1,12.003,0.250051,11.9529,0.250051C11.9029,0.250051,9.41925,0.250051,9.41925,0.250051C9.41925,0.250051,8.6358,0.216712,8.6358,0.733453C8.6358,1.46689,8.65246,25.0203,8.65246,25.8537C8.65246,29.5209,10.7361,32.7714,15.2534,32.7048C18.7873,32.638,23.6879,30.5711,23.6714,24.1868C23.6714,23.8701,23.6714,2.83376,23.6714,0.466748C23.6546,0.283389,23.3046,0.266719,23.3046,0.266719L19.9875,0.266719C19.9207,0.266719,19.9207,-0.0666619,20.004,-0.0666619C20.0208,-0.0666619,27.0885,-0.0666619,27.1719,-0.0666619C27.2385,0.100029,27.1719,0.266719,27.1719,0.266719Z",opacity:"0",transform:"translate(2.57354,1.9455)",style:{animation:"U_o 1.5s linear infinite both"}}),i.createElement("path",{id:"G",className:"st0",d:"M16.5382,19.9408L19.2012,19.9408C19.2012,19.9408,19.7005,19.8909,19.7005,20.124C19.7005,20.1406,19.7005,27.7636,19.7005,27.7636C19.7005,33.6389,13.8419,33.7056,12.1941,33.5224C6.06906,32.8233,5.95255,20.1905,5.91927,16.8784C5.83605,7.85727,7.2508,0.00125154,13.4091,0.317489C20.7159,0.683659,22.63,11.1694,22.7465,11.6355C22.9962,11.7187,22.9962,11.519,22.9962,11.519L23.0127,0.0844721C23.0127,0.0844721,22.9628,-0.0153926,22.813,0.11776C22.7631,0.167692,22.6965,0.23427,22.63,0.300845C19.401,3.59637,17.7866,0.134404,13.0762,-0.0153926C7.28409,-0.198477,0.0938322,7.82398,-0.00603238,17.0947C-0.105897,26.4154,6.01913,33.6056,12.7101,33.8554C16.3385,33.9885,16.2553,32.9898,20.7324,31.5917C23.4621,30.743,24.7604,32.5904,24.8602,33.356C25.0267,33.4725,25.0434,33.2727,25.0434,33.2727L25.0434,20.1739C25.0434,19.9077,25.4094,19.9576,25.4094,19.9576L27.8729,19.9576C27.9394,19.9576,27.9394,19.5914,27.8729,19.5914L16.5216,19.5914C16.4383,19.5914,16.4383,19.9408,16.5382,19.9408",opacity:"0",transform:"translate(2.19725,0.935133)",style:{animation:"G_o 1.5s linear infinite both"}}),i.createElement("path",{id:"O",className:"st0",d:"M5.92208,16.6329C5.92208,7.61677,7.65213,0.247436,14.0399,0.264071C20.9103,0.264071,22.2578,7.93283,22.2578,16.6496C22.2578,25.6659,20.9435,33.4346,14.09,33.4346C6.73721,33.4177,5.92208,26.115,5.92208,16.6329M13.9735,33.6839C20.7938,33.7005,28.1633,26.1649,28.18,16.8159C28.1965,7.01792,21.1101,0.0478142,14.09,-0.00209099C6.90356,-0.0686311,0,7.83302,0,16.8159C0,26.0983,6.52095,33.6507,13.9735,33.6839",opacity:"0",transform:"translate(2.065,1.05937)",style:{animation:"O_o 1.5s linear infinite both"}}),i.createElement("path",{id:"V",className:"st0",d:"M0.0178861,0L11.7176,0C11.7843,0,11.7676,0.349993,11.7176,0.349993L9.31769,0.349993C9.31769,0.349993,8.63437,0.31666,8.85104,0.699985C8.88437,0.783317,17.1175,23.2828,17.1175,23.2828C17.1175,23.2828,17.2675,23.6662,17.3842,23.7162C17.3842,23.7162,24.7007,1.11664,24.7007,1.09998C24.7674,0.883315,25.034,0.366659,24.584,0.366659L21.9341,0.366659C21.8841,0.366659,21.8841,0.0166663,21.9341,0.0166663L28.234,0.0166663C28.284,0.0166663,28.284,0.366659,28.234,0.366659L25.884,0.366659C25.234,0.349993,25.234,0.549989,25.1174,0.883315C25.0674,1.04998,14.9342,32.616,14.9342,32.616C14.9342,32.616,14.8842,32.4827,14.8509,32.3493C10.5677,19.9663,3.93447,2.73328,3.40115,0.883315C3.25115,0.333326,3.16782,0.349993,2.83449,0.349993C2.71783,0.349993,0.101218,0.349993,0.0178861,0.349993C-0.0654455,0.349993,-0.0487792,0,0.0178861,0",opacity:"0",transform:"translate(2.03854,1.8455)",style:{animation:"V_o 1.5s linear infinite both"}}))},26895:(e,n,t)=>{const i=t(20578),a=t(20684);e.exports={Circle:i,Vogue:a}},36832:(e,n,t)=>{const i=t(51117).default.svg.withConfig({displayName:"VogueWrapper"})`
  animation: rotate 2s linear infinite;
  width: 36px;
  height: 32px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes E_o {
    0% {
      opacity: 0;
    }

    80.5556% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    83.3333% {
      opacity: 1;
    }

    97.2222% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes U_o {
    0% {
      opacity: 0;
    }

    63.8889% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    66.6667% {
      opacity: 1;
    }

    80.5556% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    83.3333% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes G_o {
    0% {
      opacity: 0;
    }

    47.2222% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    63.8889% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    66.6667% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes O_o {
    0% {
      opacity: 0;
    }

    30.5556% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    33.3333% {
      opacity: 1;
    }

    47.2222% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes V_o {
    0% {
      opacity: 0;
    }

    13.8889% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 0;
    }

    16.6667% {
      animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
      opacity: 1;
    }

    30.5556% {
      animation-timing-function: cubic-bezier(0.42, 0, 1, 1);
      opacity: 1;
    }

    33.3333% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
`;e.exports={VogueWrapper:i}},31383:(e,n,t)=>{const i=t(45697),a=t(94184),o=t(67294),r=t(98288),{trackComponent:l}=t(40199),{UtilityLedeHeader:s,UtilityLedeWrapper:d,UtilityLedeHedText:c,UtilityLedeDekText:g,UtilityLedeImage:p}=t(44397),h=({ariaLive:e,className:n,dangerousDek:t,dangerousHed:i,image:r,shouldUseAlternativeStyle:h,hasAlternateNewsletterStyle:u,hasInverted:m,variations:y,variationName:v})=>{o.useEffect((()=>{l("UtilityLede",v)}),[v]);const f=r&&Object.keys(r).length>0;return o.createElement(s,{className:a("utility-lede",n),"aria-live":e,"aria-label":"UtilityPageHeader",contentAlign:y.contentAlign,hasBackground:y.hasBackground,hasImage:f,alternativeStyle:h},r&&o.createElement(p,Object.assign({hasImage:f},r)),o.createElement(d,{alternativeStyle:h},o.createElement(c,{"data-testid":"UtilityLedeHedText",hasImage:f,dangerouslySetInnerHTML:{__html:i},hasInverted:m,hasAlternateNewsletterStyle:u}),t&&o.createElement(g,{"data-testid":"UtilityLedeDekText",hasImage:f,dangerouslySetInnerHTML:{__html:t},hasAlternateNewsletterStyle:u})))};h.propTypes={ariaLive:i.string,className:i.string,dangerousDek:i.string,dangerousHed:i.string.isRequired,hasAlternateNewsletterStyle:i.bool,hasInverted:i.bool,image:i.shape(r.propTypes),shouldUseAlternativeStyle:i.bool,variationName:i.string,variations:i.shape({contentAlign:i.oneOf(["center","left","right"]),hasBackground:i.bool})},h.defaultProps={shouldUseAlternativeStyle:!1,variations:{contentAlign:"center",hasBackground:!0}},e.exports=h},62702:(e,n,t)=>{e.exports=t(83375)},44397:(e,n,t)=>{const{default:i,css:a}=t(51117),{calculateSpacing:o,getColorStyles:r,getTypographyStyles:l}=t(79720),{BaseText:s}=t(74327),{BREAKPOINTS:d}=t(85326),c=t(98288),g=i.header.withConfig({displayName:"UtilityLedeHeader"})`
  ${({contentAlign:e})=>e?(e=>`\n  text-align: ${e};\n`)(e):""}
  ${({theme:e,hasBackground:n})=>n?(e=>`\n  ${r(e,"background-color","colors.discovery.body.white.background")};\n`)(e):""}
  ${({hasImage:e})=>e?`\n      display: grid;\n      grid-template-columns: repeat(8, 1fr);\n      grid-column-gap: 1.5rem;\n      align-items: center;\n      padding: ${o(12)} 0 ${o(100)} 0;\n      @media  (min-width: 0) and (max-width: ${d.md}){\n          grid-gap: ${o(2)};\n          grid-template-columns: repeat(4, 1fr);\n          padding: ${o(5)} 0 ${o(5)} 0;\n          justify-items: center;\n      }\n      `:""}
  ${({alternativeStyle:e})=>e?`\n    grid-gap: ${o(2)} 0;\n    @media (min-width: 0) and (max-width: ${d.md}){\n      grid-gap: ${o(4)} 0;\n    }\n    `:""}
`,p=i.div.withConfig({displayName:"UtilityLedeWrapper"})`
  grid-auto-flow: row;
  grid-column: 4 / span 5;

  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-gap: ${o(2)} 0;
    grid-column: 1 / span 4;
  }

  ${e=>!0===e.alternativeStyle?`\n        grid-gap: ${o(2)} 0;\n        @media (min-width: 0) and (max-width: ${d.md}){\n            grid-gap: ${o(4)} 0;\n        }\n        `:""}
`,h=i(s).withConfig({displayName:"UtilityLedeHedText"})`
  ${({hasAlternateNewsletterStyle:e})=>e&&a`
      ${({theme:e})=>l(e,"typography.definitions.utility.heading")};
    `}
  ${e=>!0===e.alternativeStyle?`\n        ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.hed")};\n        ${({theme:e})=>l(e,"typography.definitions.discovery.page-hed-section")};\n        `:""}
  ${e=>!0===e.hasImage?"\n        margin: 0;\n        ":`margin: 0 0 ${o(2,"px")};`}

  ${e=>!0===e.hasInverted&&a`
      ${({theme:e})=>r(e,"color","colors.discovery.body.white.context-texture")};
      ${({theme:e})=>l(e,"typography.definitions.discovery.hed-core-primary")};
      line-height: 25px;
      font-size: 20px;
    `}
`;h.defaultProps={as:"h1",colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.hed-break-out"};const u=i(s).withConfig({displayName:"UtilityLedeDekText"})`
  a {
    ${({theme:e})=>r(e,"color","colors.discovery.body.white.accent")};
    ${e=>!0===e.hasAlternateNewsletterStyle?a`
            ${r("color","colors.foundation.expanded-utility.nav-link.default")};
            text-decoration: none;
          `:""}
  }

  p {
    margin: 0; /* overwrite native browser margins for paragraph tags */
  }
  ${e=>!0===e.alternativeStyle?`\n        ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.description")};\n        ${({theme:e})=>l(e,"typography.definitions.discovery.description.feature")};\n        a {\n          ${({theme:e})=>r(e,"color","colors.discovery.lead.primary.description")};\n        }\n        `:""}

  ${e=>!0===e.hasImage?"\n        margin: 0;\n        ":`margin: ${o(2,"px")} 0 0;`}

  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-row: 2;
  }

  ${e=>!0===e.hasAlternateNewsletterStyle?a`
          ${l("typography.definitions.utility.description")}
        `:""}
`;u.defaultProps={as:"h2",colorToken:"colors.discovery.body.white.description",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const m=i(c).withConfig({displayName:"UtilityLedeImage"})`
  grid-column: 1 / span 3;
  @media (min-width: 0) and (max-width: ${d.md}) {
    grid-column: 2 / span 2;
    grid-row: 1;
  }
  ${e=>!0===e.hasImage?`\n      @media (min-width: 0) and (max-width: ${d.md}){\n        padding-bottom: 0;\n      }\n      `:""}
`;e.exports={UtilityLedeHeader:g,UtilityLedeWrapper:p,UtilityLedeHedText:h,UtilityLedeDekText:u,UtilityLedeImage:m}},83375:(e,n,t)=>{const{asVariation:i}=t(95545),a=t(31383);a.ContentCenterNoBackground=i(a,"ContentCenterNoBackground",{contentAlign:"center",hasBackground:!1}),a.ContentRightNoBackground=i(a,"ContentRightNoBackground",{contentAlign:"right",hasBackground:!1}),a.ContentLeftNoBackground=i(a,"ContentLeftNoBackground",{contentAlign:"left",hasBackground:!1}),e.exports=a},90949:(e,n,t)=>{const{fetchWithTimeout:i}=t(84317),{loadData:a}=t(59998);e.exports={fetchWithTimeout:i,loadData:a}},59998:e=>{e.exports={loadData:async function({url:e,gtmEvent:n=null}){window.dataLayer&&n&&window.dataLayer.push({event:n});const t=await fetch(e);if(t.ok)return t.json();throw new Error(t.statusText)}}},46775:(e,n,t)=>{const i=t(45697),a=t(67294),{AtoZIndexWrapper:o,AtoZIndexList:r,AtoZIndexLink:l,AtoZIndexText:s}=t(97168),d=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","#"],c=({links:e,linksRef:n,navId:t})=>{if(!e||!e.length)return null;const i=e=>{e.preventDefault();const t=window.requestAnimationFrame||(e=>window.setTimeout(e,20)),i=document.getElementById(e.target.hash.replace("#",""));if(!i)return;const{offsetTop:a}=i,{offsetTop:o,scrollTop:r}=n.current,l=a-o-r;let s=0;const d=()=>{s+=20;const e=function(e,n,t,i){let a=e;return a/=300,a<1?t/2*a*a+n:(a--,-t/2*(a*(a-2)-1)+n)}(s,r,l);n.current.scrollTop=e,s<600&&t(d)};d()};return a.createElement(o,{"data-testid":"AtoZIndexWrapper"},a.createElement(r,null,d.map((n=>{const o=e.find((e=>e.groupName===n));return o?a.createElement("li",{key:n},a.createElement(l,{"data-testid":"AtoZIndexLink",href:"#"+("#"===o.groupName?`other-${t}`:`${o.groupName.toLowerCase()}-${t}`),onClick:i},n)):a.createElement(s,{key:n},n)}))))};c.propTypes={links:i.arrayOf(i.shape({groupName:i.string.isRequired})),linksRef:i.object,navId:i.string},e.exports=c},86422:(e,n,t)=>{const i=t(45697),a=t(67294),{useIntl:o}=t(36319),{useState:r}=t(67294),l=t(73955),s=t(48349),d=t(83066),{asConfiguredComponent:c}=t(36380),{filter:g,useDebounce:p}=t(5392),h=t(46775),{trackComponent:u}=t(40199),{GroupedNavigationWrapper:m,GroupedNavigationFilter:y,GroupedNavigationFilterContent:v,GroupedNavigationFilterInput:f,GroupedNavigationContent:b,GroupedNavigationLinks:C,GroupedNavigationGroup:w,GroupedNavigationIndex:k}=t(97168),N=t(97349).Z,$=({className:e,groupedLinks:n,showContentDivider:t=!0,hasAtoZIndex:i=!1,hasFilter:c=!1,analyticsEventForFilter:$,filterLabel:x})=>{a.useEffect((()=>{u("GroupedNavigation")}),[]);const{formatMessage:L}=o(),E=a.useRef(null),I=l(),[S,A]=r(""),[T,O]=p(n,200);return n&&n.length?a.createElement(m,{className:e,hasFilter:c,"data-testid":"GroupedNavigationWrapper"},c&&a.createElement(y,null,a.createElement(v,null,a.createElement(f,{placeholder:x,"aria-label":x||L(N.filterInputAriaLabelText),name:"filter",type:"text",onChange:e=>{const t=e.target.value;A(t),O((()=>g(n,t)))},onFocus:()=>{$&&s.emitGoogleTrackingEvent($)},value:S}),a.createElement(d,null))),a.createElement(b,{hasFilter:c},a.createElement(C,{ref:E},T.map((e=>{if(!e.links)return null;const n=e.links.map((e=>{const n=!0===e.isSecondary?"link--secondary":"link--primary";return Object.assign(Object.assign({},e),{className:n})})),o={};return i&&(o.id="#"===e.groupName?`other-${I}`:`${e.groupName.toLowerCase()}-${I}`),a.createElement(w,{key:e.groupName,className:"grouped-navigation__group",links:n,linkClassName:"grouped-navigation__link",heading:e.groupName,showContentDivider:t,shouldStyleListItems:!0,attributes:o})}))),i&&a.createElement(k,{className:"grouped-navigation__index"},a.createElement(h,{links:n,linksRef:E,navId:I})))):null},x=i.shape({text:i.string.isRequired,url:i.string.isRequired,isSecondary:i.bool,analyticsEvent:i.string}),L=i.arrayOf(i.shape({links:i.arrayOf(x),groupName:i.string,groupId:i.string}));$.propTypes={analyticsEventForFilter:i.string,className:i.string,filterLabel:i.string,groupedLinks:L,hasAtoZIndex:i.bool,hasFilter:i.bool,showContentDivider:i.bool},$.displayName="GroupedNavigation",e.exports=c($,"GroupedNavigation"),e.exports.groupedLinksShape=L},69379:(e,n,t)=>{e.exports=t(86422)},97168:(e,n,t)=>{const i=t(51117).default,{BaseLink:a,BaseText:o}=t(74327),{calculateSpacing:r,getLinkStyles:l,getTypographyStyles:s,getColorStyles:d,getInputFieldStyles:c}=t(79720),g=t(55399),p=i.div.withConfig({displayName:"GroupedNavigationWrapper"})`
  padding-top: ${r(4)};
  height: 100%;

  ${({hasFilter:e})=>e&&`padding-top: ${r(2)};`}

  .navigation__heading {
    ${({theme:e})=>s(e,"typography.definitions.foundation.title-primary")};
    margin: 0;
    line-height: normal;
    ${({theme:e})=>d(e,"color","colors.foundation.expanded-utility.nav-link.default")};
  }

  .navigation__list-item {
    white-space: normal;
  }

  .content-divider {
    display: block;
    margin-bottom: ${r(2)};
    border-bottom-width: ${r(.5)};
    border-bottom-style: solid;
    ${({theme:e})=>d(e,"border-bottom-color","colors.discovery.lead.secondary.accent")};
    padding-top: ${r(1)};
    width: ${r(2)};
  }

  .grouped-navigation__link {
    ${({theme:e})=>l(e,"colors.foundation.expanded-utility.nav-link.default","colors.foundation.expanded-utility.nav-link.hover","navigation")}

    &.link--primary {
      ${({theme:e})=>s(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>s(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,h=i.div.withConfig({displayName:"GroupedNavigationFilter"})`
  position: static;
  border-width: 0 0 1px;
  border-style: solid;
  ${({theme:e})=>d(e,"color","colors.discovery.body.white.divider")};
  width: calc(100% - 1.25rem);
  height: 60px;

  .icon {
    position: absolute;
    top: 10px;
    right: 0;
    pointer-events: none;
  }
`,u=i.div.withConfig({displayName:"GroupedNavigationFilterContent"})`
  position: relative;
`,m=i(o).withConfig({displayName:"GroupedNavigationFilterInput"})`
  ${({theme:e})=>c(e,"normal","background")};
  ${({theme:e})=>c(e,"normal","text")};
  border: none;
  width: 100%;
  height: ${r(6.2)};
`;m.defaultProps={as:"input",typeIdentity:"typography.definitions.foundation.link-secondary"};const y=i.div.withConfig({displayName:"GroupedNavigationContent"})`
  display: flex;
  height: 100%
    ${({hasFilter:e})=>e&&`\n      padding-top: ${r(4)};\n      height: calc(100% - 60px);\n  `};
`,v=i.div.withConfig({displayName:"GroupedNavigationLinks"})`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  max-height: 100vh;

  && li {
    padding-bottom: ${r(2)};

    &.link--primary {
      ${({theme:e})=>s(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>s(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,f=i(g.Vertical).withConfig({displayName:"GroupedNavigationGroup"})`
  padding-bottom: ${r(5)};
`,b=i.div.withConfig({displayName:"GroupedNavigationIndex"})`
  position: static;
  padding-right: ${r(1)};
  overflow-y: auto;
`,C=i(o).withConfig({displayName:"AtoZIndexWrapper"})`
  width: ${r(3)};
  text-align: center;
`;C.defaultProps={as:"nav"};const w=i(o).withConfig({displayName:"AtoZIndexList"})`
  margin-top: 0;
  padding: 0;
  list-style: none;
`;w.defaultProps={as:"ul"};const k=i(a).withConfig({displayName:"AtoZIndexLink"})`
  display: block;
  background: none;
  padding-top: ${r(.25)};
  padding-bottom: ${r(.25)};
  width: 100%;
`;k.defaultProps={colorSecondaryLinkToken:"colors.foundation.expanded-utility.nav-link.hover",colorStaticLinkToken:"colors.foundation.expanded-utility.nav-link.default",colorToken:"colors.foundation.expanded-utility.nav-link.default",linkStyle:"navigation",typeToken:"typography.definitions.foundation.link-secondary"};const N=i(o).withConfig({displayName:"AtoZIndexText"})`
  margin: 0;
  padding-top: ${r(.25)};
  padding-bottom: ${r(.25)};
`;N.defaultProps={as:"li",colorToken:"colors.foundation.expanded-utility.nav-link.default",typeIdentity:"typography.definitions.foundation.link-secondary"},e.exports={GroupedNavigationWrapper:p,GroupedNavigationFilter:h,GroupedNavigationFilterContent:u,GroupedNavigationFilterInput:m,GroupedNavigationContent:y,GroupedNavigationLinks:v,GroupedNavigationGroup:f,GroupedNavigationIndex:b,AtoZIndexWrapper:C,AtoZIndexList:w,AtoZIndexLink:k,AtoZIndexText:N}},97349:(e,n,t)=>{const i=t(36319);n.Z=(0,i.defineMessages)({filterInputAriaLabelText:{id:"GroupedNavigation.FilterInputAriaLabel",defaultMessage:"Filter links",description:"Grouped Navigation Filter component aria label text",isConfigurable:!0}})},5392:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.useDebounce=n.filter=void 0;const{useState:i,useCallback:a}=t(67294),o=t(23279);n.filter=(e,n)=>{if(!(null==n?void 0:n.trim()))return e;const t=e=>e.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/gi,"");return e.map((e=>{var i;return Object.assign(Object.assign({},e),{links:null===(i=e.links)||void 0===i?void 0:i.filter((e=>/(\s|')/.test(n)?t(e.text).includes(t(n)):e.text.match(/([a-zA-Z]\.){2,}/)?e.text.split(" ").filter((e=>t(e).startsWith(t(n)))).length:e.text.split(/([ \-'’.]+)/).filter((e=>t(e).startsWith(t(n)))).length))})})).filter((e=>{var n;return null===(n=e.links)||void 0===n?void 0:n.length}))},n.useDebounce=(e,n)=>{const[t,r]=i(e),l=a(o((e=>{r(e)}),n),[]);return[t,e=>{l(e)}]}}}]);

}
/*
     FILE ARCHIVED ON 10:02:07 Oct 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:58:30 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.54
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.008
  cdx.remote: 11.061
  LoadShardBlock: 247.087 (6)
  PetaboxLoader3.datanode: 222.356 (8)
  load_resource: 131.912 (2)
  PetaboxLoader3.resolve: 44.867
*/