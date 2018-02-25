import React, { Component } from 'react';
import propTypes from 'prop-types';
import mapBoxGl from 'mapbox-gl/dist/mapbox-gl';

mapBoxGl.accessToken = 'pk.eyJ1IjoianN1bGxpdmFuNSIsImEiOiJjamR6MWc2dmowZDFsMzNtb3RtdTJ3bWR6In0.dNpIQ0o88Vz-eEu2pITqdA';

class MapBox extends Component {
  constructor(props) {
    super(props);

    this.handleListingClick = this.handleListingClick.bind(this);
  }

  componentDidMount() {
    const { initializeMap } = this.props;

    this.mapBox = initializeMap(this.mapContainer);
  }

  componentWillUnmount() {
    this.mapBox.remove();
  }

  handleListingClick(listing) {
    const { flyToStore } = this.props;

    flyToStore(this.mapBox, listing);
    this.createPopUp(listing);
  }

  render() {
    return (
      <div
        className="map"
        ref={(el) => { this.mapContainer = el; }}
      />
    );
  }
}

MapBox.propTypes = {
  flyToStore: propTypes.func.isRequired,
  initializeMap: propTypes.func.isRequired,
};

export default MapBox;
