function clearStateEventHandler(a){delete a.sender.jsVars._reflowData,a.sender.jsVars._reflowData={},delete a.sender.jsVars._reflowClean}export default{beforeInitialize:function(a){var b,c=a.sender,d=c.jsVars;d.fcObj=c,d.msgStore=d.msgStore||{LoadDataErrorText:'Error in loading data.',XMLLoadingText:'Retrieving data. Please wait',InvalidXMLText:'Invalid data.',ChartNoDataText:'No data to display.',ReadingDataText:'Reading data. Please wait',ChartNotSupported:'Chart type not supported.',PBarLoadingText:'',LoadingText:'Loading chart. Please wait',RenderChartErrorText:'Unable to render chart.'},d.cfgStore=d.cfgStore||{},d.previousDrawCount=-1,d.drawCount=0,d._reflowData={},c.addEventListener('beforeRender',a=>a.detachHandler()),d.userModules instanceof Array||(b=d.userModules,d.userModules=[],'string'==typeof b&&(d.userModules=d.userModules.concat(b.split(','))))},beforeDataUpdate:clearStateEventHandler,beforeDispose:function(a){var b=a.sender,c=b.jsVars;c.smartLabel&&!c.smartLabel.disposed&&c.smartLabel.dispose(),clearStateEventHandler(...arguments)},beforeRender:function(a){var b=a.sender,c=b.jsVars;delete c.drLoadAttempted,clearStateEventHandler(...arguments)},dataLoadRequested:function(a){var b=a.sender,c=b.jsVars;delete c.loadError,b.ref&&b.options.showDataLoadingMessage?c.hcObj&&!c.hasNativeMessage&&c.hcObj.showLoading?c.hcObj.showMessage(c.msgStore.XMLLoadingText):b.ref.showChartMessage?b.ref.showChartMessage('XMLLoadingText'):c.stallLoad=!0:c.stallLoad=!0},dataLoadRequestCompleted:function(a){var b=a.sender,c=b.jsVars;delete c.stallLoad},dataLoadError:function(a){var b=a.sender,c=b.jsVars,d=b.args,e=b.options;delete c.stallLoad,c.loadError=!0,b._chartMessageImageStyle={imageHAlign:d.dataLoadErrorMessageImageHAlign||e.baseChartMessageImageHAlign,imageVAlign:d.dataLoadErrorMessageImageVAlign||e.baseChartMessageImageVAlign,imageAlpha:d.dataLoadErrorMessageImageAlpha||e.baseChartMessageImageAlpha,imageScale:d.dataLoadErrorMessageImageScale||e.baseChartMessageImageScale},b._chartMessageStyle={color:d.dataLoadErrorMessageColor||e.baseChartMessageColor,fontFamily:d.dataLoadErrorMessageFont||e.baseChartMessageFont,fontSize:d.dataLoadErrorMessageFontSize||e.baseChartMessageFontSize},b.apiInstance.setChartMessage&&(b.apiInstance.setChartMessage(e.dataLoadErrorMessage,b),b.apiInstance.drawChartMessage()),b.__state.dataFetchDuringConstruction&&delete b.__state.dataFetchDuringConstruction,clearStateEventHandler(...arguments)}};