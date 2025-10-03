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

(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[3528],{76559:(e,i,t)=>{const a=t(67294),o=t(41609),l=t(45697),{useIntl:r}=t(36319),{calculateSpacing:n}=t(79720),{getSlots:s}=t(86972),d=t(67924),c=t(41334),g=t(32168),{Disclaimer:m}=t(5626),p=t(85650),{trackComponent:u}=t(40199),{componentTracking:h,googleAnalytics:b}=t(28601),{CarouselWrapper:C,ChipWrapper:y,EditorCard:$,EditorDescription:f,EditorDetails:E,EditorName:T,EditorResponsiveAsset:S,EditorsPicksCarousel:D,EditorTitle:P,FilterableSummaryListDynamicGridItemLayout:k,FilterableSummaryListGrid:v,FilterableSummaryListWrapper:w,FilterableSummaryListGridFullBleed:N,TitleWrapper:A,TitleToggleChipListWrapper:x}=t(78153),{ArticleGalleryCarouselBtnWrapper:B,ArticleGalleryCarouselButton:L}=t(28642),G=t(12102).Z,I={spacing:{sm:n(1.5),xl:n(2)},width:{sm:"60%",lg:"27%",xl:`calc(24% - ${n(1.5)})`,xxl:`calc(21% - ${n(1.5)})`}},M=({affiliateDisclaimer:e,buttonConfig:i,children:t,className:l,carouselControlTheme:n,controlButtonIcon:M,controlPlacement:F,controlPosition:U,dangerousDek:H,dangerousHed:W,defaultToggleChipTitle:O,editor:R,isPimCollectionContainer:z,hasBorderBottom:j,hasGridBottomPadding:V,hasCarouselSliderPagination:q,hasControls:K,hasCustomSlider:Z,hasImpressionTracking:_,hasModerateSpacingOnCarousel:J,hasModerateSpacingOnMobile:Q,hasNavigationButtonVariation:X,hasNoHorizontalScrollCarousel:Y,paginationStyle:ee,hasPadding:ie,hasPagination:te,hasProductDisclaimerAlternativeStyle:ae,hasTitleMarginTop:oe,hasTitleNoMargin:le,hasToggleGridColor:re,hasHigherHorizontalPadding:ne,sectionTitleVariation:se,selectedToggleChipTitle:de,shouldAppendFilterInUrl:ce,shouldChipsRedirectOnClick:ge,shouldDisplaySingleSlot:me,shouldHideMarginOnCarousel:pe,shouldHideMarginUnderDek:ue,shouldNotDisplayAllLabel:he,shouldEnableBundleComponentAnalytics:be,shouldEnableProductDisclaimer:Ce,shouldUseInteractiveBrandColor:ye,hasDisclaimerPlpSlug:$e,shouldUseAlternativeTitleStyle:fe,hasCarouselControl:Ee,toggleChipRole:Te,trackingNamespace:Se,isDotClickable:De,layout:Pe,pos:ke,gridConfig:ve,isEditorsPicksCarousel:we,shouldAffiliateDisclaimerPlpEnable:Ne,isPlpCurated:Ae,hideDesktopPagination:xe,isUpcEnabled:Be})=>{a.useEffect((()=>{u("FilterableSummaryList")}),[]);const{formatMessage:Le}=r(),{slots:Ge,urlData:Ie}=s(t),Me=Object.keys(Ge),[Fe,Ue]=a.useState(Me),[He,We]=a.useState(Fe[0]),[Oe,Re]=a.useState(O),ze=W||H,je=(null==Se?void 0:Se.toggle)||W,Ve=(null==Se?void 0:Se.card)||W;if(0===Fe.length)return null;const qe=Fe.length>1||me,Ke=i.hasCtaLink?Le(G.atArticleGalleryCarouselBtnTextWithCtaLink,{categoryName:i.name}):Le(G.atArticleGalleryCarouselBtnText,{categoryName:i.name}),{isDynamicGridItemLayout:Ze,shouldDisplayDenseGrid:_e}=ve||{},Je=()=>a.Children.map(Ge[He].props.children,((e,i)=>{const t=h.addDataSectionTitleAttribute(be,`${Ve}/${He}/`,i,!1),o=a.cloneElement(e,{analyticsDataAttribute:t});return a.createElement("div",null,o)})),Qe=()=>a.createElement(C,null,a.createElement(m.TextCenterNoTopRule,{isEnabled:Ce&&!$e&&Ee,hasHigherHorizontalPadding:ne,hasProductDisclaimerAlternativeStyle:ae,disclaimerHtml:e}),a.createElement(p,{hideDesktopPagination:xe,hasControls:K,hasNavigationButtonVariation:X,hasPagination:te,controlButtonIcon:X?"ArrowIcon":M,shouldHideMarginOnCarousel:pe,hasModerateSpacingOnCarousel:J,controlPlacement:F,controlPosition:U,isDotClickable:De,hasPadding:ie,hasNoHorizontalScrollCarousel:Y,hasImpressionTracking:_,paginationStyle:q&&"slider"===ee?ee:"bullet",isPlpCurated:Ae,hasCustomSlider:q&&Z,dangerousHed:ze,pos:ke,carouselControlTheme:n},a.Children.map(Ge[He].props.children,((e,i)=>{const t=h.addDataSectionTitleAttribute(be,`${Ve}/${He}/`,i,!1),o=a.cloneElement(e,{analyticsDataAttribute:t}),l=`${ze}/${He}`;return a.createElement(p.CarouselItem,Object.assign({},be,I,{key:`${He}-${i}`,carouselTitle:l,carouselItemIndex:i,carouselItemName:e.props.dangerousHed,pos:ke,isUpcEnabled:Be}),o)}))),i.showButton&&i.url&&a.createElement(B,null,a.createElement("div",{className:"more-products"},a.createElement(L,{className:"article-gallery__more-button",label:Ke,btnStyle:"outlined",ariaLabel:Ke,href:i.hasCtaLink?i.url:`/products/shop${i.url}`,inputKind:"link"}))));return a.useEffect((()=>{var e;{const i=decodeURIComponent(null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.hash),t=Fe.findIndex((e=>`#${e.toLowerCase()}`===i.toLowerCase()));We(Fe[t>=0?t:0])}}),[Fe]),a.createElement(w,{className:l,hasToggleGridColor:re,hasPadding:ie,hasBorderBottom:j},a.createElement(x,{shouldUseAlternativeTitleStyle:fe,shouldUseInteractiveBrandColor:ye},ze&&a.createElement(A,{className:"section-title",hasPadding:ie,hasTitleMarginTop:oe,as:g[se],dangerousHed:W,dangerousDek:H,hasTitleNoMargin:le,affiliateDisclaimer:e,shouldAffiliateDisclaimerPlpEnable:Ne,shouldHideMarginUnderDek:ue,hasHigherHorizontalPadding:ne,hasProductDisclaimerAlternativeStyle:ae}),z&&a.createElement(m.TextCenterNoTopRule,{isEnabled:Ce,disclaimerHtml:e}),qe&&a.createElement(y,{className:"clip-list",hasToggleGridColor:re,hasPadding:ie,hasModerateSpacingOnMobile:Q},a.createElement(c,{contentAlign:"center",layout:"nowrap",hasToggleGridColor:re,label:Oe},Fe.map(((e,i)=>{const t=h.addDataSectionTitleAttribute(be,`${je}/${e}`),o=e===He;return he&&"All"===e?null:a.createElement(d,{index:i,analyticsDataAttribute:t,key:e,isChecked:o,hasToggleGridColor:re,onChange:i=>((e,i)=>{var t;We(i),me&&(e.detail.checked?(Ue([i]),de&&Re(de)):(We(Me[0]),Ue(Me),Re(O))),t=i,b.emitUniqueGoogleTrackingEvent("toggle-click",{clickText:t,clickType:"body"})})(i,e),isAnchorUrl:ce,redirectUrl:Ie[i],shouldUrlRedirect:ge,shouldDisplaySingleChip:me,role:Te},e)}))))),we&&!o(R)?a.createElement(D,null,a.createElement($,null,R.editorPhoto&&a.createElement(S,Object.assign({},R.editorPhoto)),a.createElement(E,null,a.createElement(T,null,R.name),a.createElement(P,null,R.title)),a.createElement(f,null,R.editorNote)),Qe()):function(){switch(Pe){case"GridFourColumns":return Ze?a.createElement(k,{shouldDisplayDenseGrid:_e,hasGridBottomPadding:V,isUpcEnabled:Be},Je()):a.createElement(v,{isUpcEnabled:Be},Je());case"FullBleed":return a.createElement("div",null,Je());case"FullBleedSideBySideContent":return a.createElement(N,null,Je());default:return Qe()}}())};M.propTypes={affiliateDisclaimer:l.string,buttonConfig:l.object,carouselControlTheme:l.string,children:l.node.isRequired,className:l.string,controlButtonIcon:l.oneOf(["ChevronIcon","ArrowIcon"]),controlPlacement:l.oneOf(["right","space-between"]),controlPosition:l.oneOf(["top","bottom","center"]),dangerousDek:l.string,dangerousHed:l.string,defaultToggleChipTitle:l.string,editor:l.object,gridConfig:l.object,hasBorderBottom:l.bool,hasCarouselControl:l.bool,hasCarouselSliderPagination:l.bool,hasControls:l.bool,hasCustomSlider:l.bool,hasDisclaimerPlpSlug:l.bool,hasGridBottomPadding:l.bool,hasHigherHorizontalPadding:l.bool,hasImpressionTracking:l.bool,hasModerateSpacingOnCarousel:l.bool,hasModerateSpacingOnMobile:l.bool,hasNavigationButtonVariation:l.bool,hasNoHorizontalScrollCarousel:l.bool,hasPadding:l.bool,hasPagination:l.bool,hasProductDisclaimerAlternativeStyle:l.bool,hasTitleMarginTop:l.bool,hasTitleNoMargin:l.bool,hasToggleGridColor:l.bool,hideDesktopPagination:l.bool,isDotClickable:l.bool,isEditorsPicksCarousel:l.bool,isPimCollectionContainer:l.bool,isPlpCurated:l.bool,isUpcEnabled:l.bool,layout:l.string,paginationStyle:l.string,pos:l.number,sectionTitleVariation:l.string,selectedToggleChipTitle:l.string,shouldAffiliateDisclaimerPlpEnable:l.bool,shouldAppendFilterInUrl:l.bool,shouldChipsRedirectOnClick:l.bool,shouldDisplaySingleSlot:l.bool,shouldEnableBundleComponentAnalytics:l.bool,shouldEnableProductDisclaimer:l.bool,shouldHideMarginOnCarousel:l.bool,shouldHideMarginUnderDek:l.bool,shouldNotDisplayAllLabel:l.bool,shouldUseAlternativeTitleStyle:l.bool,shouldUseInteractiveBrandColor:l.bool,toggleChipRole:l.string,trackingNamespace:l.shape({toggle:l.string,card:l.string})},M.displayName="FilterableSummaryList",M.defaultProps={buttonConfig:{name:"",showButton:!1,url:""},carouselControlTheme:"",controlButtonIcon:"ChevronIcon",controlPlacement:"space-between",controlPosition:"center",hasControls:!0,hasDisclaimerPlpSlug:!1,hasHigherHorizontalPadding:!1,hasImpressionTracking:!1,hasNoHorizontalScrollCarousel:!1,hasPagination:!0,hasTitleMarginTop:!1,isDotClickable:!1,isEditorsPicksCarousel:!1,shouldAppendFilterInUrl:!0,shouldChipsRedirectOnClick:!1,shouldDisplaySingleSlot:!1,shouldEnableBundleComponentAnalytics:!1,shouldEnableProductDisclaimer:!1,shouldNotDisplayAllLabel:!1,shouldUseAlternativeTitleStyle:!1,shouldUseInteractiveBrandColor:!1},M.displayName="FilterableSummaryList",e.exports=M},33528:(e,i,t)=>{const{asConfiguredComponent:a}=t(36380),o=t(76559);e.exports=a(o,"FilterableSummaryList")},78153:(e,i,t)=>{const{css:a,default:o}=t(51117),{calculateSpacing:l,minScreen:r,maxScreen:n,minMaxScreen:s,getColorToken:d,getTypographyStyles:c,getColorStyles:g}=t(79720),{CarouselControlButton:m,CarouselList:p,CarouselWrapper:u}=t(95764),h=t(48655),{BREAKPOINTS:b}=t(85326),C=t(99956),{ToggleButton:y}=t(27e3),$=o(h.EvenFour).withConfig({displayName:"FilterableSummaryListGrid"})`
  &.grid-even.grid-items-4 {
    ${r(b.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &&& {
    ${({isUpcEnabled:e})=>e&&`\n      ${s(0,b.md)} {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n        \n          padding-right: ${l(2)};\n          padding-left: ${l(2)};\n          column-gap: ${l(1)};\n        \n      }\n      \n        padding-right: ${l(3)};\n        padding-left: ${l(3)};\n        column-gap: ${l(2)};\n      \n    `}
  }

  &.grid-even {
    ${s(0,b.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${l(3)};
      padding-left: ${l(3)};
    }
    padding-right: ${l(4)};
    padding-left: ${l(4)};
  }

  &.grid {
    row-gap: ${l(6)};
  }
`,f=o(h.EvenFour).withConfig({displayName:"FilterableSummaryListGridFullBleed"})`
  &.grid-even.grid-items-4 {
    ${s(0,b.md)} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      padding-top: ${l(3)};
      padding-right: ${l(1)};
      padding-left: ${l(1)};
    }
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: ${l(3)};
    padding-left: 0;
    row-gap: ${l(4)};
  }
`,E=o(h.DynamicGridItemLayout).withConfig({displayName:"FilterableSummaryListDynamicGridItemLayout"})`
  &.grid-even.grid-items-4 {
    ${r(b.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &&& {
    ${({isUpcEnabled:e})=>e&&`\n      ${s(0,b.md)} {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n        \n          padding-right: ${l(2)};\n          padding-left: ${l(2)};\n          column-gap: ${l(1)};\n        \n      }\n      \n        padding-right: ${l(3)};\n        padding-left: ${l(3)};\n        column-gap: ${l(2)};\n      \n    `}
  }

  &.grid-even {
    ${s(0,b.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${l(3)};
      padding-left: ${l(3)};
    }
    padding-right: ${l(4)};
    padding-left: ${l(4)};
  }

  &.grid {
    row-gap: ${l(6)};
    ${({shouldDisplayDenseGrid:e=!0})=>!e&&"grid-auto-flow:row;"}

    ${({hasGridBottomPadding:e=!1})=>e&&`padding-bottom:${l(8)};`}
  }
`,T=o.section.withConfig({displayName:"FilterableSummaryListWrapper"})`
  ${({theme:e,hasBorderBottom:i})=>i&&`border-bottom: 1px solid ${d(e,"colors.consumption.lead.standard.divider")};`}

  ${({hasPadding:e,hasToggleGridColor:i})=>e&&!i?`padding: ${l(4)} 0 ${l(4)};`:""}
`,S=o.div.withConfig({displayName:"TitleToggleChipListWrapper"})`
  ${({shouldUseAlternativeTitleStyle:e})=>e&&a`
      .section-title {
        margin: 0;
        border-top: none;
        padding-top: 0;

        @media (max-width: ${b.md}) {
          h2 {
            text-align: center;
          }
        }
      }

      @media (max-width: ${b.md}) {
        .list-wrapper {
          overflow-y: hidden;
          overflow-x: scroll;

          &::-webkit-scrollbar {
            display: none;
          }
        }
      }

      @media (min-width: ${b.md}) {
        ${g("border-color","colors.consumption.lead.standard.context-signature")};

        display: flex;
        align-items: center;
        border-top: 2px solid;
        gap: 2rem;

        .clip-list {
          margin: 0;

          .list-wrapper {
            padding: 0;
            gap: ${l(3)};

            button {
              border-radius: 0;
              background: none;
              padding: 0.2rem 0;
              font-size: 13px;
              font-weight: bold;

              &[aria-checked='false'] {
                ${g("color","colors.interactive.base.border")};
              }

              &[aria-checked='true'] {
                ${g("color","colors.interactive.base.black")};
                border-bottom: 1px solid;
              }

              &:hover,
              &:focus {
                box-shadow: none;
              }
            }
          }
        }
      }
    `}

  ${y} {
    ${({shouldUseInteractiveBrandColor:e})=>e&&a`
        &[aria-checked='false'] {
          ${e?g("background-color","colors.interactive.base.brand-secondary"):g("color","colors.interactive.base.black")};
        }
      `}
  }
`,D=o.div.withConfig({displayName:"TitleWrapper"})`
  ${({hasTitleMarginTop:e})=>{const i=l(4);return`margin: ${e?i:"0"} 0 ${i} 0;`}}

  ${({shouldHideMarginUnderDek:e})=>e&&"margin-bottom: 0;"};
  ${({hasPadding:e})=>e&&`padding-left: ${l(3)};\n    padding-right:  ${l(3)};\n   `}
  ${({hasTitleNoMargin:e})=>e&&"margin: 0;"}
`,P=o.div.withConfig({displayName:"ChipWrapper"})`
  ${({hasToggleGridColor:e})=>e?`padding-bottom: ${l(4)};`:`margin: ${l(4)} 0 0 0;`}
  ${n(b.md)} {
    ${({hasModerateSpacingOnMobile:e})=>e&&`margin: ${l(2)} 0 0 0;`}
  }
`,k=o.div.withConfig({displayName:"CarouselWrapper"})`
  ${m} {
    margin-top: 1rem;

    &:disabled {
      display: none;
    }
  }
`,v=o.section.withConfig({displayName:"EditorsPicksCarousel"})`
  display: grid;
  grid-template-columns: 100%;
  margin-top: ${l(4)};
  overflow-x: hidden;
  @media (min-width: ${b.lg}) {
    grid-column-gap: ${l(4)};
    grid-template-columns: calc(20% - ${l(4)}) 80%;
    ${u} {
      margin-top: 0;
    }
  }
  ${p} {
    margin: 0;
  }
`,w=o.div.withConfig({displayName:"EditorCard"})`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  @media (min-width: ${b.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
    margin: ${l(4)} 0;
  }
`,N=o(C).withConfig({displayName:"EditorResponsiveAsset"})`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`,A=o.div.withConfig({displayName:"EditorDetails"})`
  margin-left: ${l(1)};
  @media (min-width: ${b.lg}) {
    grid-column: 1;
    margin: ${l(1)} 0 0;
  }
`,x=o.div.withConfig({displayName:"EditorName"})`
  ${({theme:e})=>c(e,"typography.definitions.consumptionEditorial.subhed-aux-secondary")};
`,B=o.div.withConfig({displayName:"EditorTitle"})`
  ${({theme:e})=>c(e,"typography.definitions.globalEditorial.accreditation-feature")};
`,L=o.div.withConfig({displayName:"EditorDescription"})`
  grid-column: 1 / span 2;
  margin-top: ${l(1.5)};
  ${({theme:e})=>c(e,"typography.definitions.consumptionEditorial.description-embed")}
  @media (min-width: ${b.lg}) {
    margin-top: ${l(2.5)};
  }
`;e.exports={CarouselWrapper:k,ChipWrapper:P,EditorCard:w,EditorDescription:L,EditorDetails:A,EditorName:x,EditorResponsiveAsset:N,EditorsPicksCarousel:v,EditorTitle:B,FilterableSummaryListDynamicGridItemLayout:E,FilterableSummaryListGrid:$,FilterableSummaryListWrapper:T,FilterableSummaryListGridFullBleed:f,TitleWrapper:D,TitleToggleChipListWrapper:S}},12102:(e,i,t)=>{const a=t(36319);i.Z=(0,a.defineMessages)({atArticleGalleryCarouselBtnText:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnText",defaultMessage:"VIEW ALL {categoryName}",description:"Article and Gallery carousel button text"},atArticleGalleryCarouselBtnTextWithCtaLink:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnTextWithCtaLink",defaultMessage:"{categoryName}",description:"Article and Gallery carousel button text for cta link"}})},75985:(e,i,t)=>{const a=t(67294),o=t(45697),{trackComponent:l}=t(40199),r=({children:e,name:i})=>{if(a.useEffect((()=>{l("Slot")}),[]),!i)throw new Error("A slot must contain a name!");return e};r.propTypes={children:o.node.isRequired,name:o.string.isRequired},e.exports={Slot:r,getSlots:(e,i=[])=>{const t=new Set(i),o={};let l;const n=[];return a.Children.forEach(e,(e=>{l=e.props.name,n.push(e.props.url),e.type===r&&l&&(0===t.size||t.has(l))&&(o[l]=e)})),{slots:o,urlData:n}}}},86972:(e,i,t)=>{e.exports=t(75985)}}]);

}
/*
     FILE ARCHIVED ON 10:02:11 Oct 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:58:31 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.617
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.013
  esindex: 0.014
  cdx.remote: 80.417
  LoadShardBlock: 461.87 (3)
  PetaboxLoader3.resolve: 506.367 (5)
  PetaboxLoader3.datanode: 468.034 (5)
  load_resource: 534.987 (2)
*/