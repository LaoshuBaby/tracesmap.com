var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        attributions: [
          'All maps © <a href="http://www.openseamap.org/">OpenSeaMap</a>',
          "XX" ],
        opaque: false,
        url: 'https://tiles.tracestrack.com/base/{z}/{x}/{y}.png',
        crossOrigin: null,
        tilePixelRatio: 2,
      }),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 4
  })
});

var languageLayer;

function setLanguageLayer(label_name) {
  if (languageLayer) {
    map.removeLayer(languageLayer);
  }

  languageLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      attributions: [
        'All maps © <a href="http://www.openseamap.org/">OpenSeaMap</a>',
        "XX" ],
      opaque: false,
      url: 'https://tiles.tracestrack.com/' + label_name + '/{z}/{x}/{y}.png',
      crossOrigin: null,
      tilePixelRatio: 2,
    }),
  });
  map.addLayer(languageLayer);
}

setLanguageLayer("en-name");
