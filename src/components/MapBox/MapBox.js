import React, { Component } from 'react';
import mapBoxGl from 'mapbox-gl/dist/mapbox-gl.js';

mapBoxGl.accessToken = 'pk.eyJ1IjoianN1bGxpdmFuNSIsImEiOiJjamR6MWc2dmowZDFsMzNtb3RtdTJ3bWR6In0.dNpIQ0o88Vz-eEu2pITqdA';

class MapBox extends Component {
  constructor(props) {
    super(props);

    this.flyToStore = this.flyToStore.bind(this);
    this.createPopUp = this.createPopUp.bind(this);
    this.handleListingClick = this.handleListingClick.bind(this);
  }

  componentDidMount() {
    const { getActiveStore, getChildFunc, stores } = this.props;

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

    const map = this.map; // weird this binding in click event

    this.map.on('click', (e) => {
      // Query all the rendered points in the view
      const features = map.queryRenderedFeatures(e.point, { layers: ['locations'] });

      if (features.length) {
        var clickedPoint = features[0];
        // 1. Fly to the point
        this.flyToStore(clickedPoint);
        // 2. Close all other popups and display popup for clicked store
        this.createPopUp(clickedPoint);
        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        // var activeItem = document.getElementsByClassName('active');
        // if (activeItem[0]) {
        //   activeItem[0].classList.remove('active');
        // }
        // Find the index of the store.features that corresponds to the clickedPoint that fired the event listener
        const selectedFeature = clickedPoint.properties.address;

        getActiveStore(selectedFeature);
      }
    });

    getChildFunc(this.handleListingClick);
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

    return new mapBoxGl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<h3>Sweetgreen</h3>' +
        '<h4>' + currentFeature.properties.address + '</h4>')
      .addTo(this.map);
  }

  handleListingClick(listing) {
    this.flyToStore(listing);
    this.createPopUp(listing);
  }

  render() {
    return (
      <div
        className="map"
        ref={el => this.mapContainer = el}
        onClick={this.handleMapClick}
      />
    );
  }
}

export default MapBox;
