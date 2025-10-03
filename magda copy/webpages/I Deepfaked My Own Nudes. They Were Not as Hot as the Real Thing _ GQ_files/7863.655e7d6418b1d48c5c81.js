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

(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[7863],{32554:(e,t,o)=>{const a=o(94184),n=o(45697),i=o(67294),{useIntl:r}=o(36319),l=o(87962),{storyVideoPosition:s}=o(26544),d=o(83647),c=o(84076),m=o(98288),p=o(13134),{transformLegacySources:u}=o(8998),h=o(19206).Z,{ContentHeaderLeadAsset:g,ContentHeaderResponsiveAsset:b,ContentHeaderLeadAssetContent:y,ContentHeaderLeadAssetCaption:C,ContentHeaderLeadAssetContentMedia:f,ContentHeaderLedeLightboxButton:S,ContentHeaderLeadRailAnchor:$,ContentHeaderLeadContentFullWidth:k,ContentHeaderLeadContentCaptionCredit:w,ContentHeaderLeadAssetAwards:T}=o(6845),{useState:v,Fragment:A}=i,L="portrait",E=({awards:e,className:t,captionWidth:o,containerTheme:n,lede:m,mediaWidth:E,shouldRenderRailAnchor:x,showFullWidthLeadImage:B,socialIcons:I,hasLightboxButton:R,hasStaticPositionedAward:H,hasInvertedLedeBackground:N,hideLedeCaption:W,shouldAlignCenterWhenNoCaption:O})=>{const[P,D]=v((e=>{var t;const o=null===(t=null==e?void 0:e.masterAspectRatio)||void 0===t?void 0:t.split(":");return(null==e?void 0:e.restrictCropping)&&2===(null==o?void 0:o.length)&&Number(o[0])/Number(o[1])<=1?L:"landscape"})(m)),{formatMessage:M}=r(),_=({width:e,height:t})=>{e/t<=1&&D(L)},j=u(m),U="cnevideo"===m.modelName,V="gallery"===m.modelName,F="clip"===m.modelName,G=!W&&(m.caption&&m.caption.trim()||m.credit&&m.credit.trim()),q=O&&(!m.caption||""===m.caption),z=i.createElement(C,{dangerousCaptionText:m.caption,dangerousCredit:m.credit,mediaWidth:E,isLedeTextCenterForMobile:q});return i.createElement(A,null,i.createElement(g,{className:a("lead-asset",t),mediaWidth:E,containerTheme:n,ledeContentType:m.contentType,ledeAssetOrientation:P,hasInvertedLedeBackground:N,"data-testid":"ContentHeaderLeadAsset"},i.createElement(y,null,i.createElement(f,{ledeContentType:m.contentType,showFullWidthLeadImage:B,mediaWidth:E,className:`lead-asset__content__${m.contentType}`},!U&&!V&&!F&&i.createElement(A,null,e&&!H&&i.createElement(T,{awards:e,hasStaticPositionedAward:H}),i.createElement(b,Object.assign({},j,{onAssetLoaded:_,shouldRestrictCropping:null==m?void 0:m.restrictCropping,masterAspectRatio:null==m?void 0:m.masterAspectRatio,shouldHoldImageSpace:!0,mediaWidth:E,"data-testid":"assetMedia"}))),U&&m.scriptEmbedUrl&&i.createElement(l,{shouldAutoplay:!0,scriptUrl:m.scriptEmbedUrl,shouldHaveTeaser:!0,videoEmbedPosition:s}),V&&i.createElement(d,Object.assign({},m,{showNoAdsFromParent:!0})),I&&i.createElement(p.Overlay,{links:I.links}),F&&i.createElement(b,Object.assign({},j,{onAssetLoaded:_,shouldRestrictCropping:null==m?void 0:m.restrictCropping,masterAspectRatio:null==m?void 0:m.masterAspectRatio,shouldHoldImageSpace:!0,mediaWidth:E,"data-testid":"assetMedia"})),R&&i.createElement(S,{onClickHandler:()=>{document.querySelector(".responsive-image--expandable").click()},ButtonIcon:()=>i.createElement(c,null),hasEnableIcon:!0,btnStyle:"text",iconPosition:"before",inputKind:"button",isStaticText:!0,label:M(h.showAllPhotos),shouldRenderCaption:G}),G&&"fullbleed"!==o&&z,e&&H&&i.createElement(T,{awards:e,hasStaticPositionedAward:H}))),x&&i.createElement($,{"data-testid":"ContentHeaderLeadRailAnchor"})),G&&"fullbleed"===o&&i.createElement(k,null,i.createElement(w,null,z)))};E.propTypes={awards:n.array,captionWidth:n.oneOf(["standard","fullbleed"]),className:n.string,containerTheme:n.oneOf(["standard","inverted","special"]),hasInvertedLedeBackground:n.bool,hasLightboxButton:n.bool,hasStaticPositionedAward:n.bool,hideLedeCaption:n.bool,lede:n.oneOfType([n.shape(m.propTypes),n.shape(l.propTypes)]).isRequired,mediaWidth:n.oneOf(["small","smallrule","grid","fullbleed"]),shouldAlignCenterWhenNoCaption:n.bool,shouldRenderRailAnchor:n.bool,showFullWidthLeadImage:n.bool,socialIcons:n.shape(p.propTypes)},E.defaultProps={captionWidth:"standard",hasStaticPositionedAward:!1,hideLedeCaption:!1,shouldAlignCenterWhenNoCaption:!1},e.exports=E,e.exports.transformLegacySources=u},19206:(e,t,o)=>{const a=o(36319);t.Z=(0,a.defineMessages)({showAllPhotos:{id:"ContentHeader.ShowAllPhotos",defaultMessage:"Show all Photos",description:"Call to action to view entire photo gallery"},readReviews:{id:"ContentHeader.ReadReviews",defaultMessage:"Read Reviews",description:"Call to action to read reviews"}})},46990:(e,t,o)=>{const a=o(45697),n=o(67294),{useIntl:i}=o(36319),r=o(7279),l=o(44031),s=o(22444).Z,{componentTracking:d}=o(28601),{useOnAdFilled:c}=o(84540),{asConfiguredComponent:m}=o(36380),{trackComponent:p}=o(40199),{SummaryCollectionSplitColumnsWrapper:u,SummaryCollectionSplitColumnsItems:h,SummaryCollectionSplitColumnsRecsWrapper:g,SummaryCollectionSplitColumnsItem:b}=o(79663),y=({className:e,dangerousHed:t,guideItem:o,hasBackgroundColor:a,hasBorderItem:l,hasExtraRubricSpace:m,hasLessBottomSpace:y,hasTighterBylineSpacing:C,itemHedTag:f,location:S,recommendedItems:$,recommendedItemCount:k,shouldHideDangerousDek:w,shouldAppendReadMoreLinkForDek:T,shouldHideBylines:v,shouldEnableBundleComponentAnalytics:A,summaryItemRubricVariation:L,trackingNamespace:E})=>{n.useEffect((()=>{p("SummaryCollectionSplitColumns")}),[]);const{formatMessage:x}=i(),{items:B,recommendedType:I,recommendedClickout:R}=$,H=f||(t?"h3":"h2"),[N]=c("trending-ad");return n.createElement(u,{className:e,"data-testid":"SummaryCollectionSplitColumnsWrapper",hasBackgroundColor:a},n.createElement(h,{"data-testid":"SummaryCollectionSplitColumnsItems",showTrendingAd:N},n.createElement(g,null,n.createElement("p",null,x(s.recommendedTitle,{recommendedType:I})),B.slice(0,k).map(((e,t)=>{const o=d.addDataSectionTitleAttribute(A,null==E?void 0:E.item,t);return n.createElement(n.Fragment,{key:t},n.createElement(b,Object.assign({},e,{analyticsDataAttribute:o,variation:"TextBelowImageLeftHasRuleWithDek",hasBorder:l,hedTag:H,key:t,rubricVariation:L,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideDangerousDek:w,shouldAppendReadMoreLinkForDek:T,shouldHideBylines:v,hasLessBottomSpace:y,hasExtraRubricSpace:m})))})),R&&n.createElement(r.Utility,{label:x(s.viewAllButton,{location:S,recommendedType:I}),inputKind:"link",href:R})),n.createElement(b,Object.assign({},o[0],{image:o[0].lede,dangerousHed:S?x(s.guideItemHed,{location:S}):t,variation:"TextBelowImageLeftHedAndDek",hasBorder:l,hedTag:H,rubricVariation:L,"data-testid":"SummaryCollectionSplitColumnsItem",shouldHideBylines:v,hasTighterBylineSpacing:C,hasLessBottomSpace:y,hasExtraRubricSpace:m}))))};y.propTypes={className:a.string,dangerousHed:a.string,guideItem:a.arrayOf(a.shape(l.propTypes)).isRequired,hasBackgroundColor:a.bool,hasBorderItem:a.bool,hasExtraRubricSpace:a.bool,hasLessBottomSpace:a.bool,hasTighterBylineSpacing:a.bool,itemHedTag:a.string,location:a.string,recommendedItemCount:a.number,recommendedItems:a.shape({items:a.arrayOf(a.shape(l.propTypes)),recommendedType:a.string,recommendedClickout:a.string}).isRequired,shouldAppendReadMoreLinkForDek:a.bool,shouldEnableBundleComponentAnalytics:a.bool,shouldHideBylines:a.bool,shouldHideDangerousDek:a.bool,summaryItemRubricVariation:a.string,trackingNamespace:a.object},y.defaultProps={hasBackgroundColor:!0,hasBorderItem:!0,hasExtraRubricSpace:!1,hasLessBottomSpace:!1,hasTighterBylineSpacing:!1,recommendedItemCount:2,shouldAppendReadMoreLinkForDek:!0,shouldHideBylines:!0,shouldHideDangerousDek:!1},y.displayName="SummaryCollectionSplitColumns",e.exports=m(y,"SummaryCollectionSplitColumns")},79663:function(e,t,o){var a=this&&this.__rest||function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const n=o(67294),{default:i}=o(51117),{BylineWrapper:r,BylinePreamble:l,BylineName:s,BylineLink:d}=o(72369),c=o(44031),{GridItem:m}=o(14134),p=o(48655),{calculateSpacing:u,getColorToken:h,getColorStyles:g,getTypographyStyles:b,minScreen:y,styledProperty:C}=o(79720),{BREAKPOINTS:f}=o(85326),S=i.div.withConfig({displayName:"SummaryCollectionSplitColumnsWrapper"})`
  margin: ${u(4)} 0;
  background-color: ${({hasBackgroundColor:e})=>e?h("colors.discovery.body.light.background"):"transparent"};
`,$=`\n  &:last-child {\n    padding-bottom: 0;\n    \n    ${y(f.md)}{\n      padding-bottom: ${u(2)};\n    }\n  }\n`,k=i((e=>{var{columnAmount:t,variation:o,shouldHideDangerousDek:i,hasExtraRubricSpace:r,hasLessBottomSpace:l,hasTighterBylineSpacing:s}=e,d=a(e,["columnAmount","variation","shouldHideDangerousDek","hasExtraRubricSpace","hasLessBottomSpace","hasTighterBylineSpacing"]);const m=c[o];return n.createElement(m,Object.assign({},d))})).withConfig({displayName:"SummaryCollectionSplitColumnsItem"})`
  ${S} & {
    padding-bottom: ${u(2)};

    ${y(f.md)} {
      border-bottom: 0;
    }

    .summary-item__rubric {
      ${b("typography.definitions.globalEditorial.context-primary")}
      display: block;
      color: ${h("colors.discovery.body.light.context-signature")};

      ${y(f.md)} {
        margin-bottom: ${({hasExtraRubricSpace:e})=>u(e?1:.5)};
      }
    }

    .summary-item__hed-link {
      color: ${h("colors.discovery.body.light.heading")};

      &::after {
        display: none;
      }
    }

    .summary-item__hed {
      ${b("typography.definitions.discovery.hed-bulletin-primary")}
      margin-bottom: 0;
    }

    .summary-item__dek {
      ${b("typography.definitions.discovery.description-page")}
      display: ${({shouldHideDangerousDek:e})=>e?"none":"block"};
      margin: ${u(2)} 0 ${u(1)};
      color: ${h("colors.discovery.body.white.description")};
    }

    .summary-item__content {
      padding-bottom: ${({hasLessBottomSpace:e})=>e?u(0):""};
    }

    .summary-item__byline {
      margin-top: ${({hasTighterBylineSpacing:e})=>u(e?1:2)};

      ${r},
      ${l},
      ${s},
      ${d} {
        ${b("typography.definitions.globalEditorial.accreditation-core")}
        color: ${h("colors.discovery.body.light.accreditation")};
      }

      ${d}:link {
        color: ${h("colors.discovery.body.light.accreditation")};
      }
    }

    .summary-item__metadata-secondary {
      margin: ${u(2)} 0 0 0;
    }

    ${C("hasBorder",!1,$)};
  }
`,w=i(p.ThreeUp).withConfig({displayName:"SummaryCollectionSplitColumnsItems"})`
  ${m} {
    grid-column: 1 / -1;
    margin-top: ${u(2)};
  }
  ${m}:first-of-type {
    margin: ${u(3)} 0;
    ${y(f.md)} {
      grid-column: span 7;
    }
  }
  ${m}:last-of-type {
    ${y(f.md)} {
      grid-column: span 5;
      margin: ${u(3)} 0;
    }
  }
`,T=i("div").withConfig({displayName:"SummaryCollectionSplitColumnsRecsWrapper"})`
  display: grid;
  grid-column-gap: ${u(3)};
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: ${u(2)};
  height: 100%;

  ${y(f.md)} {
    display: grid;
    grid-template-rows: 5% 75% 20%;
    grid-row-gap: ${u(1)};
    border-right: 1px solid;
    border-color: ${({theme:e})=>g(e,"border-color","colors.consumption.body.standard.divider")};
    padding-right: ${u(3)};
  }

  p {
    grid-column: span 6;
    grid-row: 1 / 1;
    align-self: center;
    margin: 0;
    ${({theme:e})=>b(e,"typography.definitions.foundation.link-primary")}
  }

  .summary-item {
    display: grid;
    grid-column-gap: 1rem;
    grid-column: span 6;
    grid-template-columns: 40% 60%;
    align-items: center;

    ${y(f.sm)} {
      grid-template-columns: 1fr 1fr;
    }

    ${y(f.md)} {
      display: unset;
      grid-column: span 3;
      grid-row: 2 / 2;
    }
  }

  .button {
    grid-column: span 6;
    max-height: ${u(6)};
    ${y(f.md)} {
      grid-column: 2 / span 4;
      grid-row: 3;
    }
    ${y(f.lg)} {
      justify-self: center;
      padding: 0 ${u(6)};
    }
  }
`;e.exports={SummaryCollectionSplitColumnsWrapper:S,SummaryCollectionSplitColumnsItems:w,SummaryCollectionSplitColumnsRecsWrapper:T,SummaryCollectionSplitColumnsItem:k}},22444:(e,t,o)=>{const a=o(36319);t.Z=(0,a.defineMessages)({viewAllButton:{id:"SummaryCollectionSplitColumns.ViewAllButton",defaultMessage:"View All {location} {recommendedType}",description:"button label for view all button"},guideItemHed:{id:"SummaryCollectionSplitColumns.GuideItemHed",defaultMessage:"{location} Travel Guide",description:"dangerousHed for guideItem"},recommendedTitle:{id:"SummaryCollectionSplitColumns.RecommendedTitle",defaultMessage:"Recommended {recommendedType}",description:"recommended title for recircs"}})},2542:(e,t,o)=>{const a=o(45697),n=o(67294),{useEffect:i,useRef:r,useState:l}=o(67294),{trackComponent:s}=o(40199),{asThemedComponent:d}=o(3517),c=o(81768),{ToggleButton:m}=o(27e3),{componentTracking:p}=o(28601),u=({children:e,chipShouldGetUncheckedIn:t,fullPageTheme:o,isAnchorUrl:a,isChecked:d,onChange:u,redirectUrl:h,role:g,shouldDefaultChecked:b,shouldDisplaySingleChip:y,shouldUrlRedirect:C,shouldEnableBundleComponentAnalytics:f,index:S})=>{i((()=>{s("ToggleChip")}),[]);const{current:$}=r(void 0!==d),[k,w]=l(b),T=$?d:k,[v,A]=l(T);let L={};return f&&(L=p.addDataSectionTitleAttribute(f,"filterable toggle",S)),n.createElement(m,Object.assign({},L,{as:h?"a":"button",href:h||void 0,role:g||"switch","aria-checked":y?v:T,onClick:o=>(o=>{let n,i;if(y?A((e=>(i=!e,!e))):n=!T,$||w(n),u){const e=new CustomEvent("change",{detail:{checked:i||n}});u(e)}if(t&&setTimeout((()=>w(!1)),1e3*t),a){const t=`#${e.toString().toLowerCase()}`;window.history.replaceState(void 0,void 0,t)}C||o.preventDefault()})(o),fullPageTheme:o}),y&&v&&n.createElement(c,null),e)};u.propTypes={analyticsDataAttribute:a.object,children:a.node.isRequired,chipShouldGetUncheckedIn:a.number,fullPageTheme:a.oneOf(["standard","inverted"]),index:a.number,isAnchorUrl:a.bool,isChecked:a.bool,onChange:a.func,redirectUrl:a.string,role:a.string,shouldDefaultChecked:a.bool,shouldDisplaySingleChip:a.bool,shouldEnableBundleComponentAnalytics:a.bool,shouldUrlRedirect:a.bool},u.defaultProps={isAnchorUrl:!1,isChecked:void 0,onChange:()=>{},shouldDefaultChecked:!1,shouldDisplaySingleChip:!1,shouldEnableBundleComponentAnalytics:!1,shouldUrlRedirect:!0},e.exports=d(u)},67924:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),n=o(2542);e.exports=a(n,"ToggleChip")},27e3:(e,t,o)=>{const a=o(51117).default,{calculateSpacing:n,getColorStyles:i,getColorToken:r,getTypographyStyles:l}=o(79720),s=a.button.withConfig({displayName:"ToggleButton"})`
  display: inline-block;
  border-radius: ${n(3)};
  cursor: pointer;
  padding: ${n(1)} ${n(3)};
  text-decoration: none;
  white-space: nowrap;

  .icon {
    ${({theme:e})=>i(e,"color","colors.interactive.base.black")};
    fill: ${r("colors.interactive.base.white")};
    margin-left: ${n(-2)};
    width: ${n(4)};
    height: ${n(2)};
    vertical-align: middle;

    &:hover {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.tags")};

  &[aria-checked='false'] {
    /* TODO support rgba in getColorStyles  */
    transition: background-color 0.25s, color 0.25s;
    background-color: rgba(
      ${r("colors.interactive.base.black",{rgbOnly:!0})},
      0.1
    );
    ${({theme:e})=>i(e,"color","colors.interactive.base.black")};
  }

  &[aria-checked='true'] {
    transition: background-color 0.25s, color 0.25s;
    text-decoration: none;
    ${({theme:e})=>i(e,"background-color","colors.interactive.base.black")};
    ${({theme:e})=>i(e,"color","colors.interactive.base.white")};

    .icon {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  &:hover,
  &:focus {
    outline: 0;
    /* TODO support this in getColorStyles  */
    box-shadow: 0 0 0 1px ${r("colors.interactive.base.black")}
      inset;
    text-decoration: none;

    .icon {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  ${({fullPageTheme:e,theme:t})=>"inverted"===e?`\n\n      border: 1px solid;\n      ${i(t,"border-color","colors.discovery.body.white.border")};\n\n      &[aria-checked='false'] {\n        &:hover{\n          ${i(t,"background-color","colors.interactive.base.white")};\n          ${i(t,"color","colors.interactive.base.black")};\n        }\n        ${i(t,"background-color","colors.interactive.base.black")};\n        ${i(t,"color","colors.interactive.base.white")};\n      }\n\n      &[aria-checked='true'] {\n        ${i(t,"background-color","colors.interactive.base.white")};\n        ${i(t,"color","colors.interactive.base.black")};\n      }\n\n      &:hover,\n      &:focus {\n        box-shadow: none;\n      }\n    `:""}
`;e.exports={ToggleButton:s}},85187:(e,t,o)=>{const a=o(45697),n=o(67294),{ToggleChipListWrapper:i,LabelText:r,ListWrapper:l,ListItemWrapper:s,HelperText:d}=o(10719),{trackComponent:c}=o(40199),{asThemedComponent:m}=o(3517),p=({label:e,children:t,contentAlign:o,fullPageTheme:a,hasNoHorizontalScroll:m,isReadViewShopViewEnabled:p,hasIncreasedBottomMargin:u,hasLargeLabel:h,hasSpacing:g,hasToggleGridColor:b,helper:y,layout:C})=>(n.useEffect((()=>{c("ToggleChipList")}),[]),n.createElement(i,{contentAlign:o,hasToggleGridColor:b},e&&n.createElement(r,{fullPageTheme:a,hasIncreasedBottomMargin:u,hasLargeLabel:h},e),n.createElement(l,{contentAlign:o,layout:C,isReadViewShopViewEnabled:p,hasNoHorizontalScroll:m,hasToggleGridColor:b,className:"list-wrapper"},n.Children.map(t,((e,t)=>e?n.createElement(s,{contentAlign:o,key:t,layout:C,hasSpacing:g,className:"list-item-wrapper"},e):null))),y&&n.createElement(d,null,y)));p.propTypes={children:a.array.isRequired,contentAlign:a.oneOf(["left","center","right"]),fullPageTheme:a.oneOf(["standard","inverted"]),hasIncreasedBottomMargin:a.bool,hasLargeLabel:a.bool,hasNoHorizontalScroll:a.bool,hasSpacing:a.bool,hasToggleGridColor:a.bool,helper:a.string,isReadViewShopViewEnabled:a.bool,label:a.string,layout:a.oneOf(["wrap","nowrap"])},p.defaultProps={contentAlign:"left",hasIncreasedBottomMargin:!1,hasLargeLabel:!1,hasNoHorizontalScroll:!1,hasSpacing:!1,layout:"wrap"},e.exports=m(p)},41334:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),n=o(85187);e.exports=a(n,"ToggleChipList")},10719:(e,t,o)=>{const a=o(51117).default,{BaseText:n}=o(74327),{calculateSpacing:i,getColorStyles:r}=o(79720),{BREAKPOINTS:l}=o(85326),s=a.div.withConfig({displayName:"ToggleChipListWrapper"})`
  ${({hasToggleGridColor:e,theme:t})=>e&&`\n  ${r(t,"background-color","colors.background.light")};\n  border-bottom:${i(4)} solid ;\n  ${r(t,"border-color","colors.background.light")};\n  `}
  display: flex;
  flex-direction: column;
  ${({contentAlign:e})=>"left"===e?"align-items: flex-start":"center"===e?"align-items: center":"right"===e&&"align-items: flex-end"}
`,d=a(n).withConfig({displayName:"LabelText"})`
  margin: 0 0 ${i(1)};

  ${({hasIncreasedBottomMargin:e})=>e&&` \n    margin: 0 0 ${i(2)};\n  `}

  ${({hasLargeLabel:e})=>e&&" \n    font-size: 1rem;\n    letter-spacing: 1px;\n  "}

  ${({fullPageTheme:e,theme:t})=>"inverted"===e?r(t,"color","colors.interactive.base.white"):""}
`;d.defaultProps={as:"div",colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.utility.label"};const c=a.div.withConfig({displayName:"ListWrapper"})`
  display: flex;
  flex-direction: row;
  padding: ${i(2,"px")} ${i(3)};
  width: 100%;
  gap: ${i(1.5)};

  ${({hasNoHorizontalScroll:e})=>e&&" &::-webkit-scrollbar \n    {\n      display: none;\n    }"}

  ${({layout:e})=>"wrap"===e?"flex-wrap: wrap;":"overflow-x: auto;"}
  
  ${({contentAlign:e,layout:t})=>{if("nowrap"===t)return"";switch(e){case"left":return"justify-content: flex-start;";case"center":return"justify-content: center;";case"right":return"justify-content: flex-end;";default:return""}}}
  
  ${({hasToggleGridColor:e})=>e&&`--grid-margin: ${i(3)};`}
  ${({isReadViewShopViewEnabled:e})=>e&&`\n        padding:${i(.5)};\n         gap: ${i(.5)};\n        `}
`,m=a.div.withConfig({displayName:"ListItemWrapper"})`
  ${({contentAlign:e,layout:t,hasSpacing:o})=>{if("wrap"===t)return"";let a=e;switch(o&&(a="centerWithPadding"),a){case"center":return"\n        &:first-child {\n          margin-left: auto;\n        }\n\n        &:last-child {\n          margin-right: auto;\n        }\n      ";case"right":return"\n        &:first-child {\n          margin-left: auto;\n        }\n      ";case"centerWithPadding":return`\n        @media (min-width: ${l.md}) {\n          &:first-child {\n            margin-left: auto;\n          }\n\n          &:last-child {\n            margin-right: auto;\n          }\n        }\n\n        @media (min-width: ${l.sm}) and (max-width: ${l.md}) {\n          &:first-child {\n            margin-left: 1.5rem;\n          }\n  \n          &:last-child {\n            margin-right: 1.5rem;\n          }\n        }          \n        `;default:return""}}}
`,p=a(n).withConfig({displayName:"HelperText"})`
  margin: ${i(1)} 0 0;
`;p.defaultProps={as:"div",colorToken:"colors.interactive.base.dark",typeIdentity:"typography.definitions.utility.assistive-text"},e.exports={ToggleChipListWrapper:s,LabelText:d,ListWrapper:c,ListItemWrapper:m,HelperText:p}}}]);

}
/*
     FILE ARCHIVED ON 10:02:14 Oct 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:58:39 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.505
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.009
  esindex: 0.009
  cdx.remote: 31.129
  LoadShardBlock: 88.407 (3)
  PetaboxLoader3.datanode: 116.429 (5)
  load_resource: 93.709 (2)
  PetaboxLoader3.resolve: 31.979
*/