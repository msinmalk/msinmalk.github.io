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

(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[8801],{23780:(e,t,i)=>{const o=i(67294),{useIntl:n}=i(36319),a=i(45697),r=i(84885),s=i(88752),l=i(98288),d=i(44287),c=i(13134),p=i(19688),h=i(19206).Z,g=i(16295),u=i(28910),{ContentHeaderByline:m,ContentHeaderAccreditationSocialIcons:b,ContentHeaderContributorImage:y,ContentHeaderNativeShareButton:S,ContentHeaderBylineContent:v,ContentHeaderDekRewards:C,ContentHeaderAccreditation:w,ContentHeaderDek:f,ContentHeaderSignageLabel:T,SummaryPremiereWrapper:B}=i(19658),D=({venueAwards:e})=>o.createElement(o.Fragment,null,e&&o.createElement(C,{dangerouslySetInnerHTML:{__html:e}}));D.propTypes={venueAwards:a.string};const x=({bylinesBlock:e,contributorImage:t,dangerousDek:i,dividerType:a,shouldRemoveBylineTopMargin:l,hasContributorImageBackground:c,hasDesktopTitleBlockDivider:C,hasLede:x,hasStickySocialIcons:I,hideByLine:k,hideDangerousDek:L,hideSocialIconsOnMobile:E,hideSocialIcons:P,hideTopRating:A,isBusinessContentHeader:R,isMiddleImage:H,isSponsoredContent:N,showSponsorBlock:M,signage:$,sponsorByline:O,sponsoredContentHeaderProps:W,isLiveStoryType:V,metadataVideo:_,publishDateBlock:F,publishDatePosition:j,rating:U,reviewRating:G,shouldShowAuthorsInTitleBlock:z,showContributorImage:Z,socialIconsToHide:K,socialMedia:q,socialTitle:Y,socialDescription:X,pageUrl:J,shouldDisplayPremiereDate:Q,shouldDisplaySignageInline:ee,showNativeShareButton:te,venueAwards:ie,theme:oe})=>{const{rating:ne,count:ae}=U||{},re=D({venueAwards:ie}),se={showDek:!L&&i&&!H,showVenueAwards:ie,showByline:!z&&!N&&!k,showNativeShareButton:te,socialMedia:q},{isLive:le,premiereGap:de,premiereDate:ce}=_,{formatMessage:pe}=n();return o.createElement(w,{className:"content-header__accreditation",shouldShowAuthorsInTitleBlock:z,isBusinessContentHeader:R,hasLede:x,rowWithBottomBorder:C&&("both"===a||"bottom"===a),visibilityInfo:se,"data-testid":"ContentHeaderAccreditation"},se.showDek&&o.createElement(f,{dangerouslySetInnerHTML:{__html:i},as:"div"}),ee&&$&&o.createElement(T,null,$),Q&&ce&&!le&&o.createElement(B,null,o.createElement(u,{premiereDate:ce,premiereGap:de,containerTheme:oe,hideTimeStampIcon:!0})),V&&M&&o.createElement(g,{sponsorByline:O,sponsoredContentHeaderProps:Object.assign({},W),theme:oe}),re,G&&!A&&o.createElement(s,{rating:G}),se.showByline&&o.createElement(m,{isLiveStoryType:V,sponsorName:null==W?void 0:W.sponsorName,showSponsorBlock:M,shouldRemoveBylineTopMargin:l},Z&&t&&o.createElement(y,Object.assign({},t,{sizes:R?"100%":"66px",hasContributorImageBackground:c,isBusinessContentHeader:R})),o.createElement(v,null,e,"bottom"===j&&F)),te?o.createElement(S,null,o.createElement(p,{shareData:{url:J,title:Y,text:X}})):q&&!P&&o.createElement(b,Object.assign({},q,{className:"content-header__social-share",hideSocialIconsOnMobile:E,hasStickySocialIcons:I,socialIconsToHide:K})),!!ne&&!!ae&&o.createElement(d,{averageRatingCount:Math.round(10*ne)/10,hasBorderTop:!0,link:{label:pe(h.readReviews),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:i}=r(t);window.scrollTo(0,i-56)},url:"#reviews"},totalRatingCount:ae}))};x.propTypes={bylinesBlock:a.node,contributorImage:a.shape(l.propTypes),dangerousDek:a.string,dividerType:a.string,hasContributorImageBackground:a.bool,hasDesktopTitleBlockDivider:a.bool,hasLede:a.bool,hasStickySocialIcons:a.bool,hideByLine:a.bool,hideDangerousDek:a.bool,hideSocialIcons:a.bool,hideSocialIconsOnMobile:a.bool,hideTopRating:a.bool,isBusinessContentHeader:a.bool,isLiveStoryType:a.bool,isMiddleImage:a.bool,isSponsoredContent:a.bool,metadataVideo:a.shape({isLive:a.bool,premiereDate:a.string,premiereGap:a.number,series:a.string,videoLength:a.number}),pageUrl:a.string,publishDateBlock:a.node,publishDatePosition:a.string,rating:a.shape(d.propTypes),reviewRating:a.number,shouldDisplayPremiereDate:a.bool,shouldDisplaySignageInline:a.bool,shouldRemoveBylineTopMargin:a.bool,shouldShowAuthorsInTitleBlock:a.bool,showContributorImage:a.bool,showNativeShareButton:a.bool,showSponsorBlock:a.bool,signage:a.string,socialDescription:a.string,socialIconsToHide:a.array,socialMedia:a.shape(c.propTypes),socialTitle:a.string,sponsorByline:a.string,sponsoredContentHeaderProps:a.shape({campaignUrl:a.string,sponsorLogo:a.shape(l.propTypes),sponsorName:a.string}),theme:a.oneOf(["standard","inverted","special"]),venueAwards:a.string},x.defaultProps={hideByLine:!1,hideDangerousDek:!1,hideSocialIcons:!1,isLiveStoryType:!1,metadataVideo:{},shouldDisplayPremiereDate:!1,showSponsorBlock:!1,socialIconsToHide:[],theme:"standard"},e.exports=x},79816:(e,t,i)=>{const o=i(45697),n=i(67294),{CategoriesWrapper:a,CategoriesTitle:r,CategoriesItemList:s,CategoriesItem:l,CategoriesLink:d}=i(21218),c=({title:e,tags:t})=>n.createElement(a,null,n.createElement(r,null,e),n.createElement(s,null,t.map((e=>n.createElement(l,{key:e.name},n.createElement(d,{href:e.slug},e.name))))));c.propTypes={tags:o.array,title:o.string},c.defaultProps={tags:[]},c.displayName="Categories",e.exports=c},21218:(e,t,i)=>{const{default:o}=i(51117),{BaseText:n,BaseLink:a}=i(74327),{calculateSpacing:r,getColorToken:s,getLinkStyles:l}=i(79720),d=o.div.withConfig({displayName:"CategoriesWrapper"})`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-top: ${r(.5)};
`,c=o(n).withConfig({displayName:"CategoriesTitle"})`
  margin-right: ${r(1)};
`;c.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.accreditation",typeIdentity:"typography.definitions.globalEditorial.accreditation-feature"};const p=o.ul.withConfig({displayName:"CategoriesItemList"})`
  margin: 0;
  padding: 0;
  line-height: 1;
`,h=o.li.withConfig({displayName:"CategoriesItem"})`
  display: inline-block;

  &:not(:last-child) {
    &::after {
      margin: 0 ${r(1)};
      color: ${({theme:e})=>s(e,"colors.consumption.lead.standard.divider")};
      content: '|';
    }
  }
`,g=o(a).withConfig({displayName:"CategoriesLink"})`
  ${({theme:e})=>l(e,"colors.consumption.lead.standard.link",null,"global")};
`;g.defaultProps={typeToken:"typography.definitions.globalEditorial.accreditation-core"},e.exports={CategoriesWrapper:d,CategoriesTitle:c,CategoriesItemList:p,CategoriesItem:h,CategoriesLink:g}},86772:(e,t,i)=>{const o=i(94184),n=i(45697),a=i(67294),r=i(65552),{withLightbox:s}=i(92267),l=i(60637),{trackComponent:d}=i(40199),c=i(13134),p=i(36895),h=i(34042),g=i(47109),u=i(93839),m=i(44287),b=i(98288),y=i(49359),S=i(32554),v=i(23780),{useNativeShare:C}=i(8998),{getThemedBylineVariation:w}=i(41317),{ContentHeaderSocialIcons:f}=i(17897),{ContentHeaderWrapper:T,ContentHeaderOffersData:B,ContentHeaderLeadOverride:D,ContentHeaderAccreditationBottom:x,ContentHeaderContainer:I,ContentHeaderPublishDate:k,ContentHeaderLeadAssetWrapper:L,ContentHeaderBylines:E,ContentHeaderPersistentAside:P,PodcastContentHeaderDivider:A,ContentHeaderHedAccreditationWrapper:R}=i(32279),{ContentHeaderDek:H}=i(19658),{getOverrideBehaviour:N}=i(66528),M=({additionalPhotos:e,authorsTitleBlockPosition:t,awards:i,business:n,bylineVariation:r,captionStyle:l,captionWidth:c,className:p,contentHeaderCategories:h,contentSponsorNames:g,contributorImage:m,contributors:b,ctaText:M,dangerousDek:$,dangerousHed:O,dividerType:W,showFullHeaderViewInMobile:V,externalLinks:_,hasDesktopTitleBlockDivider:F,hasLedeLightboxButton:j,hasLightbox:U,hasSlideshow:G,hasStaticPositionedAward:z,hasStickyBoxIndexPosition:Z,hasStickySocialIcons:K,hideAdaptationByline:q,hideByLine:Y,hideContributors:X,hideDangerousDek:J,hideRubric:Q,hideSocialIcons:ee,hideSocialIconsOnMobile:te,hideTopDisclaimerOnMobile:ie,hideTopRating:oe,hidePublishDate:ne,interactiveOverride:ae,isBusinessContentHeader:re,isLiveStoryType:se,isImagePositionBottomInSmallScreen:le,isStoryLive:de,issueDate:ce,issueLink:pe,lede:he,ledeSocialIcons:ge,modifiedDate:ue,offers:me,persistentAsideAlign:be,price:ye,publishDate:Se,rating:ve,reviewRating:Ce,rubric:we,rubricVariation:fe,itemsCount:Te,hasContributorImageBackground:Be,metadataVideo:De,showContentDivider:xe,showContributorImage:Ie,showContributorImageOnMobile:ke,showSponsorBlock:Le,showHeaderButton:Ee,signage:Pe,hideIssueDate:Ae,hideIssueDatePipeSeparator:Re,hideLede:He,hideLedeCaption:Ne,hasDisabledCloseOnClickForLightbox:Me,hasNarrowHeader:$e,podcastPagePrimaryCta:Oe,podcastPagePrimaryCtaLabel:We,shouldDisplayPremiereDate:Ve,shouldDisplaySignageInline:_e,shouldShortenHeadline:Fe,showFullWidthLeadImage:je,showIssueCopyByDate:Ue,showTextOverlayDek:Ge,slideShowVariation:ze,socialIconsToHide:Ze,socialMedia:Ke,socialTitle:qe,socialDescription:Ye,stickySocialAnchorBottom:Xe,stickySocialAnchorTop:Je,theme:Qe,sponsoredContentHeaderProps:et,sponsorByline:tt,variations:{assetPosition:it,copyWidth:ot,contentAlign:nt,contentPosition:at,contentStyle:rt,hasAccreditationExtraSpacing:st,hasAccreditationSocialBottomMargin:lt,hasAccreditationSocialTopMargin:dt,shouldRemoveBylineTopMargin:ct,hasDekBottomMargin:pt,hasExtraSpaceBetweenSeparator:ht=!1,hasLedeLightbox:gt,hasNoRowPadding:ut,hasPublishDateBottomPadding:mt,hasInlinePublishDate:bt,hasReducedTitleTopMargin:yt,hasTitleWrapperTopSpacing:St,shouldRemoveContentHedWrapperTopSpacing:vt,hasXsNavSpacing:Ct,hideAccreditationBottomSpacing:wt,ledeAlign:ft,leadRailAnchor:Tt,mediaWidth:Bt,publishDatePosition:Dt="bottom",reducedSpacings:xt=!1,hasDivider:It,showPodcastButton:kt,shouldUseSmallLede:Lt,shouldReduceAccreditationPadding:Et,hasDateExtraTopSpacing:Pt},hasNativeShareButton:At,shouldEnableNativeShareOnDesktop:Rt,showBreadCrumb:Ht,venueAwards:Nt,hasInvertedCaption:Mt,hasInvertedLedeBackground:$t,variationName:Ot,isFullBleedVideo:Wt,cneVideoEmbedProps:{additionalEmbedParams:Vt,dangerousCaption:_t,isStickyType:Ft,scriptUrl:jt,shouldAutoplay:Ut,shouldHaveTeaser:Gt,shouldMute:zt,variationsVideo:Zt,variationVideoName:Kt},shouldAlignCenterWhenNoCaption:qt})=>{a.useEffect((()=>{d("ContentHeader",Ot)}),[Ot]);const Yt="middle"===it,Xt=(e=>e&&1===Object.keys(e).length&&e.author&&1===e.author.items.length)(b)&&bt,Jt="storyimage"===N(ae),Qt=w({bylineVariation:r,theme:Qe}),ei=a.createElement(y,{authorsPosition:t,business:n,bylineVariation:Qt,contentHeaderCategories:h,contentSponsorNames:g,contributors:b,dangerousHed:O,dividerType:W,externalLinks:_,hasContentDivider:xe,hasDesktopTitleBlockDivider:F,hasDivider:It,hasNoRowPadding:ut,hasExtraSpaceBetweenSeparator:ht,hideAdaptationByline:q,hideIssueDate:Ae,hideIssueDatePipeSeparator:Re,hideRubric:Q,hidePublishDate:ne,isBusinessContentHeader:re,isLiveStoryType:se,isStoryLive:de,issueDate:ce,issueLink:pe,itemsCount:Te,metadataVideo:De,modifiedDate:ue,podcastPagePrimaryCta:Oe,podcastPagePrimaryCtaLabel:We,price:ye,publishDate:Se,publishDatePosition:Dt,rubric:we,rubricVariation:fe,showIssueCopyByDate:Ue,showPodcastButton:kt,theme:Qe});let ti=S;U&&gt&&(ti=e?s(S,e,G,ze,Me):s(S,[he]));const{showNativeShareButton:ii,pageUrl:oi}=C(At,Rt),ni="hidden"!==t,ai=b&&Object.keys(b).length>1,ri=b&&!X&&a.createElement(E,{contributors:b,bylineVariation:Qt,isCompact:!1,inlinePublishDate:Xt}),si=ue&&{datetime:ue},li=!ne&&a.createElement(k,Object.assign({inlinePublishDate:Xt,"data-testid":"ContentHeaderPublishDate",mediaWidth:Bt,contentAlign:nt},V&&{hasDateExtraTopSpacing:Pt,hasPublishDateBottomPadding:mt&&(!Ke||ee||te)},si),Se),di=a.createElement(a.Fragment,null,a.createElement(v,{bylinesBlock:ri,contributorImage:m,dangerousDek:$,hideDangerousDek:J,dividerType:W,hasContributorImageBackground:Be,hasDesktopTitleBlockDivider:F,hasLede:!!he,hideTopRating:oe,hasStickySocialIcons:K,hideByLine:Y,hideSocialIcons:ee,hideSocialIconsOnMobile:te,isBusinessContentHeader:re,isMiddleImage:Yt,isSponsoredContent:g.length>0,isLiveStoryType:se,isStoryLive:de,metadataVideo:De,publishDateBlock:li,publishDatePosition:Dt,rating:ve,reviewRating:Ce,shouldDisplayPremiereDate:Ve,shouldDisplaySignageInline:_e,shouldShowAuthorsInTitleBlock:ni,showContributorImage:Ie,showSponsorBlock:Le,signage:Pe,socialIconsToHide:Ze,socialMedia:Ke,socialTitle:qe,socialDescription:Ye,sponsorByline:tt,sponsoredContentHeaderProps:et,pageUrl:oi,showNativeShareButton:ii,venueAwards:Nt,mediaWidth:Bt,contentAlign:nt,contentPosition:at,theme:Qe,shouldRemoveBylineTopMargin:V&&ct}),a.createElement(B,{ctaText:M,hideTopDisclaimerOnMobile:ie,offers:me,showHeaderButton:Ee,buttonPosition:"content-header"})),ci=qt&&!(null==he?void 0:he.caption);return a.createElement(T,Object.assign({className:o("content-header",{[p]:p}),isLiveStoryType:se,publishDatePosition:Dt,hasXsNavSpacing:Ct,contentAlign:nt,assetPosition:it,shouldShowAuthorsInTitleBlock:ni,captionStyle:l,copyWidth:ot,mediaWidth:Bt,contentStyle:rt,contentPosition:at,isBusinessContentHeader:re,isLedeOverride:Jt,shouldShortenHeadline:Fe,reducedSpacings:xt,hasInvertedCaption:Mt,containerTheme:Qe,shouldBylineContentStacked:ai,hasExtraSpaceBetweenSeparator:ht,hasLede:!!he,hasNarrowHeader:$e,showBreadCrumb:Ht,showTextOverlayDek:Ge},V&&{hasAccreditationExtraSpacing:st,hasAccreditationSocialTopMargin:dt,hasAccreditationSocialBottomMargin:lt,hasDekBottomMargin:pt,hideAccreditationBottomSpacing:wt,hasLeadAssetTopSpacing:!mt&&(J||!$||!Yt),hasTitleWrapperTopSpacing:St,shouldRemoveContentHedWrapperTopSpacing:vt,hasReducedTitleTopMargin:yt,shouldReduceAccreditationPadding:Et},{isLedeTextCenterForMobile:ci,showContributorImageOnMobile:ke,isImagePositionBottomInSmallScreen:le}),a.createElement(I,{containerTheme:Qe,mediaWidth:Bt,showFullWidthLeadImage:je,contentStyle:rt,contentPosition:at,isFullBleedVideo:Wt,"data-testid":"ContentHeaderContainer"},!J&&$&&Yt&&a.createElement(x,null,a.createElement(H,{dangerouslySetInnerHTML:{__html:$},assetPosition:it,mediaWidth:Bt,"data-testid":"ContentHeaderDek"})),It&&a.createElement(A,null),a.createElement(R,{isBusinessContentHeader:re},O&&ei,di),Jt?a.createElement(D,{contentPosition:at,dangerouslySetInnerHTML:{__html:ae.markup}}):!Wt&&!He&&he&&a.createElement(L,{awards:i,hasLightboxButton:j,hasStaticPositionedAward:z,hideLedeCaption:Ne,hasDisabledCloseOnClickForLightbox:Me,lede:he,captionWidth:c,shouldRenderRailAnchor:Tt,shouldUseSmallLede:Lt,socialIcons:ge,mediaWidth:Bt,containerTheme:Qe,hasInvertedLedeBackground:$t,ledeAlign:ft,showFullWidthLeadImage:je,hasLeadAssetTopSpacing:V&&!mt&&(J||!$||!Yt),isBusinessContentHeader:re,shouldAlignCenterWhenNoCaption:qt,as:ti,className:o({[`lead-asset--width-${Bt}`]:Bt})}),Wt&&a.createElement(u,{dangerousCaption:_t,scriptUrl:jt,shouldAutoplay:Ut,shouldMute:zt,shouldHaveTeaser:Gt,additionalEmbedParams:Vt,isStickyType:Ft,variationName:Kt,variations:Zt})),!ii&&K&&Ke&&a.createElement(P,{attributes:{shouldFadeOnMove:!0},align:be,anchorBottom:Xe,anchorTop:Je,hasStickyBoxIndexPosition:Z,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(f,Object.assign({},Ke,{className:"social-icons--share"}))))};M.propTypes={additionalPhotos:n.array,authorsTitleBlockPosition:n.oneOf(["above","below","hidden"]),awards:n.array,business:n.shape({address:n.object,phone:n.string,email:n.string,socialMedia:n.array}),bylineVariation:n.string,captionStyle:n.oneOf(["default","span-content-well"]),captionWidth:n.oneOf(["standard","fullbleed"]),className:n.string,cneVideoEmbedProps:n.shape({additionalEmbedParams:n.object,dangerousCaption:n.string,isStickyType:n.bool,scriptUrl:n.string,shouldAutoplay:n.bool,shouldHaveTeaser:n.bool,shouldMute:n.bool,variationsVideo:n.object,variationVideoName:n.object}),contentHeaderCategories:n.shape({title:n.string,tags:n.array}),contentSponsorNames:n.array,contributorImage:n.shape(b.propTypes),contributors:n.shape(h.propTypes.contributors),ctaText:n.string,dangerousDek:n.string,dangerousHed:n.string,dividerType:n.oneOf(["both","bottom","top"]),externalLinks:n.array,hasContributorImageBackground:n.bool,hasDesktopTitleBlockDivider:n.bool,hasDisabledCloseOnClickForLightbox:n.bool,hasInvertedCaption:n.bool,hasInvertedLedeBackground:n.bool,hasLedeLightboxButton:n.bool,hasLightbox:n.bool,hasNarrowHeader:n.bool,hasNativeShareButton:n.bool,hasSlideshow:n.bool,hasStaticPositionedAward:n.bool,hasStickyBoxIndexPosition:n.bool,hasStickySocialIcons:n.bool,hideAdaptationByline:n.bool,hideByLine:n.bool,hideContributors:n.bool,hideDangerousDek:n.bool,hideIssueDate:n.bool,hideIssueDatePipeSeparator:n.bool,hideLede:n.bool,hideLedeCaption:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,hideSocialIcons:n.bool,hideSocialIconsOnMobile:n.bool,hideTopDisclaimerOnMobile:n.bool,hideTopRating:n.bool,interactiveOverride:n.shape({markup:n.string,behavior:n.string}),isBusinessContentHeader:n.bool,isFullBleedVideo:n.bool,isImagePositionBottomInSmallScreen:n.bool,isLiveStoryType:n.bool,isStoryLive:n.bool,issueDate:n.string,issueLink:n.string,itemsCount:n.shape(l.propTypes),lede:n.oneOfType([n.shape(b.propTypes),n.shape(g.propTypes),n.shape(u.propTypes)]),ledeSocialIcons:n.shape(c.propTypes),metadataVideo:n.shape({isLive:n.bool,premiereDate:n.string,premiereGap:n.number,series:n.string,videoLength:n.number}),modifiedDate:n.string,offers:n.array,persistentAsideAlign:n.oneOf(["left","left-lead-asset"]),podcastPagePrimaryCta:n.string,podcastPagePrimaryCtaLabel:n.string,price:n.string,publishDate:n.string.isRequired,rating:n.shape(m.propTypes),reviewRating:n.number,rubric:n.shape(p.propTypes),rubricVariation:n.string,shouldAlignCenterWhenNoCaption:n.bool,shouldDisplayPremiereDate:n.bool,shouldDisplaySignageInline:n.bool,shouldEnableNativeShareOnDesktop:n.bool,shouldShortenHeadline:n.bool,showBreadCrumb:n.bool,showContentDivider:n.bool,showContributorImage:n.bool,showContributorImageOnMobile:n.bool,showFullHeaderViewInMobile:n.bool,showFullWidthLeadImage:n.bool,showHeaderButton:n.bool,showIssueCopyByDate:n.bool,showSponsorBlock:n.bool,showTextOverlayDek:n.bool,signage:n.string,slideShowVariation:n.string,socialDescription:n.string,socialIconsToHide:n.array,socialMedia:n.shape(c.propTypes),socialTitle:n.string,sponsorByline:n.string,sponsoredContentHeaderProps:n.shape({campaignUrl:n.string,sponsorLogo:n.shape(b.propTypes),sponsorName:n.string}),stickySocialAnchorBottom:r.propTypes.anchorBottom,stickySocialAnchorTop:r.propTypes.anchorTop,theme:n.oneOf(["standard","inverted","special","live"]),variationName:n.string,variations:n.shape({assetPosition:n.oneOf(["bottom","middle"]),contentAlign:n.oneOf(["center","left"]),contentPosition:n.oneOf(["above","below","start","end"]),contentStyle:n.oneOf(["card","dense-card","item"]),copyWidth:n.oneOf(["grid","fullbleed"]),hasDivider:n.bool,hasAccreditationExtraSpacing:n.bool,hasAccreditationSocialBottomMargin:n.bool,hasAccreditationSocialTopMargin:n.bool,hasTitleWrapperTopSpacing:n.bool,shouldReduceAccreditationPadding:n.bool,shouldRemoveBylineTopMargin:n.bool,hasDateExtraTopSpacing:n.bool,hasDekBottomMargin:n.bool,hasExtraSpaceBetweenSeparator:n.bool,hasInlinePublishDate:n.bool,hasLedeLightbox:n.bool,hasNoRowPadding:n.bool,hasPublishDateBottomPadding:n.bool,hasReducedTitleTopMargin:n.bool,hasXsNavSpacing:n.bool,hideAccreditationBottomSpacing:n.bool,leadRailAnchor:n.bool,ledeAlign:n.oneOf(["default","center"]),mediaWidth:n.oneOf(["small","smallrule","grid","fullbleed"]),publishDatePosition:n.oneOf(["top","bottom"]),reducedSpacings:n.bool,shouldRemoveContentHedWrapperTopSpacing:n.bool,shouldUseSmallLede:n.bool,showPodcastButton:n.bool}),venueAwards:n.string},M.defaultProps={authorsTitleBlockPosition:"hidden",business:{address:{},phone:"",email:"",socialMedia:[],link:""},captionStyle:"default",captionWidth:"standard",cneVideoEmbedProps:{additionalEmbedParams:{},dangerousCaption:"",isStickyType:!1,scriptUrl:"",shouldAutoplay:!0,shouldHaveTeaser:!0,shouldMute:!0,variationsVideo:{},variationVideoName:{}},contentSponsorNames:[],dividerType:"both",externalLinks:[],hasContributorImageBackground:!1,hasDesktopTitleBlockDivider:!1,hasInvertedCaption:!1,hasInvertedLedeBackground:!0,hasLightbox:!1,hasNarrowHeader:!1,hasNativeShareButton:!1,hasSlideshow:!1,hasStaticPositionedAward:!1,hasStickySocialIcons:!0,hideAdaptationByline:!1,hideByLine:!1,hideContributors:!1,hideDangerousDek:!1,hideIssueDatePipeSeparator:!1,hideLede:!1,hideLedeCaption:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIcons:!1,hideSocialIconsOnMobile:!1,isFullBleedVideo:!1,isLiveStoryType:!1,isStoryLive:!1,metadataVideo:{},persistentAsideAlign:"left",shouldAlignCenterWhenNoCaption:!1,shouldDisplayPremiereDate:!1,shouldDisplaySignageInline:!1,shouldEnableNativeShareOnDesktop:!1,shouldShortenHeadline:!1,showContentDivider:!1,showContributorImage:!0,showContributorImageOnMobile:!0,showFullHeaderViewInMobile:!1,showFullWidthLeadImage:!1,showIssueCopyByDate:!1,showSponsorBlock:!1,showTextOverlayDek:!1,socialIconsToHide:[],stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderContainer']",edge:"bottom"},theme:"standard",variations:{assetPosition:"bottom",contentAlign:"center",contentPosition:"above",hasDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasInlinePublishDate:!1,hasLedeLightbox:!1,hasNoRowPadding:!1,hasXsNavSpacing:!1,leadRailAnchor:!1,ledeAlign:"default",publishDatePosition:"bottom",reducedSpacings:!1,shouldUseSmallLede:!1,showPodcastButton:!1}},M.displayName="ContentHeader",e.exports=M},18715:(e,t,i)=>{const o=i(67294),n=i(45697),a=i(98288),r=i(47109),s=i(93839),{transformLegacySources:l}=i(8998),{Image:d}=i(15344),c=({lede:e})=>{if(!e||0===Object.keys(e).length)return null;const t="cnevideo"===e.modelName,i="gallery"===e.modelName,n=l(e);return o.createElement(d,null,!t&&!i&&o.createElement(a,Object.assign({},n)),t&&e.scriptEmbedUrl&&o.createElement(s,{shouldAutoplay:!0,scriptUrl:e.scriptEmbedUrl}),i&&o.createElement(r,Object.assign({},e,{showNoAdsFromParent:!0})))};c.defaultProps={lede:null},c.propTypes={lede:n.oneOfType([n.shape(a.propTypes),n.shape(r.propTypes),n.shape(s.propTypes)])},c.displayName="ImageBlock",e.exports=c},99938:(e,t,i)=>{const o=i(67294),n=i(45697),a=i(31954),r=i(36895),s=i(19688),l=i(34042),d=i(98288),c=i(47109),p=i(93839),h=i(13134),g=i(40284),u=i(18715),m=i(33843),{useNativeShare:b}=i(8998),{TextOverlayLogo:y,TextOverlayLogoLink:S,TextOverlayLogoImage:v,TextOverlayWrapper:C,ImageWrapper:w,Content:f,ContentAlign:T,Hed:B,DekWrapper:D,Dek:x,Figure:I,ContentDivider:k,ContributorImage:L,Accreditation:E,PublishDate:P,DekAndCaption:A,ContentGrid:R}=i(15344),H=i(74656),N=i(16295),M=({background:e,bylineVariation:t,className:i,contentAlign:n,contentHeaderCategories:c,contributorImage:p,contributors:M,dangerousDek:$,dangerousHed:O,hasNativeShareButton:W,hideContributors:V,hideDangerousDek:_,hideLedeCaption:F,hidePublishDate:j,hideShareButtons:U,hideRubric:G,showEnhancedPublishDate:z,isLiveStoryType:Z,isStoryLive:K,lede:q,ledeCaption:Y,logoImage:X,logoBaseUrl:J,modifiedDate:Q,numberOfLinesToClamp:ee,preambles:te,publishDate:ie,rubric:oe,shouldUseCustomPreambles:ne,shouldUseCutomColorLiveIndicator:ae,showContentDivider:re,showContributorImage:se,showLogo:le,showTextOverlayDek:de,isDekInverted:ce,showSponsorBlock:pe,socialDescription:he,socialMedia:ge,socialTitle:ue,sponsoredContentHeaderProps:me,sponsorByline:be,theme:ye,isReducedBottomMargin:Se,isStandardCaption:ve,isRubricInverted:Ce,hasDekMarginReduced:we,shouldLimitContentWidth:fe})=>{const{showNativeShareButton:Te,pageUrl:Be}=b(W),De="inverted"===ye,xe=q&&!F&&(q.caption&&q.caption.trim()||q.credit&&q.credit.trim()||Y),Ie=Q&&{datetime:Q};return o.createElement(C,{className:i,"data-testid":"ContentHeader",isRubricInverted:Ce},o.createElement(w,{background:e,contentAlign:n,shouldLimitContentWidth:fe},o.createElement(u,{lede:q}),le&&X?o.createElement(y,null,o.createElement(S,{href:J},o.createElement(v,Object.assign({},X)))):null,o.createElement(R,{contentAlign:n,isReducedBottomMargin:Se},o.createElement(f,null,!G&&(Z&&K?o.createElement(T,{contentAlign:n},o.createElement(m,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0,shouldUseCutomColorLiveIndicator:ae})):oe?o.createElement(T,{contentAlign:n,"data-testid":"ContentHeaderRubric"},o.createElement(r.Inverted,Object.assign({},oe))):null),o.createElement(T,{contentAlign:n},o.createElement(g,Object.assign({},c))),o.createElement(B,{dangerouslySetInnerHTML:{__html:O},"data-testid":"ContentHeaderHed",contentAlign:n}),!_&&$&&de&&o.createElement(x,{dangerouslySetInnerHTML:{__html:$},contentAlign:n,"data-testid":"ContentHeaderDek",isInverted:ce||De,hasDekMarginReduced:we}),re&&o.createElement(k,{contentAlign:n}),Z&&pe?o.createElement(N,{sponsorByline:be,sponsoredContentHeaderProps:Object.assign({},me)}):null,se&&p&&o.createElement(L,{contentAlign:n},o.createElement(d,Object.assign({},p))),o.createElement(E,{contentAlign:n},M&&!V&&o.createElement(l,{contributors:M,bylineVariation:t,contentAlign:n,isCompact:!1,shouldUseCustomPreambles:ne,preambles:te}),!j&&o.createElement(P,Object.assign({"data-testid":"ContentHeaderPublishDate",contentAlign:n,showEnhancedPublishDate:z},Ie),ie)),!U&&(Te?o.createElement(T,{contentAlign:n,bottomSpacing:4},o.createElement(s,{hasDarkBackground:!0,shareData:{url:Be,title:ue,text:he},theme:"inverted"})):ge&&o.createElement(T,{contentAlign:n,bottomSpacing:4},o.createElement(h.Footer,Object.assign({},ge))))))),(xe||$&&!_)&&o.createElement(A,{isInverted:De,isStandardCaption:ve,ledeCaption:Y},xe&&o.createElement(I,{contentAlign:n},o.createElement(a,{dangerousCaptionText:q.caption,dangerousCredit:Z?q.credit||Y:q.credit,topSpacing:0,theme:ye})),!_&&$&&!de&&o.createElement(D,null,o.createElement(H,{isCollapsible:!0,lines:ee},o.createElement(x,{dangerouslySetInnerHTML:{__html:$},contentAlign:n,"data-testid":"ContentHeaderDek",isInverted:De})))))};M.defaultProps={background:"gradient",bylineVariation:"Inverted",className:"",contentAlign:"center",hasDekMarginReduced:!1,hideContributors:!1,hideDangerousDek:!1,hideLedeCaption:!1,isDekInverted:!1,isLiveStoryType:!1,isReducedBottomMargin:!1,isRubricInverted:!1,isStandardCaption:!1,isStoryLive:!1,logoBaseUrl:"/",numberOfLinesToClamp:2,shouldLimitContentWidth:!1,shouldUseCutomColorLiveIndicator:!1,showContentDivider:!1,showContributorImage:!0,showEnhancedPublishDate:!1,showSponsorBlock:!1,showTextOverlayDek:!1},M.propTypes={background:n.oneOf(["gradient","solid"]),bylineVariation:n.string,className:n.string,contentAlign:n.oneOf(["center","left"]),contentHeaderCategories:n.shape({title:n.string,tags:n.array}),contributorImage:n.shape(d.propTypes),contributors:n.shape(l.propTypes.contributors),dangerousDek:n.string,dangerousHed:n.string,hasDekMarginReduced:n.bool,hasNativeShareButton:n.bool,hideContributors:n.bool,hideDangerousDek:n.bool,hideLedeCaption:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,hideShareButtons:n.bool,isDekInverted:n.bool,isLiveStoryType:n.bool,isReducedBottomMargin:n.bool,isRubricInverted:n.bool,isStandardCaption:n.bool,isStoryLive:n.bool,lede:n.oneOfType([n.shape(d.propTypes),n.shape(c.propTypes),n.shape(p.propTypes)]),ledeCaption:n.string,logoBaseUrl:n.string,logoImage:n.shape(d.propTypes),modifiedDate:n.string,numberOfLinesToClamp:n.number,preambles:n.object,publishDate:n.string,rubric:n.shape(r.propTypes),shouldLimitContentWidth:n.bool,shouldUseCustomPreambles:n.bool,shouldUseCutomColorLiveIndicator:n.bool,showContentDivider:n.bool,showContributorImage:n.bool,showEnhancedPublishDate:n.bool,showLogo:n.bool,showSponsorBlock:n.bool,showTextOverlayDek:n.bool,socialDescription:n.string,socialMedia:n.shape(h.propTypes),socialTitle:n.string,sponsorByline:n.string,sponsoredContentHeaderProps:n.shape({campaignUrl:n.string,sponsorLogo:n.shape(d.propTypes),sponsorName:n.string}),theme:n.oneOf(["standard","inverted","special"])},M.displayName="TextOverlay",e.exports=M},63401:(e,t,i)=>{const o=i(99938);e.exports=o},15344:(e,t,i)=>{const{default:o,css:n}=i(51117),{getColorToken:a,getTypographyStyles:r,calculateSpacing:s,minMaxScreen:l,minScreen:d,maxScreen:c,getColorStyles:p}=i(79720),{maxThresholds:h}=i(28657),{SocialIconsList:g}=i(96860),{BREAKPOINTS:u}=i(85326),{BaseText:m,BaseLink:b}=i(74327),{SITE_HEADER_TOP_HEIGHT:y,SITE_HEADER_TOP_STICKY_HEIGHT_MD:S,SITE_HEADER_TOP_STICKY_HEIGHT_LG:v}=i(76267),C=i(48655),{GridItem:w}=i(14134),{universalGridCore:f}=i(61774),{applyGridSpacing:T}=i(62470),B=i(98288),{CaptionText:D}=i(5481),{RubricName:x,RubricLink:I}=i(7320),{cssVariablesGrid:k}=i(62470),L=o.header.withConfig({displayName:"TextOverlayWrapper"})`
  .responsive-clip {
    height: 100%;
  }
  overflow: hidden;

  ${({isRubricInverted:e,theme:t})=>e&&n`
      ${I}, ${x} {
        ${p(t,"color","colors.consumption.lead.inverted.context-signature")}
      }
    `}
`,E=o.div.withConfig({displayName:"Accreditation"})`
  ${({contentAlign:e})=>"center"===e?`margin: ${s(2)} auto`:`margin: ${s(2)} 0`}
`,P=o.time.withConfig({displayName:"PublishDate"}).attrs((({datetime:e})=>({dateTime:e})))`
  ${({theme:e,showEnhancedPublishDate:t})=>r(e,t?"typography.definitions.globalEditorial.context-tertiary":"typography.definitions.globalEditorial.accreditation-core")}
  display: block;
  margin: ${s(1)} 0 ${s(4)};
  text-align: ${({contentAlign:e})=>e};
  color: ${({theme:e})=>a(e,"colors.consumption.lead.inverted.context-tertiary")};
`,A=o(C.WithMargins).withConfig({displayName:"ContentGrid"})`
  > ${w} {
    grid-column: 1 / span 4;
    margin-bottom: 4.5rem;
    @media (min-width: ${u.md}) {
      grid-column: ${({contentAlign:e})=>"left"===e?"1 / span 10":"2 / span 10"};
    }
  }

  ${({isReducedBottomMargin:e})=>e&&`\n    > ${w} {\n      margin-bottom: ${s(4)};\n\n      ${E}, ${P} {\n        margin-bottom: 0;\n      }\n\n      ${d(u.lg)} {\n        margin-bottom: ${s(8)};\n      }\n    }\n    `}
`,R=o.div.withConfig({displayName:"ImageWrapper"})`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: ${({contentAlign:e})=>e};

  @media (orientation: landscape) {
    display: grid;
    min-height: 400px;
  }

  @media (max-width: ${u.md}) {
    display: grid;
    min-height: 667px;
  }

  @media (min-width: ${u.md}) {
    display: grid;
    height: calc(
      100vh - ${y} - ${S}
    );
  }

  @media (min-width: ${u.lg}) {
    display: grid;
    height: calc(
      100vh - ${y} - ${v}
    );
  }

  @media (min-width: ${u.xl}) {
    display: grid;
    min-height: 720px;
  }

  ${({shouldLimitContentWidth:e})=>e&&`\n      ${k()}\n      ${d(u.lg)} {\n        grid-template-columns: repeat(12, 1fr);\n        gap: var(--grid-gap);\n      }\n\n      ${A} {\n        ${d(u.lg)} {\n          padding: 0;\n        }\n\n        ${l(u.lg,`${h.xl}px`)} {\n          grid-column: 3 / span 8;\n        }\n\n        ${d(u.xl)} {\n          grid-column: 4 / span 6;\n        }\n      }\n    `}

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({background:e})=>"gradient"===e?"linear-gradient(to top, rgb(0, 0, 0) 0, transparent 65%)":"rgba(0, 0, 0, 0.65)"};
    content: '';
    pointer-events: none;
  }
`,H=o.div.withConfig({displayName:"Image"})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .responsive-asset {
    &::before {
      display: block;
      width: 100%;
      content: '';
    }
  }

  > *,
  picture,
  .responsive-asset picture, /* set to override the css specifity set on this component  */
  img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
  }

  picture {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
`,N=o.div.withConfig({displayName:"ContentAlign"})`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({contentAlign:e})=>e};
  width: 100%;

  > .social-icons--footer {
    ${g} {
      @media (min-width: ${u.md}) {
        position: relative; /* for bookmark onboarding alert placement */
      }
    }
  }

  ${({socialIconsToHide:e})=>e&&`\n      ${c(u.lg)} {\n        ${(e=>e.map((e=>`\n        .social-icons__list-item--${e} {\n          display: none;\n        }\n    `)).join("\n"))(e)}\n      }\n    `}

  ${({bottomSpacing:e})=>e&&`margin-bottom: ${s(e)};`}
`,M=o.div.withConfig({displayName:"Content"})`
  position: relative;
  z-index: 2;
`,$=o(m).withConfig({displayName:"Hed"})`
  text-align: ${({contentAlign:e})=>e};
`;$.defaultProps={as:"h1",colorToken:"colors.consumption.lead.inverted.heading",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.hed-standard"};const O=o(m).withConfig({displayName:"Figure"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${u.md}) {
    grid-column: 1 / span 12;
  }
`;O.defaultProps={as:"figure",colorToken:"colors.consumption.lead.standard.description",topSpacing:2,typeIdentity:"typography.definitions.consumptionEditorial.description-embed"};const W=o("div").withConfig({displayName:"DekAndCaption"})`
  ${f()}
  ${T("padding")}
  ${({isInverted:e,theme:t})=>e&&`\n      background: ${a(t,"colors.background.dark")};\n    `}

  ${({isStandardCaption:e,ledeCaption:t,theme:i})=>e&&`\n      ${O} {\n        text-align: left;\n\n        ${c(`${h.md}px`)} {\n          text-align: ${t?"left":"center"};\n        }\n\n        ${d(u.lg)} {\n          grid-column: 2 / -2;\n        }\n      }\n      ${D} {\n        ${p(i,"color","colors.consumption.lead.standard.description")};\n      }\n    `}
`,V=o.div.withConfig({displayName:"DekWrapper"})`
  grid-column: 1 / span 4;
  text-align: ${({contentAlign:e})=>e};

  @media (min-width: ${u.md}) {
    grid-column: 3 / span 8;
  }
`,_=o(m).withConfig({displayName:"Dek"})`
  text-align: ${({contentAlign:e})=>e};

  ${({isInverted:e,theme:t})=>e&&`\n    color: ${a(t,"colors.consumption.lead.inverted.description")};\n  `}

  ${({hasDekMarginReduced:e})=>e&&`\n      margin: ${s(2)} 0 0 0;\n    `}
`;_.defaultProps={as:"p",bottomSpacing:4,colorToken:"colors.consumption.lead.standard.description",topSpacing:3,typeIdentity:"typography.definitions.consumptionEditorial.description-core"};const F=o.span.withConfig({displayName:"ContentDivider"})`
  display: block;
  margin-top: ${s(4)};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme:e})=>a(e,"colors.consumption.lead.standard.accent")};
  width: 100px;
  ${({contentAlign:e})=>"center"===e&&`margin: ${s(4)} auto 0`}
`,j=o.div.withConfig({displayName:"ContributorImage"})`
  display: block;
  margin-top: ${s(4)};
  border-radius: 50%;
  min-width: 60px;
  max-width: 66px;
  min-height: 60px;
  max-height: 66px;
  overflow: hidden;
  ${({contentAlign:e})=>"center"===e&&`margin: ${s(4)} auto 0`}
`,U=o(B).withConfig({displayName:"TextOverlayLogoImage"})`
  grid-column: 1 / span 4;

  img {
    max-width: 100%;
    height: 100px;
    vertical-align: bottom;
  }
`,G=o(b).withConfig({displayName:"TextOverlayLogoLink"})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${s(2)};

  @media (max-width: ${u.md}) {
    padding-right: calc(1 * ${s(3)});
    padding-left: calc(1 * ${s(3)});
  }
`,z=o.div.withConfig({displayName:"TextOverlayLogo"})`
  margin: auto;
  margin-top: 1.5rem;
`;e.exports={TextOverlayLogo:z,TextOverlayLogoLink:G,TextOverlayLogoImage:U,TextOverlayWrapper:L,ImageWrapper:R,Image:H,ContentAlign:N,Content:M,Hed:$,DekAndCaption:W,DekWrapper:V,Dek:_,Figure:O,ContentDivider:F,ContributorImage:j,Accreditation:E,PublishDate:P,ContentGrid:A}},84327:(e,t,i)=>{const o=i(67294),n=i(45697),{AddressBlockWrapper:a,HeaderContactInformation:r,HeaderSocialInformation:s,HeaderAddressDetails:l}=i(30414),d=i(73993),c=i(42342),{isIOSDevice:p}=i(39037),h=({address:e,email:t,phone:i,socialMedia:n,link:h})=>{if(!e&&!i&&!t)return null;const{street:g,city:u,state:m,postalCode:b,country:y}=e,S=[];[g,u,m,b,y].forEach((e=>{e&&S.push(e)}));let v=h.replace(/^(https?:|)\/\//,"");return v=v.includes("www.")?v:`www.${v}`,o.createElement(a,null,e&&o.createElement(l,{"data-testid":"HeaderAddressDetails",href:"",onClick:e=>(e=>{e.preventDefault(),(null==S?void 0:S.length)>0&&(p()?window.open(`maps://maps.apple.com/maps?q=${S}`):window.open(`https://web.archive.org/web/20231008100208/https://maps.google.com?q=${S}`))})(e)},o.createElement("div",{className:"StreetAndCity"},g&&o.createElement("span",{"data-testid":"HeaderAddressStreet"},g),u&&o.createElement("span",{"data-testid":"HeaderAddressCity"},S[0]!==u&&", ",u,S[0]!==m&&", ")),o.createElement("div",{className:"StatePostalAndCountry"},m&&o.createElement("span",{"data-testid":"HeaderAddressState"},m),b&&o.createElement("span",{"data-testid":"HeaderAddressPostalCode"},S[0]!==b&&", ",b),y&&o.createElement("span",{"data-testid":"HeaderAddressCountry"},S[0]!==y&&", ",y))),o.createElement(r,null,i&&o.createElement("div",null,o.createElement("a",{"data-testid":"HeaderAddressPhone",href:`tel:${i}`,"aria-label":i,rel:"nofollow noopener noreferrer",target:"_blank"},i)),h&&o.createElement("a",{"data-testid":"HeaderAddressWebUrl",href:h,"aria-label":h,rel:"nofollow noopener noreferrer",target:"_blank"},v)),o.createElement(s,null,t&&o.createElement("a",{"data-testid":"HeaderAddressEmail",href:`mailto:${t}`,"aria-label":t,rel:"nofollow noopener noreferrer",target:"_blank"},o.createElement(d,null)),(null==n?void 0:n.length)>0&&o.createElement("a",{"data-testid":"HeaderAddressInstagram",href:n[0].handle,"aria-label":n[0].network,rel:"nofollow noopener noreferrer",target:"_blank"},o.createElement(c,null))))};h.propTypes={address:n.object,email:n.string,link:n.string,phone:n.string,socialMedia:n.array},e.exports=h},40284:(e,t,i)=>{const o=i(45697),n=i(67294),a=i(79816),r=({hasCategoryEyebrow:e,tags:t,title:i})=>e&&(null==t?void 0:t.length)>0?n.createElement(a,{title:i,tags:t}):null;r.propTypes={hasCategoryEyebrow:o.bool,tags:o.array,title:o.string},e.exports=r},41825:(e,t,i)=>{const o=i(45697),n=i(67294),{ContentHeaderRubricIssueDate:a}=i(81398),r=({hideIssueDate:e,hideIssueDatePipeSeparator:t,issueDate:i,issueLink:o,showIssueCopyByDate:r})=>e||!i?null:n.createElement(a,{name:`${i}${r?" Issue":""}`,url:o,hideIssueDatePipeSeparator:t});r.propTypes={hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,issueDate:o.string,issueLink:o.string,showIssueCopyByDate:o.bool},e.exports=r},16295:(e,t,i)=>{const o=i(45697),n=i(67294),{SponsorContentContainer:a,SponsorImage:r,SponsoredContent:s,SponsoredContentCampaignLink:l}=i(85606),d=i(98288),c=({sponsorByline:e,sponsoredContentHeaderProps:t,theme:i})=>{const{sponsorLogo:o,sponsorName:d,campaignUrl:c}=t;if(!d||!e)return null;const p=`${e} ${d}`;return n.createElement(a,null,n.createElement(l,{additionalRelVals:["sponsored"],href:c},n.createElement(r,Object.assign({},o)),n.createElement(s,{containerTheme:i},p)))};c.propTypes={sponsorByline:o.string,sponsoredContentHeaderProps:o.shape({campaignUrl:o.string,sponsorLogo:o.shape(d.propTypes),sponsorName:o.string}),theme:o.oneOf(["standard","inverted","special"])},c.defaultProps={theme:"inverted"},e.exports=c},85606:(e,t,i)=>{const{default:o}=i(51117),{BREAKPOINTS:n}=i(85326),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=i(79720),l=i(98288),{SpanWrapper:d}=i(89676),c=i(56851),p=o.div.withConfig({displayName:"SponsorContentContainer"})`
  margin-top: ${a(3)};
  text-align: center;
  ${d} {
    display: inline-flex;
    margin-top: 0;
    margin-bottom: 0;
    width: 66px;
  }
`,h=o(l).withConfig({displayName:"SponsorImage"})`
  margin-right: auto;
  margin-left: auto;

  img {
    border: 1px solid;
    border-radius: 50%;
    ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      border-color: ${r(t,"colors.consumption.lead.inverted.divider")};\n    `:`\n    border-color: ${r(t,"colors.consumption.lead.standard.divider")};\n  `)(e,t)}
    width: 64px;
    height: 64px;
  }
`,g=o.div.withConfig({displayName:"SponsoredContent"})`
  ${({theme:e})=>s(e,"typography.definitions.globalEditorial.syndication")}

  display: block;
  margin: ${a(2,"px")} 0 ${a(2,"px")};
  ${({containerTheme:e,theme:t})=>((e,t)=>"inverted"===e||"special"===e?`\n      color: ${r(t,"colors.consumption.lead.inverted.syndication")};\n    `:`\n    color: ${r(t,"colors.consumption.lead.standard.syndication")};\n  `)(e,t)}

  @media (min-width: 0) and (max-width: ${n.md}) {
    margin: ${a(1.5,"px")} 0 ${a(1.5,"px")};
  }
`,u=o(c).withConfig({displayName:"SponsoredContentCampaignLink"})`
  text-decoration: none;
`;e.exports={SponsorContentContainer:p,SponsorImage:h,SponsoredContent:g,SponsoredContentCampaignLink:u}},36517:(e,t,i)=>{const o=i(45697),n=i(67294),{ContentHeaderTitleBlockPublishDate:a}=i(30414),r=({hasExtraSpaceBetweenSeparator:e,hidePublishDate:t,publishDate:i,modifiedDate:o})=>{if(t||!i)return null;const r=o&&{datetime:o};return n.createElement(a,Object.assign({hasExtraSpaceBetweenSeparator:e,"data-testid":"ContentHeaderPublishDate"},r),i)};r.propTypes={hasExtraSpaceBetweenSeparator:o.bool,hidePublishDate:o.bool,modifiedDate:o.string,publishDate:o.string},e.exports=r},37939:(e,t,i)=>{const o=i(45697),n=i(67294),a=i(33843),r=i(36895),s=i(68224),l=i(41825),d=i(36517),{ContentHeaderSponsorName:c,ContentHeaderRubricBlock:p,ContentHeaderRubricDateBlock:h,ContentHeaderRubricPrice:g,ContentHeaderRubricContainer:u,ContentHeaderLiveIndicator:m}=i(81398),b=({authorsPosition:e,bylineVariation:t,contributors:i,hasExtraSpaceBetweenSeparator:o,hideAdaptationByline:b,hideIssueDate:y,hideIssueDatePipeSeparator:S,hidePublishDate:v,hideRubric:C,isLiveStoryType:w,isStoryLive:f,issueDate:T,issueLink:B,modifiedDate:D,price:x,publishDate:I,publishDatePosition:k,rubric:L,rubricVariation:E,showIssueCopyByDate:P,sponsorName:A})=>{const R=r[E]||r,H=!y&&T&&L,N=("above"===e||"top"===k)&&!A;return w&&f?n.createElement(m,null,n.createElement(a,{hasBackground:!0,isDiscovery:!1,shouldEnableAnimation:!0})):!(L||T||i)||C?null:(L||T||i)&&n.createElement(p,{hasIssueDateAndRubricBlock:H,"data-testid":"ContentHeaderRubric"},"above"===e&&n.createElement(s,{bylineVariation:t,contributors:i,hideAdaptationByline:b}),n.createElement(h,{"data-testid":"ContentHeaderRubricDateBlock"},L&&n.createElement(u,Object.assign({},L,{isVerticalAlign:"above"===e||"top"===k||H,as:R})),x&&n.createElement(g,null,"/ ",x),A&&n.createElement(c,{hasExtraSpaceBetweenSeparator:o,items:[{name:A}]}),N&&n.createElement(d,{hasExtraSpaceBetweenSeparator:o,hidePublishDate:v,modifiedDate:D,publishDate:I})),n.createElement(l,{hideIssueDate:y,hideIssueDatePipeSeparator:S,issueDate:T,issueLink:B,showIssueCopyByDate:P}))};b.propTypes={authorsPosition:o.string,bylineVariation:o.string,contributors:o.object,hasExtraSpaceBetweenSeparator:o.bool,hasNoRowPadding:o.bool,hideAdaptationByline:o.bool,hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,issueDate:o.string,issueLink:o.string,modifiedDate:o.string,price:o.string,publishDate:o.string,publishDatePosition:o.string,rubric:o.shape(r.propTypes),rubricVariation:o.string,showIssueCopyByDate:o.bool,sponsorName:o.string},b.defaultProps={hideAdaptationByline:!1,isLiveStoryType:!1,isStoryLive:!1},e.exports=b},49359:(e,t,i)=>{const o=i(45697),n=i(67294),{useIntl:a}=i(36319),{asConfiguredComponent:r}=i(36380),s=i(60637),l=i(36895),d=i(68224),c=i(36517),p=i(37939),h=i(40284),g=i(84327),u=i(33843),{ContentHeaderContentDivider:m,ContentHeaderLowerBylineDateBlock:b,ContentHeaderItemCount:y,ContentHeaderHed:S,ContentHeaderTitleBlockWrapper:v,PodcastButtonWrapper:C,PodcastButton:w,PodcastLink:f}=i(30414),T=i(83074).Z,B=e=>e.length>0?e[0]:null,D=({authorsPosition:e,business:t,bylineVariation:i,contentHeaderCategories:o,contentSponsorNames:r,contributors:s,dangerousHed:l,dividerType:D,externalLinks:x,hasContentDivider:I,hasDesktopTitleBlockDivider:k,hasExtraSpaceBetweenSeparator:L,hideIssueDate:E,hideIssueDatePipeSeparator:P,hasNoRowPadding:A,hideAdaptationByline:R,hidePublishDate:H,hideRubric:N,isBusinessContentHeader:M,isLiveStoryType:$,isStoryLive:O,issueDate:W,issueLink:V,itemsCount:_,metadataVideo:F,modifiedDate:j,price:U,podcastPagePrimaryCta:G,podcastPagePrimaryCtaLabel:z,publishDate:Z,publishDatePosition:K,rubric:q,rubricVariation:Y,shouldDisplayLiveIndicator:X,showIssueCopyByDate:J,showItemCount:Q,showPodcastButton:ee,theme:te})=>{const ie=I&&"above"!==e,oe="inverted"===te,ne=oe?"outlined":"filled",ae=k&&("both"===D||"top"===D),{formatMessage:re}=a();return n.createElement(v,{rowWithTopBorder:ae,isBusinessContentHeader:M,"data-testid":"ContentHeaderTitleBlockWrapper"},F.isLive&&X&&n.createElement(u,null),n.createElement(p,{authorsPosition:e,bylineVariation:i,contributors:s,hasExtraSpaceBetweenSeparator:L,hasNoRowPadding:A,hideIssueDate:E,hideIssueDatePipeSeparator:P,hideAdaptationByline:R,hidePublishDate:H,hideRubric:N,isLiveStoryType:$,isStoryLive:O,issueDate:W,issueLink:V,modifiedDate:j,price:U,publishDate:Z,publishDatePosition:K,rubric:q,rubricVariation:Y,showIssueCopyByDate:J,sponsorName:B(r),theme:te}),n.createElement(h,Object.assign({},o)),n.createElement(S,{dangerouslySetInnerHTML:{__html:l},"data-testid":"ContentHeaderHed"}),"below"===e&&n.createElement(b,null,n.createElement(d,{bylineVariation:i,contributors:s}),n.createElement(c,{hasExtraSpaceBetweenSeparator:L,hidePublishDate:H,modifiedDate:j,publishDate:Z})),Q&&_&&n.createElement(y,Object.assign({},_)),ie&&n.createElement(m,null),M&&n.createElement(g,{address:null==t?void 0:t.address,phone:null==t?void 0:t.phone,email:null==t?void 0:t.email,socialMedia:null==t?void 0:t.socialMedia,link:null==t?void 0:t.url}),ee&&G&&n.createElement(C,null,n.createElement(w,{btnStyle:ne,href:G,label:z||re(T.primaryCTALabel),target:"blank",inputKind:"link"}),x.length>0&&n.createElement(f,{isInverted:oe,href:x[0].url,target:"blank"},"Or, choose where to Listen")))};D.propTypes={authorsPosition:o.oneOf(["above","below","hidden"]),business:o.shape({address:o.object,phone:o.string,email:o.string,socialMedia:o.array,url:o.string}),bylineVariation:o.string,contentHeaderCategories:o.shape({title:o.string,tags:o.array,hasCategoryEyebrow:o.boolean}),contentSponsorNames:o.array,contributors:o.object,dangerousHed:o.string.isRequired,dividerType:o.string,externalLinks:o.array,hasContentDivider:o.bool,hasDesktopTitleBlockDivider:o.bool,hasDivider:o.bool,hasExtraSpaceBetweenSeparator:o.bool,hasNoRowPadding:o.bool,hideAdaptationByline:o.bool,hideIssueDate:o.bool,hideIssueDatePipeSeparator:o.bool,hidePublishDate:o.bool,hideRubric:o.bool,isBusinessContentHeader:o.bool,isLiveStoryType:o.bool,isStoryLive:o.bool,issueDate:o.string,issueLink:o.string,itemsCount:o.shape(s.propTypes),metadataVideo:o.shape({isLive:o.bool,premiereDate:o.string,series:o.string,videoLength:o.number}),modifiedDate:o.string,podcastPagePrimaryCta:o.string,podcastPagePrimaryCtaLabel:o.string,price:o.string,publishDate:o.string,publishDatePosition:o.oneOf(["top","bottom"]),rubric:o.shape(l.propTypes),rubricVariation:o.string,shouldDisplayLiveIndicator:o.bool,showIssueCopyByDate:o.bool,showItemCount:o.bool,showPodcastButton:o.bool,theme:o.oneOf(["standard","inverted","special"])},D.defaultProps={authorsPosition:"hidden",contentHeaderCategories:{hasCategoryEyebrow:!1},contentSponsorNames:[],dividerType:"both",hasDesktopTitleBlockDivider:!1,hasExtraSpaceBetweenSeparator:!1,hasNoRowPadding:!1,hideAdaptationByline:!1,hideIssueDate:!0,hideIssueDatePipeSeparator:!1,hidePublishDate:!1,hideRubric:!1,isBusinessContentHeader:!1,metadataVideo:{},publishDatePosition:"bottom",shouldDisplayLiveIndicator:!1,showIssueCopyByDate:!1,showItemCount:!1,showPodcastButton:!1,theme:"standard"},D.displayName="TitleBlock",e.exports=r(D,"TitleBlock"),e.exports.TitleBlock=D},68224:(e,t,i)=>{const o=i(45697),n=i(67294),{ContentHeaderBylines:a}=i(32279),r=({bylineVariation:e,contributors:t,hideAdaptationByline:i})=>t&&0!==Object.keys(t).length?n.createElement(a,{contributors:t,bylineVariation:e,isCompact:!1,hideAdaptationByline:i}):null;r.propTypes={bylineVariation:o.string,contributors:o.object,hideAdaptationByline:o.bool},e.exports=r},36125:(e,t,i)=>{const{asVariation:o}=i(95545),n=i(86772),a=i(63401),r=i(72149);n.TextAboveCenterGridWidth=o(n,"TextAboveCenterGridWidth",{contentAlign:"center",contentPosition:"above"}),n.TextAboveCenterGridWidthTopCardSmall=o(n,"TextAboveCenterGridWidthTopCardSmall",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed",leadRailAnchor:!0,mediaWidth:"small"}),n.TextAboveCenterFullBleed=o(n,"TextAboveCenterFullBleed",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed"}),n.TextAboveCenterFullBleedNoContributor=o(n,"TextAboveCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed",shouldRemoveBylineTopMargin:!0,hasDekBottomMargin:!0,hasAccreditationSocialTopMargin:!0,shouldReduceAccreditationPadding:!0},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),n.TextAboveCenterFullBleedTop=o(n,"TextAboveCenterFullBleedTop",{contentAlign:"center",contentPosition:"above",copyWidth:"fullbleed"}),n.TextAboveCenterFullBleedGridWidthCard=o(n,"TextAboveCenterFullBleedGridWidthCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",copyWidth:"fullbleed"}),n.TextAboveCenterFullBleedCard=o(n,"TextAboveCenterFullBleedCard",{contentAlign:"center",contentPosition:"above",contentStyle:"card",mediaWidth:"fullbleed",copyWidth:"fullbleed"}),n.TextAboveLeftSmall=o(n,"TextAboveLeftSmall",{contentAlign:"left",contentPosition:"above",leadRailAnchor:!0,mediaWidth:"small"}),n.TextAboveLeftSmallWithRule=o(n,"TextAboveLeftSmallWithRule",{contentAlign:"left",contentPosition:"above",hasLedeLightbox:!0,leadRailAnchor:!0,mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0,hasTitleWrapperTopSpacing:!0,hasAccreditationSocialTopMargin:!0,shouldRemoveContentHedWrapperTopSpacing:!0,hasReducedTitleTopMargin:!0,hasAccreditationExtraSpacing:!0,shouldRemoveBylineTopMargin:!0,hasDateExtraTopSpacing:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),n.TextAboveCenterSmallWithRule=o(n,"TextAboveCenterSmallWithRule",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0,shouldRemoveBylineTopMargin:!0,hasAccreditationExtraSpacing:!0,hasAccreditationSocialTopMargin:!0,hasTitleWrapperTopSpacing:!0,shouldRemoveContentHedWrapperTopSpacing:!0,hasReducedTitleTopMargin:!0},{stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),n.InlineImage=o(n,"InlineImage",{contentAlign:"center",contentPosition:"above",leadRailAnchor:!0,ledeAlign:"center",mediaWidth:"smallrule",hasInlinePublishDate:!0,hasNoRowPadding:!0,hasXsNavSpacing:!0,shouldRemoveBylineTopMargin:!0,hasAccreditationSocialTopMargin:!0,shouldRemoveContentHedWrapperTopSpacing:!0,hasReducedTitleTopMargin:!0,hasTitleWrapperTopSpacing:!0,hasAccreditationExtraSpacing:!0},{dividerType:"bottom",hideLede:!0,showContributorImage:!1,stickySocialAnchorTop:{selector:"[data-testid='ContentHeaderAccreditation']",edge:"bottom"}}),n.TextAboveLeftFullBleed=o(n,"TextAboveLeftFullBleed",{contentAlign:"left",contentPosition:"above",copyWidth:"grid",hasLedeLightbox:!0,mediaWidth:"fullbleed"}),n.TextAboveLeftGridWidth=o(n,"TextAboveLeftGridWidth",{contentAlign:"left",contentPosition:"above",mediaWidth:"grid"}),n.TextAboveLeftGridWidthCard=o(n,"TextAboveLeftGridWidthCard",{contentAlign:"left",contentPosition:"above",contentStyle:"card",mediaWidth:"grid"}),n.TextAboveLeftNoImg=o(n,"TextAboveLeftNoImg",{contentAlign:"left",contentPosition:"above"},{className:"content-header--no-lede",lede:null}),n.TextBelowCenterGridWidth=o(n,"TextBelowCenterGridWidth",{contentAlign:"center",contentPosition:"below"}),n.TextBelowCenterFullBleed=o(n,"TextBelowCenterFullBleed",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed"}),n.TextBelowCenterFullBleedNoContributor=o(n,"TextBelowCenterFullBleedNoContributor",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed",shouldRemoveBylineTopMargin:!0,hasDekBottomMargin:!0,hasAccreditationSocialTopMargin:!0,hasAccreditationSocialBottomMargin:!0,hasPublishDateBottomPadding:!0,hideAccreditationBottomSpacing:!0,shouldReduceAccreditationPadding:!0},{hasDesktopTitleBlockDivider:!1,captionStyle:"span-content-well",captionWidth:"fullbleed",showContributorImage:!1}),n.TextBelowLeftGridWidth=o(n,"TextBelowLeftGridWidth",{contentAlign:"left",contentPosition:"below"}),n.TextBelowLeftGridWidthCard=o(n,"TextBelowLeftGridWidthCard",{contentAlign:"left",contentPosition:"below",contentStyle:"card"}),n.TextBelowLeftFullBleed=o(n,"TextBelowLeftFullBleed",{contentAlign:"left",contentPosition:"below",mediaWidth:"fullbleed"}),n.TextOverlay=o(a,"TextOverlayContentHeader",{}),n.TextOverlayWithLogo=o(a,"TextOverlayContentHeaderWithLogo",{isFeatured:!0}),n.TextOverlayCenterFullBleedGradient=o(a,"TextOverlayCenterFullBleedGradient",{contentAlign:"center",background:"gradient"}),n.SplitScreenImgLeft=o(n,"SplitScreenImgLeft",{contentAlign:"left",contentPosition:"end"}),n.SplitScreenImgRight=o(n,"SplitScreenImgRight",{contentAlign:"left",contentPosition:"start"}),n.SplitScreenImgRightContentCenter=o(n,"SplitScreenImgRightContentCenter",{contentAlign:"center",contentPosition:"start",contentStyle:"card",mediaWidth:"grid"}),n.AssetMiddleCenterBig=o(n,"AssetMiddleCenterBig",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"small"}),n.AssetMiddleCenterFullBleed=o(n,"AssetMiddleCenterFullBleed",{assetPosition:"middle",contentAlign:"center",contentPosition:"above",mediaWidth:"grid"}),n.SubjectFocus=o(n,"SubjectFocus",{assetPosition:"bottom",contentAlign:"left",contentPosition:"above",hasExtraSpaceBetweenSeparator:!0,leadRailAnchor:!0,mediaWidth:"small",publishDatePosition:"top",reducedSpacings:!0},{showContributorImage:!1}),n.SplitScreenImageRightFullBleed=o(r,"SplitScreenImageRightFullBleed",{},{isTextRight:!1,showContributorImage:!1,shouldRemoveBylineTopMargin:!0,hasSplitScreenSocialShareReduceTopSpacing:!0}),n.SplitScreenImageRightInset=o(r,"SplitScreenImageRightInset",{},{hasSplitScreenSocialShareReduceTopSpacing:!0,shouldRemoveBylineTopMargin:!0,isInset:!0,isTextRight:!1,showContributorImage:!1,hideHeaderDividerInMobile:!0,hasImageBottomSpacing:!1}),n.SplitScreenImageLeftFullBleed=o(r,"SplitScreenImageLeftFullBleed",{},{shouldRemoveBylineTopMargin:!0,hasSplitScreenSocialShareReduceTopSpacing:!0,isTextRight:!0,showContributorImage:!1}),n.SplitScreenImageLeftInset=o(r,"SplitScreenImageLeftInset",{},{isInset:!0,isTextRight:!0,showContributorImage:!1,hasSplitScreenSocialShareReduceTopSpacing:!0,shouldRemoveBylineTopMargin:!0,hideHeaderDividerInMobile:!0}),n.BusinessContentHeader=o(n,"BusinessContentHeader",{contentAlign:"center",contentPosition:"below",mediaWidth:"fullbleed",showContentDivider:!0,hideRubric:!0}),n.PodcastContentHeader=o(n,"PodcastContentHeader",{contentAlign:"center",contentPosition:"below",shouldUseSmallLede:!0,showPodcastButton:!0,hasDivider:!0},{hideLedeCaption:!0}),n.TextAboveCenterFullBleedVideo=o(n,"ContentHeaderFullBleedVideo",{contentAlign:"center",contentPosition:"above",mediaWidth:"fullbleed",isFullBleedVideo:!0}),e.exports=n},17930:(e,t,i)=>{const o=i(45697),n=i(94184),a=i(67294),{useIntl:r}=i(36319),s=i(77333),l=i(7279),d=i(6046),{trackComponent:c}=i(40199),p=i(30970).Z,{ReviewRatingDataLabel:h,ReviewRatingDataWrapper:g,ReviewRatingDataValue:u,ReviewRatingDataExplainer:m,ReviewRatingDataExplainerModal:b,ReviewRatingDataExplainerModalList:y,ReviewRatingDataExplainerModalListRating:S,ReviewRatingDataExplainerModalListDescribe:v}=i(73703),C=({className:e,rating:t,ratingList:i})=>{a.useEffect((()=>{c("ReviewRatingData")}),[]);const o=r(),[C,w]=a.useState(!0),f=()=>{w(!C)},T=a.createElement(b,{className:"review-rating-data__rating-explainer-modal"},i.map(((e,t)=>a.createElement(y,{key:e},a.createElement(S,{as:"span"},t+1),a.createElement(v,{as:"span"},e)))));return a.createElement(g,{className:n("review-rating-data",e)},a.createElement(h,{className:"review-rating-data__label"},o.formatMessage(p.dataLabel)),a.createElement(u,null,t,"/10"),a.createElement(m,null,a.createElement(l.Utility,{isIconButton:!0,ButtonIcon:s,className:"review-rating-data__info-button",label:o.formatMessage(p.buttonLabel),onClickHandler:f,role:"button"}),!C&&a.createElement(d,{className:"alert__tooltip",arrowPosition:52,gaIdentifier:"review-rating-explainer",isVisible:!0,isTooltip:!0,onClose:f,shouldUseArrow:!0},T)))};C.propTypes={className:o.string,rating:o.number,ratingList:o.array},C.defaultProps={rating:0,ratingList:[]},C.displayName="ReviewRatingData",e.exports=C},88752:(e,t,i)=>{const{asConfiguredComponent:o}=i(36380),n=i(17930);e.exports=o(n,"ReviewRatingData")},73703:(e,t,i)=>{const o=i(51117).default,{BaseText:n}=i(74327),{calculateSpacing:a,getTypographyStyles:r,getColorToken:s}=i(79720),l=o.div.withConfig({displayName:"ReviewRatingDataWrapper"})`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  margin-top: ${a(2)};
  width: 100%;
`,d=o(n).withConfig({displayName:"ReviewRatingDataLabel"})`
  margin-right: ${a(1)};
`;d.defaultProps={as:"span",typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const c=o(n).withConfig({displayName:"ReviewRatingDataValue"})`
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.subhed-aux-primary")}
  color: ${({theme:e})=>s(e,"colors.consumption.body.standard.subhed")};
`,p=o.div.withConfig({displayName:"ReviewRatingDataExplainer"})`
  margin-left: ${a(.5)};

  .review-rating-data__info-button,
  .review-ratingdata__close-button {
    margin: 0;
    border: 0;
    background-color: ${({theme:e})=>s(e,"colors.interactive.base.white")};
    fill: ${({theme:e})=>s(e,"colors.consumption.body.standard.accent")};
    padding: 0;

    &:hover,
    &:focus {
      border: 0;
      background: none;
    }
  }

  .icon {
    padding-right: 5px;
    width: 24px;
    height: 24px;
  }

  .review-rating-data__info-button {
    .button__icon-container,
    .icon {
      padding-right: 0;
      width: 18px;
      height: 18px;
    }
  }

  .icon.icon-close {
    width: 35px;
    height: 35px;
  }
`,h=o.div.withConfig({displayName:"ReviewRatingDataExplainerModal"})`
  padding: ${a(2)} 0 ${a(2)}
    ${a(2)};
`,g=o.div.withConfig({displayName:"ReviewRatingDataExplainerModalList"})`
  display: flex;
  letter-spacing: 0;
`,u=o.span.withConfig({displayName:"ReviewRatingDataExplainerModalListRating"})`
  flex: 1;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
  font-weight: bold;
`,m=o.span.withConfig({displayName:"ReviewRatingDataExplainerModalListDescribe"})`
  flex: 9;
  ${({theme:e})=>r(e,"typography.definitions.consumptionEditorial.citation")}
`;e.exports={ReviewRatingDataLabel:d,ReviewRatingDataWrapper:l,ReviewRatingDataValue:c,ReviewRatingDataExplainer:p,ReviewRatingDataExplainerModal:h,ReviewRatingDataExplainerModalList:g,ReviewRatingDataExplainerModalListRating:u,ReviewRatingDataExplainerModalListDescribe:m}},30970:(e,t,i)=>{const o=i(36319);t.Z=(0,o.defineMessages)({dataLabel:{id:"ReviewRatingData.DataLabel",defaultMessage:"Rating:",description:"Label for rating"},buttonLabel:{id:"ReviewRatingData.ButtonLabel",defaultMessage:"Open rating explainer",description:"Label for rating explainer button"}})},98810:(e,t,i)=>{const o=i(67294),n=i(45697),a=i(93839),{SplitScreenContentHeaderLede:r,SplitScreenContentHeaderLedeBlock:s}=i(41903),l=({captionCredit:e,className:t,isCNEVideo:i,lede:n,socialMedia:l})=>n?i?n.scriptEmbedUrl?o.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},o.createElement(a,{hasMargins:!1,shouldAutoplay:!0,scriptUrl:n.scriptEmbedUrl})):null:o.createElement(s,{"data-testid":"ContentHeaderLeadAsset",className:t},o.createElement(r,Object.assign({},n)),e,l):null;l.propTypes={captionCredit:n.object,className:n.string,isCNEVideo:n.bool,lede:n.object,socialMedia:n.object},e.exports=l},68660:(e,t,i)=>{const o=i(94184),n=i(45697),a=i(67294),{useIntl:r}=i(36319),s=i(23493),l=i(3650).Z,{mapSourcesToSegmentedSources:d}=i(28679),c=i(98810),p=i(98288),h=i(36895),g=i(28891),u=i(90227),m=i(34042),b=i(65552),y=i(13134),S=i(44287),v=i(84885),{formatInfoSliceItems:C}=i(11850),w=i(19688),{useNativeShare:f}=i(8998),{getThemedBylineVariation:T}=i(41317),{getOverrideBehaviour:B}=i(66528),{trackComponent:D}=i(40199),{BookmarkIcon:x}=i(47649),{SplitScreenContentHeaderArtist:I,SplitScreenContentHeaderArtistSlash:k,SplitScreenContentHeaderArtistWrapper:L,SplitScreenContentHeaderByline:E,SplitScreenContentHeaderCaption:P,SplitScreenContentHeaderContributorImage:A,SplitScreenContentHeaderDek:R,SplitScreenContentHeaderDekDown:H,SplitScreenContentHeaderDivider:N,SplitScreenContentHeaderHed:M,SplitScreenContentHeaderMain:$,SplitScreenContentHeaderInfoSlice:O,SplitScreenContentHeaderForMusicReview:W,SplitScreenContentHeaderNativeShareButton:V,SplitScreenContentHeaderPublishDate:_,SplitScreenContentHeaderRating:F,SplitScreenContentHeaderRubric:j,SplitScreenContentHeaderRubricIssueDate:U,SplitScreenContentHeaderSignageRubric:G,SplitScreenContentHeaderSocialShare:z,SplitScreenContentHeaderTitleBlock:Z,SplitScreenContentHeaderWrapper:K,SplitScreenContentHeaderScoreBox:q,SplitScreenContentHeaderLeadWrapper:Y,SplitScreenContentHeaderArtistLink:X,SplitScreenContentHeaderGrid:J,SplitScreenContentHeaderPersistentAside:Q,SplitScreenContentHeaderReleaseYear:ee,SplitScreenContentHeaderLeadOverride:te}=i(41903),{SplitScreenContentHeaderSocialIcons:ie}=i(38215),{doHideBookmark:oe,doDisplayBookmark:ne}=i(49214),{BREAKPOINTS:ae}=i(85326),re=({contributors:e,contributorsPosition:t,hasInvertedBylineLink:i,hideContributors:o,hideIssueDate:n,hidePublishDate:r,issueDate:s,issueDatePostfix:l,issueLink:d,publishDate:c,publishDatePosition:p,rubric:g,rubricVariation:u,hideRubric:m,themedBylineVariation:b})=>{const y=h[u]||h,S=h.Item,v=e&&0!==Object.keys(e).length;return a.createElement("div",{"data-testid":"ContentHeaderRubric"},v&&!o&&"top"===t&&a.createElement(E,{contributors:e,bylineVariation:b,isCompact:!1,contributorsPosition:t,hasInvertedBylineLink:i}),g&&!m&&a.createElement(j,Object.assign({as:y},g)),!n&&s&&a.createElement(U,{as:S,name:l?`${s}${l}`:s,url:d}),!r&&c&&"top"===p&&a.createElement(_,{"data-testid":"ContentHeaderPublishDate"},c))};re.propTypes={contributors:n.object,contributorsPosition:n.oneOf(["top","bottom"]),hasInvertedBylineLink:n.bool,hideContributors:n.bool,hideIssueDate:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,issueDate:n.string,issueDatePostfix:n.string,issueLink:n.string,publishDate:n.string,publishDatePosition:n.oneOf(["top","bottom"]),rubric:n.shape(h.propTypes),rubricVariation:n.string,themedBylineVariation:n.string};const se=({signage:e,shouldDisplaySignage:t})=>e&&t?a.createElement("div",{"data-testid":"ContentHeaderRubricSignage"},a.createElement(G,{name:e})):null;se.propTypes={shouldDisplaySignage:n.bool,signage:n.string};const le=(e,t,i,o,n,r,s,l)=>n&&a.createElement(z,Object.assign({},n,{hasSocialShare:!0,hasStickySocialIcons:e,hideSocialIcons:t,hideSocialIconsOnMobile:i,socialIconsToHide:o,socialMediaPositionInMobile:r},l&&{hasSplitScreenSocialShareReduceTopSpacing:s})),de=(e,t)=>((null==t?void 0:t.caption)||(null==t?void 0:t.credit))&&!e&&a.createElement(J,null,a.createElement(P,{dangerousCaptionText:t.caption,dangerousCredit:t.credit})),{useRef:ce,useEffect:pe}=a,he=({artists:e,brandSlug:t,captionPosition:i,className:n,contentAlign:p,contributorImage:h,dangerousHed:m,dangerousDek:b,shouldRemoveBylineTopMargin:y,hasContributorImageBackground:S,showFullHeaderViewInMobile:P,hasInvertedBylineLink:j,hasMargin:U,hasSplitScreenSocialShareReduceTopSpacing:G,hasStickySocialIcons:z,hasNativeShareButton:he,hideContributorTitle:ge,hideContributors:ue,hideDangerousDek:me,hideHeaderDividerInMobile:be,hasImageBottomSpacing:ye,hideIssueDate:Se,hidePublishDate:ve,hideRubric:Ce,socialIconsToHide:we,hideSocialIcons:fe,hideSocialIconsOnMobile:Te,hideCaption:Be,imageAlignment:De,infoSliceFields:xe,interactiveOverride:Ie,isInset:ke,isMusicReview:Le,isTextRight:Ee,isTrackReview:Pe,issueDate:Ae,issueDatePostfix:Re,issueLink:He,isRatingClickable:Ne,isSplitScreenArtistLarge:Me,rubric:$e,rubricVariation:Oe,contributors:We,contributorsPosition:Ve,bylineVariation:_e,persistentAsideAlign:Fe,publishDate:je,publishDatePosition:Ue,lede:Ge,ledeContentAlign:ze,modifiedDate:Ze,musicRating:Ke,shouldEnableNativeShareOnDesktop:qe,shouldFitToViewport:Ye,showBookmarked:Xe,shouldHeaderFitToViewport:Je,showContentDivider:Qe,showContributorImage:et,showHeaderDivider:tt,socialDescription:it,socialMedia:ot,socialMediaPositionInMobile:nt,socialTitle:at,stickySocialAnchorBottom:rt,stickySocialAnchorTop:st,theme:lt,rating:dt,signage:ct,shouldDisplaySignage:pt,showReviewLink:ht,textAlign:gt,shouldAlignCenterWhenNoCaption:ut})=>{var mt,bt;const[yt,St]=a.useState("100vw");a.useEffect((()=>{var e;if(D("SplitScreenContentHeader"),ke){const t=`(min-width: ${ae.md})`;if(window.matchMedia(t).matches){const t=null===(e=window.visualViewport)||void 0===e?void 0:e.width;t&&St(`${t}px`)}}}),[ke]);const vt="CTA-firework"===B(Ie),Ct=T({bylineVariation:_e,theme:lt}),{showNativeShareButton:wt,pageUrl:ft}=f(he,qe),{score:Tt,isBestNewMusic:Bt,isBestNewReissue:Dt}=Ke,xt=C(xe),It=null==xe?void 0:xe.releaseYear,kt=(e=>{if(!e)return;const t=Object.assign({},e);return new Set(["photo","cartoon"]).has(e.contentType)&&!e.segmentedSources&&e.sources&&(t.segmentedSources=d(e.sources)),t})(Ge),Lt="cnevideo"===(null==Ge?void 0:Ge.modelName),Et=!Ge||Lt,{rating:Pt,count:At}=dt||{},Rt=Le?W:$,{formatMessage:Ht}=r(),Nt={},Mt=ce();"belowImage"===i&&(Nt.captionCredit=de(Be,Ge)),"inLeadWrapperBelowImg"===nt&&(Nt.socialMedia=le(z,fe,Te,we,ot,nt,P));const $t=()=>{(e=>{const t=e.current&&e.current.offsetTop,i=window.pageYOffset;return Math.abs(i)>Math.abs(t)})(Mt)?ne():oe()};pe((()=>{const e=s($t,100);return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}}));const Ot=Ze&&{datetime:Ze},Wt=ke&&(null===(bt=null===(mt=null==kt?void 0:kt.segmentedSources)||void 0===mt?void 0:mt.lg[0])||void 0===bt?void 0:bt.aspectRatio),Vt=Wt&&-1!==(_t=Wt).indexOf(":")?_t.split(":"):null;var _t;const Ft=ut&&(!(null==Ge?void 0:Ge.caption)||""===(null==Ge?void 0:Ge.caption));return a.createElement(K,Object.assign({className:o("content-header",{[n]:n}),contentHeaderTheme:lt,isFullWidth:Et,isTextRight:Ee,isInset:ke,imageAlignment:De,ledeContentAlign:ze,shouldFitToViewport:!Ye,isMusicReview:Le,"data-testid":"SplitScreenContentHeaderWrapper",showHeaderDivider:tt,socialMediaPositionInMobile:nt,hideSocialIconsOnMobile:Te,hideSocialIcons:fe,shouldHeaderFitToViewport:Je,captionPosition:i,hidePublishDate:ve,mediaContentType:(null==kt?void 0:kt.contentType)||"",hasInvertedBylineLink:j,hasMargin:U,imgAspectRatioForDesktop:Vt,viewportWidth:yt,hasLedeTextAlignCenterForMobile:Ft,hasPublishDateBottomPadding:P&&(!ot||fe||Te)},P&&{hasImageBottomSpacing:ye,hideHeaderDividerInMobile:be}),a.createElement(Rt,{shouldFitToViewport:!Ye},a.createElement(Z,{contentAlign:p,textAlign:gt},a.createElement(se,{signage:ct,shouldDisplaySignage:pt}),a.createElement(re,Object.assign({},{contributors:We,contributorsPosition:Ve,rubric:$e,rubricVariation:Oe,hideContributors:ue,hideIssueDate:Se,hidePublishDate:ve,issueDate:Ae,issueDatePostfix:Re,issueLink:He,publishDate:je,publishDatePosition:Ue,hideRubric:Ce,hasInvertedBylineLink:j,themedBylineVariation:Ct,shouldRemoveBylineTopMargin:y})),a.createElement(M,{dangerouslySetInnerHTML:{__html:m},"data-testid":"ContentHeaderHed",isMusicReview:Le}),vt&&a.createElement(te,{dangerouslySetInnerHTML:{__html:Ie.markup}}),Qe&&a.createElement(N,{ledeContentAlign:ze,hasLedeTextAlignCenterForMobile:Ft}),e&&Le?a.createElement(L,{isMusicReview:Le},0===e.length&&a.createElement(I,{isSplitScreenArtistLarge:Me},Ht(l.variousArtists)),e.map(((t,i)=>a.createElement(a.Fragment,{key:i},a.createElement(X,{key:i,href:"/".concat(t.uri)},a.createElement(I,{dangerouslySetInnerHTML:{__html:t.name},isSplitScreenArtistLarge:Me})),!(i===e.length-1)&&a.createElement(k,{dangerouslySetInnerHTML:{__html:" / "},isSplitScreenArtistLarge:Me}))))):!me&&b&&a.createElement(R,{dangerouslySetInnerHTML:{__html:b}}),et&&h&&a.createElement(A,Object.assign({},h,{sizes:"66px",hasContributorImageBackground:S})),We&&!ue&&"bottom"===Ve&&a.createElement(E,Object.assign({contributors:We,bylineVariation:Ct,isCompact:!1,hasInvertedBylineLink:j},P&&{shouldRemoveBylineTopMargin:y})),!ve&&"bottom"===Ue&&a.createElement(_,Object.assign({"data-testid":"ContentHeaderPublishDate",hasPublishDateBottomPadding:P&&(!ot||fe||Te)},Ot),je),(Le||Pe)&&It&&a.createElement(ee,{"data-testid":"SplitScreenContentHeaderReleaseYear"},It),Xe&&a.createElement("div",{ref:Mt},a.createElement(x,{bookmarkTrackingType:"header",link:{label:"Save story",url:"#",network:"bookmark",behavior:"bookmark"},theme:"standard",type:"thin",isUrlBookmark:!0,isBookmarkButton:!0})),!!Pt&&!!At&&a.createElement(F,{averageRatingCount:Math.round(10*Pt)/10,brandSlug:t,hasBorderTop:!0,showReviewLink:ht,link:{label:Ht(l.ratingLinkLabel),onClick:e=>{e.preventDefault();const t=document.getElementById("reviews"),{top:i}=v(t);null==t||t.focus(),window.scrollTo(0,i-56)},url:"#reviews"},totalRatingCount:At,isRatingClickable:Ne}),wt?a.createElement(V,null,a.createElement(w,{shareData:{url:ft,title:at,text:it}})):le(z,fe,Te,we,ot,nt,G,P)),a.createElement(Y,{isMusicReview:Le},a.createElement(c,Object.assign({lede:kt,isCNEVideo:Lt},Nt)),Le&&a.createElement(q,null,a.createElement(u,{rating:Tt,isBestNewMusic:Bt,isBestNewReissue:Dt,isTrackReview:Pe})))),"belowHeader"===i&&de(Be,Ge),We&&ue&&a.createElement(E,{contributors:We,bylineVariation:ge?"Item":_e,isCompact:!1,isMusicReview:Le}),xt.length>0&&a.createElement(J,null,a.createElement(O,null,a.createElement(g,{items:xt,isMusicReview:Le}))),!me&&Le&&b&&a.createElement(J,null,a.createElement(H,{dangerouslySetInnerHTML:{__html:b}})),!wt&&z&&ot&&a.createElement(Q,{align:Fe,attributes:{shouldFadeOnMove:!0},anchorBottom:rt,anchorTop:st,fullWidthSelector:".container--full, .full-bleed-ad, .callout--feature-large"},a.createElement(ie,Object.assign({},ot,{bookmarkTrackingType:"sticky",className:"social-icons--share"}))))};he.propTypes={artists:n.array,brandSlug:n.string,bylineVariation:n.string,captionPosition:n.oneOf(["belowHeader","belowImage"]),className:n.string,contentAlign:n.oneOf(["center","left"]),contributorImage:n.shape(p.propTypes),contributors:n.shape(m.propTypes.contributors),contributorsPosition:n.oneOf(["top","bottom"]),dangerousDek:n.string,dangerousHed:n.string.isRequired,hasContributorImageBackground:n.bool,hasImageBottomSpacing:n.bool,hasInvertedBylineLink:n.bool,hasMargin:n.bool,hasNativeShareButton:n.bool,hasSplitScreenSocialShareReduceTopSpacing:n.bool,hasStickySocialIcons:n.bool,hideCaption:n.bool,hideContributors:n.bool,hideContributorTitle:n.bool,hideDangerousDek:n.bool,hideHeaderDividerInMobile:n.bool,hideIssueDate:n.bool,hidePublishDate:n.bool,hideRubric:n.bool,hideSocialIcons:n.bool,hideSocialIconsOnMobile:n.bool,imageAlignment:n.oneOf(["center","top","left","right","bottom"]),infoSliceFields:n.object,interactiveOverride:n.shape({markup:n.string,behavior:n.string}),isInset:n.bool,isMusicReview:n.bool,isRatingClickable:n.bool,isSplitScreenArtistLarge:n.bool,issueDate:n.string,issueDatePostfix:n.string,issueLink:n.string,isTextRight:n.bool,isTrackReview:n.bool,lede:n.oneOfType([n.shape(p.propTypes)]),ledeContentAlign:n.oneOf(["left","center"]),modifiedDate:n.string,musicRating:n.object,persistentAsideAlign:n.oneOf(["left","left-lead-asset"]),publishDate:n.string.isRequired,publishDatePosition:n.oneOf(["top","bottom"]),rating:n.shape(S.propTypes),rubric:n.shape(h.propTypes),rubricVariation:n.string,shouldAlignCenterWhenNoCaption:n.bool,shouldDisplaySignage:n.bool,shouldEnableNativeShareOnDesktop:n.bool,shouldFitToViewport:n.bool,shouldHeaderFitToViewport:n.bool,shouldRemoveBylineTopMargin:n.bool,showBookmarked:n.bool,showContentDivider:n.bool,showContributorImage:n.bool,showFullHeaderViewInMobile:n.bool,showHeaderDivider:n.bool,showReviewLink:n.bool,signage:n.string,socialDescription:n.string,socialIconsToHide:n.array,socialMedia:n.shape(y.propTypes),socialMediaPositionInMobile:n.oneOf(["inLeadWrapperBelowImg","inTitleBlock"]),socialTitle:n.string,stickySocialAnchorBottom:b.propTypes.anchorBottom,stickySocialAnchorTop:b.propTypes.anchorTop,textAlign:n.oneOf(["left","center"]),theme:n.oneOf(["standard","inverted","special"])},he.defaultProps={brandSlug:"",captionPosition:"belowHeader",contentAlign:"center",contributorsPosition:"bottom",hasContributorImageBackground:!1,hasInvertedBylineLink:!1,hasMargin:!1,hasStickySocialIcons:!0,hideCaption:!1,hideContributorTitle:!1,hideContributors:!1,hideDangerousDek:!1,hidePublishDate:!1,hideRubric:!1,hideSocialIcons:!1,hideSocialIconsOnMobile:!1,imageAlignment:"center",isInset:!1,isTextRight:!1,issueDatePostfix:" Issue",ledeContentAlign:"left",musicRating:{score:null},persistentAsideAlign:"left",publishDatePosition:"bottom",shouldAlignCenterWhenNoCaption:!1,shouldEnableNativeShareOnDesktop:!1,shouldFitToViewport:!0,shouldHeaderFitToViewport:!1,showBookmarked:!1,showContentDivider:!1,showContributorImage:!0,showFullHeaderViewInMobile:!1,showHeaderDivider:!0,showReviewLink:!0,socialIconsToHide:[],socialMediaPositionInMobile:"inTitleBlock",stickySocialAnchorBottom:{selector:".page",edge:"bottom"},stickySocialAnchorTop:{selector:"[data-testid='SplitScreenContentHeaderWrapper']",edge:"bottom"},textAlign:"center",theme:"standard"},he.displayName="SplitScreenContentHeader",e.exports=he},72149:(e,t,i)=>{e.exports=i(68660)},3650:(e,t,i)=>{const o=i(36319);t.Z=(0,o.defineMessages)({ratingLinkLabel:{id:"SplitScreenContentHeader.RatingLinkLabel",defaultMessage:"Read Reviews",description:"SplitScreenContentHeader component Rating Link Label"},variousArtists:{id:"SplitScreenContentHeader.VariousArtists",defaultMessage:"Various Artists",description:"SplitScreenContentHeader component various artists text"}})},11850:e=>{const t={genre:"Genre:",label:"Label:",reviewDate:"Reviewed:"};e.exports={formatInfoSliceItems:e=>{if(!e)return[];const i=[];return Object.keys(e).forEach((o=>{e[o]&&e[o].length&&t[o]&&i.push({key:t[o],value:e[o]})})),i}}},5999:(e,t,i)=>{const o=i(45697),n=i(67294),{InfoSliceValue:a,InfoSliceKey:r,InfoSliceItem:s,InfoSliceListItem:l,InfoSliceList:d,InfoSliceWrapper:c}=i(93892),{trackComponent:p}=i(40199),h=({className:e,items:t,isMusicReview:i})=>(n.useEffect((()=>{p("InfoSlice")}),[]),t&&0!==t.length?n.createElement(c,{className:e},n.createElement(d,{isMusicReview:i},t.map((e=>{const{key:t,value:i}=e;return t&&i?n.createElement(l,{key:t.toString().toLowerCase()},n.createElement(s,null,n.createElement(r,null,t),n.createElement(a,null,i))):null})))):null);h.propTypes={className:o.string,isMusicReview:o.bool,items:o.arrayOf(o.shape({key:o.string,value:o.string}))},h.defaultProps={isMusicReview:!1},e.exports=h},28891:(e,t,i)=>{e.exports=i(5999)},93892:(e,t,i)=>{const o=i(51117).default,{calculateSpacing:n,getColorStyles:a}=i(79720),{BaseText:r}=i(74327),{BREAKPOINTS:s}=i(85326),{maxThresholds:l}=i(28657),d=o(r).withConfig({displayName:"InfoSliceValue"})`
  display: table-cell;
  vertical-align: top;
`;d.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const c=o(r).withConfig({displayName:"InfoSliceKey"})`
  display: table-cell;
  padding-right: ${n(1)};
  vertical-align: top;
`;c.defaultProps={colorToken:"colors.consumption.body.standard.subhed",typeIdentity:"typography.definitions.globalEditorial.context-title"};const p=o.div.withConfig({displayName:"InfoSliceItem"})`
  display: table;
  align-items: center;
  padding: ${n(.5)} 0;
`,h=o.li.withConfig({displayName:"InfoSliceListItem"})`
  @media (max-width: ${l.md}px) {
    margin: 0 auto;
  }
  @media (min-width: ${s.md}) {
    margin-right: ${n(3)};

    :last-child {
      margin-right: ${n(0)};
    }
  }
`,g=o.ul.withConfig({displayName:"InfoSliceList"})`
  display: flex;
  flex-direction: column;
  margin: 0;
  border-width: 2px 0 0;
  border-style: solid;
  ${({theme:e})=>a(e,"border-color","colors.consumption.body.standard.divider")};
  padding: ${n(1.5)} 0;
  list-style: none;

  @media (min-width: ${s.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    ${({isMusicReview:e})=>e&&"\n    justify-content: center;\n    border-width: 0 0 0;"}
  }
  ${({isMusicReview:e})=>e&&"\n  justify-content: center;\n  border-width: 0 0 0;"}
`,u=o.div.withConfig({displayName:"InfoSliceWrapper"})``;e.exports={InfoSliceValue:d,InfoSliceKey:c,InfoSliceItem:p,InfoSliceListItem:h,InfoSliceList:g,InfoSliceWrapper:u}},80786:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BestNewMusicArrows=void 0;const o=i(67294),n=i(45697),{SvgWrapper:a,SvgStyle:r}=i(92545);t.BestNewMusicArrows=e=>o.createElement(a,{theme:e.theme,isBestBoth:e.isBestBoth,isBest:e.isBest},o.createElement(r,{x:"0px",y:"0px",viewBox:"0 0 80 40"},o.createElement("g",null,o.createElement("polyline",{points:"25.4,14.7 33.9,14.7 33.9,39.8 46.3,39.8 46.3,14.7 54.8,14.7 40.1,0 25.4,14.7   "}),o.createElement("polyline",{points:"50.6,40 80,40 65.2,25.4 50.6,40    "}),o.createElement("polyline",{points:"0,40 29.4,40 14.7,25.4 0,40    "})))),t.BestNewMusicArrows.propTypes={isBest:n.bool,isBestBoth:n.bool,theme:n.string}},52343:(e,t,i)=>{const o=i(67294),{useIntl:n}=i(36319),a=i(45697),{BestNewMusicArrows:r}=i(80786),s=i(86865).Z,l=i(17843),{trackComponent:d}=i(40199),{BestNewMusicText:c,Rating:p,ScoreBoxWrapper:h,ScoreCircle:g}=i(92545),u=({rating:e,isBestNewMusic:t,isBestNewReissue:i,palette:a,isTrackReview:u})=>{o.useEffect((()=>{d("ScoreBox")}),[]);const{formatMessage:m}=n(),b=u&&t;if(u&&!t)return null;const y=e<10?Number(e).toFixed(1):e,S=t||i,v=t&&i;return o.createElement(l,{palette:a},o.createElement(h,null,S&&o.createElement(r,{isBestBoth:v,isBest:S}),!b&&o.createElement(g,{isBest:S,isBestBoth:v},o.createElement(p,{isBest:S,isBestBoth:v},y)),S&&o.createElement(c,{isBestBoth:v,isBest:S},!b&&t&&o.createElement("div",null," ",m(s.BestNewMusic)," "),!b&&i&&o.createElement("div",null," ",m(s.BestNewReissue)),b&&o.createElement("div",null," ",m(s.BestNewTrack)))))};u.propTypes={isBestNewMusic:a.bool,isBestNewReissue:a.bool,isTrackReview:a.bool,palette:a.oneOf(["standard","inverted"]),rating:a.number},u.defaultProps={isBestNewMusic:!1,isBestNewReissue:!1,palette:"standard"},e.exports=u},90227:(e,t,i)=>{e.exports=i(52343)},92545:(e,t,i)=>{const{default:o}=i(51117),{BaseText:n}=i(74327),{calculateSpacing:a,getColorToken:r,getTypographyStyles:s}=i(79720),l=o.div.withConfig({displayName:"ScoreBoxWrapper"})`
  position: relative;
  width: 130px;
`,d=o.div.withConfig({displayName:"ScoreCircle"})`
  position: relative;
  margin-bottom: ${a(2)};
  border: 7px solid
    ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  border-radius: 50%;
  padding-bottom: ${a(2)};
  width: 134px;
  height: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,c=o(n).withConfig({displayName:"Rating"})`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  ${s("typography.definitions.globalEditorial.numerical-large")};
`,p=o(n).withConfig({displayName:"BestNewMusicText"})`
  ${s("typography.definitions.globalEditorial.context-primary")};
  width: 134px;
  text-align: center;
  color: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
`,h=o.svg.withConfig({displayName:"SvgStyle"})`
  margin-bottom: ${a(2,"px")};
  margin-left: ${a(3,"px")};
  width: 86px;
  height: 26px;
`,g=o.div.withConfig({displayName:"SvgWrapper"})`
  svg {
    fill: ${({isBest:e})=>e?({theme:e})=>"inverted"===e.palette?r("colors.consumption.lead.inverted.accent"):r("colors.consumption.lead.standard.accent"):r("colors.consumption.lead.standard.context-signature")};
  }
  line-height: 0em;
`;e.exports={BestNewMusicText:p,Rating:c,ScoreBoxWrapper:l,ScoreCircle:d,SvgStyle:h,SvgWrapper:g}},86865:(e,t,i)=>{const o=i(36319);t.Z=(0,o.defineMessages)({BestNewMusic:{id:"ScoreBox.BestNewMusic",defaultMessage:"Best New Music",description:"Best New Music"},BestNewReissue:{id:"ScoreBox.BestNewReissue",defaultMessage:"Best New Reissue",description:"Best New Reissue"},BestNewTrack:{id:"ScoreBox.BestNewTrack",defaultMessage:"Best New Track",description:"Best New Track"}})},28604:(e,t,i)=>{const o=i(67294),n=i(83253),a=i(94184),{createGlobalStyle:r}=i(51117),s=i(74691),l=i(23279),d=i(30998),c=i(59704),p=i(58509),{useIntl:h}=i(36319),g=i(51889).Z,u=i(99815),m=i(70302),b=i(81768),{trackComponent:y}=i(40199),{LightboxCloseButtonIcon:S,LightboxSwipe:v,LightboxWrapper:C,LightboxSlidesWrapper:w}=i(988),{getColorToken:f,getZIndex:T}=i(79720);let B;const D=r`
  .lightbox {
    height: 100vh;
  }

  .body__lightbox--open {
    overflow: hidden;
  }

  .lightbox__overlay {
    position: fixed;
    top: 0;
    left: 0;
    transition: opacity 0.2s;
    opacity: 0;
    z-index: ${T("hyperstitialLayer")};
    background-color: ${({theme:e})=>f(e,"colors.consumption.lead.standard.background")};

    &.lightbox__overlay--open {
      opacity: 1;

      &.lightbox__overlay--closing {
        opacity: 0;
      }
    }
  }

  .listicle-variation {
    overflow-y: scroll;
  }
`;e.exports={withLightbox:(e,t,i,r,f=!1,T="Default")=>x=>{const[I,k]=o.useState(-1),{formatMessage:L}=h(),E=e=>i&&k(s(I+e,0,t.length-1)),P=I>-1,A=e=>{var t;"swipeClose"!==e&&("IMG"===(t=e.target).tagName||"SPAN"===t.tagName)||k(void 0)},R={transform:`translate(${"listicle"===r?"0":-100*I/t.length}%)`},H=()=>{B&&(B.style.height=`${window.innerHeight}px`)};o.useEffect((()=>{y("LightBox",T)})),o.useEffect((()=>{const e=l(H,50);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}})),o.useEffect((()=>{!P&&B&&p.enableBodyScroll(B)}),[P]);const N=(e,t)=>f?{}:t.reduce(((t,i)=>Object.assign(Object.assign({},t),{[i]:t=>A(e||t)})),{});return o.createElement(C,null,o.createElement(u.Provider,{value:{expandHandler:e=>k(d(t,{id:e})),isInSlides:e=>c(t,{id:e})}},o.createElement(e,Object.assign({},x))),o.createElement(n,{className:a("lightbox "+(r?`${r}-variation`:"")),overlayClassName:{base:a("lightbox__overlay"),afterOpen:"lightbox__overlay--open",beforeClose:"lightbox__overlay--closing"},bodyOpenClassName:"body__lightbox--open",isOpen:P,onAfterOpen:()=>{p.disableBodyScroll(B),H()},onRequestClose:()=>{k(void 0)},contentRef:e=>{e&&(B=e)},closeTimeoutMS:200,contentLabel:L(g.contentLabel)},o.createElement(S,{ButtonIcon:b,isIconButton:!0,className:r?`${r}-variation-close`:"",dataAttrs:{"data-action":"close"},label:L(g.closeButtonIconLabel),onClickHandler:A,role:"button",ariaLabel:L(g.closeButtonIconLabel)}),o.createElement(v,Object.assign({},N("swipeClose",["onSwipeDown","onSwipeUp"]),{onSwipeRight:()=>E(-1),onSwipeLeft:()=>E(1),shouldPreventDefaultEvent:!0}),o.createElement(w,Object.assign({className:r?`${r}-variation-slide-wrapper`:"",style:R},N("",["onMouseDown","onTouchEnd"])),t.map((e=>o.createElement(m,Object.assign({},e,{className:r?`${r}-variation-slide`:"",key:e.id})))))),o.createElement(D,null)))}}},70302:function(e,t,i){var o=this&&this.__rest||function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(i[o[n]]=e[o[n]])}return i};const n=i(45697),a=i(67294),r=i(31954),s=i(98288),l=i(63030),{LightboxSlideWrapper:d,LightboxSlideTopSpacer:c,LightboxSlideImageCaptionOuter:p,LightboxSlideCaptionContainer:h}=i(988),g=e=>{var{caption:t,className:i,credit:n,dangerousCredit:l,dangerousCaption:g}=e,u=o(e,["caption","className","credit","dangerousCredit","dangerousCaption"]);const[m,b]=a.useState("landscape");return a.createElement(d,{className:i,screenOrientation:m},a.createElement(c,null),a.createElement(p,null,a.createElement(s,Object.assign({},u,{contentType:"photo",onAssetLoaded:({width:e,height:t})=>{e<t?b("portrait"):e>t?b("landscape"):e===t&&b("square")}})),a.createElement(h,null,a.createElement(r,{dangerousCaptionText:t||g,dangerousCredit:n||l,hasLinebreak:"portrait"===m}))))};g.propTypes=Object.assign(Object.assign({},l.propTypes),{caption:n.string,credit:n.string,dangerousCaption:n.string,dangerousCredit:n.string}),e.exports=g},92267:(e,t,i)=>{e.exports=i(28604)},988:(e,t,i)=>{const o=i(51117).default,n=i(7279),{CaptionWrapper:a,CaptionText:r}=i(5481),{calculateSpacing:s,getColorToken:l,getLinkStyles:d}=i(79720),c=i(89058),{BREAKPOINTS:p}=i(85326),{ResponsiveImageContainer:h}=i(7230),g=o.div.withConfig({displayName:"LightboxWrapper"})`
  grid-column-start: main;
`,u=o(c).withConfig({displayName:"LightboxSwipe"})`
  display: flex;
  width: 100%;
  height: 100%;
`,m=o(n.Utility).withConfig({displayName:"LightboxCloseButtonIcon"})`
  position: fixed;
  top: ${s(.5)};
  right: ${s(.5)};
  z-index: 1;
  cursor: pointer;
  padding: 8px;
  line-height: 0;

  &.listicle-variation-close {
    top: 1px;
  }

  &,
  &:hover {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  &:focus {
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  .icon {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.dark")};
  }

  .icon:hover {
    fill: ${({theme:e})=>l(e,"colors.interactive.base.brand-primary")};
    border: 1px solid
      ${({theme:e})=>l(e,"colors.interactive.base.white")};
  }

  @media (min-width: ${p.md}) {
    top: ${s(2)};
    right: ${s(2)};
  }
`,b=o.div.withConfig({displayName:"LightboxSlidesWrapper"})`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  transition: transform 0.4s ease-in-out;
  height: 100%;

  &.listicle-variation-slide-wrapper {
    display: block;
  }
`,y=o.div.withConfig({displayName:"LightboxSlideTopSpacer"})``,S=o.div.withConfig({displayName:"LightboxSlideImageCaptionOuter"})``,v=o.div.withConfig({displayName:"LightboxSlideCaptionContainer"})``,C=o.div.withConfig({displayName:"LightboxSlideWrapper"})`
  background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
  width: 100vw;

  &.listicle-variation-slide {
    background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    padding: ${s(3)} ${s(9)};

    ${a} {
      margin-bottom: 0;
      background-color: ${({theme:e})=>l(e,"colors.interactive.base.white")};
    }
  }

  ${a} {
    background-color: ${({theme:e})=>l(e,"colors.consumption.lead.standard.background")};
    text-align: initial;

    ${r} {
      ${({theme:e})=>d(e,"colors.consumption.lead.standard.description",null)}

      &:hover {
        text-decoration: none;
      }
    }
  }

  ${({screenOrientation:e})=>"landscape"===e||"portrait"===e||"square"===e?`\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: auto;\n\n    ${S} {\n      display: contents;\n    }\n\n    .responsive-image {\n      display: flex;\n      flex-direction: column;\n\n      ${h} {\n        max-height: 85vh;\n        object-fit: contain;\n      }\n    }\n\n    ${v} {\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n    }\n\n    ${a} {\n      margin: ${s(2)} ${s(2)} ${s(5)};\n    }\n\n    @media (min-width: ${p.md}) {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: ${s(4)};\n      height: initial;\n\n      ${y} {\n        display: none;\n      }\n\n      ${S} {\n        display: block;\n      }\n\n      .responsive-asset {\n        display: table-cell;\n      }\n\n      ${v} {\n        display: table-caption;\n        caption-side: bottom;\n      }\n\n      ${a} {\n        margin: 0;\n        margin-top: ${s(1)};\n      }\n    }\n\n    ${"portrait"===e?`\n      @media (min-width: ${p.lg}) {\n        display: flex;\n        flex-direction: row;\n        height: 100%;\n\n        ${y} {\n          display: none;\n        }\n\n        ${S} {\n          display: contents;\n        }\n\n        .responsive-asset {\n          display: flex;\n          height: 100%;\n\n          .responsive-image {\n            height: 100%;\n\n            ${h} {\n              height: 100%;\n              max-height: initial;\n            }\n          }\n        }\n\n        ${v} {\n          display: flex;\n          flex-direction: column;\n          align-self: flex-end;\n        }\n\n        ${a} {\n          margin: 0;\n          margin-bottom: ${s(6)};\n          margin-left: ${s(2)};\n          max-width: 180px;\n        }\n      }\n    `:""}\n  `:""}
`;e.exports={LightboxSwipe:u,LightboxCloseButtonIcon:m,LightboxSlideImageCaptionOuter:S,LightboxSlideCaptionContainer:v,LightboxWrapper:g,LightboxSlideTopSpacer:y,LightboxSlidesWrapper:b,LightboxSlideWrapper:C}},51889:(e,t,i)=>{const o=i(36319);t.Z=(0,o.defineMessages)({contentLabel:{id:"Lightbox.ContentLabel",defaultMessage:"Photo Gallery",description:"Lightbox component content label"},closeButtonIconLabel:{id:"Lightbox.CloseButtonIconLabel",defaultMessage:"Close Lightbox",description:"Lightbox component close button icon label"}})},20886:(e,t,i)=>{const{asConfiguredComponent:o}=i(36380),n=i(45495);e.exports=o(n,"BasePage")},83074:(e,t,i)=>{const o=i(36319);t.Z=(0,o.defineMessages)({relatedArticleHed:{id:"PodcastDetailedPage.relatedArticleHed",defaultMessage:"Related Articles",description:"Default section hed text for PodcastDetailedPage page summary river"},contextualHeader:{id:"PodcastDetailedPage.contextualHeader",defaultMessage:"You Might Like This",description:"Contextual Header for podcast recirc unit"},primaryCTALabel:{id:"PodcastDetailedPage.primaryCTALabel",defaultMessage:"Start Listening Now",description:"Default CTA text for Start Listening Now button"}})},7595:(e,t,i)=>{const o=i(18721),n=i(27361),a=e=>{const t=n(e,"gradient-style"),i=n(e,"color-stops");let o=n(e,"angle");"radial"===t&&(o=null);const a=((e,t,i=null)=>null===i?`${e}-gradient(${t})`:`${e}-gradient(${i}, ${t})`)(t,i,o);return`background: ${a}; position: sticky;`},r=e=>{const t=n(e,"url"),i=n(e,"repeat"),o=n(e,"color"),a=n(e,"attachment"),r=n(e,"size");return((e,t="no-repeat",i="center",o="cover",n="scroll",a="transparent")=>{let r,s="";if(null!==e&&(r=e),s=`background-image:${r};\n      background-attachment:${n};\n      background-color:${a};\n      background-repeat:${t};\n      background-position:${i};`,"string"==typeof o)s+=`background-size:${o};`;else{const e=[];o.forEach((t=>{e.push(t)})),s+=`background-size:${o.toString()};`}return s})(t,i,n(e,"position"),r,a,o)};e.exports={getPattern:(e,t)=>{let i;if(!e||0===Object.keys(e).length||!t)return"background: none;";if(o(e,"container-styles")){const d=e["container-styles"];if(!d[t])return"background: none;";i=d[t];const c=o(i,"pattern")?i.pattern:null;if(c&&c.length){let e="";return c.length>=2?(c.forEach(((t,i)=>{let s=i;if(o(t,"gradient"))e+=a(n(t,"gradient"));else if(o(t,"image")){let i="";n(t,"image").size&&(i=n(t,"url")),i.size?e+=`'url(${i})'`:s=c.length,r(n(t,"image"))}else if(o(t,"solid")){const i=n(t,"solid");i&&(e+=n(i,"color"))}s!==c.length-1&&(e+=",")})),e.toString()):(s=c[0],o(s,"gradient")?a(n(s,"gradient")):o(s,"image")?r(n(s,"image")):o(s,"solid")?(l=n(s,"solid"),`background-color:${n(l,"color")};`):"background: none;")}}var s,l;return"background: none;"}}},84885:e=>{e.exports=e=>{if(!window)return{};const{bottom:t,left:i,right:o,top:n}=e.getBoundingClientRect(),a=e.currentStyle||window.getComputedStyle(e);return{bottom:t+parseFloat(a.marginBottom),left:i-parseFloat(a.marginLeft),right:o+parseFloat(a.marginRight),top:n-parseFloat(a.marginTop)}}}}]);

}
/*
     FILE ARCHIVED ON 10:02:08 Oct 08, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:58:17 Sep 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.491
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 109.915
  LoadShardBlock: 227.413 (3)
  PetaboxLoader3.datanode: 389.491 (5)
  load_resource: 440.831 (2)
  PetaboxLoader3.resolve: 242.968
*/