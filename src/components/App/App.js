import React, { Component } from 'react';
import MapBox from '../MapBox/MapBox';
import SideBar from '../SideBar/SideBar';
import { stores } from '../../sweetgreen';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stores: stores
    }
    this.getChildFunc = this.getChildFunc.bind(this);
    this.addClass = this.addClass.bind(this);
  }

  getChildFunc(func) {
    const formattedName = func.name.replace('bound', '').trim();
    this.setState({ [formattedName]: func });
  }

  render() {
    const { stores, handleListingClick } = this.state;

    return (
      <div className="App">
        <SideBar
          stores={stores}
          handleListingClick={handleListingClick}
        />
        <MapBox
          buildLocationList={this.buildLocationList}
          getChildFunc={this.getChildFunc}
          stores={stores}
        />
      </div>
    );
  }
}

export default App;
