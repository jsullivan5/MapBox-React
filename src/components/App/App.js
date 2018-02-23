import React, { Component } from 'react';
import MapBox from '../MapBox/MapBox';
import SideBar from '../SideBar/SideBar';
import './App.css';

class App extends Component {
  constructor() {
    this.state = {
      locationNodes: [];
    }
    this.buildLocationList = this.buildLocationList.bind(this);
  }

  buildLocationList(data) {
    const locationNodes = data.features.map((feature, i) => {
      const prop = feature.properties
      const { phone } = prop;

      return (
        <div key={'listing-' + i} className="item">
          <a href="#" className="title" dataPosition={i}>
            {prop.address}
          </a>
          <div>
            <p>{prop.city}</p>
            <p>{phone && ' &middot; ' + prop.phoneFormatted}</p>
          </div>
        </div>
      );
    });

    this.setState({ locationNodes });
  }

  render() {
    const { locationNodes } = this.state;

    return (
      <div className="App">
        <SideBar locationNodes={locationNodes} />
        <MapBox buildLocationList={this.buildLocationList} />
      </div>
    );
  }
}

export default App;
