ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([110.330084, -7.833241, 110.438329, -7.755957]);
var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Yogyakartakecamatan_1 = new ol.format.GeoJSON();
var features_Yogyakartakecamatan_1 = format_Yogyakartakecamatan_1.readFeatures(json_Yogyakartakecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Yogyakartakecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yogyakartakecamatan_1.addFeatures(features_Yogyakartakecamatan_1);
var lyr_Yogyakartakecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yogyakartakecamatan_1, 
                style: style_Yogyakartakecamatan_1,
                popuplayertitle: 'Yogyakarta (kecamatan)',
                interactive: true,
    title: 'Yogyakarta (kecamatan)<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_0.png" /> Wirobrajan<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_1.png" /> Umbulharjo<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_2.png" /> Tegalrejo<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_3.png" /> Pakualaman<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_4.png" /> Ngampilan<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_5.png" /> Mergangsan<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_6.png" /> Mantrijeron<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_7.png" /> Kraton<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_8.png" /> Kotagede<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_9.png" /> Jetis<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_10.png" /> Gondomanan<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_11.png" /> Gondokusuman<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_12.png" /> Gedongtengen<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_13.png" /> Danurejan<br />\
    <img src="styles/legend/Yogyakartakecamatan_1_14.png" /> <br />' });

lyr_GoogleTerrain_0.setVisible(true);lyr_Yogyakartakecamatan_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Yogyakartakecamatan_1];
lyr_Yogyakartakecamatan_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'KECAMATAN', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', });
lyr_Yogyakartakecamatan_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'Field': 'TextEdit', });
lyr_Yogyakartakecamatan_1.set('fieldLabels', {'fid': 'header label - visible with data', 'OBJECTID': 'header label - visible with data', 'NAMOBJ': 'header label - visible with data', 'FCODE': 'header label - visible with data', 'REMARK': 'header label - visible with data', 'METADATA': 'header label - visible with data', 'TIPADM': 'header label - visible with data', 'WADMKC': 'inline label - always visible', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'LUAS': 'hidden field', 'Field': 'hidden field', });
lyr_Yogyakartakecamatan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});