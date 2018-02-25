import React, { Component } from 'react';
import propTypes from 'prop-types';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: this.props.stores.features,
      activeStore: this.props.activeStore,
    };

    this.handleSideBarAction = this.handleSideBarAction.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeStore !== this.props.activeStore) {
      this.setState({ activeStore: nextProps.activeStore });
    }
  }

  handleSideBarAction(event, store, prop) {
    const { type, key } = event;

    if (type === 'click' || (type === 'keypress' && key === 'Enter')) {
      const { handleListingClick } = this.props;
      handleListingClick(store);
      this.setState({ activeStore: prop.address });
    }
  }

  buildLocationList() {
    const { stores, activeStore } = this.state;

    return stores.map((store, i) => {
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

SideBar.defaultProps = {
  handleListingClick: () => { console.log('awaiting handleListingClick'); },
};

SideBar.propTypes = {
  activeStore: propTypes.string.isRequired,
  handleListingClick: propTypes.func,
  stores: propTypes.object.isRequired,
};

export default SideBar;
