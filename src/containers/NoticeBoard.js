import { connect } from 'react-redux';
import NoticeBoard from '../components/NoticeBoard';

function mapReduxStateToReactProps(state) {
  return {
    articles: state.articles,
    token: state.token,
    nickname: state.nickname,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeArticles: (articles) => {
      dispatch({ type: 'ARTICLES', articles });
    },
    changeCurrentArticle: (curArticle) => {
      dispatch({ type: 'CHANGE_CURRENTARTICLE', article: curArticle });
    },
  };
}
export default connect(
  mapReduxStateToReactProps,
  mapDispatchToProps,
)(NoticeBoard);
