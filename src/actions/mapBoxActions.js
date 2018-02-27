import mapBoxGl from 'mapbox-gl/dist/mapbox-gl';
import stores from '../sweetgreenGeoJson';
import environment from '../environment';
import { setActiveStore, setMap } from './actions';

mapBoxGl.accessToken = environment.accessToken;

export const flyToStore = (map, currentFeature) => (
  () => {
    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15,
    });
  }
);

export const createPopUp = (map, currentFeature) => (
  () => {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) { popUps[0].remove(); }

    return new mapBoxGl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(`
        <h3>Sweetgreen</h3>
        <h4>${currentFeature.properties.address}</h4>
      `)
      .addTo(map);
  }
);

export const initializeMap = mapContainer => (
  (dispatch) => {
    const mapBox = new mapBoxGl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-77.034084, 38.909671],
      zoom: 14,
    });

    // Add the data to your map as a layer
    mapBox.on('load', () => {
      // Add the data to your map as a layer
      mapBox.addLayer({
        id: 'locations',
        type: 'symbol',
        // Add a GeoJSON source containing place coordinates and information.
        source: {
          type: 'geojson',
          data: stores,
        },
        layout: {
          'icon-image': 'restaurant-15',
          'icon-allow-overlap': true,
        },
      });
    });

    mapBox.on('click', (e) => {
      // Query all the rendered points in the view
      const features = mapBox.queryRenderedFeatures(e.point, { layers: ['locations'] });

      if (features.length) {
        const clickedPoint = features[0];
        // 1. Fly to the point
        dispatch(flyToStore(mapBox, clickedPoint));
        // 2. Close all other popups and display popup for clicked store
        dispatch(createPopUp(mapBox, clickedPoint));
        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        // var activeItem = document.getElementsByClassName('active');
        // if (activeItem[0]) {
        //   activeItem[0].classList.remove('active');
        // }
        // Find the index of the store.features that corresponds to
        // the clickedPoint that fired the event listener
        const selectedFeature = clickedPoint.properties.address;

        dispatch(setActiveStore(selectedFeature));
      }
    });

    dispatch(setMap(mapBox));

    return mapBox;
  }
);
