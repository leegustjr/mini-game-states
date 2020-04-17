import { connect } from 'react-redux';
import Article from '../components/Article';

function mapReduxStateToReactProps(state) {
  return {
    article: state.article,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeDisplayMode: (displayMode) => {
      dispatch({ type: 'CHANGE_DISPLAYMODE', displayMode });
    },
    changeCurrentArticle: (curArticle) => {
      dispatch({ type: 'CHANGE_CURRENTARTICLE', article: curArticle });
    },
  };
}

export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Article);
