import React, { Component } from 'react';
import propTypes from 'prop-types';

class SideBar extends Component {
  handleSideBarAction(event, store, prop) {
    const {
      setActiveStore,
      flyToStore,
      createPopUp,
      map,
    } = this.props;
    const { type, key } = event;

    if (type === 'click' || (type === 'keypress' && key === 'Enter')) {
      setActiveStore(prop.address);
      flyToStore(map, store);
      createPopUp(map, store);
    }
  }

  buildLocationList() {
    const { stores, activeStore } = this.props;

    return stores.features.map((store, i) => {
      const prop = store.properties;
      const { phone } = prop;
      const listingId = `listing-${i}`;

      return (
        <div
          key={listingId}
          tabIndex={i}
          role="button"
          className={`item ${prop.address === activeStore ? 'active' : ''}`}
          onClick={event => this.handleSideBarAction(event, store, prop)}
          onKeyPress={event => this.handleSideBarAction(event, store, prop)}
        >
          <h4 className="title">
            {prop.address}
          </h4>
          <div>
            {prop.city} {phone && ` : ${prop.phoneFormatted}`}
          </div>
        </div>
      );
    });
  }

  render() {
    const locationNodes = this.buildLocationList();

    return (
      <aside className="sidebar pad2">
        <div className="heading">
          <h1>Our locations</h1>
        </div>
        <div id="listings" className="listings">
          {locationNodes.length > 0 && locationNodes}
        </div>
      </aside>
    );
  }
}

SideBar.propTypes = {
  activeStore: propTypes.string.isRequired,
  map: propTypes.object.isRequired,
  stores: propTypes.object.isRequired,

  createPopUp: propTypes.func.isRequired,
  flyToStore: propTypes.func.isRequired,
  setActiveStore: propTypes.func.isRequired,
};

export default SideBar;
