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

(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[2041],{42813:(i,e,a)=>{const o=a(94184),n=a(45697),t=a(67294),{default:r}=a(45698),{trackComponent:d}=a(40199),{processLinks:m,processCeros:l,processTiktok:s,processSidebarHeadings:g}=a(54436),p=a(86982),c=a(85086),{BodyWrapper:$}=a(81717),h=new r({a:m,blockquote:({props:i})=>({type:p,props:i}),ceros:l,h2:g,tiktok:s,"inline-embed":c}),u=({body:i,className:e,children:a,shouldDisableMaxWidth:n,shouldEnableDataJourneyHook:r=!0,shouldEnableFullArticleInverted:m})=>{t.useEffect((()=>{d("Body")}),[]);const l={className:o("body",e),shouldDisableMaxWidth:n,shouldEnableFullArticleInverted:m};return r&&(l["data-journey-hook"]="client-content"),t.createElement($,Object.assign({},l,{"data-testid":"BodyWrapper"}),a||h.convert(i))};u.propTypes={body:n.array,children:n.node,className:n.string,shouldDisableMaxWidth:n.bool,shouldEnableDataJourneyHook:n.bool,shouldEnableFullArticleInverted:n.bool},u.defaultProps={body:["div"],shouldDisableMaxWidth:!1},i.exports=u},94753:(i,e,a)=>{i.exports=a(42813)},42041:(i,e,a)=>{const{default:o,css:n}=a(51117),{BREAKPOINTS:t,ZINDEX_MAP:r}=a(85326),{applyGridSpacing:d,cssVariablesGrid:m}=a(62470),{calculateSpacing:l,minScreen:s,maxScreen:g,minMaxScreen:p,getColorToken:c,getTypographyStyles:$}=a(79720),h=a(7279),{universalGridCore:u}=a(61774),y=a(4131),{RowWrapper:b}=a(21920),f=a(48655),{GridItem:x}=a(14134),{SummaryRiverSection:w}=a(3183),{SummaryCollageOneGridWithMargin:k}=a(83695),{SectionTitleHed:v}=a(80577),{EmbedBody:C}=a(97893),{FeaturesRow:S}=a(43154),{TickerWrapper:T}=a(31828),_=`\n  ${m()}\n  ${d("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${t.xxl};\n`,B=o(y).withConfig({displayName:"MultiPackageBaseRow"})`
  &:first-child,
  & ~ & {
    ${({hasMarginTopMultiPackageRow:i})=>i?"":"margin-top: 0;"}
  }

  ${({hasRightAndLeftMargin:i})=>i?`\n        ${s(t.md)} {\n          padding: ${l(0)} ${l(8)};\n        }`:""}

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,M=o(h.Utility).withConfig({displayName:"MultiPackageRow"})`
  &&& {
    align-items: center;
    width: auto;
  }
`,N=o(B).withConfig({displayName:"MultiPackageRow"})`
  ${({hasNoTopMargin:i})=>i?"":`margin-top: ${l(7)};`}

  ${({hasLightBgForLinkBanner:i,hasPlpFilterableContainerLightBackgroundColor:e,theme:a,isInvertedTheme:o})=>i||e?`background-color: ${c(a,"colors.discovery.body.light.background")};`:o?`background-color: ${c(a,"colors.consumption.lead.inverted.background")};`:""}

  ${({hasMediumMargin:i,hasNoBottomMargin:e,hasReducedMargin:a,isNativeAd:o})=>i?`margin-bottom: ${l(4)};`:e||o&&a?"margin-bottom: 0;":a?`margin-bottom: ${l(2)};`:`margin-bottom: ${l(7)};`}

  ${({hasMarginBottomMultiPackageRow:i})=>i?`\n          ${s(t.lg)} {\n            margin-bottom: ${l(5)};\n          }\n          ${p(t.md,t.lg)} {\n            margin-bottom: ${l(4)};\n          }\n          ${p(0,t.md)} {\n            margin-bottom: ${l(3)};\n          }`:""}

  ${({hasNoTopBottomMarginOnMobile:i})=>i?`  ${p(0,t.md)} {\n            margin-top: 0;\n            margin-bottom: 0;\n          }`:""}

  ${({hasStickyLinkBanner:i})=>i?`\n        position: sticky;\n        top: 0px;\n        z-index: ${r.interstitialLayer};\n      `:""}

  /* TODO: this should be a configuration for a layout
     Specificity is required due to star selector in homepage  */
  ${s(t.lg)} {
    ${b}.homepage__half-column-row + && {
      width: 50%;
      max-width: 800px;
      ${v} {
        ${$("typography.definitions.discovery.subhed-section-secondary")};
      }
    }
    .homepage__half-column-row + && > ${k} {
      padding-left: var(--grid-gap);
    }
    ${w} {
      margin: 0 auto;
      max-width: 1600px;
    }
  }
`,W=o(f.WithMargins).withConfig({displayName:"DiscoveryQuoteRow"})`
  ${({hasTopAndBottomBorderQuote:i,theme:e})=>i?`\n    border-top:1px solid ${c(e,"colors.discovery.body.white.divider")};\n\n    border-bottom:1px solid ${c(e,"colors.discovery.body.white.divider")};`:""}

  ${x} {
    grid-column: 1/-1;

    ${s(t.md)} {
      grid-column: 3/11;
    }
  }
`,E=n`
  &.puzzles-games-landing-page {
    .ticker-wrapper {
      margin-bottom: 0;
    }

    .ticker-view > div:nth-child(2) {
      margin-top: ${l(4)};
    }

    .summary-collage-six-puzzles-games .summary-item:first-child h3 {
      ${$("typography.definitions.discovery.description-core")};
      font-size: ${l(4)};
    }

    .verso-features {
      margin-bottom: ${l(4)};
    }

    > div:nth-child(3)
      .summary-collage-six-puzzles-games
      .summary-list--collection-list {
      ${g(t.lg)} {
        padding-top: 0;
      }
    }

    .summary-river-puzzles-games {
      h2 {
        font-size: 24px;
      }

      & > section {
        .summary-item:last-child {
          border-bottom: 0;
        }

        > div {
          margin-bottom: ${l(2)};

          > div:first-child {
            margin-bottom: 0;
          }
        }
      }

      .summary-item {
        padding-top: ${l(2)};
      }
    }

    .summary-item--is-dense .summary-item__asset-container {
      ${p(0,t.xl)} {
        display: block;
      }

      ${s(t.xl)} {
        float: none;
        margin-left: 0;
      }
    }

    .summary-list--collection-list {
      ${p(0,t.lg)} {
        border-top: 0;
        padding-top: 0;
      }
    }

    .summary-list__items .summary-item:not(:first-child) {
      margin-bottom: 0;
      padding-bottom: ${l(2)};
    }

    .summary-list__items .summary-item:first-child {
      ${p(0,t.lg)} {
        padding-bottom: ${l(2)};
      }

      ${s(t.lg)} {
        padding-bottom: 0;
      }
    }

    .summary-collage-six-puzzles-games .summary-item h3 {
      ${$("typography.definitions.discovery.hed-core-secondary")};
    }

    .summary-collage-six-puzzles-games h2,
    .summary-collection-grid h2 {
      ${$("typography.definitions.discovery.subhed-section-primary")};
    }

    .verso-embed-row inline-embed h1 {
      margin: 0;
      font-size: ${l(5.5)};
    }

    .verso-embed-row {
      margin: ${l(4)} 0;
    }

    ${C} {
      max-width: initial;
    }

    .verso-features h2 {
      font-size: 24px;
    }

    .summary-collage-six-puzzles-games h2 {
      font-size: 20px;
    }

    .summary-item__dek > a {
      ${$("typography.definitions.foundation.link-primary")};
      display: block;
      padding-top: ${l(2.5)};
      text-decoration: none;
      color: ${c("colors.interactive.base.brand-primary")};
    }

    .summary-item__dek > a:hover {
      text-decoration: underline;
    }
  }
`,P=o.div.withConfig({displayName:"MultiPackageContainer"})`
  ${({showFooterAdPadding:i})=>i&&`padding-bottom: ${l(10,"px")};`}

  ${({customClass:i})=>i&&"puzzles-games-landing-page"===i&&E}
  ${({hasMarginBottomMultiPackageRow:i})=>i?"\n            .verso-features {\n              && {\n                margin-bottom: 0;\n              }\n            }\n          ":""}

  ${({hasEvenSpacingMultiPackageRow:i})=>i&&n`
      > ${N}, > .ad-container {
        margin-top: ${l(6)};
        margin-bottom: 0;
        ${s(t.md)} {
          margin-top: ${l(7)};
          margin-bottom: 0;
        }

        :last-child {
          margin-bottom: ${l(6)};
          ${s(t.md)} {
            margin-bottom: ${l(7)};
          }
        }
      }

      > ${N} {
        :first-child {
          margin-top: 0;
        }

        :empty {
          margin-top: 0;
          margin-bottom: 0;
        }
        > ${S} {
          margin-bottom: 0;
        }
      }

      > .ticker-view {
        + * {
          margin-top: 0;
        }
        > ${b}, ${T} {
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    `}
`,I=o.div.withConfig({displayName:"SectionJumpLinksWrapper"})`
  ${({theme:i})=>(i=>`\n    background: ${c(i,"colors.consumption.body.inverted.display-texture")};\n    ${s(t.md)} {\n      width: ${t.md};\n      padding: ${l(3)} ${l(9)} ${l(5)} ${l(9)};\n    }\n    padding: ${l(2)} ${l(5)} ${l(3.5)} ${l(5)};\n    margin: auto;\n    div {\n      div {\n        h1 {\n          text-align: center;\n        }\n        div {\n          a {\n            font-family: Konnect, helvetica, sans-serif;\n            font-style: normal;\n            line-height: ${l(2.4,"rem")};\n            font-size: ${l(2)};\n            &:not(.button):link,\n            &:not(.button):visited {\n              color: rgb(0, 0, 0);\n            }\n          }\n          display: grid;\n          ${s(t.md)} {\n            grid-template-columns: 1fr 1fr 1fr;\n            grid-row-gap: ${l(1.5)};\n          }\n          grid-template-columns: 1fr 1fr;\n          grid-row-gap: ${l(1)};\n        }\n      }\n    }\n  }\n  `)(i)}
`,R=o(N).withConfig({displayName:"MultiPackageReadMore"})`
  display: flex;
  justify-content: center;
`,O=o.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${_}
`,L=o.div.withConfig({displayName:"EventsListWrapper"})`
  ${m()}

  margin: 0 auto;
  width: 100%;
  max-width: ${t.xxl};

  ${s(t.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,D=o.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${_}
`,z=o.div.withConfig({displayName:"NewsletterWrapper"})`
  ${_}

  padding-top: ${l(6)};
  padding-bottom: ${l(6)};

  ${s(t.md)} {
    padding-top: ${l(9)};
    padding-bottom: ${l(9)};
  }
`,F=o.div.withConfig({displayName:"CMUnitWrapper"})`
  ${_}

  ${s(t.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,A=o.div.withConfig({displayName:"SubTopicDiscoveryWrapper"})`
  ${u(!0)}
  ${d("padding")}

  margin: 0 auto;
  width: 100%;
  max-width: ${t.xxl};

  ${s(t.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,G=o.div.withConfig({displayName:"TickerWrapper"})`
  ${({isInvertedTheme:i})=>i?`\n        ${m()}\n        ${d("padding",!0)}`:`${_}`}
`,j=o("div").withConfig({displayName:"MultipackageNoItemsBlock"})`
  ${m()}
  ${d("padding")}
  margin: 0 auto;
  margin-bottom: ${l(4)};
  width: 100%;
  max-width: ${t.xxl};
  color: white;
  font-family: 'LabGrotesque';
  ${({hasRule:i,theme:e})=>i?`\n        &::before {\n          border-top: 1px solid ${c(e,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${l(4)};\n          display: block;\n        }\n      `:""}

  h3 {
    margin: 0 auto;
    width: fit-content;
    ${$("typography.definitions.consumptionEditorial.subhed-break-secondary")}
  }

  p {
    font-family: Proxima Nova;
    font-size: 12px;
  }
`,q=o.div.withConfig({displayName:"MultiPackageBodyWrapperGrid"})`
  ${u()}
  ${d("padding")}
`;i.exports={CMUnitWrapper:F,DiscoveryQuoteRow:W,EventsListWrapper:L,MultiPackageContainer:P,MultiPackageRow:N,MultiPackageReadMore:R,NewsFeedWrapper:D,NewsletterWrapper:z,PromoBoxWrapper:O,SubTopicDiscoveryWrapper:A,TickerWrapper:G,MultipackageNoItemsBlock:j,MultiPackageBodyWrapperGrid:q,SectionJumpLinksWrapper:I,UtilityButton:M}},83695:(i,e,a)=>{const{default:o,css:n}=a(51117),{SectionTitleLinkHTML:t,SectionTitleLinkWrapper:r}=a(80577),{BREAKPOINTS:d}=a(85326),{maxThresholds:m}=a(28657),{applyGridSpacing:l,cssVariablesGrid:s}=a(62470),{RubricLink:g}=a(7320),{SectionTitleRoot:p,SectionTitleHed:c}=a(80577),{calculateSpacing:$,maxScreen:h,minScreen:u,minMaxScreen:y,getTypographyStyles:b,getColorToken:f,getColorStyles:x}=a(79720),{BaseLink:w}=a(74327),{SocialIconsList:k}=a(96860),{SpanWrapper:v}=a(89676),{StickyBoxWrapper:C}=a(29659),{SummaryItemWrapper:S}=a(88269),T=o.div.withConfig({displayName:"SummaryCollageOneAside"})`
  display: none;
  grid-row: 1 / -1;
  justify-self: end;

  ${C} {
    top: ${$(10)};
  }

  ${y(d.md,`${m.lg}px`)} {
    display: block;
    grid-column: 7 / -1;
  }

  ${u(d.lg)} {
    display: block;
    grid-column: 9 / -1;
  }
`,_=o.div.withConfig({displayName:"SummaryCollageOneTitle"})`
  grid-column: 1 / -1;

  ${({isSingleFeature:i})=>!i&&`\n      margin-bottom: ${$(2)};\n\n      ${u(d.md)} {\n        margin-bottom: ${$(1)};\n      }\n\n      ${u(d.lg)} {\n        margin-bottom: ${$(0)};\n      }\n    `}
`,B=o.div.withConfig({displayName:"SummaryCollageOneCtaIcon"})`
  border-radius: ${$(1)};
  background-color: ${({theme:i})=>f(i,"colors.discovery.lead.secondary.background")};
  background-image: ${({icon:i})=>`url('${i}')`};
  width: ${$(6)};
  height: ${$(6)};

  ${u(d.lg)} {
    margin-right: ${$(2)};
  }

  ${h(`${m.lg}px`)} {
    margin-bottom: ${$(2)};
  }
`,M=o(w).withConfig({displayName:"SummaryCollageOneAnchorLink"})`
  ${b("typography.definitions.foundation.link-primary")}
  display: inline-block;
  margin-bottom: ${$(2)};
  vertical-align: top;

  ${u(d.lg)} {
    margin-bottom: ${({showCtaIcon:i})=>i?0:$(4)};
  }
`,N=o.div.withConfig({displayName:"SummaryCollageOneCtaLink"})`
  grid-column: 1 / -1;
  text-align: center;

  span {
    display: block;
    width: 100%;
    text-align: center;
  }

  ${({showCtaIcon:i})=>i&&`\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      \n      ${u(d.lg)} {\n        flex-direction: row;\n      }\n    `}
`;M.defaultProps={colorSecondaryLinkToken:"colors.interactive.base.dark",colorStaticLinkToken:"colors.interactive.base.brand-primary",linkStyle:"global"};const W=n`
  ${s()}
  ${l("padding")}

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${d.xxl};
  row-gap: var(--grid-gap);

  .summary-item--layout-placement-text-below {
    &.summary-item--text-align-left,
    &.summary-item--text-align-center {
      .summary-item__hed {
        ${b("typography.definitions.discovery.hed-break-out")};
      }

      .summary-item__dek {
        ${b("typography.definitions.discovery.description-feature")};
      }
    }
  }

  ${({theme:i,shouldUseHedFeatureToken:e})=>e&&`\n      .summary-item .summary-item__hed {\n        ${b(i,"typography.definitions.discovery.hed-feature")};\n      }\n    `};

  .summary-item__hed-link {
    &::after {
      border-bottom: 1px solid
        ${f("colors.discovery.body.white.accent")};
    }
  }

  .summary-item__content:empty {
    display: none;
  }

  ${k} {
    justify-content: center;
  }

  ${u(d.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,E=o.div.withConfig({displayName:"SummaryCollageOneItemComponent"})`
  grid-column: 1 / -1;

  &&& {
    border-bottom: 0;

    .summary-item__content {
      margin: 0;
      @media (min-width: 0) and (max-width: ${d.lg}) {
        margin: 0;
      }
    }
    @media (min-width: 0) and (max-width: ${d.md}) {
      padding-bottom: 0;
    }
  }
`,P=n`
  &&& {
    grid-gap: ${$(4)};
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }

  ${E} {
    display: grid;
    align-items: center;
  }

  ${v}.summary-item__image {
    .summary-item__image {
      display: grid;
      justify-items: center;
      ${({hasEnhancedDailyCartoon:i})=>i&&`\n          ${u(d.lg)} {\n            gap: ${$(3)};\n          }\n        `}

      picture {
        max-width: ${$(37.5)};

        ${u(d.lg)} {
          max-width: ${({hasEnhancedDailyCartoon:i})=>$(i?68.75:50)};
        }

        ${h(`${m.md}px`)} {
          max-width: ${({hasEnhancedDailyCartoon:i})=>$(i?68.75:50)};
        }
      }
    }

    .responsive-cartoon__caption {
      margin-top: 0;
      ${u(d.lg)} {
        margin-top: ${({hasEnhancedDailyCartoon:i})=>i?0:$(2)};
        width: 85%;
      }
    }
  }
`,I=n`
  ${y(0,d.lg)} {
    .summary-item__asset-container {
      ${l("margin",!0)};
    }
  }
`,R=n`
  &&& {
    grid-template-rows: unset;
    background-color: ${f("colors.discovery.body.dark.background")};
    max-width: ${d.xxl};

    ${y(d.sm,d.md)} {
      column-gap: ${$(9)};
      margin: ${$(0)};
      padding: ${$(0)};
    }
    ${u(d.md)} {
      column-gap: ${$(3)};
      margin: ${$(0)};
      padding: ${$(5)} ${$(3)};
    }
    ${u(d.lg)} {
      margin: ${$(0)};
      padding: ${$(7)} ${$(6)};
    }
    ${u(d.xl)} {
      column-gap: 2rem;
      margin: ${$(0)};
      padding: ${$(10)} ${$(8)};
    }
    ${u(d.xxl)} {
      column-gap: 2rem;
      margin: auto;
      padding: ${$(10)} ${$(8)};
    }
  }
  ${g} {
    color: ${f("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__rubric {
    color: ${f("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__dek {
    color: ${f("colors.discovery.body.dark.description")};
  }

  .summary-item__hed--hed-core-primary {
    ${b("typography.definitions.discovery.hed-core-primary")}
    color: ${f("colors.discovery.body.dark.heading")};
  }

  .summary-item__hed {
    color: ${f("colors.discovery.body.dark.heading")};
  }

  .summary-item--dark-background-right {
    ${u(d.md)} {
      grid-column: 2 / -2;
      margin: ${$(0)} ${$(-3)};
    }
    ${u(d.lg)} {
      grid-column: 2 / -2;
      margin: ${$(0)} ${$(-3)};
      padding: ${$(0)};
    }
    ${u(d.xl)} {
      grid-column: 2 / -2;
      margin: ${$(0)} ${$(-4)};
      padding: ${$(0)};
    }
    ${u(d.xxl)} {
      grid-column: 2 / -2;
      margin: ${$(0)};
      padding: ${$(0)};
    }

    .summary-item__asset-container {
      ${u(d.md)} {
        margin-left: ${$(-3)};
      }
      ${u(d.xl)} {
        margin-left: ${$(0)};
      }
    }
  }

  .summary-item__content {
    margin: ${$(0)};
    ${u(d.md)} {
      padding-right: ${$(3)};
    }
    ${u(d.lg)} {
      padding-right: ${$(5)};
    }
    ${u(d.xl)} {
      padding-right: ${$(3)};
    }
    ${u(d.xxl)} {
      padding-right: ${$(6)};
    }
  }
`,O=o.div.withConfig({displayName:"SummaryCollageOneGridWithMargin"})`
  ${W}
  ${({isSingleFeature:i})=>i&&P}

  ${({hasFullWidthImage:i})=>i&&I}
  
  ${({isFullBleedDarkBackground:i})=>i&&R}

  ${({hasEnhancedDailyCartoon:i,theme:e})=>i&&n`
      ${y(d.md,`${m.lg}px`)} {
        ${_}, ${E}, ${N} {
          grid-column: 1 / 7;
        }
      }

      ${h(`${m.lg}px`)} {
        &&& {
          gap: ${$(3)};
        }
      }

      ${u(d.lg)} {
        &&& {
          grid-row-gap: 0;
        }

        ${N} {
          margin-top: ${$(4)};
        }

        ${_}, ${E}, ${N} {
          grid-column: 1 / 9;
        }
      }

      ${p} {
        display: flex;
        justify-content: center;
        margin-bottom: ${$(3)};

        ${c} {
          ${b(e,"typography.definitions.discovery.subhed-section-primary")};
        }
      }
    `}

    ${({showCartoonLink:i})=>i&&n`
      ${h(`${m.lg}px`)} {
        &&& {
          grid-row-gap: 0;
        }
      }
    `}

    ${({customizedBackgroundColorToken:i,hasRoundedCorners:e})=>(i||e)&&n`
      ${S} {
        border-radius: ${({hasRoundedCorners:i})=>i?"20px":""};
        background-color: ${({customizedBackgroundColorToken:i})=>i?f(i):""};
        padding-bottom: 0;

        .aspect-ratio--overlay-container {
          ${u(d.sm)} {
            border-top-left-radius: ${({hasRoundedCorners:i})=>i?"20px":""};
            border-top-right-radius: ${({hasRoundedCorners:i})=>i?"20px":""};
          }
          ${u(d.md)} {
            border-top-left-radius: ${({hasRoundedCorners:i})=>i?"20px":""};
            border-top-right-radius: ${({hasRoundedCorners:i})=>i?"0px":""};
            border-bottom-left-radius: ${({hasRoundedCorners:i})=>i?"20px":""};
          }
        }
      }

      .summary-item__content {
        ${h(d.md)} {
          padding-top: ${$(4)};
          padding-right: ${$(3)};
          padding-bottom: ${$(7)};
          padding-left: ${$(3)};
        }
      }
    `}
`,L=o.div.withConfig({displayName:"SummaryCollageOneIsFullBleed"})`
  ${({isFullBleedDarkBackground:i})=>i&&n`
      background-color: ${f("colors.discovery.body.dark.background")};
      max-width: 100%;
    `}
`,D=o(r).withConfig({displayName:"SummaryCollageOneDangerousDek"})`
  display: flex;
  justify-content: center;
  margin-top: ${$(4)};
  padding-left: 0;
  ${({theme:i})=>x(i,"color","colors.interactive.base.black")};

  ${h(`${m.md}px`)} {
    grid-column: 1 / -1;
  }

  ${y(d.md,`${m.lg}px`)} {
    grid-column: 1 / 7;
  }

  ${u(d.lg)} {
    grid-column: 1 / 9;
  }
`;i.exports={SummaryCollageOneTitle:_,SummaryCollageOneCtaLink:N,SummaryCollageOneGridWithMargin:O,SummaryCollageOneIsFullBleed:L,SummaryCollageOneItemComponent:E,SummaryCollageOneAnchorLink:M,SummaryCollageOneCtaIcon:B,SummaryCollageOneAside:T,SectionTitleLinkHTML:t,SummaryCollageOneDangerousDek:D}},43154:(i,e,a)=>{const{default:o,css:n}=a(51117),{calculateSpacing:t,minScreen:r,getColorToken:d,getTypographyStyles:m,maxScreen:l,minMaxScreen:s}=a(79720),{BREAKPOINTS:g}=a(85326),p=a(4131),{CarouselControlButton:c,CarouselFooter:$,CarouselList:h,CarouselListItem:u,CarouselTitle:y,CarouselWrapper:b,CurrentSlideIndicatorWrapper:f,CarouselSectionTitle:x}=a(95764),w=o.div.withConfig({displayName:"CarouselViewAll"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${t(2)} 0;
  width: 100%;

  ${({hasCarouselButtonIncreasedMarginBottom:i})=>i&&`\n      margin-bottom: ${t(6)};\n    `}
`,k=()=>n`
    ${s(0,`calc(${g.md} - 1px)`)} {
      padding-right: ${t(3)};
    }

    ${s(g.md,`calc(${g.xl} - 1px)`)} {
      padding-right: ${t(6)};
    }

    ${s(g.xl,g.xxl)} {
      padding-right: ${t(8)};
    }
  `,v=o(p).withConfig({displayName:"CarouselRow"})`
  margin: 0 auto;

  &.product__carousel--has-increased-padding {
    padding-top: ${t(5)};
    padding-bottom: ${t(5)};
  }

  &.product__carousel--has-moderate-padding {
    padding-top: ${t(5)};
    padding-bottom: ${t(5)};

    @media (min-width: ${g.md}) {
      padding-top: ${t(5)};
    }

    @media (min-width: ${g.xl}) {
      padding-top: ${t(7)};
      padding-bottom: ${t(7)};
    }
  }

  &.product__carousel--has-full-bleed {
    ${b} {
      padding-right: 0;
      padding-left: 0;
      max-width: 100%;
    }
    ${h} {
      margin: 0;
    }
  }

  &.product__carousel--has-full-bleed-right {
    ${b} {
      ${l(g.xxl)} {
        padding-right: 0;
      }
    }

    ${$} {
      ${k()};
    }
  }

  &.product__carousel--body-has-full-bleed-right {
    ${b} {
      ${l(g.xxl)} {
        padding-right: 0;
        ${x},${f} {
          margin-right: 4rem;
        }
        ${f} {
          margin-top: 2rem;
        }
      }
      ${l(g.xl)} {
        ${x},${f} {
          margin-right: 3rem;
        }
      }
      ${l(g.md)} {
        ${x},${f} {
          margin-right: 1.5rem;
        }
      }
    }
    ${$} {
      ${k()};
    }
  }

  ${y} {
    ${({theme:i})=>m(i,"typography.definitions.discovery.subhed-section-primary")};

    color: ${({theme:i})=>d(i,"colors.discovery.body.light.heading")};
  }

  ${b} {
    margin: 0 auto;
    margin-bottom: ${t(4)};
    padding-right: ${t(3)};
    padding-left: ${t(3)};
    ${({hasFullBleedCarouselWithPaddingWrapperOnMobile:i})=>i&&` @media (max-width: ${g.md}) {\n        padding: 0;\n      }\n    `}
    max-width: ${g.lg};
    ${({hasCarouselTopMargin:i})=>i&&`margin: ${t(4)} auto;`}

    @media (min-width: ${g.md}) {
      padding-right: ${t(6)};
      padding-left: ${t(6)};
      max-width: ${g.lg};
    }

    @media (min-width: ${g.lg}) {
      padding-right: ${t(6)};
      padding-left: ${t(6)};
      max-width: ${g.xl};
    }

    @media (min-width: ${g.xl}) {
      padding-right: ${t(8)};
      padding-left: ${t(8)};
      max-width: ${g.xxl};
    }

    @media (min-width: ${g.xxl}) {
      padding-bottom: ${t(5)};
    }

    &.carousel--has-moderate-spacing {
      @media (min-width: ${g.xxl}) {
        padding-bottom: 0;
      }

      ${h} {
        margin-top: ${t(4)};
        @media (min-width: ${g.xl}) {
          margin-top: ${t(5)};
        }
      }
    }
  }

  ${h} {
    margin-top: ${t(2)};
    background: none;
    overflow-x: auto;
  }

  ${c} {
    &:disabled {
      display: none;
    }
  }

  ${u} {
    ${({hasMarginOnDesktop:i})=>i&&"\n    margin: 0 32px 0 0;\n    &:first-of-type {\n      margin-left: -1px;\n    }\n    &:last-of-type {\n      margin-right: 0;\n    }\n  "}
    ${({hasFullBleedCarouselWithPaddingWrapperOnMobile:i})=>i&&"\n    @media (max-width: 760px) {\n      margin: 0;\n      padding-left: 12px;\n    \n      &:last-of-type {\n        padding-right: 24px; \n        width: 96%;\n      }\n      &:first-of-type {\n        padding-left: 24px; \n        width: 92%;\n      }\n    }\n  "}
    .summary-item__rubric {
      ${({theme:i})=>m(i,"typography.definitions.globalEditorial.context-primary")};

      color: ${({theme:i})=>d(i,"colors.discovery.body.light.context-signature")};
    }
  }

  .summary-item__content {
    padding-bottom: ${t(2)};
    width: auto;

    @media (min-width: ${g.xxl}) {
      padding-bottom: ${t(4)};
    }
  }

  .summary-item--bundle {
    .summary-item__content {
      width: auto;
    }

    .summary-item__hed {
      margin-top: 0;
      margin-bottom: ${t(1)};
    }
  }

  .summary-item {
    .summary-item__hed {
      width: auto;
      ${({shouldOverrideTypeToken:i,theme:e})=>m(e,i?"typography.definitions.discovery.hed-core-secondary":"typography.definitions.discovery.hed-core-primary")};

      color: ${({theme:i})=>d(i,"colors.discovery.body.light.heading")};
    }
  }

  .summary-item__hed-link::after {
    ${({theme:i})=>`\n        border-bottom: 1px solid ${d(i,"colors.discovery.body.light.accent")};\n      )};\n      `}

    .summary-item__dek {
      ${({shouldOverrideTypeToken:i,theme:e})=>m(e,i?"typography.definitions.discovery.description-core":"typography.definitions.discovery.description-feature")};

      color: ${({theme:i})=>d(i,"colors.discovery.body.light.description")};
    }
  }
`,C=o(p).withConfig({displayName:"FeaturesRow"})`
  ${({hasMinimalVerticalSpacing:i,hasReducedBottomMargin:e,hasReducedMargin:a,hasIncreasedVerticalPaddingTop:o,hasNoTopBottomMarginOnMobile:n,shouldUseCustomMargin:d})=>o?`margin-top: ${t(5)};`:i?`margin-bottom: ${t(2)};`:a?"margin-bottom: 0;":e?`margin-bottom: ${t(3)};`:n?`\n          ${r(g.sm)} {\n            margin-top: 0;\n            margin-bottom: 0;\n          }`:d?`margin-bottom: ${t(5)};`:`margin-bottom: ${t(7)};`}

  &.verso-features--has-increased-padding {
    padding-top: ${t(6)};
    padding-bottom: ${t(6)};

    @media (min-width: ${g.md}) {
      padding-top: ${t(8)};
      padding-bottom: ${t(8)};
    }

    @media (min-width: ${g.xl}) {
      padding-top: ${t(10)};
      padding-bottom: ${t(10)};
    }
  }

  &.verso-features--has-increased-padding-top {
    padding-top: ${t(8)};
  }
`;i.exports={CarouselRow:v,FeaturesRow:C,CarouselViewAll:w}},14694:(i,e,a)=>{const o=a(45697),n=a(67294),t=a(94184),{BlockquoteEmbedWrapper:r,BlockquoteEmbedContent:d,BlockquoteEmbedFooter:m,BlockquoteEmbedCite:l}=a(45470),{trackComponent:s}=a(40199),g=({attributes:i,children:e,citeUrl:a,className:o,dangerousAttribution:g,hasParagraphMargin:p,hasSmallMargins:c,hasTopBorder:$,shouldUseBodyColor:h})=>(n.useEffect((()=>{s("BlockquoteEmbed")}),[]),n.createElement(r,Object.assign({},i,{cite:a,hasTopBorder:$,hasSmallMargins:c,className:t(o,"blockquote-embed")}),n.createElement(d,{hasParagraphMargin:p,shouldUseBodyColor:h,className:"blockquote-embed__content"},e),g&&n.createElement(m,null,n.createElement(l,{dangerouslySetInnerHTML:{__html:g}}))));g.propTypes={attributes:o.object,children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,citeUrl:o.string,className:o.string,dangerousAttribution:o.string,hasParagraphMargin:o.bool,hasSmallMargins:o.bool,hasTopBorder:o.bool,shouldUseBodyColor:o.bool},g.defaultProps={hasSmallMargins:!1,hasTopBorder:!0,shouldUseBodyColor:!1},g.displayName="BlockquoteEmbed",i.exports=g},86982:(i,e,a)=>{const{asConfiguredComponent:o}=a(36380),n=a(14694);i.exports=o(n,"BlockquoteEmbed")},31828:(i,e,a)=>{const o=a(51117).default,n=a(98288),{BaseText:t,BaseLink:r}=a(74327),{BREAKPOINTS:d}=a(85326),{getTypographyStyles:m,calculateSpacing:l,getColorStyles:s}=a(79720),g=o.section.withConfig({displayName:"TickerWrapper"})`
  ${"\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"}
  ${({layoutPlacement:i})=>"text-below-mobile-only"===i&&`\n      flex-direction: column;\n      @media (min-width: ${d.md}) {\n        flex-direction: row;\n      }`}

  ${({hasBorders:i,isInverted:e,theme:a})=>i&&`\n      border-width: 1px 0;\n      border-style: solid;\n      ${s(a,"border-color","colors.discovery.body.white.divider")};\n    `}

  ${({hasSolidBorders:i,theme:e})=>i&&`border-width: 4px 0px;\n    border-style: solid;\n    ${s(e,"border-color","colors.interactive.base.black")};`}

  ${({isInverted:i,theme:e})=>i&&`\n      ${s(e,"background","colors.consumption.lead.inverted.heading-background")};\n    `}

  padding: ${l(2)} 0;

  @media (min-width: ${d.md}) {
    padding: ${l(1)} 0;
  }

  min-height: 88px;

  ${({marginTopType:i})=>"small"===i?`margin-top: ${l(1)};`:"large"===i?`margin-top: ${l(4)};`:"none"===i?"margin-top: 0;":""}

  ${({hasMinimalBottomMargin:i})=>i&&`margin-bottom: ${l(2)};`}

  ${({hideTopBorder:i})=>i&&"\n  border-top: 0px\n"}

  ${({isSpecialTheme:i,theme:e})=>i&&`\n    ${s(e,"background","colors.consumption.body.special.bg-photo")};\n  `}
`,p=o.span.withConfig({displayName:"TickerText"})`
  ${"\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"}
  flex-direction: column;
  @media (min-width: ${d.md}) {
    flex-direction: row;
    gap: 5px;
  }

  ${({layoutPlacement:i})=>"side-by-side"===i?`\n      margin-left: ${l(4)};\n      @media (min-width: ${d.md}) {\n        margin-left: 0;\n      }\n    `:"dense"===i?`\n      display: block;\n      margin-left: ${l(2)};\n      `:""}

  ${({theme:i})=>m(i,"typography.definitions.foundation.link-primary")}
`,c=o(n).withConfig({displayName:"TickerImage"})`
  position: relative;
  height: auto;

  ${({imagePosition:i})=>"right"===i&&`\n    order: 2;\n    margin-top: ${l(2)};\n\n    @media (min-width: ${d.md}) {\n      margin-top: 0;\n      margin-left: ${l(1)};\n    }\n  `};

  ${({hasRoundedImage:i})=>i&&`\n    border-radius: ${l(1)}\n  `};

  ${({layoutPlacement:i})=>"dense"===i?`\n      min-width: ${l(6)};\n      `:"\n      min-width: 75px;\n      "}

  img {
    max-height: 75px;
  }
`,$=o(t).withConfig({displayName:"TickerHed"})`
  ${({layoutPlacement:i})=>"text-below-mobile-only"===i&&`\n      text-align: center;\n      margin: ${l(2)} 0 ${l(2)} 0;\n      @media (min-width: ${d.md}) {\n        margin: 0 ${l(2)} 0 ${l(2)};\n      }\n      `}

  ${({isInverted:i,theme:e})=>s(e,"color",i?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.standard.heading")};

  ${({isLink:i,layoutPlacement:e})=>i&&"dense"!==e&&`\n    padding-bottom: ${l(1)};\n    @media (min-width: ${d.md}) {\n      padding-right: ${l(1)};\n    }\n  `}

  ${({typeTokenSet:i,theme:e})=>"utility"===i?m(e,"typography.definitions.utility.body"):""};
`;$.defaultProps={as:"span",colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.description-feature"};const h=o(r).withConfig({displayName:"TickerLink"})`
  ${({typeTokenSet:i,theme:e})=>m(e,"utility"===i?"typography.definitions.utility.button-utility":"typography.definitions.discovery.description-feature")}

  &:visited,
  &:link {
    ${({isInverted:i,theme:e})=>s(e,"color",i?"colors.interactive.base.white":"colors.interactive.base.brand-primary")};
  }

  &:hover {
    ${({isInverted:i,theme:e})=>s(e,"color",i?"colors.interactive.base.brand-primary":"colors.interactive.base.dark")};
  }

  &:focus {
    ${({isInverted:i,theme:e})=>s(e,"color",i?"colors.interactive.base.brand-primary":"colors.interactive.base.dark")};
  }
  ${({layoutPlacement:i})=>"side-by-side"===i?`padding: 0 ${l(4)}`:"dense"===i?`margin: 0 auto 0 ${l(1)}`:""}
`;i.exports={TickerHed:$,TickerText:p,TickerImage:c,TickerWrapper:g,TickerLink:h}},97893:(i,e,a)=>{const{default:o,css:n}=a(51117),{BREAKPOINTS:t}=a(85326),{applyGridSpacing:r,cssVariablesGrid:d}=a(62470),{calculateSpacing:m,minScreen:l,getColorToken:s,getTypographyStyles:g,firstLetterDropCap:p}=a(79720),{BaseText:c}=a(74327),$=a(48655),h=a(94753),u=`\n  ${d()}\n  ${r("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${t.xxl};\n`,y=o.div.withConfig({displayName:"EmbedWrapper"})`
  ${u}

  ${({isEmbedWrapperFullBleed:i})=>i&&n`
      padding-right: 0;
      padding-left: 0;
      max-width: 100%;
    `}
`,b=o.div.withConfig({displayName:"EmbedWrapperHed"})`
  margin-bottom: ${m(2)};
`,f=o(c).withConfig({displayName:"EmbedWrapperDek"})`
  margin: 0 auto ${m(2)};
  padding-right: ${m(1)};
  padding-left: ${m(1)};
  max-width: ${m(75)};
  text-align: center;
  ${g("typography.definitions.consumptionEditorial.description-core")}
`,x=o($).withConfig({displayName:"GridWrapper"})`
  ${u}
`,w=o(h).withConfig({displayName:"EmbedBody"})`
  p.has-dropcap {
    margin-top: ${m(4,"px")};

    &::first-letter {
      ${p};
    }

    &.has-dropcap__lead-standard-heading {
      &::first-letter {
        padding: 0.1em 0.05em 0 0;
        color: ${s("colors.consumption.lead.standard.heading")};
      }
    }
  }
  ${({constrainPagragraph:i})=>i&&`\n      inline-embed{\n        display: block;\n        p {\n          display:inline-block;\n          max-width: ${m(40.875)};\n          ${l(t.lg)} {\n            max-width: ${m(91.5)};\n          }\n        }\n      }\n    `}
`;i.exports={EmbedWrapper:y,EmbedWrapperHed:b,EmbedWrapperDek:f,EmbedBody:w,GridWrapper:x}}}]);

}
/*
     FILE ARCHIVED ON 10:02:10 Oct 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:58:30 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.603
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.013
  esindex: 0.011
  cdx.remote: 26.049
  LoadShardBlock: 66.144 (3)
  PetaboxLoader3.datanode: 94.657 (5)
  load_resource: 288.983 (2)
  PetaboxLoader3.resolve: 183.928 (2)
*/