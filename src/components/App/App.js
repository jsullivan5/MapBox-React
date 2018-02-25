import React, { Component } from 'react';
import MapBoxContainer from '../MapBox/MapBoxContainer';
import SideBar from '../SideBar/SideBar';
import storesGeoJson from '../../sweetgreenGeoJson';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stores: storesGeoJson,
      activeStore: '',
    };

    this.getChildFunc = this.getChildFunc.bind(this);
    this.getActiveStore = this.getActiveStore.bind(this);
  }

  getChildFunc(func) {
    const formattedName = func.name.replace('bound', '').trim();
    this.setState({ [formattedName]: func });
  }

  getActiveStore(storeAddress) {
    this.setState({ activeStore: storeAddress });
  }

  render() {
    const { stores, handleListingClick, activeStore } = this.state;

    return (
      <div className="App">
        <SideBar
          stores={stores}
          activeStore={activeStore}
          getActiveStore={this.getActiveStore}
          handleListingClick={handleListingClick}
        />
        <MapBoxContainer />
      </div>
    );
  }
}

export default App;
