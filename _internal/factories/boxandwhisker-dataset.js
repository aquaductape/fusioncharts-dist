import{datasetFactory,componentFactory}from'../lib/lib';import BoxAndWhiskerStatisticalCalc from'../datasets/box-and-whisker-statistical-calc';export default function(a){let b,c,d,e,f=a.getFromEnv('dataSource'),g=f.dataset,h=a.getChildren(),i=h.canvas[0],j=b=i.getChildren('vCanvas')[0],k=a.config.defaultDatasetType||'';g||a.setChartMessage(),c=a.getDSGroupdef(),componentFactory(b,c,'datasetGroup_'+k),e=b.getChildren('datasetGroup_'+k),e&&(j=e[0]),d=a.getDSdef(),componentFactory(a,BoxAndWhiskerStatisticalCalc,'BoxAndWhiskerStatisticalCalc'),b.getChildren('datasetGroup_'+k)[0].addToEnv('BoxAndWhiskerStatisticalCalc',a.getChildren('BoxAndWhiskerStatisticalCalc')[0]),j.addToEnv('lineJSON',a._getLineJSONdata()),datasetFactory(j,d,'dataset',g.length,g)}