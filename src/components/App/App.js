import React, { Component } from 'react';
import MapBox from '../MapBox/MapBox';
import SideBar from '../SideBar/SideBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      locationNodes: [],
    }
    this.buildLocationList = this.buildLocationList.bind(this);
    this.getChildFunc = this.getChildFunc.bind(this);
  }

  buildLocationList(data) {
    const { flyToStore, createPopUp } = this.state;

    const locationNodes = data.features.map((feature, i) => {
      const prop = feature.properties
      const { phone } = prop;

      return (
        <div key={'listing-' + i} className="item">
          <a className="title" data-position={i}
            onClick={() => flyToStore(feature)}
          >
            {prop.address}
          </a>
          <div>
            {prop.city} {phone && ' : ' + prop.phoneFormatted}
          </div>
        </div>
      );
    });

    this.setState({ locationNodes });
  }

  getChildFunc(func) {
    const formattedName = func.name.replace('bound', '').trim();
    this.setState({ [formattedName]: func });
  }

  render() {
    const { locationNodes } = this.state;

    return (
      <div className="App">
        <SideBar locationNodes={locationNodes} />
        <MapBox
          buildLocationList={this.buildLocationList}
          getChildFunc={this.getChildFunc}
        />
      </div>
    );
  }
}

export default App;
