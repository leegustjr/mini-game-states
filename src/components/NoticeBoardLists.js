import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import './NoticeBoardLists.css';

axios.defaults.withCredentials = true;
class NoticeBoardLists extends Component {
  moveToArticle = () => {
    const { moveToArticle, article } = this.props;
    moveToArticle(article);
  };

  deleteArticle = () => {
    if (this.props.nickname === this.props.article.nickname) {
      const articleID = this.props.article.id;

      axios
        .delete(`http://13.209.41.64:4100/articles/${articleID}`)
        .then((res) => {
          this.props.getArticles();
        })
        .catch((err) => alert(err));
    } else {
      alert('작성자만 글을 삭제할 수 있습니다');
    }
  };

  render() {
    const { article, idx } = this.props;

    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.delete === false) {
      return (
        <tr>
          <th scope="row">{idx}</th>
          <td onClick={this.moveToArticle}>
            <Link to="/Article">{article.title}</Link>
          </td>
          <td>{article.nickname}</td>
          <td>{article.created_at}</td>
        </tr>
      );
    }
    return (
      <tr>
        <th scope="row">{idx}</th>
        <td onClick={this.moveToArticle}>
          <span id="what">
            <Link to="/Article">{article.title}</Link>
          </span>
          <span>
            <button
              id="deleteButton"
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.deleteArticle}
            >
              <span aria-hidden="true">X</span>
            </button>
          </span>
        </td>
        <td>{article.nickname}</td>
        <td>{article.created_at}</td>
      </tr>
    );
  }
}

export default withRouter(NoticeBoardLists);
