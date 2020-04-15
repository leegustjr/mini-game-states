import { connect } from 'react-redux';
import Main from '../components/Main';

function mapReduxStateToReactProps(state) {
  return {
    displayMode: state.displayMode,
  };
}
export default connect(mapReduxStateToReactProps)(Main);
