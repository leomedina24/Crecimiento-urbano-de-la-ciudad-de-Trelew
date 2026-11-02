ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5345").setExtent([3549474.788881, 5203578.179256, 3566454.979997, 5213258.811852]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Loteos2026_1 = new ol.format.GeoJSON();
var features_Loteos2026_1 = format_Loteos2026_1.readFeatures(json_Loteos2026_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5345'});
var jsonSource_Loteos2026_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loteos2026_1.addFeatures(features_Loteos2026_1);
var lyr_Loteos2026_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loteos2026_1, 
                style: style_Loteos2026_1,
                popuplayertitle: 'Loteos 2026',
                interactive: true,
                title: '<img src="styles/legend/Loteos2026_1.png" /> Loteos 2026'
            });
var format_Trelew2026_2 = new ol.format.GeoJSON();
var features_Trelew2026_2 = format_Trelew2026_2.readFeatures(json_Trelew2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5345'});
var jsonSource_Trelew2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trelew2026_2.addFeatures(features_Trelew2026_2);
var lyr_Trelew2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trelew2026_2, 
                style: style_Trelew2026_2,
                popuplayertitle: 'Trelew 2026',
                interactive: true,
                title: '<img src="styles/legend/Trelew2026_2.png" /> Trelew 2026'
            });
var format_Trelew2016_3 = new ol.format.GeoJSON();
var features_Trelew2016_3 = format_Trelew2016_3.readFeatures(json_Trelew2016_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5345'});
var jsonSource_Trelew2016_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trelew2016_3.addFeatures(features_Trelew2016_3);
var lyr_Trelew2016_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trelew2016_3, 
                style: style_Trelew2016_3,
                popuplayertitle: 'Trelew 2016',
                interactive: true,
                title: '<img src="styles/legend/Trelew2016_3.png" /> Trelew 2016'
            });
var format_Trelew2000_4 = new ol.format.GeoJSON();
var features_Trelew2000_4 = format_Trelew2000_4.readFeatures(json_Trelew2000_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5345'});
var jsonSource_Trelew2000_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trelew2000_4.addFeatures(features_Trelew2000_4);
var lyr_Trelew2000_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trelew2000_4, 
                style: style_Trelew2000_4,
                popuplayertitle: 'Trelew 2000',
                interactive: true,
                title: '<img src="styles/legend/Trelew2000_4.png" /> Trelew 2000'
            });
var format_Trelew1985_5 = new ol.format.GeoJSON();
var features_Trelew1985_5 = format_Trelew1985_5.readFeatures(json_Trelew1985_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5345'});
var jsonSource_Trelew1985_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trelew1985_5.addFeatures(features_Trelew1985_5);
var lyr_Trelew1985_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trelew1985_5, 
                style: style_Trelew1985_5,
                popuplayertitle: 'Trelew 1985',
                interactive: true,
                title: '<img src="styles/legend/Trelew1985_5.png" /> Trelew 1985'
            });
var format_Trelew1970_6 = new ol.format.GeoJSON();
var features_Trelew1970_6 = format_Trelew1970_6.readFeatures(json_Trelew1970_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5345'});
var jsonSource_Trelew1970_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trelew1970_6.addFeatures(features_Trelew1970_6);
var lyr_Trelew1970_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trelew1970_6, 
                style: style_Trelew1970_6,
                popuplayertitle: 'Trelew 1970',
                interactive: true,
                title: '<img src="styles/legend/Trelew1970_6.png" /> Trelew 1970'
            });
var format_Trelew1960_7 = new ol.format.GeoJSON();
var features_Trelew1960_7 = format_Trelew1960_7.readFeatures(json_Trelew1960_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5345'});
var jsonSource_Trelew1960_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trelew1960_7.addFeatures(features_Trelew1960_7);
var lyr_Trelew1960_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trelew1960_7, 
                style: style_Trelew1960_7,
                popuplayertitle: 'Trelew 1960',
                interactive: true,
                title: '<img src="styles/legend/Trelew1960_7.png" /> Trelew 1960'
            });
var format_Trelew1947_8 = new ol.format.GeoJSON();
var features_Trelew1947_8 = format_Trelew1947_8.readFeatures(json_Trelew1947_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5345'});
var jsonSource_Trelew1947_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trelew1947_8.addFeatures(features_Trelew1947_8);
var lyr_Trelew1947_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trelew1947_8, 
                style: style_Trelew1947_8,
                popuplayertitle: 'Trelew 1947',
                interactive: true,
                title: '<img src="styles/legend/Trelew1947_8.png" /> Trelew 1947'
            });
var format_Trelew1886_9 = new ol.format.GeoJSON();
var features_Trelew1886_9 = format_Trelew1886_9.readFeatures(json_Trelew1886_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5345'});
var jsonSource_Trelew1886_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trelew1886_9.addFeatures(features_Trelew1886_9);
var lyr_Trelew1886_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trelew1886_9, 
                style: style_Trelew1886_9,
                popuplayertitle: 'Trelew 1886',
                interactive: true,
                title: '<img src="styles/legend/Trelew1886_9.png" /> Trelew 1886'
            });
var format_RoChubut_10 = new ol.format.GeoJSON();
var features_RoChubut_10 = format_RoChubut_10.readFeatures(json_RoChubut_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5345'});
var jsonSource_RoChubut_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoChubut_10.addFeatures(features_RoChubut_10);
var lyr_RoChubut_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoChubut_10, 
                style: style_RoChubut_10,
                popuplayertitle: 'Río Chubut',
                interactive: true,
                title: '<img src="styles/legend/RoChubut_10.png" /> Río Chubut'
            });
var format_DistanciadeUrbanizacin_11 = new ol.format.GeoJSON();
var features_DistanciadeUrbanizacin_11 = format_DistanciadeUrbanizacin_11.readFeatures(json_DistanciadeUrbanizacin_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5345'});
var jsonSource_DistanciadeUrbanizacin_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistanciadeUrbanizacin_11.addFeatures(features_DistanciadeUrbanizacin_11);
var lyr_DistanciadeUrbanizacin_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistanciadeUrbanizacin_11, 
                style: style_DistanciadeUrbanizacin_11,
                popuplayertitle: 'Distancia de Urbanización',
                interactive: true,
                title: '<img src="styles/legend/DistanciadeUrbanizacin_11.png" /> Distancia de Urbanización'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Loteos2026_1.setVisible(true);lyr_Trelew2026_2.setVisible(true);lyr_Trelew2016_3.setVisible(true);lyr_Trelew2000_4.setVisible(true);lyr_Trelew1985_5.setVisible(true);lyr_Trelew1970_6.setVisible(true);lyr_Trelew1960_7.setVisible(true);lyr_Trelew1947_8.setVisible(true);lyr_Trelew1886_9.setVisible(true);lyr_RoChubut_10.setVisible(true);lyr_DistanciadeUrbanizacin_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Loteos2026_1,lyr_Trelew2026_2,lyr_Trelew2016_3,lyr_Trelew2000_4,lyr_Trelew1985_5,lyr_Trelew1970_6,lyr_Trelew1960_7,lyr_Trelew1947_8,lyr_Trelew1886_9,lyr_RoChubut_10,lyr_DistanciadeUrbanizacin_11];
lyr_Loteos2026_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Área mts': 'Área m²', });
lyr_Trelew2026_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'area mts': 'Área m²', });
lyr_Trelew2016_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'area mts': 'Área m²', });
lyr_Trelew2000_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area mts': 'Área m²', 'Año': 'Año', });
lyr_Trelew1985_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area mts': 'Área m²', 'Año': 'Año', });
lyr_Trelew1970_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area mts': 'Área m²', 'Año': 'Año', });
lyr_Trelew1960_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area mts': 'Área m²', 'Año': 'Año', });
lyr_Trelew1947_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area mts': 'Área m²', 'Año': 'Año', });
lyr_Trelew1886_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'area mts': 'Área m²', 'Año': 'Año', });
lyr_RoChubut_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_DistanciadeUrbanizacin_11.set('fieldAliases', {'fid': 'fid', 'Dirección': 'Dirección', 'Distancia': 'Distancia en metros', });
lyr_Loteos2026_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Área mts': 'TextEdit', });
lyr_Trelew2026_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'area mts': 'Range', });
lyr_Trelew2016_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'area mts': 'Range', });
lyr_Trelew2000_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area mts': 'TextEdit', 'Año': 'TextEdit', });
lyr_Trelew1985_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area mts': 'TextEdit', 'Año': 'TextEdit', });
lyr_Trelew1970_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area mts': 'TextEdit', 'Año': 'TextEdit', });
lyr_Trelew1960_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area mts': 'TextEdit', 'Año': 'TextEdit', });
lyr_Trelew1947_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area mts': 'TextEdit', 'Año': 'TextEdit', });
lyr_Trelew1886_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'area mts': 'TextEdit', 'Año': 'TextEdit', });
lyr_RoChubut_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_DistanciadeUrbanizacin_11.set('fieldImages', {'fid': 'TextEdit', 'Dirección': 'TextEdit', 'Distancia': 'Range', });
lyr_Loteos2026_1.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Área mts': 'header label - always visible', });
lyr_Trelew2026_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'area mts': 'header label - always visible', });
lyr_Trelew2016_3.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'area mts': 'header label - always visible', });
lyr_Trelew2000_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'area mts': 'header label - always visible', 'Año': 'hidden field', });
lyr_Trelew1985_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'area mts': 'header label - always visible', 'Año': 'hidden field', });
lyr_Trelew1970_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'area mts': 'header label - always visible', 'Año': 'hidden field', });
lyr_Trelew1960_7.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'area mts': 'header label - always visible', 'Año': 'hidden field', });
lyr_Trelew1947_8.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'area mts': 'header label - always visible', 'Año': 'hidden field', });
lyr_Trelew1886_9.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'area mts': 'header label - always visible', 'Año': 'hidden field', });
lyr_RoChubut_10.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_DistanciadeUrbanizacin_11.set('fieldLabels', {'fid': 'hidden field', 'Dirección': 'header label - always visible', 'Distancia': 'header label - always visible', });
lyr_DistanciadeUrbanizacin_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});