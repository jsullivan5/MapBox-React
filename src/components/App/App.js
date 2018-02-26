import React from 'react';
import MapBoxContainer from '../MapBox/MapBoxContainer';
import SideBarContainer from '../SideBar/SideBarContainer';

const App = () => (
  <main className="App">
    {/* <SideBar
          stores={stores}
          activeStore={activeStore}
          getActiveStore={this.getActiveStore}
          handleListingClick={handleListingClick}
        /> */}
    <SideBarContainer />
    <MapBoxContainer />
  </main>
);


export default App;
