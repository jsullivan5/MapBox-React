import React, { Component } from 'react';
import mapBoxGl from 'mapbox-gl/dist/mapbox-gl.js';

mapBoxGl.accessToken = 'pk.eyJ1IjoianN1bGxpdmFuNSIsImEiOiJjamR6MWc2dmowZDFsMzNtb3RtdTJ3bWR6In0.dNpIQ0o88Vz-eEu2pITqdA';

class MapBox extends Component {
  componentDidMount() {
    this.map = new mapBoxGl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9'
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

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

export default MapBox;
