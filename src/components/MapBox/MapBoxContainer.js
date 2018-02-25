import { connect } from 'react-redux';
import MapBox from './MapBox';
import { setActiveStore } from '../../actions';

const mapStatToProps = ({ stores }) => ({
  stores,
});

const mapDispatchToProps = dispatch => ({
  setActiveStore: store => dispatch(setActiveStore(store)),
});

export default connect(mapStatToProps, mapDispatchToProps)(MapBox);
