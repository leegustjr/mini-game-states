import { connect } from 'react-redux';
import NoticeBoardLists from '../components/NoticeBoardLists';

function mapReduxStateToReactProps(state) {
  return {
    token: state.token,
    nickname: state.nickname,
  };
}

export default connect(mapReduxStateToReactProps)(NoticeBoardLists);
