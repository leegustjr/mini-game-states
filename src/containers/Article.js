import { connect } from 'react-redux';
import Article from '../components/Article';

function mapReduxStateToReactProps(state) {
  return {
    article: state.article,
  };
}

export default connect(mapReduxStateToReactProps)(Article);
