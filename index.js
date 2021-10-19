

// Create Map
mapboxgl.accessToken = 
'pk.eyJ1IjoieXVlcnVjIiwiYSI6ImNrdDN3ZWpheDExdWoydm54d2tyaWw3b2IifQ.QFuYv_lBJTg9VdCB9pq66Q';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [144.961, -37.8],
    zoom: 12.48
});

// Create layers
let layers = [
    {
        "name": "Attractions",
        "color": "#7392ba",
    },
    {
        "name": "Art Museum",
        "color": "#f4a64d",
    },
    {
        "name": "Railway",
        "color": "#e77979",
    },
    {
        "name": "Recreation Facility",
        "color": "#91c5c1",
    }
];



    // Loading map
    map.on('load', function() {
    	for (let layer of layers) {
        let link = document.createElement('a');

        link.href = '#';

        link.textContent = layer.name;
        link.dataset.layerName = layer.name;
        link.dataset.activity = 'none';

        let buttons = document.querySelector('#buttons');

        let legend = document.createElement('span');
        legend.style.backgroundColor = layer.color;

        legend.className = 'legend-key';
        buttons.appendChild(legend);
        buttons.appendChild(link);
      }
    });

    map.on('style.load', function() {
      for (let layer of layers) {
      	if (layer.name === 'Art Museum' && document.querySelector('input[name="rtoggle"]:checked').value === 'dark') {
        	continue;
        }
        map.addLayer({
          "id": layer.name,
          "type": "circle",
          "source": {
            "type": "vector",
            "url": "mapbox://yueruc.6c7u7jru"
          },
          "source-layer": "POI1-dsy5ld",
          "paint": {
            "circle-color": layer.color,
            "circle-stroke-color": "#000000"
          },
          "filter": ["==", "Classification", layer.name]
        });
      }
    });

    var layerList = document.getElementById('mapformat');
    var inputs = layerList.getElementsByTagName('input');

    function switchLayer(layer) {
      var layerId = layer.target.id;
      map.setStyle('mapbox://styles/mapbox/' + layerId);
    }

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].onclick = switchLayer;
    }


  




