var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Zonedeprotectiondessources_2 = new ol.format.GeoJSON();
var features_Zonedeprotectiondessources_2 = format_Zonedeprotectiondessources_2.readFeatures(json_Zonedeprotectiondessources_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonedeprotectiondessources_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedeprotectiondessources_2.addFeatures(features_Zonedeprotectiondessources_2);
var lyr_Zonedeprotectiondessources_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonedeprotectiondessources_2, 
                style: style_Zonedeprotectiondessources_2,
                interactive: true,
    title: 'Zone de protection des sources<br />\
    <img src="styles/legend/Zonedeprotectiondessources_2_0.png" /> zone de protection S1<br />\
    <img src="styles/legend/Zonedeprotectiondessources_2_1.png" /> zone de protection S2<br />\
    <img src="styles/legend/Zonedeprotectiondessources_2_2.png" /> zone de protection S3<br />'
        });
var format_Limitecommunale_3 = new ol.format.GeoJSON();
var features_Limitecommunale_3 = format_Limitecommunale_3.readFeatures(json_Limitecommunale_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitecommunale_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitecommunale_3.addFeatures(features_Limitecommunale_3);
var lyr_Limitecommunale_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limitecommunale_3, 
                style: style_Limitecommunale_3,
                interactive: true,
                title: '<img src="styles/legend/Limitecommunale_3.png" /> Limite communale'
            });
var group_Fondsdecarte = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,],
                                title: "Fonds de carte"});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Zonedeprotectiondessources_2.setVisible(true);lyr_Limitecommunale_3.setVisible(true);
var layersList = [group_Fondsdecarte,lyr_Zonedeprotectiondessources_2,lyr_Limitecommunale_3];
lyr_Zonedeprotectiondessources_2.set('fieldAliases', {'ZONE_TYPE_': 'Zone de protection des sources', });
lyr_Limitecommunale_3.set('fieldAliases', {'NOM': 'NOM', });
lyr_Zonedeprotectiondessources_2.set('fieldImages', {'ZONE_TYPE_': 'TextEdit', });
lyr_Limitecommunale_3.set('fieldImages', {'NOM': 'TextEdit', });
lyr_Zonedeprotectiondessources_2.set('fieldLabels', {'ZONE_TYPE_': 'header label', });
lyr_Limitecommunale_3.set('fieldLabels', {'NOM': 'header label', });
lyr_Limitecommunale_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});