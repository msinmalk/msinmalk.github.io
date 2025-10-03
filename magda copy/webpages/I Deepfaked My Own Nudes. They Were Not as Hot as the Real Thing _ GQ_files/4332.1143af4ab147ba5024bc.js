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

(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[4332],{96921:(e,n,t)=>{const o=t(45697),a=t(67294),{connect:i}=t(59800),{useIntl:r}=t(36319),s=t(36990).Z,l=t(13366).default,d=t(81768),c=t(98288),{googleAnalytics:g}=t(28601),{asConfiguredComponent:u}=t(36380),{doCloseModal:p}=t(47057),{trackComponent:m}=t(40199),{SignInModalBaseWrapper:h,SignInModalCloseButton:y,SignInModalButtons:b,SignInModalDek:S,SignInModalHed:I,SignInModalEmail:f,SignInModalSignInSection:k,SignInModalSpotIllustration:M,SignInModalSignInLink:C,SignInModalHedSpanTag:v}=t(31047),w=({analyticsType:e,authSource:n,brandIdentityAssets:t,className:o,closeButtonCallback:i,dangerousDek:u,dangerousHed:w,dangerousHedSpanTag:x,hasLargeMargins:$,hasRoundedCornersButtons:B,isVisible:T,redirectURL:E,source:L,type:O})=>{a.useEffect((()=>{m("SignInModal")}),[]);const N=n=>g.emitGoogleTrackingEvent(n,{signInModalType:e});T&&N("signin-modal-impression");let R=`${l.oidcAuth}?redirectURL=${encodeURIComponent(E)}&skipAccountLink=true&authSource=${n}`;L&&(R=`${R}&source=${L}`);const A=t.signInModalAsset[O]||t.signInModalAsset.default,{formatMessage:P}=r();return a.createElement(h,{className:o,hasLargeMargins:$,closeTimeoutMS:400,isOpen:T},a.createElement(y,{isIconButton:!0,ariaLabel:P(s.closeButtonAriaLabel),label:P(s.closeButtonLabel),onClickHandler:()=>{p(),N("signin-modal-close"),i&&i()},role:"button",ButtonIcon:d}),a.createElement(I,null,w||P(s.hed),a.createElement(v,null,x||P(s.hedSpanTag))),a.createElement(M,null,a.createElement(c,Object.assign({},A))),a.createElement(S,{dangerouslySetInnerHTML:{__html:u}}),a.createElement(b,{hasRoundedCornersButtons:B},a.createElement(f,{label:P(s.oidcSignUpButtonLabel),href:R,inputKind:"link",rel:"link",iconPosition:"before",onClickHandler:()=>N("signin-modal-oidc-sign-in-click"),"data-testid":"SignInModalEmail"})),a.createElement(k,null,P(s.oidcSignInText)," ",a.createElement(C,{href:R,onClick:()=>N("signin-modal-oidc-sign-in-click")},P(s.oidcSignInLinkText)),"voting"===O&&a.createElement("div",null,"  »")))};w.displayName="SignInModal",w.defaultProps={authSource:"sign-in-modal",hasLargeMargins:!1,redirectURL:"/",type:"default"},w.propTypes={analyticsType:o.string.isRequired,authSource:o.string,brandIdentityAssets:o.shape({signInModalAsset:o.shape({default:o.object,crosswords:o.object,voting:o.object})}).isRequired,className:o.string,closeButtonCallback:o.func,dangerousDek:o.string,dangerousHed:o.string,dangerousHedSpanTag:o.string,hasLargeMargins:o.bool,hasRoundedCornersButtons:o.bool,isVisible:o.bool,redirectURL:o.string,source:o.string,type:o.oneOf(["default","crosswords","voting"])};const x=u(w,"SignInModal");e.exports=i((e=>{const{signInModalConfig:n,brandIdentityAssets:t}=e;return Object.assign({brandIdentityAssets:t},n)}))(x)},9855:(e,n,t)=>{e.exports=t(96921)},31047:function(e,n,t){var o=this&&this.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t};const a=t(67294),i=t(83253),r=t(45697),{default:s,css:l}=t(51117),{BaseText:d,BaseLink:c}=t(74327),{calculateSpacing:g}=t(79720),{BREAKPOINTS:u,ZINDEX_MAP:p}=t(85326),m=t(7279),{getColorToken:h,getTypographyStyles:y}=t(79720),{ResponsiveImagePicture:b}=t(7230),{ButtonWrapper:S}=t(41909),I=s(d).withConfig({displayName:"SignInModalHed"})`
  text-align: center;
`;I.defaultProps={as:"div",colorToken:"colors.discover.body.white.heading",topSpacing:1,typeIdentity:"typography.definitions.consumptionEditorial.display-small"};const f=s.span.withConfig({displayName:"SignInModalHedSpanTag"})`
  display: block;
`,k=s.p.withConfig({displayName:"SignInModalDek"})`
  ${y("typography.definitions.consumptionEditorial.body-core")}
  text-align: center;
  color: ${h("colors.discover.body.white.description")};
  @media (max-width: ${u.md}) {
    margin-bottom: ${g(3)};
  }
`,M=s(d).withConfig({displayName:"SignInModalSpotIllustration"})`
  margin: ${g(1.5)} auto;
  text-align: center;

  ${b} {
    width: 200px;
    height: 170px;
  }
`;M.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const C=s(m.Primary).withConfig({displayName:"SignInModalButtonPrimary"})`
  margin-bottom: ${g(1)};
  width: 100%;
`,v=s(m.Primary).withConfig({displayName:"SignInModalButtonPrimaryOutlined"})`
  width: 100%;
`,w=s(m.Utility).withConfig({displayName:"SignInModalCloseButton"})`
  position: absolute;
  top: ${g(1)};
  right: ${g(1)};
  padding: 0;
  fill: ${h("colors.discovery.body.light.context-tertiary")};

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`,x=s(m.Utility).withConfig({displayName:"SignInModalEmail"})`
  margin-top: 0;
  padding: 0;
`,$=s.div.withConfig({displayName:"SignInModalButtons"})`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: ${g(2)};
  width: 100%;

  ${x} {
    padding: 0;
    width: 100%;
  }

  ${({hasRoundedCornersButtons:e})=>e&&`\n    ${S} {\n      border-radius: 4px;\n    }\n  `}
`,B=l`
  &&& {
    padding: ${g(8)} ${g(5)};
    min-height: ${g(62)};
  }
  ${M} {
    margin: ${g(1.5)} auto;

    ${b} {
      width: 175px;
      height: 175px;
    }
  }

  ${k} {
    margin-bottom: ${g(2)};
  }

  ${$} {
    margin-bottom: ${g(4)};

    @media (max-width: ${u.md}) {
      padding-bottom: 0;
    }
  }
`;function T(e){var{className:n}=e,t=o(e,["className"]);const r=`${n}__content`,s=`${n}__overlay`;return a.createElement(i,Object.assign({portalClassName:n,className:r,overlayClassName:s},t))}T.propTypes={className:r.string};const E=s(T).withConfig({displayName:"SignInModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${p.interstitialLayer};

    background-color: rgba(
      ${h("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 750ms;
      opacity: 1;
      background-color: rgba(
        ${h("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--after-close {
      transition: background-color 750ms;
      background-color: rgba(
        ${h("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${h("colors.background.white")};
    padding: ${g(5)};
    width: ${g(60)};
    max-height: calc(100% - ${g(1,"px")});
    overflow-y: auto;

    @media (max-width: ${u.md}) {
      transform: translateY(-50%)
        translateX(calc(-50% - ${g(2,"px")}));

      margin: 0 ${g(2,"px")};
      padding: ${g(4)} ${g(5)}
        ${g(4)} ${g(5)};
      width: auto;
      min-width: ${g(38)};
      max-width: ${g(60)};
    }

    ${C}
    ${v}
    ${({hasLargeMargins:e})=>!0===e&&B}
  }
`,L=s(d).withConfig({displayName:"SignInModalSignInSection"})`
  display: flex;
  justify-content: center;
  width: 100%;
`;L.defaultProps={as:"div",colorToken:"colors.discovery.body.light.context-tertiary",typeIdentity:"typography.definitions.utility.assistive-text"};const O=s(c).withConfig({displayName:"SignInModalSignInLink"})`
  && {
    z-index: ${p.interstitialLayer};
    margin-left: 5px;
    text-decoration: underline;
  }
`;O.defaultProps={colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.utility.assistive-text"},e.exports={SignInModalBaseWrapper:E,SignInModalCloseButton:w,SignInModalButtons:$,SignInModalDek:k,SignInModalEmail:x,SignInModalHed:I,SignInModalSignInSection:L,SignInModalSignInLink:O,SignInModalSpotIllustration:M,SignInModalHedSpanTag:f}},36990:(e,n,t)=>{const o=t(36319);n.Z=(0,o.defineMessages)({oidcSignUpButtonLabel:{id:"SignInModal.OidcSignUpButtonLabel",defaultMessage:"Create account",description:"SignInModal component OIDC SignUp button label"},closeButtonLabel:{id:"SignInModal.CloseButtonLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button label"},closeButtonAriaLabel:{id:"SignInModal.CloseButtonAriaLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button aria label"},hed:{id:"SignInModal.Hed",defaultMessage:"Save stories ",description:"SignInModal component hed text",isConfigurable:!0},hedSpanTag:{id:"SignInModal.HedSpanTag",defaultMessage:"with an account",description:"SignInModal component hed spanTag text",isConfigurable:!0},oidcSignInText:{id:"SignInModal.OidcSignInText",defaultMessage:"Already have an account?",description:"SignInModal component OIDC SignIn Text"},oidcSignInLinkText:{id:"SignInModal.OidcSignInLinkText",defaultMessage:"Sign in",description:"SignInModal component OIDC SignIn Link Text"}})},11752:(e,n,t)=>{const o=t(45697),a=t(67294),i=t(17843),r=t(48655),{getSeparatorIconComponent:s}=t(73067),{BreadcrumbTrailWrapper:l,BreadcrumbTrailScrollContainer:d,BreadcrumbTrailItem:c}=t(96033),{trackComponent:g}=t(40199),u=({hierarchy:e,shouldRemoveBackgroundColor:n,theme:t,shouldUseContentHeaderColorForLink:o,separatorIcon:u})=>(a.useEffect((()=>{g("BreadcrumbTrail")}),[]),a.createElement(i,{palette:t},a.createElement(l,{"data-testid":"BreadcrumbTrail",shouldRemoveBackgroundColor:n},e&&e.length>0&&a.createElement(r.WithMargins,null,a.createElement(d,null,e.map(((e,n)=>{const{name:t,slug:i}=e||{};return a.createElement(c,{key:n,shouldUseContentHeaderColorForLink:o},i?a.createElement("a",{className:"breadCrumbLink",href:i},t):a.createElement("span",null,t),s(u))})))))));u.displayName="BreadcrumbTrail",u.defaultProps={separatorIcon:{name:"Chevron",type:"standard"},shouldRemoveBackgroundColor:!1,theme:"standard"},u.propTypes={hierarchy:o.array.isRequired,separatorIcon:o.shape({name:o.string,type:o.oneOf(["standard","thin","thinner"])}),shouldRemoveBackgroundColor:o.bool,shouldUseContentHeaderColorForLink:o.bool,theme:o.string},e.exports=u},32803:(e,n,t)=>{const{asConfiguredComponent:o}=t(36380),a=t(11752);e.exports=o(a,"BreadcrumbTrail")},96033:(e,n,t)=>{const{default:o}=t(51117),{BaseText:a}=t(74327),{calculateSpacing:i,getLinkStyles:r,getColorStyles:s}=t(79720),{BREAKPOINTS:l}=t(85326),{isInverted:d}=t(37332),c=o.div.withConfig({displayName:"BreadcrumbTrailWrapper"})`
  ${({theme:e,shouldRemoveBackgroundColor:n})=>{const t=d(e)?"colors.background.black":"colors.background.light";return n?"background-color: transparent;":`${s(e,"background-color",t)};`}};

  padding-top: ${i(2.4)};
  padding-bottom: ${i(2.4)};
  width: 100%;

  @media (max-width: ${l.md}) {
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,g=o.div.withConfig({displayName:"BreadcrumbTrailScrollContainer"})`
  display: flex;
  width: max-content;
`,u=o(a).withConfig({displayName:"BreadcrumbTrailItem"})`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  ${({theme:e})=>d(e)&&`\n      ${s(e,"color","colors.consumption.lead.inverted.link")};`}

  a:active,
  a:link {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  .icon {
    margin: 0 ${i(.2)};

    path {
      ${({theme:e})=>d(e)&&`\n          ${s(e,"fill","colors.consumption.lead.inverted.link")};\n        `}
    }
  }

  &:last-of-type {
    a {
      ${({theme:e,shouldUseContentHeaderColorForLink:n})=>{const t=d(e)?r(e,"colors.consumption.lead.inverted.link",null):r(e,"colors.discovery.lead.secondary.link",null);return n?r(e,"colors.consumption.lead.standard.context-signature",null):t}}

      &:active,
      &:link {
        text-decoration: none;
      }

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    span {
      ${({theme:e})=>s(e,"color","colors.discovery.lead.secondary.link")};
    }

    .icon {
      display: none;
    }
  }
`;u.defaultProps={typeIdentity:"typography.definitions.globalEditorial.tags"},e.exports={BreadcrumbTrailWrapper:c,BreadcrumbTrailScrollContainer:g,BreadcrumbTrailItem:u}},73067:(e,n,t)=>{const o=t(67294),{getIconComponent:a}=t(30579);e.exports={getSeparatorIconComponent:e=>{const{name:n,type:t}=e,i=a(n,t)||a("Chevron","standard");return o.createElement(i,Object.assign({},{width:"1rem",height:"1rem"}))}}},30579:(e,n,t)=>{const o={standard:t(18322),thin:t(23693),thinner:t(69598)};e.exports={getIconComponent:(e,n="standard")=>{if(!e)return null;return o[n][e]||null}}},69598:(e,n,t)=>{const o=t(85322),a=t(30157),i=t(68537),r=t(94101),s=t(6664),l=t(17390),d=t(94838);e.exports={Bookmark:o,BookmarkActivated:a,Email:i,Facebook:r,Twitter:l,Print:s,Shopping:d}},13366:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.proxyApiRoutes=void 0,n.default=Object.freeze({oidcAuth:"/auth/initiate",oidcAuthSessionEnd:"/auth/session/end",oidcAccountSignOut:"/auth/end",oidcExchange:"/auth/exchange",oidcForgotPassword:"/auth/forgot",oidcLanding:"/auth/complete",oidcMagicLink:"/auth/request-link",oidcRefresh:"/auth/refresh",oidcRefreshRedirect:"/auth/refresh-redirect",oauth:{jwks:"/.well-known/jwks",oidcConfig:"/.well-known/openid-configuration",authorizationGrant:"/api/utility/oauth/authorization",tokenExchange:"/api/utility/oauth/token"}}),n.proxyApiRoutes=Object.freeze({authenticate:"/v2/authenticate",googleAuthenticate:"/v2/sso/google",marketingPermissions:"/v2/marketing-permissions",newsletterSubscriptions:"/v2/newsletter-subscriptions",requestPasswordReset:"/v2/reset-password-token",resetPassword:"/v2/users/reset-password",requestSignInHelp:"/v2/magic-link/send",sailthruNewsletterSubscriptions:"/v2/newsletter/sailthru",swgAuthenticate:"/v2/swg/authenticate",swgSubscribe:"/v2/swg/subscription",userDetails:"/v2/users",userLookup:"/v2/users/lookup"})}}]);

}
/*
     FILE ARCHIVED ON 10:02:09 Oct 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:58:40 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.942
  exclusion.robots: 0.055
  exclusion.robots.policy: 0.013
  esindex: 0.017
  cdx.remote: 8.354
  LoadShardBlock: 407.687 (6)
  PetaboxLoader3.datanode: 434.674 (8)
  load_resource: 125.658 (2)
  PetaboxLoader3.resolve: 43.492
*/