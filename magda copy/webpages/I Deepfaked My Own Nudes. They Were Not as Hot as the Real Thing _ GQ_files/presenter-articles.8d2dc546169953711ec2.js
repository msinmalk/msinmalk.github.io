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

(()=>{var e,t={92788:(e,t,o)=>{const i=o(45697),n=o(67294),{useIntl:a}=o(36319),{useInView:r}=o(4225),{connector:l}=o(92078),s=o(98288),d=o(48655),c=o(73749).Z,{trackComponent:h}=o(40199),{googleAnalytics:u}=o(28601),{SeriesRecircAsset:p,SeriesRecircContainer:g,SeriesRecircContent:m,SeriesRecircDek:b,SeriesPromoHed:C,SeriesRecircReadMoreCta:f,SeriesRecircReadMoreCtaMobile:y,SeriesRecircTextContainer:v}=o(78268),w="Read more",S={[w]:c.readMoreDefault,"Read next":c.readNext},k=({ContentWrapper:e,readMoreCTA:t,seriesData:o})=>{const{formatMessage:i}=a();n.useEffect((()=>{h("SeriesRecirc")}),[]);const l=(({links:e})=>{let t;for(let o=0;o<e.length;o++){const{isCurrent:i}=e[o];if(i){for(let i=o+1;i<e.length;i++){const{isExternal:o,isPublished:n}=e[i]||{};if(n&&!o){t=e[i];break}}break}}return t})({links:(null==o?void 0:o.links)||[]}),d=e=>{u.emitGoogleTrackingEvent("seriesrecirc",{title:e})},[c,w]=r();if(n.useEffect((()=>{w&&u.emitUniqueGoogleTrackingEvent("series-inview",{title:null==l?void 0:l.promoHed})}),[w]),!o)return null;if(!l)return null;const{dek:k="",hed:E="",image:T=null,promoHed:B="",url:R=""}=l,M=T&&(T.segmentedSources||T.sources)&&Object.assign({},T);return n.createElement(e,null,l&&n.createElement(g,{ref:c},n.createElement(m,null,n.createElement(y,null,i(S[t])),n.createElement(p,null,M&&n.createElement("a",{href:R,onClick:()=>d(B||E)},n.createElement(s,Object.assign({},M,{isLazy:!0})))),n.createElement(v,null,n.createElement(f,null,i(S[t])),(E||B)&&n.createElement(C,null,n.createElement("a",{href:R,onClick:()=>d(B||E)},n.createElement("span",{dangerouslySetInnerHTML:{__html:B||E}}))),k&&n.createElement(b,null,n.createElement("span",{dangerouslySetInnerHTML:{__html:k}}))))))};k.propTypes={ContentWrapper:i.elementType,readMoreCTA:i.string,seriesData:i.shape({hed:i.string,dek:i.string,image:i.object,links:i.arrayOf(i.shape({hed:i.string,dek:i.string,image:i.object,isCurrent:i.bool,isExternal:i.bool,isPublished:i.bool,promoDek:i.string,promoHed:i.string,url:i.string}))})},k.defaultProps={ContentWrapper:d.NarrowContentWithWideAdRail,readMoreCTA:w,seriesData:null},k.displayName="SeriesRecirc",e.exports=l(k,{keysToPluck:["seriesData"]})},1564:(e,t,o)=>{const{asConfiguredComponent:i}=o(36380),n=o(92788);e.exports=i(n,"SeriesRecirc")},78268:(e,t,o)=>{const i=o(51117).default,{BaseText:n}=o(74327),{calculateSpacing:a,getColorToken:r}=o(79720),{BREAKPOINTS:l}=o(85326),s=i.div.withConfig({displayName:"SeriesRecircAsset"})`
  grid-column: 1/5;

  @media (max-width: ${l.md}) {
    grid-column: 1/-1;
  }
`,d=i.div.withConfig({displayName:"SeriesRecircContainer"})`
  margin-top: ${a(4)};
  margin-bottom: ${a(5)};
  border-top: 2px solid
    ${({theme:e})=>r(e,"colors.discovery.body.white.heading")};
  padding-top: ${a(2)};
`,c=i.figure.withConfig({displayName:"SeriesRecircContent"})`
  margin-right: 0;
  margin-left: 0;

  @media (min-width: ${l.md}) {
    display: grid;
    grid-column-gap: ${a(3)};
    grid-template-columns: repeat(10, 1fr);
  }

  @media (max-width: ${l.md}) {
    display: block;
  }
`,h=i(n).withConfig({displayName:"SeriesRecircDek"})`
  @media (min-width: ${l.md}) {
    grid-column: 1/-1;
  }
`;h.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.description-embed"},h.displayName="SeriesRecircDek";const u=i(n).withConfig({displayName:"SeriesPromoHed"})`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${l.md}) {
    grid-column: 1/-1;
  }
`;u.defaultProps={as:"h2",bottomSpacing:.625,topSpacing:1,typeIdentity:"typography.definitions.discovery.subhed-section-tertiary"};const p=i(n).withConfig({displayName:"SeriesRecircReadMoreCta"})`
  @media (max-width: ${l.md}) {
    display: none;
  }
`;p.defaultProps={typeIdentity:"typography.definitions.discovery.subhed-section-primary"};const g=i(p).withConfig({displayName:"SeriesRecircReadMoreCtaMobile"})`
  display: none;

  @media (max-width: ${l.md}) {
    display: block;
    grid-column: 1/-1;
    margin-bottom: 1em;
  }
`,m=i.div.withConfig({displayName:"SeriesRecircTextContainer"})`
  @media (min-width: ${l.md}) {
    grid-column: 5/-1;
  }
`;e.exports={SeriesRecircAsset:s,SeriesRecircContainer:d,SeriesRecircContent:c,SeriesRecircDek:h,SeriesPromoHed:u,SeriesRecircReadMoreCta:p,SeriesRecircReadMoreCtaMobile:g,SeriesRecircTextContainer:m}},73749:(e,t,o)=>{const i=o(36319);t.Z=(0,i.defineMessages)({readMoreDefault:{id:"ReadMore.SeriesRecirc",defaultMessage:"Read more",description:"SeriesRecirc component Read more text"},readNext:{id:"ReadNext.SeriesRecirc",defaultMessage:"Read next",description:"SeriesRecirc component Read next text"}})},94328:(e,t,o)=>{const i=o(45697),n=o(67294),{asConfiguredComponent:a}=o(36380),{googleAnalytics:r}=o(28601),{trackComponent:l}=o(40199),{ChannelCloudContainer:s,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:h,ChannelCloudHeaderImage:u,ChannelCloudSubChannelContainer:p,ChannelCloudSubChannelLink:g,ChannelCloudSubChannelLinkText:m,ChannelCloudSubChannelText:b}=o(9114),C=({channels:e,headerLogo:t,headerLink:o,sectionHeader:i})=>(n.useEffect((()=>{l("ChannelCloud")}),[]),n.createElement(d,null,i&&n.createElement(c,null,t&&n.createElement(u,{src:t,alt:"logo"}),n.createElement(h,{href:o,hasLogo:Boolean(t),dangerouslySetInnerHTML:{__html:i}})),e&&n.createElement(s,null,e.map((e=>n.createElement(p,{key:e.id},n.createElement(b,{dangerouslySetInnerHTML:{__html:e.text}}),e.sub.map((e=>n.createElement(g,{key:e.id,href:e.url,onClick:()=>r.emitGoogleTrackingEvent("channelCloud",e)},n.createElement(m,{dangerouslySetInnerHTML:{__html:e.text}}))))))))));C.propTypes={channels:i.arrayOf(i.shape({id:i.string,text:i.string,originalText:i.string,sub:i.arrayOf(i.shape({id:i.string,text:i.string,url:i.string}))})).isRequired,headerLink:i.string,headerLogo:i.string,sectionHeader:i.string.isRequired},C.displayName="ChannelCloud",e.exports=a(C,"ChannelCloud")},9114:(e,t,o)=>{const i=o(51117).default,{BaseText:n,BaseLink:a}=o(74327),{calculateSpacing:r,getColorStyles:l}=o(79720),s="\n  display: flex;\n  align-items: center;\n",d=i.div.withConfig({displayName:"ChannelCloudContainerWrapper"})``,c=i.div.withConfig({displayName:"ChannelCloudHeaderContainer"})`
  ${s};

  border-width: 0 0 ${r(.25)};
  border-style: solid;
  padding: ${r(1)} ${r(3)} ${r(2)}
    0;

  ${({theme:e})=>l(e,"border-color","colors.interactive.base.black")};
`,h=i.img.withConfig({displayName:"ChannelCloudHeaderImage"})`
  width: 25px;
  height: 30px;
`,u=i(a).withConfig({displayName:"ChannelCloudHeaderLink"})`
  position: relative;
  top: ${r(.3)};
  padding-left: ${({hasLogo:e})=>e?r(1.3):0};
`;u.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.discovery.hed-bulletin-secondary"};const p=i.div.withConfig({displayName:"ChannelCloudContainer"})`
  display: flex;
  flex-wrap: wrap;
  padding: ${r(2.4)} ${r(6)}
    ${r(1)} 0;
`,g=i.div.withConfig({displayName:"ChannelCloudSubChannelContainer"})`
  ${s}
  flex-wrap: wrap;
  margin-bottom: ${r(2)};
  padding-right: ${r(2)};
`,m=i(n).withConfig({displayName:"ChannelCloudSubChannelText"})`
  padding-right: ${r(1)};

  &::after {
    content: ':';
  }
`;m.defaultProps={colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const b=i(a).withConfig({displayName:"ChannelCloudSubChannelLink"})`
  ${s}
  padding-right: ${r(1)};

  svg {
    ${({theme:e})=>l(e,"fill","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    top: 2px;
    right: 2px;
    transform: rotate(-45deg);
    width: 12px;
    height: 12px;
    vertical-align: bottom;
  }

  &::after {
    ${({theme:e})=>l(e,"color","colors.consumption.body.standard.body-deemphasized")};

    position: relative;
    right: ${({hasIcon:e})=>e?r(.4):0};
    line-height: 0;
    content: ',';
  }

  &:last-child {
    &::after {
      content: '';
    }
  }
`,C=i(n).withConfig({displayName:"ChannelCloudSubChannelLinkText"})`
  line-height: 1.7em;

  &:hover {
    ${({theme:e})=>l(e,"color","colors.consumption.body.standard.link-hover")};
    text-decoration: underline;
    ${({theme:e})=>l(e,"text-decoration-color","colors.consumption.body.standard.link-hover")};
  }
`;C.defaultProps={colorToken:"colors.consumption.body.standard.body-deemphasized",typeIdentity:"typography.definitions.globalEditorial.context-primary"},e.exports={ChannelCloudContainer:p,ChannelCloudContainerWrapper:d,ChannelCloudHeaderContainer:c,ChannelCloudHeaderLink:u,ChannelCloudHeaderImage:h,ChannelCloudSubChannelContainer:g,ChannelCloudSubChannelLink:b,ChannelCloudSubChannelLinkText:C,ChannelCloudSubChannelText:m}},64220:(e,t,o)=>{e.exports=o(19904)},19904:(e,t,o)=>{const i=o(67294),{trackComponent:n}=o(40199);class a extends i.PureComponent{constructor(){super(...arguments),this.writeResourceHintLink=e=>{const{as:t,hint:o,href:i}=e,n=document.createElement("link");n.as=t,n.href=i,n.rel=o,document.head.appendChild(n)}}componentDidMount(){n("ResourceHint"),this.props&&this.writeResourceHintLink(this.props)}render(){return i.createElement(i.Fragment,null)}}e.exports=a},90554:(e,t,o)=>{const i=o(67294),n=o(45697),{connect:a}=o(59800),r=o(83253),l=o(28824),s=o(18322),{minThresholds:d}=o(28657),{GlobalStyle:c,CloseModalButtonDesktop:h,CloseModalButtonMobile:u,ModalContentWrapper:p}=o(23247),g=({children:e,closeModalText:t,isModalOpen:o,openModal:n,modalTransitionTime:a,showHeader:l})=>{i.useEffect((()=>{r.setAppElement("#app-root")}),[]);const g=i.useMemo((()=>{var e;if(!l||!o||!document)return 0;const t=null===window||void 0===window?void 0:window.innerWidth,i=document.getElementsByClassName("visual-link-banner--is-scrolled"),n=document.getElementsByClassName("site-navigation");return t<d.xl&&i.length&&i[0]?i[0].offsetHeight:n&&n.length&&(null===(e=n[0])||void 0===e?void 0:e.offsetHeight)||0}),[o,l]);return i.createElement(r,{isOpen:o,className:"genericModal",overlayClassName:{base:"genericModalOverlay",afterOpen:"genericModalOverlayAfterOpen",beforeClose:"genericModalOverlayBeforeClose"},bodyOpenClassName:"genericModalBodyOpen",shouldCloseOnEsc:!0,closeTimeoutMS:a},i.createElement(h,{btnStyle:"text",iconPosition:"before",hasEnableIcon:!0,onClickHandler:()=>n(!1),ButtonIcon:s.Close,label:t}),i.createElement(u,{ButtonIcon:s.Close,onClickHandler:()=>n(!1),onTouchStart:()=>n(!1),btnStyle:"outlined",isIconButton:!0,hasEnableIcon:!0,cornerRadius:"FullyRoundedCorner",size:"small",label:t}),i.createElement(p,null,e),i.createElement(c,{siteHeaderHeight:g,modalTransitionTime:a}))};g.propTypes={children:n.node.isRequired,closeModalText:n.string,isModalOpen:n.bool.isRequired,modalTransitionTime:n.number,openModal:n.func.isRequired,showHeader:n.bool},g.defaultProps={closeModalText:"",modalTransitionTime:300,showHeader:!1},e.exports=a((e=>({isModalOpen:e.isModalOpen||!1})),(e=>{const{openModal:t}=l(e);return{openModal:t}}))(g)},42045:(e,t,o)=>{const i=o(1961),{asConfiguredComponent:n}=o(36380),{asThemedComponent:a}=o(3517);e.exports=a(n(i,"GenericModal"))},23247:(e,t,o)=>{const{default:i,createGlobalStyle:n}=o(51117),a=o(7279),{ButtonLabel:r,ButtonIconWrapper:l}=o(41909),{maxScreen:s,minScreen:d,getColorToken:c,calculateSpacing:h,getZIndex:u}=o(79720),{maxThresholds:p}=o(28657),{BREAKPOINTS:g}=o(85326),m=i(a.Utility).withConfig({displayName:"CloseModalButton"})`
  position: absolute;
  color: ${({theme:e})=>c(e,"colors.interactive.base.dark")};

  svg {
    fill: ${({theme:e})=>c(e,"colors.interactive.base.dark")};
  }

  &:hover {
    color: ${({theme:e})=>c(e,"colors.interactive.base.dark")};
  }

  ${l} {
    display: flex;
  }
`,b=i(m).withConfig({displayName:"CloseModalButtonDesktop"})`
  left: 0;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${c("colors.interactive.base.primary")};
  }

  ${s(`${p.lg}px`)} {
    display: none;
  }

  ${r} {
    padding: 0;
  }
`,C=i(m).withConfig({displayName:"CloseModalButtonRight"})`
  top: ${h(2.5)};
  right: ${h(3)};
  left: unset;
  z-index: ${u("skipLink")};
  border: 1px solid ${c("colors.interactive.base.light")};
  width: ${h(5)};
  height: ${h(5)};

  &:hover {
    border: 1px solid ${c("colors.interactive.base.light")};
    background: ${c("colors.interactive.base.light")};
  }

  svg {
    vertical-align: bottom;
  }

  ${d(g.lg)} {
    display: none;
  }
`,f=i.div.withConfig({displayName:"ModalContentWrapper"})`
  padding: 0;
  height: 100%;
`,y=n`
  .genericModalBodyOpen {
    overflow: hidden;
  }

  .genericModalOverlay {
    position: fixed;
    top: ${({siteHeaderHeight:e})=>`${e}px`};
    left: 0;
    transition: ${({modalTransitionTime:e})=>e&&`opacity ${e}ms ease-in-out;`};
    opacity: 0;
    z-index: ${u("hyperstitialLayer")};
    width: 100%;
    height: ${({siteHeaderHeight:e})=>`calc(100% - ${e}px)`};
  }

  .genericModal {
    background: ${({theme:e})=>c(e,"colors.interactive.base.white")};
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  .genericModalOverlayAfterOpen {
    opacity: 1;
  }

  .genericModalOverlayBeforeClose {
    opacity: 0;
  }
`;e.exports={GlobalStyle:y,CloseModalButtonDesktop:b,CloseModalButtonMobile:C,ModalContentWrapper:f}},1961:(e,t,o)=>{const{asVariation:i}=o(95545),n=o(90554);n.Default=i(n,"Default",{}),e.exports=n},67882:(e,t,o)=>{const i=o(94184),n=o(36968),a=o(27361),r=o(23493),l=o(23279),s=o(45697),d=o(67294),{injectIntl:c}=o(36319),h=o(67423).Z,u=o(92170),{getVariationNames:p}=o(95545),{I18nProvider:g}=o(5544),m=o(38134),b=o(32803),C=o(64220),f=o(64734),{connector:y}=o(92078),v=o(9370),w=o(42820),{googleAnalytics:S}=o(28601),k=o(48655),{PaywallCollaborator:E,withArticleTruncation:T}=o(13131),{InlineBarrier:B}=o(58980),R=o(1564),M=o(61784),x=o(6811),{withLightbox:P}=o(92267),A=o(4131),{Disclaimer:O}=o(5626),{BeopScript:L}=o(22665),{trackComponent:I}=o(40199),N=o(38309),H=o(15565),D=o(9855),$=o(43625),j=o(94328),{asConfiguredComponent:W}=o(36380),F=o(66518),V=o(71311),_=o(70734),{getNewsletterSubscriptions:G}=o(78918),U=o(50037),{MultiPackageRow:q}=o(42041),{getOverrideBehaviour:z}=o(66528),Z=o(42045),K=o(7891),X=o(74914),J=o(59185),{ArticlePageBase:Y,ArticlePageGlobalStyle:Q,ArticlePageLedeBackground:ee,ArticlePageContentBackGround:te,ArticlePageBodyMobileTruncatedBtn:oe,ArticlePageContentFooterGrid:ie,ArticlePageIssueDate:ne,ContentWrapperGrid:ae}=o(8172),re=["TextAboveCenterSmallWithRule","TextAboveCenterFullBleedNoContributor","TextBelowCenterFullBleedNoContributor","InlineImage","SplitScreenImageRightFullBleed","SplitScreenImageRightInset","SplitScreenImageLeftInset","SplitScreenImageLeftFullBleed","TextAboveLeftSmallWithRule"],le=["TextOverlayContentHeader","TextOverlayContentHeaderWithLogo","TextOverlayCenterFullBleedGradient"],se=e=>re.includes(e),de=(e,t)=>Boolean(t&&le.includes(e));class ce extends d.Component{constructor(e){super(e),this.onHandleScroll=()=>{const e=window.scrollY<=this.pageContentEl.current.offsetTop+100;e!==this.state.hideNav&&this.setState({hideNav:e})},this.onResizeHandler=()=>{this.implementActionBarHeight()},this.onScrollHandler=()=>{this.implementActionBarHeight()},this.onTruncationDismiss=()=>{this.setState({isMobileTruncated:!this.state.isMobileTruncated}),S.emitUniqueGoogleTrackingEvent("article-read-more")},this.setCartoonLinkedGalleries=(e,t)=>{this.setState({sliderData:e},(()=>{t()}))},this.implementActionBarHeight=()=>{var e,t,o;(null===(e=this.props.featureFlags)||void 0===e?void 0:e.enableActionBar)&&(null===(o=null===(t=this.articleWrapperRef)||void 0===t?void 0:t.current)||void 0===o?void 0:o.offsetHeight)!==this.state.articleLength&&this.setState({articleLength:this.articleWrapperRef.current.offsetHeight})},this.fetchNewsletterSubscriptions=async e=>{try{const t=await G(e);if(200===t.status){const e=this.props.article.newsletterModules.filter((e=>e.priority)).sort(((e,t)=>e.priority-t.priority)).map((e=>e.newsletterId)),o=this.props.article.newsletter.newsletterId,i=t.newsletterSubscriptions.data.filter((e=>"SUBSCRIBED"===e.attributes.status)).map((e=>e.attributes.newsletterId));if(i.length){const t=e.filter((e=>!i.includes(e))),n=this.props.article.newsletterModules.find((e=>e.newsletterId===t[0]));i.includes(o)&&this.setState({newsletterData:Object.assign(Object.assign({},this.state.newsletterData),n)})}}}catch(e){console.log(e)}return{}},this.state={hideNav:this.props.article.headerProps.hasContentHeaderLogo,isMobileTruncated:!1,newsletterData:this.props.article.newsletter,sliderData:{},articleLength:0},this.pageContentEl=d.createRef(),this.articleWrapperRef=d.createRef();const t=e.hasLightbox?P(f,e.article.lightboxImages,e.hasSlideShow):f;this.TruncatedChunkedArticleContent=T(t,"body")}componentDidMount(){var e;if(I("ArticlePage"),this.props.user.isAuthenticated&&this.props.hasDynamicNewsletterSignup&&(null===(e=this.props.article.newsletterModules)||void 0===e?void 0:e.length)){const e=this.props.article.newsletterModules.map((e=>e.newsletterId)).toString(),t={amgUUID:this.props.user.amguuid,newsletterIds:e,userPlatformProxy:this.props.userPlatform.userPlatformProxy,provider:"sailthru",xClientID:this.props.userPlatform.xClientID};this.fetchNewsletterSubscriptions(t)}const{hasTruncationOnMobile:t}=this.props.article;if(t?this.setState({isMobileTruncated:!0}):this.setState({isMobileTruncated:!1}),this.props.article.headerProps.hasContentHeaderLogo){this.setState({hideNav:!0});const e=r(this.onHandleScroll,300);window.addEventListener("scroll",e)}const o="header"===a(this.props.article.interactiveOverride,"behavior"),i=a(this.props.componentConfig,"BasePage.settings.showNavWithHeaderOverride"),n=o&&!i;window.sessionStorage.setItem("nav_invisible",n),window.cns&&(window.cns.pageContext.content.pageStructure=this.props.article.pageStructure);const s=l(this.onScrollHandler,200),d=l(this.onResizeHandler,200);window.addEventListener("scroll",s),window.addEventListener("resize",d)}componentWillUnmount(){window.removeEventListener("scroll",this.onHandleScroll),window.sessionStorage.removeItem("nav_invisible")}render(){var e,t,o;const{article:{id:r,body:l,channelCloudData:s,contentWarnings:c,affiliateDisclaimer:u,contributorSpotLightProps:p,hideAffiliateDisclaimer:f,hasAffiliateLinks:y,hasEventBannerHidden:S,hideProductDisclaimer:T,channelMap:x,coralComments:P,hasNewsletterInBody:I,hasProduct:G,hasProductLisitingCarousel:J,hasTruncationOnMobile:re,headerProps:le,hideAutoDisclaimer:ce,hideContributorBio:he,hideRecircList:ue,hideRecircMostPopular:pe,hierarchy:ge,shouldReplaceOutbrainWithVMG:me,interactiveOverride:be,isAffiliateLinksDisabled:Ce,lang:fe,langTranslations:ye,customHeading:ve={},recircs:we=[],recircMostPopular:Se,recircRelated:ke,relatedVideo:Ee,interlude:Te,isHeroAdVisible:Be,isLicensedPartner:Re,licensedPartnerLink:Me,magazineDisclaimer:xe,paddingTop:Pe,tagCloud:Ae,newsletter:Oe,shouldUsePersistentAd:Le,showAgeGate:Ie,showBookmark:Ne,showBreadcrumbTrail:He,showHotelRecirc:De,signageConfig:$e,isUpcEnabled:je,isLinkStackEnabled:We,shouldShowFooterNewsletter:Fe,shouldPrioritizeSeriesPagination:Ve,savingsUnitedCoupons:_e=[]},showWriterBio:Ge,showFirstRailRecirc:Ue,showAffiliateBelowContentHeader:qe,attributes:ze,className:Ze,componentConfig:Ke,shouldCenterDisclaimer:Xe,shouldHideBaseTopPadding:Je,shouldHideSeriesNavigation:Ye,shouldHideSeriesRecirc:Qe,shouldShowSeriesNavigationInFooter:et,pageBackgroundTheme:tt,dividerColor:ot,shouldEnableArticleBackground:it,shouldEnableFullArticleInverted:nt,shouldInheritDropcapColor:at,showLinkStackInsideContentBody:rt,featureFlags:lt,hasLightbox:st,hasChannelNavigation:dt,hideSideBySideViewOnMobile:ct,showContributor:ht,showContributorSpotlight:ut,cartoonVariation:pt,hasRecircDriver:gt,linkList:mt,related:bt,metadataVideo:Ct,outbrain:ft,taboola:yt,productCarousel:vt,user:wt,hasNewsletterForABTest:St,intl:kt,xlargePaddingTop:Et,articleVariationForXlargePaddingTop:Tt,beOp:Bt,hasDynamicDisclaimer:Rt,responsiveCartoonVariation:Mt,showGalleryCartoonPublishedDate:xt,actionBarLargeScreenVariation:Pt,actionBarMobileScreenVariation:At,isActionBarStickyLargeScreen:Ot,actionBarButtons:Lt,showContributorImageOnMobile:It,showIssueDateInArticle:Nt,hasLinkbannerCrossSlideAnimation:Ht,showEnhancedTextOverlay:Dt}=this.props,$t=it&&tt,jt=it&&ot,{hideNav:Wt,articleLength:Ft}=this.state,Vt=!!St||I,{hasContentHeaderLogo:_t,isFullBleedVideo:Gt}=le;_t&&(()=>{const e=a(Ke,"ContentHeader.settings");n(Ke,"ContentHeader.variation","TextOverlayWithLogo"),n(Ke,"ContentHeader.settings",Object.assign(Object.assign({},e),{showLogo:!0,hideContributors:!1,hidePublishDate:!0,hideRubric:!1,hideShareButtons:!0}))})();const Ut=he?void 0:le.contributors,{hasNativeShareButton:qt,hasNewsletterOnPageTop:zt,hasNewsletterWithoutWrapper:Zt,shouldEnableNativeShareOnDesktop:Kt,shouldRemoveBackgroundColor:Xt,enableEnhancedCartoonExperience:Jt,enableEnhancedArticleHeader:Yt,enableActionBar:Qt,variations:eo,showFullBleedBelow:to,cneVideoEmbedProps:oo}=lt,io={};let no={};const ao=a(Ke,"ContentHeader.variation"),ro=((e,t,o,i)=>{let n={};const{showContributorImageOnMobile:a,showEnhancedTextOverlay:r}=i;return e&&(se(o)&&(n={shouldAlignCenterWhenNoCaption:!0}),"TextBelowCenterFullBleedNoContributor"===o&&(n=Object.assign(Object.assign({},n),{isImagePositionBottomInSmallScreen:!0}))),t&&(n=Object.assign(Object.assign({},n),{hideSocialIcons:!0,hideSocialIconsOnMobile:!0,hasStickySocialIcons:!1})),se(o)?n=Object.assign(Object.assign({},n),{showContributorImageOnMobile:a}):de(o,r)&&(n=Object.assign(Object.assign({},n),{showContributorImage:!1,hideShareButtons:!0,showTextOverlayDek:!0,isDekInverted:!0,isReducedBottomMargin:!0,isStandardCaption:!0,isRubricInverted:!0,hasDekMarginReduced:!0,shouldLimitContentWidth:!0,showEnhancedPublishDate:!0})),n})(Yt,Qt,ao,{showContributorImageOnMobile:It,showEnhancedTextOverlay:Dt});(se(ao)||de(ao,Dt))&&(io.hasReducedBackgroundSpacing=Nt,no=Object.assign({},Nt&&{articleIssueDateComponent:d.createElement((()=>le.issueDate?d.createElement(ne,null,kt.formatMessage(h.publishedInThe),` ${le.issueDate} `):null),null)}));const lo=Jt?"InlineCartoon":Mt,so=function(e){return"WithAdRail"===a(e,"ChunkedArticleContent.variation")?k.NarrowContentWithWideAdRail:k.WithMargins}(Ke),co="OneColumnNarrow"===a(Ke,"ChunkedArticleContent.variation"),ho=k.DynamicGrid({startColumn:2,endColumn:12}),uo=Xe?O.TextCenterNoTopRule:O,po=we.map(((e,t)=>{const o=W(F,e.displayName),i=e.heading||"",{results:n,destinationPage:a,location:r,recommendedClickout:l,recommendedType:s}=e;return gt&&a?d.createElement(V,{key:`SummaryCollectionSplitColumns${t}`,recommendedItems:{items:n,recommendedType:s,recommendedClickout:l},guideItem:[a],location:r,shouldAppendReadMoreLinkForDek:!0}):d.createElement(_,{key:`ConnectedErrorBoundary${t}`},d.createElement(o,{related:e.related,heading:i,dividerColor:jt,shouldEnableFullArticleInverted:nt}))})),go=ao===Tt&&Et?Et:Pe,mo=(null==Bt?void 0:Bt.accountID)||"",bo=(null==Bt?void 0:Bt.isEnabled)||!1,Co=dt&&d.createElement(H,null),fo="WithAdRail"===a(Ke,"ChunkedArticleContent.variation"),yo=({children:e})=>d.createElement(ae,{isadRail:fo,as:so},d.createElement("div",{className:"body body__container"},d.createElement("div",{className:"container container--body"},d.createElement("div",{className:"container--body-inner"},e)))),vo="articleheader"===z(be),wo=a(le,"sponsoredContentHeaderProps"),So=d.createElement(d.Fragment,null,d.createElement(A,null,d.createElement(ho,null,d.createElement(uo,{disclaimerHtml:u,hasTopRule:!1}))));return d.createElement(Y,{additionalNavigation:Co,attributes:ze,shouldEnableFullArticleInverted:nt,channelMap:x,className:i("page--article",Ze),featureFlags:lt,hideNav:Wt,hasContentHeaderLogo:_t,hasEventBannerHidden:S,hasFooterAdsMargins:!0,interactiveOverride:be,isHeroAdVisible:Be,hasBaseAds:!0,user:wt,lang:fe,customHeading:ve,shouldHideBaseTopPadding:Je,shouldPrioritizeSeriesPagination:Ve,pageBackgroundTheme:$t,hasLinkbannerCrossSlideAnimation:(de(ao,Dt)||se(ao))&&Ht},bo&&d.createElement(L,{accountId:mo}),d.createElement(g,{locale:fe,translations:ye},Ne&&d.createElement(D,null),y&&u&&!f&&!T&&!qe&&So,He&&d.createElement(b,{hierarchy:ge,shouldRemoveBackgroundColor:Xt}),d.createElement("article",{className:i("article main-content",{"article--inherited-dropcaps":at}),lang:fe},zt&&Oe&&d.createElement($,Object.assign({},Oe,{position:"article-page-top"})),le.sponsoredContentHeaderProps&&d.createElement(M,Object.assign({},le.sponsoredContentHeaderProps,{className:"light-theme"})),vo?d.createElement("div",{className:"interactive-override-container interactive-override-container--content_header",dangerouslySetInnerHTML:{__html:be.markup}}):d.createElement(ee,{ref:this.pageContentEl},d.createElement(w,Object.assign({},le,ro,{showFullHeaderViewInMobile:Yt,hasNativeShareButton:qt,shouldEnableNativeShareOnDesktop:Kt,isFullBleedVideo:Gt,className:"article__content-header",hasLightbox:st,stickySocialAnchorBottom:{selector:".content-bottom-anchor",edge:"bottom"},stickySocialAnchorTop:{selector:".body",edge:"top"},interactiveOverride:be,metadataVideo:Ct,showBreadCrumb:He}))),!Ye&&!et&&d.createElement(N,{className:"article__series-navigation",pageBackgroundTheme:$t,dividerColor:jt}),d.createElement(te,Object.assign({togglePaddingTop:go,isMobileTruncated:this.state.isMobileTruncated,cartoonVariation:pt,"data-attribute-verso-pattern":"article-body",enableActionBar:Qt,className:"article-body__content"},io,{ref:this.articleWrapperRef}),d.createElement(X,{actionBarLargeScreenVariation:Pt,actionBarMobileScreenVariation:At,isActionBarStickyLargeScreen:Ot,actionBarButtons:Lt,articleLength:Ft,showActionBar:Qt}),re&&this.state.isMobileTruncated&&d.createElement(oe,{inputKind:"button",label:kt.formatMessage(h.truncatedButtonLabel),onClickHandler:this.onTruncationDismiss}),(()=>{var e;return a(Ke,"ChannelCloud.settings.shouldShowChannelCloud",!1)&&(null===(e=null==s?void 0:s.channels)||void 0===e?void 0:e.length)>0})()&&d.createElement(k.ContentWithAdRailNarrow,null,d.createElement("div",null,d.createElement(j,Object.assign({},s,a(Ke,"ChannelCloud.settings"))))),y&&u&&!f&&!T&&qe&&So,l&&d.createElement(E,Object.assign({body:l,linkList:mt,isLinkStackEnabled:We&&rt,component:this.TruncatedChunkedArticleContent,contributors:Ut,hasProduct:G,hasProductLisitingCarousel:J,hasTopSpacing:!!le.lede,interlude:Te,isAffiliateLinksDisabled:Ce,name:"chunked-article-content",shouldUsePersistentAd:Le,hideRecircMostPopular:pe,shouldEnableArticleBackground:it,shouldEnableFullArticleInverted:nt,pageBackgroundTheme:$t,dividerColor:jt,recircMostPopular:Se,showFirstRailRecirc:Ue,tagCloud:Ae,hideAutoDisclaimer:ce,hideAffiliateDisclaimer:f,hideProductDisclaimer:T,responsiveCartoonVariation:lo,hasCartoonFullWidth:Jt,setCartoonLinkedGalleries:this.setCartoonLinkedGalleries},no)),l&&d.createElement(yo,null,d.createElement(B,null))),!Qe&&d.createElement(R,{ContentWrapper:yo})),bo&&d.createElement(yo,null,d.createElement("div",{className:"BeOpWidget"})),to&&d.createElement(d.Fragment,null,d.createElement(w,{variations:eo,isFullBleedVideo:to,cneVideoEmbedProps:oo})),Object.keys(vt).length>0&&d.createElement(q,{key:"articleCarouselProduct",dataJourneyHook:"row-content"},d.createElement(U,Object.assign({isUpcEnabled:je},vt,{copilotId:r}))),d.createElement(ie,{as:v,className:i("article-body__footer",{"content-footer--mobile-truncated":this.state.isMobileTruncated}),channelMap:x,consumerMarketing:{position:"article-footer"},shouldEnableFullArticleInverted:nt,ContentWrapper:so,contributors:Ut,contributorSpotlight:p,coralComments:P,showWriterBio:Ge,hideContributorBio:he,showContributorSpotlight:ut,showContributor:ht,hideRecircList:ue,hasNewsletterWithoutWrapper:Zt,isLicensedPartner:Re,isLinkStackEnabled:We&&!rt,isNarrow:co,isAdRail:fo,licensedPartnerLink:Me,linkList:mt,magazineDisclaimer:xe,newsletter:wt.isAuthenticated?this.state.newsletterData:Oe,outbrain:ft,taboola:yt,recircs:we,recircListElements:po,dividerColor:jt,related:bt,recircRelated:ke,relatedVideo:Ee,showNewsletter:Fe||!Vt,showHotelRecirc:De,signageConfig:$e,tagCloud:Ae,shouldReplaceOutbrainWithVMG:me,savingsUnitedCoupons:_e,sponsoredProps:wo,hasDynamicDisclaimer:Rt,shouldShowSeriesNavigationInFooter:!Ye&&et,pageBackgroundTheme:$t,currentPage:"article"}),Ie&&d.createElement(m,{content:{contentWarnings:c}}),!wt.isAuthenticated&&wt.hasUserAuthCheck&&d.createElement(C,{as:"document",hint:"prefetch",href:"/account/sign-in"})),Jt&&d.createElement(Z,{closeModalText:kt.formatMessage(h.backToArticle)},d.createElement(K,{items:this.state.sliderData.items,showPublishedDate:xt,responsiveCartoonVariation:"SliderCartoon",title:null===(t=null===(e=this.state.sliderData)||void 0===e?void 0:e.source)||void 0===t?void 0:t.hed,titleLinkURL:null===(o=this.state.sliderData)||void 0===o?void 0:o.url,shouldUseModalStyle:!0,carouselPlacedIn:"modal",showHeadRecirc:!0,showNewsletter:!0})),d.createElement(Q,{pageBackgroundTheme:$t,dividerColor:jt,shouldEnableFullArticleInverted:nt,hideSideBySideViewOnMobile:ct,isUpcEnabled:je}))}}ce.propTypes={actionBarButtons:s.arrayOf(s.oneOf(["audio","bookmark"])),actionBarLargeScreenVariation:s.oneOf(p(J)),actionBarMobileScreenVariation:s.oneOf(p(J)),article:s.shape({body:s.array,channelCloudData:s.object,affiliateDisclaimer:s.string,contributorSpotLightProps:s.object,hideProductDisclaimer:s.bool,hideAffiliateDisclaimer:s.boolean,hasAffiliateLinks:s.boolean,channelMap:s.object,coralComments:s.shape({enableComments:s.bool,coralHostName:s.string}),contentWarnings:s.array,customHeading:s.object,hasEventBannerHidden:s.bool,hasNewsletterInBody:s.bool,hasProduct:s.bool,hasProductLisitingCarousel:s.bool,hasTruncationOnMobile:s.bool,headerProps:s.object.isRequired,hideAutoDisclaimer:s.bool,hideContributorBio:s.bool,hideRecircList:s.bool,hideRecircMostPopular:s.bool,hierarchy:s.array,id:s.string,interactiveOverride:s.shape({markup:s.string,behavior:s.string}),interlude:s.shape(Object.assign(Object.assign({},x.propTypes),{isRailEligible:s.boolean})),isAffiliateLinksDisabled:s.bool,isHeroAdVisible:s.bool.isRequired,isLicensedPartner:s.bool,isLinkStackEnabled:s.bool,isUpcEnabled:s.bool,lang:s.string,langTranslations:s.object,licensedPartnerLink:s.string,lightboxImages:s.array.isRequired,magazineDisclaimer:s.shape({issueDate:s.string.isRequired,issueLink:s.string.isRequired,originalHed:s.string}),newsletter:s.object,newsletterModules:s.array,paddingTop:s.oneOf(["large"]),pageStructure:s.array,recircs:s.array,recircMostPopular:s.array,recircRelated:s.array,relatedVideo:s.shape({brand:s.string,related:s.any,useRelatedVideo:s.bool}),savingsUnitedCoupons:s.array,shouldPrioritizeSeriesPagination:s.bool,shouldShowFooterNewsletter:s.bool,shouldUsePersistentAd:s.bool,shouldReplaceOutbrainWithVMG:s.bool,showAgeGate:s.bool,showAffiliateBelowContentHeader:s.bool,showBookmark:s.bool,showBreadcrumbTrail:s.bool,showHotelRecirc:s.bool,signageConfig:s.object,tagCloud:s.shape({tags:s.arrayOf(s.shape({tag:s.string.isRequired,url:s.string}))})}).isRequired,articleVariationForXlargePaddingTop:s.string,attributes:s.object,beOp:s.shape({accountID:s.string,isEnabled:s.boolean}),cartoonVariation:s.oneOf(["default","card"]),className:s.string,componentConfig:s.object,dividerColor:s.string,featureFlags:s.object,hasChannelNavigation:s.bool,hasDynamicDisclaimer:s.bool,hasDynamicNewsletterSignup:s.bool,hasLightbox:s.bool,hasLinkbannerCrossSlideAnimation:s.bool,hasNewsletterForABTest:s.bool,hasRecircDriver:s.bool,hasSlideShow:s.bool,hideNav:s.bool,hideSideBySideViewOnMobile:s.bool,intl:s.object,isActionBarStickyLargeScreen:s.bool,linkList:s.object,metadataVideo:s.shape({isLive:s.bool,premiereDate:s.string,series:s.string,videoLength:s.number,premiereGap:s.number}),outbrain:s.shape({canonicalUrl:s.string.isRequired,shouldDisplayAboveRecircList:s.bool,template:s.string.isRequired,widgetId:s.string}),pageBackgroundTheme:s.string,productCarousel:s.object,related:s.array,responsiveCartoonVariation:s.oneOf(p(u)),shouldCenterDisclaimer:s.bool,shouldEnableArticleBackground:s.bool,shouldEnableFullArticleInverted:s.bool,shouldHideBaseTopPadding:s.bool,shouldHideSeriesNavigation:s.bool,shouldHideSeriesRecirc:s.bool,shouldInheritDropcapColor:s.bool,shouldShowSeriesNavigationInFooter:s.bool,showAffiliateBelowContentHeader:s.bool,showContributor:s.bool,showContributorImageOnMobile:s.bool,showContributorSpotlight:s.bool,showEnhancedTextOverlay:s.bool,showFirstRailRecirc:s.bool,showGalleryCartoonPublishedDate:s.bool,showIssueDateInArticle:s.bool,showLinkStackInsideContentBody:s.bool,showWriterBio:s.bool,taboola:s.shape({publisherId:s.string.isRequired,widgetScriptExcludeContentTypes:s.array,widgetScriptTextContentMode:s.string,widgetScriptTextContentContainer:s.string,widgetScriptTextContentPlacement:s.string}),user:s.object,userPlatform:s.object,xlargePaddingTop:s.string},ce.defaultProps={cartoonVariation:"default",hasDynamicNewsletterSignup:!1,hasLightbox:!1,hasSlideShow:!0,metadataVideo:{},productCarousel:{},related:[],shouldCenterDisclaimer:!1,shouldEnableArticleBackground:!1,shouldEnableFullArticleInverted:!1,shouldHideSeriesNavigation:!0,shouldHideSeriesRecirc:!0,shouldInheritDropcapColor:!1,showAffiliateBelowContentHeader:!1,showContributorImageOnMobile:!0,showGalleryCartoonPublishedDate:!0,showIssueDateInArticle:!1,showLinkStackInsideContentBody:!1,showWriterBio:!1},ce.displayName="ArticlePage",e.exports=y(c(ce),{keysToPluck:["article","beOp","componentConfig","featureFlags","linkList","metadataVideo","outbrain","productCarousel","related","showFirstRailRecirc","taboola","user","userPlatform"]})},80107:(e,t,o)=>{const i=o(67882),{asConfiguredComponent:n}=o(36380);e.exports=n(i,"ArticlePage")},67423:(e,t,o)=>{const i=o(36319);t.Z=(0,i.defineMessages)({truncatedButtonLabel:{id:"ArticlePage.TruncatedButtonLabel",defaultMessage:"Read Full Story",description:"ArticlePage component truncated button label"},backToArticle:{id:"ArticlePage.Back to article",defaultMessage:"Back to article",description:"Gallery slider back button text"},publishedInThe:{id:"ArticlePage.From the issue of",defaultMessage:"From the issue of",description:"Article page date text"}})},96370:function(e,t,o){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(o(80107));(0,i(o(72010)).default)(n.default)}},o={};function i(e){var n=o[e];if(void 0!==n)return n.exports;var a=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=t,e=[],i.O=(t,o,n,a)=>{if(!o){var r=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],l=!0,s=0;s<o.length;s++)(!1&a||r>=a)&&Object.keys(i.O).every((e=>i.O[e](o[s])))?o.splice(s--,1):(l=!1,a<r&&(r=a));if(l){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={6486:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[r,l,s]=o,d=0;if(r.some((t=>0!==e[t]))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(s)var c=s(i)}for(t&&t(o);d<r.length;d++)a=r[d],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},o=globalThis.webpackChunkverso=globalThis.webpackChunkverso||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),i.nc=void 0;var n=i.O(void 0,[5156,4534,419,5565,8801,4332,2041,3528,37,5970,7863,3907,4526,4734],(()=>i(96370)));n=i.O(n)})();

}
/*
     FILE ARCHIVED ON 10:02:18 Oct 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:58:39 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.575
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.012
  esindex: 0.014
  cdx.remote: 8.976
  LoadShardBlock: 42.742 (3)
  PetaboxLoader3.datanode: 95.123 (5)
  load_resource: 136.23 (2)
  PetaboxLoader3.resolve: 28.374
*/