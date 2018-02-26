import { connect } from 'react-redux';
import MapBox from './MapBox';
import { setActiveStore, flyToStore, createPopUp, initializeMap } from '../../actions';

const mapStatToProps = ({ stores }) => ({
  stores,
});

const mapDispatchToProps = dispatch => ({
  setActiveStore: store => dispatch(setActiveStore(store)),
  flyToStore: (map, currentFeature) => dispatch(flyToStore(map, currentFeature)),
  createPopUp: (map, currentFeature) => dispatch(createPopUp(map, currentFeature)),
  initializeMap: mapContainer => dispatch(initializeMap(mapContainer)),
});

export default connect(mapStatToProps, mapDispatchToProps)(MapBox);
