import React, { Component } from 'react';
import mapBoxGl from 'mapbox-gl/dist/mapbox-gl.js';
import { stores } from '../../sweetgreen';

mapBoxGl.accessToken = 'pk.eyJ1IjoianN1bGxpdmFuNSIsImEiOiJjamR6MWc2dmowZDFsMzNtb3RtdTJ3bWR6In0.dNpIQ0o88Vz-eEu2pITqdA';

class MapBox extends Component {
  constructor(props) {
    super(props);

    this.flyToStore = this.flyToStore.bind(this);
    this.createPopUp = this.createPopUp.bind(this);
  }

  componentDidMount() {
    const { buildLocationList, getChildFunc } = this.props;

    this.map = new mapBoxGl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [-77.034084, 38.909671],
      zoom: 14
    });

    // Add the data to your map as a layer
    this.map.on('load', (e) => {
      // Add the data to your map as a layer
      this.map.addLayer({
        id: 'locations',
        type: 'symbol',
        // Add a GeoJSON source containing place coordinates and information.
        source: {
          type: 'geojson',
          data: stores
        },
        layout: {
          'icon-image': 'restaurant-15',
          'icon-allow-overlap': true,
        }
      });

      buildLocationList(stores);
    });

    getChildFunc(this.flyToStore);
    getChildFunc(this.createPopUp);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  flyToStore(currentFeature) {
    this.map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
  }

  createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) { popUps[0].remove(); }

    const popup = new mapBoxGl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<h3>Sweetgreen</h3>' +
        '<h4>' + currentFeature.properties.address + '</h4>')
      .addTo(this.map);
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return <div className="map" ref={el => this.mapContainer = el} />;
  }
}

export default MapBox;
