import { connect } from 'react-redux';
import WriteArticle from '../components/WriteArticle';

function mapReduxStateToReactProps(state) {
  return {
    nickname: state.nickname,
    token: state.token,
  };
}

export default connect(mapReduxStateToReactProps)(WriteArticle);
