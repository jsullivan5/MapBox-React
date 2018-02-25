import { connect } from 'react-redux';
import MapBox from './MapBox';

const mapStatToProps = ({ stores }) => ({
  stores,
});

export default connect(mapStatToProps, null)(MapBox);
