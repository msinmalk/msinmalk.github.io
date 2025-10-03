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

(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[5970],{94027:(e,n,i)=>{const t=i(36319);n.default=(0,t.defineMessages)({profileLinkLabel:{id:"StackedNavigation.ProfileLinkLabel",defaultMessage:"My Profile",description:"Label for the profile link",isConfigurable:!0},navigationMenuButtonLabel:{id:"StackedNavigation.MenuButton",defaultMessage:"Open Navigation Menu",description:"Label for the menu button"},primaryLinksLabel:{id:"StackedNavigation.PrimaryLinksLabel",defaultMessage:"Primary",description:"ARIA label for the primary links"},utilityLinksLabel:{id:"StackedNavigation.UtilityLinksLabel",defaultMessage:"Utility",description:"ARIA label for utility links"},openSearchMenuLabel:{id:"StackedNavigation.OpenSearchMenuLabel",defaultMessage:"Open Search Menu",description:"ARIA label open search menu button"},searchLabel:{id:"StackedNavigation.SearchLabel",defaultMessage:"Search",description:"ARIA label for search link"},subscribeLabel:{id:"StackedNavigation.SubscribeLabel",defaultMessage:"Subscribe",description:"Text for the subscribe link"},drawerLabel:{id:"StackedNavigation.DrawerLabel",defaultMessage:"Navigation and Sign Up Menu",description:"ARIA label for the drawer modal"},bookmarkAlertLabel:{id:"StackedNavigation.BookmarkAlertLabel",defaultMessage:"To revisit this article, visit My Profile, then ",description:"Bookmark alert label before the link"},savedStoriesLabel:{id:"StackedNavigation.SavedStoriesLabel",defaultMessage:"View saved stories",description:"Label for the link in bookmark alert"},primaryNavigationLabel:{id:"SiteHeader.ScrollingNavigation",defaultMessage:"Primary",description:"ARIA label for the whole primary navigation"}})},32246:(e,n,i)=>{e.exports=i(89731)},8172:(e,n,i)=>{const{default:t,createGlobalStyle:a,css:o}=i(51117),{BREAKPOINTS:r}=i(85326),{calculateSpacing:d,getColorStyles:l,getTypographyStyles:s,maxScreen:c,minScreen:p,minMaxScreen:g,getColorToken:m,getLinkStyles:u}=i(79720),{withRecircContextProvider:h}=i(82313),y=h(i(20886)),{getPattern:b}=i(7595),$=i(7279),{ConfiguredDisclaimer:f}=i(5626),{BodyWrapper:k}=i(81717),A=i(16650),{SectionTitleHed:v}=i(80577),{LinkStackContent:P}=i(43487),{GroupCalloutWrapper:C}=i(11628),{RecircMostPopularWrapper:S,RecircMostPopularHeading:w}=i(92352),{StickyBoxWrapper:x,StickyBoxPrimary:_}=i(29659),{IframeEmbedWrapper:L}=i(77957),{ResponsiveCartoonWrapper:N}=i(94007),{GalleryEmbedHr:B}=i(78116),{AssetEmbedAssetContainer:T}=i(42158),{GridItem:M,GridWrapper:R}=i(14134),O=i(65552),{SocialIconsListItem:G}=i(96860),{ResponsiveCartoonCaption:E}=i(94007),{applyCustomBackgroundColor:D}=i(62470),{ConsumerMarketingUnitThemedWrapper:I}=i(77084),{BaseText:W}=i(74327),{CneVideoEmbedContainer:H}=i(56706),j=o`
  ${({pageBackgroundTheme:e})=>e?o`
        ${D(e)};
      `:o`
      ${({theme:e})=>b(e,"page-background")};
    `}
  .grid-layout__content {
    ${p(r.md)} {
      grid-column: 3 / span 8;
    }

    ${p(r.lg)} {
      grid-column: 2 / span 6;
    }

    ${g(r.sm,r.md)} {
      grid-column: 1 / -1;
    }
  }

  .grid-layout--adrail.narrow {
    .container--body-inner {
      ${p(r.md)} {
        grid-column: 1 / -1;
      }
    }

    ${S} {
      &:first-child {
        margin-top: 0;

        ${w} {
          margin-top: 0;
        }
      }
    }
  }

  .container--body {
    grid-gap: 20px;
  }

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,z=t(y).withConfig({displayName:"ArticlePageBase"})`
  &&& {
    ${j}
    ${({shouldHideBaseTopPadding:e})=>e&&"padding-top : 0;"}
    ${({hideNav:e,shouldPrioritizeSeriesPagination:n,hasContentHeaderLogo:i})=>!n&&i&&(e=>e?"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transform: translateY(-150%);\n      transition: all 1000ms ease;\n    }\n    ":"\n    header.site-navigation {\n      margin-bottom: -7rem;\n      transition: all 500ms ease;\n    }\n")(e)}
  }
`,V=a`
    .channel--body {
      ${j}
    }
    
    .body__container {
      grid-column: 1/ -1;
    
      ${p(r.md)} {
        grid-column: 3 / span 8;
      }
    }
  
    /* 1. required to enforce proper alignment when text may be less than a full line
       2. remove extra top spacing added by default paragraph margins */
      .article__body {
        margin-bottom: ${d(2)};
        width: 100%; /* 1 */
  
        p:first-child:not(.callout--group-item):not(.upc-brandName) {
          margin-top: 0; /* 2 */
        }
  
        .small {
          font-variant: small-caps;
          text-transform: lowercase;
          font-style: normal;
        }
  
        .underline {
          text-decoration: underline;
          font-style: normal;
        }

        ${E} .underline {
          font-style: inherit;
        }
      }

      .article-white-background {
        background-color: white;
        padding: 1rem;
      }
  
      .article__body > .body__inner-container > {
        & {
          ${c(r.md)} {
            .grid-items-3${C} {
              ${M}{    
                margin-bottom: ${d(2.5)};
              }

              ${M}:last-child:nth-child(odd) {    
                grid-column: 1 / 3;
              } 
            }
          }
          ${({hideSideBySideViewOnMobile:e})=>e&&`\n            ${c(r.md)} {\n              ${C} {\n                ${M} {\n                  grid-column: 1 / -1;\n                }\n              }\n            }\n          `}
          
          ${({isUpcEnabled:e})=>e&&`\n            ${c(r.xl)} {\n              ${C} {\n               grid-template-columns: repeat(2,1fr);\n              }\n            }\n            ${c(r.md)} {\n              .grid-items-3${C} {\n              ${M}{    \n                margin-bottom: 0;\n              }\n            }\n          `}
        }

        ${L}, .cne-video-embed {
            &:first-child {
              margin-top: 0;
            }
          }
  
          inline-embed:first-child ${L} {
            margin-top: 0;
          }
      }

      .article__body > .body__inner-container > figure.asset-embed {
        padding: 0 0 ${d(5)} 0;
      }


      .article__body--grid-margins {
        grid-column: 1 / -1;
      }

      /**
       1. have ad span more columns from the right panel
       to have a larger right margin
       2. have it span 3 which is intended in a 12 column grid
       */
       .grid-layout__aside {
         display: none;
     
         ${p(r.lg)} {
           display: block;
           min-width: 300px;
     
           ${x} {
             top: 90px;
           }
         }
     
         ${S} {
           &:first-child {
             margin-top: 0;
     
             ${w} {
               margin-top: 0;
             }
           }
         }
       }
       ${k} {
        ${({shouldEnableFullArticleInverted:e,theme:n})=>e&&`color: ${m(n,"colors.consumption.body.inverted.body")}`}
}

        ${k} {
          ${({dividerColor:e})=>e&&`\n                .body__inner-container  > hr {\n                    background: #${e};\n                    height: 1px;\n                }\n              `}
       }

  `,F=t("div").withConfig({displayName:"PaywallInlineBarrierWithWrapperGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${M} {\n      grid-column: 1 / -1;\n    }`}
`,U=t("div").withConfig({displayName:"ArticlePageLedeBackground"})`
  ${({theme:e})=>b(e,"lede-background")};
`,K=t("div").withConfig({displayName:"ArticlePageContentBackGround"})`
  ${({theme:e})=>b(e,"lede-background")}
  padding-top: ${d(2)};

  @media (min-width: 1208px) {
    padding-top: ${d(4)};
  }

  ${({togglePaddingTop:e,hasReducedBackgroundSpacing:n})=>"large"===e&&`padding-top: ${d(4)};\n       ${p(r.md)} { \n        padding-top: ${d(n?4:6)};\n       }\n  `}

  ${({enableActionBar:e})=>e&&`\n    ${c(r.lg)}{\n      padding-top: ${d(4)};\n    }\n  `}

  ${({togglePaddingTop:e})=>"xlarge"===e&&`${p(r.lg)} {  padding-top: ${d(8)}; }`}
  
    ${({isMobileTruncated:e})=>e&&`\n          position: relative;\n          height: 890px;\n          overflow: hidden;\n  \n          &::before {\n            display: block;\n            position: absolute;\n            bottom: 0;\n            z-index: 1;\n            background: linear-gradient(\n              0deg,\n              rgba(255, 255, 255, 1) 20%,\n              rgba(255, 255, 255, 0) 100%\n            );\n            width: 100%;\n            height: 192px;\n            content: '';\n          }\n  \n          ${p(r.md)} {\n            height: auto;\n            overflow: visible;\n  \n            &::before {\n              display: none;\n            }\n          }\n        `}

  ${({cartoonVariation:e})=>"card"===e&&o`
      ${N}::before, ${N}::after {
        border: none;
      }

      ${N} {
        ${l("background-color","colors.background.brand")};
        border: none;
        padding: ${d(3)} ${d(6)};

        ${p(r.lg)} {
          ${G} a {
            width: ${d(5)};
          }
        }
      }
    `}
`,q=t("div").withConfig({displayName:"ArticlePageChunks"})`
  ${({adRail:e})=>e&&`\n    ${H} {\n      margin-right: auto;\n      margin-left: auto;\n      width: auto;\n    }`}

  .grid:last-child {
    .body__container > .body__inner-container > *:last-child {
      ${B}:last-child {
        display: none;
      }
    }
  }

  ${({horizontalRuleStyle:e})=>"thin"===e&&"\n        .body__container {\n          .callout--has-top-border {\n            border-top-width: 1px;\n          }\n\n          hr {\n            height: 1px;\n          }\n        }\n      "}

  ${({hasTopSpacing:e})=>!e&&`\n        .inset-embedded-lede {\n          @media (min-width: 0px) and (max-width: calc(${r.md} - 1px)) {\n            ${T} {\n              transform: translateX(-50%);  /* 1 */\n              margin-left: 50%;\n              width: 100vw;\n            }\n          }\n        }\n\n        ${p(r.md)} {\n          .body__container {\n            p:first-of-type {\n              margin-top: 0;\n            }\n\n            .inset-embedded-lede {\n              margin-top: 0;\n            }\n          }\n        }\n    `}

  @media print {
    ${R} {
      display: block;
    }

    ${R} > p {
      font-size: 17px;
    }
  }

  ${({pageBackgroundTheme:e})=>e&&".ad.ad--mid-content {\n      .ad-label {\n        color: #1A1A1A;\n      }\n    }"}
`,X=t($.Utility).withConfig({displayName:"ArticlePageBodyMobileTruncatedBtn"})`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 2;
  margin-left: -100px;
  width: 200px;

  ${p(r.md)} {
    display: none;
  }
`,Y=t(f).withConfig({displayName:"ArticlePageDisclaimer"})`
  ${s("typography.definitions.discovery.subhed-section-collection")}
  p {
    ${s("typography.definitions.globalEditorial.context-secondary")};
    font-style: italic;
  }
  ${({theme:e})=>l(e,"color","colors.consumption.body.standard.body")};
  ${p(r.md)} {
    .grid-layout--adrail & {
      grid-column: 1 / -1;
    }
  }

  span {
    font-style: normal;
  }
`,J=t("div").withConfig({displayName:"ArticlePageChunksContent"})`
  ${({isNarrowContentWell:e})=>e&&`\n        .grid > *:first-child,\n        .body__container {\n          grid-column: 1 / -1;\n\n          ${p(r.lg)} {\n            grid-column: 4 / span 6;\n          }\n        }\n\n        ${N} {\n          .grid--item {\n            grid-column: 1 / -1;\n          }\n        }\n      `}

  ${({shouldBlurText:e})=>{e&&o`
        .grid:first-of-type .body__container p.has-dropcap::first-letter {
          color: transparent;
        }
        ${k} {
          * {
            text-shadow: 0 0 20px
              rgba(
                ${m("colors.consumption.body.standard.body")},
                0.5
              );
            color: transparent;
          }

          a:not(.button) {
            ${({theme:e})=>u(e,"colors.consumption.body.standard.link","colors.consumption.body.standard.link-hover")};
            text-shadow: 0 0 20px
              rgba(
                ${m("colors.consumption.body.standard.link")},
                0.5
              );
          }
        }
      `}}

  ${({hasAdditionalDropcapStyling:e,theme:n})=>e&&`\n      .body__container p.has-dropcap::first-letter {\n        ${s(n,"typography.definitions.consumptionEditorial.display-large")};\n        color: ${m(n,"colors.consumption.body.standard.accent")};\n        font-size: 80px;\n        padding: ${d(2)} ${d(2)} 0;\n        margin: 0;\n      }\n    `}
`,Q=t("article").withConfig({displayName:"ArticlePageMainContent"})`
  ${({shouldBlurText:e})=>e&&"\n        .grid {\n          .body__container {\n            p.has-dropcap,\n            p.has-dropcap__lead-standard-heading {\n              &::first-letter {\n                color: inherit;\n              }\n            }\n          }\n        }\n      "}
`,Z=t(O).withConfig({displayName:"ArticlePageSplitAdRail"})`
  ${x},
  ${x} > ${_} {
    height: 100%;
  }

  > aside > ${x} {
    position: static;
  }
`,ee=t("div").withConfig({displayName:"ArticlePageSplitAdRailContent"})`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${x} {
    margin-bottom: 0;
  }

  > div {
    flex: 1;
  }
`,ne=t("div").withConfig({displayName:"ArticlePageSplitAdRailTop"})``,ie=t("div").withConfig({displayName:"ArticlePageSplitAdRailMiddle"})`
  margin-top: 40px;
`,te=t("div").withConfig({displayName:"ArticlePageSplitAdRailBottom"})`
  margin-top: 40px;
`,ae=t("div").withConfig({displayName:"ArticlePageBodyGridContainer"})`
  width: 100%;
`,oe=t.div.withConfig({displayName:"ArticlePageChunksGrid"})`
  ${({adRail:e})=>!e&&`\n     > ${M} {\n      grid-column: 1/ -1;\n      ${p(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
  > ${M} {
    margin-bottom: ${d(2)};
  }

  ${({pageBackgroundTheme:e})=>e&&` .ad.ad--in-content {\n        display: none;\n      }\n      ${I} {\n        margin-top: 2rem;\n      }  \n    `}
`,re=t.div.withConfig({displayName:"ArticlePageContentFooterGrid"})`
  ${M} {
    grid-column: 1 / -1;
    ${p(r.md)} {
      grid-column: 3 / span 8;
    }
    ${({isNarrow:e})=>e&&`\n         ${p(r.md)} {\n            grid-column: 4 / span 6;\n          }\n         `}
  }
`,de=t.div.withConfig({displayName:"ArticlePageDisclaimerGrid"})`
  ${({adRail:e})=>!e&&`\n    > ${M} {\n      grid-column: 1/ -1;\n      ${p(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,le=t.div.withConfig({displayName:"ContentWrapperGrid"})`
  ${({isadRail:e})=>!e&&`\n    > ${M} {\n      grid-column: 1/ -1;\n      ${p(r.md)} {\n        grid-column: 3 / span 8;\n      }\n    }`}
`,se=t(A).withConfig({displayName:"LinkStackArticlePage"})`
  margin: 48px 0;
  padding-bottom: 0;

  ${v} {
    margin: 0;
  }

  ${P} > ul {
    margin-left: 0;
    padding-left: 0;
  }
`,ce=t(W).withConfig({displayName:"ArticlePageIssueDate"})`
  display: flex;
  justify-content: center;
  padding-bottom: ${d(4)};
  text-align: center;
`;ce.defaultProps={as:"span",colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.consumptionEditorial.description-feature"},e.exports={ArticlePageBase:z,ArticlePageGlobalStyle:V,ArticlePageLedeBackground:U,ArticlePageContentBackGround:K,ArticlePageChunks:q,ArticlePageBodyMobileTruncatedBtn:X,ArticlePageChunksContent:J,ArticlePageMainContent:Q,ArticlePageDisclaimer:Y,ArticlePageSplitAdRail:Z,ArticlePageSplitAdRailContent:ee,ArticlePageSplitAdRailTop:ne,ArticlePageSplitAdRailMiddle:ie,ArticlePageSplitAdRailBottom:te,ArticlePageBodyGridContainer:ae,ArticlePageChunksGrid:oe,ArticlePageContentFooterGrid:re,ArticlePageDisclaimerGrid:de,ArticlePageIssueDate:ce,ContentWrapperGrid:le,LinkStackArticlePage:se,PaywallInlineBarrierWithWrapperGrid:F}},8679:(e,n,i)=>{"use strict";var t=i(21296),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};function l(e){return t.isMemo(e)?r:d[e.$$typeof]||a}d[t.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d[t.Memo]=r;var s=Object.defineProperty,c=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,u=Object.prototype;e.exports=function e(n,i,t){if("string"!=typeof i){if(u){var a=m(i);a&&a!==u&&e(n,a,t)}var r=c(i);p&&(r=r.concat(p(i)));for(var d=l(n),h=l(i),y=0;y<r.length;++y){var b=r[y];if(!(o[b]||t&&t[b]||h&&h[b]||d&&d[b])){var $=g(i,b);try{s(n,b,$)}catch(e){}}}}return n}},29750:e=>{e.exports=function(e,n,i){return e==e&&(void 0!==i&&(e=e<=i?e:i),void 0!==n&&(e=e>=n?e:n)),e}},74691:(e,n,i)=>{var t=i(29750),a=i(14841);e.exports=function(e,n,i){return void 0===i&&(i=n,n=void 0),void 0!==i&&(i=(i=a(i))==i?i:0),void 0!==n&&(n=(n=a(n))==n?n:0),t(a(e),n,i)}},73935:(e,n,i)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=i(64448)},67294:(e,n,i)=>{"use strict";e.exports=i(72408)}}]);

}
/*
     FILE ARCHIVED ON 10:02:13 Oct 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:58:39 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.677
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.012
  esindex: 0.018
  cdx.remote: 11.12
  LoadShardBlock: 56.307 (3)
  PetaboxLoader3.datanode: 102.445 (5)
  load_resource: 299.31 (2)
  PetaboxLoader3.resolve: 225.737
*/