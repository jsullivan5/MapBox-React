import React, { Component } from 'react';

class SideBar extends Component {

  render() {
    return (
      <div className='sidebar pad2'>
        <div className='heading'>
          <h1>Our locations</h1>
        </div>
        <div id='listings' className='listings'></div>
      </div>
    );
  }
}

export default SideBar;
