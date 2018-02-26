import { connect } from 'react-redux';
import SideBar from './SideBar';
import { setActiveStore, flyToStore, createPopUp } from '../../actions';

const mapStateToProps = ({ map, stores, activeStore }) => ({
  map,
  stores,
  activeStore,
});

const mapDispatchToProps = dispatch => ({
  setActiveStore: store => dispatch(setActiveStore(store)),
  flyToStore: (map, currentFeature) => dispatch(flyToStore(map, currentFeature)),
  createPopUp: (map, currentFeature) => dispatch(createPopUp(map, currentFeature)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
