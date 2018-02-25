import React, { Component } from 'react';
import propTypes from 'prop-types';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: this.props.stores.features,
      activeStore: this.props.activeStore,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeStore !== this.props.activeStore) {
      this.setState({ activeStore: nextProps.activeStore });
    }
  }

  buildLocationList() {
    const { stores, activeStore } = this.state;
    const { handleListingClick } = this.props;

    return stores.map((store, i) => {
      const prop = store.properties
      const { phone } = prop;
      const listingId = 'listing-' + i;

      return (
        <div
          key={listingId}
          className={`item ${prop.address === activeStore ? 'active': ''}`}
          onClick={() => {
            handleListingClick(store);
            this.setState({ activeStore: prop.address });
          }}
        >
          <a className="title" data-position={i}>
            {prop.address}
          </a>
          <div>
            {prop.city} {phone && ' : ' + prop.phoneFormatted}
          </div>
        </div>
      );
    });
  }

  render() {
    const locationNodes = this.buildLocationList();

    return (
      <div className='sidebar pad2'>
        <div className='heading'>
          <h1>Our locations</h1>
          <div className="listings">
            {locationNodes.length > 0 && locationNodes}
          </div>
        </div>
        <div id='listings' className='listings'></div>
      </div>
    );
  }
}

SideBar.propTypes = {
  activeStore: propTypes.string.isRequired,
  handleListingClick: propTypes.func.isRequired,
  stores: propTypes.object.isRequired,
};

export default SideBar;
