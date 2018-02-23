import React, { Component } from 'react';
import mapBoxGl from 'mapbox-gl/dist/mapbox-gl.js';
import { stores } from '../../sweetgreen';

mapBoxGl.accessToken = 'pk.eyJ1IjoianN1bGxpdmFuNSIsImEiOiJjamR6MWc2dmowZDFsMzNtb3RtdTJ3bWR6In0.dNpIQ0o88Vz-eEu2pITqdA';

class MapBox extends Component {
  componentDidMount() {
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
    });
  }

  componentWillUnmount() {
    this.map.remove();
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
