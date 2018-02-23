import React, { Component } from 'react';

class SideBar extends Component {

  render() {
    const { locationNodes } = this.props;

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

export default SideBar;
