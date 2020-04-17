import { connect } from 'react-redux';
import NoticeBoardLists from '../components/NoticeBoardLists';

function mapReduxStateToReactProps(state) {
  return {
    token: state.token,
    nickname: state.nickname,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeDisplayMode: (displayMode) => {
      dispatch({ type: 'CHANGE_DISPLAYMODE', displayMode });
    },
    changeCurrentArticle: (article) => {
      dispatch({ type: 'CHANGE_CURRENTARTICLE', article });
    },
  };
}

export default connect(
  mapReduxStateToReactProps,
  mapDispatchToProps,
)(NoticeBoardLists);
