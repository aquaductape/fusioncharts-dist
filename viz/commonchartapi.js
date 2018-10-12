import BaseChart from'./basechart';import canvasFactory from'../_internal/factories/canvas';import{addDep,getDep}from'../_internal/dependency-manager';import Caption from'../_internal/components/caption';import SubCaption from'../_internal/components/sub-caption';import Background from'../_internal/components/background';import ColorManager from'../_internal/color-utils/colormanager';import NumberFormatter from'../_internal/components/numberformatter';import SymbolWithContext from'../_internal/tool-box/symbolWithContext';import{raiseEventGroup}from'../_internal/misc/event-api';import commonAnimation from'../_internal/animation-rules/common-animation';import{chartPaletteStr,getLinkAction,pluckNumber,pluck,BLANKSTRING,POSITION_BOTTOM,UNDEF,pluckFontSize,PXSTRING,setLineHeight,getFirstValue,pInt,getDashStyle,DASH_DEF,extend2,isIE,preDefStr,ROUND,POINTER,HAND,getMouseCoordinate,POSITION_MIDDLE,componentFactory,hasSVG}from'../_internal/lib/lib';import{convertColor}from'../_internal/lib/lib-graphics';import{parseConfiguration}from'../_internal/lib/lib-attr';import domEvtHandler from'../_internal/dom/dom-event';import Toolbox from'../_internal/tool-box/toolbox';let Raphael=getDep('redraphael','plugin'),isVML='VML'===Raphael.type,TRACKER_FILL='rgba(255,0,0,'+(isIE?.002:1e-6)+')',mathMax=Math.max,mathMin=Math.min,mathRound=Math.round,eventMap={datalabelclick:!0,connectorclick:!0,categoryclick:!0,processclick:!0,milestoneclick:!0,labelclick:!0,dataplotclick:!0},SEVENTYSTRING=preDefStr.SEVENTYSTRING,AUTO=preDefStr.AUTOSTRING,BOLD='bold',NORMAL='normal',POSITION_RIGHT='right',supportsPointer='onpointerover'in window.document,POSITION_START='start',POSITION_END='end',createGroup=function(e,t,a){var n=a.getFromEnv('animationManager');return n.setAnimation({el:'group',attr:e,container:t,state:'appearing',component:a,label:'group'})},_registerMouseDown=function(t){let e=t.data.config;e._containerMouseState='mousedown',e._mdx1=t.clientX===UNDEF?t.changedTouches&&t.changedTouches[0].clientX:t.clientX,e.mdy1=t.clientY===UNDEF?t.changedTouches&&t.changedTouches[0].clientY:t.clientY,'touchstart'===t.type&&(e._touchStartedAt=new Date().getTime())},_registerMouseMove=function(t){var e=Math.abs;let a=t.data.config,n=t.clientX===UNDEF?t.changedTouches&&t.changedTouches[0].clientX:t.clientX,o=t.clientY===UNDEF?t.changedTouches&&t.changedTouches[0].clientY:t.clientY;(2.5<=e(a._mdx1-n)||2.5<=e(a.mdy1-o))&&(t.data.config._containerMouseState=void 0)},_onContainerClickIOS=function(t){500>new Date().getTime()-t.data.config._touchStartedAt&&setTimeout(function(){onContainerClick(t)})},onContainerClick=function(t){var e,a=t.data,n=a.getFromEnv('chartInstance'),o=t.originalEvent,i=a.config,r=getMouseCoordinate(a.getFromEnv('chart-container'),o,a);n.ref&&'mousemove'!==i._containerMouseState&&(e=extend2({height:n.args.height,width:n.args.width,pixelHeight:a.getFromEnv('chartWidth'),pixelWidth:a.getFromEnv('chartHeight'),id:n.args.id,renderer:n.args.renderer,container:n.options.containerElement},r),a.fireChartInstanceEvent('chartclick',e),i.link&&(!i.hotElemClicked||i.clickURLOverridesPlotLinks)&&a.getFromEnv('linkClickFN').call({link:i.link}),i.hotElemClicked=!1)},chartHoverManager=function(t){var e=t.type,a=t.data,n=a.getFromEnv('eventListeners');('mouseover'===e||'touchstart'===e)&&!1===a.config.mouseStateIn&&(a.config.mouseStateIn=!0,CommonAPI.onContainerRollOver(t),n.push(domEvtHandler.listen(isVML?document:window,'mouseover',CommonAPI.winMouseHover,a)))};function _createToolBox(){this.getFromEnv('chartMenuTools').reset(this.getFromEnv('toolbox'),this);var e,t,a,n,o,i,r,l,s,g,c,d,h,p=this,m=p.getFromEnv('chartMenuTools'),u=p.getFromEnv('chartInstance').id,v=m.get,C=m.set,f=this.components,b=p.config,w=p.getChildren('chartMenuBar'),E=p.getChildren('actionBar'),M=b.printOption.enabled,F=p.config.realTimeConfig||{};w&&w.drawn||E&&E.drawn||(componentFactory(p,Toolbox,'tb',1,[{graphics:p.graphics||(p.graphics={}),chart:p,components:f}]),e=p.getChildren('tb')[0],d=e.getICount(),p.addToEnv('toolbox',e),!p.getFromEnv('toolBoxAPI')&&p.addToEnv('toolBoxAPI',e.getAPIInstances(e.config.ALIGNMENT_HORIZONTAL)),i=p.getFromEnv('toolBoxAPI'),s=i.SymbolWithContext,r=i.SymbolStore,l=i.ComponentGroup,g=i.Toolbar,e.idCount=e.idCount||0,e.pId=d,a=e.getDefaultConfiguration(),r.register('ContextIcon',function(e,t,a){var n=e,o=t,i=2*a,r=mathRound(i/4),l=.7*mathRound(i/2),s=n-l,g=n+l,c=o+r,d=o-r;return['M',s,o,'L',g,o,'M',s,c,'L',g,c,'M',s,d,'L',g,d]}),h=new s,h.configure('ContextIcon',e.idCount++,d,u),t=h,n=t.getListRefernce(),p.addToEnv('chartMenuList',n),M&&C([{Print:{handler:function(){p.getFromEnv('chartInstance').print()},action:'click'}}]),p._setRTmenu&&p._setRTmenu(F.showRTmenuItem,F.useMessageLog),n.appendAsList(v()),o=new l,o.configure(e.idCount++,d,u),o.setConfiguaration({buttons:a,group:{fill:TRACKER_FILL,borderColor:TRACKER_FILL}}),o.addSymbol(t),'t'===o.config.btnConfig.vAlign?(c=new g,w=p.attachChild(c,'chartMenuBar',!1),c.configure(e.idCount++,e.pId,u),w.addComponent(o)):(c=new g,w=p.attachChild(c,'actionBar',!1),c.configure(e.idCount++,e.pId,u),w.addComponent(o)))}function _drawDataset(){var e=this,t=e.getChildren('canvas')[0];t._mapChildren(e=>{e.syncDraw()})}function configurer(e){var t=this;t.config.skipConfigureIteration={},t.parseChartAttr(e),t.createComponent(e),t._createToolBox(),t.setTooltipStyle(),t.configureChildren()}addDep({name:'commonAnimation',type:'animationRule',extension:commonAnimation});class CommonAPI extends BaseChart{static getName(){return'CommonAPI'}plotEventHandler(e,t={},a,n){var o,i,r=this,l=t.type,s=getMouseCoordinate(r.getFromEnv('chart-container'),t,r),g=e&&e.data('eventArgs')||n,c=extend2(s,g),d=r.fireGroupEvent,h=e&&e.data('groupId'),p=function(){t.FusionChartsPreventEvent=!0};'index'in c&&!('dataIndex'in c)&&(c.dataIndex=c.index),'value'in c&&!('dataValue'in c)&&(c.dataValue=c.value),a=pluck(a,'dataplotclick').toLowerCase(),'dataplotrollover'===a?(t.FusionChartsPreventEvent=!1,d?raiseEventGroup(h,a,c,r.getFromEnv('chartInstance'),UNDEF,UNDEF,p):r.fireChartInstanceEvent(a,c,UNDEF,UNDEF,p)):d&&!eventMap[a]?raiseEventGroup(h,a,c,r.getFromEnv('chartInstance')):r.fireChartInstanceEvent(a,c),('fc-click'===l||'click'===l||'mouseup'===l||'touchend'===l)&&/click/i.test(a)&&(o=r.getFromEnv(),i=o&&o.linkClickFN,c.link&&i&&i.call({link:c.link},!0))}constructor(){super(),this.addToEnv('stringConstants',{COMPONENT:'component',CANVAS:'canvas',CAPTION:'caption'}),this.addToEnv('chartMenuTools',CommonAPI.chartMenuTools()),this.addToEnv('getMouseCoordinate',getMouseCoordinate),this._drawDataset=_drawDataset,this.config.mouseStateIn=!1,this.registerFactory('canvas',canvasFactory),this._firstConfigure=!0}getName(){return'Cartesian'}preConfigure(e){var t=this.getFromEnv('number-formatter');this.addToEnv('chart-attrib',e.chart),t?t.configure():this.addToEnv('number-formatter',new NumberFormatter(this)),super.preConfigure(e)}postConfigure(e){super.postConfigure(e),this._firstConfigure=!1}setDefaults(){super.setDefaults();let e=this.getFromEnv('number-formatter');e&&e.setDefaults&&e.setDefaults()}getType(){return'chartAPI'}parseChartAttr(e){var t=Math.abs;let a,n,o,i,r,l,s,g,c,d,h,p,m,u,v=this,C=e||v.getFromEnv('dataSource'),f=v.config.is3D,b=f?chartPaletteStr.chart3D:chartPaletteStr.chart2D,w=v.isBar,E=v.getFromEnv('color-manager');E||(E=new ColorManager(v),v.addToEnv('color-manager',E)),C.chart=C.chart||C.graph||C.map||{},delete C.map,delete C.graph,a=C.chart,a||(a=C.chart={}),n=v.config||(v.config={}),parseConfiguration(a,n,{},{showvalues:!0,crosslinecolor:!0,drawcrosslineontop:!0,crosslinealpha:!0,drawcrossline:!0}),n.showValues=pluckNumber(a.showvalues,n.showvalues),n.viewPortConfig={scaleY:1,scaleX:1,x:0,y:0},f&&(w?(n.xDepth=5,n.yDepth=5):(n.xDepth=10,n.yDepth=10),n.showCanvasBase=u=!!pluckNumber(a.showcanvasbase,1),n.canvasBasePadding=pluckNumber(a.canvasbasepadding,2),n.canvasBaseDepth=u?pluckNumber(a.canvasbasedepth,10):0,n.canvasBgDepth=pluckNumber(a.canvasbgdepth,3)),E&&E.configure(),n.placeAxisLabelsOnTop=pluckNumber(a.placexaxislabelsontop,0),n.enableAnimation=pluckNumber(a.animation,a.defaultanimation,1),n.showToolTip=pluckNumber(a.showtooltip,1),n.printOption={enabled:pluckNumber(a.printshowbutton,a.showprintmenuitem,0)},n.drawCrossLineOnTop=pluckNumber(a.drawcrosslineontop,1),s=n.style={},v.addToEnv('style',s),n.textDirection='1'===a.hasrtltext?'rtl':BLANKSTRING,s.inCanfontFamily=o=pluck(a.basefont,'Verdana,sans'),s.inCanfontSize=i=pluckFontSize(a.basefontsize,10),s.inCancolor=r=pluck(a.basefontcolor,E.getColor(b.baseFontColor)),s.outCanfontFamily=pluck(a.outcnvbasefont,o),s.fontSize=l=pluckFontSize(a.outcnvbasefontsize,i),s.outCanfontSize=l+PXSTRING,s.outCancolor=pluck(a.outcnvbasefontcolor,r).replace(/^#? ([a-f0-9]+)/ig,'#$1'),s.baseFontSize=i,s.inCanfontSize=i+PXSTRING,s.inCancolor=r.replace(/^#? ([a-f0-9]+)/ig,'#$1'),s.inCanvasStyle=d={fontFamily:o,fontSize:i,color:r},s.inCanLineHeight=h=setLineHeight(d),m=getFirstValue(a.valuebordercolor,BLANKSTRING),m=m?convertColor(m,pluckNumber(a.valueborderalpha,a.valuealpha,100)):BLANKSTRING,n.reverseXAxis=v.config.allowreversexaxis&&pluckNumber(a.reversexaxis,0),n.showBorder=pluckNumber(a.showborder,f?0:1),n.borderWidth=mathMax(n.showBorder?pluckNumber(a.borderthickness,1):0,0),n.useplotgradientcolor=pluckNumber(a.plotgradientcolor,n.useplotgradientcolor,0),n.valuefontbold=pluckNumber(a.valuefontbold,n.valuefontbold),n.dataLabelStyle=p={fontFamily:pluck(a.valuefont,o),fontSize:pluck(a.valuefontsize,pInt(i,10))+PXSTRING,lineHeight:h,color:convertColor(pluck(a.valuefontcolor,r),pluckNumber(a.valuefontalpha,a.valuealpha,100)),fontWeight:n.valuefontbold?BOLD:NORMAL,fontStyle:pluckNumber(a.valuefontitalic)?'italic':NORMAL,border:m||a.valuebgcolor?pluckNumber(a.valueborderthickness,1)+'px solid':BLANKSTRING,borderColor:m,borderThickness:pluckNumber(a.valueborderthickness,1),borderPadding:pluckNumber(a.valueborderpadding,2),borderRadius:pluckNumber(a.valueborderradius,0),backgroundColor:a.valuebgcolor?convertColor(a.valuebgcolor,pluckNumber(a.valuebgalpha,a.valuealpha,100)):BLANKSTRING,borderDash:pluckNumber(a.valueborderdashed,0)?getDashStyle(pluckNumber(a.valueborderdashlen,4),pluckNumber(a.valueborderdashgap,2)):DASH_DEF},setLineHeight(p),n.legendposition=pluck(a.legendposition,POSITION_BOTTOM),n.alignLegendWithCanvas=pluckNumber(a.alignlegendwithcanvas,1),n.origMarginTop=pluckNumber(a.charttopmargin,v.chartTopMargin,15),n.origMarginLeft=pluckNumber(a.chartleftmargin,v.chartLeftMargin,15),n.origMarginBottom=pluckNumber(a.chartbottommargin,v.chartBottomMargin,15),n.origMarginRight=pluckNumber(a.chartrightmargin,v.chartRightMargin,15),n.origCanvasLeftMargin=pluckNumber(a.canvasleftmargin,0),n.origCanvasRightMargin=pluckNumber(a.canvasrightmargin,0),n.origCanvasTopMargin=pluckNumber(a.canvastopmargin,0),n.origCanvasBottomMargin=pluckNumber(a.canvasbottommargin,0),n.minChartWidthPercent=pluckNumber(a.minchartwidth,v.minChartWidth,50)/100,n.minChartHeightPercent=pluckNumber(a.minchartheight,v.minChartHeight,50)/100,n.minCanvasWidthPercent=pluckNumber(a.mincanvaswidth,v.minCanvasWidth,60)/100,n.minCanvasHeightPercent=pluckNumber(a.mincanvasheight,v.minCanvasHeight,30)/100,g=pluck(a.zeroplanecolor,a.divlinecolor,E.getColor(b.divLineColor)),c=pluck(a.zeroplanealpha,a.divlinealpha,E.getColor('divLineAlpha')),n.zeroPlaneColor=convertColor(g,c),n.zeroPlaneBorderColor=convertColor(pluck(a.zeroplanebordercolor,g),pluckNumber(a.zeroplaneshowborder,1)?c:0),n.zeroPlaneShowBorder=pluckNumber(a.zeroplaneshowborder,1),n.realtimeEnabled=pluckNumber(a.realtimeenabled,v.isRealTime),n.showLegend=pluckNumber(a.showlegend,v.showLegend,1),n.link=a.clickurl,n.transposeAxis=pluckNumber(v.transposeAxis,a.transposeaxis,0),n.useEllipsesWhenOverflow=pluckNumber(a.useellipseswhenoverflow,a.useellipsewhenoverflow,1),n.drawTrendRegion=pluckNumber(a.drawcrossline,0),n.plotcolorintooltip=pluckNumber(a.plotcolorintooltip,v.config.singleseries?0:1),n.plotbinsize=mathMin(pluckNumber(a.plotbinsize,v.plotbinsize,.5),1),n.labelbinsize=mathMin(pluckNumber(a.labelbinsize,1),1),n.labelbinsize=n.plotbinsize>n.labelbinsize?n.plotbinsize:n.labelbinsize,n.enableMouseOutEvent=pluckNumber(a.enablemouseoutevent,v.enableMouseOutEvent,1),n.plotSpacePercent=Math.max(pluckNumber(a.plotspacepercent,v.plotSpacePercent),0),n.maxColWidth=t(pluckNumber(a.maxcolwidth,50)),n.maxBarHeight=t(pluckNumber(a.maxbarheight,50)),n.overlapColumns=pluckNumber(a.overlapcolumns,a.overlapbars,n.is3D?0:1),n.plotPaddingPercent=a.plotpaddingpercent,n.tooltipgrayoutcolor=pluck(a.tooltipgrayoutcolor,preDefStr.colors.AAAAAA),n.clickURLOverridesPlotLinks=pluckNumber(a.clickurloverridesplotlinks,0),v.addToEnv('chartConfig',n),v.addToEnv('linkClickFN',getLinkAction(v.getFromEnv('dataSource'),v)),v.addToEnv('dataLabelStyle',p)}createComponent(){let e,t=this,a=t.config;e=a.skipConfigureIteration,t.createBaseComponent(),t.getFromEnv('animationManager').setAnimationState(t._firstConfigure?'initial':'update'),componentFactory(t,Caption,'caption'),e.caption=!0,componentFactory(t,SubCaption,'subCaption'),e.subCaption=!0,componentFactory(t,Background,'background'),e.background=!0,t._createConfigurableComponents&&t._createConfigurableComponents(),t.config.realtimeEnabled&&t._realTimeConfigure&&t._realTimeConfigure()}configureChildren(){var e=this;e._mapChildren(t=>{!t.getState('removed')&&e.config.skipConfigureIteration[t.getName()]&&t.configure&&t.configure()})}_createToolBox(){_createToolBox.call(this)}configureAttributes(e){configurer.call(this,e)}setTooltipStyle(){let e=this.config,t=this.getFromEnv('toolTipController');t.setStyle({bgColor:convertColor(e.tooltipbgcolor||'FFF',e.tooltipbgalpha||100),rawBgColor:(e.tooltipbgcolor||'FFF').replace(/\s+/g,'').replace(/^#?([a-f0-9]+)/ig,'#$1'),fontColor:(e.tooltipcolor||e.basefontcolor||'545454').replace(/\s+/g,'').replace(/^#?([a-f0-9]+)/ig,'#$1'),borderColor:convertColor(e.tooltipbordercolor||'666',e.tooltipborderalpha||100),rawBorderColor:(e.tooltipbordercolor||'666').replace(/\s+/g,'').replace(/^#?([a-f0-9]+)/ig,'#$1'),bgAlpha:pluckNumber(e.tooltipbgalpha,100),borderThickness:pluckNumber(e.tooltipborderthickness,1),showToolTipShadow:pluckNumber(e.showtooltipshadow,e.showshadow,1),borderRadius:pluckNumber(e.tooltipborderradius,0),"font-size":e.basefontsize||10,"font-family":e.basefont||this.getFromEnv('style').inCanfontFamily,padding:pluckNumber(e.tooltippadding||3),borderAlpha:pluckNumber(e.tooltipborderalpha,100)})}__setDefaultConfig(){super.__setDefaultConfig();let e=this.config;e.valuefontbold=0,e.stickytracking=1,e.usemessagelog=0,e.zeroplanethickness=UNDEF,e.animationeffect='linear',e.showshadow=1,e.showhovereffect=UNDEF,e.plothovereffect=UNDEF,e.anchorhovereffect=UNDEF,e.plotborderdashed=UNDEF,e.stack100percent=UNDEF,e.showpercentvalues=UNDEF,e.showpercentintooltip=UNDEF,e.plotbordercolor=UNDEF,e.showtooltip=1,e.seriesnameintooltip=1,e.rotatevalues=0,e.minimizetendency=0,e.plotfillangle=270,e.valuepadding=2,e.useplotgradientcolor=1,e.plotborderthickness=1,e.plotfillalpha=SEVENTYSTRING,e.showvalues=1,e.valueposition=AUTO,e.drawcrossline=UNDEF,e.tooltipsepchar=', ',e.usedataplotcolorforlabels=0,e.placevaluesinside=0,e.showplotborder=1,e.use3dlighting=1,e.useroundedges=0,e.plotspacepercent=20,e.plotpaddingpercent=UNDEF,e.plotfillratio=UNDEF,e.maxcolwidth=50,e.plotborderdashlen=5,e.plotborderdashgap=4,e.useScaleRecursively=!0,e.formatnumberscale=1,e.decimals=2,e.decimalprecision=10,e.tooltipbgcolor='FFF',e.tooltipcolor=UNDEF,e.tooltipbordercolor='666',e.tooltipbgalpha=100,e.tooltipborderthickness=1,e.showtooltipshadow=UNDEF,e.basefontsize=10,e.basefont='Verdana, sans',e.tooltipborderradius=0,e.tooltippadding=3,e.tooltipborderalpha=100,e.origw=UNDEF,e.origh=UNDEF}configure(e){e.chart=e.chart||e.graph||e.map||{},super.configure(e)}_checkInvalidData(){var e=this,t=e.getFromEnv('dataSource'),a=e.getFromEnv('chartInstance');if(!e.isWidget&&!e.isMap&&!(t.data&&0!==t.data.length)&&!t.dataset&&!t.value&&!t.lineset&&!t.annotations&&!t.category&&!(t.tasks||t.process)&&!t.axis)return e.setChartMessage(),e.drawChartMessage(),a.__state.dataReady=!1,a.jsVars.hasNativeMessage=!0,a.jsVars.drawCount+=1,!0}_checkInvalidSpecificData(){let e=this.getFromEnv('dataSource'),t=e.dataset,a=e.categories;if(!t||!a||0===a.length||!a[0].category)return!0}setChartEvents(){var e=this,t=e.getFromEnv('eventListeners'),a=e.getFromEnv('dataSource'),n=a&&a.chart,o=e.getFromEnv('paper')&&e.getFromEnv('paper').canvas,i=e.getFromEnv('chart-container'),r=n&&pluckNumber(n.enablechartmousemoveevent,0);(n||o)&&(domEvtHandler.unlisten(i,supportsPointer?'click':'touchend',supportsPointer?onContainerClick:_onContainerClickIOS),t.push(domEvtHandler.listen(i,'mousedown touchstart',_registerMouseDown,e)),t.push(domEvtHandler.listen(i,'mousemove touchmove',_registerMouseMove,e)),t.push(domEvtHandler.listen(i,supportsPointer?'click':'touchend',supportsPointer?onContainerClick:_onContainerClickIOS,e)),domEvtHandler.unlisten(o,'mouseover',chartHoverManager,e),domEvtHandler.unlisten(o,'touchstart',chartHoverManager,e),domEvtHandler.unlisten(o,'mouseout',chartHoverManager,e),domEvtHandler.unlisten(o,'touchend',chartHoverManager,e),t.push(domEvtHandler.listen(o,'mouseover touchstart mouseout touchend',chartHoverManager,e)),domEvtHandler.unlisten(i,'mousemove',CommonAPI.onContainerMouseMove,e),domEvtHandler.unlisten(i,'touchmove',CommonAPI.onContainerMouseMove,e),r&&t.push(domEvtHandler.listen(i,'mousemove touchmove',CommonAPI.onContainerMouseMove,e)))}static chartMenuTools(){var e=[];return{get:function(){return e},set:function(t){var a,n=t.length||0;for(a=0;a<n;a+=1)e.push(t[a])},reset:function(t,a){var n=a.getChildren('actionBar'),o=a.getChildren('chartMenuBar');o&&a.detachChild(o.getId())&&(o.drawn=!1),n&&a.detachChild(n.getId())&&(n.drawn=!1),e.length=0;t&&(t.idCount=0,t.clean())},update:function(e,t,a){var n,o,r,s,g,c,d,h,p,m=a.getChildren('chartMenuBar')||a.getChildren('actionBar'),u=m.config.componentGroups;for(g=0,c=u.length;g<c;g++)for(p=u[g],s=p.config.symbolList||[],(d=0,h=s.length);d<h;d++)s[d]instanceof SymbolWithContext&&(r=s[d],n=r.getListRefernce().getFirstContainer().config.atomicLists);for(n=n||[],g=0,c=n.length;g<c;g++)if(o=n[g],o.config.name===e){o.updateName(t);break}}}}get(e,t){var a=this[e];return t?a&&a[t]:a}prepareAttributes(){this.config.hasChartMessage||super.prepareAttributes()}disposeChartStyleSheet(){var e=this,t=e.getFromEnv('paper');t&&t.cssClear()}createChartStyleSheet(){var e=this,t=e.getFromEnv('paper');t.cssRender()}_dispose(){let e=this.getFromEnv('eventListeners'),t=e&&e.length;for(;t--;)e[t].unlisten();super._dispose()}_allocateSpace(e){var t,a,n=this,o=n.getChildren('canvas'),i=o&&o[0].config,r=n.config,l=r.canvasHeight,s=r.canvasWidth,g=r.availableHeight,c=r.availableWidth;a=r.canvasLeft+=e.left||0,t=r.canvasTop+=e.top||0,s=r.canvasWidth=mathMax(s-((e.left||0)+(e.right||0)),0),l=r.canvasHeight=mathMax(l-((e.top||0)+(e.bottom||0)),0),r.availableHeight=mathMax(g-((e.top||0)+(e.bottom||0)),0),r.availableWidth=mathMax(c-((e.left||0)+(e.right||0)),0),r.canvasRight=a+s,r.canvasBottom=t+l,i&&(i.canvasPaddingLeft=mathMax(i.canvasPaddingLeft,e.paddingLeft||0),i.canvasPaddingRight=mathMax(i.canvasPaddingRight,e.paddingRight||0),i.canvasPaddingTop=mathMax(i.canvasPaddingTop,e.paddingTop||0),i.canvasPaddingBottom=mathMax(i.canvasPaddingBottom,e.paddingBottom||0)),o&&o[0].setDimension({top:t,left:a,width:s,height:l})}_fetchCaptionPos(e){var t,a=this,n=a.config,o=n.width,i=a.getChildren('chartMenuBar'),r=i.config.componentGroups[0].config.btnConfig,l=i.getLogicalSpace(),s=l.width,g=a.getChildren('caption')&&a.getChildren('caption')[0],c=g.config,d=c.width,h='l'===r.hAlign,p=n.width-e,m=h?e:p,u=n.origMarginRight,v=n.origMarginLeft,C=h?v:u;return t=c.align===POSITION_MIDDLE?m-d/2-C-s:'start'===c.align?h?-1:o-n.canvasLeft-C-d-s+c.horizontalPadding:h?o-(u+v+s+d):-1,t}_manageCaptionSpacing(e,t){var a,n=this,o=n.getChildren('caption')[0];return a=o.manageSpace(e,t),a}_manageChartMenuBar(e){var t,a,n=this,o=n.config,i=n.getChildren('chartMenuBar'),r=i&&i.getLogicalSpace(),l=n.getChildren('caption')&&n.getChildren('caption')[0],s=l.config,g=s.isOnTop,c=o.width/2,d=o.canvasRight,h=d?(o.canvasLeft+d)/2:c,p=0,m=s.alignWithCanvas?h:c,u=i&&i.config.componentGroups.length&&i.config.componentGroups[0].config.btnConfig,v=r&&u.spaceNotHardCoded;return u&&u.spaceNotHardCoded&&(u.x=pluckNumber('l'===u.hAlign?0:o.width),u.y=pluckNumber('t'===u.vAlign?0:o.height)),delete s._offsetHeight,a=s.alignWithCanvas?o.canvasWidth:o.width-o.origMarginLeft-o.origMarginRight,g?(t=n._manageCaptionSpacing(e,a),v&&(p=n._fetchCaptionPos(m),s._offsetHeight=0>p?r.height:0,t.top=0>p?pluckNumber(t.top,0)+r.height:mathMax(t.top,r.height)),n._allocateSpace(t)):(n._allocateSpace({top:v?r.height:0}),t=n._manageCaptionSpacing(e,a),n._allocateSpace(t)),{top:r?mathMax(r.height,t.top):t.top,bottom:t.bottom}}_manageSpace(){var e,t,a,n,o,i,r,l,s,g,c,d,h=this,p=h.getChildren('canvas')&&h.getChildren('canvas')[0],m=p&&p.config,u=h.config,v=h.getFromEnv('chartWidth'),C=h.getFromEnv('chartHeight');u.width=v,u.height=C,u.minChartHeight=s=u.minChartHeightPercent*C,u.minChartWidth=g=u.minChartWidthPercent*v,u.minCanvasWidth=e=u.minCanvasWidthPercent*g,u.minCanvasHeight=t=u.minCanvasHeightPercent*s,u.marginTop=a=u.origMarginTop,u.marginLeft=n=u.origMarginLeft,u.marginBottom=o=u.origMarginBottom,u.marginRight=i=u.origMarginRight,u.canvasMarginTop=u.origCanvasTopMargin,u.canvasMarginLeft=u.origCanvasLeftMargin,u.canvasMarginBottom=u.origCanvasBottomMargin,u.canvasMarginRight=u.origCanvasRightMargin,u.canvasHeight=r=u.height-u.marginTop-u.marginBottom,u.canvasWidth=l=u.width-u.marginLeft-u.marginRight,u.availableHeight=r-t,u.availableWidth=l-e,r<s&&(c=C-s,u.canvasHeight=s,d=a+o,u.marginTop=c*a/d,u.marginBottom=c*o/d,u.availableHeight=s-t),l<g&&(c=v-g,d=i+n,u.canvasWidth=g,u.marginLeft=c*n/d,u.marginRight=c*i/d,u.availableWidth=g-e),u.canvasLeft=u.marginLeft,u.canvasTop=u.marginTop,m&&(m.canvasPaddingLeft=mathMin(m.origCanvasLeftPad,mathRound(.1*u.height)),m.canvasPaddingRight=mathMin(m.origCanvasRightPad,mathRound(.1*u.height)),m.canvasPaddingTop=mathMin(m.origCanvasTopPad,mathRound(.1*u.height)),m.canvasPaddingBottom=mathMin(m.origCanvasBottomPad,mathRound(.1*u.height))),h._spaceManager()}_preDraw(){var e=this;e._mapChildren(e=>{!e.getState('removed')&&e.preDraw&&e.preDraw()}),e._setAxisLimits&&e._setAxisLimits(),e._createToolBoxGantt&&e._createToolBoxGantt()}_clearTimers(){var e,t=this,a=t.config&&t.config.realTimeConfig,n=t.config.timers,o=n&&n.setTimeout,i=n&&n.setInterval;for(e in a&&(a.refreshIntervalFlag=!1),o)clearTimeout(o[e]);for(e in i)clearInterval(i[e])}setChartCursor(){var e=this,t=e.config.link,a=e.getFromEnv('paper').canvas.style;Raphael.svg?a.cursor=t?POINTER:'default':e.getFromEnv('paper').canvas.style.cursor=t?HAND:'default'}_createLayers(){var e,t=this,a=t.getFromEnv('animationManager');e=t.getContainer('parentgroup')||t.addContainer('parentgroup',a.setAnimation({el:'group',attr:{name:'parentgroup'},component:t})),t.getChildContainer('backgroundGroup')||t.addChildContainer('backgroundGroup',createGroup({name:'background'},e,t)),t.getChildContainer('axisBottomGroup')||t.addChildContainer('axisBottomGroup',createGroup({name:'axisbottom'},e,t)),t.getChildContainer('belowPlotGroup')||t.addChildContainer('belowPlotGroup',createGroup({name:'belowplot'},e,t)),t.getChildContainer('lowerAnnotationGroup')||t.addChildContainer('lowerAnnotationGroup',createGroup({name:'lowerannotations'},t.getChildContainer('belowPlotGroup'),t)),t.getChildContainer('plotGroup')||t.addChildContainer('plotGroup',createGroup({name:'plots'},e,t)),t.getChildContainer('axisTopGroup')||t.addChildContainer('axisTopGroup',createGroup({name:'axistop'},e,t)),t.getChildContainer('sumLabelsLayer')||t.addChildContainer('sumLabelsLayer',createGroup({name:'sumlabels',class:'fusioncharts-datalabels'},e,t)),t.getChildContainer('datalabelsGroup')||t.addChildContainer('datalabelsGroup',createGroup({name:'datalabel'},e,t)),t.getChildContainer('abovePlotGroup')||t.addChildContainer('abovePlotGroup',createGroup({name:'aboveplot'},e,t)),t.getChildContainer('upperAnnotationGroup')||t.addChildContainer('upperAnnotationGroup',createGroup({name:'upperannotations'},t.getChildContainer('abovePlotGroup'),t)),t.getChildContainer('captionGroup')||t.addChildContainer('captionGroup',createGroup({name:'caption'},e,t)),t.getChildContainer('defaultGroup')||t.addChildContainer('defaultGroup',createGroup({name:'chartdefault'},e,t)),t.getChildContainer('defaultShadowGroup')||t.addChildContainer('defaultShadowGroup',createGroup({name:'chartdefault-shadow'},e,t)),t.getChildContainer('trackerGroup')||t.addChildContainer('trackerGroup',createGroup({name:'tracker'},e,t)),t.getChildContainer('buttonGroup')||t.addChildContainer('buttonGroup',a.setAnimation({el:'group',container:e,attr:{name:'buttons'},component:t})),t.getChildContainer('logoGroup')||t.addChildContainer('logoGroup',a.setAnimation({el:'group',attr:{name:'logo'},component:t}))}_setDataLabelStyle(){var e=this,t=e.config.dataLabelStyle,a={fontFamily:t.fontFamily,fontSize:t.fontSize,fontWeight:t.fontWeight,fontStyle:t.fontStyle},n=e.getChildContainer('datalabelsGroup');n.css(a)}_manageCaptionPosition(){let e,t,a,n,o=this,i=o.config,r=o.getChildren(),l=r.caption&&r.caption[0],s=r.subCaption&&r.subCaption[0],g=l.config,c=g.widgetValueHeight||0,d=s.config,h=i.canvasWidth,p=g.align,m=g.text,u=g.alignWithCanvas,v=g.horizontalPadding,C=i.width,f=i.canvasLeft,b=i.canvasRight,w=i.marginRight,E=i.marginLeft,M=i.marginTop,F=(mathRound(f)||0)+pluckNumber(h,C)/2,T=g.height,_=d.height,L=r.legend&&r.legend[0]&&r.legend[0].config||{},S=L.height||0,x=L.legendPadding||0,k=i.legendposition,B=o.getFromEnv('gLegend')||{},y=0,P=!!(B.conf||{}).showLegend,A=o.config.borderWidth,I=r.actionBar,G=0;L.isActive||(S=0),P&&o.config.gLegendEnabled&&(y=B.getLogicalSpace().height);e=p===POSITION_END?u?b-v:C-v:p===POSITION_START?u?f+v:v:u?F:E+.5*(C-E-w)||C/2;g.isOnTop?t=(A||0)+(M||0):(k.toLowerCase()===POSITION_RIGHT&&(x=0,S=0,y=0),I&&(n=I.getLogicalSpace()||{},G=n.height,(G===UNDEF||G===1/0||0>G)&&(G=0)),t=o.config.height-o.config.marginBottom-T-(_||0)-(A||0)-(x||0)-(S||0)-y-c-G),t+=g._offsetHeight||0,l.setDimention({x:e,y:t}),a=m?t+T+2:t||M||0,s.setDimention({x:e,y:a})}_updateVisuals(){var e,t,a=this,n=a.getFromEnv('core-options'),o=a.getFromEnv('paper'),i=a.getFromEnv('animationManager'),r=a.config,l=a.getFromEnv('chartWidth'),s=a.getFromEnv('chartHeight');n&&!n._SVGDefinitionURLUpdated&&(/^\s*absolute\s*$/i.test(n.SVGDefinitionURL)&&(Raphael._url=(Raphael._g&&Raphael._g.win||window).location.href.replace(/#.*?$/,BLANKSTRING)),n._SVGDefinitionURLUpdated=!0),o?(!hasSVG&&(r._prevWidth||r._prevHeight)&&o.setSize(r._prevWidth,r._prevHeight),t={width:l,height:s},i.setAnimation({el:o,attr:t,component:a})):(o=new Raphael(a.getFromEnv('chart-container'),l,s),o.setHTMLClassName('fusioncharts-div'),a.addToEnv('paper',o),o.setConfig('stroke-linecap',ROUND),a.setChartEvents()),r._prevWidth=l,r._prevHeight=s,a.setChartCursor(),a._createLayers(),a._setDataLabelStyle(),e=a.getChildren('chartMenuBar')?'chartMenuBar':a.getChildren('actionBar')?'actionBar':UNDEF,e&&a.allocateDimensionOfChartMenuBar(e),a.getChildren('chartMenuBar')&&(a.getChildren('chartMenuBar').config.parentLayer=a.getContainer('parentgroup')),a._drawCreditLabel()}allocateDimensionOfChartMenuBar(e){var t=this,a=t.config,n=t.getChildren(e),o=n.getLogicalSpace(),i=n.config.toolbarConfig,r=n.config.componentGroups[0].config.btnConfig,l=r.vDirection,s=r.hDirection,g=r.y,c=r.x;i.fill=TRACKER_FILL,i.borderColor=TRACKER_FILL,r.spaceNotHardCoded&&('chartMenuBar'===e?(g+=r.vMargin*l+mathMin(0,o.height*l),c+=r.hMargin*s-mathMax(0,o.width*s),c='l'===r.hAlign?c+o.width:c-o.width):(g=a.height-a.marginBottom-o.height,c='b'===r.vAlign&&'r'===r.hAlign?a.width-a.marginRight-o.width:a.marginLeft)),n.setMenuBarDimension(c,g)}draw(){var e=this,t=e.getFromEnv('chartInstance');e.config.hasChartMessage?(e._hide(),e.drawChartMessage(),e.fireChartInstanceEvent('nodatatodisplay',{},[t.id]),t.jsVars.drawCount+=1,t.__state.dataReady=!1,t.jsVars.hasNativeMessage=!0):(e._hideChartMessage(),e._clearTimers&&e._clearTimers(),e.config.plotOverFlow=!1,e._show(),e._updateVisuals(),e.setState('initiated',!0),t.jsVars.drawCount+=1,t.jsVars.hasNativeMessage=!1)}manageSpace(){let e=this;e.config.hasChartMessage||(e._preDraw(),e.addToolbar&&e.addToolbar(),e._manageSpace(),e._postSpaceManagement&&e._postSpaceManagement())}_show(){this.getContainer('parentgroup')&&this.getContainer('parentgroup').show()}_manageActionBarSpace(){var e=this,t=e.config,a=e.getChildren('actionBar'),n=a&&a.getLogicalSpace()||{},o=n.height||0;return t.actionBarHeight=o,{bottom:o}}_hide(){this.getContainer('parentgroup')&&this.getContainer('parentgroup').hide()}static onContainerMouseMove(t){var e,a=t.data,n=a.getFromEnv('chartInstance'),o=t.originalEvent,i=getMouseCoordinate(a.getFromEnv('chart-container'),o,a);n.ref&&(e=extend2({height:n.args.height,width:n.args.width,pixelHeight:a.getFromEnv('chartWidth'),pixelWidth:a.getFromEnv('chartHeight'),id:n.args.id,renderer:n.args.renderer,container:n.options.containerElement},i),a.fireChartInstanceEvent('chartMouseMove',e))}static onContainerRollOver(t){var e,a=t.data,n=a.getFromEnv('chartInstance'),o=t.originalEvent,i=getMouseCoordinate(a.getFromEnv('chart-container'),o,a);n.ref&&(e=extend2({height:n.args.height,width:n.args.width,pixelHeight:a.getFromEnv('chartWidth'),pixelWidth:a.getFromEnv('chartHeight'),id:n.args.id,renderer:n.args.renderer,container:n.options.containerElement},i),a.fireChartInstanceEvent('chartRollOver',e))}static onContainerRollOut(t){var e,a=t.chart,n=a.getFromEnv('chartInstance'),o=t.event,i=getMouseCoordinate(a.getFromEnv('chart-container'),o,a);n.ref&&(e=extend2({height:n.args.height,width:n.args.width,pixelHeight:a.getFromEnv('chartWidth'),pixelWidth:a.getFromEnv('chartHeight'),id:n.args.id,renderer:n.args.renderer,container:n.options.containerElement},i),a.fireChartInstanceEvent('chartRollOut',e))}static winMouseHover(t){var e=t.originalEvent,a=e.target||e.originalTarget||e.srcElement||e.relatedTarget||e.fromElement,n=t.data,o=n.getFromEnv('paper'),i={chart:n,event:t.originalEvent};isVML?!o.getById(a.parentNode.raphaelid)&&(CommonAPI.onContainerRollOut(i),n.config.mouseStateIn=!1,domEvtHandler.unlisten(document,'mouseover',CommonAPI.winMouseHover)):!a.viewportElement&&(n.config.mouseStateIn=!1,CommonAPI.onContainerRollOut(i),domEvtHandler.unlisten(window,'mouseover',CommonAPI.winMouseHover))}}export default CommonAPI;export{_drawDataset,_createToolBox,configurer};