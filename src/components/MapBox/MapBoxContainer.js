import { connect } from 'react-redux';
import MapBox from './MapBox';
import { setActiveStore, flyToStore } from '../../actions';

const mapStatToProps = ({ stores }) => ({
  stores,
});

const mapDispatchToProps = dispatch => ({
  setActiveStore: store => dispatch(setActiveStore(store)),
  flyToStore: (map, currentFeature) => dispatch(flyToStore(map, currentFeature)),
});

export default connect(mapStatToProps, mapDispatchToProps)(MapBox);
