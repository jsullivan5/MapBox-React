import React, { Component } from 'react';
import propTypes from 'prop-types';

class MapBox extends Component {
  componentDidMount() {
    const { initializeMap } = this.props;
    this.mapBox = initializeMap(this.mapContainer);
  }

  componentWillUnmount() {
    this.mapBox.remove();
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
  initializeMap: propTypes.func.isRequired,
};

export default MapBox;
