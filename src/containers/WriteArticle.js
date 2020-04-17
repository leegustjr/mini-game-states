import { connect } from 'react-redux';
import WriteArticle from '../components/WriteArticle';

function mapReduxStateToReactProps(state) {
  return {
    nickname: state.nickname,
    token: state.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeDisplayMode: (displayMode) => {
      dispatch({ type: 'CHANGE_DISPLAYMODE', displayMode });
    },
  };
}

export default connect(
  mapReduxStateToReactProps,
  mapDispatchToProps,
)(WriteArticle);
